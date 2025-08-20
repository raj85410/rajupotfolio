import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Opseless",
      tech: ["DevOps", "Automation", "Web App", "Netlify"],
      description: "DevOps work automation platform for streamlining cloud infrastructure and deployment processes.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "DevOps",
      link: "https://opsless.netlify.app"
    },
    {
      id: 2,
      title: "Assistnez",
      tech: ["Outsourcing", "Virtual Assistance", "Web App", "Netlify"],
      description: "Client website for outsourcing work and getting virtual assistance services.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Development",
      link: "https://assistnez.netlify.app/"
    },
    {
      id: 3,
      title: "CI/CD Pipeline",
      tech: ["Docker", "Jenkins", "Python", "Kubernetes"],
      description: "Reduced deployment time by 70% with Kubernetes integration.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "DevOps",
      github: "https://github.com/raj85410/ci-cd-pipeline"
    },
    {
      id: 4,
      title: "Travel Industry App",
      tech: ["Python", "Streamlit", "Pandas"],
      description: "Analyzed 10K+ travel data points for demand prediction.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Data Analysis",
      link: "https://travel-rosy-mu-48.vercel.app/"
    },
    {
      id: 5,
      title: "Cloud Advisor Chatbot",
      tech: ["Streamlit", "Gemini API", "speech_recognition"],
      description: "Voice-enabled cloud recommendation engine for non-tech users.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Social Media Automation Suite",
      tech: ["Python", "LinkedIn API", "Twilio", "WhatsApp API"],
      description: "Automated messaging/image posting across 4 platforms.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Automation"
    },
    {
      id: 7,
      title: "Code Reader Tool",
      tech: ["Python", "Gradio", "NLP"],
      description: "GUI-based code analyzer with syntax highlighting.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Tools"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
                  <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em] transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
          PROJECTS
        </h2>
          <div className="w-24 h-px bg-orange-500 mx-auto mb-12"></div>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing expertise in Python development, 
            DevOps practices, and cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden aspect-square cursor-pointer transform hover:scale-105 hover:-rotate-1 transition-all duration-700 shadow-2xl hover:shadow-3xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="flex flex-col justify-center items-center h-full p-8 text-center">
                  <span className="text-xs text-orange-500 mb-4 tracking-[0.2em] font-light">
                    {project.category.toUpperCase()}
                  </span>
                  
                  <h3 className="text-2xl font-black text-white mb-4 tracking-[0.1em]">
                    {project.title.toUpperCase()}
                  </h3>
                  
                  <div className="w-16 h-px bg-orange-500 mb-6"></div>
                  
                  <p className="text-white/90 text-sm font-light mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 border border-white/30 text-white text-xs font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-white/30 text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <button className="p-3 border border-white/30 text-white hover:bg-white/10 transition-colors duration-300" disabled>
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;