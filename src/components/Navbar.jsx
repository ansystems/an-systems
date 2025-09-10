import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r via-emerald-800 from-gray-400 to-emerald-700 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-2 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AN-SYSTEMS Logo"
            className="h-10 md:h-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold">AN-SYSTEMS</span>
            <span className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
              Software Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              className="p-2 rounded-full border border-transparent"
              whileHover={{
                scale: 1.099,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                borderColor: "white", // purple border
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)", // 3D shadow
              }}
              whileTap={{
                scale: 1.099,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                 borderColor: "white", // darker purple when clicked
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-full transition-colors ${
                  location.pathname === link.path
                    ? "text-red-400 font-semibold"
                    : "hover:text-red-400"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (
          
            <ul className="flex flex-col px-4 py-5 space-y-3 justify-center items-center rounded-full mx-5 my-5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <motion.div
                          key={i}
              className="px-4 rounded-4xl border border-transparent"
              whileHover={{
                scale: 1.099,
                y: -3,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                borderColor: "white", // purple border
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)", // 3D shadow
              }}
              whileTap={{
                scale: 1.099,
                y: -3,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                 borderColor: "white", // darker purple when clicked
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              
          
                  <Link
                    to={link.path}
                    className={`block py-2 hover:text-red-400 ${
                      location.pathname === link.path
                        ? "red-purple-400 font-semibold"
                        : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                  </motion.div>
                </li>
                 
              ))}
            </ul>
         
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
