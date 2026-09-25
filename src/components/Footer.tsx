import { ECOSYSTEM_CONFIG } from '../config/links';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[580px] mx-auto px-4 pt-10 pb-12 text-center text-xs text-slate-600 dark:text-slate-400">
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
          {ECOSYSTEM_CONFIG.organizationName}
        </span>
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          {ECOSYSTEM_CONFIG.tagline}
        </p>
        <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400 font-normal">
          &copy; {ECOSYSTEM_CONFIG.copyrightYear} {ECOSYSTEM_CONFIG.organizationName}. All public links verified.
        </p>
      </div>
    </footer>
  );
};
