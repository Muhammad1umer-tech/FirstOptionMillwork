"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Consultation",
    body: "First Option Millwork offers a free consultation and planning session in order to determine what the client's needs, taste and budget.",
  },
  {
    number: "02",
    title: "Design",
    body: "Once we agree on the materials, project timeline and budget, our designers digitally craft your custom cabinets with great precision.",
  },
  {
    number: "03",
    title: "Manufacturing",
    body: "We manufacture with the purest respect for traditional cabinetmaking techniques while using high-tech precision machinery.",
  },
  {
    number: "04",
    title: "Installation",
    body: "Our skilled and experienced installation teams will take great care when installing your custom-made cabinets or bathroom cabinetry.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Custom Built" },
  { value: "4-Step", label: "Proven Process" },
];

/* ─────────────────────────────────────────────────────────
   Animated border styles
───────────────────────────────────────────────────────── */
const cardBorderStyles = `
  @keyframes border-rotate {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes border-rotate-reverse {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  /* outer glow wrapper */
  .process-card-wrap {
    position: relative;
    padding: 2px;
    overflow: hidden;
  }

  /* spinning conic gradient — the "border" */
  .process-card-wrap::before {
    content: '';
    position: absolute;
    inset: -80%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      #e2be96 90deg,
      #c8956a 110deg,
      #704a25 130deg,
      transparent 160deg,
      transparent 220deg,
      #88734C 250deg,
      #e2be96 275deg,
      #c8956a 290deg,
      transparent 320deg,
      transparent 360deg
    );
    animation: border-rotate 7s linear infinite;
    animation-delay: var(--card-delay, 0s);
    z-index: 0;
    transition: opacity 0.4s ease;
    opacity: 0.85;
  }

  /* subtle inner glow — second layer, counter-rotates */
  .process-card-wrap::after {
    content: '';
    position: absolute;
    inset: -80%;
    background: conic-gradient(
      from 180deg,
      transparent 0deg,
      transparent 80deg,
      #3e2723 105deg,
      #704a25 125deg,
      transparent 155deg,
      transparent 360deg
    );
    animation: border-rotate-reverse 10s linear infinite;
    animation-delay: var(--card-delay, 0s);
    z-index: 0;
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }

  /* hover — speed up & brighten */
  .process-card-wrap:hover::before {
    animation-duration: 3s;
    opacity: 1;
  }
  .process-card-wrap:hover::after {
    animation-duration: 5s;
    opacity: 0.7;
  }

  /* white inner card sits above the gradient layers */
  .process-card-inner {
    position: relative;
    z-index: 1;
    background: #ffffff;
    height: 100%;
  }
`;

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────────────────
   Step Card
───────────────────────────────────────────────────────── */

// Phase offsets so each card's border is at a different rotation point
const cardDelays = ["0s", "-1.75s", "-3.5s", "-5.25s"];

function StepCard({ step, index, visible }) {
  return (
    <div
      className={`process-card-wrap transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
        "--card-delay": cardDelays[index],
      }}
    >
      <div className="process-card-inner flex flex-col">
        {/* Number badge */}
        <div
          className="w-[90px] h-[90px] flex items-center justify-center text-white font-heading font-black text-4xl flex-shrink-0"
          style={{ background: "#704a25" }}
        >
          {step.number}
        </div>

        {/* Content */}
        <div className="px-7 pt-7 pb-10 flex flex-col gap-3">
          <h3 className="font-heading font-bold text-[#1a1a1a] text-[1.25rem] leading-tight">
            {step.title}
          </h3>
          <p className="font-body text-[#666] text-[14px] leading-[1.85]">
            {step.body}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Process Section
───────────────────────────────────────────────────────── */
function ProcessSection() {
  const [ref, visible] = useInView(0.1);
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <section
      className="relative w-full py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/what-we-offer/1.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Very light overlay — image barely visible, premium watermark feel */}
      <div className="absolute inset-0 bg-[#f4f0eb]/91 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <div
          ref={ref}
          className={`text-center mb-16 max-w-[820px] mx-auto transition-all duration-800 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="block text-[11px] tracking-[5px] uppercase text-[#704a25] font-body font-medium mb-5">
            How We Work
          </span>

          <h2
            className="font-heading font-extrabold text-[#1a1a1a] mb-8 leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Proven{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#704a25]">Process</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e2be96]/40 rounded-sm -z-0" />
            </span>{" "}
            for the best result.
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#88734C]" />
            <div className="w-2 h-2 rounded-full bg-[#88734C] opacity-60" />
            <div className="w-12 h-px bg-[#88734C]" />
          </div>

          <p className="font-body text-[#555] text-[15px] leading-[1.95] max-w-[780px] mx-auto">
            For over a decade, First Option Millwork has been at the forefront of crafting upscale,
            custom cabinets in Toronto, consistently delighting our customers with exceptional quality
            and style. We offer tailored services to each client, meticulously aligning with their
            preference and budget. To ensure the success of every new custom cabinets or millwork
            project, we develop a detailed action plan encompassing the essential steps. At our
            state-of-the-art workshop, we blend traditional cabinetmaking techniques with modern
            technology, resulting in products that embody both craftsmanship and innovation.
          </p>
        </div>

        {/* ── 4 Cards ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} visible={cardsVisible} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Stats bar
───────────────────────────────────────────────────────── */
function StatsBar() {
  const [ref, visible] = useInView(0.2);
  return (
    <div ref={ref} className="bg-[#3e2723] py-16 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <span className="block font-heading font-black text-white text-[2.8rem] leading-none mb-2">
              {s.value}
            </span>
            <span className="block font-body text-[#e2be96]/70 text-[11px] tracking-[3px] uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA section
───────────────────────────────────────────────────────── */
function ProcessCTA() {
  const [ref, visible] = useInView(0.2);
  return (
    <section
      ref={ref}
      className="relative py-28 px-6 text-center overflow-hidden"
      style={{ background: "url('/hero.jpg') center/cover no-repeat" }}
    >
      <div className="absolute inset-0 bg-[#1a0f0a]/80" />
      <div
        className={`relative z-10 max-w-[680px] mx-auto transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <span className="block text-[10px] tracking-[5px] uppercase text-[#e2be96]/70 mb-6 font-body">
          Start Your Project
        </span>
        <h2
          className="font-heading font-extrabold text-white mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Ready to Begin Your{" "}
          <span className="text-[#e2be96]">Custom Millwork</span> Journey?
        </h2>
        <p className="font-body text-white/60 text-[15px] leading-[1.9] mb-10 max-w-[520px] mx-auto">
          Book a free, no-obligation consultation. Our team will walk you through
          every step — from first sketch to final installation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#704a25] hover:bg-[#88734C] text-white font-heading font-semibold tracking-[2px] uppercase text-sm px-10 py-4 transition-colors duration-300"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function OurProcessPage() {
  return (
    <>
      <style>{cardBorderStyles}</style>

      {/* ── Hero banner ── */}
      <div
        className="relative h-[420px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/what-we-offer/3.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-10 left-0 w-full h-px bg-white/15" />
        <div className="absolute bottom-10 left-0 w-full h-px bg-white/15" />

        <div className="relative z-10 px-4">
          <span className="block text-[11px] tracking-[5px] uppercase text-[#e2be96]/80 font-body mb-4">
            Our Process
          </span>
          <h1
            className="font-heading font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            How We Bring Your{" "}
            <span className="text-[#e2be96]">Vision</span> to Life
          </h1>
        </div>
      </div>

      {/* ── Main process section (reference design) ── */}
      <ProcessSection />

      {/* ── Stats ── */}
      <StatsBar />

      {/* ── CTA ── */}
      <ProcessCTA />

    </>
  );
}
