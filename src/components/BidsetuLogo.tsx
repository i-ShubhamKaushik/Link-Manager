interface BidsetuLogoProps {
  className?: string;
  size?: number;
}

export const BidsetuLogo: React.FC<BidsetuLogoProps> = ({ className = "w-20 h-20", size = 80 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer Glow / Ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-amber-500 opacity-20 blur-md dark:opacity-30"></div>
      
      {/* Container Card */}
      <div className="relative w-full h-full rounded-2xl bg-slate-900 p-3 shadow-xl border border-slate-700/80 flex items-center justify-center overflow-hidden">
        {/* Subtle background grid pattern inside logo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px]"></div>
        
        {/* Vector Emblem */}
        <svg
          width={size * 0.65}
          height={size * 0.65}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Bridge Arch (Setu) */}
          <path
            d="M15 72C15 72 32 32 50 32C68 32 85 72 85 72"
            stroke="url(#setu-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Base Foundation Line */}
          <line
            x1="12"
            y1="78"
            x2="88"
            y2="78"
            stroke="#475569"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Central Apex Node - Saffron Accent */}
          <circle cx="50" cy="32" r="7" fill="#F97316" className="animate-pulse" />
          
          {/* Side Digital Pillar Nodes */}
          <circle cx="33" cy="53" r="4.5" fill="#38BDF8" />
          <circle cx="67" cy="53" r="4.5" fill="#38BDF8" />

          {/* Cable / Data Stay Lines */}
          <line x1="50" y1="39" x2="50" y2="78" stroke="#38BDF8" strokeWidth="3" strokeDasharray="3 3" opacity="0.9" />
          <line x1="50" y1="39" x2="33" y2="78" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="50" y1="39" x2="67" y2="78" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

          {/* Gradients */}
          <defs>
            <linearGradient id="setu-gradient" x1="15" y1="32" x2="85" y2="72" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.6" stopColor="#60A5FA" />
              <stop offset="1" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
