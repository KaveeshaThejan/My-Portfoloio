import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          max-w-6xl w-full
          bg-[var(--bg-card)]/80 backdrop-blur
          border border-[var(--border-soft)]
          rounded-3xl
          shadow-2xl
          p-10 md:p-14
          grid md:grid-cols-2 gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="text-[var(--accent)] font-medium mb-2">
            Hi, I’m
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-gradient">Kaveesha Thejan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[var(--accent)] font-semibold mb-4">
            Frontend Developer
          </h2>

          <p className="text-[var(--text-muted)] max-w-md mb-8">
            I build modern, responsive, and user-focused web applications using
            React, Tailwind CSS, and modern frontend technologies.
          </p>

          <div className="flex gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn-outline">
              Let’s Talk
            </a>
          </div>

          {/* Social icons (optional placeholders) */}
          <div className="flex gap-4 mt-8 text-[var(--text-muted)]">
            <span className="hover:text-[var(--accent)] cursor-pointer">in</span>
            <span className="hover:text-[var(--accent)] cursor-pointer">gh</span>
            <span className="hover:text-[var(--accent)] cursor-pointer">tw</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl blur-2xl bg-[var(--accent)]/20"></div>

          <img
            src="/my.jpeg"
            alt="Profile"
            className="
              relative z-10
              w-72 md:w-80
              rounded-2xl
              object-cover
              border border-[var(--border-soft)]
            "
          />
        </div>
      </motion.div>
    </section>
  );
}
