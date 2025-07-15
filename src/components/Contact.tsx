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
      </div>
    </section>
  );
};

export default Contact;