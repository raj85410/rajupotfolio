import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '../assets/image22222.jpg';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-900 pt-32 md:pt-40">
      <div className="text-center px-8 max-w-5xl mx-auto">
        {/* Circular Photo Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Raju Jain" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional: Add a subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em] leading-none transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
          RAJU JAIN
        </h1>
        
        <div className="w-32 h-px bg-orange-500 mx-auto mb-12"></div>
        
        <div className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16 tracking-wide">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <span className="role-badge px-4 py-2 bg-orange-500 text-white rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg glow-text">
              Python Developer
            </span>
            <span className="text-gray-600 dark:text-gray-300 font-bold">&</span>
            <span className="role-badge px-4 py-2 bg-blue-500 text-white rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg glow-text">
              DevOps Engineer
            </span>
            <span className="text-gray-600 dark:text-gray-300 font-bold">&</span>
            <span className="role-badge px-4 py-2 bg-purple-500 text-white rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg glow-text">
              Graphic Designer
            </span>
          </div>
          <p className="text-center">
            Crafting <span className="text-orange-500 font-semibold glow-text">scalable solutions</span> for modern cloud infrastructure 
            & <span className="text-purple-500 font-semibold glow-text">stunning visual experiences</span>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-12 py-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-500 font-light tracking-[0.15em] text-sm transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            VIEW PROJECTS
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-12 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-500 font-light tracking-[0.15em] text-sm transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-orange-500" />
      </button>
    </section>
  );
};

export default Hero;