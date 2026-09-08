import React, { useState } from 'react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [transmitted, setTransmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link or simulate immediate transmission
    const subject = encodeURIComponent(`Inquiry from ${senderName || 'Recruiter / Collaborator'}`);
    const body = encodeURIComponent(
      `Sender: ${senderName} (${senderEmail})\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:bhavishkulal777@gmail.com?subject=${subject}&body=${body}`;
    setTransmitted(true);
    setTimeout(() => {
      setTransmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-black border-2 border-white text-[#F3F4F6] p-6 sm:p-8 font-mono shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
        onClick={(e) => e.stopPropagation()}
        id="connect-modal"
      >
        <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="w-2 h-2 bg-emerald-400 inline-block animate-pulse"></span>
            <span>TRANSMISSION PROTOCOL // INITIALIZE</span>
          </div>
          <button
            onClick={onClose}
            className="px-2.5 py-1 border border-[#333333] hover:bg-white hover:text-black transition-colors text-xs uppercase"
          >
            [CLOSE]
          </button>
        </div>

        {transmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white uppercase">DISPATCH CONFIRMED</h3>
            <p className="text-xs text-neutral-400">
              Email client opened. Routing payload to bhavishkulal777@gmail.com
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-neutral-400 mb-1">
                // SENDER IDENTIFIER
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Name / Company"
                className="w-full bg-[#0d0d0d] border border-[#333333] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-neutral-400 mb-1">
                // RETURN EMAIL
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="contact@domain.com"
                className="w-full bg-[#0d0d0d] border border-[#333333] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-neutral-400 mb-1">
                // MESSAGE PAYLOAD
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project, opportunity, or automation inquiry..."
                className="w-full bg-[#0d0d0d] border border-[#333333] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onCopyText('bhavishkulal777@gmail.com', 'DIRECT EMAIL')}
                className="w-full sm:w-auto px-4 py-2 border border-[#333333] hover:bg-neutral-900 transition-colors text-xs text-neutral-300 uppercase"
              >
                COPY DIRECT EMAIL
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-bold text-xs uppercase hover:bg-neutral-200 transition-colors tracking-wider"
              >
                SEND TRANSMISSION &rarr;
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
