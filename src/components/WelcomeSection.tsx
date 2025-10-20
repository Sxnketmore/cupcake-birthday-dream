import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

interface WelcomeSectionProps {
  onEnter: () => void;
}

const WelcomeSection = ({ onEnter }: WelcomeSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Content with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 space-y-8"
      >
        <div className="space-y-4 animate-fade-in-up">
          <Heart className="w-20 h-20 mx-auto text-primary animate-heartbeat" fill="currentColor" />
          
          <h1 className="text-6xl md:text-8xl font-cursive text-gradient">
            Happy Birthday
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-serif text-primary">
            My Love 💖
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            A special celebration for the most amazing person in my life
          </p>
        </div>

        <Button
          onClick={onEnter}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-serif text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Enter Our World 💞
          <ArrowDown className="ml-2 animate-bounce" />
        </Button>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default WelcomeSection;
