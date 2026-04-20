"use client";

import { useEffect, useRef, useState } from "react";
import { SparklesText } from "@/components/ui/sparkles-text"
import { Text_03 } from "../ui/wave-text";
import SectionHeader from "@/components/ui/section-header";


const rows = [
  {
    number: "01",
    label: "Our Services",
    heading: "KITCHENS",
    paragraphs: [
      "At First Option Millwork, we specialize in building custom kitchens tailored to the specific needs and style of our clients. Our skilled craftspeople use only the highest quality materials and latest techniques.",
      "Whether you're looking for a classic traditional design or a modern contemporary look, we have the experience to bring your vision to life.",
    ],
    image: "/what-we-offer/1.avif",
    reverse: false,
  },
  {
    number: "02",
    label: "Storage Solutions",
    heading: "CLOSETS & WARDROBES",
    paragraphs: [
      "Transform your storage with custom-built closets and wardrobes designed around how you actually live. Every shelf, drawer, and hanging rod is precisely placed for maximum efficiency.",
      "From walk-in wardrobes to reach-in closets, we craft each piece to complement your space and elevate your daily routine.",
    ],
    image: "/what-we-offer/2.avif",
    reverse: true,
  },
  {
    number: "03",
    label: "Architectural Detail",
    heading: "CUSTOM MILLWORK",
    paragraphs: [
      "Millwork defines the character of a space. Crown mouldings, wainscoting, built-in cabinetry, and wall panelling — each element is precision-crafted to bring architectural depth and warmth.",
      "We work directly with architects and designers to ensure every detail aligns with the overall vision of your home or commercial project.",
    ],
    image: "/what-we-offer/3.avif",
    reverse: false,
  },
];

const auroraStyles = `
  @keyframes aurora {
    from { background-position: 50% 50%, 50% 50%; }
    to   { background-position: 350% 50%, 350% 50%; }
  }
  .aurora-layer {
    position: absolute;
    inset: -10px;
    background-image:
      repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
      repeating-linear-gradient(100deg, #c8956a 10%, #e2be96 15%, #d4a76a 20%, #eddcc0 25%, #b8804a 30%);
    background-size: 300%, 200%;
    background-position: 50% 50%, 50% 50%;
    filter: blur(12px);
    opacity: 0.35;
    will-change: background-position;
    animation: aurora 60s linear infinite;
    mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
  }
  .aurora-layer::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
      repeating-linear-gradient(100deg, #c8956a 10%, #e2be96 15%, #d4a76a 20%, #eddcc0 25%, #b8804a 30%);
    background-size: 200%, 100%;
    background-attachment: fixed;
    mix-blend-mode: soft-light;
    animation: aurora 60s linear infinite;
  }
`;

function SectionRow({ row }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-stretch md:min-h-[600px] lg:min-h-[680px] relative z-[1] overflow-hidden pb-0 md:pb-[40px]
        flex-col ${row.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Content */}
      <div
        className={`w-full md:flex-[0_0_42%] flex flex-col justify-center relative overflow-hidden
          transition-all duration-[800ms] ease-out
          px-6 py-12 sm:px-10 sm:py-14
          ${row.reverse
            ? "md:px-[70px] md:py-[90px] md:pr-[80px]"
            : "md:px-[80px] md:py-[90px] md:pr-[70px]"
          }
          ${visible
            ? "opacity-100 translate-x-0"
            : row.reverse ? "opacity-0 md:translate-x-[50px]" : "opacity-0 md:-translate-x-[50px]"
          }`}
      >
        {/* Number */}
        <span className="block text-[33px] tracking-[3px] font-bold text-[#88734C] font-heading mb-[14px]">
          {row.number}
        </span>

        {/* Label row */}
        <div className="flex items-center gap-3 mb-[18px]">
          <span className="block w-[34px] h-[1.5px] bg-[#88734C] shrink-0" />
          <span className="text-[11px] tracking-[3.5px] uppercase text-[#88734C] font-body">
            {row.label}
          </span>
        </div>

        {/* Heading */}
        {/* <h2 className="text-[42px] max-[900px]:text-[30px] font-extrabold tracking-[0.5px] text-[#1a1a1a] font-heading uppercase mb-7 leading-[1.1]">
          {row.heading}
        </h2> */}
        <div className="mb-7">
          <SparklesText text={row.heading} />

        </div>

        {/* Paragraphs */}
        {row.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-[1.85] text-[#444] font-body font-light max-w-full md:max-w-[400px] mb-4">
            {p}
          </p>
        ))}

        {/* Link */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-[#1a1a1a] font-body font-semibold mt-[10px] no-underline relative w-fit transition-all duration-300 hover:gap-4"
        >
          <Text_03 text="Learn more" />
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <span className="absolute -bottom-1 left-0 w-full h-px bg-[#1a1a1a] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        </a>
      </div>

      {/* Image */}
      <div
        className={`md:flex-1 overflow-hidden relative z-[1]
          transition-all duration-[800ms] ease-out delay-150
          h-[260px] sm:h-[340px] md:h-auto
          ${visible
            ? "opacity-100 translate-x-0"
            : row.reverse ? "opacity-0 md:-translate-x-[50px]" : "opacity-0 md:translate-x-[50px]"
          }`}
      >
        <img
          src={row.image}
          alt={row.heading}
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
}

export default function HomeSection3() {
  return (
    <>
      <style>{auroraStyles}</style>
      <section className="relative bg-[#fafafa] w-full px-0 sm:px-6 lg:px-12 xl:px-[100px] py-10 overflow-hidden">

        {/* Aurora background */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="aurora-layer" />
        </div>

        {/* Section Header */}
        <div className="relative z-10 mb-20">
          <SectionHeader
            eyebrow="Our Craft"
            titleBefore="What We "
            titleHighlight="Do"
            titleAfter=" is Best"
            subtitle="Premium Custom Millwork across Toronto & GTA"
          />
        </div>

        {rows.map((row, i) => (
          <SectionRow key={i} row={row} />
        ))}

      </section>
    </>
  );
}