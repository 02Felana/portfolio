import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Développement",
    text: "Je transforme des idées en applications web structurées et fonctionnelles."
  },
  {
    icon: Lightbulb,
    title: "Créativité",
    text: "J'accorde de l'importance à une interface claire, élégante et agréable à utiliser."
  },
  {
    icon: Rocket,
    title: "Progression",
    text: "Chaque projet est une occasion d'apprendre, de résoudre des problèmes et de progresser."
  }
];

export default function About() {
  return (
    <section id="apropos" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">À PROPOS</p>
          <h2>Quelques mots <span>sur moi</span></h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Je suis <strong>Felana Natalia</strong>, étudiante en informatique
              et passionnée par le développement web.
            </p>
            <p>
              Je m'intéresse particulièrement à la création d'applications
              modernes, à l'expérience utilisateur et au développement
              frontend et backend.
            </p>
            <p>
              Mes projets universitaires et personnels me permettent de mettre
              en pratique mes connaissances et de construire progressivement
              une solide expérience technique.
            </p>
          </motion.div>

          <div className="about-cards">
            {cards.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                className="mini-card"
                key={title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-box"><Icon size={22} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}