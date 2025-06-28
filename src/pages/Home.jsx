import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-green-50 via-green-100 to-green-200"
    >
      {/* Left Panel */}
      <motion.div
        className="flex flex-col justify-center items-start p-12 md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-green-900 leading-tight">
          {t("firm.name")}
        </h1>

        <div className="w-32 h-1 bg-green-600 rounded-full mb-8 shadow-md" />

        <p className="text-lg text-green-800 max-w-xl mb-8 leading-relaxed tracking-wide">
          {t("home.title")}
        </p>

        <p className="text-md text-green-700 max-w-lg mb-12 leading-relaxed tracking-wide">
          {t("home.description")}
        </p>

        <a
          href="#about"
          className="px-12 py-4 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
        >
          {t("home.knowMore")}
        </a>
      </motion.div>

      {/* Right Decorative Panel */}
      <div className="relative md:w-1/2 flex justify-center items-center overflow-hidden">
        {/* Soft glowing circles */}
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-40 blur-3xl"
          style={{ width: 180, height: 180, top: "20%", left: "15%" }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-30 blur-3xl"
          style={{ width: 130, height: 130, top: "55%", left: "75%" }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-green-200 opacity-40 blur-2xl"
          style={{ width: 150, height: 150, top: "40%", left: "85%" }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central shape */}
        <motion.div
          className="rounded-3xl shadow-2xl bg-gradient-to-tr from-green-600 to-green-400"
          style={{ width: 260, height: 260 }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 12, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
