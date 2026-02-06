import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Professional Profile
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am an undergraduate student pursuing specialization in 
              <span className="text-cyan-400 font-semibold">
                {" "}Artificial Intelligence & Data Science
              </span>. My expertise lies in architecting modern, scalable web 
              applications with an emphasis on clean design and optimal performance.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I adopt a meticulous approach to development, focusing on writing 
              maintainable code, implementing industry best practices, and 
              continuously expanding my technical repertoire. My methodology 
              combines analytical problem-solving with creative execution to 
              deliver robust digital solutions.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cyan-400/10 hover:bg-cyan-400/20 
                         text-cyan-400 px-6 py-3 rounded-lg border border-cyan-400/20 
                         transition-all duration-300 group"
              >
                <span>Connect with Me</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – EXPERTISE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { 
                title: "Frontend Development", 
                value: "React, Next.js, Tailwind CSS, TypeScript, Vite",
                icon: "💻"
              },
              { 
                title: "Backend Systems", 
                value: "Node.js, Express.js, REST APIs, Database Design",
                icon: "⚙️"
              },
              { 
                title: "AI & Data Science", 
                value: "Python, Machine Learning, Data Analysis, Statistical Modeling",
                icon: "🤖"
              },
              { 
                title: "Development Tools", 
                value: "Git, GitHub, Docker, Figma, CI/CD Pipelines",
                icon: "🛠️"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-gradient-to-br from-gray-800/50 to-gray-900/50
                  backdrop-blur-sm
                  border border-gray-700/50
                  rounded-xl p-6
                  hover:border-cyan-400/30
                  hover:shadow-lg hover:shadow-cyan-400/10
                  transition-all duration-300
                  group
                "
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PROFESSIONAL APPROACH SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-r from-gray-800/30 to-gray-900/30
              backdrop-blur-sm
              border border-gray-700/50
              rounded-xl p-6
            "
          >
            <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              Professional Approach
            </h4>
            <p className="text-gray-400 text-sm">
              I believe in a research-driven development process, combining 
              technical precision with user-centric design. Every project 
              undergoes rigorous testing and optimization to ensure scalability, 
              security, and exceptional user experience.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}