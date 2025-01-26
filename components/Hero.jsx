"use client"

import React, { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Navbar from "./Navbar"

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    })
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const features = [
    { text: "Interest-free loans" },
    { text: "Multiple loan categories" },
    { text: "Easy application process" },
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-x"></div>
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl space-y-8">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800"
              variants={itemVariants}
            >
              Saylani Micro Finance: Empowering Communities with{" "}
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["Qarze Hasana", 2000, "Interest-Free Loans", 2000, "Financial Support", 2000]}
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                wrapper="span"
                cursor={false}
                className="text-blue-600"
              />
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-gray-600 mx-auto" variants={itemVariants}>
              Saylani Welfare's microfinance initiative aims to provide accessible, interest-free loans to empower
              individuals and small businesses. Our Qarze Hasana program offers various loan categories to support your
              financial needs.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={itemVariants}>
              <Link href="/apply">
                <motion.button
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for a Loan
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 border border-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Loan Categories
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 bg-white px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 shadow-md ${
                    activeFeature === index ? "bg-blue-50 shadow-lg" : ""
                  }`}
                  whileHover={{ scale: 1.05, backgroundColor: "#EBF8FF" }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                >
                  <motion.div
                    animate={activeFeature === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={controls}>
        <ArrowRight className="w-8 h-8 text-blue-600 rotate-90" />
      </motion.div>
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  )
}

