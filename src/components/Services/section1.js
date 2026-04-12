// app/page.jsx (Next.js 13+ with Tailwind CSS)
import ServicesSection2 from "@/components/Services/Section2";
import ServicesGallery from "./section3";
import ServicesAccordion from "./ServicesAccordion";
import SectionHeader from "@/components/ui/section-header";

export default function ServicesHero() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[520px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-l border-white/40" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-rows-6 h-full w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-t border-white/40" />
            ))}
          </div>
        </div>

        {/* Dots Grid */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/60 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Top & bottom accent lines */}
        <div className="absolute top-10 left-0 w-full h-px bg-white/20" />
        <div className="absolute bottom-10 left-0 w-full h-px bg-white/20" />

        {/* Content */}
        <div className="relative z-10 px-4 w-full max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            titleBefore="Crafted with"
            titleHighlight="Precision"
            titleAfter=""
            subtitle="Custom Millwork & Cabinetry in Toronto"
            dark={true}
          />
        </div>
      </div>

      <ServicesSection2 />
      <ServicesGallery />
      <ServicesAccordion />
    </div>
  );
}
