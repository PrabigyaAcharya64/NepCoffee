
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {

  const statistics = [
    {
      title: "Hard to Find",
      description: "Most Nepali coffee is consumed locally and rarely reaches global markets."
    },
    {
      title: "Farmers Earn Less",
      description: "Much of the value is captured after export, leaving producers with a small share despite their hard work."
    },
    {
      title: "A Hidden Gem",
      description: "Nepal has yet to be fully discovered by the global specialty coffee movement — meaning every sip is a taste of something rare."
    }
  ];

  return (
    <section id="gap" className={cn('pt-10 pb-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">The Challenge</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center mb-8">
              Why You Haven't Heard of Nepali Coffee (Yet)
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <FadeIn key={index} delay={150 + index * 100}>
              <Card className="border-0 shadow-sm h-full overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`./lovable-uploads/${index === 0 ? 'pic3.webp' : index === 1 ? 'pic4.jpg' : 'pic5.jpg'}`}
                    alt={stat.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-3 font-serif text-center animate-fade-in-up">{stat.title}</h3>
                  <p className="text-muted-foreground text-center flex-grow animate-fade-in-up">{stat.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gap;
