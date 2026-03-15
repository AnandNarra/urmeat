import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const OrderCTA = () => {
  const handleOrder = () => {
    window.open(
      "https://wa.me/919705668710?text=Hello%2C%20I%20want%20to%20place%20an%20order!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-8 py-16 md:py-20 text-center text-white shadow-2xl shadow-red-700/30"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="uppercase text-xs tracking-widest text-white/70 mb-4 font-medium"
            >
              Fresh. Fast. Affordable.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight"
            >
              Want Fresh Meat Delivered{" "}
              <br className="hidden sm:block" />
              to Your Home?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/75 text-lg mb-8 max-w-lg mx-auto"
            >
              Order now and get it within 30–40 minutes around Allapur area.
            </motion.p>

            <motion.button
              onClick={handleOrder}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white text-red-600 font-bold text-lg px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <FaWhatsapp className="text-2xl text-green-500 transition-transform group-hover:rotate-12" />
              Order Now on WhatsApp
            </motion.button>

            <p className="mt-5 text-white/50 text-sm">
              📍 Serving within 4 km of Allapur Road, Hyderabad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderCTA;
