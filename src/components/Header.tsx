import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isMobileMenuOpen 
          ? 'py-3 bg-white shadow-sm border-b border-gray-200'
          : isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm'
            : 'py-5 bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className={cn(
            "text-xl font-serif font-medium tracking-tight transition-opacity hover:opacity-80 cursor-pointer",
            isScrolled ? "text-gray-900" : "text-white"
          )}
        >
          NepCoffee
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} isScrolled={isScrolled} />
        </div>
        
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={cn(
              "absolute top-0 left-0 w-6 h-0.5 transition-all duration-300 transform",
              isScrolled ? "bg-gray-900" : "bg-white",
              isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
            )} />
            <span className={cn(
              "absolute top-2 left-0 w-6 h-0.5 transition-all duration-300",
              isScrolled ? "bg-gray-900" : "bg-white",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={cn(
              "absolute top-4 left-0 w-6 h-0.5 transition-all duration-300 transform",
              isScrolled ? "bg-gray-900" : "bg-white",
              isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"
            )} />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col transition-all duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
        style={{ paddingTop: '80px' }}
      >
        <nav className="flex flex-col space-y-6 text-lg px-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "hover:text-amber-700 transition-colors text-gray-900",
              isActive && "text-amber-700 font-semibold"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </button>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('our-farm');
              setIsMobileMenuOpen(false);
            }}
          >
            Our Farm
          </button>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('opportunity');
              setIsMobileMenuOpen(false);
            }}
          >
            Why Nepal?
          </button>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('gap');
              setIsMobileMenuOpen(false);
            }}
          >
            The Challenge
          </button>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('community');
              setIsMobileMenuOpen(false);
            }}
          >
            Our Promise
          </button>
          <button 
            className="text-left hover:text-amber-700 transition-colors text-gray-900"
            onClick={() => {
              scrollToSection('subscribe');
              setIsMobileMenuOpen(false);
            }}
          >
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
  isScrolled: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection, isScrolled }) => (
  <>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('home')}
    >
      Home
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('about')}
    >
      About
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('our-farm')}
    >
      Our Farm
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('opportunity')}
    >
      Why Nepal?
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('gap')}
    >
      The Challenge
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('community')}
    >
      Our Promise
    </button>
    <button 
      className={cn(
        "text-sm font-medium hover:text-amber-700 transition-colors",
        isScrolled ? "text-gray-900" : "text-white"
      )}
      onClick={() => scrollToSection('subscribe')}
    >
      Connect
    </button>
  </>
);

export default Header;
