import { Phone } from 'lucide-react';

const TeamSection = () => {
  // Core Team members
  const coreTeam = [
    {
      name: 'Yash Naik',
      role: 'Head Coordinator',
      image: '/background-uploads/Yash.png',
      contact: '+91 89991 60245',
    },
    {
      nname: 'Vikrant Phadte',
      role: 'Head  Coordinator',
      image: '/background-uploads/vikrant.png',
      contact: '+91 98909 25524',
    },
    {
      name: 'Pappu Bind',
      role: 'Technical Secretary',
      image: '/background-uploads/pappu.png',
      contact: '+91 82378 15495',
    },
    {
      name: 'Tanaya Bandodkar',
      role: 'General Secretary',
      image: '/background-uploads/Tanya Bandodkar.png',
      contact: '+91 87884 91169',
    },
    {
      name: 'Mr. Saiesh Prabhu Verlekar',
      role: 'Faculty Coordinator',
      image: '/background-uploads/Saiesh sir.png',
      contact: '+91 87884 91169',
    },
  ];

  // OrganizingTeam members
  const organizingTeam = [
    {
      name: 'Gauraksha Naik',
      image: '/background-uploads/Gauraksha Naik .png',
      contact: '+91 96575 13508',
    },
    {
      name: 'Samuel',
      image: '/background-uploads/Samuel.png',
      contact: '+91 76206 29160',
    },
    {
      name: 'Pratham Banbodkar',
      image: '/background-uploads/pratham.png',
      contact: '+91 8263817198',
    },
  ];

  // Designing Team members
  const designTeam = [
    {
      name: 'Jonas Vaz',
      image: '/background-uploads/Jonas Vaz.png',
    },
    {
      name: 'Lincoln Serrao',
      image: '/background-uploads/Lincoln Serrao.png',
    },
    {
      name: 'Tanaya Bandodkar',
      image: '/background-uploads/Tanya Bandodkar.png',
    },
    {
      name: 'Vikrant Phadte',
      image: '/background-uploads/vikrant.png',
    },
  ];

  // Marketing Team members
  const marketTeam = [
    {
      name: 'Anushka Gaikwad',
      image: '/background-uploads/Anushka Gaikwad.png',
    },
    {
      name: 'Arthi Singh',
      image: '/background-uploads/Arthi Singh.png',
    },
    {
      name: 'Dishank kamat',
      image: '/background-uploads/Dishank kamat.png',
    },
  ];
// Web Dev Team members
  const websiteTeam = [
    {
      name: 'Rishi M Sawant',
      role: 'Web Development Lead',
      image: '/background-uploads/Rishi.png',
      contact: '+91 7219570353',
    },
    {
      name: 'Pappu Bind',
      role: 'Web Development',
      image: '/background-uploads/pappu.png',
      contact: '+91 82378 15495',
    },
    {
      name: 'Mohit kumar',
      role: 'Web Development ',
      image: '/background-uploads/mohit.png',
      contact: '+91 7219570353',
    },
    
  ];
  /**
   * Helper function to render a team's grid.
   * Accepts a team array, an optional gridClass to specify the layout,
   * and a boolean showContact to control whether to display contact details.
   */
  const renderTeamGrid = (
    team,
    gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto",
    showContact = true
  ) => (
    <div className={gridClass}>
      {team.map((member, index) => (
        <div
          key={index}
          className="tech-card p-4 flex flex-col items-center text-center animate-slide-up"
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div className="w-20 h-20 rounded-full mb-3 glow">
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
          {member.role && (
            <p className="text-tech-purple font-medium mb-2">{member.role}</p>
          )}
          {member.contact && showContact && (
            <div className="flex items-center justify-center text-sm">
              <Phone size={16} className="text-tech-purple mr-2" />
              <span>{member.contact}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="team" className="py-24 bg-section-gradient">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-heading text-gradient text-center">
          Meet Our Team
        </h2>
        <div className="section-subheading max-w-3xl mx-auto text-center mb-12">
          The minds behind Tech Twister 2025
        </div>
  
        {/* Core Team */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Core Team
        </h3>
        {renderTeamGrid(coreTeam, "grid grid-cols-5 gap-4 max-w-5xl mx-auto")}
  
        {/* OrganizingTeam */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Organizing Team
        </h3>
        {renderTeamGrid(organizingTeam,"grid grid-cols-3 gap-1 max-w-5xl mx-auto", false)}

        {/* Designing Team */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Designing Team
        </h3>
        {renderTeamGrid(designTeam, "grid grid-cols-4 gap-1 max-w-5xl mx-auto", false)}

        {/* Marketing Team */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Marketing Team
        </h3>
        {renderTeamGrid(marketTeam, "grid grid-cols-3 sm:grid-cols-3 gap-8 max-w-4xl mx-auto", false)}
  
        {/* Web Dev Team - moved to the end */}
        <h3 className="text-center text-xl font-display font-bold mt-12 mb-8 text-gradient">
          Web Dev Team
        </h3>
        {renderTeamGrid(websiteTeam,"grid grid-cols-3 sm:grid-cols-3 gap-8 max-w-4xl mx-auto", false)}
  
        {/* Support Text */}
        <div className="mt-16 max-w-lg mx-auto text-center">
          <p className="text-white/80">
            Supported by 50+ student volunteers from various departments of
            Shree Rayeshwar Institute of Engineering and Information Technology,
            working together to make Tech Twister 2025 a grand success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;