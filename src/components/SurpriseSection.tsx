import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Gift, Heart, Sparkles } from "lucide-react";

const SurpriseSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <Gift className="w-20 h-20 mx-auto text-primary animate-float" />
          
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
              A Special Surprise 🎁
            </h2>
            <p className="text-xl text-muted-foreground">
              I have something special for you...
            </p>
          </div>

          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-serif text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Click for a Birthday Surprise 💫
            <Sparkles className="ml-2" />
          </Button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl glass-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-4xl font-cursive text-gradient text-center mb-4">
                Happy Birthday, My Cupcake! 💖
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Floating hearts animation */}
              <div className="relative h-32 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <Heart
                    key={i}
                    className="absolute text-primary animate-float"
                    style={{
                      left: `${(i * 12) + 5}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + (i % 3)}s`,
                    }}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Photo placeholder */}
              <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-4 border-primary/30 shadow-lg">
                <img
                  src="/images/surprise.jpg"
                  alt="Birthday surprise"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>

              <DialogDescription className="text-center space-y-4">
                <p className="text-2xl font-cursive text-gradient">
                  To My Forever Cupcake,
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  On this special day, I want you to know that you are the most precious gift life has ever given me. 
                  Your smile lights up my world, your laughter is my favorite melody, and your love is my greatest treasure.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Happy 22nd Birthday, my love! Here's to many more years of adventures, laughter, and endless love together. 
                  You make every moment magical, and I can't wait to create more beautiful memories with you.
                </p>
                <p className="text-xl font-serif italic text-primary">
                  I love you more than words can express. 💕
                </p>
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SurpriseSection;
