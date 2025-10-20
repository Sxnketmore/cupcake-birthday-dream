import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    id: 1,
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    id: 2,
    text: "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
    author: "Pablo Neruda",
  },
  {
    id: 3,
    text: "The best love is the kind that awakens the soul and makes us reach for more.",
    author: "Nicholas Sparks",
  },
  {
    id: 4,
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou",
  },
  {
    id: 5,
    text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi",
  },
];

const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
            Words of Love 🕊️
          </h2>
          <p className="text-xl text-muted-foreground">
            Beautiful words that remind me of us
          </p>
        </div>

        <Card className="relative p-12 md:p-16 glass-card border-primary/30">
          <div className="text-center space-y-8 min-h-[200px] flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-serif text-foreground italic leading-relaxed animate-fade-in-up">
              "{quotes[currentIndex].text}"
            </p>
            <p className="text-lg text-secondary font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              — {quotes[currentIndex].author}
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevQuote}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextQuote}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuotesCarousel;
