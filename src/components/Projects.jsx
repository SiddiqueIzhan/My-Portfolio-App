import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../App";

const projects = [
  {
    title: "Task Management System",
    image: "/project image 1.jpeg",
    description:
      "A feature-rich task manager with Firebase Auth, drag-drop, search, filtering, Kanban/list views, and responsive design.",
    link: "https://my-task-mang-app.netlify.app/",
  },
  {
    title: "Food Delivery App",
    image: "/project image 2.jpeg",
    description:
      "Swiggy-inspired app with mobile-first design, carousel animations, and optimized performance.",
    link: "https://my-food-delivery-app.netlify.app/",
  },
  {
    title: "Dice Game App",
    image: "/project image 3.png",
    description: "Software tool used for casual gaming",
    link: "https://dice-game-app1.netlify.app/",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <section
      id="projects"
      className="py-12 pt-24 px-4 sm:px-6 md:px-12 bg-gray-800 min-h-lvh md:px-8"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-center mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="w-[80vw] mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative bg-gray-700 p-4 sm:p-6 rounded-xl shadow hover:scale-105 transform transition duration-300 max-w-[400px] h-[360px] overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-40 object-cover rounded-t-xl"
              />
              <div className="relative mt-40">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white truncate">
                  {project.title}
                </h3>
                <p
                  className={`mb-2 ${
                    expandedIndex === index ? "" : "line-clamp-3"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <button
                className="text-orange-400 underline hover:text-orange-300 absolute bottom-5"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
