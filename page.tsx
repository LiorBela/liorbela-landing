'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Speaking from '@/components/Speaking'
import Community from '@/components/Community'
import Featured from '@/components/Featured'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-microsoft-dark dark:via-gray-900 dark:to-microsoft-dark">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Speaking />
      <Community />
      <Featured />
      <Contact />
    </main>
  )
}