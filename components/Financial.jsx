"use client";
import React from "react"
import { motion } from "framer-motion"
import {
  Scale,
  FileText,
  Building,
  Briefcase,
  Users,
  LineChart,
  ClipboardCheck,
  BanknoteIcon as Bank,
  Factory,
  Construction,
  Hotel,
  FlaskRoundIcon as Flask,
  Coffee,
  Smartphone,
  Building2,
  ShoppingCart,
  Wheat,
  ChevronRight,
} from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const services = [
  {
    title: "Audit, Risk & Assurance Services",
    icon: Scale,
    items: [
      "Statutory/Concurrent/Inspection/Stock Audits of Banks and financial Institutions",
      "Audits prescribed under the Companies Ordinance 1984",
      "Audits prescribed by the Income Tax Ordinance 2001",
      "Internal audits of Public Ltd. And Private Ltd. Companies",
      "Accounting and Audits of Societies and NGO's",
      "Setting up MIS & Internal audit systems, Procedures & Control Systems",
      "Information Systems Audits",
      "Certification required under Foreign Exchange Laws, Foreign Contribution",
      "Due diligence assignments",
    ],
  },
  {
    title: "Direct and Indirect Taxes' Services",
    icon: FileText,
    items: [
      "Advisory Services relating to compliance with Tax laws",
      "Tax planning and corporate taxation",
      "Compilation and filing of Income tax returns, Sales tax returns, SECP returns",
      "Representation before the tax authorities for assessment and other proceedings",
      "Representation before the tax authorities for securing specific approvals/exemptions",
      "Representation in appeals before commissioner (Appeals)",
      "Tax Opinions – Written opinions on Tax Laws",
      "Rebates and refund advisory",
    ],
  },
  {
    title: "Corporate Law and Consulting",
    icon: Building,
    items: [
      "Company formation and acquisition",
      "Secretarial work including ROC matters, Searches & registration of charges",
      "Representation before Registrar of Companies",
      "Advisory services regarding all company law matters",
      "Design and implementation of accounting and information systems",
      "Registration of software units with Software Technology Parks",
    ],
  },
  {
    title: "Business Process Outsourcing",
    icon: Briefcase,
    items: [
      "Book keeping and preparation of Final Accounts Payroll",
      "Fixed assets verification and completion of records",
    ],
  },
  {
    title: "Personal Advisory Services",
    icon: Users,
    items: [
      "Personal Financial Planning",
      "Formation of Trusts, Societies and NGO's",
      "Preparation of partnership deed and wills",
      "Acting as arbitrator",
    ],
  },
  {
    title: "Financial Advisory Services",
    icon: LineChart,
    items: [
      "Business restructuring options including raising of capital and loans from banks/DFI's",
      "Income estimation services",
    ],
  },
  {
    title: "External Audit Services",
    icon: ClipboardCheck,
    items: [
      "Specialization in external audit function specially reporting to audit committees and board of directors",
      "Periodical checks of inventory and MIS and various departments functions and budgetary allocations",
    ],
  },
]

const expertise = [
  { name: "Banking, leasing, modaraba and financial sector", icon: Bank },
  { name: "Petroleum enterprises", icon: Factory },
  { name: "Textile companies", icon: Factory },
  { name: "Construction, Real Estate Builders and developers", icon: Construction },
  { name: "Housing and real estate trusts", icon: Building2 },
  { name: "Hotel industry", icon: Hotel },
  { name: "Pharmaceutical sector", icon: Flask },
  { name: "Food & beverages enterprises", icon: Coffee },
  { name: "Technology and telecommunications' sector", icon: Smartphone },
  { name: "Oil and Ghee Mills", icon: Factory },
  { name: "Financial institutions and banking companies", icon: Bank },
  { name: "Trading companies and whole sellers", icon: ShoppingCart },
  { name: "Sugar Mills", icon: Wheat },
  { name: "Poultry Feed Mills", icon: Factory },
]

export default function FinancialServices() {
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
            <h1 className="text-5xl font-bold text-white mb-6">Financial Services</h1>
            <p className="text-xl text-purple-200">
              Comprehensive financial and advisory services for businesses and individuals
            </p>
          </motion.div>

          {/* Services Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-semibold text-white mb-10 text-center"
            >
              Our Services
            </motion.h2>
            <div className="grid gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <service.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                            className="flex items-start gap-2 text-purple-200"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-semibold text-white mb-10 text-center"
            >
              Areas of Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 hover:bg-white/20 transition-all duration-300"
                >
                  <area.icon className="w-6 h-6 text-blue-400" />
                  <span className="text-white">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

