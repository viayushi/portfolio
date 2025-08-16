'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate developer creating innovative digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
                             {[
                 { name: 'GitHub', url: 'https://github.com/ayushivishwakarma', icon: '🐙' },
                 { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayushi-vishwakarma-01b927246/', icon: '💼' },
                 { name: 'LeetCode', url: 'https://leetcode.com/u/viayushi/', icon: '💻' },
                 { name: 'Resume', url: 'https://drive.google.com/file/d/1XfvNpXUUs1Ofz23tyL_fsccz3uJeedkI/view?usp=drive_link', icon: '📄' }
               ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-dark-800 rounded-lg text-white hover:bg-primary-500 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Portfolio. Made with{' '}
              <Heart className="inline-block w-4 h-4 text-red-500 mx-1" />
              {' '}and lots of coffee.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 