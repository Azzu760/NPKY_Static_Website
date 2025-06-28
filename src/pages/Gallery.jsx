import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gallery1 from "../assets/images/rice.jpg";
import gallery2 from "../assets/images/rice.jpg";
import gallery3 from "../assets/images/rice.jpg";
import gallery4 from "../assets/images/rice.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="px-6 py-16 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-green-900 mb-2">
          {t("gallery.title")}
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4" />
        <p className="text-gray-700 text-lg">{t("gallery.description")}</p>
      </motion.div>

      {/* Auto-scrolling gallery */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {images.concat(images).map((img, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
