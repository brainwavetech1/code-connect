import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expectations } from './components/Expectations';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { PoweredBy } from './components/PoweredBy';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expectations />
        <Schedule />
        <Registration />
        <PoweredBy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
