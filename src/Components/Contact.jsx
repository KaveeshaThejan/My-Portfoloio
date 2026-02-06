import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "kaveeshathejan@example.com",
    link: "mailto:kaveeshathejan@example.com"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+94 77 123 4567",
    link: "tel:+94771234567"
  },
  {
    icon: "📍",
    title: "Location",
    value: "Colombo, Sri Lanka",
    link: "#"
  },
  {
    icon: "💼",
    title: "Freelance",
    value: "Available",
    link: "#contact",
    status: "text-green-400"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-cyan-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm mb-1">{info.title}</h4>
                      <p className={`text-white font-medium ${info.status || ''}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: "🐙", label: "GitHub", link: "https://github.com" },
                  { icon: "💼", label: "LinkedIn", link: "https://linkedin.com" },
                  { icon: "🐦", label: "Twitter", link: "https://twitter.com" },
                  { icon: "📸", label: "Instagram", link: "https://instagram.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/30 hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-gray-300 text-xs">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-white font-semibold">Current Availability</h4>
              </div>
              <p className="text-gray-400 text-sm">
                I'm currently available for freelance projects and full-time opportunities.
                Typically respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700
                  text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300
                  flex items-center justify-center gap-3
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* PRIVACY NOTE */}
            <p className="text-gray-500 text-xs text-center mt-6">
              Your information is secure and will never be shared with third parties.
            </p>
          </motion.div>
        </div>

        {/* MAP SECTION (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">Based in Sri Lanka</h3>
              <div className="flex items-center gap-2 text-cyan-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Open to remote work worldwide</span>
              </div>
            </div>
            
            <div className="h-64 bg-gray-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-gray-300">Colombo, Sri Lanka</p>
                <p className="text-gray-500 text-sm">UTC +5:30</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}