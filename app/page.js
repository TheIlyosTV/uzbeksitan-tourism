"use client"
import Link from "next/link"
import Image from "next/image"
import RegionCarousel from "../components/RegionCarousel"
import VirtualTour from "../components/VirtualTour"
import FeatureCard from "../components/FeatureCard"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="animate-fadeIn">
  <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image with better mobile handling */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/uzbekistan-hero.png"
          alt="O'zbekiston manzarasi"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
      </div>

      {/* Content with responsive adjustments */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            O&apos;zbekiston Sayyohlik Salohiyati
          </h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            12 ta viloyat, minglab tarixiy obidalar, betakror tabiat
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/regions">
                <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.03] w-full sm:w-auto">
                  Viloyatlarni kashf eting
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/plan-trip">
                <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.03] w-full sm:w-auto">
                  Sayohatni rejalashtirish
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            O&apos;zbekiston viloyatlari
          </h2>
          <RegionCarousel />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Virtual sayohat
          </h2>
          <VirtualTour />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Nima uchun O&apos;zbekiston?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <FeatureCard
              imageSrc="/images/history.jpg"
              title="Boy tarix"
              description="2750 yildan ortiq tarixga ega shaharlar va 8000 dan ortiq tarixiy yodgorliklar"
            />
            <FeatureCard
              imageSrc="/images/food.jpg"
              title="Mazali taomlar"
              description="UNESCO nomoddiy madaniy meros ro'yxatiga kiritilgan o'zbek palovi va boshqa milliy taomlar"
            />
            <FeatureCard
              imageSrc="/images/nature.jpg"
              title="Go'zal tabiat"
              description="Tyan-Shan tog'laridan Orol dengizigacha, Qizilqum cho'lidan Farg'ona vodiysigacha xilma-xil landshaftlar"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
