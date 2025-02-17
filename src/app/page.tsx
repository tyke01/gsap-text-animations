import SlideInOnScroll from "@/components/sections/SlideInOnScroll";
import TextRevealOnLoad from "@/components/sections/TextRevealOnLoad";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white">
      <TextRevealOnLoad />
      <SlideInOnScroll />
    </div>
  );
}
