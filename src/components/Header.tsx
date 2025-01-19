import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <NavLinks />
              <div className="flex justify-center gap-4 pt-4 border-t">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-6">
      {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-white hover:text-gray-900 transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/JanBremec" className="text-white hover:text-gray-900 transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/jan-bremec-3b2644306" className="text-white hover:text-gray-900 transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:jan04bremec@gmail.com" className="text-white hover:text-gray-900 transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
}