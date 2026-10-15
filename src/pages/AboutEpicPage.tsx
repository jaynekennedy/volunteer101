import React from 'react';
import { 
  RECOGNITION_AWARDS, 
  MEDIA_FEATURES,
  WORKSHOP_CONFIG,
  FACILITATORS
} from '../data/workshopData';
import { Award, ExternalLink, Heart, ShieldCheck, ArrowLeft, Users, Sparkles, MapPin } from 'lucide-react';

interface AboutEpicPageProps {
  onBackToHome: () => void;
  onRegisterClick: () => void;
}

export const AboutEpicPage: React.FC<AboutEpicPageProps> = ({ 
  onBackToHome, 
  onRegisterClick 
}) => {
  return (
    <div className="py-12 sm:py-20 bg-[#0B1B3D] text-white min-h-[85vh] relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff821e]/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Navigation back breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#ff821e] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Volunteering 101 Workshop</span>
          </button>
        </div>

        {/* Header & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-7">
            {/* Badge */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff821e] block mb-3">
              Who's behind this?
            </span>
            
            {/* Headline H2 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 [text-wrap:balance]">
              Meet EPIC: Extraordinary People Impacting Communities
            </h1>
            
            {/* Body copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              EPIC is a multiple award-winning Malaysian social enterprise, founded in 2010. We bring people from all walks of life together, across the urban-rural divide, to build stronger, more resilient communities. We started with one question: <span className="text-[#FFB703] font-semibold italic">what if ordinary people could help build a home for a family who needed one?</span> We’re looking to build a community of volunteers with a wide range of skills and experiences - from conversational community mappers to practical, hands-on builders.
            </p>

            {/* Why join box */}
            <div className="mt-8 p-6 bg-[#132B52]/80 border border-slate-700/80 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#FF6B35]" />
                <span>Why join us?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Because real change happens when people come together, not just to give, but to learn and walk alongside each other. Our volunteers often arrive as strangers to the communities they serve and leave as lifelong friends.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://www.epic.my/who-we-are"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff821e] hover:text-[#FFF0E5] transition-colors group"
              >
                <span>Learn more about EPIC</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right: Authentic Malaysian Build Photo */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/5 p-3 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xs">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
                <img
                  src="/src/assets/images/epic_home_building_1791961732217.jpg"
                  alt="Team EPIC & Kg Kerawat, Kabag & Kamyen celebrating their achievements"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 px-2 text-xs text-slate-300">
                <p className="font-medium text-slate-200">
                  Team EPIC &amp; Kg Kerawat, Kabag &amp; Kamyen celebrating their achievements.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Credibility strip: Recognised by */}
        <div className="mb-14 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#FFB703]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recognised by
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 max-w-3xl">
            {RECOGNITION_AWARDS.map((award) => (
              <div key={award} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#132B52]/50 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#ff821e] shrink-0 mt-0.5" />
                <span className="font-medium text-slate-200">{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured on strip */}
        <div className="mb-16 pt-8 border-t border-slate-800/80">
          <span className="block font-bold uppercase tracking-wider text-xs text-slate-400 mb-4">
            As featured in
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300 font-semibold">
            {MEDIA_FEATURES.map((media, idx) => (
              <React.Fragment key={media}>
                <span className="hover:text-white transition-colors">{media}</span>
                {idx < MEDIA_FEATURES.length - 1 && <span className="text-slate-600">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Add section: Meet the Facilitators */}
        <div className="pt-12 border-t border-slate-800" id="facilitators">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-[#ff821e]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Meet the Facilitators
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl mb-8">
            Our facilitators are experienced community practitioners from EPIC who have walked alongside communities in Selangor and across Malaysia.
          </p>

          {/* Facilitators list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mb-12">
            {FACILITATORS.map((facilitator) => (
              <div 
                key={facilitator.name}
                className="bg-[#132B52]/60 border border-slate-700/70 hover:border-[#ff821e]/50 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all shadow-md group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-[#0B1B3D] border-2 border-[#ff821e]/30 mb-4 shadow-md group-hover:border-[#ff821e] transition-colors">
                  <img
                    src={facilitator.image}
                    alt={facilitator.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
                  {facilitator.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#ff821e]">
                  {facilitator.role}
                </p>
              </div>
            ))}
          </div>

          {/* Registration banner with Maps link */}
          <div className="p-8 bg-[#132B52] border border-[#ff821e]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Join us on 22nd October 2026
              </h3>
              <div className="text-sm text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1">
                <a
                  href={WORKSHOP_CONFIG.locationMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff821e] underline underline-offset-2 inline-flex items-center gap-1 font-medium transition-colors"
                  title="View on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#FF6B35]" />
                  <span>{WORKSHOP_CONFIG.location}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <span>· Registration 6.30pm, Workshop 7:00pm–8:30pm</span>
              </div>
            </div>
            <a
              href={WORKSHOP_CONFIG.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Register my interest →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
