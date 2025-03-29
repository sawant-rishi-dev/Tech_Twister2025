import { Phone } from 'lucide-react';

const TeamSection = () => {
  // Core team members
  const coreTeam = [
    {
      name: 'Pappu Bind',
      role: 'Technical Secretary',
      image: '/background-uploads/pappu.png', // Using an image URL
      contact: '+91 82378 15495',
    },
    {
      name: 'Tanya Bandodkar',
      role: 'General Secretary',
      image: '/background-uploads/Tanya Bandodkar.png',
      contact: '+91 87884 91169',
    },
    {
      name: 'Mr. Saiesh Prabhu Verlekar ',
      role: 'Faculty Coordinator',
      image: '/background-uploads/Saiesh sir.png',
      contact: '+91 87884 91169',
    },
  ];

  // Organizers
  const organizers = [
    {
      name: 'Vikrant Phadte',
      role: 'Head Coordinator',
      contact: '+91 98909 25524',
      image: '/background-uploads/vikrant.png', // Using an image URL
    },
    {
      name: 'Yash Naik',
      role: 'Head Coordinator',
      contact: '+91 89991 60245',
      image: '/background-uploads/Yash.png', // Using an image URL
    },
    {
      name: 'Rishi M Sawant',
      role: 'Web Development Lead',
      contact: '+91 7219570353',
      image: '/background-uploads/Rishi.png', // Using an image URL
    },
  ];

  return (
    <section id="team" className="py-24 bg-section-gradient">
      <div className="container">
        {/* Team Section Heading */}
        <h2 className="section-heading text-gradient">Meet Our Team</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          The minds behind Tech Twister 2025
        </div>

        {/* Core Organizers */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Core Organizers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="tech-card p-6 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-24 h-24 rounded-full mb-4 glow">
                {member.image.includes('linear-gradient') ? (
                  <div
                    style={{
                      background: member.image,
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <img
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    className="rounded-full w-full h-full"
                  />
                )}
              </div>
              <h4 className="text-xl font-display font-bold">{member.name}</h4>
              <p className="text-tech-purple font-medium mb-4">{member.role}</p>

              <div className="space-y-2 w-full">
                <div className="flex items-center justify-center text-sm">
                  <Phone size={16} className="text-tech-purple mr-2" />
                  <span>{member.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee */}
        <h3 className="text-center text-xl font-display font-bold mt-16 mb-8 text-gradient">
          Organizing Committee
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {organizers.map((member, index) => (
            <div
              key={index}
              className="tech-card p-4 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 rounded-full mb-3">
                {member.image.includes('linear-gradient') ? (
                  <div
                    style={{
                      background: member.image,
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <img
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    className="rounded-full w-full h-full"
                  />
                )}
              </div>
              <h4 className="text-lg font-display font-bold">{member.name}</h4>
              <p className="text-tech-purple text-sm">{member.role}</p>
              {/* New: Display Contact Information */}
              <div className="flex items-center justify-center text-sm mt-2">
                <Phone size={16} className="text-tech-purple mr-2" />
                <span>{member.contact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Support Text */}
        <div className="mt-16 max-w-lg mx-auto text-center">
          <p className="text-white/80">
            Supported by 50+ student volunteers from various departments of Shree Rayeshwar Institute of Engineering
            and Information Technology, working together to make Tech Twister 2025 a grand success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;