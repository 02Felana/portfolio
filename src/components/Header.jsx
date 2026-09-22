import { Menu, X } from "lucide-react";

const links = [
  ["Accueil", "accueil"],
  ["À propos", "apropos"],
  ["Compétences", "competences"],
  ["Projets", "projets"],
  ["Contact", "contact"],
];

export default function Header({ menuOpen, setMenuOpen }) {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav">
        <button className="brand" onClick={() => goTo("accueil")}>
          <span>F</span>
          <strong>Felana Natalia</strong>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}