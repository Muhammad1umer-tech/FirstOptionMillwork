"use client";

import { useEffect, useRef, useState } from "react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Text_03 } from "../ui/wave-text";
import SectionHeader from "@/components/ui/section-header";

const rows = [
  {
    number: "01",
    label: "Our Services",
    heading: "KITCHENS",
    paragraphs: [
      "At First Option Millwork, we specialize in building custom kitchens tailored to the specific needs and style of our clients.",
      "Whether you're looking for a classic traditional design or a modern contemporary look, we have the experience to bring your vision to life.",
    ],
    image: "/what-we-offer/kitchen.png",
    reverse: false,
  },
  {
    number: "02",
    label: "Bathroom Vanities",
    heading: "WASHROOMS",
    paragraphs: [
      "We design and build custom bathroom vanities and cabinetry that balance beauty with everyday function.",
      "From floating vanities to full built-in storage, every piece is crafted to fit your space perfectly.",
    ],
    image: "/what-we-offer/washroom.png",
    reverse: true,
  },
  {
    number: "03",
    label: "Storage Solutions",
    heading: "WARDROBES",
    paragraphs: [
      "Transform your storage with custom-built wardrobes and closets designed around how you actually live.",
      "From walk-in wardrobes to reach-in closets, we craft each piece to complement your space and lifestyle.",
    ],
    image: "/gallery/residential/res10/gallery.jpg",
    reverse: false,
  },
];

function SectionRow({ row }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full flex items-stretch md:h-[600px] lg:h-[680px] overflow-hidden
      flex-col ${row.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* TEXT */}
      <div
        className={`w-full md:flex-[0_0_42%] flex flex-col justify-center h-full
        px-6 py-12 sm:px-10 sm:py-14
        ${row.reverse
          ? "md:px-[70px] md:py-[90px] md:pr-[80px]"
          : "md:px-[80px] md:py-[90px] md:pr-[70px]"
        }
        transition-all duration-700
        ${visible
          ? "opacity-100 translate-x-0"
          : row.reverse
            ? "opacity-0 md:translate-x-[50px]"
            : "opacity-0 md:-translate-x-[50px]"
        }`}
      >
        <span className="text-[33px] tracking-[3px] font-bold text-[#88734C] mb-[14px]">
          {row.number}
        </span>

        <div className="flex items-center gap-3 mb-[18px]">
          <span className="w-[34px] h-[1.5px] bg-[#88734C]" />
          <span className="text-[11px] tracking-[3.5px] uppercase text-[#88734C]">
            {row.label}
          </span>
        </div>

        <div className="mb-7">
          <SparklesText text={row.heading} />
        </div>

        {row.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-[1.85] text-[#444] mb-4 max-w-[400px]">
            {p}
          </p>
        ))}

        <a className="group inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase mt-[10px] hover:gap-4 transition-all">
          <Text_03 text="Learn more" />
        </a>
      </div>

      {/* IMAGE */}
      <div
        className={`md:flex-[0_0_58%] overflow-hidden relative
        transition-all duration-700 delay-150
        ${visible
          ? "opacity-100 translate-x-0"
          : row.reverse
            ? "opacity-0 md:-translate-x-[50px]"
            : "opacity-0 md:translate-x-[50px]"
        }`}
      >
        <img
          src={row.image}
          alt={row.heading}
          className="w-full h-[600px] lg:h-[680px] object-cover"
        />
      </div>
    </div>
  );
}

export default function HomeSection3() {
  return (
    <section className="bg-[#fafafa] w-full py-10">
      
      {/* ✅ FIXED WIDTH CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Our Services"
            titleBefore="Bespoke  "
            titleHighlight="Millwork"
            titleAfter=" & Cabinetry"
            subtitle="Crafted with precision and built to endure"
          />
        </div>

        {/* ROWS */}
        {rows.map((row, i) => (
          <SectionRow key={i} row={row} />
        ))}

      </div>
    </section>
  );
}