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
      className="max-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      <img
        src="\cover-photo.jpg"
        alt="Cover Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-left mt-64 md:mt-0 md:gap-16">
        {/* Left Section with Typing Animation */}
        <motion.div
          className="w-[90vw] md:max-w-[535px] max-h-1/2 md:mr-12 px-4 md:p-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            <span className="overflow-hidden whitespace-wrap md:whitespace-nowrap border-r-4 border-white pr-4">
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
          className="w-full md:w-1/2 max-h-1/2 md:max-h-lvh flex justify-center overflow-hidden relative bottom-16 -left-4 md:static"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="\Siddique-izhan-png.png"
            alt="Profile"
            className="h-[600px] md:h-[850px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
