import React from 'react';
import { WORKSHOP_CONFIG } from '../data/workshopData';
import { MapPin } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Workshop announcement"
      className="sticky top-0 z-50 bg-[#0B1B3D] text-white border-b border-[#132B52] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 sm:h-11 flex items-center justify-between sm:justify-start gap-3 text-xs sm:text-sm font-medium">
        {/* Badge: 2 hours · Limited Seats · Free · */}
        <span className="shrink-0 bg-[#FFB703] text-[#0B1B3D] font-bold px-2.5 py-0.5 rounded text-[11px] tracking-wide uppercase">
          {WORKSHOP_CONFIG.badge}
        </span>

        {/* Text with link to PARC, Taman Subang Ria */}
        <div className="flex items-center gap-1.5 text-slate-200 truncate">
          <span>22nd October 2026 •</span>
          <a
            href={WORKSHOP_CONFIG.locationMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff821e] underline underline-offset-2 inline-flex items-center gap-1 font-semibold transition-colors truncate"
            title="Open in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-[#ff821e] shrink-0" />
            <span>PARC, Taman Subang Ria</span>
          </a>
          <span className="hidden sm:inline">• 6:30pm–8:30pm</span>
        </div>
      </div>
    </aside>
  );
};
