"use client";

import { useState, useRef } from "react";
import { GlobeWeather } from "@/components/ui/cobe-globe-weather";

const contactMarkers = [
  { id: "m1", location: [43.65, -79.38], emoji: "" },
  { id: "m2", location: [51.5,  -0.12],  emoji: "" },
  { id: "m3", location: [40.71, -74.0],  emoji: "" },
  { id: "m4", location: [48.85,  2.35],  emoji: "" },
  { id: "m5", location: [35.68, 139.69], emoji: "" },
  { id: "m6", location: [-33.87,151.21], emoji: "" },
];

/* ─── tiny helpers ─── */
const StarSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="w-full h-auto fill-[#f8f4f0]">
    <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93-210.06 184.09-378.37 392.05-407.74-207.98-29.38-371.16-197.69-392.06-407.78z"/>
  </svg>
);

const Label = ({ children }) => (
  <span className="text-[10px] tracking-[3px] uppercase text-[#c8a47a] font-body">{children}</span>
);

/* ─── File upload ─── */
function FileUploadZone() {
  const inputRef   = useRef(null);
  const [drag, setDrag]   = useState(false);
  const [files, setFiles] = useState([]);

  const add = (list) => {
    setFiles(prev => {
      const next = [...prev];
      Array.from(list).forEach(f => { if (!next.find(x => x.name === f.name)) next.push(f); });
      return next;
    });
  };
  const remove = (name) => setFiles(f => f.filter(x => x.name !== name));
  const fmt    = (b) => b < 1048576 ? `${(b/1024).toFixed(1)} KB` : `${(b/1048576).toFixed(1)} MB`;

  return (
    <div className="flex flex-col gap-3">
      <Label>Attach Files <span className="normal-case tracking-normal text-[#8a7e72] font-body"> — optional</span></Label>

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={e  => { e.preventDefault(); setDrag(true);  }}
        onDragLeave={() => setDrag(false)}
        onDrop={e      => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}
        className={`relative border-2 border-dashed rounded-xl px-6 py-7 text-center cursor-pointer transition-all duration-200
          ${drag ? "border-[#c8a47a] bg-[#c8a47a]/10" : "border-[#3e3228] hover:border-[#c8a47a]/50 hover:bg-white/5"}`}
      >
        <input ref={inputRef} type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.dwg,.dxf,.doc,.docx" className="hidden"
          onChange={e => add(e.target.files)} />
        <div className="flex flex-col items-center gap-2 pointer-events-none select-none">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${drag ? "bg-[#c8a47a]/20" : "bg-white/8"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={drag ? "#c8a47a" : "#8a7e72"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <p className="text-sm text-[#8a7e72] font-body">
            <span className="font-medium text-[#c8a47a]">Click to upload</span> or drag &amp; drop
          </p>
          <p className="text-xs text-[#5a5048] font-body">JPG, PNG, PDF, DWG, DXF, DOC · up to 20 MB</p>
        </div>
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map(f => (
            <li key={f.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-body">
              <div className="flex items-center gap-3 min-w-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8a47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                <span className="truncate text-[#d4c8b8]">{f.name}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-3">
                <span className="text-[#5a5048] text-xs">{fmt(f.size)}</span>
                <button type="button" onClick={e => { e.stopPropagation(); remove(f.name); }}
                  className="text-[#5a5048] hover:text-[#c8a47a] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─── Main component ─── */
export default function Contact() {
  const inputCls = "w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6a6058] outline-none focus:border-[#c8a47a]/70 focus:bg-white/10 focus:ring-1 focus:ring-[#c8a47a]/20 transition-all duration-200 font-body";

  return (
    <div id="contact" className="min-h-screen w-full flex flex-col lg:flex-row">

      {/* ══════════ LEFT PANEL ══════════ */}
      <div className="lg:w-[780px] xl:w-[820px] shrink-0 bg-[#1a1410] flex flex-col justify-between px-10 py-14 gap-12">

        {/* Brand + Heading */}
        <div className="flex flex-col gap-6">
          <Label>Get In Touch</Label>
          <h1 className="text-[52px] xl:text-[60px] font-extrabold leading-[0.95] uppercase font-heading tracking-[-2px] text-white">
            Let's Build<br />
            <span className="text-[#c8a47a]">Together</span>
          </h1>
          <p className="text-[14px] text-[#7a7068] leading-relaxed font-body max-w-[340px]">
            Have a project in mind? We'd love to hear about it. Tell us what you're working on and we'll be in touch.
          </p>
        </div>

        {/* Globe */}
        <div className="w-full">
          <GlobeWeather
            markers={contactMarkers}
            speed={0.004}
            dark={1}
            baseColor={[0.14, 0.11, 0.09]}
            markerColor={[0.78, 0.64, 0.48]}
            glowColor={[0.22, 0.16, 0.10]}
            className="w-full opacity-95"
          />
        </div>

        {/* Contact info */}
        
      </div>

      {/* ══════════ RIGHT PANEL — Form ══════════ */}
      <div className="flex-1 bg-[#f8f4f0] flex items-start justify-center px-8 py-14 overflow-y-auto">
        <div className="w-full max-w-[600px]">

          {/* Form header */}
          <div className="mb-10">
            <p className="text-[11px] tracking-[4px] uppercase text-[#704a25] font-body mb-3">New Project</p>
            <h2 className="text-[36px] font-extrabold font-heading tracking-[-1px] text-[#1a1208] leading-tight">
              Send a Message
            </h2>
            <p className="text-[14px] text-[#8a7868] font-body mt-2">
              Fill in the details below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="flex flex-col gap-5">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">Full Name</label>
                <input type="text" placeholder="John Doe"
                  className="w-full bg-white border border-[#e4dbd0] rounded-xl px-4 py-3.5 text-sm text-[#1a1208] placeholder-[#c0b0a0] outline-none focus:border-[#704a25] focus:ring-2 focus:ring-[#704a25]/8 transition-all duration-200 font-body" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">Email Address</label>
                <input type="email" placeholder="you@email.com"
                  className="w-full bg-white border border-[#e4dbd0] rounded-xl px-4 py-3.5 text-sm text-[#1a1208] placeholder-[#c0b0a0] outline-none focus:border-[#704a25] focus:ring-2 focus:ring-[#704a25]/8 transition-all duration-200 font-body" />
              </div>
            </div>

            {/* Phone + Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">Phone Number</label>
                <input type="tel" placeholder="+1 (000) 000-0000"
                  className="w-full bg-white border border-[#e4dbd0] rounded-xl px-4 py-3.5 text-sm text-[#1a1208] placeholder-[#c0b0a0] outline-none focus:border-[#704a25] focus:ring-2 focus:ring-[#704a25]/8 transition-all duration-200 font-body" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">Project Type</label>
                <select
                  defaultValue=""
                  className="w-full bg-white border border-[#e4dbd0] rounded-xl px-4 py-3.5 text-sm text-[#1a1208] outline-none focus:border-[#704a25] focus:ring-2 focus:ring-[#704a25]/8 transition-all duration-200 font-body appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23704a25' stroke-width='2.5' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option value="" disabled>Select type…</option>
                  <option>Kitchen Cabinetry</option>
                  <option>Custom Millwork</option>
                  <option>Closets &amp; Storage</option>
                  <option>Commercial Fit-out</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">Message</label>
              <textarea
                placeholder="Tell us about your project — dimensions, materials, timeline, budget range…"
                rows={5}
                className="w-full bg-white border border-[#e4dbd0] rounded-xl px-4 py-3.5 text-sm text-[#1a1208] placeholder-[#c0b0a0] outline-none focus:border-[#704a25] focus:ring-2 focus:ring-[#704a25]/8 transition-all duration-200 font-body resize-none"
              />
            </div>

            {/* File upload — light theme */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] tracking-[2.5px] uppercase text-[#9a8878] font-body">
                Attach Files <span className="normal-case tracking-normal text-[#c0b0a0]">— optional</span>
              </label>
              <LightFileUpload />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative mt-2 w-full py-4 text-[15px] font-semibold tracking-wide text-[#f8f4f0] bg-[#704a25] border-2 border-[#704a25] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:bg-[#5c3b1c] hover:border-[#5c3b1c] active:scale-[0.98] font-heading"
            >
              {/* Flying stars */}
              {[
                "absolute top-[20%] left-[8%]  w-[18px] opacity-0 group-hover:opacity-100 group-hover:top-[-90%] group-hover:left-[-4%]  transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)]",
                "absolute top-[20%] right-[8%] w-[18px] opacity-0 group-hover:opacity-100 group-hover:top-[-90%] group-hover:right-[-4%] transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)]",
                "absolute top-[50%] left-[14%] w-[11px] opacity-0 group-hover:opacity-100 group-hover:top-[-40%] group-hover:left-[2%]   transition-all duration-[900ms]  ease-[cubic-bezier(0,0.4,0,1.01)]",
                "absolute top-[50%] right-[14%] w-[11px] opacity-0 group-hover:opacity-100 group-hover:top-[-40%] group-hover:right-[2%] transition-all duration-[900ms]  ease-[cubic-bezier(0,0.4,0,1.01)]",
              ].map((cls, i) => (
                <span key={i} className={cls}><StarSVG /></span>
              ))}

              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </span>
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}

/* Light-theme file upload used inside the right panel */
function LightFileUpload() {
  const inputRef   = useRef(null);
  const [drag, setDrag]   = useState(false);
  const [files, setFiles] = useState([]);

  const add = (list) => setFiles(prev => {
    const next = [...prev];
    Array.from(list).forEach(f => { if (!next.find(x => x.name === f.name)) next.push(f); });
    return next;
  });
  const remove = (name) => setFiles(f => f.filter(x => x.name !== name));
  const fmt    = (b) => b < 1048576 ? `${(b/1024).toFixed(1)} KB` : `${(b/1048576).toFixed(1)} MB`;

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={e  => { e.preventDefault(); setDrag(true);  }}
        onDragLeave={() => setDrag(false)}
        onDrop={e      => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}
        className={`border-2 border-dashed rounded-xl px-6 py-7 text-center cursor-pointer transition-all duration-200
          ${drag ? "border-[#704a25] bg-[#704a25]/5" : "border-[#ddd3c5] bg-[#faf8f5] hover:border-[#704a25]/40"}`}
      >
        <input ref={inputRef} type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.dwg,.dxf,.doc,.docx" className="hidden"
          onChange={e => add(e.target.files)} />
        <div className="flex flex-col items-center gap-2 select-none pointer-events-none">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${drag ? "bg-[#704a25]/12" : "bg-[#ede5da]"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={drag ? "#704a25" : "#9a8070"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <p className="text-sm text-[#7a6858] font-body">
            <span className="font-medium text-[#704a25]">Click to upload</span> or drag &amp; drop
          </p>
          <p className="text-xs text-[#b8a898] font-body">JPG, PNG, PDF, DWG, DXF, DOC · up to 20 MB each</p>
        </div>
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map(f => (
            <li key={f.name} className="flex items-center justify-between bg-white border border-[#e4dbd0] rounded-lg px-4 py-2.5 text-sm font-body">
              <div className="flex items-center gap-3 min-w-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#704a25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                <span className="truncate text-[#3a2a1a]">{f.name}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-3">
                <span className="text-[#b0a090] text-xs">{fmt(f.size)}</span>
                <button type="button" onClick={e => { e.stopPropagation(); remove(f.name); }}
                  className="text-[#c0b0a0] hover:text-[#704a25] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
