import React from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="p-4 bg-gray-800 shadow fixed w-full z-20 top-0 flex flex-wrap justify-between items-center gap-y-2">
      <div className="font-bold text-xl text-white">Izhan</div>
      <div className="hidden md:flex gap-4 md:gap-8">
        {["Home", "Skills", "Projects", "Experience", "Education"].map(
          (item) => (
            <div
              key={item}
              data-target={item.toLowerCase()}
              className="nav-link relative cursor-pointer text-white transition-colors duration-300 hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="md:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <FaBars size={24} />
        </button>
      </div>
      {/* Sidebar for Mobile */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-30 p-6 shadow-lg flex flex-col gap-6 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
      >
        <div className="flex justify-end">
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        {["Home", "Skills", "Projects", "Experience", "Education"].map(
          (item) => (
            <div
              key={item}
              data-target={item.toLowerCase()}
              className="nav-link text-white text-lg cursor-pointer hover:text-orange-400"
            >
              {item}
            </div>
          )
        )}
      </motion.div>
    </nav>
  );
};

export default NavBar;
