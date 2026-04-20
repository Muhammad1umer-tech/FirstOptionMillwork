"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import TiltCard from "../ui/tilt-card";

export default function ContactCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f5f3ef] py-24 px-6">
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* ── Left: TiltCard image ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <TiltCard
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop"
            alt="Contact First Option Millwork"
            className="h-[380px] w-full"
          />
        </div>

        {/* ── Right: content ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
            }}
          >
            <div className="w-8 h-px bg-[#88734C]" />
            <p className="text-[9px] tracking-[5px] uppercase text-[#88734C] font-medium">
              Get in Touch
            </p>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl font-bold text-[#1a1a1a] leading-tight mb-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
            }}
          >
            Have a Project
            <br />
            <span className="text-[#88734C]">In Mind?</span>
          </h2>

          {/* Divider */}
          <div
            className="w-10 h-px bg-[#e2be96] mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease 0.65s",
            }}
          />

          {/* Body */}
          <p
            className="text-[13.5px] text-[#666] leading-relaxed mb-10 max-w-[300px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
            }}
          >
            Tell us your vision — we'll handle every detail from concept to completion, crafted to last.
          </p>

          {/* Button + badge */}
          <div
            className="flex flex-col gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease 0.85s, transform 0.5s ease 0.85s",
            }}
          >
            <button
              onClick={() => router.push("/contact")}
              className="group self-start relative inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#88734C] text-white text-[10px] tracking-[3px] uppercase font-medium px-8 py-4 overflow-hidden transition-colors duration-300 cursor-pointer"
            >
              <span className="relative">Contact Us</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Response badge */}
            <div className="flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#88734C" strokeWidth="2" opacity="0.7">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <p className="text-[9px] tracking-[2px] uppercase text-[#aaa]">
                We respond within 24 hrs
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
