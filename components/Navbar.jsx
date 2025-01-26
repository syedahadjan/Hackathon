"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "journey", "contact"]
      let current = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-800 bg-opacity-90 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            Saylani Micro Finance
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {/* Home Link */}
          <li>
            <Link
              href="/"
              className={`text-white hover:text-blue-300 transition-colors ${
                activeSection === "home" ? "border-b-2 border-yellow-300" : ""
              }`}
            >
              Home
            </Link>
          </li>

          {/* About Us Link */}
          <li>
            <Link href="/about-us" className="text-white hover:text-blue-300 transition-colors">
              About Us
            </Link>
          </li>

          {/* Services Link */}
          <li>
            <Link href="/services-page" className="text-white hover:text-blue-300 transition-colors">
              Services
            </Link>
          </li>

          {/* Journey Link */}
          <li>
            <Link
              href="#journey"
              className={`text-white hover:text-blue-300 transition-colors ${
                activeSection === "journey" ? "border-b-2 border-yellow-300" : ""
              }`}
            >
              Journey
            </Link>
          </li>

          {/* Contact Link */}
          <li>
            <Link
              href="#contact"
              className={`text-white hover:text-blue-300 transition-colors ${
                activeSection === "contact" ? "border-b-2 border-yellow-300" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

