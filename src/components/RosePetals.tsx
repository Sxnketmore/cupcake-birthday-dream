import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RosePetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const initialPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 5,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -20, x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
            animate={{
              y: "100vh",
              opacity: [0, 1, 1, 0],
              rotate: 360,
              x: [`${petal.x}vw`, `${petal.x + (Math.random() - 0.5) * 20}vw`],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-4xl"
            style={{ left: 0 }}
          >
            🌹
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RosePetals;
