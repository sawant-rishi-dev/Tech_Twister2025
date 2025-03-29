import { ExternalLink } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechGiant Corp', logo: 'linear-gradient(to right, #8A2BE2, #FF00FF)', url: '#' },
    { name: 'Innovate Solutions', logo: 'linear-gradient(to right, #00FFFF, #8A2BE2)', url: '#' },
    // Add other sponsors as needed...
  ];

  return (
    <section id="sponsors" className="py-24 bg-tech-dark">
      <div className="container">
        <h2 className="section-heading text-gradient">Our Sponsors</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          Meet the organizations that make Tech Twister possible
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <a
              href={sponsor.url}
              key={index}
              className="tech-card p-6 flex flex-col items-center justify-center aspect-video hover:scale-105 transition-transform animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-16 h-16 rounded-full mb-3"
                style={{ background: sponsor.logo }}
              ></div>
              <h4 className="text-lg font-bold mb-1">{sponsor.name}</h4>
              <div className="flex items-center text-tech-purple text-xs">
                <span>Visit website</span>
                <ExternalLink size={12} className="ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Commented Section Starts Here */}
      {/* 
      <div className="mt-16 max-w-lg mx-auto text-center">
        <h3 className="text-xl font-display font-bold mb-4 text-gradient">Become a Sponsor</h3>
        <p className="text-white/80 mb-6">
          Interested in becoming a sponsor for Tech Twister 2025? Contact us to explore partnership opportunities and showcase your brand to the tech leaders of tomorrow.
        </p>
        <button className="px-8 py-3 bg-tech-purple hover:bg-tech-pink transition-colors rounded-full text-white font-medium">
          Sponsorship Opportunities
        </button>
      </div> 
      */}
    </section>
  );
};

export default SponsorsSection;