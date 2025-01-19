import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section 
  id="home"
  className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/HomeImage.jpg")',
  }}
>

      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp">
          Hi, I'm <span className="text-blue-400">Jan Bremec</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fadeInUp animation-delay-200">
          Computer Engineering Student
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-white" size={32} />
      </a>
    </section>
  );
}