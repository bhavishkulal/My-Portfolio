import React from 'react';
import { TECH_STACK } from '../data/portfolioData';

interface PhilosophyStackProps {
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export const PhilosophyStack: React.FC<PhilosophyStackProps> = ({
  selectedTag,
  onSelectTag,
}) => {
  return (
    <section className="border-b border-[#333333]" id="philosophy-stack">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Tile (About / Philosophy) */}
        <div className="p-6 sm:p-8 md:p-14 border-b md:border-b-0 md:border-r border-[#333333] flex flex-col justify-between relative bg-black group hover:bg-[#060606] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                // 02 — PHILOSOPHY
              </span>
              <span className="font-mono text-xs px-2 py-0.5 border border-[#333333] text-neutral-400">
                STATEMENT
              </span>
            </div>

            <div
              className="text-[4.5rem] md:text-[6.5rem] leading-none font-serif text-neutral-800 select-none -mb-6 md:-mb-8"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug text-white">
              Enthusiastic about creating functional projects using APIs, browser automation, and
              data extraction to automate repetitive tasks and explore new technologies.
            </p>
          </div>

          <div className="pt-8 md:pt-10 flex items-center justify-between font-mono text-xs text-neutral-400 border-t border-[#333333] mt-8 md:mt-10">
            <span>BHAVISH // PERSONAL PERSPECTIVE</span>
            <span>EST. 2024</span>
          </div>
        </div>

        {/* Right Tile (Tech Stack / Capabilities) */}
        <div className="p-6 sm:p-8 md:p-14 flex flex-col justify-between bg-black" id="capabilities">
          <div>
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                // 03 — CAPABILITIES
              </span>
              <span className="font-mono text-xs px-2 py-0.5 border border-[#333333] text-neutral-400">
                TECH_STACK
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-6 md:mb-8 text-white">
              CORE ARSENAL &amp; FRAMEWORKS
            </h3>

            {/* Cloud of pill-shaped tags */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {TECH_STACK.map((tech) => {
                const isSelected = selectedTag === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => {
                      onSelectTag(isSelected ? null : tech);
                    }}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-mono tracking-tight transition-colors duration-150 cursor-pointer select-none ${
                      isSelected
                        ? 'bg-white text-black border-white ring-2 ring-white/40'
                        : 'border-[#333333] bg-transparent text-[#F3F4F6] hover:bg-white hover:text-black'
                    }`}
                    title={isSelected ? 'Click to deselect filter' : `Filter projects using ${tech}`}
                    id={`tech-pill-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {tech}
                    {isSelected && <span className="ml-1.5 text-xs opacity-70">✕</span>}
                  </button>
                );
              })}
            </div>

            {selectedTag && (
              <div className="mt-4 flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-400">
                  Filter active: {selectedTag}
                </span>
                <button
                  onClick={() => onSelectTag(null)}
                  className="font-mono text-[10px] uppercase text-neutral-400 underline hover:text-white"
                >
                  [Clear Filter]
                </button>
              </div>
            )}
          </div>

          <div className="pt-8 md:pt-10 font-mono text-xs text-neutral-400 border-t border-[#333333] mt-8 md:mt-10 flex justify-between">
            <span>INDEX: {TECH_STACK.length} TOOLS</span>
            <span className="text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              SYSTEM READY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
