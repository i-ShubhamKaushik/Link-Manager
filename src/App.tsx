import { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkList } from './components/LinkList';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { ShareModal } from './components/ShareModal';

export function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 bg-grid-pattern flex flex-col justify-between items-center overflow-x-hidden transition-colors duration-300">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-blue-500/10 via-sky-400/5 to-transparent blur-3xl dark:from-blue-600/15 dark:via-sky-500/5"></div>
      <div className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-amber-500/5 blur-3xl rounded-full dark:bg-amber-500/10"></div>

      {/* Floating Theme Switcher */}
      <ThemeToggle />

      {/* Main Page Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between max-w-2xl mx-auto">
        <div>
          {/* Compact Profile Header */}
          <ProfileHeader onOpenShareModal={() => setIsShareOpen(true)} />

          {/* Interactive Ecosystem Link Cards */}
          <LinkList />
        </div>

        {/* Minimal Footer */}
        <Footer />
      </div>

      {/* Share / QR Code Modal */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}

export default App;
