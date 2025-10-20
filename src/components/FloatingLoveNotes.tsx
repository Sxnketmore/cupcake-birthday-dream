import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "You make every moment special 💕",
  "I'm so lucky to love you 💖",
  "Forever isn't long enough with you 💞",
  "You're my dream come true ✨",
  "My heart belongs to you 💗",
];

const FloatingLoveNotes = () => {
  const [notes, setNotes] = useState<Array<{ id: number; text: string; x: number }>>([]);
  const [nextId, setNextId] = useState(0);

  const releaseNotes = () => {
    const newNotes = Array.from({ length: 5 }, (_, i) => ({
      id: nextId + i,
      text: messages[i % messages.length],
      x: 20 + Math.random() * 60,
    }));
    
    setNotes(prev => [...prev, ...newNotes]);
    setNextId(prev => prev + 5);

    // Remove notes after animation
    setTimeout(() => {
      setNotes(prev => prev.filter(note => !newNotes.some(n => n.id === note.id)));
    }, 5000);
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-40">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ y: "100vh", x: `${note.x}vw`, opacity: 0, scale: 0.5 }}
              animate={{ y: "-20vh", opacity: [0, 1, 1, 0], scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute bottom-0"
            >
              <div className="glass-card p-4 rounded-lg border-2 border-primary/30 shadow-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                <span className="text-sm font-serif text-foreground whitespace-nowrap">
                  {note.text}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <Button
          onClick={releaseNotes}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-serif text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Release Love Notes 💞
        </Button>
      </div>
    </>
  );
};

export default FloatingLoveNotes;
