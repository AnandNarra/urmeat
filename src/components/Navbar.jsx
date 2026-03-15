import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/", section: null },
  { label: "Products", to: "/#products", section: "products" },
  { label: "We Offer", to: "/#offer", section: "offer" },
  { label: "About", to: "/#about", section: "about" },
  { label: "Why Us", to: "/#whyus", section: "whyus" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    if (link.section) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.to);
    }
  };

  const handleOrderNow = () => {
    setMenuOpen(false);
    window.open("https://wa.me/919705668710?text=Hello%2C%20I%20want%20to%20place%20an%20order!", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
            <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-display font-black text-lg leading-none">u</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled || menuOpen ? "text-gray-900" : "text-white"}`}>
              R<span className="text-red-600">meat</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-red-50 hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-white hover:text-red-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleOrderNow}
              className="btn-primary text-sm py-2.5 px-5 gap-2"
            >
              <FaWhatsapp className="text-base" />
              Order Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled || menuOpen ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-xl pt-4 pb-6 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link)}
                  className="py-3 px-4 rounded-xl text-gray-800 font-medium text-base hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={handleOrderNow}
                className="mt-3 btn-primary w-full justify-center py-3 text-base"
              >
                <FaWhatsapp className="text-lg" />
                Order Now on WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
