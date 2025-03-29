import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Desired link for redirection when "Register Now" is clicked.
  const registerNowLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSebc-s1ddiz6N-JpSLilGwiDjIn2FYmhA-uNt8wWjhrEcFSgw/closedform"; // Replace with your desired URL

  // Function to handle the "Register Now" redirection
  const handleRegisterNow = () => {
    window.location.href = registerNowLink;
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'team', label: 'Team' },
    { id: 'brochure', label: 'Brochure' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tech-blue/80 backdrop-blur-md shadow-lg shadow-tech-purple/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-2xl font-display font-bold text-gradient">
            TECH TWISTER
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="px-4 py-2 font-medium text-white hover:text-tech-pink transition-colors duration-300"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="ml-4 px-6 py-2 rounded-full bg-tech-purple hover:bg-tech-pink transition-colors duration-300 font-medium text-white"
            onClick={handleRegisterNow}
          >
            Register Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tech-blue/95 backdrop-blur-md shadow-lg shadow-tech-purple/10">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="px-4 py-2 font-medium text-white hover:text-tech-pink transition-colors duration-300 text-left"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="px-6 py-2 rounded-full bg-tech-purple hover:bg-tech-pink transition-colors duration-300 font-medium text-white w-full mt-4"
              onClick={handleRegisterNow}
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;