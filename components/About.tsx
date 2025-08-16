'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import { User, MapPin, Mail, Phone, Calendar, GraduationCap } from 'lucide-react'

const About = () => {
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

  const personalInfo = [
    { icon: '👤', label: 'Name', value: 'Ayushi Vishwakarma' },
    { icon: '📅', label: 'Birthday', value: 'December 31, 2002' },
    { icon: '📍', label: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
    { icon: '📧', label: 'Email', value: 'viayushi@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 9302055365' },
    { icon: '🎓', label: 'Degree', value: 'Bachelor of Technology in Electronics and Telecommunication Engineering' },
  ]

  const education = [
    {
      degree: 'Bachelor of Technology in Electronics and Telecommunication Engineering',
      institution: 'Institute of Engineering and Technology, DAVV Indore, Madhya Pradesh',
      year: '2022 - 2026',
      description: 'CGPA: 7.89/10'
    },
    {
      degree: 'Class XII, ISC Board',
      institution: 'Mount Carmel School, Bhopal, Madhya Pradesh',
      year: '2020 - 2021',
      description: 'Percentage: 88.6%'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-900/50">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know me better - my background, education, and what drives my passion for technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-lg"
                  >
                    <span className="text-primary-400 text-xl">{info.icon}</span>
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}</span>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements & Photos */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Achievements</h3>
              <div className="space-y-6">
                {/* Mind Coders Hackathon Achievement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                  className="group relative overflow-hidden bg-dark-800/50 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 shadow-2xl"
                >
                  <div className="relative h-48 bg-gradient-to-br from-yellow-400/30 via-orange-500/30 to-yellow-600/30 rounded-t-xl flex items-center justify-center border-b border-yellow-500/20">
                    <div className="text-center z-10">
                      <div className="text-7xl mb-3 drop-shadow-lg">🏆</div>
                      <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">Mind Coders</div>
                      <div className="text-xl text-yellow-300 font-semibold drop-shadow-lg">Hackathon 1.0</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <span className="text-yellow-300 text-sm font-bold">CHAMPION</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-dark-800/80">
                    <h4 className="text-xl font-bold text-white mb-2">Mind Coders Hackathon 1.0 Champion</h4>
                    <p className="text-yellow-400 font-semibold text-base mb-2">🥇 1st Position among 100+ teams nationwide</p>
                    <p className="text-gray-300 text-sm">Leading a team to victory in competitive coding challenges</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white p-6">
                      <div className="text-8xl mb-4">🏆</div>
                      <h4 className="text-3xl font-bold mb-3">CHAMPION</h4>
                      <p className="text-xl mb-2">Mind Coders Hackathon 1.0</p>
                      <p className="text-lg opacity-90">1st Position among 100+ teams</p>
                    </div>
                  </div>
                </motion.div>

                {/* LeetCode Profile Achievement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="group relative overflow-hidden bg-dark-800/50 rounded-xl border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 shadow-2xl"
                >
                  <div className="relative h-48 bg-gradient-to-br from-orange-400/30 via-red-500/30 to-orange-600/30 rounded-t-xl flex items-center justify-center border-b border-orange-500/20">
                    <div className="text-center z-10">
                      <div className="text-7xl mb-3 drop-shadow-lg">💻</div>
                      <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">LeetCode</div>
                      <div className="text-xl text-orange-300 font-semibold drop-shadow-lg">Profile</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-orange-500/20 px-3 py-1 rounded-full">
                      <span className="text-orange-300 text-sm font-bold">TOP 18.81%</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-dark-800/80">
                    <h4 className="text-xl font-bold text-white mb-2">LeetCode Profile</h4>
                    <p className="text-orange-400 font-semibold text-base mb-2">📊 554 Problems Solved | Rating: 1,635</p>
                    <p className="text-gray-300 text-sm">Top 18.81% globally | 28 contests attended</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white p-6">
                      <div className="text-8xl mb-4">💻</div>
                      <h4 className="text-3xl font-bold mb-3">LEETCODE</h4>
                      <p className="text-xl mb-2">Rating: 1,635</p>
                      <p className="text-lg opacity-90">554 Problems | Top 18.81%</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Skills Preview */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 glass-effect rounded-lg card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-primary-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-dark-800 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 