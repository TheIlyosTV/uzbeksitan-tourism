"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

const regions = [
  {
    id: 1,
    name: "Toshkent viloyati",
    image: "/images/tashkent-region.png",
    description: "Poytaxt va zamonaviy shaharlar",
  },
  {
    id: 2,
    name: "Samarqand viloyati",
    image: "/images/samarkand-region.png",
    description: "Qadimiy me'morchilik va tarix",
  },
  {
    id: 3,
    name: "Buxoro viloyati",
    image: "/images/bukhara-region.jpg",
    description: "Ming gumbazlar shahri",
  },
  {
    id: 4,
    name: "Xorazm viloyati",
    image: "/images/khorezm-region.jpg",
    description: "Qadimiy Xorazm podsholigi",
  },
  {
    id: 5,
    name: "Qashqadaryo viloyati",
    image: "/images/kashkadarya-region.jpg",
    description: "Amir Temur vatani",
  },
  {
    id: 6,
    name: "Surxondaryo viloyati",
    image: "/images/surkhandarya-region.png",
    description: "Qadimiy sivilizatsiyalar maskani",
  },
  {
    id: 7,
    name: "Navoiy viloyati",
    image: "/images/navoi-region.png",
    description: "Qizilqum cho'li va sanoat",
  },
  {
    id: 8,
    name: "Andijon viloyati",
    image: "/images/andijan-region.png",
    description: "Bobur vatani",
  },
  {
    id: 9,
    name: "Farg'ona viloyati",
    image: "/images/fergana-region.png",
    description: "Farg'ona vodiysi gullari",
  },
  {
    id: 10,
    name: "Namangan viloyati",
    image: "/images/namangan-region.png",
    description: "Bog'lar va gullar shahri",
  },
  {
    id: 11,
    name: "Sirdaryo viloyati",
    image: "/images/syrdarya-region.png",
    description: "Sirdaryo bo'yidagi viloyat",
  },
  {
    id: 12,
    name: "Jizzax viloyati",
    image: "/images/jizzakh-region.png",
    description: "Qo'ylarning serjun zoti vatani",
  },
];

const RegionsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeInOut" },
    }),
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#2563eb",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
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
          O'zbekiston Viloyatlari
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O'zbekistonning har bir viloyati o'ziga xos tarix, madaniyat va tabiat
          go'zalliklari bilan ajralib turadi. Ular bilan tanishing!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regions.map((region, index) => (
          <motion.div
            key={region.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden text-gray-900"
          >
            <Link href={`/regions/${region.id}`} className="block">
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover rounded-t-xl"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {region.name}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{region.description}</p>
                <motion.div
                  whileHover="hover"
                  variants={linkVariants}
                  className="flex items-center gap-2 text-blue-600 font-semibold"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Batafsil ma'lumot</span>
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;