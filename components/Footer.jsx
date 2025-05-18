"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Send, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navItems = [
    { href: "/regions", label: "Viloyatlar" },
    { href: "/landmarks", label: "Ziyoratgohlar" },
    { href: "/culture", label: "Madaniyat" },
    { href: "/plan-trip", label: "Sayohatni rejalashtirish" },
    { href: "/amenities", label: "Turizm qulayliklari" },
    { href: "/tour-packages", label: "Sayohat paketlari" },
    { href: "/contact", label: "Bog'lanish" },
  ];

  const usefulLinks = [
    { href: "/about", label: "Biz haqimizda" },
    { href: "/faq", label: "Ko'p so'raladigan savollar" },
    { href: "/terms", label: "Foydalanish shartlari" },
    { href: "/privacy", label: "Maxfiylik siyosati" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://t.me/prosta_shox2", icon: Send, label: "Telegram" },
    { href: "https://www.instagram.com/shohruh_454/", icon: Instagram, label: "Instagram" },
  ];

  // Animation variants
  const footerSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#2563eb", // blue-600
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1d4ed8", // blue-700
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerSectionVariants}
            className="space-y-4"
          >
            <div className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-3 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-white font-bold text-xl">UZ</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                Uzbekiston
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              O'zbekistonning boy madaniyati, muqaddas ziyoratgohlari va
              noyob taomlarini kashf eting. Sayohatingizni biz bilan
              rejalashtiring!
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerSectionVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Sayohat</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-600 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerSectionVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Foydali Havolalar</h4>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-600 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerSectionVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Biz bilan Aloqada</h4>
            <p className="text-sm text-gray-300">
              Yangiliklarimizga obuna bo'ling va eng so'nggi sayohat
              takliflarimizdan xabardor bo'ling.
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email manzilingiz"
                className="w-full py-2 px-4 pr-12 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-md"
              >
                <Mail className="h-5 w-5" />
              </motion.button>
            </div>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-sm text-blue-400"
                >
                  Obuna muvaffaqiyatli! Tez orada xabarlarimizni olasiz.
                </motion.p>
              )}
            </AnimatePresence>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#2563eb" }}
                  className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} O'zbekiston Sayyohlik Salohiyati. Barcha
            huquqlar himoyalangan.
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-50 pointer-events-none" />
    </footer>
  );
};

export default Footer;