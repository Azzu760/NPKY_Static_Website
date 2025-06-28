import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import riceImage from "../assets/images/Rice.jpg";
import branImage from "../assets/images/Rice-bran.jpg";
import huskImage from "../assets/images/rice-husk.jpg";
import residualImage from "../assets/images/khanda.jpg";

const productsData = [
  {
    key: "riceTypes",
    image: riceImage,
    alt: "Different types of rice",
  },
  {
    key: "bran",
    image: branImage,
    alt: "Bran",
  },
  {
    key: "residualRice",
    image: residualImage,
    alt: "Small residual rice",
  },
  {
    key: "husk",
    image: huskImage,
    alt: "Husk",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Products() {
  const { t } = useTranslation();

  return (
    <section id="products" className="max-w-7xl  mx-auto px-6 py-16 bg-gray-50">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-green-900 mb-2">
          {t("products.title")}
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4" />
        <p className="text-gray-700 text-lg">{t("products.description")}</p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {productsData.map(({ key, image, alt }) => {
          const items = t(`products.${key}`, { returnObjects: true });
          return (
            <motion.div
              key={key}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-green-800 capitalize">
                  {key === "riceTypes"
                    ? "Rice Types"
                    : key === "bran"
                    ? "Bran Products"
                    : key === "residualRice"
                    ? "Residual Rice"
                    : "Rice Husk"}
                </h3>

                <ul className="list-disc list-inside text-gray-700 space-y-2 flex-grow text-left">
                  {items.map((item, idx) => (
                    <li key={idx} className="text-base font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
