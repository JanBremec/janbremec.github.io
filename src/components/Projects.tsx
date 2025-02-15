import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: "Stock Market Analysis With ML",
      description: "A website that uses ML to analyse stock market news and data.",
      image: "images/graph.jpg",
      github: "https://github.com/JanBremec/MarketAnalysisWithAI",
      demo: "https://marketanalysis-ai.streamlit.app/"
    },
    {
      title: "Code Analysis Website",
      description: "A website that uses ML to analyse, explain code and suggest improvements.",
      image: "images/code.jpg",
      github: "https://github.com/JanBremec/Code-Analysis",
      demo: "https://codeanalysis-ai.streamlit.app/"
    },
    {
      title: "Association game",
      description: "A simple association game that implements ML for sentence similarity.",
      image: "images/game.jpg",
      github: "https://github.com/JanBremec/GuessFlow",
      demo: "https://guessflow.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Seamless Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-gray-900 opacity-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      ></motion.div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: 0 }}
            animate={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, ease: 'linear', repeat: Infinity }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ title, description, image, github, demo }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="bg-gray-800/20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group transform transition-all hover:scale-105"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a
            href={github}
            className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href={demo}
            className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}