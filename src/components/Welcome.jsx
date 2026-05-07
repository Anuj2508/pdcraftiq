import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import welcomeImg from "../assets/passport/oneworld.webp";
import blob from "../assets/images/blob.svg";

const Welcome = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px]"
      >
        {/* Brand Info */}
        <div className="flex flex-col justify-center relative z-20">
          <div className="text-center md:text-left space-y-5 lg:max-w-1/2">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              About PDCRAFTIQ
            </p>

            <h1 className="text-4xl font-bold text-center sm:text-left mb-8 text-gray-800 dark:text-white">
              Where <span className="text-primary">Design</span> Meets
              Craftsmanship
            </h1>

            <p className="text-dark2 dark:text-gray-300 text-md sm:text-lg">
              25 Years of Experience You Can Trust PDCRAFTIQ has been creating
              strong and attractive signages for over two decades .
            </p>
            <p className="text-dark2 dark:text-gray-300 text-md sm:text-lg">
              At PDCRAFTIQ, we believe a brand's presence should be felt before
              a word is spoken. We combine visionary creative design with the
              finest materials to transform concepts into commanding physical
              realities. Every installation we create is a testament to
              precision, artistry, and an uncompromising standard of excellence.
            </p>

            <i className="text-primary dark:text-gray-300 text-md sm:text-lg">
              From small shops to large projects, we deliver quality work that
              lasts.
            </i>

            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Discover Our Work
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={welcomeImg}
            alt="PDCRAFTIQ Craftsmanship"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <img
            src={blob}
            alt="blob"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
