import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Hero Text Parallax (scroll speed different)
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

    // Hero Image Parallax
    gsap.fromTo(
      imgRef.current,
      { scale: 1.2, y: 50 },
      {
        scale: 1,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={imgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Innovative IT Solutions for Your Business
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          From web development to cloud integration, we deliver technology that
          drives growth and innovation.
        </p>
        <a
          href="/services"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-2xl"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
}
