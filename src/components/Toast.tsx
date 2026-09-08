import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-white text-black font-mono text-xs px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
        <span className="w-2 h-2 bg-emerald-600 inline-block"></span>
        <span className="font-bold tracking-tight">{message}</span>
      </div>
    </div>
  );
};
