import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { muttonProducts } from "../data/products";
import { openWhatsAppOrder } from "../utils/whatsappOrder";
import SectionTitle from "../components/SectionTitle";

const ProductItemCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group card flex flex-col overflow-hidden"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {product.price && (
        <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-red-600 font-bold text-sm px-3 py-1 rounded-full shadow-sm">
          {product.price}
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-display text-base font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{product.description}</p>
      <button
        onClick={() => openWhatsAppOrder(product.name)}
        className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/20 active:scale-95"
      >
        <FaWhatsapp className="text-base" />
        Order Now
      </button>
    </div>
  </motion.div>
);

const Mutton = () => (
  <div>
    {/* Hero */}
    <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80"
        alt="Fresh Mutton"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pb-10 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>
        <span className="inline-block mb-2 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
          Premium
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-black text-white">
          Fresh Mutton — Tender &amp; Freshly Cut
        </h1>
        <p className="text-white/70 mt-2 text-sm md:text-base max-w-lg">
          Local goat meat, freshly butchered every day. Zero cold storage — always at its best.
        </p>
      </div>
    </div>

    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          tag="Mutton Cuts"
          title="Choose Your Cut"
          subtitle="Freshly sourced goat meat. Available for curry or boneless options."
          center={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {muttonProducts.map((product, i) => (
            <ProductItemCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Mutton;
