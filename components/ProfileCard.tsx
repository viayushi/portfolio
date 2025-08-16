'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, ExternalLink, Mail } from 'lucide-react'

const ProfileCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const skills = ['React', 'Node.js', 'JavaScript', 'Java', 'C++', 'Competitive Programming', 'Data Structures and Algorithms', 'MongoDB', 'SQL']

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Profile</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A quick overview of my professional profile and achievements
            </p>
          </motion.div>

          {/* Main Browser Window */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            {/* Browser Window */}
            <div className="bg-dark-900 rounded-2xl border border-dark-700 shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="bg-dark-800 px-6 py-4 flex items-center space-x-3 border-b border-dark-700">
                {/* Traffic Light Buttons */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* URL Bar */}
                <div className="flex-1 ml-4">
                  <div className="bg-dark-700 rounded-lg px-4 py-2 text-sm text-gray-300">
                    ayushi-vishwakarma-portfolio.vercel.app
                  </div>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-8">
                {/* Profile Header */}
                <div className="flex items-start space-x-6 mb-8">
                  {/* Avatar */}
                  <motion.div
                    variants={itemVariants}
                    className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold"
                  >
                    AV
                  </motion.div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <motion.h3
                      variants={itemVariants}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      Ayushi Vishwakarma
                    </motion.h3>
                    <motion.p
                      variants={itemVariants}
                      className="text-xl text-gray-300 mb-3"
                    >
                      Full Stack Developer
                    </motion.p>
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Available for work</span>
                    </motion.div>
                  </div>
                </div>

                {/* About Section */}
                <motion.div variants={itemVariants} className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-3">About</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate developer specializing in React, Node.js, and competitive programming. 
                    Building scalable solutions for modern web applications with expertise in 
                    problem-solving and algorithm optimization. Eager to learn new technologies and improve my skills.
                  </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={itemVariants} className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white text-sm hover:border-primary-500 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium flex items-center space-x-2 hover:bg-primary-600 transition-colors"
                  >
                    <Mail size={16} />
                    <span>Contact</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://drive.google.com/file/d/1XfvNpXUUs1Ofz23tyL_fsccz3uJeedkI/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-dark-800 border border-gray-600 text-white rounded-lg font-medium flex items-center space-x-2 hover:border-primary-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Resume</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Floating Metric Cards */}
            {/* Portfolio Views Card */}
            <motion.div
              variants={floatingVariants}
              className="absolute -top-8 -right-8 md:-right-12 bg-dark-800 rounded-xl p-4 border border-dark-700 shadow-xl"
              style={{ transform: 'rotate(5deg)' }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="text-green-400 w-4 h-4" />
                <span className="text-gray-300 text-sm">Portfolio Views</span>
              </div>
              <div className="text-2xl font-bold text-white">2.4K</div>
            </motion.div>

            {/* Profile Visits Card */}
            <motion.div
              variants={floatingVariants}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-dark-800 rounded-xl p-4 border border-dark-700 shadow-xl"
              style={{ transform: 'rotate(-5deg)' }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Users className="text-blue-400 w-4 h-4" />
                <span className="text-gray-300 text-sm">LeetCode Rating</span>
              </div>
              <div className="text-2xl font-bold text-white">1,635</div>
            </motion.div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Completed', value: '50+', icon: '🚀' },
              { label: 'Years Experience', value: '3+', icon: '⏰' },
              { label: 'Technologies', value: '15+', icon: '🛠️' },
              { label: 'Client Satisfaction', value: '100%', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-lg card-hover"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfileCard 