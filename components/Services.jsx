"use client"

import React from "react"
import { motion } from "framer-motion"
import { Laptop, Calculator, Database, Code2, Globe, LineChart } from "lucide-react"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-purple-200 text-xl">Comprehensive professional services for your business needs</p>
            </div>

            {/* Services Cards */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Software Services Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link href="/software-services" className="block">
                  <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 min-h-[400px]">
                    <div className="p-8">
                      <div className="mb-6 relative">
                        {/* Main Icon */}
                        <Laptop className="w-20 h-20 text-blue-400 mb-4" />
                        {/* Background Icons */}
                        <div className="absolute top-0 right-0 opacity-20 transform translate-x-1/3 -translate-y-1/3">
                          <Code2 className="w-24 h-24 text-purple-400" />
                        </div>
                        <div className="absolute bottom-0 right-0 opacity-10">
                          <Globe className="w-16 h-16 text-blue-300" />
                        </div>
                        <div className="absolute top-1/2 right-1/4 opacity-10">
                          <Database className="w-12 h-12 text-purple-300" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">Software Solutions</h2>
                      <p className="text-purple-200 text-lg mb-6 leading-relaxed">
                        Comprehensive software development services including web applications, mobile solutions, and
                        custom enterprise software tailored to your business needs.
                      </p>
                      <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform text-lg">
                        Explore Software Services
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Financial Services Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link href="/financial-services" className="block">
                  <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 min-h-[400px]">
                    <div className="p-8">
                      <div className="mb-6 relative">
                        {/* Main Icon */}
                        <Calculator className="w-20 h-20 text-blue-400 mb-4" />
                        {/* Background Icons */}
                        <div className="absolute top-0 right-0 opacity-20 transform translate-x-1/3 -translate-y-1/3">
                          <LineChart className="w-24 h-24 text-purple-400" />
                        </div>
                        <div className="absolute bottom-0 right-0 opacity-10">
                          <Calculator className="w-16 h-16 text-blue-300" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">Financial & Accounting Services</h2>
                      <p className="text-purple-200 text-lg mb-6 leading-relaxed">
                        Expert financial management, accounting solutions, tax advisory, and comprehensive reporting
                        services for your business growth.
                      </p>
                      <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform text-lg">
                        Explore Financial Services
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

