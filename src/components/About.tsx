import React, { useState } from 'react';
import { X, ExternalLink, ChevronRight } from 'lucide-react';

const skillDetails: Record<string, string[]> = {
  Python: [
    'Django', 'Flask', 'Streamlit', 'Pandas', 'Gradio',
    'Google Generative AI (Gemini)', 'SpeechRecognition (sr)',
    'pyttsx3', 'Threading', 'Folium'
  ],
  Containerization: ['Docker'],
  Orchestration: ['Kubernetes'],
  'CI/CD': ['Jenkins'],
  Cloud: ['AWS'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis'],
  'Version Control': ['Git'],
  OS: ['Linux', 'Windows'],
  'IaC': ['Terraform'],
  'Config Mgmt': ['Ansible'],
  Monitoring: ['Grafana'],
  'Graphic Design': [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
    'Figma', 'Sketch', 'Adobe XD', 'Canva', 'CorelDRAW',
    'Blender', 'Cinema4D'
  ],
};
const skills = Object.keys(skillDetails);

const About = () => {
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    setOpenSkill(openSkill === skill ? null : skill);
  };

  const openSkillModal = (role: string) => {
    setSelectedRole(role);
  };

  const closeSkillModal = () => {
    setSelectedRole(null);
  };

  const openSoftSkillModal = (skill: string) => {
    setSelectedSoftSkill(skill);
  };

  const closeSoftSkillModal = () => {
    setSelectedSoftSkill(null);
  };

  // Role-specific data
  const roleData = {
    'Python Developer': {
      description: 'Expert in Python development with focus on web applications, data analysis, and automation.',
      skills: ['Django', 'Flask', 'Streamlit', 'Pandas', 'Gradio', 'Google Generative AI', 'SpeechRecognition'],
      projects: [
        { name: 'Travel Industry App', link: 'https://travel-rosy-mu-48.vercel.app/', description: 'Data analysis and demand prediction' },
        { name: 'Cloud Advisor Chatbot', link: '#', description: 'Voice-enabled cloud recommendation engine' },
        { name: 'Code Reader Tool', link: '#', description: 'GUI-based code analyzer with syntax highlighting' }
      ],
      color: 'orange'
    },
    'DevOps Engineer': {
      description: 'Specialized in CI/CD pipelines, containerization, and cloud infrastructure automation.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Ansible', 'Grafana'],
      projects: [
        { name: 'CI/CD Pipeline', link: 'https://github.com/raj85410/ci-cd-pipeline', description: 'Reduced deployment time by 70%' },
        { name: 'Opseless', link: 'https://opsless.netlify.app', description: 'DevOps work automation platform' }
      ],
      color: 'blue'
    },
    'Cloud Architect': {
      description: 'Designing and implementing scalable cloud solutions for modern applications.',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
      projects: [
        { name: 'Cloud Infrastructure', link: '#', description: 'Scalable cloud architecture design' },
        { name: 'Database Optimization', link: '#', description: 'Performance optimization for cloud databases' }
      ],
      color: 'green'
    },
    'Graphic Designer': {
      description: 'Creating stunning visual experiences through digital design and creative solutions.',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Canva', 'Blender'],
      projects: [
        { name: 'Brand Identity Design', link: '#', description: 'Complete brand identity and logo design' },
        { name: 'UI/UX Design', link: '#', description: 'Modern web and mobile interface design' },
        { name: 'Print Design', link: '#', description: 'Magazine layouts and marketing materials' }
      ],
      color: 'purple'
    }
  };

  // Soft skills data with explanations
  const softSkillsData = {
    'Communication Skills': {
      description: 'Clear and effective communication is essential for successful project delivery and team collaboration.',
      whyImportant: 'In tech, you need to explain complex concepts to non-technical stakeholders, collaborate with team members, and present ideas clearly.',
      howIDemonstrate: 'I regularly communicate project updates to clients, write clear documentation for my code, and present technical solutions to teams.',
      examples: ['Client presentations', 'Technical documentation', 'Team meetings', 'Code comments']
    },
    'Problem Solving': {
      description: 'The ability to analyze complex issues and develop effective solutions is crucial in software development.',
      whyImportant: 'Every project has challenges - from debugging code to optimizing performance. Strong problem-solving skills help overcome these obstacles.',
      howIDemonstrate: 'I approach problems systematically, break them into smaller parts, and use debugging tools and logical thinking to find solutions.',
      examples: ['Debugging complex issues', 'Performance optimization', 'System architecture design', 'Troubleshooting']
    },
    'Time Management': {
      description: 'Efficiently managing time and prioritizing tasks ensures project deadlines are met consistently.',
      whyImportant: 'In fast-paced development environments, meeting deadlines while maintaining quality is essential for project success.',
      howIDemonstrate: 'I use project management tools, set realistic timelines, and prioritize tasks based on importance and urgency.',
      examples: ['Project planning', 'Deadline management', 'Task prioritization', 'Agile methodologies']
    },
    'Leadership': {
      description: 'Taking initiative and guiding teams toward successful project completion.',
      whyImportant: 'Leadership skills help drive projects forward, mentor junior developers, and ensure team alignment.',
      howIDemonstrate: 'I lead by example, take ownership of projects, mentor team members, and make decisions that benefit the entire team.',
      examples: ['Project leadership', 'Team mentoring', 'Decision making', 'Initiative taking']
    },
    'Adaptability': {
      description: 'Quickly adjusting to new technologies, methodologies, and changing project requirements.',
      whyImportant: 'Technology evolves rapidly. Being adaptable allows you to learn new tools and adjust to changing business needs.',
      howIDemonstrate: 'I embrace new technologies, quickly learn new frameworks, and adapt my approach based on project requirements.',
      examples: ['Learning new frameworks', 'Technology transitions', 'Process improvements', 'Change management']
    },
    'Critical Thinking': {
      description: 'Analyzing information objectively and making logical, well-reasoned decisions.',
      whyImportant: 'Critical thinking helps evaluate different solutions, assess risks, and make informed technical decisions.',
      howIDemonstrate: 'I evaluate multiple solutions before implementing, consider long-term implications, and question assumptions.',
      examples: ['Solution evaluation', 'Risk assessment', 'Architecture decisions', 'Code review']
    },
    'Creative Innovation': {
      description: 'Thinking outside the box to create unique solutions and improve existing processes.',
      whyImportant: 'Innovation drives progress. Creative thinking leads to better user experiences and more efficient solutions.',
      howIDemonstrate: 'I design intuitive user interfaces, optimize workflows, and find creative ways to solve complex problems.',
      examples: ['UI/UX design', 'Process optimization', 'Creative problem solving', 'Innovation in solutions']
    },
    'Emotional Intelligence': {
      description: 'Understanding and managing emotions in yourself and others for better team dynamics.',
      whyImportant: 'High EQ helps resolve conflicts, build strong relationships, and create positive work environments.',
      howIDemonstrate: 'I listen actively, provide constructive feedback, handle criticism professionally, and support team members.',
      examples: ['Conflict resolution', 'Active listening', 'Constructive feedback', 'Team support']
    },
    'Decision Making': {
      description: 'Making informed, timely decisions that benefit projects and teams.',
      whyImportant: 'Good decision-making skills ensure projects stay on track and resources are used effectively.',
      howIDemonstrate: 'I gather relevant information, consider alternatives, and make decisions based on data and project goals.',
      examples: ['Technology choices', 'Architecture decisions', 'Resource allocation', 'Priority setting']
    },
    'Strategic Planning': {
      description: 'Developing long-term plans and strategies for successful project execution.',
      whyImportant: 'Strategic planning ensures projects align with business goals and are scalable for future growth.',
      howIDemonstrate: 'I plan for scalability, consider future requirements, and design systems that can grow with business needs.',
      examples: ['System architecture', 'Scalability planning', 'Future-proofing', 'Business alignment']
    },
    'Quick Learning': {
      description: 'Rapidly acquiring new skills and knowledge to stay current with technology trends.',
      whyImportant: 'Technology changes constantly. Quick learning ensures you remain valuable and can tackle new challenges.',
      howIDemonstrate: 'I dedicate time to learning new technologies, follow industry trends, and quickly implement new skills in projects.',
      examples: ['New framework adoption', 'Technology research', 'Skill development', 'Continuous learning']
    },
    'Team Collaboration': {
      description: 'Working effectively with diverse teams to achieve common goals.',
      whyImportant: 'Most projects require collaboration. Strong teamwork skills ensure smooth project delivery and positive outcomes.',
      howIDemonstrate: 'I actively participate in team discussions, share knowledge, support colleagues, and contribute to team success.',
      examples: ['Code reviews', 'Knowledge sharing', 'Team meetings', 'Cross-functional collaboration']
    },
    'Attention to Detail': {
      description: 'Ensuring accuracy and precision in all aspects of work.',
      whyImportant: 'Small details can make big differences in code quality, user experience, and project success.',
      howIDemonstrate: 'I thoroughly test my code, review documentation carefully, and ensure all deliverables meet quality standards.',
      examples: ['Code quality', 'Testing procedures', 'Documentation review', 'Quality assurance']
    },
    'Analytical Thinking': {
      description: 'Breaking down complex problems and analyzing data to make informed decisions.',
      whyImportant: 'Analytical thinking helps optimize performance, identify patterns, and make data-driven improvements.',
      howIDemonstrate: 'I analyze performance metrics, identify optimization opportunities, and use data to guide development decisions.',
      examples: ['Performance analysis', 'Data interpretation', 'Optimization strategies', 'Metrics evaluation']
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em] transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
              ABOUT
            </h2>
            <div className="w-24 h-px bg-orange-500 mb-12"></div>
            <div className="space-y-8 text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Passionate developer with expertise in Python development and DevOps practices. 
                I specialize in building scalable applications and implementing robust CI/CD pipelines 
                that streamline development workflows.
              </p>
              <p>
                Based in Jaipur, India, I focus on creating efficient solutions that bridge the gap 
                between development and operations, ensuring smooth deployment and maintenance of 
                applications in cloud environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-12">
              <button 
                onClick={() => openSkillModal('Python Developer')}
                className="px-6 py-3 bg-orange-500 text-white text-sm font-light tracking-[0.1em] hover:bg-orange-600 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                PYTHON DEVELOPER
              </button>
              <button 
                onClick={() => openSkillModal('DevOps Engineer')}
                className="px-6 py-3 border border-orange-500 text-orange-500 text-sm font-light tracking-[0.1em] hover:bg-orange-500 hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                DEVOPS ENGINEER
              </button>
              <button 
                onClick={() => openSkillModal('Cloud Architect')}
                className="px-6 py-3 border border-orange-500 text-orange-500 text-sm font-light tracking-[0.1em] hover:bg-orange-500 hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                CLOUD ARCHITECT
              </button>
              <button 
                onClick={() => openSkillModal('Graphic Designer')}
                className="px-6 py-3 border border-orange-500 text-orange-500 text-sm font-light tracking-[0.1em] hover:bg-orange-500 hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                GRAPHIC DESIGNER
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleSkillClick(skill)}
                    className={`group w-full p-6 bg-white dark:bg-slate-900 hover:bg-orange-50 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer flex items-center justify-between rounded shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 ${openSkill === skill ? 'ring-2 ring-orange-500' : ''}`}
                  >
                    <span className="text-gray-800 dark:text-gray-200 font-light group-hover:text-orange-500 transition-colors duration-300">
                      {skill}
                    </span>
                    <span className={`ml-2 transform transition-transform duration-300 ${openSkill === skill ? 'rotate-180 text-orange-500' : 'text-gray-400'}`}>
                      ▼
                    </span>
                  </button>
                  {/* Animated box for related tech/libraries */}
                  {openSkill === skill && (
                    <div className="absolute left-0 right-0 mt-2 z-10 bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-700 rounded shadow-lg p-4 animate-fade-in">
                      <div className="text-sm text-gray-700 dark:text-gray-200 font-medium mb-2">
                        Related Tech / Libraries
                      </div>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                        {skillDetails[skill].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-[0.1em]">
                SOFT SKILLS
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-light">Click any skill to learn more</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Communication Skills',
                'Problem Solving',
                'Time Management',
                'Leadership',
                'Adaptability',
                'Critical Thinking',
                'Creative Innovation',
                'Emotional Intelligence',
                'Decision Making',
                'Strategic Planning',
                'Quick Learning',
                'Team Collaboration',
                'Attention to Detail',
                'Analytical Thinking'
              ].map((skill, index) => (
                <button 
                  key={index}
                  onClick={() => openSoftSkillModal(skill)}
                  className="group p-6 bg-white dark:bg-slate-900 hover:bg-orange-50 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer rounded shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 text-left w-full relative border border-transparent hover:border-orange-200 dark:hover:border-orange-700"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200 font-light group-hover:text-orange-500 transition-colors duration-300">
                      {skill}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  {/* Subtle hint text */}
                  <div className="absolute bottom-2 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-orange-500 font-medium">Click to learn more</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Role Detail Modal */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-[0.1em]">
                    {selectedRole.toUpperCase()}
                  </h3>
                  <div className={`w-16 h-1 mb-4 ${
                    roleData[selectedRole as keyof typeof roleData].color === 'orange' ? 'bg-orange-500' :
                    roleData[selectedRole as keyof typeof roleData].color === 'blue' ? 'bg-blue-500' :
                    roleData[selectedRole as keyof typeof roleData].color === 'green' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}></div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {roleData[selectedRole as keyof typeof roleData].description}
                  </p>
                </div>
                <button
                  onClick={closeSkillModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Skills & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {roleData[selectedRole as keyof typeof roleData].skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        roleData[selectedRole as keyof typeof roleData].color === 'orange' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        roleData[selectedRole as keyof typeof roleData].color === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        roleData[selectedRole as keyof typeof roleData].color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {roleData[selectedRole as keyof typeof roleData].projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-6 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-bold text-gray-900 dark:text-white">{project.name}</h5>
                        {project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Soft Skills Detail Modal */}
      {selectedSoftSkill && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-[0.1em]">
                    {selectedSoftSkill.toUpperCase()}
                  </h3>
                  <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {softSkillsData[selectedSoftSkill as keyof typeof softSkillsData].description}
                  </p>
                </div>
                <button
                  onClick={closeSoftSkillModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Why Important Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Why This Skill Matters
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {softSkillsData[selectedSoftSkill as keyof typeof softSkillsData].whyImportant}
                </p>
              </div>

              {/* How I Demonstrate Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  How I Demonstrate This Skill
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {softSkillsData[selectedSoftSkill as keyof typeof softSkillsData].howIDemonstrate}
                </p>
              </div>

              {/* Examples Section */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Real-World Examples
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {softSkillsData[selectedSoftSkill as keyof typeof softSkillsData].examples.map((example, index) => (
                    <div
                      key={index}
                      className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg"
                    >
                      <span className="text-orange-800 dark:text-orange-200 text-sm font-medium">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;