import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Interactive dashboard for data visualization with machine learning predictions and real-time analytics.",
    tags: ["Python", "TensorFlow", "React", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform using smart contracts for transparent and secure elections.",
    tags: ["Solidity", "Web3.js", "Next.js", "Ethereum"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  },
  {
    id: 5,
    title: "Real Estate Management System",
    description: "Comprehensive platform for property listings, virtual tours, and agent management.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Mapbox"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  },
  {
    id: 6,
    title: "Healthcare Appointment System",
    description: "Telemedicine platform with video consultation, prescription management, and patient records.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1516549655669-df6654e435de?auto=format&fit=crop&w=800",
    github: "https://github.com",
    live: "https://vercel.com"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.some(tag => 
        filter === "frontend" ? ["React", "Next.js", "React Native"].includes(tag) :
        filter === "backend" ? ["Node.js", "Express", "Python"].includes(tag) :
        filter === "fullstack" ? true : 
        project.tags.includes(filter)
      ));

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 sm:px-6 py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="w-10 sm:w-12 h-0.5 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-xs sm:text-sm">
              Portfolio
            </span>
            <div className="w-10 sm:w-12 h-0.5 bg-cyan-400"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A collection of my recent work showcasing full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4"
        >
          {["all", "frontend", "backend", "fullstack", "React", "Node.js", "Python"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition-all duration-300
                ${filter === item 
                  ? "bg-cyan-400 text-gray-900 font-semibold" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="
                bg-gradient-to-br from-gray-800/50 to-gray-900/50
                backdrop-blur-sm
                border border-gray-700/50
                rounded-xl sm:rounded-2xl
                overflow-hidden
                h-full
                hover:border-cyan-400/30
                hover:shadow-xl hover:shadow-cyan-400/10
                transition-all duration-300
                flex flex-col
              ">
                {/* PROJECT IMAGE */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm text-cyan-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 flex items-center justify-center gap-2
                        bg-gray-800 hover:bg-gray-700
                        text-white
                        px-4 py-3
                        rounded-lg
                        text-sm sm:text-base
                        transition-all duration-300
                        group/github
                      "
                    >
                      <svg className="w-5 h-5 group-hover/github:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 flex items-center justify-center gap-2
                        bg-cyan-400 hover:bg-cyan-500
                        text-gray-900
                        px-4 py-3
                        rounded-lg
                        text-sm sm:text-base
                        font-semibold
                        transition-all duration-300
                        group/live
                      "
                    >
                      <svg className="w-5 h-5 group-hover/live:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SHOWCASE FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="
            inline-block
            bg-gradient-to-r from-gray-800/30 to-gray-900/30
            backdrop-blur-sm
            border border-gray-700/50
            rounded-xl sm:rounded-2xl
            px-6 sm:px-8 py-6 sm:py-8
            max-w-2xl mx-auto
          ">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology.
            </p>
            <a
              href="#contact"
              className="
                inline-flex items-center gap-3
                bg-cyan-400 hover:bg-cyan-500
                text-gray-900
                px-6 sm:px-8 py-3 sm:py-4
                rounded-lg
                font-semibold
                transition-all duration-300
                group
              "
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}