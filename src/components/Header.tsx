import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenConnect: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConnect }) => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const ist = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setTimeString(`${ist} IST`);
      } catch {
        setTimeString('10:27:00 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-[#333333] grid grid-cols-12 text-xs font-mono tracking-wider sticky top-0 bg-black/95 backdrop-blur z-40">
      <div className="col-span-12 sm:col-span-7 md:col-span-8 px-4 md:px-6 py-3.5 border-b sm:border-b-0 sm:border-r border-[#333333] flex items-center justify-between">
        <a
          href="#top"
          className="font-bold flex items-center gap-2 text-[#F3F4F6] hover:text-white transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight sm:tracking-wider">SYS.ONLINE // PORTFOLIO_V2.0</span>
        </a>
        <div className="flex items-center gap-3 text-neutral-400">
          <span className="hidden md:inline-block">LOC: BANGALORE, IN</span>
          {timeString && (
            <span className="hidden lg:inline-block border-l border-[#333333] pl-3 text-neutral-500">
              [{timeString}]
            </span>
          )}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-5 md:col-span-4 px-4 md:px-6 py-3.5 flex items-center justify-between">
        <span className="text-neutral-400 text-[11px] sm:text-xs">ROLE: DEV_AUTOMATION</span>
        <button
          onClick={onOpenConnect}
          className="hover:bg-white hover:text-black px-2.5 py-1 border border-[#333333] transition-colors uppercase font-mono text-[11px] sm:text-xs cursor-pointer active:scale-95"
          id="header-connect-btn"
        >
          CONNECT &rarr;
        </button>
      </div>
    </header>
  );
};
