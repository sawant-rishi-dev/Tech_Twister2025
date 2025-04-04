import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-tech-blue pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-gradient">TECH TWISTER</h3>
            <p className="text-white/80 mb-6">
              Where Technology Meets Fiction at Shree Rayeshwar Institute of Engineering and Information Technology's flagship tech festival.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#schedule" className="text-white/80 hover:text-white transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-colors">Team</a>
              </li>
              <li>
                <a href="#brochure" className="text-white/80 hover:text-white transition-colors">Brochure</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-tech-purple mr-3 mt-0.5" />
                <span className="text-white/80">https://ritgoa.ac.in/</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-tech-purple mr-3 mt-0.5" />
                <span className="text-white/80">+91 8237815495 </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-tech-purple mr-3 mt-0.5" />
                <span className="text-white/80">Shree Rayeshwar Institute of Engineering<br />SHIVSHAIL, Karai, Shiroda<br />Goa - 403103</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Follow Us</h3>
            <p className="text-white/80 mb-4">
              Follow us on Instagram for the latest updates regarding Tech Twister 2025:
            </p>
            <a href="https://www.instagram.com/tech_twister2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-tech-purple hover:text-tech-pink transition-colors">
              Instagram Link
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Tech Twister. All rights reserved. Shree Rayeshwar Institute of Engineering and IT.
          </p>
          <div className="flex items-center">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors mr-6">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors mr-6">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-tech-purple/20 flex items-center justify-center hover:bg-tech-purple transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;