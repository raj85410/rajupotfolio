import React, { useState } from 'react';

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
      // TODO: Replace with your Formspree endpoint
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setStatusMsg('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg('Failed to send message.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 rounded-lg shadow-2xl p-8 bg-white dark:bg-slate-900 transform hover:scale-105 transition-all duration-500">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-10 justify-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-wide">CONTACT US</h2>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="mt-1 text-orange-500">
                {/* Phone icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15.5a6.5 6.5 0 018 0" /></svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Call Us</div>
                <div className="text-gray-500 dark:text-gray-300">+91-8511734001</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="mt-1 text-orange-500">
                {/* Envelope icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 0l8 8 8-8" /></svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Email</div>
                <div className="text-gray-500 dark:text-gray-300">rajcallbrite@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="mt-1 text-orange-500">
                {/* Map pin icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9z" /><circle cx="12" cy="12" r="3" /></svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Location</div>
                <div className="text-gray-500 dark:text-gray-300">Jaipur, Rajasthan, India</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 text-orange-500">
                {/* Clock icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Contact Time</div>
                <div className="text-gray-500 dark:text-gray-300">Morning 9am to 5pm</div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none"
                  placeholder="Enter a valid email address"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-400 py-2 px-0 outline-none resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'SENDING...' : 'SUBMIT'}
            </button>
            {status !== 'idle' && (
              <div className={`text-center mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {statusMsg}
              </div>
            )}
          </form>
        </div>
        {/* Social Links Row */}
        <div className="flex gap-6 mt-12 justify-center">
          <a
            href="https://www.instagram.com/raj._jain_007/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
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
            className="p-4 bg-blue-700 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
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
            className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
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
            className="p-4 bg-gray-900 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
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