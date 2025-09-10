import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  // useEffect(() => {
  //   sectionsRef.current.forEach((sec) => {
  //     gsap.fromTo(
  //       sec,
  //       { opacity: 0, y: 80 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sec,
  //           start: "top 80%",
  //         },
  //       }
  //     );
  //   });

  // }, []);

  
  return (
    <section className="min-h-1/2 py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white transform-translate duration-500">
      {/* About Section */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-4xl mx-auto text-center mb-10"
        
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300 text-lg">
          We are a passionate team of innovators delivering high-quality IT
          solutions. Our goal is to empower businesses with cutting-edge
          technology and design.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 mb-10"
        
      >
        <motion.div
          className="p-5 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 shadow-lg 
                         cursor-pointer"
          whileHover={{
            scale: 1.1,
            y: -2,
            backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
            borderColor: "white", // purple border
            boxShadow: "0px 10px 22px rgba(0,0,0,0.25)", // 3D shadow
          }}
          whileTap={{
            scale: 1.09,
            y: -2,
            backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
            borderColor: "white", // darker purple when clicked
            boxShadow: "0px 10px 22px rgba(0,0,0,0.25)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300">
            To deliver scalable, secure, and user-friendly digital solutions
            that help businesses thrive in a rapidly evolving world.
          </p>
        </motion.div>
        <motion.div className="p-5 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-gray-700 shadow-lg
                          cursor-pointer" 
                        whileHover={{
                scale: 1.1,
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
              transition={{ type: "spring", stiffness: 300, damping: 15 }}>
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-300">
            To become a global leader in IT innovation, inspiring transformation
            and growth through technology.
          </p>
        </motion.div>
      </div>

      


    </section>
  );

};

export default About;
