import React from 'react';
import { SPEC_BLOCKS } from '../data/portfolioData';
import { SpecBlock } from '../types';

interface HeroProps {
  onSelectSpec: (spec: SpecBlock) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSpec }) => {
  return (
    <section id="top" className="min-h-[calc(100vh-53px)] grid grid-cols-12 relative border-b border-[#333333]">
      {/* Left Column (col-span-12 md:col-span-8): Vertically aligned bottom with massive lowercase text */}
      <div className="col-span-12 md:col-span-8 p-6 md:p-12 pb-24 md:pb-28 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#333333] relative">
        <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase flex items-center gap-3">
          <span className="px-2 py-1 border border-[#333333] text-white bg-black">01</span>
          <span>IDENTITY // CORE MANIFESTO</span>
        </div>

        <div className="mt-auto pt-16 md:pt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
            // SOFTWARE CRAFTSMAN &amp; AUTOMATION ENGINEER
          </p>
          <h1
            className="text-[14vw] md:text-[12vw] font-black lowercase tracking-tighter leading-none select-none text-white transition-all hover:tracking-normal duration-300"
            style={{ letterSpacing: '-0.06em' }}
            id="hero-name-heading"
          >
            bhavish.
          </h1>
        </div>
      </div>

      {/* Right Column (col-span-12 md:col-span-4): Grid of 3 stacked blocks separated by borders */}
      <div className="col-span-12 md:col-span-4 grid grid-rows-3 pb-16 md:pb-24">
        {SPEC_BLOCKS.map((spec, index) => (
          <div
            key={spec.specId}
            onClick={() => onSelectSpec(spec)}
            className={`p-6 md:p-8 flex flex-col justify-between group hover:bg-white hover:text-black transition-colors duration-150 cursor-pointer select-none ${
              index < SPEC_BLOCKS.length - 1 ? 'border-b border-[#333333]' : ''
            }`}
            id={`spec-block-${spec.specId.toLowerCase()}`}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] md:text-xs opacity-60 tracking-wider font-semibold">
                [{spec.specId}]
              </span>
              <span className="font-mono text-xs md:text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                ↗
              </span>
            </div>
            <p className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase mt-6">
              {spec.title}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Marquee (Absolute bottom, w-full, border-t, border-b) */}
      <div className="absolute bottom-0 left-0 w-full border-t border-b border-[#333333] bg-black overflow-hidden py-3 select-none z-20">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs tracking-widest uppercase flex items-center text-neutral-300">
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
          <span className="px-4">PYTHON • WEB AUTOMATION • SCRIPTING TOOLS • DATA EXTRACTION •</span>
        </div>
      </div>
    </section>
  );
};
