import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["NestJS", "Laravel", "Node.js", "Python", "Flask", "REST API"]
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "SQLite", "PostgreSQL", "TypeORM"]
  },
  {
    title: "Outils",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="competences" className="section section-soft">
      <div className="container">
        <div className="section-heading center">
          <p className="section-label">COMPÉTENCES</p>
          <h2>Mes outils pour <span>créer</span></h2>
          <p>
            Une combinaison de technologies frontend, backend et bases de
            données pour construire des applications complètes.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}