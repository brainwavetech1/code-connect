from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from database import get_supabase

# Load environment variables
load_dotenv()

# Email Config
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")

app = FastAPI(
    title="BrainWave Code & Connect API",
    description="Backend API for the Code & Connect event",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---
class RegistrationRequest(BaseModel):
    full_name: str = Field(..., min_length=2, description="Full name of the attendee")
    email: EmailStr = Field(..., description="Email address")
    role: str = Field(..., description="Role (Developer, Student, etc.)")
    phone: Optional[str] = Field(None, description="Phone number")

class RegistrationResponse(BaseModel):
    id: str
    status: str
    message: str

# --- Helper Functions ---
def send_welcome_email(to_email: str, name: str):
    """
    Sends a welcome email using Gmail SMTP.
    """
    if not EMAIL_USER or not EMAIL_PASSWORD:
        print(f"[MOCK EMAIL - No Credentials] To: {to_email}")
        return

    try:
        msg = MIMEMultipart()
        msg['From'] = f"BrainWave Team <{EMAIL_USER}>"
        msg['To'] = to_email
        msg['Subject'] = "You're In! Welcome to BrainWave Code & Connect"

        html_content = f"""
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px; border-radius: 10px;">
            <h1 style="color: #646cff;">Welcome to Code & Connect! 🚀</h1>
            <p>Hi <strong>{name}</strong>,</p>
            <p>Your spot for <strong>BrainWave Code & Connect — Edition 1</strong> is officially confirmed.</p>
            <p>We are thrilled to have you join us for a day of coding, connection, and inspiration in Kigali.</p>
            <hr style="border: 1px solid #333;" />
            <p><strong>Date:</strong> March 15, 2025<br />
            <strong>Location:</strong> Kigali, Rwanda</p>
            <hr style="border: 1px solid #333;" />
            <p>See you there!</p>
            <p style="color: #888; font-size: 12px;">BrainWave Technologies</p>
        </div>
        """
        
        msg.attach(MIMEText(html_content, 'html'))

        # Connect to Gmail SMTP
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        print(f"Email sent successfully to {to_email}")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

# --- Endpoints ---

@app.get("/", tags=["Health"])
async def root():
    """Health check endpoint to verify backend is running."""
    return {
        "status": "ok",
        "message": "BrainWave Code & Connect API is running"
    }

@app.post("/api/register", response_model=RegistrationResponse, tags=["Registration"])
async def register_attendee(request: RegistrationRequest, background_tasks: BackgroundTasks):
    """
    Registers a new attendee for the event.
    Saves to Supabase 'registrations' table and checks/inserts users.
    """
    supabase = get_supabase()
    
    if not supabase:
        raise HTTPException(status_code=503, detail="Database connection unavailable")

    try:
        # 1. Check if email already exists
        existing = supabase.table("registrations").select("id").eq("email", request.email).execute()
        if existing.data:
             raise HTTPException(status_code=400, detail="Email already registered")
        
        # 2. Insert new registration
        data = {
            "full_name": request.full_name,
            "email": request.email,
            "role": request.role,
            "phone": request.phone,
            "event_edition": "Edition 1",
            "status": "confirmed"
        }
        
        result = supabase.table("registrations").insert(data).execute()
        
        if not result.data:
             raise HTTPException(status_code=500, detail="Failed to create registration")

        new_reg = result.data[0]
        
        # 3. Send Email in Background
        background_tasks.add_task(send_welcome_email, request.email, request.full_name)

        return {
            "id": new_reg.get("id"),
            "status": "confirmed",
            "message": "Registration successful! Welcome to Code & Connect."
        }

    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        print(f"Error during registration: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
