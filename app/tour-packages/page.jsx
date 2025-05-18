"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, ChevronRight } from "lucide-react";

const tourPackages = [
  {
    id: 1,
    name: "Ipak yo'li bo'ylab sayohat",
    duration: "10 kun",
    price: 1500,
    description:
      "Samarqand, Buxoro va Xiva shaharlarini o'z ichiga olgan klassik tur",
    image: "/images/silk-road-tour.png",
  },
  {
    id: 2,
    name: "Toshkent va Farg'ona vodiysi",
    duration: "7 kun",
    price: 1200,
    description: "Poytaxt va Farg'ona vodiysining go'zal tabiatini kashf eting",
    image: "/images/tashkent-fergana-tour.png",
  },
  {
    id: 3,
    name: "O'zbek oshxonasi safari",
    duration: "5 kun",
    price: 800,
    description: "O'zbek milliy taomlari va ularni tayyorlash sirlarini o'rganing",
    image: "/images/culinary-tour.png",
  },
  {
    id: 4,
    name: "Qadimiy qal'alar sayohati",
    duration: "8 kun",
    price: 1300,
    description: "Xorazm va Qoraqalpog'istondagi qadimiy qal'alarni ziyorat qiling",
    image: "/images/ancient-fortresses-tour.png",
  },
];

export default function TourPackagesPage() {
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

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#1d4ed8" },
    tap: { scale: 0.95 },
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
          Sayohat Paketlari
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O'zbekistonning eng muhim diqqatga sazovor joylarini kashf eting! Bizning
          sayohat paketlarimiz sizga unutilmas tajribalar taqdim etadi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((pack, index) => (
          <motion.div
            key={pack.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden text-gray-900"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={pack.image}
                alt={pack.name}
                fill
                className="object-cover rounded-t-xl"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {pack.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{pack.description}</p>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>{pack.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <span>${pack.price}</span>
                </div>
              </div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="inline-block"
              >
                <Link
                  href="/plan-trip"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
                >
                  Buyurtma berish
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}