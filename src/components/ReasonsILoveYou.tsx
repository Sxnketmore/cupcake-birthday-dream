import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    text: "Your smile lights up my world.",
    icon: "✨",
  },
  {
    id: 2,
    text: "You make ordinary days extraordinary.",
    icon: "🌟",
  },
  {
    id: 3,
    text: "You're my calm, my chaos, my everything.",
    icon: "💫",
  },
  {
    id: 4,
    text: "Your laugh is my favorite sound.",
    icon: "🎵",
  },
  {
    id: 5,
    text: "You believe in me when I don't believe in myself.",
    icon: "💪",
  },
  {
    id: 6,
    text: "Every moment with you feels like home.",
    icon: "🏠",
  },
];

const ReasonsILoveYou = () => {
  return (
    <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <Heart className="w-16 h-16 mx-auto text-primary animate-heartbeat" fill="currentColor" />
          <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
            Reasons I Love You 💕
          </h2>
          <p className="text-xl text-muted-foreground">
            Just a few of the infinite reasons...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 glass-card border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 group h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <p className="text-lg font-serif text-foreground leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
