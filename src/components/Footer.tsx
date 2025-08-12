
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 120, // Increased offset to move content higher
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer id="contact" className={cn('pt-10 pb-16 bg-white border-t border-gray-100', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-gray-100 pt-8">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col space-y-6">
            <div className="text-center">
              <Link to="/" className="text-xl font-serif font-medium tracking-tight">
                NepCoffee
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <button
                onClick={() => scrollToSection('home')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('our-farm')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                Our Farm
              </button>
              <button
                onClick={() => scrollToSection('opportunity')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                Why Nepal?
              </button>
              <button
                onClick={() => scrollToSection('gap')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                The Challenge
              </button>
              <button
                onClick={() => scrollToSection('community')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                Our Promise
              </button>
              <button
                onClick={() => scrollToSection('subscribe')} 
                className="text-sm hover:text-amber-700 transition-colors px-2 py-1"
              >
                Connect
              </button>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NepCoffee. All rights reserved.
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <div>
              <Link to="/" className="text-xl font-serif font-medium tracking-tight">
                NepCoffee
              </Link>
            </div>
            
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection('home')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('our-farm')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                Our Farm
              </button>
              <button
                onClick={() => scrollToSection('opportunity')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                Why Nepal?
              </button>
              <button
                onClick={() => scrollToSection('gap')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                The Challenge
              </button>
              <button
                onClick={() => scrollToSection('community')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                Our Promise
              </button>
              <button
                onClick={() => scrollToSection('subscribe')} 
                className="text-sm hover:text-amber-700 transition-colors"
              >
                Connect
              </button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NepCoffee. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
