
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import EventsSection from '@/components/EventsSection';
import SponsorsSection from '@/components/SponsorsSection';
import TeamSection from '@/components/TeamSection';
import BrochureSection from '@/components/BrochureSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll effect when clicking on internal links
    const handleScrollToElement = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        event.preventDefault();
        const elementId = anchor.getAttribute('href')?.substring(1);
        if (elementId) {
          const element = document.getElementById(elementId);
          if (element) {
            const offset = 80; // Header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleScrollToElement);
    
    return () => {
      document.removeEventListener('click', handleScrollToElement);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <EventsSection />
        <SponsorsSection />
        <TeamSection />
        <BrochureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
