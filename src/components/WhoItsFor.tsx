import React from 'react';
import { WHO_ITS_FOR_ITEMS, WORKSHOP_CONFIG } from '../data/workshopData';
import { Check, Sparkles } from 'lucide-react';

interface WhoItsForProps {
  onRegisterClick: () => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onRegisterClick }) => {
  return (
    <section id="who" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4 [text-wrap:balance]">
            Who is it for?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Volunteering 101 is open to students, young professionals, parents, retirees and curious learners. If you've ever wanted to help but weren't sure how, this is for you.
          </p>
        </div>

        {/* 2-Column Split: Checklist + Side Sticky Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D] mb-6">
              Volunteering 101 is for people who…
            </h3>

            <div className="space-y-4 mb-8">
              {WHO_ITS_FOR_ITEMS.map((item) => (
                <div 
                  key={item}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-[#ff821e]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFF0E5] text-[#ff821e] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-base text-slate-800 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={WORKSHOP_CONFIG.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer group"
            >
              <span>Register my interest</span>
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right: Side Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Masking tape on top */}
            <div className="absolute -top-3.5 left-1/3 w-32 h-6 tape-strip rotate-[-3deg] z-20 pointer-events-none" />

            {/* Post-it / Sticky Style Card */}
            <div className="bg-[#FFF9E6] border border-[#FFB703]/40 p-8 rounded-3xl shadow-md rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#FFB703]" />
                <h3 className="text-2xl font-black text-[#0B1B3D] tracking-tight">
                  No Experience Needed!
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                  <span className="text-base font-bold text-[#0B1B3D]">Open to anyone aged 18+.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ff821e]" />
                  <span className="text-base font-bold text-[#0B1B3D]">No need to have volunteered before.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFB703]" />
                  <span className="text-base font-bold text-[#0B1B3D]">Just bring your curiosity.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
