import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../App";

const ExperienceData = [
  {
    id: 1,
    companyName: `./chingari-app-icon.webp`,
    jobTitle: "Software Development Engineer",
    location: "Bangalore, Karnataka",
    start: "Sept 2023",
    end: "Feb 2025",
    jobDesc: [
      "Built and optimized scalable web apps using React.js, Next.js,and TypeScript, improving performance by 20%.",
      "Developed admin dashboards and reusable components using Tailwind CSS and SASS.",
      "Integrated REST APIs and ensured cross-browser compatibility.",
      "Collaborated with cross-functional teams to deliver features efficiently.",
      "Utilized Storybook for UI documentation and GitHub Copilot to streamline development.",
    ],
  },
  {
    id: 2,
    companyName: `./medibuddy-app-icon.webp`,
    jobTitle: "Application Engineer",
    location: "Bangalore, Karnataka",
    start: "May 2025",
    end: "Oct 2025",
    jobDesc: [
      "Designed and implemented a medical insurance PDF generator using HTML, CSS, and Dot.js as per client requirements.",
      "Uploaded annual health check-up data securely to AWS S3.",
      "Resolved UI/UX design and security issues (e.g., XSS vulnerabilities) in the Insurance Portal.",
      "Worked collaboratively within the team, focusing on code quality and timely delivery.",
    ],
  },
];

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
        className="md:w-full lg:w-3/5 space-y-4 text-sm sm:text-base md:text-lg m-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ExperienceData.map(
          ({ id, companyName, jobTitle, location, start, end, jobDesc }) => (
            <li className="w-full bg-gray-700 rounded-2xl leading-10 flex items-center p-6 gap-4">
              <img src={companyName} alt="chingari" className="w-36 h-36" />
              <div>
                <div className="flex flex-col">
                  <strong className="md:text-xl lg:text-2xl">
                    {jobTitle} - {location}
                  </strong>
                  <i>
                    {start} – {end}
                  </i>
                </div>
                {/* <br /> */}
                {/* {
                  <ul className="text-md">
                    {jobDesc.map((elem) => (
                      <li>{elem}</li>
                    ))}
                  </ul>
                } */}
              </div>
            </li>
          )
        )}
      </motion.ul>
    </section>
  );
};

export default Experience;
