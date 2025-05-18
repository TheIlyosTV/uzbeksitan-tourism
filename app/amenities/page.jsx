"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Train, Bed, Utensils, Briefcase, Info } from "lucide-react";

const AmenitiesPage = () => {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeInOut" },
    }),
  };

  const amenities = [
    {
      title: "Transport",
      icon: Train,
      items: [
        "Zamonaviy tezyurar poyezdlar",
        "Qulay ichki aviaqatnovlar",
        "Shaharlararo avtobus xizmati",
        "Mahalliy taksi xizmatlari",
      ],
    },
    {
      title: "Yashash",
      icon: Bed,
      items: [
        "Zamonaviy mehmonxonalar",
        "An'anaviy mehmondo'stlik uylari",
        "Qulay hostellar",
        "Yurtalar va chodir lagerlar",
      ],
    },
    {
      title: "Ovqatlanish",
      icon: Utensils,
      items: [
        "Milliy taomlar restoranlar",
        "Halol ovqatlanish joylari",
        "Zamonaviy kafelar",
        "Street food maydonchalar",
      ],
    },
    {
      title: "Qo'shimcha xizmatlar",
      icon: Briefcase,
      items: [
        "Malakali gid-tarjimonlar",
        "Sayohat agentliklari",
        "Sug'urta xizmatlari",
        "Valuta ayirboshlash shoxobchalari",
      ],
    },
  ];

  const usefulInfo = [
    "Viza rejimi: Ko'p mamlakatlar fuqarolari uchun 30 kunlik vizasiz rejim joriy etilgan",
    "Valyuta: O'zbekiston so'mi (UZS) - valuta ayirboshlash punktlari ko'p joylarda mavjud",
    "Til: Davlat tili o'zbek tili, rus tili ham keng tarqalgan. Turistik joylarda ingliz tili ham ishlatiladi",
    "Internet: Ko'plab mehmonxonalar va jamoat joylarida bepul Wi-Fi mavjud",
    "Xavfsizlik: O'zbekiston sayyohlar uchun xavfsiz mamlakat hisoblanadi",
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-16 min-h-screen bg-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          O'zbekistonni Aylanish uchun Qulayliklar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O'zbekistonda sayohatingizni qulay va unutilmas qilish uchun barcha
          zarur xizmatlar va qulayliklar mavjud!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            variants={cardVariants}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-gray-900"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <amenity.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-center">{amenity.title}</h2>
            <ul className="space-y-2 text-gray-700">
              {amenity.items.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Foydali Ma'lumotlar
        </h2>
        <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl p-6">
          <ul className="space-y-4 text-gray-700">
            {usefulInfo.map((info, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemVariants}
                className="flex items-start gap-3"
              >
                <Info className="h-5 w-5 text-blue-600 mt-1" />
                <span>{info}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <p className="text-xl text-gray-900 mb-6">
          O'zbekistonga tashrif buyuring va unutilmas sayohatdan bahramand bo'ling!
        </p>
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/uzbekistan-panorama.png"
            alt="O'zbekiston panoramasi"
            width={1200}
            height={400}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default AmenitiesPage;