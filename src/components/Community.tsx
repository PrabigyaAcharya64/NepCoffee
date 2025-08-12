
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  const pillars = [
    {
      title: "Quality",
      description: "Every bean is handpicked, carefully processed, and roasted to bring out its natural character and unique Himalayan terroir"
    },
    {
      title: "Sustainability",
      description: "We invest directly in farmer training, sustainable practices, and environmental conservation in coffee-growing communities"
    },
    {
      title: "Community",
      description: "Supporting local farmers and their families through fair pricing, education, and long-term partnerships"
    }
  ];

  return (
    <section id="community" className={cn('pt-10 pb-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Our Promise</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center mb-8">
              We promise to deliver exceptional quality, sustainable practices, and meaningful community impact with every cup of NepCoffee.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={150 + index * 100}>
              <Card className="border-0 shadow-sm h-full overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/lovable-uploads/${index === 0 ? 'pic7.jpeg' : index === 1 ? 'pic8.webp' : 'pic9.webp'}`}
                    alt={pillar.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3 font-serif text-center animate-fade-in-up">{pillar.title}</h3>
                  <p className="text-muted-foreground text-center flex-grow animate-fade-in-up">{pillar.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
