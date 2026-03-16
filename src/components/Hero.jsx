import { motion } from "framer-motion";
import { FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";
import heroBg from "../assets/urmeat-link.png";
import urwaterImg from "../assets/urwater-link.png";
import urwaterBg from "../assets/crystal-water.png";

const brands = [
  {
    id: "urmeat",
    name: "urmeat.in",
    tagline: "Fresh Meat • Never Frozen",
    image: heroBg,
    href: "https://urmeat.in/",
    color: "from-red-900/80 to-orange-900/60",
    accent: "#e85d04",
    emoji: "🥩",
  },
  {
    id: "urwater",
    name: "urwater.in",
    tagline: "Pure Water • Daily Delivery",
    image: urwaterBg,
    href: "https://urwater.in/",
    color: "from-blue-900/80 to-teal-900/60",
    accent: "#0891b2",
    emoji: "💧",
  },
  {
    id: "urfood",
    name: "urfood.in",
    tagline: "Delicious Meals • At Your Door",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    href: "https://urfood.in/",
    color: "from-amber-900/80 to-yellow-900/60",
    accent: "#d97706",
    emoji: "🍛",
  },
];

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Fixed Full-screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=1600&q=80"
          alt="UR Meat background"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 text-center text-white px-4 mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold mb-3">
            UR Family of Brands
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Fresh. Pure. Delicious.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Explore our trusted brands — delivering quality straight to your doorstep.
          </p>
        </motion.div>
      </div>

      {/* 3 Brand Cards */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.id}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
              style={{ minHeight: "280px" }}
            >
              {/* Card Background Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Gradient overlay on card */}
              <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end" style={{ minHeight: "280px" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl mb-2 block">{brand.emoji}</span>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-md">
                      {brand.name}
                    </h3>
                    <p className="text-white/80 text-base mt-1 font-medium">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Arrow button */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 mt-2"
                    style={{ backgroundColor: brand.accent }}
                  >
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                </div>

                {/* Visit link label */}
                <div className="mt-3 flex items-center gap-1 text-white/70 text-xs font-semibold uppercase tracking-widest group-hover:text-white transition-colors duration-200">
                  <span>Visit Website</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center gap-1 hover:text-white transition-colors"
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
