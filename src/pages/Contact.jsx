import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-green-800 mb-2">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-700">{t("contact.description")}</p>
        </motion.div>

        {/* Info and Map */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-green-50 rounded-xl shadow-md p-8 space-y-6 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-base font-semibold text-green-800">
                  {t("contact.address")}
                </h3>
                <p className="text-gray-700 mt-1">
                  Kapilvastu-10, Pachehara, Kapilvastu, Nepal
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-base font-semibold text-green-800">
                  {t("contact.phone")}
                </h3>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>+977-9857050307</li>
                  <li>+977-9847040307</li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-base font-semibold text-green-800">
                  {t("contact.email")}
                </h3>
                <p className="text-gray-700 mt-1">info@ricemill.com</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <iframe
              title="New Puja Khadya Udhyog Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7071.265133943079!2d83.12976100000002!3d27.604919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM2JzExLjMiTiA4M8KwMDcnNTEuMiJF!5e0!3m2!1sen!2snp!4v1751102704917!5m2!1sen!2snp"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
