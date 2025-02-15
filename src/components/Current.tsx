import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const project = {
  title: "Decentralized Internet Project",
  description:
    "Building a next-gen decentralized web for secure, open, and censorship-resistant communication.",
  additionalInfo: {
    text: "This project aims to create a decentralized network that ensures data privacy and security. It aims to provide a platform where users can communicate and share information without the fear of censorship or surveillance.",
    image: "images/Decentralized.png", // Path to your image
    github: "https://github.com/JanBremec", // Link to your GitHub
  },
  icon: <Globe size={48} />, // Bigger for better emphasis
  link: "#",
};

export const CurrentlyWorkingOn: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('images/Decentralized.png')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-30 blur-xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Currently Working On
        </motion.h2>

        <motion.div
          className="relative p-10 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {project.icon}
          </motion.div>

          <motion.h3
            className="text-3xl font-bold mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="mt-4 text-lg opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="mt-6 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <motion.a

                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden shadow-lg relative group block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.additionalInfo.image}
                  alt="Decentralized Internet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Soon on GitHub</span>
                </div>
              </motion.a>

              {/* Text Section */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-lg opacity-80">
                  {project.additionalInfo.text}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 inline-block px-6 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {isExpanded ? "Show Less" : "Learn More"} →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};