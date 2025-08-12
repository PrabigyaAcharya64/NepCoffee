
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('pt-10 pb-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div className="animate-slide-in-left">
                <span className="text-sm md:text-base font-medium text-amber-700 mb-2 inline-block animate-fade-in">Our Story</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6 animate-fade-in-up">Born from a passion for exceptional coffee and sustainable communities</h2>
              </div>
              
              <p className="text-lg text-muted-foreground animate-fade-in-up">
                We discovered Nepal's hidden coffee potential and knew we had to share it with the world.
              </p>
              <p className="text-lg text-muted-foreground animate-fade-in-up">
                Every cup of NepCoffee tells a story of high-altitude terroir, traditional farming methods, and communities working together to create something extraordinary.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden animate-slide-in-right">
              <img 
                src="./lovable-uploads/pic1.jpg"
                alt="NepCoffee Story"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
