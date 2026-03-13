'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-microsoft-dark/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-microsoft-blue">
          Lior Bela
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-microsoft-blue transition">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-microsoft-blue transition">Experience</button>
            <button onClick={() => scrollToSection('speaking')} className="text-gray-700 dark:text-gray-300 hover:text-microsoft-blue transition">Speaking</button>
            <button onClick={() => scrollToSection('community')} className="text-gray-700 dark:text-gray-300 hover:text-microsoft-blue transition">Community</button>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}