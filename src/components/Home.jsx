import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Home = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      <img
        src="\cover-photo.jpg"
        alt="Cover Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 text-left mt-32 md:mt-0 md:gap-0">
        {/* Left Section with Typing Animation */}
        <motion.div
          className="w-[90vw] md:max-w-[535px] md:mr-12 px-4 md:p-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            <span
              className="overflow-hidden whitespace-wrap md:whitespace-nowrap border-r-4 border-white pr-4"
            >
              {displayedText}
            </span>
          </h1>
          <p className="max-w-xl mt-4 text-sm sm:text-base md:text-lg">
            Front-End Developer with 1+ years of experience building responsive,
            high-performance web apps using React.js and Next.js. Skilled in
            crafting seamless UX, optimizing performance, and collaborating in
            agile teams.
          </p>
        </motion.div>

        {/* Right Section with Sliding Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:ml-24"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="\Siddique Photo.png"
            alt="Profile"
            className="w-64 h-96 md:w-96 md:h-[576px] object-cover md:mt-40 transform -scale-x-100"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
