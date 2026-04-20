"use client";

import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/section-header";
import TiltCard from "@/components/ui/tilt-card";

function FeatureItem({ title, description }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[#88734C] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#88734C] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#1a1a1a] mb-1">{title}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection2() {
  return (
    <div className="w-full bg-white">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <SectionHeader
          eyebrow="Featured Service"
          titleBefore="Shaker Style "
          titleHighlight="Cabinets"
          titleAfter=""
          subtitle="Timeless craftsmanship for modern living"
          dark={false}
        />
      </div>

      {/* First Content Block */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#88734C]" />
            <p className="text-[11px] tracking-[4px] uppercase text-[#88734C]">
              Shaker Style Custom Kitchen Cabinets
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 leading-snug">
            Features of Shaker Style Cabinets
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            These cabinets offer several features that make them an excellent choice for any kitchen:
          </p>

          <div className="space-y-6">
            <FeatureItem
              title="Simplicity"
              description="Shaker cabinets have a beautiful, classic look that is both simple and distinctive. Their light finishes, recessed centre panel, and inset doors make them stand out."
            />
            <FeatureItem
              title="Versatility"
              description="Shaker cabinets seamlessly blend with contemporary and traditional interior design. Choose from a wide range of colours and finishes."
            />
            <FeatureItem
              title="Durability"
              description="We use only top-quality materials to build our shaker-style cabinets to ensure a kitchen that lasts for years."
            />
          </div>
        </div>

        {/* Right: intro text + image */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-[#e2be96] pl-4">
            Shaker kitchen cabinets are identified through their simple and minimalist designs.
            One of the best things about these cabinets is that they can seamlessly blend with
            all types of interior styles. The "Shaker" style of furniture was first built in
            the 1800s by a religious group that goes by the same name.
          </p>
          <TiltCard
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Shaker Kitchen"
            className="w-full aspect-[4/3]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full h-px bg-[#f0ece4]" />
      </div>

      {/* Second Content Block */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <TiltCard
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
          alt="Shaker Cabinet Design"
          className="w-full aspect-[4/3]"
        />

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 leading-snug">
            Shaker Kitchen Cabinet Design Ideas
          </h3>

          <div className="space-y-6">
            <FeatureItem
              title="White Shaker Cabinets"
              description="You can never go wrong with classic shaker white cabinets. They easily blend with all kinds of interior design and are perfect for a bright, timeless kitchen."
            />
            <FeatureItem
              title="Two-Tone Shaker Cabinets"
              description="Add visual interest and contrast by combining two different colours or finishes for your upper and lower shaker cabinets."
            />
            <FeatureItem
              title="Glass Panel Shaker Cabinets"
              description="Incorporating glass panels into your shaker cabinets adds elegance and provides space to display your favourite kitchenware."
            />
          </div>
        </div>
      </div>

    </div>
  );
}
