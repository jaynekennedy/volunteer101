import React, { useState } from 'react';
import { X, CheckCircle2, MapPin, Sparkles, Download, Copy, Check, Clock, ExternalLink } from 'lucide-react';
import { WORKSHOP_CONFIG } from '../data/workshopData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Subang Jaya',
    background: 'first-time',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [passNumber, setPassNumber] = useState('EPIC-101-8492');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setPassNumber(`EPIC-101-${randomDigits}`);
    setSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    // 22nd October 2026: 18:30 to 20:30 (MYT is UTC+8, so 10:30 to 12:30 UTC)
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//EPIC Society//Volunteering 101//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Volunteering 101 by EPIC`,
      `DESCRIPTION:Hands-on 2-hour workshop on the basics of good volunteering. Registration at 6.30pm, workshop 7pm-8.30pm. Refreshments & food provided!`,
      `LOCATION:${WORKSHOP_CONFIG.location}`,
      'DTSTART:20261022T103000Z',
      'DTEND:20261022T123000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'volunteering-101-epic-22oct2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1B3D]/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Tape decoration */}
        <div className="absolute top-0 right-12 w-28 h-5 tape-teal rotate-[2deg] pointer-events-none z-10" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff821e]">
              {submitted ? "Registration Confirmed!" : "Free 2-Hour Workshop"}
            </span>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-[#0B1B3D]">
              {submitted ? `You're on the list, ${formData.name}` : "Register your interest"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
            aria-label="Close registration dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!submitted ? (
            <div className="space-y-4">
              {/* Direct Google Form Banner */}
              <div className="p-3.5 bg-[#FFF0E5] border border-[#ff821e]/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-slate-800">Official Registration Form</span>
                <a
                  href={WORKSHOP_CONFIG.registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] px-3 py-1.5 rounded-lg inline-flex items-center gap-1 shrink-0 transition-colors"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Event detail highlight with Maps link */}
              <div className="p-4 bg-[#FFF9E6] border border-[#FFB703]/40 rounded-2xl text-xs text-[#0B1B3D] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#0B1B3D]">
                  <Sparkles className="w-4 h-4 text-[#FFB703] shrink-0" />
                  <span>Thursday, {WORKSHOP_CONFIG.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                  <a
                    href={WORKSHOP_CONFIG.locationMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff821e] underline underline-offset-2 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{WORKSHOP_CONFIG.location}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{WORKSHOP_CONFIG.time}</span>
                </div>
                <div className="pt-1 text-[#E76F51] font-semibold text-xs">
                  *Refreshments & food provided at the venue!
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="reg-name" className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  placeholder="e.g. Nurul Izzati / Jason Lee / Priya"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] focus:ring-2 focus:ring-[#ff821e]/20 outline-none text-sm text-slate-800"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] focus:ring-2 focus:ring-[#ff821e]/20 outline-none text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="reg-phone"
                    type="tel"
                    placeholder="012-345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] focus:ring-2 focus:ring-[#ff821e]/20 outline-none text-sm text-slate-800"
                  />
                </div>
              </div>

              {/* Neighbourhood & Background */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-loc" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Neighbourhood
                  </label>
                  <select
                    id="reg-loc"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] outline-none text-sm text-slate-800 bg-white"
                  >
                    <option value="Subang Jaya">Subang Jaya (SS12 - SS19 / USJ)</option>
                    <option value="Petaling Jaya">Petaling Jaya</option>
                    <option value="Shah Alam">Shah Alam</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Other Selangor">Other Selangor Area</option>
                    <option value="Other">Other Area</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reg-bg" className="block text-xs font-bold text-slate-700 mb-1">
                    Volunteering Background
                  </label>
                  <select
                    id="reg-bg"
                    value={formData.background}
                    onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] outline-none text-sm text-slate-800 bg-white"
                  >
                    <option value="first-time">First-time curious explorer</option>
                    <option value="deepen-skills">Volunteered before, want to deepen skills</option>
                    <option value="regular">Regular community volunteer</option>
                    <option value="student-parent">Student / Young Pro / Parent / Retiree</option>
                  </select>
                </div>
              </div>

              {/* Optional note */}
              <div>
                <label htmlFor="reg-notes" className="block text-xs font-bold text-slate-700 mb-1">
                  What sparked your interest? <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="reg-notes"
                  rows={2}
                  placeholder="e.g. Wanting to help in my local taman, curious about EPIC..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#ff821e] outline-none text-sm text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm sm:text-base font-bold text-white bg-[#ff821e] hover:bg-[#e66f12] active:scale-[0.99] rounded-xl shadow-md transition-all cursor-pointer mt-4"
              >
                Confirm My Interest →
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Limited seats available. We'll send venue arrival details to your email.
              </p>
            </form>
          </div>
        ) : (
            /* Confirmation State */
            <div className="space-y-6">
              
              <div className="bg-[#FAF8F5] border-2 border-dashed border-[#ff821e]/50 p-6 rounded-2xl relative">
                <div className="absolute -top-3 left-1/3 w-32 h-5 tape-strip rotate-[1deg] pointer-events-none" />

                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-xs uppercase tracking-wider text-[#0B1B3D]">
                      EPIC Workshop Pass
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    #{passNumber}
                  </span>
                </div>

                <div className="py-4 space-y-2 text-sm text-slate-700">
                  <div>
                    <span className="text-xs text-slate-400 block">Attendee</span>
                    <strong className="text-base text-[#0B1B3D]">{formData.name}</strong>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <span className="text-xs text-slate-400 block">Venue</span>
                      <a 
                        href={WORKSHOP_CONFIG.locationMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-800 hover:text-[#ff821e] underline underline-offset-2 flex items-center gap-1"
                      >
                        <span>{WORKSHOP_CONFIG.location}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Date & Time</span>
                      <span className="font-semibold text-slate-800">
                        {WORKSHOP_CONFIG.date} · {WORKSHOP_CONFIG.workshopTime}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        (Registration from {WORKSHOP_CONFIG.registrationTime})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="handwritten text-lg text-[#ff821e] font-bold">
                    "See you at The Xchange Lab! Food & drinks on us."
                  </span>
                  <span className="text-slate-400">2 Hours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="py-3 px-4 rounded-xl bg-[#0B1B3D] hover:bg-[#132B52] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#ff821e]" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Link Copied!' : 'Share with a Friend'}</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-[#ff821e] hover:underline cursor-pointer"
                >
                  Return to landing page
                </button>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
};
