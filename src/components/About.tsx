import React from 'react';

const About = () => {
  const skills = [
    'Python', 'Django', 'Flask', 'Streamlit',
    'Docker', 'Kubernetes', 'Jenkins', 'AWS',
    'PostgreSQL', 'MongoDB', 'Redis', 'Git',
    'Linux', 'Terraform', 'Ansible', 'Grafana'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
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
              <span className="px-6 py-3 bg-orange-500 text-white text-sm font-light tracking-[0.1em]">
                PYTHON DEVELOPER
              </span>
              <span className="px-6 py-3 border border-orange-500 text-orange-500 text-sm font-light tracking-[0.1em]">
                DEVOPS ENGINEER
              </span>
              <span className="px-6 py-3 border border-orange-500 text-orange-500 text-sm font-light tracking-[0.1em]">
                CLOUD ARCHITECT
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-white dark:bg-slate-900 hover:bg-orange-50 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-light group-hover:text-orange-500 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;