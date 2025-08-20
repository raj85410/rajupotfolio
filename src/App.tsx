import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-xl font-black tracking-[0.2em] text-gray-900 dark:text-white">
            RAJU JAIN
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-light tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-light tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-light tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              CONTACT
            </button>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-orange-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;