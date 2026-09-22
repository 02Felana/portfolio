import { FaGithub as Github } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Felana Natalia. Tous droits réservés.</p>
        <div>
          <a href="https://github.com/02Felana" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}