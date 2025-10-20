import { useState } from "react";
import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const SecretMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeart, setShowHeart] = useState(true);

  return (
    <>
      {/* Hidden heart at bottom */}
      <AnimatePresence>
        {showHeart && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-24 right-24 z-50 cursor-pointer group"
            onClick={() => {
              setIsOpen(true);
              setShowHeart(false);
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart 
                className="w-12 h-12 text-primary group-hover:text-secondary transition-colors drop-shadow-lg" 
                fill="currentColor" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) setShowHeart(true);
      }}>
        <DialogContent className="max-w-2xl glass-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-4xl font-cursive text-gradient text-center">
              You Found My Secret Message! 💌
            </DialogTitle>
          </DialogHeader>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 py-4"
          >
            {/* Floating hearts animation */}
            <div className="relative h-24 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: -100, 
                    opacity: [0, 1, 1, 0],
                    x: [0, (i % 2 ? 20 : -20), 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="absolute"
                  style={{ left: `${i * 10}%` }}
                >
                  <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                </motion.div>
              ))}
            </div>

            <DialogDescription className="text-center space-y-4">
              <p className="text-2xl font-cursive text-gradient">
                You're the most beautiful chapter of my life
              </p>
              <p className="text-xl text-foreground leading-relaxed font-serif">
                Finding you was like finding a piece of myself I didn't know was missing. 
                You complete me in ways I never imagined possible.
              </p>
              <p className="text-2xl font-serif italic text-primary pt-4">
                I'll love you endlessly. 💕
              </p>
            </DialogDescription>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecretMessage;
