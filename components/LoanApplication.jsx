"use client"

import React, { useState } from "react"
import { CakeSlice, Home, Briefcase, GraduationCap } from "lucide-react"

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{category.title} Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">CNIC</label>
            <input
              type="text"
              name="cnic"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.cnic}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subcategory</label>
            <select
              name="subcategory"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
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
            <label className="block text-sm font-medium mb-1">Initial Deposit (PKR)</label>
            <input
              type="number"
              name="initialDeposit"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.initialDeposit}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Loan Period (Years)</label>
            <input
              type="number"
              name="loanPeriod"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.loanPeriod}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
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
              className="px-4 py-2 text-sm font-medium rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function LoanCategoriesHero() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-green-500">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Empowering Your Dreams with Flexible Loan Options
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20"
              onClick={() => setSelectedCategory(category)}
            >
              <category.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">{category.title}</h2>
              <ul className="text-gray-200 mb-4">
                {category.subcategories.map((sub, idx) => (
                  <li key={idx} className="mb-1">
                    • {sub}
                  </li>
                ))}
              </ul>
              <div className="text-white">
                <p>
                  <strong className="text-yellow-400">Max Loan:</strong> {category.maxLoan}
                </p>
                <p>
                  <strong className="text-yellow-400">Loan Period:</strong> {category.loanPeriod}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCategory && (
        <LoanApplicationForm category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}
    </section>
  )
}

export default function LoanApplication() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-500">
      <LoanCategoriesHero />
    </div>
  )
}

