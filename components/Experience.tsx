'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'ITJobxs',
      location: 'Remote',
      period: 'Jan 2025 - May 2025',
      type: 'Internship',
      description: 'Developed responsive frontend components and integrated them with backend APIs using React.js.',
      achievements: [
        'Developed responsive frontend components and integrated them with backend APIs using React.js',
        'Improved Lighthouse performance score to 80% resulting in a 15% increase in user engagement',
        'Collaborated with development team to deliver high-quality user interfaces',
        'Implemented modern web development practices and optimization techniques'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Performance Optimization']
    },
    {
      title: 'Designer/Developer',
      company: 'Nexus',
      location: 'Remote',
      period: 'Sept 2023 - June 2024',
      type: 'Part-time',
      description: 'Contributed in developing the Nexus website and launching Nexus Acadbud, with contributions in designing.',
      achievements: [
        'Contributed in developing the Nexus website and launching Nexus Acadbud',
        'Worked on design aspects and user interface improvements',
        'Collaborated with team members on various development tasks',
        'Gained experience in both design and development roles'
      ],
      technologies: ['Web Development', 'Design', 'Collaboration', 'Project Management']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey, internships, and contributions to various organizations
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row items-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="p-6 glass-effect rounded-lg card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-primary-400 mb-2">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <MapPin size={14} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <span className="text-primary-400">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '1st', label: 'Mindcoders Hackathon' },
                { number: '554', label: 'LeetCode Problems' },
                { number: '1,635', label: 'Contest Rating' },
                { number: '18.81%', label: 'Top Percentage' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 glass-effect rounded-lg card-hover"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 