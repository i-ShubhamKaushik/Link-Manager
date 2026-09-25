import type { EcosystemLink } from '../config/links';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  link: EcosystemLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const IconComponent = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
      aria-label={`${link.name} - ${link.description} (opens in new tab)`}
    >
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

      {/* Left section: Icon + Text info */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2 relative z-10">
        {/* Product Icon Box */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-200">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
              {link.name}
            </h2>
            {link.badge && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {link.badge}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-1 leading-snug font-normal mt-0.5">
            {link.description}
          </p>
        </div>
      </div>

      {/* Right section: Action indicator button */}
      <div className="flex-shrink-0 flex items-center gap-1 pl-2 relative z-10">
        <span className="hidden sm:inline text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {link.buttonText}
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>
    </a>
  );
};
