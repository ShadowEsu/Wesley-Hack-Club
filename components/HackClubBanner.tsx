
import React from 'react';

const HackClubBanner: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-l-4 border-[#39FF14] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#39FF14]/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-futuristic font-bold text-white mb-6">
            CONNECTED TO THE GLOBAL <span className="text-[#39FF14] neon-glow">HACK CLUB</span> ORGANIZATION
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              We are a proud member of Hack Club, a global network of student-led coding clubs.
              Being part of this organization means we have access to a massive community of
              like-minded makers, engineers, and creators.
            </p>
            <p>
              Our philosophy is simple: <span className="text-white font-bold italic">Coding is a superpower.</span> We focus on project-based
              learning where students don't just study syntax—they build real things.
              From web apps to hardware hacks, we are a coding community where you learn by doing.
            </p>
          </div>
          <div className="mt-8 flex items-center space-x-4">
             <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-futuristic text-gray-500 uppercase tracking-tighter">
              Student-Led
             </div>
             <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-futuristic text-gray-500 uppercase tracking-tighter">
              Project-Based
             </div>
             <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-futuristic text-gray-500 uppercase tracking-tighter">
              Maker Spirit
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackClubBanner;
