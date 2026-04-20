"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-glow-button";

const CALENDLY_URL = "https://calendly.com/firstoptionmillwork/30min";

function openCalendly() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}

/* ===== DATA ===== */
const services = [
  "Kitchen Cabinets",
  "Closets & Wardrobes",
  "Bathroom & Vanity",
  "Laundry & Mudroom",
  "Living Room & Wall Units",
  "Home Office & Commercial",
];

const areas = [
  "Toronto","Mississauga","Brampton","Vaughan","Markham","Richmond Hill",
  "North York","Scarborough","Etobicoke","Oakville","Burlington","Hamilton",
  "Barrie","Oshawa","Pickering","Ajax","Whitby","Kingston",
];

/* ===== DROPDOWN ===== */
function Dropdown({ items, closing, href = "/services" }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-52 bg-[#1c1917] rounded-xl shadow-2xl z-50 overflow-hidden py-1 ${
        closing ? "animate-drop-out" : "animate-drop-in"
      }`}
    >
      {items.map((item, i) => (
        <Link
          key={i}
          href={href}
          className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-white/65 hover:bg-[#2a211d] hover:text-[#e2be96] transition"
        >
          <span className="w-1 h-1 rounded-full bg-[#88734C]" />
          {item}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [closing, setClosing] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const hoverTimer = useRef(null);
  const closeTimer = useRef(null);

  const handleOpen = (menu) => {
    clearTimeout(hoverTimer.current);
    clearTimeout(closeTimer.current);
    setClosing(null);
    setOpen(menu);
  };

  const handleClose = () => {
    hoverTimer.current = setTimeout(() => {
      setClosing(open);
      setOpen(null);
      closeTimer.current = setTimeout(() => setClosing(null), 180);
    }, 100);
  };

  const chevron = (menu) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`transition-transform duration-200 ${
        open === menu ? "rotate-180" : ""
      }`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <header className="w-full">

      {/* ===== TOP BAR (UNCHANGED) ===== */}
      <div className="bg-[#704a25] text-white/70 text-xs font-heading">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-evenly items-center">
          <span className="flex items-center gap-1.5">
            <lord-icon
              src="https://cdn.lordicon.com/abfverha.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            Mon–Fri 08:00 – 18:00
          </span>

          <a href="mailto:info@firstoptionmillwork.ca" className="flex items-center gap-1.5 border-l border-white/20 pl-4 hover:text-white transition">
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            info@firstoptionmillwork.ca
          </a>

          <a href="tel:+14169886396" className="flex items-center gap-1.5 border-l border-white/20 pl-4 hover:text-white transition">
            <lord-icon
              src="https://cdn.lordicon.com/tftaqjwp.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            +1 (416) 988-6396
          </a>

          <a href="tel:+16478225127" className="flex items-center gap-1.5 border-l border-white/20 pl-4 hover:text-white transition">
            <lord-icon
              src="https://cdn.lordicon.com/tftaqjwp.json"
              trigger="loop"
              colors="primary:#ffffff"
              style={{ width: 16, height: 16 }}
            />
            +1 (437) 855-2924
          </a>
        </div>
      </div>

      {/* ===== MAIN NAVBAR (NO STICKY) ===== */}
      <div className="w-full bg-[#f8f4f0] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between font-heading">

          {/* Logo */}
          <img src="/logo.jpeg" alt="Logo" className="h-10 object-contain" />

          {/* NAV */}
          <nav className="flex items-center gap-8 text-sm text-[#222]">

            <Link href="/" className="hover:text-black transition">
              Home
            </Link>

            {/* SERVICES */}
            <div
              className="relative py-1"
              onMouseEnter={() => handleOpen("services")}
              onMouseLeave={handleClose}
            >
              <span className="flex items-center gap-1.5 cursor-pointer">
                Services {chevron("services")}
              </span>

              {(open === "services" || closing === "services") && (
                <Dropdown items={services} closing={closing === "services"} />
              )}
            </div>

            <Link href="/about" className="hover:text-black transition">
              About Us
            </Link>

            {/* SERVICE AREA */}
            <div
              className="relative py-1"
              onMouseEnter={() => handleOpen("area")}
              onMouseLeave={handleClose}
            >
              <span className="flex items-center gap-1.5 cursor-pointer">
                Service Area {chevron("area")}
              </span>

              {(open === "area" || closing === "area") && (
                <Dropdown items={areas} closing={closing === "area"} href="/contact" />
              )}
            </div>

            <Link href="/gallery" className="hover:text-black transition">
              Gallery
            </Link>

            <Link href="/our-process" className="hover:text-black transition">
              Our Process
            </Link>

            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>

          </nav>

          {/* CTA */}
          <div className="flex flex-col items-center gap-1">
            <button onClick={openCalendly} className="cursor-pointer">
              <HoverButton
                glowColor="#ff8c00"
                backgroundColor="#3e2723"
                textColor="#f8f4f0"
                hoverTextColor="#ceb79f"
                className="shadow-lg"
              >
                Contact Us via Calendly
              </HoverButton>
            </button>
          </div>

        </div>
      </div>

      {/* ===== DROPDOWN ANIMATION ===== */}
      <style jsx global>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes dropOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(-8px) scale(0.96); }
        }

        .animate-drop-in {
          animation: dropIn 0.18s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        .animate-drop-out {
          animation: dropOut 0.15s ease-in forwards;
        }
      `}</style>

    </header>
  );
}