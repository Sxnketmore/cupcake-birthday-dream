import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const EndingSection = () => {
  const createFirework = () => {
    const container = document.getElementById('fireworks-container');
    if (!container) return;

    // Create heart-shaped firework burst
    const colors = ['💖', '💕', '💗', '💞', '💝'];
    const heartCount = 8;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
      heart.style.position = 'absolute';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = Math.random() * 20 + 15 + 'px';
      
      const angle = (i / heartCount) * Math.PI * 2;
      const distance = 100 + Math.random() * 100;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      heart.style.animation = `none`;
      heart.style.transition = 'all 1.5s ease-out';
      heart.style.opacity = '1';
      
      container.appendChild(heart);
      
      setTimeout(() => {
        heart.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
      }, 10);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    }
  };

  // Create fireworks periodically
  setTimeout(() => {
    createFirework();
    const interval = setInterval(createFirework, 2000);
    setTimeout(() => clearInterval(interval), 12000);
  }, 1000);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        <Button
          onClick={scrollToTop}
          size="lg"
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <Heart className="mr-2" fill="currentColor" />
          Relive Our Moments
        </Button>

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
