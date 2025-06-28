import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import aboutImage from "../assets/images/AboutUs-bg.jpg";
import {
  FaSeedling,
  FaCogs,
  FaCertificate,
  FaHandsHelping,
} from "react-icons/fa";

export default function About() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen px-6 py-20 md:px-20 bg-white text-gray-800 flex flex-col md:flex-row gap-12 items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      {/* Image Section */}
      <motion.div className="w-full md:w-1/2" variants={itemVariants}>
        <img
          src={aboutImage}
          alt="About"
          className="w-full h-[600px] object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Text & Features Section */}
      <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
        <motion.h2
          className="text-4xl font-extrabold text-green-900 mb-2"
          variants={itemVariants}
        >
          {t("about.title")}
        </motion.h2>

        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4" />
        <motion.p className="text-lg text-gray-600" variants={itemVariants}>
          {t("about.description")}
        </motion.p>

        {/* Features */}
        <div className="flex flex-col gap-6">
          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <FaSeedling className="text-green-600 w-7 h-7" />
            <p>{t("about.features.pureGrains")}</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <FaCogs className="text-green-600 w-7 h-7" />
            <p>{t("about.features.advancedMachinery")}</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <FaHandsHelping className="text-green-600 w-7 h-7" />
            <p>{t("about.features.organicallyProcessed")}</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <FaCertificate className="text-green-600 w-7 h-7" />
            <p>{t("about.features.qualityAssured")}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
