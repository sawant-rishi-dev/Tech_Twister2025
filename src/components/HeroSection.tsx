import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Adjust for fixed headers or offsets
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/80 to-tech-blue/50"></div>

      {/* Animated decorative elements */}
      <div className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full bg-tech-purple/30 blur-xl animate-pulse-glow hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-tech-pink/20 blur-xl animate-pulse-glow hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/5 w-24 h-24 rounded-full bg-tech-cyan/20 blur-xl animate-pulse-glow hidden lg:block"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto animate-scale-up">
          <p className="text-sm md:text-base text-white/80 mb-2 font-medium">
            SHREE RAYESHWAR INSTITUTE OF ENGINEERING AND INFORMATION TECHNOLOGY
          </p>
          <p className="text-xs md:text-sm text-white/60 mb-6">
            STUDENT'S COUNCIL 2024-25 PRESENTS
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-gradient">
            TECH TWISTER 2025
          </h1>

          <p className="text-xl md:text-2xl font-display font-bold mb-8">
            <span className="text-white">9</span>
            <sup className="text-xs text-white">TH</sup>
            <span className="text-white mx-2">AND</span>
            <span className="text-white">10</span>
            <sup className="text-xs text-white">TH</sup>
            <span className="text-white ml-2">APRIL 2025</span>
          </p>

          {/* Only "Register Now" button remains */}
          <button
            className="ml-4 px-6 py-2 rounded-full bg-tech-purple hover:bg-tech-pink transition-colors duration-300 font-medium text-white"
            onClick={() => scrollToSection('events')}
          >
            Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;