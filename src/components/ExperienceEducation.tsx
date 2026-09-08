import React from 'react';
import { ACADEMIC_RECORDS } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section className="border-b border-[#333333] py-12 md:py-16" id="practice-academic">
      <div className="w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Experience (Left/Main col-span-7) */}
        <div className="lg:col-span-7 pr-0 lg:pr-8">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-4">
            // 04 — APPLIED PRACTICE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-3">
            KGE TECHNOLOGIES
          </h2>
          <div className="font-mono text-xs sm:text-sm uppercase text-neutral-400 tracking-wider mb-6 flex flex-wrap items-center gap-3">
            <span className="px-2 py-0.5 border border-[#333333] text-white bg-black">INTERNSHIP</span>
            <span className="text-neutral-300">PYTHON AUTOMATION INTERN</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed border-l-2 border-[#333333] pl-5 sm:pl-6 py-1">
            Built and deployed automated browser workflows and custom API data pipelines,
            streamlining routine process execution and data handling reliability.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span className="px-2.5 py-1 border border-[#262626] bg-[#0c0c0c]">
              Selenium Architecture
            </span>
            <span className="px-2.5 py-1 border border-[#262626] bg-[#0c0c0c]">
              Data Pipelines
            </span>
            <span className="px-2.5 py-1 border border-[#262626] bg-[#0c0c0c]">
              Process Optimization
            </span>
          </div>
        </div>

        {/* Education List (Right col-span-5: Minimalist right-aligned flex column) */}
        <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#333333] pt-8 lg:pt-0 lg:pl-12">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-6 lg:mb-8">
            // ACADEMIC BACKGROUND
          </div>

          <div className="space-y-4 sm:space-y-5 w-full font-mono">
            {ACADEMIC_RECORDS.map((rec) => (
              <div
                key={rec.level}
                className="p-4 sm:p-5 border border-[#333333] bg-black hover:bg-white hover:text-black transition-colors duration-150 group cursor-default select-none"
                id={`academic-${rec.level.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <span className="text-[10px] sm:text-xs text-neutral-400 group-hover:text-neutral-600 uppercase tracking-widest block mb-1">
                  {rec.level}
                </span>
                <div className="text-sm sm:text-base font-bold text-[#F3F4F6] group-hover:text-black transition-colors">
                  {rec.degree}: {rec.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
