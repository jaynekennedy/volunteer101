import React from 'react';
import { WORKSHOP_TIMELINE, WORKSHOP_CONFIG } from '../data/workshopData';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

export const InsideWorkshop: React.FC = () => {
  return (
    <section id="workshop" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff821e] block mb-2">
            The 2-Hour Itinerary
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4 [text-wrap:balance]">
            Inside the workshop
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-4">
            Learn by doing. You'll work in small groups, try short activities and share what you learnt. Nothing to prepare.
          </p>

          {/* Practical Venue & Timing Reminder with Maps link */}
          <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 bg-white/80 px-4 py-2 rounded-xl border border-slate-200">
            <span className="flex items-center gap-1.5 font-semibold text-slate-900">
              <Calendar className="w-4 h-4 text-[#ff821e]" />
              {WORKSHOP_CONFIG.date}
            </span>
            <span className="text-slate-300">·</span>
            
            {/* Location with Google Maps link */}
            <a
              href={WORKSHOP_CONFIG.locationMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-800 hover:text-[#ff821e] underline underline-offset-2 transition-colors font-medium group"
              title="Open location in Google Maps"
            >
              <MapPin className="w-4 h-4 text-[#FF6B35]" />
              <span>{WORKSHOP_CONFIG.location}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#ff821e]" />
            </a>

            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              {WORKSHOP_CONFIG.time}
            </span>
          </div>
        </div>

        {/* Content Split: Timeline + Workshop Atmosphere Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left: Agenda Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {WORKSHOP_TIMELINE.map((item, index) => (
              <div 
                key={item.time}
                className="bg-white border border-slate-200/90 hover:border-[#ff821e]/50 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow transition-all group relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#ff821e] bg-[#FFF0E5] px-2.5 py-1 rounded-md tabular-nums">
                      {item.time}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-[#ff821e] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-500 sm:text-right shrink-0">
                    {item.duration}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed sm:pl-16">
                  {item.description}
                </p>

                {index < WORKSHOP_TIMELINE.length - 1 && (
                  <div 
                    aria-hidden="true" 
                    className="hidden sm:block absolute left-8 -bottom-4 w-0.5 h-4 bg-slate-200" 
                  />
                )}
              </div>
            ))}

            {/* Schedule note */}
            <p className="text-xs text-slate-500 italic pt-2 sm:pl-2">
              *Schedules are subject to change. Bathroom breaks, refreshment breaks are free and easy.
            </p>
          </div>

          {/* Right: Authentic Workshop Photo Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200/80 rotate-[1deg] hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-3.5 left-1/3 w-28 h-6 tape-coral rotate-[-2deg] z-20 pointer-events-none" />

              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/workshop_circle_group_1791961732169.jpg"
                  alt="Malaysian community members engaged in an informal circle discussion with notebooks and post-it notes"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
