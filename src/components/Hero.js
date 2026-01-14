'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16"
        >
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Headline with gradient text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight">
                <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Building<br />
                  the future
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              I design, build, and validate end-to-end hardware and software, from embedded electronics and control to fully integrated robotic systems.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Adham Elshabrawy Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Resume
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Entrepreneur', 'Autonomous Systems', 'Embedded Systems', 'Innovation'].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Headshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 border-glow flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-slate-800 rounded-3xl flex items-center justify-center">
                {/* Replace this with your headshot image */}
                <img
                  src="/Headshot.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center object-center-28 rounded-3xl"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-3xl" style={{ display: 'none' }}>
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">JD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

