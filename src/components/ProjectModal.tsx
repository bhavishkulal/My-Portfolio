import React from 'react';
import { Project, SpecBlock } from '../types';

interface ProjectModalProps {
  project: Project | null;
  spec: SpecBlock | null;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  spec,
  onClose,
  onCopyText,
}) => {
  if (!project && !spec) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-black border-2 border-white text-[#F3F4F6] p-6 sm:p-8 font-mono shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="project-spec-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="w-2 h-2 bg-emerald-400 inline-block"></span>
            <span>
              {project ? `SYS.INSPECT // ${project.num}` : `SYS.SPEC // ${spec?.specId}`}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-2.5 py-1 border border-[#333333] hover:bg-white hover:text-black transition-colors text-xs uppercase"
            id="modal-close-btn"
          >
            [ESC / CLOSE]
          </button>
        </div>

        {/* Project View */}
        {project && (
          <div>
            <div className="text-xs text-neutral-400 mb-1">{project.num} ENGINE ARCHITECTURE</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs border border-[#333333] bg-neutral-900 text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-sm">
              <div className="border-l-2 border-white pl-4 py-1">
                <span className="text-xs text-neutral-400 block mb-1 uppercase tracking-wider">
                  Operational Summary
                </span>
                <p className="text-neutral-200 leading-relaxed">{project.summary}</p>
              </div>

              <div className="bg-[#0c0c0c] border border-[#262626] p-4">
                <span className="text-xs text-neutral-400 block mb-2 uppercase tracking-wider">
                  Hardware &amp; Pipeline Stack
                </span>
                <p className="text-emerald-400 text-xs sm:text-sm font-mono">
                  {project.architecture}
                </p>
              </div>

              <div>
                <span className="text-xs text-neutral-400 block mb-3 uppercase tracking-wider">
                  Core Engineering Capabilities
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 shrink-0 select-none">▶</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#333333] flex flex-wrap items-center justify-between gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <span>SOURCE REPOSITORY</span>
                  <span>↗</span>
                </a>
              )}
              <button
                onClick={() => onCopyText(project.architecture, 'ARCHITECTURE SPEC')}
                className="px-4 py-2 border border-[#333333] hover:bg-white hover:text-black transition-colors text-xs uppercase"
              >
                COPY PIPELINE SPEC
              </button>
            </div>
          </div>
        )}

        {/* Spec View */}
        {spec && !project && (
          <div>
            <div className="text-xs text-neutral-400 mb-1">[{spec.specId}] DISCIPLINE PROFILE</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-4">
              {spec.title}
            </h2>

            <div className="mb-6">
              <span className="px-2.5 py-1 text-xs border border-emerald-500/50 text-emerald-400 bg-emerald-950/30">
                {spec.badge}
              </span>
            </div>

            <p className="text-base text-neutral-200 leading-relaxed mb-6 font-sans">
              {spec.desc}
            </p>

            <div className="border border-[#262626] bg-[#0c0c0c] p-4 text-xs text-neutral-400 space-y-2">
              <div className="flex justify-between">
                <span>LOCATION STATUS:</span>
                <span className="text-white">Bangalore, IN</span>
              </div>
              <div className="flex justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-emerald-400">OPEN FOR AUTOMATION &amp; DEV ROLES</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#333333] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white text-black font-bold text-xs uppercase hover:bg-neutral-200 transition-colors"
              >
                ACKNOWLEDGE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
