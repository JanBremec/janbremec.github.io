import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Globe, User, Cpu, Brain, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export function About() {
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax effect

  return (
    <section id="about" className="py-20 bg-gray-900 overflow-hidden relative">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gray-900 opacity-50"
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
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h2>


        {/* About Me Card */}
        <AboutCard className="md:col-span-3 shadow-lg mb-12" />

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 group relative">
          {[
            { id: 'development', icon: <Code size={32} />, title: 'Development', description: 'Experienced in both frontend and backend development, creating responsive and scalable applications.', color: 'from-blue-500 to-purple-500' },
            { id: 'design', icon: <Palette size={32} />, title: 'Design', description: 'Passionate about creating beautiful and intuitive user interfaces with attention to detail.', color: 'from-green-500 to-teal-600' },
            { id: 'strategy', icon: <Globe size={32} />, title: 'Strategy', description: 'Strategic thinker with a focus on creating solutions that solve real-world problems.', color: 'from-yellow-500 to-orange-600' },
          ].map((skill) => (
            <motion.div
              key={skill.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                color={skill.color}
                className={`shadow-lg transition-all ${
                  hoveredCard && hoveredCard !== skill.id ? 'opacity-50 blur-sm' : ''
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCard({ className = '' }: { className?: string }) {
  const [hovered, setHovered] = useState(false); // Track hover state
  const [typedText, setTypedText] = useState('');
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const description = `I’m a Computer Engineering student passionate about software development, embedded systems, and AI research. My expertise lies in building efficient, scalable solutions and diving into innovative projects.

Beyond academics, I enjoy working on personal projects, contributing to open-source communities, and exploring the intersection of technology and creativity.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setTypedText(''); // Reset text before starting animation
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => {
          if (i < description.length) {
            return description.slice(0, i + 1); // Use slicing to avoid duplicated letters
          } else {
            clearInterval(interval);
            return prev; // Stop updating when complete
          }
        });
        i++;
      }, 30); // Adjust speed of typing

      return () => clearInterval(interval);
    }
  }, [inView]);

  const getStyledText = (text: string) => {
    return text.split(' ').map((word, index) => {
      let className = '';
      // Define styling for specific words
      if (word === 'AI') {
        className = 'text-blue-400 font-bold';
      } else if (word === 'embedded') {
        className = 'text-green-400 italic';
      } else if (word === 'software') {
        className = 'text-yellow-400';
      } else if (word === 'open-source') {
        className = 'text-red-400 font-semibold';
      }

      return (
        <span key={index} className={className}>
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <motion.div
      ref={elementRef}
     className={`p-8 rounded-lg bg-gray-800/20 backdrop-blur-md border border-white hover:border-white/30 transition-all group flex flex-col md:flex-row ${className}
  shadow-[0_0_10px_3px_rgba(0,255,255,0.5)] hover:shadow-[0_0_9px_4px_rgba(0,255,255,1)]`}

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left Section */}
      <motion.div
        className="flex items-center justify-center md:w-1/3 mb-4 md:mb-0"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-full h-full relative">
          <img
            src="images/AboutImage.png"
            alt="About me Image"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="md:w-2/3 pl-0 md:pl-8">
        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Meet Jan
        </h3>
        <p className="text-gray-300 whitespace-pre-line">
          {getStyledText(typedText) || '...'}
          {typedText.length < description.length && (
            <span className="ml-1 inline-block w-1 h-5 bg-white animate-blink" />
          )}
        </p>

        {/* Skills Icons */}
        <div className="flex gap-4 mt-6">
          <motion.div
            className="p-3 bg-gray-700/50 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Code size={24} className="text-blue-400" />
          </motion.div>
          <motion.div
            className="p-3 bg-gray-700/50 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Cpu size={24} className="text-green-400" />
          </motion.div>
          <motion.div
            className="p-3 bg-gray-700/50 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Brain size={24} className="text-yellow-400" />
          </motion.div>
        </div>

        <hr className="border-t border-white/10 my-6" />

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/JanBremec"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={24} className="text-white" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/jan-bremec-3b2644306"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={24} className="text-blue-400" />
          </motion.a>
          <motion.a
            href="mailto:jan04bremec@gmail.com"
            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Mail size={24} className="text-red-400" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function SkillCard({ icon, title, description, color, className }) {
  const [typedText, setTypedText] = useState('');
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setTypedText('');
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => {
          if (i < description.length) {
            return description.slice(0, i + 1);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
        i++;
      }, 30);

      return () => clearInterval(interval);
    }
  }, [inView, description]);

  return (
    <motion.div
      ref={elementRef}
      className={`${className} p-8 rounded-lg bg-gradient-to-br ${color} backdrop-blur-md border border-white/10 hover:border-white/20 transform transition-all hover:scale-105 hover:shadow-2xl relative z-10 group-hover:z-20`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center mb-4 text-white group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <hr className="border-t border-white/10 my-2" />
      <p className="text-white">{typedText}</p>
    </motion.div>
  );
}