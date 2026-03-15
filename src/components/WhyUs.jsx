import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaTruck, FaLeaf, FaTag } from "react-icons/fa";

const reasons = [
  {
    icon: FaTruck,
    title: "Fast Home Delivery",
    description:
      "We deliver within 30–40 minutes to your doorstep. Within 4 km of Allapur Road, Hyderabad.",
    gradient: "from-red-500 to-rose-600",
    lightBg: "bg-red-50",
    iconBg: "bg-red-600",
    border: "border-red-100",
  },
  {
    icon: FaLeaf,
    title: "Always Fresh, Never Frozen",
    description:
      "Every single order is freshly cut. We never store meat in freezers — what you get is the same-day fresh cut.",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    iconBg: "bg-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: FaTag,
    title: "Paper Price Guarantee",
    description:
      "We charge the same price as your local market bhai — absolutely no markups, no hidden charges.",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    iconBg: "bg-blue-600",
    border: "border-blue-100",
  },
];

const WhyUs = () => {
  return (
    <section id="whyus" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          tag="Why Us"
          title="Why Choose uRmeat?"
          subtitle="We understand your expectations. Here's why over a thousand families in Allapur trust us."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group relative ${reason.lightBg} border ${reason.border} rounded-2xl p-7 overflow-hidden cursor-default hover:shadow-xl transition-all duration-300`}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} rounded-t-2xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>

                {/* Decorative circle */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/40 rounded-full blur-xl group-hover:w-32 group-hover:h-32 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
