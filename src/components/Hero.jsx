import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import aiWaterImg from "../assets/crystal-water.png";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=1600&q=80",
    alt: "UR Meat - Fresh Raw Cuts",
    href: "https://urmeat.in/",
  },
  {
    image: aiWaterImg,
    alt: "UR Water - Crystal Clear Water",
    href: "https://urwater.in/",
  },
  {
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80",
    alt: "UR Food - Delicious Meals",
    href: "https://urfood.in/",
  },
];

const Hero = () => {
  const handleOrder = () => {
    window.open(
      "https://wa.me/919705668710?text=Hello%2C%20I%20want%20to%20place%20an%20order!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            {slide.href ? (
              <a
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative z-30"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </a>
            ) : (
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-1 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
