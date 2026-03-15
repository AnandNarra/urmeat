import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { openWhatsAppOrder } from "../utils/whatsappOrder";

const ProductCard = ({ product, index = 0 }) => {
  const navigate = useNavigate();
  const { name, tagline, price, description, image, route, badge } = product;

  const handleOrder = (e) => {
    e.stopPropagation();
    openWhatsAppOrder(name);
  };

  const handleCardClick = () => {
    if (route) navigate(route);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group card flex flex-col overflow-hidden bg-white ${route ? "cursor-pointer" : ""}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
        {/* Price chip */}
        <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-red-600 font-bold text-sm px-3 py-1 rounded-full shadow-md">
          {price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-xs font-medium text-red-500 uppercase tracking-wide mt-0.5 mb-2">
          {tagline}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>

        <button
          onClick={handleOrder}
          className="mt-4 btn-primary w-full justify-center text-sm py-2.5 group/btn"
        >
          <FaWhatsapp className="text-base transition-transform group-hover/btn:rotate-12" />
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
