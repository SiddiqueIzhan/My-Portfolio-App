import React from "react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";
import { sectionVariants } from "../App";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600 group-hover:text-orange-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 group-hover:text-yellow-300" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 group-hover:text-blue-400" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400 group-hover:text-cyan-300" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-100 group-hover:text-white" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500 group-hover:text-purple-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 group-hover:text-teal-300" />,
  },
  {
    name: "Bootstrap",
    icon: (
      <SiBootstrap className="text-indigo-500 group-hover:text-indigo-400" />
    ),
  },
  {
    name: "SASS",
    icon: <FaSass className="text-pink-400 group-hover:text-pink-300" />,
  },
  {
    name: "Firebase",
    icon: (
      <SiFirebase className="text-yellow-500 group-hover:text-yellow-400" />
    ),
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 group-hover:text-red-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#68a063] group-hover:text-green-400" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 pt-24 px-4 sm:px-6 md:px-12 min-h-lvh"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-center mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center w-full max-w-[160px] hover:shadow-xl flex flex-col items-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mx-auto transition-colors duration-300">
              {skill.icon}
            </div>
            <p className="mt-2 font-medium text-sm sm:text-base md:text-lg group-hover:text-white transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
