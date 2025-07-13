import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const awsRegions = [
    { name: 'Mumbai', x: 75, y: 30 },
    { name: 'Singapore', x: 85, y: 40 },
    { name: 'Tokyo', x: 95, y: 25 },
    { name: 'Sydney', x: 100, y: 65 },
    { name: 'Frankfurt', x: 45, y: 20 },
    { name: 'London', x: 40, y: 18 },
    { name: 'N. Virginia', x: 25, y: 25 },
    { name: 'Oregon', x: 15, y: 22 },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-50 dark:bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
            CONTACT
          </h2>
          <div className="w-24 h-px bg-orange-500 mx-auto mb-12"></div>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next project? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
              CONTACT FORM
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-slate-600 bg-transparent text-gray-900 dark:text-white focus:border-orange-500 focus:ring-0 transition-colors outline-none font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-slate-600 bg-transparent text-gray-900 dark:text-white focus:border-orange-500 focus:ring-0 transition-colors outline-none font-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-slate-600 bg-transparent text-gray-900 dark:text-white focus:border-orange-500 focus:ring-0 transition-colors outline-none resize-none font-light"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-500 font-light tracking-[0.15em] text-sm flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-[0.1em]">
              QUICK CONTACT
            </h3>
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-orange-500 text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1 tracking-wide">Phone</p>
                  <a 
                    href="tel:+918511734001"
                    className="text-lg font-light text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300"
                  >
                    +91-8511734001
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-orange-500 text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1 tracking-wide">Email</p>
                  <a 
                    href="mailto:raju.jain.8511734001@gmail.com"
                    className="text-lg font-light text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 break-all"
                  >
                    raju.jain.8511734001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-orange-500 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1 tracking-wide">Location</p>
                  <p className="text-lg font-light text-gray-900 dark:text-white">Jaipur, India</p>
                </div>
              </div>
            </div>

            {/* AWS Region Map */}
            <div className="bg-white dark:bg-slate-900 p-8 border border-gray-200 dark:border-slate-700">
              <h4 className="text-lg font-black text-gray-900 dark:text-white mb-6 tracking-[0.1em]">
                AWS REGIONS EXPERIENCE
              </h4>
              <div className="relative w-full h-48 bg-gray-100 dark:bg-slate-800 overflow-hidden">
                <svg viewBox="0 0 120 80" className="w-full h-full">
                  {/* Simplified world map outline */}
                  <path
                    d="M10 40 Q30 35 50 40 Q70 45 90 40 Q110 35 120 40 L120 60 Q100 65 80 60 Q60 55 40 60 Q20 65 10 60 Z"
                    fill="currentColor"
                    className="text-gray-300 dark:text-slate-600"
                  />
                  
                  {/* AWS Region dots */}
                  {awsRegions.map((region, index) => (
                    <g key={index}>
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r="2.5"
                        fill="#FF9900"
                        className="animate-pulse"
                      />
                      <text
                        x={region.x}
                        y={region.y - 6}
                        fontSize="3.5"
                        fill="currentColor"
                        textAnchor="middle"
                        className="text-gray-600 dark:text-gray-400 text-xs font-light"
                      >
                        {region.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-6 leading-relaxed">
                Experienced with AWS cloud infrastructure across multiple regions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;