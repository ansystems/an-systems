import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites built with cutting-edge technologies.",
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform apps designed for performance and usability.",
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud integration for your growing business needs.",
    },
    {
      title: "Cybersecurity",
      desc: "Protecting your data and systems with enterprise-grade security.",
    },
    {
      title: "IT Consulting",
      desc: "Expert advice to align technology with your business strategy.",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly digital experiences.",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide a wide range of IT solutions tailored to your business
          needs. Explore what we can do for you.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
