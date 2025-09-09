import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = ({ faqs, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white"
    style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-300  "
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-[#1f2937] text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
