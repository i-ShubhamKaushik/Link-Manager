import { useState } from 'react';
import { X, Copy, Check, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { ECOSYSTEM_CONFIG } from '../config/links';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://onebuildsmanager.vercel.app/';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <QrCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Share {ECOSYSTEM_CONFIG.organizationName}
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
          Scan QR code or copy link to access the official hub
        </p>

        {/* QR Code Visual */}
        <div className="mb-5 flex justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <QRCodeSVG
              value={currentUrl}
              size={192}
              bgColor="#FFFFFF"
              fgColor="#0F172A"
              level="H"
              marginSize={1}
              imageSettings={{
                src: "/favicon.svg",
                x: undefined,
                y: undefined,
                height: 36,
                width: 36,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>
        </div>

        {/* URL Box & Copy */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent text-xs text-slate-700 dark:text-slate-300 font-mono focus:outline-none truncate px-1"
          />
          <button
            onClick={handleCopy}
            className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
