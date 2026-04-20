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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Process", href: "/our-process" },
  { label: "Contact", href: "/contact" },
];

/* ===== DESKTOP DROPDOWN ===== */
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

/* ===== MOBILE ACCORDION ===== */
function MobileAccordion({ label, items, href = "/services", onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-4 px-1 text-white/85 text-[15px] font-medium"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <svg
          width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 pl-3 flex flex-col gap-1">
          {items.map((item, i) => (
            <Link
              key={i}
              href={href}
              onClick={onClose}
              className="flex items-center gap-2.5 py-2 text-[13px] text-white/55 hover:text-[#e2be96] transition"
            >
              <span className="w-1 h-1 rounded-full bg-[#88734C] flex-shrink-0" />
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null);       // desktop dropdown
  const [closing, setClosing] = useState(null); // desktop dropdown exit
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
    return () => { if (typeof document !== "undefined") document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Load Calendly assets */
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
      width="10" height="10" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth="2.5"
      className={`transition-transform duration-200 ${open === menu ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <header className="w-full relative z-50">

      {/* ===== TOP BAR ===== */}
      <div className="bg-[#704a25] text-white/70 text-xs font-heading">
        <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between gap-2 md:justify-evenly flex-wrap">

          {/* Hours — always visible */}
          <span className="flex items-center gap-1.5 shrink-0">
            <lord-icon src="https://cdn.lordicon.com/abfverha.json" trigger="loop" colors="primary:#ffffff" style={{ width: 16, height: 16 }} />
            <span className="hidden sm:inline">Mon–Fri</span> 08:00–18:00
          </span>

          {/* Email — hidden on xs */}
          <a href="mailto:info@firstoptionmillwork.ca" className="hidden sm:flex items-center gap-1.5 border-l border-white/20 pl-3 hover:text-white transition shrink-0">
            <lord-icon src="https://cdn.lordicon.com/nzixoeyk.json" trigger="loop" colors="primary:#ffffff" style={{ width: 16, height: 16 }} />
            <span className="hidden md:inline">info@firstoptionmillwork.ca</span>
            <span className="md:hidden">Email Us</span>
          </a>

          {/* Phone 1 */}
          <a href="tel:+14169886396" className="flex items-center gap-1.5 border-l border-white/20 pl-3 hover:text-white transition shrink-0">
            <lord-icon src="https://cdn.lordicon.com/tftaqjwp.json" trigger="loop" colors="primary:#ffffff" style={{ width: 16, height: 16 }} />
            <span className="hidden sm:inline">+1 (416) 988-6396</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Phone 2 — hidden on mobile */}
          <a href="tel:+16478225127" className="hidden md:flex items-center gap-1.5 border-l border-white/20 pl-3 hover:text-white transition shrink-0">
            <lord-icon src="https://cdn.lordicon.com/tftaqjwp.json" trigger="loop" colors="primary:#ffffff" style={{ width: 16, height: 16 }} />
            +1 (437) 855-2924
          </a>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div className="w-full bg-[#f8f4f0] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-1 py-3 md:py-4 flex items-center justify-between font-heading">

          {/* Logo */}
          <Link href="/" aria-label="Home">
            <img src="/logo.png" alt="First Option Millwork" className="h-9 md:h-17 object-contain" />
          </Link>

          {/* ── DESKTOP NAV (lg+) ── */}
          <nav className="hidden lg:flex items-center gap-7 text-sm text-[#222]" aria-label="Main navigation">

            <Link href="/" className="hover:text-black transition">Home</Link>

            {/* Services dropdown */}
            <div className="relative py-1" onMouseEnter={() => handleOpen("services")} onMouseLeave={handleClose}>
              <span className="flex items-center gap-1.5 cursor-pointer">
                Services {chevron("services")}
              </span>
              {(open === "services" || closing === "services") && (
                <Dropdown items={services} closing={closing === "services"} />
              )}
            </div>

            <Link href="/about" className="hover:text-black transition">About Us</Link>

            {/* Service Area dropdown */}
            <div className="relative py-1" onMouseEnter={() => handleOpen("area")} onMouseLeave={handleClose}>
              <span className="flex items-center gap-1.5 cursor-pointer">
                Service Area {chevron("area")}
              </span>
              {(open === "area" || closing === "area") && (
                <Dropdown items={areas} closing={closing === "area"} href="/contact" />
              )}
            </div>

            <Link href="/gallery" className="hover:text-black transition">Gallery</Link>
            <Link href="/our-process" className="hover:text-black transition">Our Process</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex flex-col items-center gap-1">
            <HoverButton
              glowColor="#ff8c00"
              backgroundColor="#3e2723"
              textColor="#f8f4f0"
              hoverTextColor="#ceb79f"
              className="shadow-lg"
              onClick={openCalendly}
            >
              Contact Us via Calendly
            </HoverButton>
          </div>

          {/* ── HAMBURGER (mobile / tablet) ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-black/5 transition"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-[2px] bg-[#1a1a1a] rounded" />
            <span className="block w-6 h-[2px] bg-[#1a1a1a] rounded" />
            <span className="block w-4 h-[2px] bg-[#1a1a1a] rounded self-start ml-1" />
          </button>

        </div>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      {/* Backdrop */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Scrim */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-[360px] bg-[#1c1917] flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img src="/logo.png" alt="First Option Millwork" className="h- object-contain brightness-[10] opacity-90" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center py-4 border-b border-white/10 text-white/85 text-[15px] font-medium hover:text-[#e2be96] transition"
              >
                {label}
              </Link>
            ))}

            {/* Services accordion */}
            <MobileAccordion label="Services" items={services} href="/services" onClose={() => setMobileOpen(false)} />

            {/* Service Area accordion */}
            <MobileAccordion label="Service Area" items={areas} href="/contact" onClose={() => setMobileOpen(false)} />
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => { setMobileOpen(false); openCalendly(); }}
              className="w-full bg-[#704a25] hover:bg-[#88734C] text-white text-[11px] tracking-[2px] uppercase font-medium py-3.5 rounded transition-colors duration-200 cursor-pointer"
            >
              Book via Calendly
            </button>
            <a
              href="tel:+14169886396"
              className="w-full border border-white/20 hover:border-[#e2be96] text-white/70 hover:text-[#e2be96] text-[11px] tracking-[2px] uppercase font-medium py-3.5 rounded text-center transition-colors duration-200"
            >
              +1 (416) 988-6396
            </a>
          </div>
        </div>
      </div>

      {/* ===== DROPDOWN ANIMATION KEYFRAMES ===== */}
      <style jsx global>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dropOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(-8px) scale(0.96); }
        }
        .animate-drop-in  { animation: dropIn  0.18s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-drop-out { animation: dropOut 0.15s ease-in forwards; }
      `}</style>

    </header>
  );
}
