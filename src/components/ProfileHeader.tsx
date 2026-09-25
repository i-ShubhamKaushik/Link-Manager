import { BidsetuLogo } from './BidsetuLogo';
import { ECOSYSTEM_CONFIG } from '../config/links';
import { CheckCircle2, QrCode } from 'lucide-react';

interface ProfileHeaderProps {
  onOpenShareModal?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onOpenShareModal }) => {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-6 px-4">
      {/* BIDSETU Logo */}
      <div className="mb-4">
        <BidsetuLogo className="w-20 h-20 sm:w-24 sm:h-24" size={96} />
      </div>

      {/* Brand Title with Verified Badge */}
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {ECOSYSTEM_CONFIG.organizationName}
        </h1>
        {ECOSYSTEM_CONFIG.verified && (
          <span className="inline-flex items-center text-blue-600 dark:text-blue-400" title="Official Ecosystem Profile">
            <CheckCircle2 className="w-5 h-5 fill-blue-600/10 dark:fill-blue-400/10" />
          </span>
        )}
      </div>

      {/* Handle */}
      <div className="mb-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {ECOSYSTEM_CONFIG.handle}
        </span>
      </div>

      {/* Tagline / Ecosystem Description */}
      <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
        {ECOSYSTEM_CONFIG.tagline}
      </p>

      {/* Subtle Public Hub Status Pill & Action Tools */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Official Public Directory</span>
        </div>

        {onOpenShareModal && (
          <button
            onClick={onOpenShareModal}
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Share Profile / QR Code"
            aria-label="Share Profile"
          >
            <QrCode className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};
