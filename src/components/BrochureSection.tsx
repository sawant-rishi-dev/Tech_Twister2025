import { Download, FileText, Share2 } from 'lucide-react';

const BrochureSection = () => {
  // Path to your PDF file
  const brochurePdfUrl = "/background-uploads/TechTwister2025.pdf";
  
  // Desired link for sharing
  const shareLink = "https://drive.google.com/file/d/1408WoQmROSGrCAZK7ZMm5Dg5lWqFwwvS/view?usp=sharing";

  return (
    <section id="brochure" className="py-24 bg-tech-dark">
      <div className="container">
        <h2 className="section-heading text-gradient">Event Brochure</h2>
        <div className="section-subheading max-w-3xl mx-auto">
          Download the complete event guide
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="tech-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 animate-scale-up">
            <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden relative group">
              <div 
                className="absolute inset-0 bg-tech-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText size={64} className="text-white opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tech-blue to-transparent p-4">
                <p className="text-center font-medium">Tech Twister 2025 Brochure</p>
                <p className="text-center text-sm text-white/70">PDF  12.1 MB</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-4">Complete Event Information</h3>
              <p className="text-white/80 mb-6">
                Download our comprehensive brochure to get detailed information about all events, 
                registration process, prizes, venue details, accommodation options, and more.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-purple/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-tech-purple text-sm">✓</span>
                  </div>
                  <span>Detailed schedule and timings</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-purple/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-tech-purple text-sm">✓</span>
                  </div>
                  <span>Competition rules and guidelines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-purple/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-tech-purple text-sm">✓</span>
                  </div>
                  <span>Prize details and eligibility criteria</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-tech-purple/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-tech-purple text-sm">✓</span>
                  </div>
                  <span>Campus map and venue information</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download Button */}
                <a 
                  href={brochurePdfUrl}
                  download="TechTwister2025_Brochure.pdf"
                  className="px-6 py-3 bg-tech-purple hover:bg-tech-pink transition-colors rounded-full text-white font-medium flex items-center justify-center"
                >
                  <Download size={18} className="mr-2" />
                  <span>Download Brochure</span>
                </a>
                
                {/* Share Button */}
                <a 
                  href={shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white transition-colors rounded-full font-medium flex items-center justify-center"
                >
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm">
            Having trouble downloading? Contact us at <span className="text-tech-purple">support@techtwister.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;