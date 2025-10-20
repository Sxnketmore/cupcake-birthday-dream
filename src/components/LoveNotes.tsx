import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const notes = [
  {
    id: 1,
    content: "You're not just my girlfriend, you're my home.",
  },
  {
    id: 2,
    content: "If I could relive one moment forever, it would be any moment with you.",
  },
  {
    id: 3,
    content: "Happy Birthday to the woman who owns my heart.",
  },
  {
    id: 4,
    content: "Your smile is my favorite notification.",
  },
  {
    id: 5,
    content: "In a world full of temporary things, you are my forever.",
  },
  {
    id: 6,
    content: "Thank you for making my life a beautiful story.",
  },
];

const LoveNotes = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
            Love Notes 💌
          </h2>
          <p className="text-xl text-muted-foreground">
            Words from my heart to yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <Card
              key={note.id}
              className="p-8 glass-card border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Heart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                <p className="text-lg font-serif text-foreground italic leading-relaxed">
                  "{note.content}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
