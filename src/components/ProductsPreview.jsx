import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { homeProducts } from "../data/products";
import { motion } from "framer-motion";

const ProductsPreview = () => {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          tag="Our Menu"
          title="What We Have For You"
          subtitle="Farm-fresh meat and eggs — sourced daily, cleaned, and delivered same day."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
