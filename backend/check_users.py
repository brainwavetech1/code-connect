from database import get_supabase
import json

def list_users():
    supabase = get_supabase()
    if not supabase:
        print("Could not connect to Supabase.")
        return

    try:
        response = supabase.table("registrations").select("*").execute()
        
        users = response.data
        print(f"\n--- Found {len(users)} Registrations ---\n")
        
        for user in users:
            print(f"Name:  {user.get('full_name')}")
            print(f"Email: {user.get('email')}")
            print(f"Role:  {user.get('role')}")
            print(f"Time:  {user.get('created_at')}")
            print("-" * 30)

    except Exception as e:
        print(f"Error fetching users: {e}")

if __name__ == "__main__":
    list_users()
