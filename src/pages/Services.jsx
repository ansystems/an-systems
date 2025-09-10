import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "../components/Faq";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
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
      title: "Data & AI",
      desc: "Data pipelines (Airflow), real-time queues (Kafka, Kinesis), data processing (Flink, Spark), storage (Parquet, Delta, Avro), warehousing (Snowflake/Star Schema), CDC (Debezium), and ML engineering.",
    },
    {
      title: "Cloud",
      desc: "Cloud architecture, migration, FinOps, DevOps, CI/CD pipelines, and platform engineering tailored to your needs.",
    },
    {
      title: "Digital Engineering",
      desc: "Product engineering, modern web/mobile apps, API development, and scalable digital platforms.",
    },
    {
      title: "Software Testing & QA",
      desc: "Manual, automated, performance, security, mobile app, and API testing with industry-standard tools.",
    },
    {
      title: "Cybersecurity",
      desc: "Vulnerability assessment, penetration testing, risk management, and enterprise-grade protection.",
    },
    {
      title: "Learning & Talent",
      desc: "Upskilling teams in Data Engineering, AI/ML, Cloud, and Digital Tech. Talent & organisation transformation.",
    },
    {
      title: "Technology Transformation",
      desc: "Helping businesses adopt emerging technologies, cloud-native strategies, and observability practices.",
    },
    {
      title: "Managed Services",
      desc: "Comprehensive IT management, monitoring, and support to keep your systems reliable and cost-efficient.",
    },
    {
      title: "Consulting Services",
      desc: "Expert guidance to align IT strategy with business goals, leveraging modern data and digital solutions.",
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
                    <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            whileHover={{
                scale: 1.09,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                borderColor: "white", // purple border
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)", // 3D shadow
              }}
              whileTap={{
                scale: 0.8,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.08)", // transparent glass effect
                 borderColor: "white", // darker purple when clicked
                boxShadow: "0px 10px 22px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            
            
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                       border border-gray-700 shadow-lg hover:shadow-2xl 
                       hover:border-blue-500 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </motion.div>
        ))      }
      </div>
            
    </section>
  );
};

export default Services;
