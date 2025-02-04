import React from 'react';
import { Code, Palette, Globe, User } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900" // Darker background color using Tailwind
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
        <hr className="border-t border-white my-8" />
        <div className="grid md:grid-cols-3 gap-8">

          {/* About Me card spans full width */}
          <AboutCard className="md:col-span-3" />

          {/* Other skill cards */}
          <SkillCard
            icon={<Code size={32} />}
            title="Development"
            description="Experienced in both frontend and backend development, creating responsive and scalable applications."
          />
          <SkillCard
            icon={<Palette size={32} />}
            title="Design"
            description="Passionate about creating beautiful and intuitive user interfaces with attention to detail."
          />
          <SkillCard
            icon={<Globe size={32} />}
            title="Strategy"
            description="Strategic thinker with a focus on creating solutions that solve real-world problems."
          />
        </div>

      </div>
    </section>
  );
}

function AboutCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`p-6 rounded-lg bg-gray-800 transition-colors group flex flex-col md:flex-row ${className}`}
    >
      {/* Left Section with a vector image */}
      <div className="flex items-center justify-center md:w-1/3 mb-4 md:mb-0">
        <div className="w-full h-full">
          <img
            src="images/AboutImage.png"
            alt="About me Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 pl-0 md:pl-6">
        <h3 className="text-2xl font-semibold mb-4 text-white">Meet Jan</h3>
        <p className="text-gray-300"> {/* Lighter text color for contrast */}
          I’m a Computer Engineering student passionate about <strong>software development</strong>, <strong>embedded systems</strong>, and <strong>AI research</strong>. My expertise lies in building <strong>efficient, scalable solutions</strong> and diving into innovative projects.
          <br /><br />
          Beyond academics, I enjoy working on <strong>personal projects</strong>, contributing to <strong>open-source communities</strong>, and exploring the <strong>intersection of technology and creativity</strong>.
        </p>
        <hr className="border-t border-white my-6" />
        <h4 className="text-2xl font-semibold mb-4 text-white">Currently Working At:</h4>
        <img
            src="images/rs-logo.png"
            alt="Logo"
            style={{borderRadius: '6px',}}
            />
      </div>

    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 group">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <hr className="border-t border-gray-300 my-2" />
      <p className="text-white">{description}</p>
    </div>
  );
}
