import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/images/image3.png";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7] dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-3 lg:max-w-[480px] mx-auto">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Let’s <span className="text-primary">Create </span> Your Signage
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 dark:text-gray-300 text-md sm:text-lg">
              Get a design that attracts customers and builds your brand. Talk
              to our{" "}
              <span className="text-primary font-semibold">
                team today and get the best
              </span>{" "}
              solution.
            </p>

            {/* Button */}
            <a
              href="#"
              className="primary-btn !mt-8 inline-flex items-center gap-3 group"
            >
              Call Now
              <MdOutlineLocalPhone className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
