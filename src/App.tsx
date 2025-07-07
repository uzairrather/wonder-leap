import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HighlightsSection } from './components/HighlightsSection';
import { MissionSection } from './components/MissionSection';
import { ChallengeSection } from './components/ChallengeSection';
import { FounderSection } from './components/FounderSection';
import WorkshopsSection from './components/WorkshopsSection';
import { SignupSection } from './components/SignupSection';
import { Footer } from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <HighlightsSection />
        <MissionSection />
        <ChallengeSection />
        <FounderSection />
        <WorkshopsSection />
        <SignupSection />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
