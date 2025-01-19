import React, { useEffect, useRef, useState } from 'react';
import { useInView } from './hooks/useInView';
import { FaPython, FaDatabase, FaHtml5, FaRust, FaJava } from 'react-icons/fa';
import { CgCPlusPlus } from 'react-icons/cg';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'Python', level: 95, color: 'bg-yellow-500', icon: <FaPython />, description: 'Proficient in scripting, data analysis, and AI.' },
    { name: 'C', level: 85, color: 'bg-blue-500', icon: <CgCPlusPlus />, description: 'Experienced in system-level programming and performance optimization.' },
    { name: 'Java', level: 80, color: 'bg-green-500', icon: <FaJava />, description: 'Solid foundation in OOP and backend development.' },
    { name: 'SQL', level: 75, color: 'bg-emerald-500', icon: <FaDatabase />, description: 'Strong skills in database design and query optimization.' },
    { name: 'HTML/CSS/JS/TS', level: 70, color: 'bg-cyan-500', icon: <FaHtml5 />, description: 'Competent in creating responsive and interactive web apps.' },
    { name: 'Rust', level: 60, color: 'bg-orange-500', icon: <FaRust />, description: 'Beginner with a focus on memory safety and concurrency.' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
    return () => setWidth(0);
  }, [isVisible, skill.level, delay]);

  return (
    <div className="animate-fadeInUp space-y-3" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3">
        <div className="text-3xl text-white">{skill.icon}</div>
        <span className="text-xl font-medium text-gray-200">{skill.name}</span>
      </div>
      <p className="text-sm text-gray-400 mb-1">{skill.description}</p>
      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
      <div className="text-sm text-gray-400 text-right">{width}%</div>
    </div>
  );
}
