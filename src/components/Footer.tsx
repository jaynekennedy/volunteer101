import React from 'react';
import { ArrowUp } from 'lucide-react';
import { EpicLogo } from './EpicLogo';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "The Workshop", page: 'home' as const, hash: "#workshop" },
    { label: "What You'll Learn", page: 'home' as const, hash: "#learn" },
    { label: "Who It's For", page: 'home' as const, hash: "#who" },
    { label: "Who We Are: EPIC", page: 'about' as const },
    { label: "FAQ", page: 'home' as const, hash: "#faq" },
  ];

  return (
    <footer className="bg-[#FAF8F5] border-t border-slate-200/90 text-slate-700 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand lockup & statement (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <a 
              href="https://www.epic.my" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#0B1B3D]"
            >
              <EpicLogo className="w-7 h-7" />
              <span>Volunteering 101 <span className="font-normal text-slate-500">by EPIC</span></span>
            </a>
            
            {/* Link EPIC to https://www.epic.my */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              A free, interactive introduction to volunteering for anyone who wants to give back. Learn the basics, then put them into action with real volunteering missions. Brought to you by{' '}
              <a 
                href="https://www.epic.my" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-[#ff821e] hover:underline"
              >
                EPIC
              </a>.
            </p>

            {/* have questions? */}
            <div className="pt-2">
              <p className="text-xs text-slate-600">
                <span className="font-medium">have questions? </span>
                <a href="mailto:info@epic.my" className="text-[#ff821e] font-bold hover:underline">
                  info@epic.my
                </a>
              </p>
            </div>
          </div>

          {/* Nav links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate(link.page, link.hash);
                      }
                    }}
                    className="text-slate-600 hover:text-[#ff821e] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top (2 cols) */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#0B1B3D] hover:text-[#ff821e] hover:border-[#ff821e] transition-all shadow-2xs cursor-pointer group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Legal information */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © 2026 Volunteering 101 by EPIC. Built for people who care.
          </p>
          <p className="font-mono text-xs text-slate-600 font-medium">
            Epic Society PPM-014-10-28112013
          </p>
        </div>

      </div>
    </footer>
  );
};
