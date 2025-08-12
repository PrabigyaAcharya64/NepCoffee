import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative h-screen flex items-center overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src="./lovable-uploads/hero.jpg" 
          alt="NepCoffee Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-6 animate-fade-in-up">
              NepCoffee – From the Himalayan Highlands to Your Cup
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
              Handpicked Himalayan beans, expertly roasted — every sip supports Nepali farmers.
            </p>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
              Fresh, authentic, and full of life — just like our land.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-white/70 text-sm font-medium tracking-wide">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
