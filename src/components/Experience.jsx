import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../App";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 pt-24 px-4 sm:px-6 md:px-12 min-h-lvh"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-center mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>
      <motion.ul
        className="space-y-4 text-sm sm:text-base md:text-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <li className="text-center text-xl leading-10">
          <strong className="lg:text-3xl text-2xl">
            Software Development Engineer – Chingari (Sept 2023 – Feb 2025)
          </strong>
          <br />
          Developed scalable web apps, optimized performance by 20%,
          collaborated with cross-functional teams, used Storybook, GitHub
          Copilot, REST APIs, and built admin dashboards.
        </li>
        <li className="text-center text-xl leading-10">
          <strong className="lg:text-3xl text-2xl">
            Application Engineer – Medibuddy (May 2025 – Oct 2025)
          </strong>
          <br />
          Designed an MER PDF for medical insurance, uploaded annual health
          checkup data on AWS S3, Resolved design and security related bugs like
          XSS
        </li>
      </motion.ul>
    </section>
  );
};

export default Experience;
