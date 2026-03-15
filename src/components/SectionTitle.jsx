import { motion } from "framer-motion";

const SectionTitle = ({
  tag = "",
  title,
  subtitle = "",
  center = true,
  light = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${center ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span
          className={`inline-block mb-3 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${
            light
              ? "bg-white/20 text-white"
              : "bg-red-50 text-red-600"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 inline-block h-1 w-16 rounded-full ${
          light ? "bg-white/50" : "bg-red-600"
        } ${center ? "block mx-auto" : ""}`}
      />
    </motion.div>
  );
};

export default SectionTitle;
