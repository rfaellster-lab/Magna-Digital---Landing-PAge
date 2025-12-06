import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Benefits />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;