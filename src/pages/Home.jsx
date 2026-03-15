import Hero from "../components/Hero";
import ProductsPreview from "../components/ProductsPreview";
import OfferSection from "../components/OfferSection";
import AboutSection from "../components/AboutSection";
import WhyUs from "../components/WhyUs";
import OrderCTA from "../components/OrderCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <OfferSection />
      <AboutSection />
      <WhyUs />
      <OrderCTA />
    </>
  );
};

export default Home;
