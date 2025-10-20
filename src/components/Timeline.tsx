import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineEvents = [
  {
    id: 1,
    date: "First Meet",
    title: "The Day Everything Changed",
    description: "When our eyes first met, I knew my life would never be the same.",
  },
  {
    id: 2,
    date: "First Date",
    title: "The Beginning of Forever",
    description: "The nervousness, the excitement, the butterflies - everything was perfect.",
  },
  {
    id: 3,
    date: "Our First Trip",
    title: "Adventures Together",
    description: "Creating memories in a new place, hand in hand, heart to heart.",
  },
  {
    id: 4,
    date: "Special Moments",
    title: "Every Day With You",
    description: "From quiet mornings to starlit nights, every moment is treasured.",
  },
  {
    id: 5,
    date: "Today",
    title: "Your Birthday 🎂",
    description: "Celebrating you, my love, and all the joy you bring to my life.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
            Our Journey Together ⏳
          </h2>
          <p className="text-xl text-muted-foreground">
            Every step with you has been a blessing
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <Card
                  className={`flex-1 p-6 glass-card border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in-up ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-sm font-semibold text-secondary mb-2">
                    {event.date}
                  </h3>
                  <h4 className="text-2xl font-serif text-primary mb-3">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </Card>

                {/* Heart marker */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg animate-heartbeat">
                    <Heart className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
