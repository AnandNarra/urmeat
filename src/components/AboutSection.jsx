import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaHandshake, FaSnowflake, FaTag, FaTruck } from "react-icons/fa";

const highlights = [
  { icon: FaHandshake, label: "Local & Trustworthy", desc: "Gayatri Nagar, Allapur Road" },
  { icon: FaSnowflake, label: "Never Frozen Always Fresh", desc: "Cut fresh on every order" },
  { icon: FaTag, label: "Fair Paper Price", desc: "Same as your local market" },
  { icon: FaTruck, label: "Fast Home Delivery", desc: "30–40 mins to your door" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-white/80">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Local{" "}
              <span className="text-red-500">Fresh Meat</span>{" "}
              People
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              We're a small, honest meat shop right here on{" "}
              <strong className="text-white">Allapur Road, Hyderabad</strong>. From Gayatri Nagar to your kitchen.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              For us, it's not just business — it's{" "}
              <em className="text-emerald-400 font-semibold not-italic">"mana ooru mana quality"</em>.
              We bring you fresh, clean, and fairly priced meat — just like how you'd buy from your trusted market bhai.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["No middlemen", "No cold storage", "Only fresh cuts", "Same-day delivery"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-red-500 block" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 group cursor-default hover:border-red-500/30 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center mb-3 group-hover:bg-red-600/30 transition-colors">
                    <Icon className="text-red-400 text-xl" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
