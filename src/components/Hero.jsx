import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroSlider from "../data/heroSlider";

const Hero = () => {
  const ref = useRef(null);
  const [animateIndex, setAnimateIndex] = useState(null);

  useEffect(() => {
    if (animateIndex !== null) {
      const timer = setTimeout(() => {
        setAnimateIndex(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [animateIndex]);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      preloadImages={false}
      lazy={true}
      onSlideChange={(swiper) => setAnimateIndex(swiper.activeIndex)}
    >
      {heroSlider.map((slide, index) => (
        // <SwiperSlide key={index}>
        <div
          ref={ref}
          className="relative w-full min-h-[70vh] sm:h-[90vh] flex justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65"></div>

          {/* Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative max-w-6xl z-20 text-center px-4"
          >
            {/* Eyebrow */}
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-[0.35em] text-primary/80 font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              PDCRAFTIQ — Where Vision Becomes Structure
            </motion.p>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase text-white leading-tight">
              Signages That
              <span className="text-primary"> Makes Your</span> Business Stand
              Out
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto">
              <i>
                We are into manufacturing, supply, and installation of 3D
                signages, along with all types of creative fabrication works and
                signage materials since 1998
              </i>
            </p>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="primary-btn py-3 !mt-10 inline-flex items-center gap-3 group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Call Now to Get Started
              <MdOutlineLocalPhone className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </motion.a>
          </motion.div>
        </div>
        //   </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
