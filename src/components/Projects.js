'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const content = (
              <>
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover object-center ${
                        project.id === 1 
                          ? 'object-center-2' 
                          : project.id === 2
                          ? 'object-center-62'
                          : 'object-center-15'
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {project.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-800/90 flex items-center justify-center shadow-lg border border-white/30">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-blue-500/20 text-sm text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ willChange: 'opacity' }}
                className="group card-gradient rounded-3xl overflow-hidden border border-slate-700 border-glow-hover hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div>
                    {content}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

