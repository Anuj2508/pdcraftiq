import React from "react";
import img from "../../assets/images/image1.png";
import { FaHandshake } from "react-icons/fa";
import Teams from "../../components/teams/Teams";
import BookConsultation from "../../components/services/BookConsultation";
import { Eye, Goal } from "lucide-react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Hero / Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/globe.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto text-center flex flex-col justify-center items-center py-14 md:py-24 relative z-10">
          <h1 className="text-6xl font-bold mb-2 ">
            Complete Signage Solutions
          </h1>
          <p className="mt-3 text-lg max-w-5xl mx-auto ">
            PDCRAFTIQ delivers high-quality signage and branding solutions that
            enhance your business visibility and identity. From concept to
            installation, we make your brand stand out.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-md sm:text-lg leading-relaxed">
            PDCRAFTIQ was built with a vision to provide complete signage
            solutions under one roof. We specialize in designing and
            manufacturing high-quality sign boards that help businesses attract
            attention and grow their presence.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-md sm:text-lg leading-relaxed">
            With years of industry experience, we focus on quality materials,
            creative designs, and smooth execution. From small businesses to
            large brands, we deliver reliable solutions tailored to every need.
          </p>
        </div>
        <div>
          <img src={img} alt="Our Story" className="rounded-2xl shadow-lg" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-100 dark:bg-gray-800 ">
        <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaHandshake className="text-primary text-3xl" />
              <h3 className="text-2xl font-semibold">Our Value</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in quality craftsmanship, honest pricing, and
              delivering solutions that create real value for our clients.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Eye className="text-primary text-3xl" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To become a trusted name in signage and branding by delivering
              innovative, high-quality, and impactful visual solutions.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Goal className="text-primary text-3xl" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To provide end-to-end signage services with creative design,
              durable materials, and seamless execution for every project.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <Teams />

      {/* Book Consultation */}
      <BookConsultation />
    </section>
  );
};

export default About;
