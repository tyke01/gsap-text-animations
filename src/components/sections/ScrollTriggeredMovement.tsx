"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggeredMovement = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const splitText = () => {
      const textElement = textRef.current;
      if (!textElement) return;

      const text = textElement.innerText;
      const arrSplitText = text
        .split("")
        .map((char) =>
          char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
        );
      textElement.innerHTML = arrSplitText.join("");
    };
    splitText();
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("svg", {
      repeat: -1,
      duration: 10,
      rotate: 360,
      ease: "steps(40)", // stop motion happen
    });

    gsap.to("h2 span", {
      repeat: -1,
      duration: 1,
      y: "random(6, -6)",
      rotate: "random(8, -8)",
      scale: "random(0.8, 1.1)",
      ease: "steps(2)", // stop motion happen
      repeatRefresh: true,
      stagger: 0.1,
    });

    const scrollAnim = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: 0.6, // process by scrolling
        // markers: true, // for DEBUG
        toggleActions: "restart none none none",
      },
    });

    scrollAnim
      .to(".svgbox--1", {
        x: "50vw",
        ease: "steps(30)",
      })
      .to(
        ".svgbox--2",
        {
          x: "-50vw",
          ease: "steps(20)",
        },
        "<"
      )
      .to(
        "h2",
        {
          y: -30,
          ease: "steps(6)",
        },
        "<"
      );
  }, []);

  return (
    <div
      ref={mainRef}
      className="min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="scroll-container text-center ">
        <h1
          ref={textRef}
          className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-[0.1em]"
        >
          Scroll Down!
        </h1>

        <div className="svgbox svgbox--1 w-[150px] relative top-1/2 -mt-[75px] left-0">
          <svg
            id="svg1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <path
              opacity="0.5"
              fill="#D83D3D"
              d="M52,47c0,0,14-30,41-21s58,93,106,101s88,86,63,111s-155,53-198-3S34,78,52,47z"
            />
          </svg>
        </div>

        <div className="svgbox svgbox--2 w-[150px] relative top-1/2 -mt-[75px] right-0">
          <svg
            id="svg2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <path
              opacity="0.5"
              fill="#EFD050"
              d="M103,25c0,0,25-15,79-12s94,102,94,128s-13,98-50,119S91,301,71,273s-56-54-53-113 S84,32,103,25z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollTriggeredMovement;
