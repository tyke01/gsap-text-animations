"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SlideIn } from "../slide-in";

gsap.registerPlugin(ScrollTrigger);

const SlideInOnScroll = () => {
  const mainRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    
    if(!mainRef || !headerRef) return;
    
    gsap.set(headerRef.current, { opacity: 0, x: 100 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    scrollTl.to(headerRef.current, { opacity: 1, x: 0, duration: 0.5 });
  }, []);

  return (
    <div
      ref={mainRef}
      className="flex justify-between w-full min-h-screen px-40"
    >
      <div className="w-1/2">
        <h1 className="text-4xl md:text-6xl mb-5  overflow-hidden">
          <span ref={headerRef}>Slide in component</span>
        </h1>
        <SlideIn>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ut
            vel praesentium nam soluta aliquam quisquam debitis voluptate
            laudantium magni quia incidunt consequatur, porro, eligendi ea amet.
            Voluptatem reiciendis est officia possimus quaerat nemo animi, nihil
            exercitationem cum nesciunt distinctio, commodi natus, porro aut
            libero consequatur aliquid eligendi dolor nam!
          </p>
        </SlideIn>
      </div>
    </div>
  );
};

export default SlideInOnScroll;
