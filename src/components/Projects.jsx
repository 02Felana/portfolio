import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-label">PROJETS</p>
          <h2>Ce que j'ai <span>construit</span></h2>
          <p>
            Découvrez quelques projets sur lesquels j'ai travaillé.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-media">
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="media-placeholder">
                  <Play size={25} />
                  <span>Vidéo de démonstration</span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={17} /> GitHub
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Voir le projet <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}