"use client"

import React, { useState } from "react"
import { CakeSlice, Home, Briefcase, GraduationCap, ChevronDown, ChevronUp, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const loanCategories = [
  {
    title: "Wedding Loans",
    icon: CakeSlice,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
  },
  {
    title: "Home Construction Loans",
    icon: Home,
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    title: "Business Startup Loans",
    icon: Briefcase,
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    title: "Education Loans",
    icon: GraduationCap,
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
]

function LoanApplicationForm({ category, onClose }) {
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    subcategory: "",
    initialDeposit: "",
    loanPeriod: "",
    address: "",
    phoneNumber: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Application submitted successfully!")
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-6 overflow-y-auto flex-grow">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">{category.title} Application</h2>
          <form id="loan-application-form" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1 text-purple-900">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.cnic}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-purple-900">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-purple-900">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1 text-purple-900">Subcategory</label>
                <select
                  name="subcategory"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.subcategory}
                  onChange={handleChange}
                >
                  <option value="">Select a subcategory</option>
                  {category.subcategories.map((sub, index) => (
                    <option key={index} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-purple-900">Initial Deposit (PKR)</label>
                <input
                  type="number"
                  name="initialDeposit"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.initialDeposit}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-purple-900">Loan Period (Years)</label>
                <input
                  type="number"
                  name="loanPeriod"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.loanPeriod}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1 text-purple-900">Address</label>
                <textarea
                  name="address"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1 text-purple-900">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="loan-application-form"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function LoanCategoryCard({ category, onClick }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      layout
    >
      <div className="flex justify-between items-start">
        <div>
          <category.icon className="w-12 h-12 text-purple-400 mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-4">{category.title}</h2>
        </div>
      </div>
      <ul className="text-gray-200 mb-4">
        {category.subcategories.map((sub, idx) => (
          <li key={idx} className="mb-1">
            • {sub}
          </li>
        ))}
      </ul>
      <div className="text-white">
        <p>
          <strong className="text-purple-400">Max Loan:</strong> {category.maxLoan}
        </p>
        <p>
          <strong className="text-purple-400">Loan Period:</strong> {category.loanPeriod}
        </p>
      </div>
    </motion.div>
  )
}

function LoanCategoriesHero() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Empowering Your Dreams with Flexible Loan Options
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loanCategories.map((category, index) => (
            <LoanCategoryCard key={index} category={category} onClick={() => handleCategoryClick(category)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCategory && (
          <LoanApplicationForm category={selectedCategory} onClose={() => setSelectedCategory(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default function LoanApplication() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <LoanCategoriesHero />
    </div>
  )
}

