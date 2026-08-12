import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = document.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in-view"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen overflow-hidden bg-canvas shadow-canvas">
      <NavBar />
      <div className="page-wrap">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
