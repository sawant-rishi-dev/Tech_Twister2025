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
    {
      name: 'Vikrant Phadte',
      role: 'Head Coordinator',
      contact: '+91 98909 25524',
      image: '/background-uploads/vikrant.png',
    },
      {
     name: 'Yash Naik',
     role: 'Head Coordinator',
     contact: '+91 89991 60245',
     image: '/background-uploads/Yash.png',
      },
  ];

  // Website Team
  const websiteTeam = [
    {
      name: 'Rishi M Sawant',
      role: 'Web Development Lead',
      contact: '+91 7219570353',
      image: '/background-uploads/Rishi.png',
    },
  ];

  // Organizing Team members
  const organizingTeam = [
    {
      name: 'Organizing Member 1',
      role: 'Event Coordinator',
      image: '/background-uploads/organizing1.png',
      contact: '+91 90000 11111',
    },
    {
      name: 'Organizing Member 2',
      role: 'Logistics Manager',
      image: '/background-uploads/organizing2.png',
      contact: '+91 90000 22222',
    },
    {
      name: 'Organizing Member 3',
      role: 'Volunteer Coordinator',
      image: '/background-uploads/organizing3.png',
      contact: '+91 90000 33333',
    },
  ];

  // Design Team members
  const designTeam = [
    {
      name: 'Unknown 1',
      role: 'Design Team Member',
      image: '/background-uploads/unknown.png',
      contact: 'N/A',
    },
    {
      name: 'Unknown 2',
      role: 'Design Team Member',
      image: '/background-uploads/unknown.png',
      contact: 'N/A',
    },
    {
      name: 'Unknown 3',
      role: 'Design Team Member',
      image: '/background-uploads/unknown.png',
      contact: 'N/A',
    },
  ];

  // Market Team members
  const marketTeam = [
    {
      name: 'Alice Johnson',
      role: 'Marketing Lead',
      image: '/background-uploads/market1.png',
      contact: '+91 12345 67890',
    },
    {
      name: 'Bob Smith',
      role: 'Social Media Strategist',
      image: '/background-uploads/market2.png',
      contact: '+91 09876 54321',
    },
    {
      name: 'Charlie Davis',
      role: 'Content Creator',
      image: '/background-uploads/market3.png',
      contact: '+91 11223 44556',
    },
  ];

  // Merge all teams (except Core Team) into one array
  const otherTeam = [
    ...websiteTeam,
    ...organizingTeam,
    ...designTeam,
    ...marketTeam,
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

        {/* Other Team Members (merged teams) */}
        <h3 className="text-center text-xl font-display font-bold mt-16 mb-8 text-gradient">
          Team Members
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {otherTeam.map((member, index) => (
            <div
              key={index}
              className="tech-card p-2 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-full mb-2">
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
              <h4 className="text-sm font-display font-bold">{member.name}</h4>
              <p className="text-[10px] text-tech-purple">{member.role}</p>
              <div className="flex items-center justify-center text-[10px] mt-1">
                <Phone size={14} className="text-tech-purple mr-1" />
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