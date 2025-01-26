"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  Users,
  FileCheck,
  Building,
  ChevronDown,
  Phone,
  Database,
  Cloud,
  Lock,
  Calculator,
  BarChart,
  Receipt,
  Computer,
} from "lucide-react"

const softwareServices = {
  financial: {
    title: "Financial Management System",
    description:
      "Enterprise-grade financial management solution built with Oracle Database and APEX, designed specifically for accounting firms.",
    features: [
      "Complete financial accounting system",
      "Multi-company and branch support",
      "Automated journal entries and reconciliation",
      "Real-time financial reporting",
      "Customizable dashboard and analytics",
      "Bank integration and reconciliation",
      "Fixed assets management",
      "Budget planning and control",
    ],
  },
  tax: {
    title: "Tax Management Suite",
    description: "Comprehensive tax management and planning software built on Oracle technology stack.",
    features: [
      "Automated tax calculations",
      "Multi-jurisdiction support",
      "Tax planning and forecasting",
      "Digital tax filing integration",
      "Tax document management",
      "Compliance monitoring",
      "Audit trail and history",
      "Tax calendar and reminders",
    ],
  },
}

const techFeatures = [
  {
    icon: Database,
    title: "Oracle Database",
    description: "Enterprise-grade reliability and performance",
  },
  {
    icon: BarChart,
    title: "Oracle APEX",
    description: "Rapid application development platform",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description: "Deploy on-premise or in the cloud",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security features",
  },
]

// const services = [
//   {
//     id: 'audit',
//     title: 'Audit, Risk & Assurance',
//     icon: Shield,
//     items: [
//       // ... (remove all items)
//     ]
//   },
//   {
//     id: 'external',
//     title: 'External Audit Services',
//     icon: Building,
//     items: [
//       // ... (remove all items)
//     ]
//   }
// ]

// const staffMembers = [
//   // ... (remove all staff members)
// ]

// function ServiceList({ items }) {
//   return (
//     <ul className="space-y-4">
//       {items.map((item, index) => (
//         <motion.li
//           key={index}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: index * 0.1 }}
//           className="flex items-start gap-3"
//         >
//           <FileCheck className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
//           <span className="text-purple-100">{item}</span>
//         </motion.li>
//       ))}
//     </ul>
//   )
// }

// function StaffList() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {staffMembers.map((member, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//           className="bg-white/10 rounded-lg p-6 backdrop-blur-lg hover:bg-white/15 transition-all duration-300"
//         >
//           <div className="flex items-center mb-4">
//             <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mr-4">
//               <span className="text-2xl font-bold text-purple-400">{member.name.charAt(0)}</span>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-white">
//                 {member.name}
//               </h3>
//               <p className="text-purple-400 font-medium">
//                 {member.qualification}
//               </p>
//             </div>
//           </div>
//           <p className="text-purple-100 mb-2">
//             <strong className="text-white">Experience:</strong> {member.experience}
//           </p>
//           {member.background !== "N/A" && (
//             <p className="text-purple-200">
//               <strong className="text-white">Background:</strong> {member.background}
//             </p>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   )
// }

export default function ServicesPage() {
  const [openSection, setOpenSection] = useState("software")
  const [activeTab, setActiveTab] = useState("financial")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Professional Services & Solutions</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive software solutions and professional services for modern accounting firms
          </p>
        </motion.div>

        {/* Software Solutions Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.entries(softwareServices).map(([key, service]) => (
              <motion.div
                key={key}
                className={`p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 cursor-pointer
                          ${
                            activeTab === key
                              ? "bg-white/20 border-2 border-purple-400"
                              : "bg-white/10 border-2 border-transparent hover:bg-white/15"
                          }`}
                onClick={() => setActiveTab(key)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-purple-100 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-purple-100">
                      <FileCheck className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Technology Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Built with Enterprise-Grade Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-lg text-center hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-purple-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        {/* <div className="space-y-6 max-w-5xl mx-auto mb-20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="rounded-xl overflow-hidden backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setOpenSection(openSection === service.id ? null : service.id)}
                className="w-full text-left px-8 py-6 flex items-center justify-between bg-white/10 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <service.icon className="h-8 w-8 text-purple-400 mr-4" />
                  <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                </div>
                <ChevronDown 
                  className={`h-6 w-6 text-purple-400 transition-transform duration-300 ${openSection === service.id ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openSection === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 bg-white/5"
                  >
                    <ServiceList items={service.items} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div> */}

        {/* Staff Section */}
        {/* <motion.div
          className="rounded-xl overflow-hidden backdrop-blur-lg max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setOpenSection(openSection === 'staff' ? null : 'staff')}
            className="w-full text-left px-8 py-6 flex items-center justify-between bg-white/10 hover:bg-white/15 transition-colors duration-200"
          >
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-semibold text-white">Our Expert Team</h2>
            </div>
            <ChevronDown 
              className={`h-6 w-6 text-purple-400 transition-transform duration-300 ${openSection === 'staff' ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {openSection === 'staff' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-white/5"
              >
                <StaffList />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Ready to transform your accounting practice?</h3>
          <motion.button
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            View Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

