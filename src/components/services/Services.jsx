// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import img1 from "../../assets/images/image1.png";
// import img2 from "../../assets/images/image2.png";
// import img3 from "../../assets/images/image3.png";
// import img4 from "../../assets/images/image4.png";

// const services = [
//   {
//     id: 1,
//     title: "Business Visa",
//     img: img1,
//     link: "/",
//   },
//   {
//     id: 2,
//     title: "Dependent Visa",
//     img: img2,
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Family Visa",
//     img: img3,
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Investor / Entrepreneur Visa",
//     img: img4,
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Student Visa",
//     img: img1,
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Visitor Visa",
//     img: img2,
//     link: "#",
//   },
// ];

// const Services = () => {
//   return (
//     <section>
//       <div className="container mx-auto py-14 md:py-24">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-lg  font-bold  text-primary mb-2">
//             Our Visa Services
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             We excel in providing a Wide Range of Services including
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white group rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
//             >
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="w-full h-56 object-cover transform  transition duration-500"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                 <Link
//                   to={service.link}
//                   className="primary-btn mt-4 inline-flex items-center gap-3 group"
//                 >
//                   Learn more
//                   <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import { FaLayerGroup, FaPaintRoller, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaLayerGroup />,
    title: "Complete Signage Solutions",
    desc: "We provide all types of 3D sign boards for business branding. Designed to attract attention and improve visibility.",
    points: [
      "3D Aluminium Signages",
      "3D Metal Signages",
      "LED Illuminated Sign Boards",
      "Acrylic Signages",
      "Custom Sign Boards",
    ],
  },
  {
    icon: <FaPaintRoller />,
    title: "Murals & Creative Work",
    desc: "We create wall murals and artistic installations — perfect for offices, public spaces, and branding.",
    points: [],
  },
  {
    icon: <FaTools />,
    title: "Turnkey Projects",
    desc: "From design to final setup — everything is managed by us. No need to coordinate with multiple teams.",
    points: [],
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-lg  font-bold  text-primary mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Smart Solutions for <span className="text-primary">Your Brand</span>{" "}
            Visibility
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            We deliver high-quality signage and creative solutions that help
            your business stand out.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Icon */}
              <div className="text-primary text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {service.desc}
              </p>

              {/* Points */}
              {service.points.length > 0 && (
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
