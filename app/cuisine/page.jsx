"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Palov",
    description:
      "O'zbek milliy taomlari ichida eng mashhuri, maxsus retsept bilan tayyorlanadi. Asosiy tarkibiy qismlar: guruch, sabzi, go'sht va ziravorlar.",
    imageUrl: "/images/plov.png"
  },
  {
    id: 2,
    name: "Shashlik",
    description:
      "Kabob turlaridan biri bo'lib, ko'mirda pishiriladi. Go'sht, piyoz va ziravorlar bilan marinad qilinadi.",
    imageUrl: "/images/shashlik.png"
  },
  {
    id: 3,
    name: "Somsa",
    description:
      "Go'sht va sabzavotlar solingan, tandirda yoki pechda pishirilgan mazali pishiriq.",
    imageUrl: "/images/samsa.png"
  },
  {
    id: 4,
    name: "Lag'mon",
    description:
      "Qo'lda cho'zilgan lag'mon makaronlari bilan tayyorlangan mazali sho'rva. Go'sht va sabzavotlardan foydalaniladi.",
    imageUrl: "/images/lagman.png"
  },
  {
    id: 5,
    name: "Manti",
    description:
      "Bug'da pishiriladigan, go'sht yoki sabzavot bilan to'ldirilgan xamir taom.",
    imageUrl: "/images/manti.png"
  },
  {
    id: 6,
    name: "Chuchvara",
    description:
      "Sho'rva ichida qaynatilgan, go'shtli yoki sabzavotli dumaloq xamir mahsuloti.",
    imageUrl: "/images/chuchvara.png"
  },
  {
    id: 7,
    name: "Norin",
    description:
      "Qaynatilgan ot go'shti va qo'l bilan cho'zilgan xamir bilan tayyorlanadi. Sovuq holatda tortiladi.",
    imageUrl: "/images/norin.png"
  },
  {
    id: 8,
    name: "Honim",
    description:
      "Sabzavot va piyoz aralashmasi bilan to'ldirilgan bug'da pishirilgan xamirli taom.",
    imageUrl: "/images/khonim.png"
  },
  {
    id: 9,
    name: "Sho'rva",
    description:
      "Go'shtli va sabzavotli mazali milliy sho'rva. Asosiy tarkibi kartoshka, sabzi va piyozdan iborat.",
    imageUrl: "/images/shorva.png"
  },
  {
    id: 10,
    name: "Halim",
    description:
      "Bug'doy va mol go'shti bilan tayyorlanadigan mazali ovqat. Odatda sovuq kunlarda iste'mol qilinadi.",
    imageUrl: "/images/halim.png"
  }
];

export default function Cuisine() {
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

  return (
    <div className="container mx-auto px-4 py-12 mt-16 min-h-screen bg-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          O&apos;zbek Milliy Taomlari
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O&apos;zbek oshxonasining eng mazali va an&apos;anaviy taomlari bilan tanishing!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col text-gray-900"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={dish.imageUrl}
                alt={dish.name}
                fill
                className="object-cover rounded-t-xl"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold">{dish.name}</h2>
              </div>
              <p className="text-gray-700">{dish.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}