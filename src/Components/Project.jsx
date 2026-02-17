import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 FETCH DATA FROM SUPABASE
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setError("Failed to load projects. Please try again later.");
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  // 🔹 FILTER LOGIC
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags?.some((tag) =>
            filter === "frontend"
              ? ["React", "Next.js", "React Native"].includes(tag)
              : filter === "backend"
              ? ["Node.js", "Express", "Python"].includes(tag)
              : filter === "fullstack"
              ? true
              : tag === filter
          )
        );

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects fetched live from Supabase 🚀
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "frontend", "backend", "fullstack", "React", "Node.js", "Python"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full text-sm transition
                  ${
                    filter === item
                      ? "bg-cyan-400 text-black font-semibold"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* NO DATA */}
        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-center text-gray-400">
            No projects found.
          </p>
        )}

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-center text-sm"
                    >
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black py-2 rounded text-center text-sm font-semibold"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
