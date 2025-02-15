import React, { useEffect, useRef, useState } from 'react';
import { useInView } from './hooks/useInView';
import { FaPython, FaDatabase, FaHtml5, FaRust, FaJava } from 'react-icons/fa';
import { CgCPlusPlus } from 'react-icons/cg';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600', icon: <FaPython />, description: 'Proficient in scripting, data analysis, and AI.' },
    { name: 'C', level: 85, color: 'from-blue-400 to-blue-600', icon: <CgCPlusPlus />, description: 'Experienced in system-level programming and performance optimization.' },
    { name: 'Java', level: 80, color: 'from-green-400 to-green-600', icon: <FaJava />, description: 'Solid foundation in OOP and backend development.' },
    { name: 'SQL', level: 75, color: 'from-emerald-400 to-emerald-600', icon: <FaDatabase />, description: 'Strong skills in database design and query optimization.' },
    { name: 'HTML/CSS/JS/TS', level: 70, color: 'from-cyan-400 to-cyan-600', icon: <FaHtml5 />, description: 'Competent in creating responsive and interactive web apps.' },
    { name: 'Rust', level: 60, color: 'from-orange-400 to-orange-600', icon: <FaRust />, description: 'Beginner with a focus on memory safety and concurrency.' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-950 via-black to-gray-900 opacity-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 4, ease: 'easeOut', repeatType: 'mirror' }}
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
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 200} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}

function SkillBar({ skill, delay, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ width: `${skill.level}%`, transition: { duration: 1, delay: delay / 1000 } });
    } else {
      controls.start({ width: '0%' });
    }
  }, [isVisible, skill.level, delay, controls]);

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

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-800/20 backdrop-blur-md hover:bg-gray-800/40 transform transition-all hover:scale-105 hover:shadow-2xl relative z-10 cursor-pointer"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl text-white">{skill.icon}</div>
        <span className="text-xl font-medium text-gray-200">{skill.name}</span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{skill.description}</p>
      <div className="h-4 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          animate={controls}
        ></motion.div>
      </div>
      <div className="text-sm text-gray-400 text-right mt-2">{skill.level}%</div>

      {/* Click Interaction */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-gray-900/90 backdrop-blur-md rounded-lg flex items-center justify-center p-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-center">{skill.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
}