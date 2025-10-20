import { Button } from "@/components/ui/button";
import { Heart, Music } from "lucide-react";

interface EndingSectionProps {
  onReplayMusic?: () => void;
}

const EndingSection = ({ onReplayMusic }: EndingSectionProps) => {
  const createFirework = () => {
    // Create floating hearts instead of traditional fireworks
    const container = document.getElementById('fireworks-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.animation = `float ${3 + Math.random() * 2}s ease-out forwards`;
    
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  // Create fireworks periodically
  setTimeout(() => {
    const interval = setInterval(createFirework, 500);
    setTimeout(() => clearInterval(interval), 10000);
  }, 500);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Fireworks container */}
      <div id="fireworks-container" className="absolute inset-0 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        <Heart className="w-24 h-24 mx-auto text-primary animate-heartbeat" fill="currentColor" />
        
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-cursive text-gradient">
            Happy Birthday Again
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-primary">
            My Forever Cupcake 💞
          </h3>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Thank you for being the light of my life, my best friend, and my greatest adventure. 
            Here's to celebrating you today and every day. I love you endlessly.
          </p>
        </div>

        {onReplayMusic && (
          <Button
            onClick={onReplayMusic}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Music className="mr-2" />
            Replay Music
          </Button>
        )}

        <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-sm text-muted-foreground italic">
            Made with Love ❤️
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EndingSection;
