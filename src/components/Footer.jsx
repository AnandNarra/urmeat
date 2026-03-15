import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open("https://wa.me/919705668710?text=Hello%2C%20I%20want%20to%20place%20an%20order!", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top section */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                <span className="text-white font-display font-black text-xl leading-none">u</span>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                R<span className="text-red-500">meat</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
              Your local fresh meat shop on Allapur Road. No middlemen, no cold storage —
              only fresh cuts delivered to your door the same day.
            </p>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
              Serving within 4 km of Allapur Road
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </button>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Chicken", to: "/chicken" },
                { label: "Mutton", to: "/mutton" },
                { label: "Fish", to: "/fish" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:w-3 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Gayatri Nagar, near Allapur Road, Hyderabad</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-500 flex-shrink-0" />
                <a href="tel:+919705668710" className="hover:text-white transition-colors">+91 97056 68710</a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Open daily · 7:00 AM – 9:00 PM</span>
              </li>
            </ul>

            <button
              onClick={handleWhatsApp}
              className="mt-5 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5"
            >
              <FaWhatsapp size={16} />
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} uRmeat. All rights reserved. Allapur Road, Hyderabad.</p>
          <p className="text-gray-600">
            Never Frozen · Always Fresh · Fair Price
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
