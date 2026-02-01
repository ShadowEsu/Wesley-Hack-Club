
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackClubBanner from './components/HackClubBanner';
import StatsTicker from './components/StatsTicker';
import EventsTimeline from './components/EventsTimeline';
import CalendarCountdown from './components/CalendarCountdown';
import ProjectsGrid from './components/ProjectsGrid';
import HackathonForm from './components/HackathonForm';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-[#39FF14] selection:text-black">
      {/* Visual FX Layers */}
      <div className="scanline" />
      <BackgroundParticles />
      <div className="fixed inset-0 pointer-events-none z-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

      <Navbar />

      <main>
        <Hero />

        <div className="reveal fade-up">
          <StatsTicker />
        </div>

        <div className="reveal fade-up">
          <HackClubBanner />
        </div>

        <div className="reveal fade-up">
          <EventsTimeline />
        </div>

        <div className="reveal fade-up">
          <CalendarCountdown />
        </div>

        <div className="reveal fade-up">
          <ProjectsGrid />
        </div>

        <div className="reveal fade-up">
          <HackathonForm />
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.fade-up {
          transform: translateY(30px);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0) !important;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 10s linear infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
