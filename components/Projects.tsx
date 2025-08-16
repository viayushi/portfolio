'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

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

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'algorithm', label: 'Algorithms' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'web', label: 'Web Apps' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Stock Market Simulator',
      category: 'fullstack',
      description: 'A comprehensive stock market simulation platform that allows users to practice trading with virtual money and real-time market data.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'React', 'Node.js', 'Real-time Data', 'Trading APIs'],
      liveUrl: 'https://github.com/viayushi/Stock_Market_Stimulator',
      githubUrl: 'https://github.com/viayushi/Stock_Market_Stimulator',
      features: ['Real-time Market Data', 'Virtual Trading', 'Portfolio Management', 'Market Analysis'],
      type: 'web'
    },
    {
      id: 2,
      title: 'Rentify Contract Platform',
      category: 'fullstack',
      description: 'Digital property listing and rent agreement/contract platform for seamless property management.',
      image: '/images/achievements/rentify-platform.png',
      technologies: ['JavaScript', 'React', 'Node.js', 'Contract Management', 'Property Listing'],
      liveUrl: 'https://github.com/viayushi/Rentify_Contract',
      githubUrl: 'https://github.com/viayushi/Rentify_Contract',
      demoPdfUrl: 'https://drive.google.com/file/d/1IKj7fMTHcBskMMWloa9yQgrEv_GxrNmG/view?usp=sharing',
      features: ['Property Listings', 'Digital Contracts', 'Rent Agreements', 'User Management'],
      type: 'web'
    },
    {
      id: 3,
      title: 'Storage Drive Backend',
      category: 'backend',
      description: 'Authentication-based cloud storage system using Supabase, acting as a clone of Google Drive for storing PDFs, images, and documents.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Supabase', 'Authentication', 'File Storage', 'API Development'],
      liveUrl: 'https://github.com/viayushi/StorageDrive_backend',
      githubUrl: 'https://github.com/viayushi/StorageDrive_backend',
      features: ['User Authentication', 'File Upload/Download', 'Cloud Storage', 'Document Management'],
      type: 'web'
    },
    {
      id: 4,
      title: 'Gemini Clone',
      category: 'ai',
      description: 'A fully functional Gemini AI clone using the Gemini API, providing AI-powered conversation and assistance.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Gemini API', 'AI Integration', 'React', 'Real-time Chat'],
      liveUrl: 'https://github.com/viayushi/Gemini_Clone',
      githubUrl: 'https://github.com/viayushi/Gemini_Clone',
      features: ['AI Conversations', 'Gemini API Integration', 'Real-time Responses', 'User Interface'],
      type: 'web'
    },
    {
      id: 5,
      title: 'Streaming Platform',
      category: 'fullstack',
      description: 'Video streaming platform using RTMP, FFmpeg, Docker, and Node.js for seamless video streaming capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'RTMP', 'FFmpeg', 'Docker'],
      liveUrl: 'https://github.com/viayushi/Streaming-Platform',
      githubUrl: 'https://github.com/viayushi/Streaming-Platform',
      features: ['Video Streaming', 'RTMP Support', 'Docker Containerization', 'Real-time Streaming'],
      type: 'web'
    },
    {
      id: 6,
      title: 'N-Queens Visualizer',
      category: 'algorithm',
      description: 'Interactive N-Queens puzzle visualizer demonstrating algorithmic problem-solving with visual representation.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Algorithm Visualization', 'Problem Solving', 'Interactive UI'],
      liveUrl: 'https://github.com/viayushi/N-queens',
      githubUrl: 'https://github.com/viayushi/N-queens',
      features: ['Algorithm Visualization', 'Interactive Puzzles', 'Problem Solving', 'Educational Tool'],
      type: 'web'
    },
    {
      id: 7,
      title: 'Nexus Contributions',
      category: 'collaboration',
      description: 'Open-source contribution platform for developers to collaborate and contribute to various projects.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Collaboration Tools', 'Open Source', 'Developer Platform'],
      liveUrl: 'https://github.com/viayushi/Nexus_contibutions',
      githubUrl: 'https://github.com/viayushi/Nexus_contibutions',
      features: ['Open Source Collaboration', 'Project Management', 'Developer Tools', 'Community Building'],
      type: 'web'
    },
    {
      id: 8,
      title: 'Expense Tracker',
      category: 'web',
      description: 'Personal finance management application built with HTML, CSS, and JavaScript for tracking expenses and income.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Financial Management'],
      liveUrl: 'https://github.com/viayushi/ExpenseTracker',
      githubUrl: 'https://github.com/viayushi/ExpenseTracker',
      features: ['Expense Tracking', 'Income Management', 'Financial Reports', 'Local Storage'],
      type: 'web'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my skills in development and design
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg glass-effect card-hover"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image && project.image !== '/api/placeholder/400/250' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">
                            {project.type === 'mobile' ? <Smartphone className="mx-auto" /> : 
                             project.type === 'design' ? <Eye className="mx-auto" /> : 
                             <Globe className="mx-auto" />}
                          </div>
                          <p className="text-gray-400 text-sm">{project.title}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
                          title="View Live"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-dark-800 rounded-full text-white hover:bg-dark-700 transition-colors"
                          title="View Code"
                        >
                          <Github size={20} />
                        </motion.a>
                        {project.demoPdfUrl && (
                          <motion.a
                            href={project.demoPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors"
                            title="View Demo PDF"
                          >
                            <Eye size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demo PDF Button */}
                    {project.demoPdfUrl && (
                      <div className="mt-4">
                        <motion.a
                          href={project.demoPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          <Eye size={16} />
                          <span>View Demo PDF</span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-400 text-primary-400 rounded-full font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 