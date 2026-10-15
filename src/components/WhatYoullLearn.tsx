import React from 'react';
import { LEARNING_OUTCOMES } from '../data/workshopData';
import { Eye, MessageSquare, Compass, Sparkles } from 'lucide-react';

export const WhatYoullLearn: React.FC = () => {
  const icons = [
    <Eye className="w-5 h-5 text-[#FFB703]" key="eye" />,
    <MessageSquare className="w-5 h-5 text-[#ff821e]" key="message" />,
    <Compass className="w-5 h-5 text-[#FF6B35]" key="compass" />,
    <Sparkles className="w-5 h-5 text-emerald-600" key="sparkles" />,
  ];

  return (
    <section id="learn" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff821e] block mb-2">
            Practical Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4 [text-wrap:balance]">
            What you'll walk away with
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Volunteering is more than good intentions. Here are the four foundational capabilities you will practice during the 2-hour session.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LEARNING_OUTCOMES.map((item, idx) => (
            <div
              key={item.number}
              className="relative p-7 sm:p-8 rounded-2xl border border-slate-200 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-all text-left shadow-xs hover:shadow-sm"
            >
              {/* Tape strip on top */}
              <div 
                className={`absolute -top-3 left-8 w-20 h-5 tape-strip rotate-[${idx % 2 === 0 ? '-1.5deg' : '1.5deg'}] opacity-80 pointer-events-none`} 
              />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                  {icons[idx]}
                </div>
                <span className="text-2xl font-black text-slate-300 tabular-nums">
                  {item.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1B3D] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {item.body}
              </p>

              {/* Hand-drawn note without pencil icon */}
              <div className="pt-3 border-t border-slate-200/60">
                <span className="handwritten text-lg text-[#E76F51] font-bold">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
