import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophyStack } from './components/PhilosophyStack';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConnectModal } from './components/ConnectModal';
import { Toast } from './components/Toast';
import { PROJECTS } from './data/portfolioData';
import { Project, SpecBlock } from './types';

export default function App() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSpec, setActiveSpec] = useState<SpecBlock | null>(null);
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setToastMessage(`[COPIED TO CLIPBOARD: ${label}]`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return PROJECTS;
    return PROJECTS.filter((proj) =>
      proj.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
    );
  }, [selectedTag]);

  return (
    <div className="bg-black text-[#F3F4F6] min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Top Header / Status Bar */}
      <Header onOpenConnect={() => setIsConnectOpen(true)} />

      <main className="w-full">
        {/* Section 01: Hero & Specs & Marquee */}
        <Hero
          onSelectSpec={(spec) => {
            setActiveSpec(spec);
            setActiveProject(null);
          }}
        />

        {/* Section 02 & 03: Philosophy & Tech Stack */}
        <PhilosophyStack
          selectedTag={selectedTag}
          onSelectTag={(tag) => {
            setSelectedTag(tag);
            if (tag) {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Section 04: Applied Practice & Academic Background */}
        <ExperienceEducation />

        {/* Section 05: Prototypes & Engines */}
        <ProjectsSection
          projects={filteredProjects}
          selectedTag={selectedTag}
          onSelectProject={(proj) => {
            setActiveProject(proj);
            setActiveSpec(null);
          }}
          onClearFilter={() => setSelectedTag(null)}
        />

        {/* Section 06: Transmission & Contact Footer */}
        <Footer onCopyText={handleCopyText} />
      </main>

      {/* Deep Spec & Project Modal */}
      <ProjectModal
        project={activeProject}
        spec={activeSpec}
        onClose={() => {
          setActiveProject(null);
          setActiveSpec(null);
        }}
        onCopyText={handleCopyText}
      />

      {/* Direct Transmission / Connect Modal */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
        onCopyText={handleCopyText}
      />

      {/* Brutalist Action Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
