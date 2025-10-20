import { useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import WelcomeSection from "@/components/WelcomeSection";
import PhotoGallery from "@/components/PhotoGallery";
import Timeline from "@/components/Timeline";
import LoveNotes from "@/components/LoveNotes";
import QuotesCarousel from "@/components/QuotesCarousel";
import SurpriseSection from "@/components/SurpriseSection";
import EndingSection from "@/components/EndingSection";

const Index = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReplayMusic = () => {
    // User can add audio element and implement replay functionality
    console.log("Replay music clicked");
  };

  return (
    <div className="relative">
      <FloatingHearts />
      
      <WelcomeSection onEnter={scrollToContent} />
      
      <div ref={mainContentRef}>
        <PhotoGallery />
        <Timeline />
        <LoveNotes />
        <QuotesCarousel />
        <SurpriseSection />
        <EndingSection onReplayMusic={handleReplayMusic} />
      </div>
    </div>
  );
};

export default Index;
