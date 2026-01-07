'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Github } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 rounded-3xl card-gradient border-2 border-slate-700 hover:border-blue-400 transition-all duration-300 border-glow-hover shadow-lg hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors shadow-md">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">LinkedIn</span>
          </a>

          <a
            href={socialLinks.email}
            className="group flex items-center gap-4 px-8 py-5 rounded-3xl card-gradient border-2 border-slate-700 hover:border-blue-400 transition-all duration-300 border-glow-hover shadow-lg hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors shadow-md">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Email</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 rounded-3xl card-gradient border-2 border-slate-700 hover:border-blue-400 transition-all duration-300 border-glow-hover shadow-lg hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-400 transition-colors shadow-md">
              <Github className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Adham Elshabrawy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

