import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInView } from './hooks/useInView'; // Assume you have the `useInView` hook
import { FaPython, FaDatabase, FaHtml5, FaRust, FaJava } from 'react-icons/fa';
import { CgCPlusPlus } from 'react-icons/cg';

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
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Currently Working On Section */}
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <CurrentlyWorkingOn />
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="bg-gray-100 text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
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
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}


interface Project {
  name: string;
  description: string;
  image: string;
  progress: number; // The progress of the project in percentage
}

export function CurrentlyWorkingOn() {
  const project: Project = {
    name: "ML Stock Market Analysis",
    description: "A project analyzing stock market trends using machine learning.",
    image: "images/graph.jpg", // Path to your project image
    progress: 70, // Progress percentage
  };

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Currently Working On</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 mr-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <ProjectProgressBar progress={project.progress} isVisible={isInView} />
          </div>
          <div className="text-right text-white">{project.progress}% Complete</div>
        </div>
      </div>
    </section>
  );
}

interface ProjectProgressBarProps {
  progress: number;
  isVisible: boolean;
}

function ProjectProgressBar({ progress, isVisible }: ProjectProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(progress);
      }, 500); // Delay the progress bar increase when it comes into view
      return () => clearTimeout(timer);
    }
    return () => setWidth(0);
  }, [isVisible, progress]);

  return (
    <div
      className="h-full bg-green-500 transition-all duration-1000 ease-out"
      style={{ width: `${width}%` }}
    ></div>
  );
}
