import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, Code, GraduationCap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const timelineItems = [
  {
    date: 'Dec 2024 - Present',
    title: 'AI Engineer',
    company: 'Ministry of Digital Transformation',
    description: 'As a solo developer, I design and deploy language models (LLMs) to enhance government digital services. I handle the full lifecycle of AI automation and model integration across various platforms.',
    icon: <Code size={20} />,
    color: '#6366f1', // Indigo
  },
  {
    date: 'Nov 2024 - Present',
    title: 'System Administrator',
    company: 'Ministry of Digital Transformation',
    description: 'Manage IT systems and ensure optimal performance. Fixing issues and implementing new ideas.',
    icon: <Rocket size={20} />,
    color: '#10b981', // Emerald
  },
  {
    date: 'Sept 2024 - Present',
    title: 'Computer Engineering Student',
    company: 'Faculty of Computer and Information Science', // No company needed for education
    description: 'Pursuing a degree with hands-on experience in software development, AI, and systems engineering. Collaborating on tech projects.',
    icon: <GraduationCap size={20} />,
    color: '#f59e0b', // Amber
  },
  {
    date: 'Sept 2024 - Nov 2024',
    title: 'Application Developer',
    company: 'NLB Bank',
    description: 'Developed internal tools and systems to streamline operations, improve efficiency, and support critical business functions.',
    icon: <Briefcase size={20} />,
    color: '#60A5FA', // Blue
  },
];

export function CareerTimeline() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Career Timeline
        </h2>
        <VerticalTimeline lineColor="#374151">
          {timelineItems.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              date={item.date}
              dateClassName="text-white"
              iconStyle={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}40` }}
              icon={item.icon}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {item.company && (
                  <p className="text-gray-400 text-sm">{item.company}</p>
                )}
                <p className="text-gray-300 mt-2">{item.description}</p>
                <div className="mt-4">
                  <span
                    className="inline-block px-3 py-1 text-sm rounded-full"
                    style={{ background: `${item.color}20`, color: item.color }}
                  >
                    {item.date}
                  </span>
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
