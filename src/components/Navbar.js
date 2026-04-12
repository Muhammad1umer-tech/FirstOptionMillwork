"use client";

import { useState } from "react";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-glow-button";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <header className="w-full">

      {/* ===== TOP BAR ===== */}
      <div className="bg-[#704a25] text-white/70 text-xs font-heading">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-evenly items-center">
          <span className="flex items-center gap-1.5">
            <lord-icon
              src="https://cdn.lordicon.com/abfverha.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ fontFamily: "var(--font-heading)", width: 16, height: 16 }}
            />
            Mon–Fri 08:00 – 18:00
          </span>

          <span className="flex items-center gap-1.5 border-l border-white/20 pl-4">
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            info@firstoption.ca
          </span>

          <span className="flex items-center gap-1.5 border-l border-white/20 pl-4">
            <lord-icon
              src="https://cdn.lordicon.com/tftaqjwp.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            +1 (905) 761-7474
          </span>

          <span className="flex items-center gap-1.5 border-l border-white/20 pl-4">
            <lord-icon
              src="https://cdn.lordicon.com/tftaqjwp.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            +1 (647) 822-5127
          </span>

        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div className="w-full bg-[#f8f4f0] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between font-heading">

          <div>
            <img src="/logo.jpeg" alt="Logo" className="h-10 object-contain" />
          </div>

          <nav className="flex items-center gap-8 text-sm text-[#222]">

            <Link href="/" className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpen("services")}
              onMouseLeave={() => setOpen(null)}
            >
              <Link href="/services" className="cursor-pointer">Services ▾</Link>
              {open === "services" && (
                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-lg py-2">
                  <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-100">Custom Cabinets</Link>
                  <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-100">Kitchen Cabinets</Link>
                  <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-100">Closets</Link>
                  <Link href="/services" className="block px-4 py-2 text-sm hover:bg-gray-100">Millwork</Link>
                </div>
              )}
            </div>

            <a className="hover:text-black transition">About Us</a>

            <div
              className="relative"
              onMouseEnter={() => setOpen("area")}
              onMouseLeave={() => setOpen(null)}
            >
              <span className="cursor-pointer">Service Area ▾</span>
              {open === "area" && (
                <div className="absolute top-8 left-0 bg-white border border-gray-200 w-48 shadow-lg py-2">
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">Mississauga</a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">Toronto</a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">Brampton</a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">Oakville</a>
                </div>
              )}
            </div>

            <a className="hover:text-black transition">Gallery</a>
            <a className="hover:text-black transition">Our Process</a>
            <a className="hover:text-black transition">Blog</a>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>

          </nav>

          <div>
            <Link href="/contact">
              <HoverButton
                glowColor="#ff8c00"
                backgroundColor="#3e2723"
                textColor="#f8f4f0"
                hoverTextColor="#ceb79f"
                className="shadow-lg"
              >
                Contact Us
              </HoverButton>
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}