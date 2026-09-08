import React from 'react';

interface FooterProps {
  onCopyText: (text: string, label: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyText }) => {
  const email = 'bhavishkulal777@gmail.com';
  const github = 'https://github.com/bhavishkulal';
  const linkedin = 'https://linkedin.com/in/bhavish-bellare-666417320';

  return (
    <footer id="contact" className="w-full bg-black">
      {/* Top half of footer: The word "AUTOMATE." filling screen width */}
      <div className="border-b border-[#333333] px-4 md:px-6 py-12 md:py-20 text-center select-none overflow-hidden group hover:bg-[#060606] transition-colors">
        <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-4 text-left md:text-center">
          // END TRANSMISSION
        </div>
        <h2
          className="text-[17vw] md:text-[15vw] font-black tracking-tighter leading-none uppercase text-[#F3F4F6] text-center w-full block transition-transform group-hover:scale-[1.01] duration-300 select-none"
          style={{ letterSpacing: '-0.07em' }}
        >
          AUTOMATE.
        </h2>
      </div>

      {/* Bottom half: 3 grid columns with hover invert */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Link 1: Email */}
        <div
          onClick={() => {
            onCopyText(email, 'EMAIL ADDRESS');
            window.location.href = `mailto:${email}`;
          }}
          className="p-6 md:p-8 text-center font-mono text-xs md:text-sm border-b md:border-b-0 border-r-0 md:border-r border-[#333333] hover:bg-white hover:text-black transition-colors duration-150 block truncate cursor-pointer group"
          id="footer-email-link"
          title="Click to copy & email"
        >
          <span className="block opacity-50 text-[10px] uppercase mb-1 tracking-wider">
            01 // EMAIL
          </span>
          <span className="font-medium group-hover:underline underline-offset-4">
            {email}
          </span>
        </div>

        {/* Link 2: GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 md:p-8 text-center font-mono text-xs md:text-sm border-b md:border-b-0 border-r-0 md:border-r border-[#333333] hover:bg-white hover:text-black transition-colors duration-150 block group"
          id="footer-github-link"
        >
          <span className="block opacity-50 text-[10px] uppercase mb-1 tracking-wider">
            02 // GITHUB
          </span>
          <span className="font-medium group-hover:underline underline-offset-4">
            github.com/bhavishkulal ↗
          </span>
        </a>

        {/* Link 3: LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 md:p-8 text-center font-mono text-xs md:text-sm border-[#333333] hover:bg-white hover:text-black transition-colors duration-150 block truncate group"
          id="footer-linkedin-link"
        >
          <span className="block opacity-50 text-[10px] uppercase mb-1 tracking-wider">
            03 // LINKEDIN
          </span>
          <span className="font-medium group-hover:underline underline-offset-4">
            linkedin.com/in/bhavish-bellare... ↗
          </span>
        </a>
      </div>

      {/* Micro Copyright Strip */}
      <div className="p-4 sm:p-5 border-t border-[#333333] font-mono text-[10px] text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>BHAVISH // PORTFOLIO EXPERIMENTAL INTERFACE</span>
        <span>BRUTALIST ARCHITECTURE • ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};
