// import React from "react";
// import { motion } from "framer-motion";
// import { MdOutlineLocalPhone } from "react-icons/md";

// const BookConsultation = () => {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="container  mx-auto py-14 md:py-24 ">
//         <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
//           <p className="text-lg  font-bold   mb-2">
//             Everything Under One Roof !
//           </p>
//           <motion.h1
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl font-bold text-center  mb-4 sm:mb-8 text-gray-800 dark:text-white"
//           >
//             Top Rated By{" "}
//             <span className="text-primary">Customers & Immigration</span> Firms
//             With 90% Success Rate.
//           </motion.h1>
//           <button className="primary-btn !mt-8 inline-flex items-center gap-3 group">
//             Book A Consultation
//             <MdOutlineLocalPhone className="group-hover:animate-bounce group-hover:text-lg duration-200" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookConsultation;

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";

const features = [
  {
    title: "Everything Under One Roof",
    desc: "From design to installation, we handle the complete process — no need for multiple vendors.",
  },
  {
    title: "Experience That Shows",
    desc: "25+ years of industry expertise delivering reliable and proven solutions.",
  },
  {
    title: "Made for Every Business",
    desc: "Solutions tailored for shops, offices, and large enterprises within your budget.",
  },
  {
    title: "Pan India & Global Delivery",
    desc: "We deliver across India and ship internationally with complete safety.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-lg  font-bold  text-primary mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Built on <span className="text-primary"> Experience </span> .
            Delivered with
            <span className="text-primary">Trust.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-6 space-y-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[36px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900"></div>

              <h3 className="text-lg pl-4 font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 pl-4 dark:text-gray-300 mt-1 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="primary-btn inline-flex items-center gap-3 px-6 py-3 group">
            Book A Consultation
            <MdOutlineLocalPhone className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
