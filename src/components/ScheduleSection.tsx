
import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const dayOneSchedule = [
    {
      time: '9.30AM - 10:00 AM',
      event: 'Registration & Check-in',
      location: 'Main Entrance',
      description: 'Check-in and receive your event schedule.'
    },
    {
      time: '10:00 AM - 10:30 AM',
      event: 'Inauguration Ceremony',
      location: 'Seminar Hall',
      description: 'Official inauguration of Tech Twister 2025 with keynote speeches from distinguished guests and institute leadership.'
    },
    {
      time: '10:00 AM - 5:00 PM',
      event: 'All the events starts',
      location: 'CFT-05',
      description: 'The cybersecurity competition begins. Teams compete to find and exploit vulnerabilities in provided systems.'
    },
    // {
    //   time: '10:00 AM - 5:00 PM',
    //   event: 'Web-A-Thon - Round 1',
    //   location: 'not decided',
    //   description: 'First round of the 24-hour web development marathon where teams create web applications based on the provided theme.'
    // },
    {
      time: '12:30 PM - 01:30 PM',
      event: 'Lunch Break',
      location: 'Canteen',
      description: 'Networking lunch for all participants and guests.'
    },
    {
      time: '01:30 PM - 06:00 PM',
      event: 'event continues',
      location: 'Seminar Hall',
      description: 'Industry experts share insights on emerging technologies and career opportunities.'
    },
    // {
    //   time: '04:00 PM - 06:00 PM',
    //   event: 'Prompt Fusion Workshop',
    //   location: 'AI Lab',
    //   description: 'Learn the art of crafting effective prompts for generative AI systems.'
    // },
    // {
    //   time: '06:30 PM - 08:30 PM',
    //   event: 'E-Sports Tournament - Day 1',
    //   location: 'Gaming Arena',
    //   description: 'Competitive gaming tournament featuring popular titles. Preliminary rounds begin.'
    // },
    // {
    //   time: '09:00 PM - Late',
    //   event: 'Hackathon Continues',
    //   location: 'Innovation Hub',
    //   description: 'Teams continue working on their 24-hour hackathon projects with mentorship opportunities throughout the night.'
    // }
  ];
  
  const dayTwoSchedule = [
    {
      time: '9.30AM - 10:00 AM',
      event: ' Check-in',
      location: 'Main Entrance',
      description: 'Check-in and receive your event schedule.'
     },
    // {
    //   time: '10:00 AM - 10:30 AM',
    //   event: 'Inauguration Ceremony',
    //   location: 'Seminar Hall',
    //   description: 'Official inauguration of Tech Twister 2025 with keynote speeches from distinguished guests and institute leadership.'
    // },
    {
      time: '12:30 PM - 01:30 PM',
      event: 'Lunch Break',
      location: 'Canteen',
      description: 'Networking lunch for all participants and guests.'
    },
    {
      time: '10:00 AM - 5:00 PM',
      event: 'All the events starts',
      location: 'CFT-05',
      description: 'The cybersecurity competition begins. Teams compete to find and exploit vulnerabilities in provided systems.'
    },
    // {
    //   time: '10:00 AM - 5:00 PM',
    //   event: 'Web-A-Thon - Round 1',
    //   location: 'not decided',
    //   description: 'First round of the 24-hour web development marathon where teams create web applications based on the provided theme.'
    // },
    
    {
      time: '01:30 PM - 06:00 PM',
      event: 'event continues',
      location: 'Seminar Hall',
      description: 'Industry experts share insights on emerging technologies and career opportunities.'
    },
  ];
  
  const scheduleData = activeDay === 1 ? dayOneSchedule : dayTwoSchedule;
  
  return (
    <section id="schedule" className="py-24 bg-tech-dark">
      <div className="container">
        <h2 className="section-heading text-gradient">Event Schedule</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          Plan your Tech Twister experience
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-tech-blue/30 backdrop-blur-sm">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeDay === 1 ? 'bg-tech-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveDay(1)}
            >
              Day 1 (April 9)
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeDay === 2 ? 'bg-tech-purple text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveDay(2)}
            >
              Day 2 (April 10)
            </button>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-tech-purple/30 hidden md:block"></div>
          
          {/* Schedule items */}
          <div className="space-y-8">
            {scheduleData.map((item, index) => (
              <div 
                key={index} 
                className="tech-card p-6 md:pl-24 md:pr-8 md:relative flex flex-col md:flex-row items-start animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Time indicator (visible on md and larger) */}
                <div className="hidden md:flex absolute left-0 top-6 items-center">
                  <div className="w-8 h-8 rounded-full bg-tech-purple flex items-center justify-center glow z-10">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div className="h-0.5 w-12 bg-tech-purple/30"></div>
                </div>
                
                {/* Mobile time display */}
                <div className="flex items-center mb-4 md:hidden">
                  <Clock size={16} className="text-tech-purple mr-2" />
                  <span className="text-sm font-medium text-white/80">{item.time}</span>
                </div>
                
                <div className="md:flex-1">
                  <h3 className="text-xl font-display font-bold mb-2">{item.event}</h3>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  
                  <div className="flex items-center text-sm text-white/70">
                    <div className="flex items-center mr-4">
                      <Clock size={14} className="mr-1" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm">
            Schedule is subject to minor changes. Please check the official instagram page for real-time updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
