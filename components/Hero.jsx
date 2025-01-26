"use client"

import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Check } from "lucide-react"
import Navbar from "./Navbar"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-teal-600">
      <Navbar />
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)]">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Saylani Micro Finance: Empowering Communities with{" "}
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["Qarze Hasana", 2000, "Interest-Free Loans", 2000, "Financial Support", 2000]}
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                wrapper="span"
                cursor={false}
                className="text-yellow-300"
              />
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mx-auto">
              Saylani Welfare's microfinance initiative aims to provide accessible, interest-free loans to empower
              individuals and small businesses. Our Qarze Hasana program offers various loan categories to support your
              financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/apply"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Apply for a Loan
              </Link>
              <Link
                href="/categories"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              >
                Loan Categories
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span>Interest-free loans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span>Multiple loan categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-yellow-300" />
                <span>Easy application process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

