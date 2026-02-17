import { motion } from "framer-motion";
import { useState } from "react";

const qualifications = {
  education: [
    {
      id: 1,
      title: "Undergraduate in Information Technology",
      institution: "Institute of Technology University of Moratuwa",
      period: "2026 - 2029",
      description: "Specialization in Artificial Intelligence & Data Science",
      Goals: ["Dean's List", "Research Assistant", "Capstone Project Excellence Award"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      institution: "Code Academy",
      period: "2022",
      description: "Advanced certification in modern web technologies",
      grade: "Certified",
      achievements: ["Top 5% of cohort", "Featured project showcase"]
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      institution: "Deep Learning Institute",
      period: "2023",
      description: "Advanced ML algorithms and neural networks",
      grade: "Certified",
      achievements: ["Distinction", "Published research paper"]
    }
  ],
  experience: [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Innovations Inc.",
      period: "Jun 2023 - Aug 2023",
      description: "Developed responsive web applications using React and TypeScript",
      responsibilities: [
        "Built 5+ reusable components",
        "Improved performance by 40%",
        "Collaborated with UX team"
      ]
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Delivered custom web solutions for various clients",
      responsibilities: [
        "Full-stack development",
        "Client consultation",
        "Project management"
      ]
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "University AI Lab",
      period: "Jan 2023 - Present",
      description: "AI research focusing on computer vision applications",
      responsibilities: [
        "Data preprocessing",
        "Model training",
        "Paper writing"
      ]
    }
  ]
};

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section
      id="qualifications"
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
              Journey & Experience
            </span>
            <div className="w-12 h-0.5 bg-cyan-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Qualifications</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Academic background and professional experience that shaped my career
          </p>
        </motion.div>

        {/* TAB SELECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-1">
            {[
              { id: 'education', label: 'Education', icon: '🎓' },
              { id: 'experience', label: 'Experience', icon: '💼' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-cyan-400 text-gray-900 font-semibold' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }
                `}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="max-w-3xl mx-auto">
          {qualifications[activeTab].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* TIMELINE LINE */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-1/2"></div>
              
              {/* TIMELINE DOT */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* CONTENT */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-cyan-400 font-semibold">{activeTab === 'education' ? item.institution : item.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  {item.grade && (
                    <div className="mb-4">
                      <span className="text-gray-400 text-sm">Grade: </span>
                      <span className="text-white font-medium">{item.grade}</span>
                    </div>
                  )}
                  
                  {item.achievements && (
                    <div className="mb-4">
                      <h4 className="text-gray-400 text-sm mb-2">Achievements:</h4>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.responsibilities && (
                    <div>
                      <h4 className="text-gray-400 text-sm mb-2">Responsibilities:</h4>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {item.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-white text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2024" },
              { name: "Google Data Analytics", issuer: "Google", year: "2023" },
              { name: "React Developer", issuer: "Meta", year: "2023" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-cyan-400 text-2xl mb-3">📜</div>
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-cyan-400 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}