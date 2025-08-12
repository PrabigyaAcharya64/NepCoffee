
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="opportunity" className={cn('pt-10 pb-20 relative', className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="./lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png" 
          alt="Nepal Coffee Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Semi-transparent container */}
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up hover:shadow-2xl transition-all duration-500">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center text-gray-900 animate-fade-in-up">Why Nepal?</h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 font-serif text-center text-gray-800 animate-fade-in-up">
                The world's best coffee often comes from places few have tasted. Nepal offers high-altitude terroir, centuries-old farming traditions, and communities ready to share their craft with the world. Supporting Nepali coffee means discovering a rare flavor — and helping it reach the recognition it deserves.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

