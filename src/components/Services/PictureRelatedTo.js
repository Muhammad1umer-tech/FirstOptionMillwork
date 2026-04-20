"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/section-header";
import AuroraBackground from "@/components/ui/aurora-background";

const images = [
  {
    src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=900&auto=format&fit=crop",
    label: "Custom Kitchens",
    tag: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=900&auto=format&fit=crop",
    label: "Shaker Cabinets",
    tag: "Cabinetry",
  },
  {
    src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=900&auto=format&fit=crop",
    label: "Closets & Wardrobes",
    tag: "Storage",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
    label: "White Oak Cabinetry",
    tag: "Cabinetry",
  },
  {
    src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=900&auto=format&fit=crop",
    label: "Custom Millwork",
    tag: "Millwork",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop",
    label: "Modern Kitchen",
    tag: "Kitchen",
  },
];

function ImageCard({ item, index, visible }) {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const delay = row * 0.18 + col * 0.1;

  return (
    <div
      className="relative group overflow-hidden rounded-3xl cursor-pointer bg-[#e8e4dc]"
      style={{
        height: "clamp(260px, 40vw, 480px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover object-center"
        style={{
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <p className="text-[9px] tracking-[4px] uppercase text-[#e2be96] mb-1">
            {item.tag}
          </p>
          <h3 className="text-white text-lg font-semibold leading-snug">
            {item.label}
          </h3>
        </div>

        <a
          href="#"
          className="flex-shrink-0 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-[#e2be96] hover:bg-[#e2be96]/10 transition-all duration-300 group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PictureRelatedTo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#fafaf8] py-16 overflow-hidden">

      {/* ✅ Aurora Background */}
      <AuroraBackground />

      {/* Header */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 mb-12"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <SectionHeader
          eyebrow="Related Projects"
          titleBefore="Some Projects "
          titleHighlight="related to"
          titleAfter=" Kitchen"
          subtitle="Every project is a reflection of precision, material mastery, and lasting design."
          dark={false}
        />
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {images.map((item, idx) => (
          <ImageCard key={idx} item={item} index={idx} visible={visible} />
        ))}
      </div>
    </section>
  );
}