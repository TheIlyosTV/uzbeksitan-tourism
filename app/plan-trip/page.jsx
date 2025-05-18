"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Calendar, MapPin, Info } from "lucide-react";

const PlanTripPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    regions: [],
    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      regions: checked
        ? [...prev.regions, value]
        : prev.regions.filter((region) => region !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forma yuborildi:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      router.push("/thank-you");
    }, 2000);
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

  const regions = [
    "Toshkent",
    "Samarqand",
    "Buxoro",
    "Xorazm",
    "Qashqadaryo",
    "Surxondaryo",
    "Navoiy",
    "Andijon",
    "Farg'ona",
    "Namangan",
    "Sirdaryo",
    "Jizzax",
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
          Sayohatni Rejalashtirish
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O'zbekiston bo'ylab unutilmas sayohat rejasini tuzing! Quyidagi formani
          to'ldiring, va biz siz bilan tez orada bog'lanamiz.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Ism-familiya
                </div>
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
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Email
                </div>
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
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="phone"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Telefon raqami
                </div>
              </label>
              <motion.input
                whileHover="hover"
                variants={inputVariants}
                className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+998 XX XXX XX XX"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="startDate"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Sayohat boshlanish sanasi
                </div>
              </label>
              <motion.input
                whileHover="hover"
                variants={inputVariants}
                className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                id="startDate"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="endDate"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Sayohat tugash sanasi
                </div>
              </label>
              <motion.input
                whileHover="hover"
                variants={inputVariants}
                className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Tashrif buyurmoqchi bo'lgan viloyatlar
              </div>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md">
              {regions.map((region) => (
                <label
                  key={region}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-600"
                    name="regions"
                    value={region}
                    checked={formData.regions.includes(region)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{region}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="additionalInfo"
            >
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Qo'shimcha ma'lumotlar
              </div>
            </label>
            <motion.textarea
              whileHover="hover"
              variants={inputVariants}
              className="w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              id="additionalInfo"
              name = "additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Qo'shimcha talablar yoki eslatmalar"
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
              Sayohat uchun ariza yuborish
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
            Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default PlanTripPage;