"use client";
import React from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Server,
  Globe,
  ShoppingCart,
  Briefcase,
  BookOpen,
  Hotel,
  Coffee,
  Headphones,
  CreditCard,
  Truck,
  Hospital,
  PenTool,
  Cake,
  Shirt,
  FileText,
  FlaskRoundIcon as Flask,
  BarChart,
  Users,
  DollarSign,
  Clipboard,
  Printer,
  MessageCircle,
  Mail,
  Layout,
  Settings,
} from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const businessCategories = [
  { name: "Sales & Distribution", icon: ShoppingCart },
  { name: "Textile", icon: Shirt },
  { name: "Knitting", icon: Shirt },
  { name: "Pharmaceuticals", icon: Flask },
  { name: "Sugar Traders and General Traders", icon: Briefcase },
  { name: "LPG Gas", icon: Flask },
  { name: "Tiles & Sanitary", icon: Truck },
  { name: "Retailers", icon: ShoppingCart },
  { name: "Whole Sellers", icon: Truck },
  { name: "School/College/Institutes", icon: BookOpen },
  { name: "Hotel room Booking", icon: Hotel },
  { name: "Restaurants", icon: Coffee },
  { name: "Help Desk", icon: Headphones },
  { name: "POS - Point of Sales", icon: CreditCard },
  { name: "Dry Cleaners", icon: Shirt },
  { name: "Hospitals", icon: Hospital },
  { name: "Sign Board Advertisers", icon: PenTool },
  { name: "Food & Bakery", icon: Cake },
  { name: "Catering and Kitchens", icon: Coffee },
  { name: "Electronics", icon: Server },
  { name: "Boutique", icon: Shirt },
  { name: "Accounts Firms", icon: FileText },
  { name: "Chemicals", icon: Flask },
  { name: "Billing", icon: FileText },
  { name: "Maintenance", icon: Settings },
  { name: "NGOs", icon: Users },
  { name: "Importer", icon: Truck },
  { name: "Exporter", icon: Truck },
  { name: "Indenters", icon: Clipboard },
  { name: "Rental", icon: DollarSign },
  { name: "Payroll", icon: DollarSign },
  { name: "Costing", icon: BarChart },
  { name: "Bar-Codes", icon: Printer },
  { name: "Bio-Metrics", icon: Printer },
  { name: "Sms & Email Marketing", icon: MessageCircle },
  { name: "Website Designing", icon: Globe },
]

const erpModules = [
  "Sales and Distribution",
  "Procurement",
  "Inventory",
  "Financial Accounting System",
  "Costing",
  "Production",
  "HR, Attendance and Payroll System",
  "Education Management (Schools, Colleges, Institutes)",
  "Hospital Management",
  "Pharmaceutical Industry Management",
  "Knitting management",
  "Point of Sales Integrated with FBR",
  "Imports",
  "Indenting",
  "Restaurant Management",
  "Catering and Kitchen",
  "Dry Cleaning Management",
  "Sugar Trading",
  "LPG Gas System",
  "Billing and Maintenance System",
  "Web-Site Development",
  "Any Other Software on Customized Basis",
]

const SoftwareServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Software Services</h1>
            <p className="text-xl text-purple-200">
              SoftSys (Software System) is a registered Software House, established since 1990. We specialize in
              customized software development for various business categories.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-semibold text-white mb-8 text-center">ERP Software Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {erpModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center hover:bg-white/20 transition-all duration-300"
                >
                  <Database className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-white">{module}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Business Categories We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {businessCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300"
                >
                  <category.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-medium text-white">{category.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Custom Software Development</h2>
            <p className="text-xl text-purple-200 mb-8">
              We offer custom software development services tailored to your specific business needs. Our experienced
              team can create solutions for any industry or requirement.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Request a Custom Solution
            </button>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SoftwareServices

