import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/passport/oneworld.webp";
import img2 from "../../assets/passport/globe.jpg";
import img3 from "../../assets/passport/Gateway.webp";
import img4 from "../../assets/passport/work.webp";
import img5 from "../../assets/passport/work1.webp";

const teamMembers = [
  {
    name: "Aman",
    src: img1,
  },
  {
    name: "Prakhar",
    src: img2,
  },
  {
    name: "Virat",
    src: img3,
  },
  {
    name: "Vivek",
    src: img4,
  },
  {
    name: "Rahul",
    src: img5,
  },
];

export default function Teams() {
  return (
    <div className="container mx-auto py-14 md:py-24 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
        Meet <span className="text-primary">Our Team</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((team, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-none mb-0 sm:shadow-lg sm:mb-5  overflow-hidden flex flex-col items-center">
              <img
                src={team.src}
                alt={team.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Team Member</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
