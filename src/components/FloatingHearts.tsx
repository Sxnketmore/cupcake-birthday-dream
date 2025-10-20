import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
    size: `${20 + Math.random() * 20}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary/20 animate-float"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
            top: '100%',
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
