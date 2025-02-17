"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextSplitter } from "../text-splitter";

const TextRevealOnLoad = () => {
  useGSAP(() => {
    gsap.set(".text-reveal", { y: 100, opacity: 0, rotateZ: 90 });

    gsap.to(".text-reveal", {
      y: 0,
      rotateZ: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back.out",
      stagger: 0.1,
    });
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="hero-header text-6xl text-balance overflow-hidden">
        <TextSplitter
          text="Gsap Text Reveal On Screen Load"
          className="text-reveal"
        />
      </h1>
    </div>
  );
};

export default TextRevealOnLoad;
