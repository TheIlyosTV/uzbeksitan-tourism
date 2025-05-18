"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Xabar yuborildi:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
    },
  };

  const inputVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    focus: { borderColor: "#2563eb", transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#1d4ed8" },
    tap: { scale: 0.95 },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.3 + i * 0.1, ease: "easeInOut" },
    }),
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16 min-h-screen bg-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Biz bilan bog&apos;laning
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Savollaringiz yoki takliflaringiz bormi? Bizga xabar yuboring, va biz
          tez orada javob beramiz!
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Ism-familiya
                </label>
                <motion.input
                  whileHover="hover"
                  variants={inputVariants}
                  className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <motion.input
                  whileHover="hover"
                  variants={inputVariants}
                  className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email manzilingiz"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Xabar
              </label>
              <motion.textarea
                whileHover="hover"
                variants={inputVariants}
                className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Xabaringizni yozing"
              ></motion.textarea>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                type="submit"
              >
                <Send className="h-5 w-5" />
                Xabar yuborish
              </motion.button>
            </div>
          </form>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center text-blue-600 mt-4"
            >
              Xabaringiz muvaffaqiyatli yuborildi!
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Aloqa ma&apos;lumotlari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                label: "Telefon",
                value: "+998 71 123 45 67",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@uzbekistantourism.uz",
              },
              {
                icon: MapPin,
                label: "Manzil",
                value: "Toshkent shahri, Amir Temur ko'chasi, 1-uy",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={contactItemVariants}
                className="flex items-center gap-4 text-gray-700"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;