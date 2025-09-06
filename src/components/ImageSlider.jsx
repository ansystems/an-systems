import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/slider/image1.jpg";
import image2 from "../assets/slider/image2.jpg";
import image3 from "../assets/slider/image3.jpg";
import image4 from "../assets/slider/image4.jpg";
import image5 from "../assets/slider/image5.jpg";
import image6 from "../assets/slider/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl md:h-96 lg:h-[500px] mt-5 pb-2 md:mt-2">

      
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        />
  

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
