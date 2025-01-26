"use client"

import { useState, useEffect } from "react"
import { Handshake, Users, Coins } from "lucide-react"

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

  return <span>{count}</span>
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      {/* Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-4xl font-bold text-green-600 mb-2">
              <CountingNumber end={10000} duration={2000} />+
            </h3>
            <p className="text-gray-600">Beneficiaries Supported</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-4xl font-bold text-green-600 mb-2">
              <CountingNumber end={5} duration={2000} />
            </h3>
            <p className="text-gray-600">Loan Categories</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-4xl font-bold text-green-600 mb-2">
              <CountingNumber end={100} duration={2000} />M PKR
            </h3>
            <p className="text-gray-600">Total Loans Disbursed</p>
          </div>
        </div>
      </div>

      {/* Program Description */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Communities through
            <br />
            Interest-Free Microfinance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Saylani Welfare's Qarze Hasana program offers accessible loans to support individuals and small businesses
            in various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-lg flex items-center justify-center">
              <Handshake className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Interest-Free Loans</h3>
            <p className="text-gray-600">
              Our Qarze Hasana program provides interest-free loans, adhering to Islamic principles and making financial
              support accessible to all.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Diverse Loan Categories</h3>
            <p className="text-gray-600">
              From small businesses to agriculture, our loan categories cater to various sectors, ensuring comprehensive
              community support.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-lg flex items-center justify-center">
              <Coins className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Application Process</h3>
            <p className="text-gray-600">
              We've simplified the loan application process, making it easy for eligible individuals to access the
              financial support they need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

