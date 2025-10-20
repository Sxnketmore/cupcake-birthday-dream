import { Card } from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const OurFuture = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 md:p-16 glass-card border-primary/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-8 h-8 text-primary/30 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-8 h-8 text-primary/30 animate-heartbeat" fill="currentColor" />
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-6xl font-cursive text-gradient mb-6">
                Our Future Together ✨
              </h2>
              
              <div className="text-xl md:text-2xl font-serif text-foreground leading-relaxed space-y-4">
                <p>
                  I can't wait for all the tomorrows we'll share — the laughter, adventures, and the love that grows stronger with time.
                </p>
                <p className="text-2xl md:text-3xl italic text-primary">
                  <TypewriterText text="Every love story is beautiful, but ours is my favorite 💖" delay={50} />
                </p>
                <p>
                  You and me, always. Forever and ever. Through every season, every challenge, every joy.
                </p>
                <p className="text-lg text-muted-foreground italic pt-4">
                  Here's to our beautiful journey ahead, my love. 💕
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFuture;
