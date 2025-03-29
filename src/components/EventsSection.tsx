import { useState } from 'react';
import { ArrowRight, Users, Clock, Trophy } from 'lucide-react';

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'technical', label: 'Technical' },
    { id: 'coding', label: 'Coding' },
    { id: 'design', label: 'Design' },
    { id: 'gaming', label: 'Gaming' }
  ];

  const events = [
    {
      id: 1,
      title: 'Capture The Flag',
      category: 'technical',
      image: 'linear-gradient(to right, #8A2BE2, #FF00FF)',
      description: 'A cybersecurity competition where participants solve challenges across various domains like web exploitation, cryptography, reverse engineering, and more.',
      teamSize: '2-3 members',
      duration: '10AM to 5PM',
      poolPrize: '₹8,000',
      link: 'https://drive.google.com/file/d/17rKuiVf7CyJ5Ty4-Hvxr5IcygwAzXNbC/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/capturetheflag.png"
              alt="Capture The Flag"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Chakravyuh 3.0',
      category: 'technical',
      image: 'linear-gradient(to right, #FF00FF, #00FFFF)',
      description: 'Navigate through a series of technical challenges in this multi-level contest combining hardware, software, and problem-solving skills.',
      teamSize: '4 members',
      duration: 'whole Day',
      poolPrize: '₹10,000',
      link: 'https://drive.google.com/file/d/1Q16ffJC6rU1EpXY7b_XWoDZmuABRL9l8/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Chakravyuh 3.0.png"
              alt="Chakravyuh 3.0"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Web-A-Thon',
      category: 'coding',
      image: 'linear-gradient(to right, #00FFFF, #8A2BE2)',
      description: 'A 24-hour web development marathon where teams build innovative web applications based on given themes and specifications.',
      teamSize: '2-3 members',
      duration: '10:00 AM to 5:00 PM both days',
      poolPrize: '₹7,500 + internship',
      link: 'https://drive.google.com/file/d/109HD2JQnkx-l6T7htQi5_kwsswdT7Pzy/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Web-A-Thon.png"
              alt="Web-A-Thon"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'ESports-BGMI',
      category: 'gaming',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: ' gaming tournament featuring popular titles like BGMI, and mobile esports. Show your gaming skills and strategy.',
      teamSize: '4',
      duration: '2 days',
      poolPrize: '₹12,000',
      link: 'https://drive.google.com/file/d/1aqTIgopSpgpcvrO2kcabzCyTlJ8-eQzL/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/ESports bgmi.png"
              alt="ESports-BGMI"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'ESports-CS:GO',
      category: 'gaming',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: ' gaming tournament featuring popular titles like CS:GO, and mobile esports. Show your gaming skills and strategy.',
      teamSize: '5+1 substitude',
      duration: '2 days',
      poolPrize: '₹12,000',
      link: 'https://drive.google.com/file/d/1sfxKmnEOUMXbcsd_grLcsXtWd1-ATigH/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/ESports CSGO.png"
              alt="ESports-CS:GO"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Prompt Fusion',
      category: 'technical',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'Participants can engage in various creative and strategic challenges, such as generating the most compelling ideas, solving intricate problems, or crafting the perfect responses with AI tools..',
      teamSize: 'dual',
      duration: '2 days',
      poolPrize: '₹4,500',
      link: 'https://drive.google.com/file/d/1LzLi7nAjBr1cu3-puK6pl0vC6qgDXp0c/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Prompt Fusion.png"
              alt="Prompt Fusion"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: 'Design Spectrum',
      category: 'design',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'Design Spectrum covers diverse design styles, approaches, and disciplines, showcasing creativity and innovation.',
      teamSize: '2-3',
      duration: 'run for 3 hours',
      poolPrize: '₹8,000',
      link: 'https://drive.google.com/file/d/1pqyAM4A32SYwCrbPb6kAu-lKyKGuA2S4/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Design Spectrum.png"
              alt="Design Spectrum"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: 'Tech Hustel',
      category: 'technical',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'Tech Hustal is a tech-focused event promoting innovation, collaboration, and problem-solving in various domains.',
      teamSize: '2',
      duration: 'whole Day',
      poolPrize: '₹20,000',
      link: 'https://drive.google.com/file/d/1BoMYjqZYhZkb0t0Rz51OqYzJ6LaUIoXd/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Tech Hustel.png"
              alt="Tech Hustel"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: 'AI Train X',
      category: 'coding',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'AI Train X is an event where teams build their own LLM models based on given problem statements, with AI-driven elimination and no AI-generated code allowed. ',
      teamSize: '3',
      duration: '2 days',
      poolPrize: '₹10,000',
      link: 'https://drive.google.com/file/d/1aQ5YdfvwALV6nLNcbJG3X5nCPENS_PVF/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/AI.png"
              alt="AI Train X"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: 'Line Follower',
      category: 'technical',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'A Line Follower is a robot that follows a predefined path, usually a black or white line on a contrasting surface, using sensors like IR or vision-based systems.',
      teamSize: '3-4',
      duration: '2 days',
      poolPrize: '₹10,000',
      link: 'https://drive.google.com/file/d/1mB5oJd7zQtWXBWIYaKtd23r6888ihXcS/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Line Follower.png"
              alt="Line Follower"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: 'Shorts Show Down',
      category: 'design',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: '**Shorts Show Down** is a reel-making event where participants create engaging and creative short videos, showcasing sports-related themes, challenges, or performances.',
      teamSize: '3-4',
      duration: '1 day',
      poolPrize: '₹3,000',
      link: 'https://drive.google.com/file/d/1V37Y8NIbiF19W99wNv-A5TNO6cHSAcvl/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/sports Show Down.png"
              alt="Shorts Show Down"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: 'Proyecto',
      category: 'coding',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'The Project Display Event serves as an engineering showcase where participants present innovative projects through models or prototypes.',
      teamSize: '2-5',
      duration: 'whole day 1',
      poolPrize: '₹12,000',
      link: 'https://drive.google.com/file/d/1ZaxSa6LH77eHJUiJc7daktMJKRWNea5X/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Proyecto.png"
              alt="Proyecto"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: 'Click Craza',
      category: 'technical',
      image: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
      description: 'Click Craza is a competition where participants showcase their photography skills by capturing creative, high-quality images based on a specific theme or challenge.',
      teamSize: 'solo',
      duration: '11:00 AM - 3:00 PM',
      poolPrize: '₹1,500',
      link: 'https://drive.google.com/file/d/1LPvpVpcmODv0x-EAGHNy8JilYdATGRWA/view?usp=drive_link',
      icon: (
        <div
          style={{
            width: '700px',
            height: '150px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #8A2BE2, #FF00FF)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%'
            }}
          >
            <img
              src="/background-uploads/Click Craza.png"
              alt="Click Craza"
              style={{
                width: '100%',
                height: '168%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )
    },
  ];

  const filteredEvents = activeCategory === 'all'
    ? events
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="events" className="py-24 bg-section-gradient">
      <div className="container">
        <h2 className="section-heading text-gradient">Events & Competitions</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          Showcase your skills and win exciting prizes
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="inline-flex p-1 rounded-full bg-tech-blue/30 backdrop-blur-sm">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id ? 'bg-tech-purple text-white' : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="tech-card overflow-hidden flex flex-col h-full animate-scale-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div
                className="h-32 flex items-center justify-center p-6"
                style={{ background: event.image }}
              >
                <span className="text-4xl">{event.icon}</span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold mb-3">{event.title}</h3>
                <p className="text-white/80 mb-4 flex-1">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Users size={16} className="text-tech-purple mr-2" />
                    <span>{event.teamSize}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock size={16} className="text-tech-purple mr-2" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Trophy size={16} className="text-tech-purple mr-2" />
                    <span>Pool Prize: {event.poolPrize}</span>
                  </div>
                </div>

                <button className="flex items-center justify-center mt-auto w-full py-3 border border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white transition-colors rounded-lg group">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <span>MORE INFO</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="">
            {/* View All Events */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
