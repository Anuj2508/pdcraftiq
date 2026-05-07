import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BookConsultation = () => {
  return (
    <section className="bg-primary/5 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto py-20 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" mx-auto space-y-8"
        >
          {/* Eyebrow */}
          <p className="text-lg  font-bold  text-primary mb-2">
            Start Your Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Let's Build Something That{" "}
            <span className="text-primary">Stands Out</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-xl mx-auto">
            Bring your idea to life with PDCRAFTIQ. Every great brand begins
            with a single conversation — get in touch today and let us craft
            something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/contact"
              className="primary-btn flex items-center gap-2 group px-8 py-4 text-lg"
            >
              Start Your Project
              <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </Link>
            {/* <a
              href="/services"
              className="text-primary font-semibold underline underline-offset-4 hover:opacity-70 transition"
            >
              Explore Our Services
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookConsultation;
