import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Consistent Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 opacity-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Jan Bremec</h3>
            <p className="text-gray-400 mt-2">Computer Engineering Student</p>
          </div>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/JanBremec"
              className="hover:text-blue-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jan-bremec-3b2644306"
              className="hover:text-blue-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </motion.a>
            <motion.a
              href="mailto:jan04bremec@gmail.com"
              className="hover:text-blue-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
            </motion.a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jan Bremec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}