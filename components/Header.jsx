"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change and lock scroll when open
  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navItems = [
    { href: "/regions", label: "Viloyatlar" },
    { href: "/landmarks", label: "Ziyoratgohlar" },
    {
      href: "#",
      label: "Madaniyat",
      subItems: [
        { href: "/culture", label: "An'analar" },
        { href: "/videos", label: "Videolar" },
        { href: "/cuisine", label: "Milliy Taomlar" }
      ]
    },
    { href: "/plan-trip", label: "Sayohatni rejalashtirish" },
    { href: "/amenities", label: "Tourizm qulayliklar" },
    { href: "/tour-packages", label: "Sayohat Paketlari" },
    { href: "/contact", label: "Bog'lanish" }
  ]

  const toggleDropdown = itemLabel => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel)
  }

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.1,
        duration: 0.6,
        ease: "easeInOut"
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-2 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-white font-bold text-lg">UZ</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Uzbekiston
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href + i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-md ${
                        pathname.startsWith(item.href)
                          ? "text-blue-700 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {openDropdown === item.label ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-1">
                            {item.subItems.map(subItem => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                                  pathname === subItem.href
                                    ? "bg-blue-50 text-blue-600"
                                    : ""
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-md ${
                      pathname === item.href
                        ? "text-blue-700 font-semibold"
                        : ""
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <AnimatePresence>
                      {(hoveredItem === item.href ||
                        pathname === item.href) && (
                        <motion.div
                          layoutId="underline"
                          initial={{ width: 0, left: "50%" }}
                          animate={{ width: "100%", left: 0 }}
                          exit={{ width: 0, left: "50%" }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Yopish menyu" : "Ochish menyu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu content */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed top-0 left-0 w-full h-[90vh] bg-white z-50 rounded-b-3xl shadow-xl overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Menu header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-lg">UZ</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">
                      Uzbekiston
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 focus:outline-none"
                    aria-label="Yopish menyu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu items */}
                <div className="flex-1 overflow-y-auto py-4 px-6">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, i) => (
                      <div key={item.href + i} className="w-full">
                        {item.subItems ? (
                          <div className="w-full">
                            <motion.button
                              custom={i}
                              variants={mobileNavItemVariants}
                              onClick={() => toggleDropdown(item.label)}
                              className={`flex justify-between items-center w-full py-3 px-4 rounded-lg text-lg font-medium ${
                                pathname.startsWith(item.href)
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-800 hover:bg-gray-100"
                              }`}
                            >
                              <span>{item.label}</span>
                              {openDropdown === item.label ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </motion.button>

                            <AnimatePresence>
                              {openDropdown === item.label && (
                                <motion.div
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  variants={dropdownVariants}
                                  className="pl-4 w-full overflow-hidden"
                                >
                                  {item.subItems.map((subItem, j) => (
                                    <motion.div
                                      key={subItem.href}
                                      custom={j}
                                      variants={mobileNavItemVariants}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className={`block py-3 px-4 rounded-lg text-base ${
                                          pathname === subItem.href
                                            ? "bg-blue-50 text-blue-700 font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                        onClick={() => {
                                          setIsOpen(false)
                                          setOpenDropdown(null)
                                        }}
                                      >
                                        {subItem.label}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <motion.div
                            custom={i}
                            variants={mobileNavItemVariants}
                          >
                            <Link
                              href={item.href}
                              className={`block py-3 px-4 rounded-lg text-lg font-medium ${
                                pathname === item.href
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-800 hover:bg-gray-100"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Footer area */}
                <div className="p-4 border-t">
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-6 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Bog'lanish
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header