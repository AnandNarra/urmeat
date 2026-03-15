import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { GiChicken, GiFishCooked } from "react-icons/gi";
import { MdEgg } from "react-icons/md";
import { FaMountain } from "react-icons/fa";

const offers = [
  {
    icon: GiChicken,
    title: "Chicken",
    description: "Juicy, clean & full of taste. Skinless or with skin — freshly cut on every order.",
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-200",
  },
  {
    icon: MdEgg,
    title: "Eggs",
    description: "Fresh from local farms every single day. Rich in protein with golden yolks.",
    color: "from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-500",
    border: "border-yellow-200",
  },
  {
    icon: FaMountain,
    title: "Mutton",
    description: "Fresh & tender for your family feasts. Local goat, zero cold storage.",
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-500",
    border: "border-rose-200",
  },
  {
    icon: GiFishCooked,
    title: "Fish",
    description: "Straight from the morning market — cleaned, scaled, and ready to cook.",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-500",
    border: "border-blue-200",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const OfferSection = () => {
  return (
    <section id="offer" className="section-padding bg-white">
      <div className="container-max">
        <SectionTitle
          tag="What We Offer"
          title="Farm-Fresh. Always."
          subtitle="We bring you farm-fresh meat and eggs — cleaned, packed, and delivered safely to your door."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${offer.color} border ${offer.border} rounded-2xl p-6 overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-xl`}
              >
                {/* Decorative circle */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/30 rounded-full blur-lg group-hover:w-32 group-hover:h-32 transition-all duration-500" />

                <div className={`w-13 h-13 rounded-2xl bg-white/70 flex items-center justify-center mb-4 shadow-sm w-14 h-14`}>
                  <Icon className={`text-3xl ${offer.iconColor}`} />
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{offer.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
