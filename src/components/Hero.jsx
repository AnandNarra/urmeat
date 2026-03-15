import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1600&q=80",
    alt: "Fresh chicken market",
  },
  {
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80",
    alt: "Fresh mutton cuts",
  },
  {
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1600&q=80",
    alt: "Fresh fish market",
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
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      {/* Content */}
      <div className="relative z-20 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-sm font-medium"
        >
          <FaMapMarkerAlt className="text-red-400 text-xs flex-shrink-0" />
          <span>Serving Allapur Road, Hyderabad (within 4 km)</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance mb-6"
        >
          Never Frozen.{" "}
          <span className="text-red-500 drop-shadow-lg">Fresh Meat.</span>
          <br />
          Fair Price &amp; Fast Delivery!
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Get fresh mutton, chicken, fish, and eggs delivered right to your home.
          Never frozen, always fresh — just like from the market.
        </motion.p>

        {/* CTA & whatsapp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={handleOrder}
            className="btn-primary text-base px-8 py-4 shadow-2xl shadow-red-600/40 group"
          >
            <FaWhatsapp className="text-lg transition-transform group-hover:rotate-12" />
            Order Now
          </button>
          <button
            onClick={scrollToProducts}
            className="btn-outline-white text-base px-8 py-4"
          >
            View Products
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center gap-8 mt-14 flex-wrap"
        >
          {[
            { value: "30–40 min", label: "Delivery" },
            { value: "4 km", label: "Radius" },
            { value: "100%", label: "Fresh" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
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
