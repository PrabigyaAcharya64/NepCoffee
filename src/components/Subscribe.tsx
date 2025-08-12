import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SubscribeProps {
  className?: string;
}

const Subscribe: React.FC<SubscribeProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      // Here you would typically send this to a backend
      setShowSuccessDialog(true);
      setEmail('');
    }
  };

  return (
    <section id="subscribe" className={cn('pt-10 pb-10 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-full mx-auto">
          <FadeIn delay={200}>
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden">
                <img 
                  src="/lovable-uploads/pic6.jpg" 
                  alt="NepCoffee Subscribe Background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Centered newsletter box overlaid on the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md max-w-md w-full mx-4 animate-fade-in-up hover:shadow-xl transition-all duration-500">
                  <h3 className="text-2xl font-serif mb-6 text-center animate-fade-in-up">Join the NepCoffee Journey</h3>
                  <p className="text-center mb-6 text-gray-800 animate-fade-in-up">
                    Be the first to know about new harvests, limited roasts, and stories from the farmers who grow them.
                  </p>
                  
                  
                   
                   <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                     <Input 
                       type="email" 
                       placeholder="Enter your email" 
                       className="text-gray-800 bg-gray-50/80 border-gray-200 focus-visible:ring-gray-500 hover:border-gray-400 transition-colors duration-300" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                     />
                                           <Button 
                        type="submit" 
                        className="bg-[#241401] hover:bg-[#1a0f01] text-white hover:scale-105 transition-transform duration-300 w-full"
                      >
                        Subscribe
                      </Button>
                   </form>
                </div>
              </div>
            </div>
                     </FadeIn>
         </div>
       </div>
       
       {/* Success Dialog */}
               <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="bg-white/95 backdrop-blur-sm border-[#241401]/20 shadow-xl">
                         <DialogHeader>
               <DialogTitle className="text-2xl font-serif text-center text-[#241401] mb-4">
                 Welcome to NepCoffee!
               </DialogTitle>
             </DialogHeader>
             <div className="text-center space-y-4">
              <p className="text-gray-700 text-lg">
                Thank you for joining our coffee journey! You'll be the first to know about new harvests, limited roasts, and stories from the farmers who grow them.
              </p>
              <p className="text-sm text-gray-600">
                Check your email for a welcome message from us.
              </p>
              <Button 
                onClick={() => setShowSuccessDialog(false)}
                className="bg-[#241401] hover:bg-[#1a0f01] text-white mt-4 w-full"
              >
                Continue Exploring
              </Button>
            </div>
          </DialogContent>
        </Dialog>
     </section>
   );
 };
 
 export default Subscribe;
