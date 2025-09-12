import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll check
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-white shadow-lg 
      ${scrolled ? "bg-blue-900" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold">AN Systems</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-gray-300 transition ${
              location.pathname === "/" ? "font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-300 transition ${
              location.pathname === "/about" ? "font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`hover:text-gray-300 transition ${
              location.pathname === "/services" ? "font-semibold" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-300 transition ${
              location.pathname === "/contact" ? "font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-blue-700"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-blue-700"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
