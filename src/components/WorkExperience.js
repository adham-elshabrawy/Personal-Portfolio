'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users } from 'lucide-react'
import { workExperience, extracurricularExperience } from '@/data/portfolio'

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-gray-200"
          >
            Work Experience
          </motion.h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-gradient rounded-3xl p-8 border border-slate-700 border-glow-hover shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {job.title}
                      </h3>
                      <p className="text-xl text-gray-300 font-semibold">
                        {job.company}
                      </p>
                      <p className="text-lg text-gray-400">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-sm font-medium text-blue-300 border border-blue-500/30">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 pt-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-2 font-bold">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurricular Experience Section */}
        {extracurricularExperience && extracurricularExperience.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-gray-200"
            >
              Extracurricular Experience
            </motion.h3>
            <div className="space-y-8">
              {extracurricularExperience.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-gradient rounded-3xl p-8 border border-slate-700 border-glow-hover shadow-lg hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-md">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-xl text-gray-300 font-semibold">
                          {activity.organization}
                        </p>
                        {activity.location && (
                          <p className="text-lg text-gray-400">
                            {activity.location}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-sm font-medium text-cyan-300 border border-cyan-500/30">
                          {activity.period}
                        </span>
                      </div>
                      <ul className="space-y-2 pt-2">
                        {activity.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-400 mt-2 font-bold">•</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

