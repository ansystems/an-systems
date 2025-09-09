import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import FAQ from "../components/Faq";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { y: 0 },
        {
          y: -100,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section
        className="relative h-screen flex flex-col w-full p-2 items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
      >
        <ImageSlider />
      

  
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-4xl md:text-5xl  p-2 font-bold mb-6 text-white">
            Empowering Businesses with Data, Cloud & Digital Innovation
          </h1>
          <motion.p
            className="text-lg p-2 text-gray-300 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            We help companies unlock the true power of technology — from Data
            Engineering & Cloud Transformation to Cybersecurity & Consulting.
            Our mission is to deliver reliable, scalable, and future-ready
            solutions that drive your business growth and keep you ahead of the
            competition.
          </motion.p>

          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <Link
              to="/services"
              className="mx-auto px-8 py-3 justify-center items-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-100 transition"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
        </section>
      
      
      
    </>
  );
};

export default Home;
