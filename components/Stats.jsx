"use client"

import { useState, useEffect } from "react"
import { Handshake, Users, Coins } from "lucide-react"
import { motion } from "framer-motion"

const CountingNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const percentage = progress / duration
        setCount(Math.floor(end * percentage))
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

const StatCard = ({ icon: Icon, title, value, duration }) => (
  <motion.div
    className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
    <h3 className="text-4xl font-bold text-blue-600 mb-2">
      <CountingNumber end={value} duration={duration} />
      {title === "Total Loans Disbursed" && " M PKR"}
      {title === "Beneficiaries Supported" && "+"}
    </h3>
    <p className="text-gray-600">{title}</p>
  </motion.div>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
    whileHover={{ y: -5 }}
  >
    <motion.div
      className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-blue-600" />
    </motion.div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      {/* Statistics */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <StatCard icon={Users} title="Beneficiaries Supported" value={10000} duration={2000} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard icon={Coins} title="Loan Categories" value={5} duration={2000} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard icon={Handshake} title="Total Loans Disbursed" value={100} duration={2000} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Program Description */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Communities through
            <br />
            <span className="text-blue-600">Interest-Free Microfinance</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Saylani Welfare's Qarze Hasana program offers accessible loans to support individuals and small businesses
            in various sectors.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={Handshake}
              title="Interest-Free Loans"
              description="Our Qarze Hasana program provides interest-free loans, adhering to Islamic principles and making financial support accessible to all."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={Users}
              title="Diverse Loan Categories"
              description="From small businesses to agriculture, our loan categories cater to various sectors, ensuring comprehensive community support."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={Coins}
              title="Easy Application Process"
              description="We've simplified the loan application process, making it easy for eligible individuals to access the financial support they need."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

