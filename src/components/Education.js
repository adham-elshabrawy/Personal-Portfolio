'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-gradient rounded-3xl p-8 border border-slate-700 border-glow-hover shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-xl text-gray-300 font-semibold">
                      {item.institution}
                    </p>
                    <p className="text-lg text-gray-400">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-sm font-medium text-blue-300 border border-blue-500/30">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

