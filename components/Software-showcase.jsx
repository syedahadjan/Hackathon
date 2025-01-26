'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const SoftwareShowcase = () => {
  const [selectedSoftware, setSelectedSoftware] = useState(null)

  const softwareList = [
    {
      id: 1,
      title: "Financial Management System",
      description: "Enterprise-grade financial management solution built with Oracle Database and APEX, designed specifically for accounting firms.",
      features: [
        "Double-entry bookkeeping system",
        "Real-time financial reporting",
        "Multi-currency support",
        "Automated bank reconciliation",
        "Tax calculation and reporting",
        "Audit trail and compliance"
      ],
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Oracle Database", "Oracle APEX", "PL/SQL", "REST APIs"],
      benefits: [
        {
          title: "Increased Efficiency",
          description: "Reduce manual data entry by 75% through automated processes"
        },
        {
          title: "Enhanced Accuracy",
          description: "Built-in validation rules ensure data integrity and reduce errors"
        },
        {
          title: "Compliance Ready",
          description: "Meets international accounting standards and local regulations"
        }
      ]
    },
    {
      id: 2,
      title: "Tax Management Suite",
      description: "Comprehensive tax management and planning software built on Oracle technology stack.",
      features: [
        "Automated tax calculations",
        "Digital tax filing",
        "Tax planning tools",
        "Document management",
        "Compliance monitoring",
        "Real-time updates"
      ],
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Oracle Database", "Oracle APEX", "Oracle REST Data Services", "Oracle Analytics"],
      benefits: [
        {
          title: "Time Savings",
          description: "Reduce tax preparation time by up to 60%"
        },
        {
          title: "Risk Reduction",
          description: "Automated compliance checks minimize audit risks"
        },
        {
          title: "Cost Effective",
          description: "Reduce operational costs through process automation"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-600">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              Enterprise Software Solutions
            </h1>
            <p className="text-xl text-gray-200">
              Powerful Oracle Database and APEX applications designed for modern accounting firms
            </p>
          </div>

          {/* Software Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {softwareList.map((software) => (
              <div key={software.id} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src={software.image}
                    alt={software.title}
                    width={600}
                    height={400}
                    className="rounded-lg mb-6 w-full"
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">{software.title}</h3>
                  <p className="text-gray-200 mb-6">{software.description}</p>
                  <button 
                    onClick={() => setSelectedSoftware(software)}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built with Enterprise-Grade Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🗄️", title: "Oracle Database", description: "Enterprise-grade reliability and performance" },
              { icon: "🖥️", title: "Oracle APEX", description: "Rapid application development platform" },
              { icon: "☁️", title: "Cloud Ready", description: "Deploy on-premise or in the cloud" },
              { icon: "🔒", title: "Enterprise Security", description: "Bank-grade security features" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Detail Modal */}
      {selectedSoftware && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto">
              <div className="p-6 sm:p-10">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedSoftware.title}</h2>
                  <button
                    onClick={() => setSelectedSoftware(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <Image
                  src={selectedSoftware.image}
                  alt={selectedSoftware.title}
                  width={800}
                  height={400}
                  className="rounded-lg mb-8 w-full"
                />

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedSoftware.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSoftware.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedSoftware.benefits.map((benefit, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SoftwareShowcase

