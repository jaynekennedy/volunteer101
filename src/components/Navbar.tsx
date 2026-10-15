import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { EpicLogo } from './EpicLogo';
import { WORKSHOP_CONFIG } from '../data/workshopData';

interface NavbarProps {
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about', hash?: string) => void;
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onRegisterClick 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about', hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  return (
    <header className="sticky top-10 sm:top-11 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#2B2D42]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (links to https://www.epic.my) */}
        <a 
          href="https://www.epic.my"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-[#0B1B3D] whitespace-nowrap shrink-0 group hover:opacity-90 transition-opacity"
          title="Visit EPIC (epic.my)"
        >
          <EpicLogo className="w-7 h-7 transition-transform group-hover:scale-105" />
          <span>Volunteering 101 <span className="font-normal text-slate-500 text-sm sm:text-base">by EPIC</span></span>
        </a>

        {/* Zone 2: Nav Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2B2D42]">
          <button
            onClick={() => handleNavClick('home', '#workshop')}
            className={`hover:text-[#ff821e] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              currentPage === 'home' ? '' : 'text-slate-600'
            }`}
          >
            The Workshop
          </button>
          
          <button
            onClick={() => handleNavClick('home', '#learn')}
            className="hover:text-[#ff821e] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer text-slate-600"
          >
            What You'll Learn
          </button>

          <button
            onClick={() => handleNavClick('home', '#who')}
            className="hover:text-[#ff821e] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer text-slate-600"
          >
            Who It's For
          </button>

          {/* Button in nav bar for Who We Are: EPIC */}
          <button
            onClick={() => handleNavClick('about')}
            className={`font-semibold transition-colors whitespace-nowrap shrink-0 py-1 px-2.5 rounded-lg cursor-pointer ${
              currentPage === 'about'
                ? 'bg-[#FFF0E5] text-[#ff821e]'
                : 'text-[#0B1B3D] hover:text-[#ff821e] hover:bg-slate-100/70'
            }`}
          >
            Who We Are: EPIC
          </button>

          <button
            onClick={() => handleNavClick('home', '#faq')}
            className="hover:text-[#ff821e] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer text-slate-600"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={WORKSHOP_CONFIG.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Register my interest</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2B2D42] hover:text-[#ff821e] rounded-lg transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-[#FAF8F5] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#0B1B3D]">
            <button
              onClick={() => handleNavClick('home', '#workshop')}
              className="py-1 text-left hover:text-[#ff821e] border-b border-slate-100 transition-colors cursor-pointer"
            >
              The Workshop
            </button>
            <button
              onClick={() => handleNavClick('home', '#learn')}
              className="py-1 text-left hover:text-[#ff821e] border-b border-slate-100 transition-colors cursor-pointer"
            >
              What You'll Learn
            </button>
            <button
              onClick={() => handleNavClick('home', '#who')}
              className="py-1 text-left hover:text-[#ff821e] border-b border-slate-100 transition-colors cursor-pointer"
            >
              Who It's For
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="py-1 text-left text-[#ff821e] hover:text-[#e66f12] font-bold border-b border-slate-100 transition-colors cursor-pointer"
            >
              Who We Are: EPIC →
            </button>
            <button
              onClick={() => handleNavClick('home', '#faq')}
              className="py-1 text-left hover:text-[#ff821e] border-b border-slate-100 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            
            <div className="pt-2">
              <a
                href={WORKSHOP_CONFIG.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#ff821e] active:bg-[#e66f12] rounded-xl shadow block cursor-pointer"
              >
                Register my interest →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
