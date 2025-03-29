import { useState } from "react";
import { Info, Calendar, MapPin, Users } from "lucide-react";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="about" className="py-24 bg-section-gradient">
      <div className="container">
        <h2 className="section-heading text-gradient">About Tech Twister</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          Where Innovation Meets Entertainment
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div
            className="tech-card p-8 flex flex-col h-full animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4">
                <Info className="text-tech-purple" />
              </div>
              {/* Clickable "Event Overview" */}
              <h3
                className="text-xl font-display font-bold cursor-pointer hover:text-tech-pink"
                onClick={openModal}
              >
                Event Overview
              </h3>
            </div>
            <p className="text-white/80 mb-6">
              Tech Twister is Shree Rayeshwar Institute's flagship technical
              festival, bringing together the brightest minds in engineering and
              technology. What started as a small departmental event has grown
              into one of Goa's most anticipated tech festivals.
            </p>
            <p className="text-white/80">
              In its 2025 edition, we explore the fascinating intersection where
              cutting-edge technology meets fictional possibilities, pushing
              the boundaries of innovation through competitive challenges,
              workshops, and exhibitions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              className="tech-card p-6 flex items-start animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4 shrink-0">
                <Calendar className="text-tech-purple" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-2">
                  Event Date
                </h3>
                <a
                  href="https://calendar.google.com/calendar/u/0/r/day/2025/4/9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline"
                >
                  9th and 10th April, 2025
                </a>
                <p className="text-white/60 text-sm mt-1">
                  48 hours of tech activities
                </p>
              </div>
            </div>

            <div
              className="tech-card p-6 flex items-start animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4 shrink-0">
                <MapPin className="text-tech-purple" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-2">Venue</h3>
                <a
                  href="https://www.google.com/maps?q=Shree+Rayeshwar+Institute+Campus,+Shivrai,+Shiroda,+Goa+-+403103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline"
                >
                  Shree Rayeshwar Institute Campus
                </a>
                <p className="text-white/60 text-sm mt-1">
                  Shivrai, Shiroda, Goa - 403103
                </p>
              </div>
            </div>

            <div
              className="tech-card p-6 flex items-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center mr-4 shrink-0">
                <Users className="text-tech-purple" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-2">
                  Participants
                </h3>
                <p className="text-white/80">
                  Open to all college students across Goa
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Expected attendance: 300+ participants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-gradient">
            Our Vision
          </h3>
          <p className="text-white/80">
            Tech Twister aims to create a platform where students can showcase
            their technical prowess, learn from industry experts, and network
            with like-minded individuals. We believe in fostering an environment
            that encourages innovation, collaboration, and the practical
            application of theoretical knowledge.
          </p>
        </div>
      </div>

      {/* Modal Implementation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-tech-dark p-12 rounded-lg max-w-2xl w-full text-white relative"
            style={{ minHeight: "400px" }}
          >
            <button
              className="absolute top-4 right-4 text-white/100 hover:text-white focus:outline-none"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-3xl font-display font-bold mb-6">
              Event Overview - Details
            </h2>
            <p className="text-white/80 mb-6">
              Dive into the incredible journey of Tech Twister, a celebration of
              technology, innovation, and collaboration. Explore groundbreaking
              workshops, engaging challenges, and meet like-minded individuals
              in a dynamic and fun-filled environment.
            </p>
            <button
              className="mt-4 px-8 py-3 bg-tech-purple rounded-full hover:bg-tech-pink transition-colors duration-300 font-medium"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;