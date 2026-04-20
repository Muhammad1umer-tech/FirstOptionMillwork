import Link from 'next/link'
import Image from "next/image";
import GlowCard from "@/components/ui/spotlight-card";

export default function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full overflow-x-hidden bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] text-white">

      {/* TOP SECTION */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

        {/* LOGO + ABOUT */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="ActivationLed logo"
            width={250}
            height={100}
            className="object-contain opacity-90"
          />

          <p className="text-white/50 text-[13px] leading-relaxed">
            First Option Millwork is a custom cabinet specialist based in North York, ON. 
            We offer design, manufacturing, and installation of high-quality cabinetry.
          </p>
        </div>

        {/* REVIEWS */}

        <div className="flex flex-col gap-4">

          <h4 className="text-sm font-semibold tracking-wide">Reviews</h4>
          <div className="w-full h-[1px] bg-white/10"></div>

          <GlowCard customSize className="p-5 w-full" glowColor="blue">

            <div className="flex flex-col gap-3">

              {/* Google Logo Style */}
              <div className="text-lg font-semibold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

              <p className="text-white/60 text-sm">Reviews</p>

              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              <p className="text-white/40 text-xs">
                Rated 4.9 from 120+ clients
              </p>

            </div>

          </GlowCard>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
          <div className="w-full h-[1px] bg-white/10"></div>

          <div className="flex flex-col gap-2 text-[13px]">
            {[
              { label: "Home",       href: "/" },
              { label: "Services",   href: "/services" },
              { label: "About Us",   href: "/about" },
              { label: "Gallery",    href: "/gallery" },
              { label: "Our Process",href: "/our-process" },
              { label: "Contact",    href: "/contact" },
            ].map(({ label, href }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-white/30">›</span>
                <Link href={href} className="text-white/50 hover:text-white transition">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-4">

          <h4 className="text-sm font-semibold tracking-wide">Contact us</h4>
          <div className="w-full h-[1px] bg-white/10"></div>

          <GlowCard customSize className="p-5 w-full" glowColor="purple">

            <div className="flex flex-col gap-4 text-sm">

              {/* PHONE */}
              <a href="tel:+14169886396" className="flex items-center gap-3 group">
                <span>📞</span>
                <div>
                  <p className="text-white/40 text-xs">Phone</p>
                  <p className="text-white/80 group-hover:text-white transition">
                    +1 (416) 988 6396
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a href="mailto:info@firstoptionmillwork.com" className="flex items-center gap-3 group">
                <span>✉️</span>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <p className="text-white/80 group-hover:text-white transition break-all">
                    info@firstoptionmillwork.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps?q=235+Eddystone+Ave+North+York+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span>📍</span>
                <div>
                  <p className="text-white/40 text-xs">Location</p>
                  <p className="text-white/80 group-hover:text-white transition">
                    235 Eddystone Ave, North York, ON
                  </p>
                </div>
              </a>

            </div>

          </GlowCard>
        </div>
        {/* SERVICE AREAS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide">Service Areas</h4>
          <div className="w-full h-[1px] bg-white/10"></div>

          <div className="grid grid-cols-2 gap-2 text-[13px]">
            {["East York","North York","Richmond Hill","Vaughan","King City","Markham"].map((area) => (
              <div key={area} className="flex items-center gap-2">
                <span className="text-white/30">›</span>
                <Link href="/contact" className="text-white/50 hover:text-white transition">
                  {area}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-4">
            <p>© {currentYear} All Rights Reserved</p>

            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>

          {/* RIGHT (SOCIAL) */}
          <div className="flex gap-4">

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition">
              <lord-icon
                src="https://cdn.lordicon.com/qgebwute.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 20, height: 20 }}
              ></lord-icon>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition">
              <lord-icon
                src="https://cdn.lordicon.com/bfoumeno.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 20, height: 20 }}
              ></lord-icon>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition">
              <lord-icon
                src="https://cdn.lordicon.com/zmvgugmh.json"
                trigger="loop"
                state="hover-dots"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 20, height: 20 }}
              ></lord-icon>
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};