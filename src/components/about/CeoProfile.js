"use client";

import { useEffect, useRef, useState } from "react";

export default function CeoProfile() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#fafaf8] py-16 sm:py-24 px-5 sm:px-6">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10 sm:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="w-8 h-px bg-[#88734C]" />
          <p className="text-[9px] tracking-[5px] uppercase text-[#88734C] font-medium">
            Leadership
          </p>
        </div>

        {/* Main card — stacks on mobile, side-by-side on md+ */}
        <div className="grid md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] gap-0 overflow-hidden shadow-xl">

          {/* ── Left: Photo panel ── */}
          <div
            className="relative overflow-hidden bg-[#1c1917]"
            style={{
              clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 1s cubic-bezier(0.77,0,0.175,1) 0.2s",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
              alt="Bassam Ibrahim — CEO"
              className="w-full object-cover object-top"
              style={{
                minHeight: "320px",
                maxHeight: "460px",
                height: "100%",
                transform: visible ? "scale(1)" : "scale(1.08)",
                transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s",
              }}
            />

            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/80 via-transparent to-transparent" />

            {/* Name badge over image */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 sm:p-7"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 1s",
              }}
            >
              <p className="text-[9px] tracking-[4px] uppercase text-[#e2be96] mb-1">
                Chief Executive Officer
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Bassam Ibrahim
              </h2>
            </div>

            {/* Top-right corner accent */}
            <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/20" />
          </div>

          {/* ── Right: Info panel ── */}
          <div
            className="bg-white flex flex-col justify-between p-7 sm:p-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            {/* Top: Bio */}
            <div>
              <div className="w-10 h-px bg-[#e2be96] mb-6 sm:mb-7" />
              <h3 className="text-[13px] font-semibold text-[#88734C] tracking-widest uppercase mb-4 sm:mb-5">
                About Bassam
              </h3>
              <p className="text-[14px] text-[#444] leading-relaxed mb-4 sm:mb-5">
                With over 20 years in premium millwork and cabinetry, Bassam Ibrahim
                founded First Option Millwork on a single belief — that every home
                deserves craftsmanship built to last.
              </p>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Under his leadership, the company has grown into one of Toronto's most
                trusted names in custom interiors, delivering projects across the GTA
                with a hands-on, client-first approach from the very first consultation.
              </p>

              {/* Signature line */}
              <div className="mt-7 sm:mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#f0ece4]" />
                <p className="text-[11px] tracking-[3px] uppercase text-[#c5b89a]">
                  First Option Millwork
                </p>
                <div className="h-px flex-1 bg-[#f0ece4]" />
              </div>
            </div>

            {/* Bottom: Contact details */}
            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (416) 988-6396",
                  href: "tel:+14169886396",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "bassam@firstoptionmillwork.ca",
                  href: "mailto:bassam@firstoptionmillwork.ca",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Location",
                  value: "North York, Ontario, Canada",
                  href: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(12px)",
                    transition: `opacity 0.5s ease ${0.8 + i * 0.1}s, transform 0.5s ease ${0.8 + i * 0.1}s`,
                  }}
                >
                  <div className="w-9 h-9 rounded-full border border-[#e8e2d9] flex items-center justify-center text-[#88734C] flex-shrink-0 group-hover:border-[#88734C] group-hover:bg-[#faf7f3] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[2px] uppercase text-[#aaa] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] font-medium text-[#1a1a1a] hover:text-[#88734C] transition-colors duration-200 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[13px] font-medium text-[#1a1a1a]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
