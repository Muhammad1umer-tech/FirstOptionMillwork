"use client";

import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const differentiators = [
  {
    title: "Custom Designs Built Around You",
    body: "Every cabinet, shelf, and drawer is crafted to your exact dimensions — no gaps, wasted corners, or awkward fits.",
  },
  {
    title: "Premium Canadian Craftsmanship",
    body: "Top-grade materials and BLUM® hardware ensure smooth, durable performance for decades.",
  },
  {
    title: "Expert Guidance, Start to Finish",
    body: "We listen, design, manufacture, and install — a seamless experience with zero guesswork.",
  },
  {
    title: "Complete Interior Solutions",
    body: "From kitchens to living rooms, we match finishes across every room for a unified look.",
  },
  {
    title: "Five-Year Manufacturer's Warranty",
    body: "Every installation is backed by our warranty — built-in peace of mind, long after we leave.",
  },
];

const services = [
  {
    num: "01",
    title: "Kitchen Storage",
    body: "Pull-outs, drawer organizers, pantry towers, corner systems — every inch working for you.",
  },
  {
    num: "02",
    title: "Closets & Wardrobes",
    body: "Walk-ins, reach-ins, dressing rooms — designed so your mornings run effortlessly.",
  },
  {
    num: "03",
    title: "Bathroom & Vanity",
    body: "Built-in shelving, linen towers, moisture-resistant cabinetry crafted for style and durability.",
  },
  {
    num: "04",
    title: "Laundry & Mudroom",
    body: "Functional cabinetry that absorbs the chaos of daily life and keeps your home calm.",
  },
  {
    num: "05",
    title: "Living Room & Wall Units",
    body: "Media centers, built-in bookcases, fireplace surrounds — spaces that anchor a room.",
  },
  {
    num: "06",
    title: "Home Office & Commercial",
    body: "Purpose-built systems that improve focus, workflow, and the way a space feels to work in.",
  },
];

const areas = [];

const steps = [
  { n: "01", label: "Reach Out", desc: "Contact us via phone, email, or the site." },
  { n: "02", label: "Share Your Vision", desc: "Tell us your needs, style, and budget." },
  { n: "03", label: "Design & Approve", desc: "We build a layout — refine until it's right." },
  { n: "04", label: "Manufacture", desc: "Crafted in-house with premium materials." },
  { n: "05", label: "Installation", desc: "Our team installs cleanly, precisely, on time." },
];

/* ─── Block 1: What Makes Us Different ─────────────────────── */
function DifferentBlock() {
  const [ref, visible] = useReveal(0.1);
  return (
    <div className="w-full bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-20">

        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#88734C]" />
              <p className="text-[12px] tracking-[5px] uppercase text-[#704a25] font-bold">Why Custom</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              What Makes Us<br />
              <span className="text-[#88734C]">Different.</span>
            </h2>
          </div>
          <p
            className="text-[14px] text-[#555] leading-relaxed md:pt-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Choosing custom means choosing smarter, more efficient living. Unlike generic prefabricated systems,
            our millwork is crafted to match your exact dimensions, workflow, and aesthetic — because your home
            deserves more than a box off a shelf.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 border-t border-[#eee]">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 items-start group border-b border-[#eee] py-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
              }}
            >
              <span className="text-[11px] font-mono text-[#88734C]/60 mt-0.5 flex-shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h4 className="text-[15px] font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#88734C] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#666] leading-relaxed">{item.body}</p>
              </div>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                className="flex-shrink-0 mt-1 text-[#c5b89a] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Block 2: Pull Quote (dark band) ──────────────────────── */
function QuoteBand() {
  const [ref, visible] = useReveal(0.3);
  return (
    <div ref={ref} className="w-full bg-[#1c1917] py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* decorative large quote mark */}
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-[140px] font-serif text-[#e2be96]/8 leading-none select-none pointer-events-none"
          aria-hidden
        >
          "
        </div>
        <div
          className="w-10 h-px bg-[#e2be96] mx-auto mb-8"
          style={{
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.8s ease",
          }}
        />
        <p
          className="text-2xl md:text-3xl font-light text-[#e8e0d4] leading-relaxed italic"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          "Great interiors begin with great design and thoughtful collaboration —
          from the first sketch to the final installation."
        </p>
        <div
          className="mt-8 flex flex-col items-center gap-1"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <div className="w-10 h-px bg-[#e2be96]/50 mb-3" />
          <p className="text-[11px] tracking-[4px] uppercase text-[#e2be96]">Bassam Ibrahim</p>
          <p className="text-[10px] tracking-[3px] uppercase text-[#9d8c76]">CEO, FirstOption Millwork</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Block 3: Service Categories ──────────────────────────── */
function ServicesGrid() {
  const [ref, visible] = useReveal(0.1);
  return (
    <div className="w-full bg-[#fafaf8] py-20 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#704a25]" />
            <p className="text-[12px] tracking-[5px] uppercase text-[#704a25] font-bold">What We Build</p>
          </div>
          <h2 className="text-4xl font-bold text-[#111]">
            Storage Solutions<br />
            <span className="text-[#88734C]">For Every Space.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e4dc]">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#fafaf8] hover:bg-white p-8 cursor-default transition-colors duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <p className="text-[11px] font-mono text-[#88734C] mb-4">{s.num}</p>
              <h4 className="text-[15px] font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#88734C] transition-colors duration-300">
                {s.title}
              </h4>
              <p className="text-[12.5px] text-[#666] leading-relaxed">{s.body}</p>
              <div className="w-0 group-hover:w-8 h-px bg-[#e2be96] mt-5 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Block 4: Areas + Process (two-column) ────────────────── */
function AreasAndProcess() {
  const [ref, visible] = useReveal(0.1);
  return (
    <div className="w-full bg-[#f0ece4] py-20 px-6">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Service Areas */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#88734C]" />
            <p className="text-[12px] tracking-[5px] uppercase text-[#704a25] font-bold">Where We Work</p>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8">
            Serving Toronto<br />& the GTA
          </h3>
          <p className="text-[13px] text-[#555] leading-relaxed mb-8">
            We design, manufacture, and install across the Greater Toronto Area —
            bringing the same quality and care to every neighbourhood we touch.
          </p>
          <div className="flex flex-wrap gap-2">
            {areas.map((a, i) => (
              <span
                key={i}
                className="text-[11px] tracking-[1px] text-[#1a1a1a] border border-[#c5b89a] px-4 py-2 hover:bg-[#88734C] hover:text-white hover:border-[#88734C] transition-all duration-300 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.3 + i * 0.07}s`,
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#88734C]" />
            <p className="text-[12px] tracking-[5px] uppercase text-[#704a25] font-bold">How It Works</p>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10">
            From Idea<br />to Installation
          </h3>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex gap-6 items-start group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                }}
              >
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-[10px] font-mono text-[#88734C] mb-2">{s.n}</span>
                  <div className="w-px flex-1 bg-[#c5b89a]/50 my-1" style={{ minHeight: i < steps.length - 1 ? "40px" : "0" }} />
                </div>
                <div className="pb-8">
                  <h5 className="text-[14px] font-semibold text-[#1a1a1a] mb-1 group-hover:text-[#88734C] transition-colors duration-300">
                    {s.label}
                  </h5>
                  <p className="text-[12.5px] text-[#666] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────── */
export default function StorageInfoSection() {
  return (
    <>
      <DifferentBlock />
      <QuoteBand />
      <ServicesGrid />
      <AreasAndProcess />
    </>
  );
}
