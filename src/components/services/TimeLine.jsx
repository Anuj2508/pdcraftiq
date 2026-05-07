import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/passport/oneworld.webp";
import img2 from "../../assets/passport/work.webp";
import img3 from "../../assets/passport/work1.webp";
import img4 from "../../assets/passport/Gateway.webp";

const steps = [
  {
    step: "1",
    title: "Understand Your Requirement",
    desc: "We listen to your needs and suggest the best possible solution.",
    src: img1,
  },
  {
    step: "2",
    title: "Design & Planning",
    desc: "We create a design that perfectly fits your brand and space.",
    src: img2,
  },
  {
    step: "3",
    title: "Manufacturing",
    desc: "We build your signage using strong and durable materials.",
    src: img3,
  },
  {
    step: "4",
    title: "Delivery & Installation",
    desc: "We deliver and install everything at your location smoothly.",
    src: img4,
  },
];

export default function TimeLine() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto py-6 sm:py-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-8 sm:mb-24 text-gray-800 dark:text-white"
        >
          How we work <span className="text-primary">Step-by-Step</span> Process
        </motion.h1>
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-0 w-1 bg-light_primary h-full transform -translate-x-1/2"></div>

          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row items-start mb-24 sm:mb-20"
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Left side content */}
              <div
                className={`sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right text-center"
                    : "sm:order-12 sm:pl-12 sm:text-left text-center"
                }`}
              >
                <div
                  className={`w-full flex ${
                    i % 2 === 0
                      ? "justify-center sm:justify-end"
                      : "justify-center sm:justify-start"
                  }`}
                >
                  <div className="bg-light_primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>

              {/* Connector for mobile */}
              <div className="sm:hidden h-1 w-16 bg-light_primary my-4 mx-auto rounded-full"></div>

              {/* Right side image */}
              <div
                className={`sm:w-1/2 flex ${
                  i % 2 === 0
                    ? "sm:pl-12 justify-start"
                    : "sm:pr-12 sm:order-1 justify-end"
                }`}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="rounded-2xl w-full max-w-md object-cover shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-dark2 dark:text-gray-300 text-center text-md sm:text-lg">
          We deliver and install at your location.
        </p>
        <p className="text-primary dark:text-gray-300 text-center text-md sm:text-lg">
          <i>You share your idea — we take care of the rest.</i>
        </p>
      </div>
    </section>
  );
}
