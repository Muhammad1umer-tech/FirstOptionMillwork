"use client";

/**
 * SectionHeader — reusable premium section header
 *
 * Props:
 *   eyebrow       — small label above (e.g. "Our Craft")
 *   titleBefore   — text before the highlighted word (e.g. "What We ")
 *   titleHighlight— highlighted/accent word (e.g. "Do")
 *   titleAfter    — text after the highlighted word (e.g. " is Best")
 *   subtitle      — smaller descriptor below the title
 *   dark          — true = white palette (for dark/image backgrounds)
 */
const SectionHeader = ({
  eyebrow,
  titleBefore = "",
  titleHighlight = "",
  titleAfter = "",
  subtitle,
  dark = false,
}) => {
  return (
    <div className="w-full text-center px-4 sm:px-8">

      {/* Eyebrow */}
      {eyebrow && (
        <span
          className={`block text-[13px] sm:text-[15px] tracking-[4px] sm:tracking-[6px] uppercase font-medium mb-2 ${
            dark ? "text-amber-300/70" : "text-[#88734C]"
          }`}
        >
          {eyebrow}
        </span>
      )}

      {/* Title */}
      <h2
        className={`font-extrabold leading-tight mb-4 ${
          dark ? "text-white" : "text-[#1a1a1a]"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
      >
        {titleBefore}
        {titleHighlight && (
          <span className="relative inline-block mx-1">
            <span className={`relative z-10 ${dark ? "text-amber-300" : "text-[#704a25]"}`}>
              {titleHighlight}
            </span>
            <span
              className={`absolute bottom-1 left-0 w-full h-3 rounded-sm -z-0 ${
                dark ? "bg-amber-300/25" : "bg-[#e2be96]/40"
              }`}
            />
          </span>
        )}
        {titleAfter}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-sm tracking-[2px] uppercase mb-6 ${
            dark ? "text-white/50" : "text-[#888]"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3">
        <div className={`w-12 h-px ${dark ? "bg-amber-300/60" : "bg-[#88734C]"}`} />
        <div className={`w-2 h-2 rounded-full opacity-60 ${dark ? "bg-amber-300" : "bg-[#88734C]"}`} />
        <div className={`w-12 h-px ${dark ? "bg-amber-300/60" : "bg-[#88734C]"}`} />
      </div>

    </div>
  );
};

export default SectionHeader;
