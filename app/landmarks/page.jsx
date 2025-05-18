"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Landmark } from "lucide-react";

const landmarks = [
  {
    id: 1,
    name: "Registon",
    description: "Samarqanddagi tarixiy maydon",
    imageUrl: "/images/registan.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1420,
    type: "Maydon",
  },
  {
    id: 2,
    name: "Ark Qal'asi",
    description: "Buxorodagi qadimiy qal'a",
    imageUrl: "/images/ark-fortress.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 500,
    type: "Qal'a",
  },
  {
    id: 3,
    name: "Ichan Qal'a",
    description: "Xivadagi tarixiy shahar",
    imageUrl: "/images/ichan-kala.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: 1600,
    type: "Shahar",
  },
  {
    id: 4,
    name: "Shah-i-Zinda",
    description: "Samarqanddagi arxitektura yodgorligi",
    imageUrl: "/images/shah-i-zinda.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1100,
    type: "Kompleks",
  },
  {
    id: 5,
    name: "Bibi-Xonim Masjidi",
    description: "Samarqanddagi eng katta masjid",
    imageUrl: "/images/bibi-xonim.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1399,
    type: "Masjid",
  },
  {
    id: 6,
    name: "Ulug'bek Rasadxonasi",
    description: "Samarqanddagi ulug' astronomik observatoriya",
    imageUrl: "/images/ulughbek.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1428,
    type: "Rasadxona",
  },
  {
    id: 7,
    name: "Tilla-Kori Madrasasi",
    description: "Samarqanddagi eng mashhur madrasalardan biri",
    imageUrl: "/images/tilla-kori.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1646,
    type: "Madrasah",
  },
  {
    id: 8,
    name: "Khoja Daniyar maqbarasi",
    description: "Xiva shahridagi maqbara",
    imageUrl: "/images/khoja-daniyar.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: "V asr",
    type: "Maqbara",
  },
  {
    id: 9,
    name: "Khiva Minora",
    description: "Xiva shahridagi minora",
    imageUrl: "/images/khiva-minora.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: "XIX asr",
    type: "Minora",
  },
  {
    id: 10,
    name: "Juma Masjidi",
    description: "Buxorodagi eng qadimiy masjid",
    imageUrl: "/images/juma-masjid.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: "IX asr",
    type: "Masjid",
  },
  {
    id: 11,
    name: "Samarqand Astronomik Observatoriyasi",
    description: "Samarqanddagi astronomik observatoriya",
    imageUrl: "/images/astronomik-observatoriya.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1428,
    type: "Observatoriya",
  },
  {
    id: 12,
    name: "Jahangir Tomb",
    description: "Buxorodagi Jahangir maqbarasi",
    imageUrl: "/images/jahangir-tomb.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 1600,
    type: "Maqbara",
  },
  {
    id: 13,
    name: "Nurata Qal'asi",
    description: "Nurata shahridagi qadimiy qal'a",
    imageUrl: "/images/nurata-fortress.png",
    location: "Nurata, O'zbekiston",
    yearBuilt: "III asr",
    type: "Qal'a",
  },
  {
    id: 14,
    name: "Madrasa of Muhammad Amin Khan",
    description: "Buxorodagi mashhur madrasah",
    imageUrl: "/images/muhammad-amin-khan.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 1555,
    type: "Madrasah",
  },
];

export default function Landmarks() {
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
          Ziyoratgohlar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O'zbekistonning boy tarixi va madaniyatini aks ettiruvchi muqaddas
          ziyoratgohlarni kashf eting!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {landmarks.map((landmark, index) => (
          <motion.div
            key={landmark.id}
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
                src={landmark.imageUrl}
                alt={landmark.name}
                fill
                className="object-cover rounded-t-xl"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {landmark.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{landmark.description}</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{landmark.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Qurilgan yili: {landmark.yearBuilt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-blue-600" />
                  <span>Turi: {landmark.type}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}