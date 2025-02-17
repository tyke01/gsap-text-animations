import ScrollTriggeredMovement from "@/components/sections/ScrollTriggeredMovement";
import SlideInOnScroll from "@/components/sections/SlideInOnScroll";
import TextFadeIn from "@/components/sections/TextFadeIn";
import TextRevealOnLoad from "@/components/sections/TextRevealOnLoad";
import TextFadeInFromCenter from "@/components/sections/TextSlideFromCenter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white">
      <TextRevealOnLoad />
      <SlideInOnScroll />
      <TextFadeIn />
      <TextFadeInFromCenter />
      <ScrollTriggeredMovement />
    </div>
  );
}
