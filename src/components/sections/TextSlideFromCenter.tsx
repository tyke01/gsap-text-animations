"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TextFadeInFromCenter = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scale: 0, // Start from zero scale
      opacity: 0,
      duration: 1,
      ease: "back.out(1.5)", // Nice overshoot effect
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 ref={textRef} className="text-4xl font-bold">
        Revealing Text
      </h1>
    </div>
  );
};

export default TextFadeInFromCenter;

