import { useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import WelcomeSection from "@/components/WelcomeSection";
import PhotoGallery from "@/components/PhotoGallery";
import Timeline from "@/components/Timeline";
import LoveNotes from "@/components/LoveNotes";
import QuotesCarousel from "@/components/QuotesCarousel";
import SurpriseSection from "@/components/SurpriseSection";
import EndingSection from "@/components/EndingSection";
import PetalToggle from "@/components/PetalToggle";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingLoveNotes from "@/components/FloatingLoveNotes";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import OurFuture from "@/components/OurFuture";
import SecretMessage from "@/components/SecretMessage";

const Index = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <FloatingHearts />
      <PetalToggle />
      <MusicPlayer />
      <SecretMessage />
      
      <WelcomeSection onEnter={scrollToContent} />
      
      <div ref={mainContentRef}>
        <PhotoGallery />
        <Timeline />
        <LoveNotes />
        <ReasonsILoveYou />
        <QuotesCarousel />
        <div className="py-12">
          <FloatingLoveNotes />
        </div>
        <OurFuture />
        <SurpriseSection />
        <EndingSection />
      </div>
    </div>
  );
};

export default Index;
