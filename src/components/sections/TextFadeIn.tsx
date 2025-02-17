"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TextFadeIn: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (textRef.current) {
      const text = textRef.current.textContent || "";
      const characters = text.split("");
      textRef.current.textContent = "";

      characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        textRef.current?.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <div className="my-10 flex justify-center items-center  relative z-20">
      <h1 ref={textRef} className="text-4xl font-bold">
        Animated Text
      </h1>
    </div>
  );
};

export default TextFadeIn;
