import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { SelectedWorks } from './components/SelectedWorks';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <main className="w-full min-h-screen bg-bg selection:bg-[#000000]/30 selection:text-[#000000] relative">
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <AboutSection />
          <ServicesSection />
          <SelectedWorks />
          <ContactSection />
        </main>
      )}
    </>
  );
}

export default App;
