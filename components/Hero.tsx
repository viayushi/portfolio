'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-primary-400 mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text text-shadow">Ayushi Vishwakarma</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8"
          >
            Full Stack Developer & Problem Solver
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Passionate developer with expertise in React, Node.js, and competitive programming. 
            I love solving complex problems and creating innovative web solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>
            
            <motion.a
              href="https://drive.google.com/file/d/1XfvNpXUUs1Ofz23tyL_fsccz3uJeedkI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-400 hover:text-white transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">8+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1st</div>
              <div className="text-gray-400">Hackathon Winner</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">554</div>
              <div className="text-gray-400">LeetCode Problems</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 right-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/4 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-60"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary-300 rounded-full opacity-60"
        style={{ animationDelay: "4s" }}
      />
    </section>
  )
}

export default Hero 