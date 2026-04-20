"use client";

import { useEffect, useRef, useState } from "react";

const commercial = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop", label: "Commercial Office Millwork", tag: "Office" },
  { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900&auto=format&fit=crop", label: "Lobby Cabinetry",           tag: "Lobby" },
  { src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=900&auto=format&fit=crop", label: "Retail Display Units",       tag: "Retail" },
  { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=900&auto=format&fit=crop", label: "Built-in Shelving",            tag: "Shelving" },
  { src: "https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=900&auto=format&fit=crop", label: "Reception Desk",             tag: "Reception" },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=900&auto=format&fit=crop", label: "Restaurant Millwork",        tag: "Hospitality" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=900&auto=format&fit=crop", label: "Workspace Storage",          tag: "Storage" },
  { src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=900&auto=format&fit=crop", label: "Executive Office",           tag: "Office" },
];

const residential = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop", label: "Custom Kitchen",           tag: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop", label: "White Oak Cabinetry",    tag: "Cabinetry" },
  { src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=900&auto=format&fit=crop", label: "Closets & Wardrobes",      tag: "Storage" },
  { src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=900&auto=format&fit=crop", label: "Shaker Cabinets",        tag: "Cabinetry" },
  { src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=900&auto=format&fit=crop", label: "Modern Kitchen",         tag: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=900&auto=format&fit=crop", label: "Custom Millwork",        tag: "Millwork" },
  { src: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=900&auto=format&fit=crop", label: "Architectural Detail",   tag: "Detail" },
  { src: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=900&auto=format&fit=crop", label: "Porcelain Surfaces",     tag: "Surfaces" },
];

function ImageCard({ item, index, visible }) {
  const col = index % 4;
  const row = Math.floor(index / 4);
  const delay = row * 0.1 + col * 0.06;

  return (
    <div
      className="relative group overflow-hidden rounded-2xl cursor-pointer bg-[#e8e4dc]"
      style={{
        height: "clamp(180px, 30vw, 320px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover"
        style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-[8px] tracking-[3px] uppercase text-[#e2be96] mb-0.5">{item.tag}</p>
        <h4 className="text-[13px] font-semibold text-white leading-snug">{item.label}</h4>
      </div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

function GroupSection({ id, label, items }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id={id} className="w-full pt-16 pb-4 scroll-mt-24" ref={ref}>

      {/* Section label row */}
      <div
        className="max-w-[1600px] mx-auto px-4 sm:px-8 flex items-center gap-4 mb-8 sm:mb-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="w-7 h-px bg-[#88734C]" />
        <p className="text-[12px] tracking-[5px] uppercase text-[#704a25] font-bold">{label}</p>
        <div className="flex-1 h-px bg-[#eee]" />
        <p className="text-[12px] text-gray-500">{items.length} projects</p>
      </div>

      {/* 4-column grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, idx) => (
          <ImageCard key={idx} item={item} index={idx} visible={visible} />
        ))}
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  return (
    <section className="w-full bg-[#fafaf8] pb-16">
      <GroupSection id="commercial" label="Commercial Projects" items={commercial} />
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="h-px bg-[#eee] my-4" />
      </div>
      <GroupSection id="residential" label="Residential Projects" items={residential} />
    </section>
  );
}
