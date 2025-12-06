import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProof from './components/SocialProof';
import ExitIntentModal from './components/ExitIntentModal';

const App: React.FC = () => {
  return (
    <>
      <BackgroundParticles />
      {/* CustomCursor Removed for native experience */}
      
      <Navbar />
      
      <main>
        <Hero />
        <TechStack />
        <Benefits />
        <BeforeAfter />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      
      {/* Overlay Components */}
      <FloatingWhatsApp />
      <SocialProof />
      <ExitIntentModal />
    </>
  );
};

export default App;