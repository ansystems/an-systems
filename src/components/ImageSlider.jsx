import  { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/slider/image1.jpg";
import image2 from "../assets/slider/image2.jpg";
import image3 from "../assets/slider/image3.jpg";
import image4 from "../assets/slider/image4.jpg";
import image5 from "../assets/slider/image5.jpg";
import image6 from "../assets/slider/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);


  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  

  return (
    <div className="relative py-20 px-6  w-full overflow-hidden pt-15 rounded-2xl md:h-96 lg:h-[500px] h-100 pb-2 md:mt-2 bg-gray-900">
      
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-100 md:h-96 lg:h-[500px] p-2  object-cover overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        />
        <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
          <i className="ri-arrow-right-fill"></i>
        </button>

        <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
          <i className="ri-arrow-left-line"></i>
        </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full w-2.5 h-2.5 transition-colors ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;
