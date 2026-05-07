import Faq from "../components/faqs/Faq";
import Gallery from "../components/gallery/Gallery";
import Hero from "../components/Hero";
import TimeLine from "../components/services/TimeLine";
import Subscribe from "../components/subscribe/subscribe";
import Testimonial from "../components/testimonial/Testimonial";
import Welcome from "../components/Welcome";
import WhyChooseUs from "../components/WhyChooseUs";
import faqs from "../data/homeFaq";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Gallery />
      <WhyChooseUs />
      <TimeLine />
      <Testimonial />
      <Subscribe />
      <Contact />
      <Faq faqs={faqs} />
    </>
  );
}
