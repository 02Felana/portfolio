import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="section-label">CONTACT</p>
          <h2>Construisons quelque chose <span>ensemble.</span></h2>
          <p>
            Vous avez un projet, une opportunité de stage ou simplement envie
            d'échanger ? N'hésitez pas à me contacter.
          </p>

          <div className="contact-actions">
            <a className="button primary" href="mailto:felana.natalia@example.com">
              <Mail size={18} /> Envoyer un email
            </a>
            <a className="button secondary light-button" href="https://github.com/02Felana" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}