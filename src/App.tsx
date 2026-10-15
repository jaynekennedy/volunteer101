import { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatYoullLearn } from './components/WhatYoullLearn';
import { InsideWorkshop } from './components/InsideWorkshop';
import { WhoItsFor } from './components/WhoItsFor';
import { AboutEpicPage } from './pages/AboutEpicPage';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Sync hash routing if user visits with #about-epic
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about-epic') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (window.location.hash === '#about-epic') {
      setCurrentPage('about');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'about', hash?: string) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.history.pushState(null, '', '#about-epic');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', hash || ' ');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleSeeAgenda = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('workshop');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('workshop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2B2D42] selection:bg-[#ff821e]/20 selection:text-[#0B1B3D]">
      {/* Sticky Announcement Top Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRegisterClick={handleOpenRegister} 
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero */}
            <Hero 
              onRegisterClick={handleOpenRegister} 
              onSeeAgendaClick={handleSeeAgenda} 
            />

            {/* 2. What You'll Learn [#learn] */}
            <WhatYoullLearn />

            {/* 3. Inside the Workshop [#workshop] */}
            <InsideWorkshop />

            {/* 4. Who It's For [#who] */}
            <WhoItsFor onRegisterClick={handleOpenRegister} />

            {/* 7. FAQ [#faq] */}
            <FaqSection />
          </>
        ) : (
          /* Who We Are: EPIC Dedicated Page */
          <AboutEpicPage 
            onBackToHome={() => handleNavigate('home')} 
            onRegisterClick={handleOpenRegister} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Registration Dialog */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={handleCloseRegister} 
      />
    </div>
  );
}
