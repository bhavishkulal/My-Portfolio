import React from 'react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  selectedTag: string | null;
  onSelectProject: (project: Project) => void;
  onClearFilter: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedTag,
  onSelectProject,
  onClearFilter,
}) => {
  return (
    <section className="border-b border-[#333333]" id="projects">
      {/* Section Header */}
      <div className="p-4 sm:p-6 md:px-12 py-5 sm:py-6 border-b border-[#333333] flex flex-wrap items-center justify-between gap-3 bg-black">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            // 05 — PROTOTYPES &amp; ENGINES
          </span>
          {selectedTag && (
            <span className="font-mono text-xs px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-white flex items-center gap-1.5">
              <span>FILTER: {selectedTag}</span>
              <button
                onClick={onClearFilter}
                className="hover:text-red-400 cursor-pointer ml-1"
                title="Clear filter"
              >
                ✕
              </button>
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
          [CLICK OR HOVER TO INSPECT SYSTEM]
        </span>
      </div>

      {/* Project Rows Container */}
      <div className="divide-y divide-[#333333] bg-black">
        {projects.length === 0 ? (
          <div className="p-12 text-center font-mono text-sm text-neutral-500">
            NO PROJECTS MATCHED FILTER [{selectedTag}].
            <button
              onClick={onClearFilter}
              className="ml-3 underline text-white hover:text-neutral-300"
            >
              RESET FILTER
            </button>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="project-row p-6 md:px-12 py-8 cursor-pointer select-none group bg-black hover:bg-white hover:text-black transition-colors duration-150 relative"
              id={`project-row-${project.id}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm opacity-50 font-semibold shrink-0">
                    {project.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#F3F4F6] group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag px-2.5 py-1 text-xs font-mono border border-[#333333] text-neutral-300 group-hover:border-black group-hover:text-black group-hover:bg-black/5 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="project-arrow ml-1 sm:ml-2 font-mono text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">
                    ↗
                  </span>
                </div>
              </div>

              {/* Expandable summary visible on hover & click */}
              <div className="desc-container">
                <p className="text-sm sm:text-base font-mono border-t border-current pt-4 opacity-90 max-w-4xl text-inherit">
                  {project.summary}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs font-mono opacity-75">
                  <span>SPEC: {project.architecture}</span>
                  <span className="underline font-semibold ml-auto shrink-0">
                    [VIEW DEEP SPEC ↗]
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
