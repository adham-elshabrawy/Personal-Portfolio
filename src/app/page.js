'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative">
        <div id="home"></div>
        <Hero />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

