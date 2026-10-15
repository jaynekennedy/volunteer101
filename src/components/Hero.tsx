import React from 'react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { Calendar, MapPin, Clock, HeartHandshake, ExternalLink } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onSeeAgendaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onSeeAgendaClick }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden pattern-graph">
      {/* Subtle organic background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-1/4 w-96 h-96 bg-[#FFF0E5]/70 rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFB703]/10 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Headline H1 with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight font-extrabold text-[#0B1B3D] tracking-tight mb-6 [text-wrap:balance]">
              Want to volunteer and make a difference? Start by learning how to <span className="relative inline-block text-[#ff821e]">show up well
                <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FFB703] -z-10 overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
              Volunteering 101 is a hands-on, 2-hour workshop on how to volunteer with empathy, respect and an open mind. Through short activities and open discussions, you'll learn how to build trust, listen well, and make an impact - wherever you choose to serve.
            </p>

            {/* Callout Card: Updated with *Refreshments & food provided at the venue! */}
            <div className="relative mb-8 w-full max-w-lg group">
              <div className="absolute -top-3.5 left-8 w-28 h-6 tape-strip rotate-[-2deg] z-10 pointer-events-none" />
              
              <div className="bg-[#FFF9E6] border border-[#F4A261]/30 p-5 rounded-xl shadow-sm rotate-[0.5deg] transition-transform duration-200 group-hover:rotate-0">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFB703]/30 flex items-center justify-center shrink-0 text-[#0B1B3D]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#E76F51] uppercase tracking-wider block mb-0.5">
                      Good to know
                    </span>
                    <p className="text-base font-bold text-[#0B1B3D] leading-snug">
                      No experience needed. Just curiosity and a willingness to listen.
                    </p>
                    <p className="text-sm font-semibold text-[#E76F51] mt-1.5 handwritten text-lg">
                      *Refreshments & food provided at the venue!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={WORKSHOP_CONFIG.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-base font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Register my interest</span>
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>

              <button
                onClick={onSeeAgendaClick}
                className="px-6 py-3.5 text-base font-semibold text-[#0B1B3D] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See Workshop Agenda ↓</span>
              </button>
            </div>

            {/* Event Specifics with Maps Link */}
            <div className="pt-6 border-t border-slate-200/90 w-full flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-700 bg-white/60 p-4 rounded-xl border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff821e] shrink-0" />
                <span className="font-bold text-slate-900">{WORKSHOP_CONFIG.date}</span>
              </div>
              
              {/* Linked location */}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <a
                  href={WORKSHOP_CONFIG.locationMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 hover:text-[#ff821e] underline underline-offset-2 transition-colors flex items-center gap-1 group"
                  title="View on Google Maps"
                >
                  <span>{WORKSHOP_CONFIG.location}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#ff821e]" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700">{WORKSHOP_CONFIG.time}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            <div className="absolute -top-3.5 right-12 w-32 h-7 tape-teal rotate-[3deg] z-20 pointer-events-none" />

            {/* Layered Card Container */}
            <div className="relative bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group">
                <a
                  href="https://sedunia.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer"
                  title="Explore missions on Sedunia (sedunia.me)"
                >
                  <img
                    src="/src/assets/images/hero_malaysian_community_1791961730579.jpg"
                    alt="Ordinary People, Real Impact - diverse Malaysian community volunteers in Subang Jaya"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>

              {/* Caption: Ordinary People, Real Impact, Over 3000 volunteers & 400+ Missions */}
              <div className="mt-3.5 px-2 py-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-700 border-t border-slate-100 pt-3">
                <span className="font-bold text-[#0B1B3D] text-sm sm:text-base">
                  Ordinary People, Real Impact
                </span>
                <a
                  href="https://sedunia.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer"
                  title="Explore missions on Sedunia (sedunia.me)"
                >
                  <span className="text-xs font-semibold text-[#ff821e] hover:text-white bg-[#FFF0E5] hover:bg-[#ff821e] px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1">
                    <span>Over 3000 volunteers & 400+ Missions</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
