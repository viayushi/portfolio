'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { 
          name: 'React.js', 
          icon: <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.394 0-3.745.961-6.101 2.725-.302.225-.604.225-.906 0C5.314 2.275 2.964 1.314 1.57 1.314c-.298 0-.604.055-.906.164L.44 1.971C1.212 1.643 2.01 1.314 3.12 1.314c1.72 0 3.83.961 5.877 2.59 2.048-1.629 4.158-2.59 5.877-2.59 1.11 0 1.91.329 2.68.657l-.224.493c-.302-.109-.608-.164-.906-.164zM22.44 1.971l-.224-.493c-.302-.109-.608-.164-.906-.164-1.72 0-3.83.961-5.877 2.59-2.048-1.629-4.158-2.59-5.877-2.59-1.11 0-1.91.329-2.68.657l-.224.493c.302-.109.608-.164.906-.164 1.72 0 3.83.961 5.877 2.59 2.048-1.629 4.158-2.59 5.877-2.59.298 0 .604.055.906.164z"/></svg>
        },
        { 
          name: 'JavaScript', 
          icon: <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.736.35.506.54.855.54 1.646h-2.962c-.013-.99-.75-1.764-1.8-1.764-.975 0-1.8.75-1.8 1.764 0 .99.825 1.764 1.8 1.764.975 0 1.8-.75 1.8-1.764h2.962c0 .99-.75 1.764-1.8 1.764-.975 0-1.8-.75-1.8-1.764z"/></svg>
        },
        { 
          name: 'HTML/CSS', 
          icon: <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11h-3.248l.33 4.171L12 19.351l5.559-1.443.232-2.718L6.187 15.73l-.698-8.01z"/></svg>
        },
        { 
          name: 'Node.js', 
          icon: <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247L1.809,18.42c-0.567-0.329-0.924-0.945-0.924-1.617V7.196c0-0.671,0.357-1.287,0.924-1.617L11.076,0.247c0.567-0.329,1.233-0.329,1.804,0L23.191,5.579c0.567,0.329,0.924,0.945,0.924,1.617v9.607c0,0.671-0.357,1.287-0.924,1.617L12.922,23.753C12.641,23.916,12.321,24,11.998,24zM3.736,7.196v9.607c0,0.43,0.229,0.826,0.604,1.08l9.658,5.333c0.376,0.254,0.8,0.254,1.176,0l9.658-5.333c0.375-0.254,0.604-0.65,0.604-1.08V7.196c0-0.43-0.229-0.826-0.604-1.08L12.998,0.783c-0.376-0.254-0.8-0.254-1.176,0L4.164,6.116C3.789,6.37,3.736,6.766,3.736,7.196z"/></svg>
        },
        { 
          name: 'Express.js', 
          icon: <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 18.186l-5.16-5.186L24 7.814v10.372zM13.16 0L0 13.16 13.16 26.32 26.32 13.16 13.16 0zM12.5 22.843L1.157 11.5 12.5 0.157 23.843 11.5 12.5 22.843z"/></svg>
        },
        { 
          name: 'Tailwind CSS', 
          icon: <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001,0C5.374,0,0.001,5.373,0.001,12S5.374,24,12.001,24C18.627,24,24.001,18.627,24.001,12S18.627,0,12.001,0zM12.001,22C6.478,22,2.001,17.523,2.001,12S6.478,2,12.001,2C17.524,2,22.001,6.477,22.001,12S17.524,22,12.001,22z"/></svg>
        },
      ]
    },
    {
      title: 'Programming Languages',
      icon: Database,
      skills: [
        { name: 'C++', icon: <span className="text-blue-500 font-bold text-lg">C++</span> },
        { name: 'Java', icon: <span className="text-orange-500 font-bold text-lg">Java</span> },
        { name: 'SQL', icon: <span className="text-blue-400 font-bold text-lg">SQL</span> },
        { name: 'MongoDB', icon: <span className="text-green-500 font-bold text-lg">M</span> },
        { name: 'Database Management', icon: <span className="text-purple-500 font-bold text-lg">DB</span> },
        { name: 'REST APIs', icon: <span className="text-cyan-500 font-bold text-lg">API</span> },
      ],
    },
    {
      title: 'Problem Solving',
      icon: Palette,
      skills: [
        { name: 'Data Structures', icon: <span className="text-green-400 font-bold text-lg">DS</span> },
        { name: 'Algorithms', icon: <span className="text-blue-400 font-bold text-lg">Algo</span> },
        { name: 'Problem Solving', icon: <span className="text-yellow-400 font-bold text-lg">PS</span> },
        { name: 'Competitive Programming', icon: <span className="text-purple-400 font-bold text-lg">CP</span> },
        { name: 'Object-Oriented Programming', icon: <span className="text-orange-400 font-bold text-lg">OOP</span> },
        { name: 'Operating Systems', icon: <span className="text-red-400 font-bold text-lg">OS</span> },
      ]
    },
    {
      title: 'Development Tools',
      icon: Cloud,
      skills: [
        { name: 'Git', icon: <span className="text-orange-500 font-bold text-lg">Git</span> },
        { name: 'GitHub', icon: <span className="text-gray-400 font-bold text-lg">GH</span> },
        { name: 'VS Code', icon: <span className="text-blue-500 font-bold text-lg">VS</span> },
        { name: 'Postman', icon: <span className="text-orange-400 font-bold text-lg">PM</span> },
        { name: 'Docker', icon: <span className="text-blue-400 font-bold text-lg">D</span> },
        { name: 'Mongoose', icon: <span className="text-green-500 font-bold text-lg">M</span> },
      ]
    },
    {
      title: 'Competitive Programming',
      icon: Smartphone,
      skills: [
        { name: 'LeetCode', icon: <span className="text-orange-500 font-bold text-lg">LC</span> },
        { name: 'HackerRank', icon: <span className="text-green-500 font-bold text-lg">HR</span> },
        { name: 'CodeChef', icon: <span className="text-blue-500 font-bold text-lg">CC</span> },
        { name: 'Competitive Programming', icon: <span className="text-purple-500 font-bold text-lg">CP</span> },
        { name: 'Hackathon Winner', icon: <span className="text-yellow-500 font-bold text-lg">🏆</span> },
      ]
    },
    {
      title: 'Advanced Technologies',
      icon: Globe,
      skills: [
        { name: 'Socket.IO', icon: <span className="text-blue-500 font-bold text-lg">SI</span> },
        { name: 'JWT Authentication', icon: <span className="text-green-500 font-bold text-lg">JWT</span> },
        { name: 'Real-time Applications', icon: <span className="text-purple-500 font-bold text-lg">RT</span> },
        { name: 'API Integration', icon: <span className="text-cyan-500 font-bold text-lg">API</span> },
        { name: 'Performance Optimization', icon: <span className="text-orange-500 font-bold text-lg">PO</span> },
        { name: 'Responsive Design', icon: <span className="text-pink-500 font-bold text-lg">RD</span> },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-6 glass-effect rounded-lg card-hover"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="text-primary-400 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                                 <div className="grid grid-cols-2 gap-4">
                   {category.skills.map((skill, skillIndex) => (
                     <motion.div
                       key={skill.name}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                       transition={{
                         delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                         duration: 0.5
                       }}
                       whileHover={{ scale: 1.05, y: -5 }}
                       className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
                     >
                       <div className="w-8 h-8 flex items-center justify-center">
                         {skill.icon}
                       </div>
                       <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                                 'Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming',
                 'Code Review', 'Performance Optimization', 'Debugging',
                 'Responsive Design', 'Cross-browser Compatibility', 'API Integration',
                 'Object-Oriented Programming', 'System Design'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 bg-dark-800/50 border border-dark-700 rounded-lg text-center hover:border-primary-500/50 transition-colors"
                >
                  <span className="text-gray-300 text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default Skills 