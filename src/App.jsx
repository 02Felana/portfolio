import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <motion.button
          className="back-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}