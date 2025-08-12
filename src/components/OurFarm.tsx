import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface OurFarmProps {
  className?: string;
}

const OurFarm: React.FC<OurFarmProps> = ({ className }) => {
  return (
    <section id="our-farm" className={cn('pt-10 pb-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm md:text-base font-medium text-amber-700 mb-2 inline-block animate-fade-in">Our Farm</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6 animate-fade-in-up">
                Where Every Bean Tells a Story
              </h2>
            </div>
          </FadeIn>

          {/* Center Image */}
          <FadeIn delay={200}>
            <div className="relative h-[250px] lg:h-[350px] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-16">
              <img 
                src="/lovable-uploads/ourfarm.jpg"
                alt="Our Coffee Farm in Bahatari, Phedikhola, Syangja"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </FadeIn>

          {/* Content Below Image */}
          <FadeIn delay={300}>
            <div className="space-y-8 text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Bahatari, Phedikhola, Syangja, our coffee grows on cool north-east slopes blessed with golden morning light and a refreshing breeze from the Annapurna Range. This unique microclimate and shade-grown cultivation allow our cherries to ripen slowly, developing rich flavors and aroma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in community and tradition, every household in our village plays a role in bringing you coffee that reflects the soul of our land.
              </p>
            </div>
          </FadeIn>

          {/* Bottom Stats */}
          <FadeIn delay={400} className="mt-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-amber-700 mb-2">1,200-1,500m</div>
                <div className="text-sm text-muted-foreground">Elevation Above Sea Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-amber-700 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Organic Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-amber-700 mb-2">Arabica</div>
                <div className="text-sm text-muted-foreground">Specialty Coffee Only</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default OurFarm;
