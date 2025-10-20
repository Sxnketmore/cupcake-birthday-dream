import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import RosePetals from "./RosePetals";

const PetalToggle = () => {
  const [showPetals, setShowPetals] = useState(true);

  return (
    <>
      {showPetals && <RosePetals />}
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <Button
          onClick={() => setShowPetals(!showPetals)}
          size="lg"
          variant={showPetals ? "default" : "outline"}
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all"
        >
          <Flower2 className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
};

export default PetalToggle;
