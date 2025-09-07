import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);
  const teamRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          },
        }
      );
    });

    gsap.fromTo(
      teamRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  const team = [
    {
      name: "Vaishali Parashar",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Sharma",
      role: "CTO",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Ananya Gupta",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Arjun Verma",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* About Section */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-4xl mx-auto text-center mb-20"
        
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
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-20"
        
      >
        <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 shadow-lg 
                        hover:shadow-2xl hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}>
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300">
            To deliver scalable, secure, and user-friendly digital solutions
            that help businesses thrive in a rapidly evolving world.
          </p>
        </motion.div>
        <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-gray-700 shadow-lg 
                        hover:shadow-2xl hover:scale-105 transition-transform duration-500
                        " whileHover={{ scale: 1.05 }}>
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-300">
            To become a global leader in IT innovation, inspiring transformation
            and growth through technology.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="text-gray-300">
          A diverse group of talented professionals driving innovation.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
          
            ref={(el) => (teamRef.current[i] = el)}
            className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-lg 
                       hover:shadow-2xl transition-transform
                      
             duration-500 text-center group"
             whileHover={{ scale: 1.2 }}
>
  <motion.div
    className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 border-2 border-purple-500"
    whileHover={{ scale: 1.5 }}
  >
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-full object-cover rounded-full transform transition-transform duration-500"
    />
  </motion.div>
  <h4 className="text-xl font-semibold">{member.name}</h4>
  <p className="text-gray-400">{member.role}</p>
</motion.div>

        ))}
      </div>
    </section>
  );
};

export default About;
