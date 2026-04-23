"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ConstructionBanner() {
  const [mounted, setMounted] = useState(false);   // in DOM
  const [animate, setAnimate] = useState(false);   // CSS enter state
  const [leaving, setLeaving] = useState(false);   // CSS exit state

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setMounted(true);
      // Two rAF frames so the browser paints the initial hidden state first
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }, 600);

    const hideTimer = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => setMounted(false), 500);
    }, 10600);

    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  if (!mounted) return null;

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setMounted(false), 500);
  };

  return (
    <div
      className={`fixed bottom-5 left-5 z-[9999] max-w-[320px] bg-[#3e0000] text-white rounded-lg shadow-2xl p-4 border border-red-500/80 transition-all duration-500 ease-out ${
        leaving ? "opacity-0 translate-y-6" : animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Close button */}
      <button
        onClick={dismiss}
        className="absolute top-2.5 right-3 text-white/70 hover:text-white transition text-lg leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>

      <p className="text-[13px] font-semibold tracking-wide uppercase mb-1 pr-4">
        Site Under Construction
      </p>
      <p className="text-[12px] text-white/85 leading-relaxed mb-3">
        We&apos;re actively building this website. Sorry for any inconvenience!
        We&apos;d love to hear your suggestions.
      </p>
      <Link
        href="/contact"
        className="inline-block text-[11px] font-semibold tracking-widest uppercase border border-red-500/80 text-red-400 px-4 py-1.5 rounded hover:bg-red-500/20 transition"
      >
        Contact Us →
      </Link>
    </div>
  );
}
