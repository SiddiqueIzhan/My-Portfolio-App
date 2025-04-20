import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../App";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 pt-24 px-4 sm:px-6 md:px-12 bg-gray-800 min-h-lvh"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold text-center mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <motion.ul
        className="text-sm sm:text-base md:text-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <li className="text-center text-xl leading-10">
          <strong className="lg:text-3xl text-2xl">
            Presidency University, Bangalore
          </strong>{" "}
          – BTech in Electronics and Communication (2018 – 2022)
          <br />
          CGPA: 7.23/10
        </li>
      </motion.ul>
    </section>
  );
};

export default Education;
