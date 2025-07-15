import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
// Add icon imports for social links
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [statusMsg, setStatusMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMsg('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMsg('Failed to send message.');
    }
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
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfMJpzNlJU1BjRcfbpjhyT5B3vWlIWgg4Xe9HA8yMbpek3FOA/viewform?embedded=true"
            width={"100%" as any}
            height={800}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="bg-white dark:bg-slate-900 rounded-lg shadow-lg"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
        {/* Social Links Row */}
        <div className="flex gap-6 mt-8 justify-center">
          <a
            href="https://www.instagram.com/raj._jain_007/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0121 7.5v9A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75A2.25 2.25 0 109.75 12 2.25 2.25 0 0012 9.75z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/raju-jain-0a5466280/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25A3.75 3.75 0 0120.25 12v4.5A3.75 3.75 0 0116.5 20.25h-9A3.75 3.75 0 013.75 16.5V12A3.75 3.75 0 017.5 8.25h9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75v-3.75m0 0V9.75m0 2.25h3.75m-3.75 0H8.25" />
            </svg>
          </a>
          <a
            href="https://discord.com/channels/1098529566093484112/1098529566093484114"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657A8 8 0 116.343 5.343a8 8 0 0111.314 11.314z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008h-.008V9.75z" />
            </svg>
          </a>
          <a
            href="https://github.com/raj85410"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.792 7.946 6.653 9.24.486.09.664-.211.664-.47 0-.232-.008-.846-.013-1.66-2.705.587-3.276-1.305-3.276-1.305-.442-1.123-1.08-1.422-1.08-1.422-.883-.604.067-.592.067-.592.976.069 1.49 1.003 1.49 1.003.868 1.488 2.277 1.058 2.834.81.088-.629.34-1.058.618-1.301-2.16-.246-4.432-1.08-4.432-4.807 0-1.062.38-1.931 1.003-2.611-.101-.247-.435-1.24.096-2.586 0 0 .816-.262 2.676 1.001A9.36 9.36 0 0112 6.844c.827.004 1.66.112 2.438.328 1.86-1.263 2.675-1.001 2.675-1.001.532 1.346.198 2.339.098 2.586.624.68 1.002 1.549 1.002 2.611 0 3.735-2.274 4.558-4.44 4.801.35.302.66.899.66 1.814 0 1.31-.012 2.367-.012 2.689 0 .261.176.563.67.468C19.208 19.944 22 16.302 22 12c0-5.385-4.365-9.75-9.75-9.75z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;