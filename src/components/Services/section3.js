import React from "react";
import SectionHeader from "@/components/ui/section-header";

const images = [
  {
    src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
    label: "Custom Kitchens",
  },
  {
    src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
    label: "Shaker Cabinets",
  },
  {
    src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop",
    label: "Closets & Wardrobes",
  },
  {
    src: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop",
    label: "Porcelain Slabs",
  },
  {
    src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop",
    label: "Custom Millwork",
  },
  {
    src: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop",
    label: "Architectural Detail",
  },
];

export default function ServicesGallery() {
  return (
    <section className="w-full bg-[#fafaf8] py-20">

      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <SectionHeader
          eyebrow="Portfolio"
          titleBefore="Our"
          titleHighlight="Work"
          titleAfter=""
          subtitle="A curated collection of recent millwork projects"
          dark={false}
        />
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <p className="text-[10px] tracking-[4px] uppercase text-amber-300/80 mb-1">
                First Option Millwork
              </p>
              <h3 className="text-white text-base font-semibold">{item.label}</h3>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 mt-3 text-[11px] tracking-[2px] uppercase text-white/70 hover:text-white transition-colors duration-200"
              >
                View Project
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

    </section>
  );
}
