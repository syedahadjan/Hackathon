"use client"

import { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle, MapPin, Phone, Mail, Smartphone, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzzkbyd")
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showIcon, setShowIcon] = useState(false)
  const [activeField, setActiveField] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true)
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      })
      const timer = setTimeout(() => setShowIcon(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-teal-600 py-12 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <motion.div className="container mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="flex flex-col items-stretch xl:flex-row gap-8 xl:gap-16 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div className="flex-1 flex flex-col" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center xl:text-left">
              Let&apos;s work Together
            </h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full max-w-[580px] mx-auto xl:mx-0">
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1 group">
                  <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-white">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    onFocus={() => setActiveField("firstname")}
                    onBlur={() => setActiveField("")}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                      transition-all duration-300 transform hover:bg-white/30
                      ${activeField === "firstname" ? "scale-[1.02] shadow-lg" : ""}`}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex-1 group">
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-white">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    onFocus={() => setActiveField("lastname")}
                    onBlur={() => setActiveField("")}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                      transition-all duration-300 transform hover:bg-white/30
                      ${activeField === "lastname" ? "scale-[1.02] shadow-lg" : ""}`}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField("")}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                    transition-all duration-300 transform hover:bg-white/30
                    ${activeField === "email" ? "scale-[1.02] shadow-lg" : ""}`}
                  placeholder="example@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-red-400 text-sm"
                />
              </div>
              <div className="group">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                  Phone number <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={handleChange}
                  onFocus={() => setActiveField("phone")}
                  onBlur={() => setActiveField("")}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                    transition-all duration-300 transform hover:bg-white/30
                    ${activeField === "phone" ? "scale-[1.02] shadow-lg" : ""}`}
                  placeholder="+92 300 1234567"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField("")}
                  id="message"
                  name="message"
                  value={formData.message}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                    transition-all duration-300 transform hover:bg-white/30 min-h-[150px] resize-y
                    ${activeField === "message" ? "scale-[1.02] shadow-lg" : ""}`}
                  placeholder="Leave a message..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-red-400 text-sm"
                />
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="relative flex items-center justify-center px-6 py-3 text-gray-900 bg-yellow-500 hover:bg-yellow-400 rounded-lg 
                  transition-all duration-300 disabled:opacity-50 disabled:hover:bg-yellow-500 group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <CheckCircle
                      className={`absolute w-5 h-5 transition-all duration-500 ${
                        showIcon ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                    />
                    <span className={`transition-all duration-500 ${showIcon ? "opacity-0" : "opacity-100"}`}>
                      Send message
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Address Section */}
          <motion.div
            className="flex-1 bg-white/20 p-8 rounded-lg backdrop-blur-sm transform-gpu hover:bg-white/30 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Address</h3>
            <div className="space-y-8">
              <motion.div
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MapPin className="w-6 h-6 text-yellow-300 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-lg">
                  Office 205, Green Tower,
                  <br />
                  Plot 15, Sector F-7 Markaz,
                  <br />
                  Islamabad, Pakistan
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Phone className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-lg">051-2345678</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Mail className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:info@saylanimicrofinance.com"
                  className="text-white text-lg hover:underline transition-all duration-300"
                >
                  info@saylanimicrofinance.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Smartphone className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-lg">0333-1234567 / 0300-9876543</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

