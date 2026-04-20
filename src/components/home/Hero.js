"use client";

import { useEffect } from "react";
import StarButton from "@/components/ui/star-button";

const pageStyles = `
  @keyframes word-appear {
    0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); }
    50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  .word-animate {
    display: inline-block;
    opacity: 0;
    margin: 0 0.1em;
  }
`;

export default function Hero() {
  useEffect(() => {
    const wordElements = document.querySelectorAll(".word-animate");
    wordElements.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay")) || 0;
      setTimeout(() => {
        if (word) word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
  }, []);

  return (
    <>
      <style>{pageStyles}</style>
      <section
        className="relative min-h-[92vh] sm:min-h-[95vh] w-full flex items-center justify-center text-white overflow-hidden"
        style={{ background: "url('/hero.jpg') center center / cover no-repeat" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/42 z-[1]" />

        {/* Radial Gradient Mask */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: "radial-gradient(ellipse 88% 88% at center, transparent 36%, rgba(4,3,2,0.78) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-[3] max-w-[700px] w-full text-center px-5 sm:px-6">

          <span className="text-[10px] sm:text-[12px] tracking-[3px] uppercase font-body">
            <span className="word-animate" data-delay="200">WELCOME</span>
            <span className="word-animate" data-delay="350">TO</span>
            <span className="word-animate" data-delay="500">First</span>
            <span className="word-animate" data-delay="650">Option</span>
            <span className="word-animate" data-delay="800">Millwork</span>
          </span>

          <h1
            className="font-extrabold leading-[1.05] my-4 sm:my-5 uppercase font-heading tracking-[-1px]"
            style={{
              fontSize: "clamp(2.4rem, 8vw, 5rem)",
              textShadow: "0 6px 25px rgba(0,0,0,0.4)",
            }}
          >
            <span className="word-animate" data-delay="1000">Where</span>
            <span className="word-animate" data-delay="1150">Ideas</span>
            <br />
            <span className="word-animate" data-delay="1300">Meet</span>
            <span className="word-animate" data-delay="1450">Craftsmanship</span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed opacity-85 max-w-[520px] mx-auto mb-8 sm:mb-9 font-body">
            <span className="word-animate" data-delay="1700">We</span>
            <span className="word-animate" data-delay="1800">design</span>
            <span className="word-animate" data-delay="1900">and</span>
            <span className="word-animate" data-delay="2000">build</span>
            <span className="word-animate" data-delay="2100">premium</span>
            <span className="word-animate" data-delay="2200">custom</span>
            <span className="word-animate" data-delay="2300">millwork</span>
            <span className="word-animate" data-delay="2400">solutions,</span>
            <span className="word-animate" data-delay="2500">blending</span>
            <span className="word-animate" data-delay="2600">craftsmanship</span>
            <span className="word-animate" data-delay="2700">with</span>
            <span className="word-animate" data-delay="2800">modern</span>
            <span className="word-animate" data-delay="2900">architectural</span>
            <span className="word-animate" data-delay="3000">aesthetics.</span>
          </p>

          <div className="word-animate" data-delay="3200" style={{ display: "inline-block" }}>
            <StarButton className="text-[#704a25] bg-[#f8f4f0] border-[3px] border-[#f8f4f0]">Contact us</StarButton>
          </div>

        </div>
      </section>
    </>
  );
}