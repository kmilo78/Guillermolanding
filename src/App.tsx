import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FamilyCare from './components/FamilyCare';
import BilingualCare from './components/BilingualCare';
import Authority from './components/Authority';
import HowItWorks from './components/HowItWorks';
import Treatments from './components/Treatments';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'es';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FamilyCare />
      <BilingualCare />
      <Authority />
      <HowItWorks />
      <Treatments />
      <ContactForm />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
