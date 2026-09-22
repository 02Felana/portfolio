import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="accueil" className="hero">
      <div className="hero-decoration decoration-one" />
      <div className="hero-decoration decoration-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <Sparkles size={16} /> Disponible pour de nouveaux projets
          </div>

          <p className="hello">Bonjour, je suis</p>
          <h1>Felana <span>Natalia</span></h1>
          <h2>Développeuse Web</h2>

          <p className="hero-description">
            Je conçois des applications web modernes, intuitives et
            fonctionnelles, du frontend au backend.
          </p>

          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("projets")}>
              Découvrir mes projets
            </button>
            <button className="button secondary" onClick={() => scrollTo("contact")}>
              Me contacter
            </button>
          </div>

          <div className="socials">
            <a href="https://github.com/02Felana" target="_blank" rel="noreferrer">
              <Github size={19} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="code-window">
            <div className="window-top">
              <span />
              <span />
              <span />
              <small>portfolio.jsx</small>
            </div>
            <pre>{`const felana = {
  role: "Développeuse Web",
  frontend: [
    "React",
    "Next.js",
    "TypeScript"
  ],
  backend: [
    "NestJS",
    "Laravel"
  ],
  database: [
    "MySQL",
    "SQLite"
  ],
  passion: true
};`}</pre>
          </div>
        </motion.div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollTo("apropos")}>
        <span>Faire défiler</span>
        <ArrowDown size={17} />
      </button>
    </section>
  );
}