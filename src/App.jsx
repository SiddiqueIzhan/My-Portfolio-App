import { useEffect, useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute("data-target");
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setSidebarOpen(false);
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100">
      <NavBar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Home text="Hi, I'm Siddique Izhan" />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
