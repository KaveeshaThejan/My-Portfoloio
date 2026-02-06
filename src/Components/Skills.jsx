import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Redux", level: 80 }
    ],
    icon: "💻"
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 80 }
    ],
    icon: "⚙️"
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Pandas/Numpy", level: 80 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Analysis", level: 85 },
      { name: "Statistical Modeling", level: 75 }
    ],
    icon: "🤖"
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Agile/Scrum", level: 85 }
    ],
    icon: "🛠️"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              Technical Expertise
            </span>
            <div className="w-12 h-0.5 bg-cyan-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-bold text-xl">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ADDITIONAL INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-cyan-400 text-3xl mb-3">50+</div>
            <div className="text-white font-semibold">Projects Completed</div>
            <div className="text-gray-400 text-sm mt-2">Across various domains</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-cyan-400 text-3xl mb-3">20+</div>
            <div className="text-white font-semibold">Technologies</div>
            <div className="text-gray-400 text-sm mt-2">Mastered & implemented</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-cyan-400 text-3xl mb-3">100%</div>
            <div className="text-white font-semibold">Client Satisfaction</div>
            <div className="text-gray-400 text-sm mt-2">Delivered on time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}