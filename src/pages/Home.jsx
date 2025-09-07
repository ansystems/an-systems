import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import FAQ from "../components/Faq";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const homeFaqs = [
    { question: "What is AN Systems?", answer: "AN Systems is an IT services company offering solutions in Cloud, AI, Cybersecurity, and more." },
    { question: "Which industries do you serve?", answer: "We work across multiple industries like finance, healthcare, e-commerce, and startups." },
    { question: "How can I contact your team?", answer: "You can reach us via our contact page or email us at info@ansystems.com." },
  ];

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
      <section className="relative h-screen flex flex-col w-full  items-center justify-center overflow-hidden">
        <ImageSlider />
      

  
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Empowering Businesses with Data, Cloud & Digital Innovation
          </h1>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            We help companies unlock the true power of technology — from Data
            Engineering & Cloud Transformation to Cybersecurity & Consulting.
            Our mission is to deliver reliable, scalable, and future-ready
            solutions that drive your business growth and keep you ahead of the
            competition.
          </motion.p>

          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="flex justify-center">
            <Link
              to="/services"
              className="mx-auto px-8 py-3 justify-center items-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-100 transition"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
  
     <FAQ faqs={homeFaqs} title="Frequently Asked Questions" />
    </>
  );
};

export default Home;
