"use client";
import React, { useState, useEffect } from 'react';
import { FaHammer, FaCouch, FaUtensils, FaBoxOpen, FaLayerGroup } from 'react-icons/fa';
import SectionHeader from '@/components/ui/section-header';

const options = [
  {
    image: "/cleaness/1.JPG",
  },
  {
    image: "/cleaness/2.JPG",
  },
  {
    image: "/cleaness/3.JPG",
  },
  {
    image: "/cleaness/4.JPG",
  },
  {
    image: "/cleaness/5.JPG",
  },
  {
    image: "/cleaness/6.JPG",
  },
];

/* ── Desktop accordion panel ── */
function DesktopSelector({ activeIndex, setActiveIndex, animatedOptions }) {
  return (
    <div className="relative z-10 flex w-full max-w-[1100px] h-[500px] mx-auto items-stretch overflow-hidden px-4">
      {options.map((option, index) => (
        <div
          key={index}
          className="option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${option.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backfaceVisibility: 'hidden',
            opacity: animatedOptions.includes(index) ? 1 : 0,
            transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
            minWidth: '60px',
            minHeight: '100px',
            margin: 0,
            borderRadius: 0,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: activeIndex === index ? '#fff' : '#292929',
            cursor: 'pointer',
            backgroundColor: '#18181b',
            boxShadow: activeIndex === index
              ? '0 20px 60px rgba(0,0,0,0.50)'
              : '0 10px 30px rgba(0,0,0,0.30)',
            flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
            zIndex: activeIndex === index ? 10 : 1,
            willChange: 'flex-grow, box-shadow',
          }}
          onClick={() => setActiveIndex(index)}
        >
        </div>
      ))}
    </div>
  );
}

/* ── Mobile card grid ── */
function MobileSelector({ activeIndex, setActiveIndex }) {
  return (
    <div className="relative z-10 w-full max-w-lg mx-auto px-4 grid grid-cols-1 gap-3">
      {options.map((option, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300"
          style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: activeIndex === index ? '#fff' : '#292929',
            boxShadow: activeIndex === index
              ? '0 12px 40px rgba(0,0,0,0.55)'
              : '0 4px 16px rgba(0,0,0,0.30)',
          }}
          onClick={() => setActiveIndex(index)}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 transition-transform duration-500"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 flex items-center gap-4 px-5 py-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] border-2 border-[#444] flex-shrink-0">
              {option.icon}
            </div>
            <div>
              <p className="font-bold text-white text-[15px] leading-tight">{option.title}</p>
              <p
                className="text-gray-300 text-[13px] transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: activeIndex === index ? '40px' : '0',
                  opacity: activeIndex === index ? 1 : 0,
                  marginTop: activeIndex === index ? '2px' : '0',
                }}
              >
                {option.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const HomeSection4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-12 font-sans text-white"
      style={{
        backgroundImage: "url('/background/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Header */}
      <div className="relative z-10 w-full max-w-3xl mb-10 sm:mb-12">
        <SectionHeader
          eyebrow="Our Craft"
          titleBefore="What We Do is "
          titleHighlight="best & finest"
          titleAfter=" Millwork & Cabinetry"
          subtitle="Premium Custom Millwork across Toronto & GTA"
          dark={true}
        />
      </div>

      {/* Desktop layout (md+) */}
      <div className="hidden md:block w-full">
        <DesktopSelector
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          animatedOptions={animatedOptions}
        />
      </div>

      {/* Mobile layout (< md) */}
      <div className="md:hidden w-full">
        <MobileSelector activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
};

export default HomeSection4;
