import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import images from "../../data/gallery";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-lg  font-bold  text-primary mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Explore <span className="text-primary">Our Recent</span> Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Take a look at some of the signage solutions we’ve delivered for our
            clients.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-3 right-3 text-white text-xl"
                onClick={() => setSelectedImg(null)}
              >
                <FaTimes />
              </button>

              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              <p className="text-white text-center mt-4">{selectedImg.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
