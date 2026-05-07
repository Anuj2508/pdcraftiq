import React from "react";
import TimeLine from "../../components/services/TimeLine";
import OurStrengths from "../../components/services/OurStrengths";

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/plane.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto text-center flex flex-col justify-center items-center py-14 md:py-24 relative z-10">
          <h1 className="text-6xl font-bold mb-2 ">Why Choose PDCRAFTIQ</h1>
          <p className="mt-3 text-lg max-w-5xl mx-auto ">
            We deliver complete signage solutions with a focus on quality,
            durability, and design. From concept to installation, we ensure
            smooth execution and impactful results for your business.
          </p>
        </div>
      </div>

      {/* Unique Selling Points */}
      <OurStrengths />

      {/* Process Steps */}
      <TimeLine />
    </section>
  );
}
