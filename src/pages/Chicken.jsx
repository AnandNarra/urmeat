import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { chickenProducts } from "../data/products";
import { openWhatsAppOrder } from "../utils/whatsappOrder";
import SectionTitle from "../components/SectionTitle";

const categories = ["Chicken Curry Cuts", "Boneless Cuts", "Other Offers"];

const CategoryPage = ({ title, subtitle, heroImage, products, heroBadge }) => {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Home
          </Link>
          <div>
            {heroBadge && (
              <span className="inline-block mb-2 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                {heroBadge}
              </span>
            )}
            <h1 className="font-display text-3xl md:text-5xl font-black text-white">{title}</h1>
            {subtitle && <p className="text-white/70 mt-2 text-sm md:text-base max-w-lg">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItemCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group card flex flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.price && (
          <span className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm text-red-600 font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
            {product.price}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-sm font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed flex-1">{product.description}</p>
        <button
          onClick={() => openWhatsAppOrder(product.name)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/20 active:scale-95"
        >
          <FaWhatsapp className="text-sm" />
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

const Chicken = () => {
  return (
    <div>
      <CategoryPage
        title="Fresh Chicken — Clean, Soft & Never Frozen"
        subtitle="Every cut is freshly processed on order. Choose your preferred style below."
        heroImage="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1600&q=80"
        heroBadge="Best Seller"
        products={chickenProducts}
      />

      <div className="section-padding bg-gray-50">
        <div className="container-max">
          {categories.map((cat) => {
            const items = chickenProducts.filter((p) => p.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} className="mb-14">
                <SectionTitle
                  tag="Category"
                  title={cat}
                  center={false}
                  subtitle=""
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {items.map((product, i) => (
                    <ProductItemCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chicken;
