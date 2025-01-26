import React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ServiceCard({ title, icon: Icon, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <Icon className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </motion.div>
  )
}

