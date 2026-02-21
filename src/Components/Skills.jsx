import { motion } from "framer-motion";
import { useState } from "react";

const tiers = [
  { label: "Expert", dots: 4, color: "text-cyan-400" },
  { label: "Advanced", dots: 3, color: "text-cyan-400" },
  { label: "Intermediate", dots: 2, color: "text-cyan-400" },
  { label: "Beginner", dots: 1, color: "text-cyan-400" },
];

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React", level: 4, detail: "Primary framework · 2+ yrs · 10+ projects" },
      { name: "Next.js", level: 4, detail: "SSR, SSG, App Router · production apps" },
      { name: "Tailwind CSS", level: 4, detail: "Daily use · design systems, components" },
      { name: "JavaScript", level: 3, detail: "ES6+, async/await, DOM APIs" },
      { name: "TypeScript", level: 3, detail: "Type-safe codebases, interfaces & generics" },
      { name: "Redux", level: 2, detail: "Global state management in mid-size apps" },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "REST APIs", level: 4, detail: "Designed & consumed in multiple projects" },
      { name: "Node.js", level: 3, detail: "Express servers, middleware, auth flows" },
      { name: "Express.js", level: 3, detail: "RESTful routing, MVC pattern" },
      { name: "Firebase", level: 3, detail: "Auth, Firestore, Realtime DB" },
      { name: "MongoDB", level: 2, detail: "CRUD operations, Mongoose ODM" },
      { name: "PostgreSQL", level: 2, detail: "Relational schemas, basic queries" },
    ],
  },
  {
    category: "AI & Data Science",
    icon: "🤖",
    skills: [
      { name: "Python", level: 3, detail: "Scripting, data pipelines, ML models" },
      { name: "Data Analysis", level: 3, detail: "Pandas, NumPy, exploratory analysis" },
      { name: "Machine Learning", level: 2, detail: "Supervised learning, model evaluation" },
      { name: "TensorFlow", level: 2, detail: "Neural network basics, Keras API" },
      { name: "Statistical Modeling", level: 2, detail: "Regression, distributions, inference" },
      { name: "Data Visualisation", level: 2, detail: "Matplotlib, Seaborn, chart libraries" },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 4, detail: "Branching, PRs, CI workflows daily" },
      { name: "Figma", level: 3, detail: "Wireframes, prototypes, design handoff" },
      { name: "VS Code", level: 4, detail: "Extensions, snippets, debugging" },
      { name: "Agile / Scrum", level: 3, detail: "Sprint planning, stand-ups, retros" },
      { name: "Docker", level: 2, detail: "Containerisation basics, Compose files" },
      { name: "CI/CD", level: 2, detail: "GitHub Actions, basic pipelines" },
    ],
  },
];

const TIER_LABELS = ["Beginner", "Intermediate", "Advanced", "Expert"];

function DotRating({ level }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((dot) => (
        <span
          key={dot}
          className={`inline-block w-2.5 h-2.5 rounded-full border transition-colors duration-200 ${
            dot <= level
              ? "bg-cyan-400 border-cyan-400"
              : "bg-transparent border-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-between gap-4 px-4 py-3 rounded-xl
                 bg-gray-800/40 border border-gray-700/50
                 hover:border-cyan-400/40 hover:bg-gray-800/70
                 transition-all duration-300 cursor-default group"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-white font-medium text-sm truncate">{skill.name}</span>
        <span
          className={`text-xs text-cyan-400/70 transition-all duration-300 overflow-hidden ${
            hovered ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {skill.detail}
        </span>
      </div>

      <div className="flex flex-col items-end gap-0.5 shrink-0">
        <DotRating level={skill.level} />
        <span className="text-[10px] text-gray-500 group-hover:text-cyan-400/60 transition-colors">
          {TIER_LABELS[skill.level - 1]}
        </span>
      </div>
    </motion.div>
  );
}

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
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Technical Expertise
            </span>
            <div className="w-12 h-0.5 bg-cyan-400" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A breakdown of the tools and technologies I work with — hover any skill for context.
          </p>
        </motion.div>

        {/* LEGEND */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-14 text-sm text-gray-400"
        >
          {tiers.map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <DotRating level={t.dots} />
              <span>{t.label}</span>
            </div>
          ))}
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                         border border-gray-700/50 rounded-2xl p-6
                         hover:border-cyan-400/20 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-xl">{cat.category}</h3>
              </div>

              {/* Skill rows */}
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: "50+", label: "Projects Completed", sub: "Across various domains" },
            { value: "20+", label: "Technologies", sub: "Mastered & implemented" },
            { value: "100%", label: "Client Satisfaction", sub: "Delivered on time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm
                         border border-gray-700/50 rounded-xl p-6 text-center
                         hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-cyan-400 text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white font-semibold">{stat.label}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
