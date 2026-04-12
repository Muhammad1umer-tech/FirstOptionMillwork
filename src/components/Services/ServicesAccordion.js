"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/section-header";

const faqs = [
  {
    q: "What types of custom millwork do you offer?",
    a: "We craft a full range of custom millwork including kitchen cabinetry, bathroom vanities, built-in shelving, closets and wardrobes, crown mouldings, wainscoting, and architectural panelling. Every piece is built to spec — tailored to your space, style, and functional needs.",
  },
  {
    q: "How long does a custom kitchen cabinet project typically take?",
    a: "Lead times vary by project scope, but most custom kitchen cabinet projects run 6–10 weeks from final design approval to installation. Larger or more complex builds — such as full kitchen renovations with islands and integrated appliances — may take 10–14 weeks. We keep you updated at every stage.",
  },
  {
    q: "What materials do you use for your cabinetry and millwork?",
    a: "We use premium-grade hardwoods (maple, oak, walnut, cherry), MDF for painted finishes, and high-quality plywoods for carcass construction. Hardware is sourced from trusted brands like Blum and Häfele. For countertops and surfaces, we work with porcelain slabs, quartz, and natural stone.",
  },
  {
    q: "Do you handle design, fabrication, and installation?",
    a: "Yes — we are a full-service shop. Our process starts with a design consultation and site measurement, moves through fabrication in our Toronto facility, and ends with professional installation by our own crew. You work with one team from concept to completion, which ensures quality and accountability throughout.",
  },
  {
    q: "Can you match existing millwork in my home?",
    a: "Absolutely. We regularly work on additions or renovations where matching existing profiles, finishes, and wood species is critical. Bring us a sample or detailed photos and our team will mill and finish pieces to integrate seamlessly with what's already in your home.",
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <SectionHeader
          eyebrow="FAQ"
          titleBefore="Common"
          titleHighlight="Questions"
          titleAfter=""
          subtitle="Everything you need to know about our millwork process"
          dark={false}
        />
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto px-6 divide-y divide-[#f0ece4]">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx}>
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                {/* Number + Question */}
                <div className="flex items-start gap-4">
                  <span
                    className={`text-[11px] tracking-[3px] font-medium pt-0.5 transition-colors duration-300 ${
                      isOpen ? "text-[#88734C]" : "text-[#c0a880]"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#1a1a1a]" : "text-[#333] group-hover:text-[#1a1a1a]"
                    }`}
                  >
                    {item.q}
                  </span>
                </div>

                {/* Icon */}
                <span
                  className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-[#88734C] bg-[#88734C] text-white rotate-45"
                      : "border-[#d4c4a8] text-[#88734C] group-hover:border-[#88734C]"
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="1" x2="5" y2="9" />
                    <line x1="1" y1="5" x2="9" y2="5" />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed pl-10 pb-6 border-l-2 border-[#e2be96] ml-[2px]">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
