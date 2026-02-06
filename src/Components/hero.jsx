import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const roles = ["Frontend Developer", "AI Enthusiast", "Full Stack Engineer", "UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    if (currentIndex < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentRoleText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setTypedText("");
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRole]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/Kaveesha_Thejan_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Kaveesha_Thejan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(22, 78, 99, 0.15) 0%, transparent 50%), 
                       radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(8, 145, 178, 0.1) 0%, transparent 50%),
                       linear-gradient(to bottom right, #000000, #0a0a0a, #111827)`
        }}
      />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-10 w-32 h-32 border border-cyan-400/10 rounded-full"
      />
      <motion.div
        animate={{ 
          x: [0, -15, 0],
          y: [0, 25, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-10 w-40 h-40 border border-cyan-400/5 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Content Container */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content - Text */}
            <div className="lg:col-span-7 space-y-8">
              {/* Intro Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-medium bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  Open to Opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                    Kaveesha Thejan
                  </span>
                </h1>
                
                {/* Animated Role Text */}
                <div className="h-16 sm:h-20">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold">
                    <span className="text-cyan-400">I'm a </span>
                    <span className="text-white bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 bg-clip-text text-transparent">
                      {typedText}
                    </span>
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed"
              >
                Specializing in creating exceptional digital experiences with modern web technologies.
                Combining technical expertise with creative vision to build scalable, user-centric solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#contact"
                  className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <svg 
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </a>
                
                <button
                  onClick={handleDownloadCV}
                  className="group px-8 py-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-semibold transition-all duration-300 flex items-center gap-3"
                >
                  <svg 
                    className="w-5 h-5 group-hover:animate-bounce" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </button>
                
                <a
                  href="#projects"
                  className="group px-8 py-4 rounded-lg bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 text-white font-semibold transition-all duration-300 flex items-center gap-3"
                >
                  <span>View Projects</span>
                  <svg 
                    className="w-5 h-5 group-hover:rotate-12 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <p className="text-gray-500 text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                      link: "https://linkedin.com"
                    },
                    {
                      name: "GitHub",
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      ),
                      link: "https://github.com"
                    },
                    {
                      name: "CV Download",
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      link: "#",
                      onClick: handleDownloadCV,
                      isDownload: true
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      onClick={social.onClick}
                      target={!social.isDownload ? "_blank" : "_self"}
                      rel={!social.isDownload ? "noopener noreferrer" : ""}
                      download={social.isDownload}
                      className="group p-3 rounded-lg bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-cyan-600/10 transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-800/50"
              >
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - CLEAN IMAGE WITHOUT GRAY BACKGROUND */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Animated Orbital Rings */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                  className="absolute inset-0 rounded-full border border-cyan-400/10"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="absolute inset-4 rounded-full border border-cyan-400/5"
                />

                {/* Main Image Container - CLEAN VERSION */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Floating Background Glow */}
                  <motion.div
                    animate={{ 
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-transparent to-cyan-600/20 rounded-3xl blur-2xl"
                  />

                  {/* Clean Image with Holographic Border */}
                  <div className="relative">
                    {/* Holographic Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
                    
                    {/* Main Image - Clean with Shadow Only */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <img
                        src="/my.jpeg"
                        alt="Kaveesha Thejan - Professional Profile"
                        className="w-full h-auto object-cover rounded-2xl"
                        loading="eager"
                        style={{
                          filter: 'drop-shadow(0 20px 40px rgba(34, 211, 238, 0.3))'
                        }}
                      />
                      
                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Animated Glow Points */}
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
                    />
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute bottom-6 left-6 w-3 h-3 bg-cyan-500 rounded-full blur-sm"
                    />
                  </div>

                  {/* Floating Tech Badges - Cleaner Version */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3"
                  >
                    {["React", "Next.js", "AI/ML"].map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="px-4 py-2 rounded-full backdrop-blur-sm"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(34, 211, 238, 0.2)'
                        }}
                      >
                        <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Animated Floating Elements - Subtle */}
                  <motion.div
                    animate={{ 
                      x: [0, 15, 0],
                      y: [0, -10, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-cyan-600/30 rounded-full backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, -10, 0],
                      y: [0, 15, 0],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-full backdrop-blur-sm"
                  />
                </motion.div>

                {/* Download CV Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                >
                  <button
                    onClick={handleDownloadCV}
                    className="group flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                    title="Download CV"
                  >
                    <svg 
                      className="w-5 h-5 group-hover:animate-bounce" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium hidden group-hover:inline">CV</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center gap-2 group">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-500 text-sm"
              >
                Explore More
              </motion.span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full mt-2"
                />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}