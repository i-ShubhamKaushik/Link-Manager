import { ECOSYSTEM_LINKS } from '../config/links';
import { LinkCard } from './LinkCard';

export const LinkList: React.FC = () => {
  return (
    <main className="w-full max-w-[580px] mx-auto px-4 py-2 flex flex-col gap-3.5 sm:gap-4">
      {ECOSYSTEM_LINKS.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </main>
  );
};
