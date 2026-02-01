
import React from 'react';
import { DiscordIcon, GithubIcon, CalendarIcon, MessageSquareIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 px-6 overflow-hidden">
      {/* Member Count Badge */}
      <div className="absolute top-28 left-6 md:left-12 flex items-center space-x-2 animate-pulse">
        <span className="w-2 h-2 bg-[#BF00FF] rounded-full neon-purple-glow"></span>
        <p className="text-[#BF00FF] font-futuristic text-xs md:text-sm tracking-widest neon-purple-glow">
          MEMBER COUNT: 20+
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-futuristic font-black tracking-tighter leading-none mb-2 text-[#39FF14] neon-glow animate-pulse">
              WESLEY
            </h1>
            <h1 className="text-6xl md:text-8xl font-futuristic font-black tracking-tighter leading-none text-[#39FF14] neon-glow">
              HACK CLUB
            </h1>
          </div>

          <div className="max-w-md space-y-4 text-gray-300 text-lg md:text-xl border-l-2 border-[#39FF14]/30 pl-6 py-2">
            <p className="animate-in fade-in slide-in-from-left duration-700">
              Welcome to the Wesley Hack Club page.
            </p>
            <p className="animate-in fade-in slide-in-from-left duration-1000 delay-200">
              The club meets every <span className="text-[#39FF14]">Tuesday lunch time</span> in the Hamer building.
            </p>
            <p className="text-sm text-gray-500 italic animate-in fade-in slide-in-from-left duration-1000 delay-400">
              Founded by Michael K-F and Preston Susanto.<br />
              Run by Michael K-F.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <button className="px-8 py-3 bg-[#39FF14] text-black font-bold font-futuristic rounded-none hover:bg-white hover:scale-105 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(57,255,20,0.4)]">
              <DiscordIcon className="w-5 h-5" />
              JOIN DISCORD
            </button>
            <button className="px-8 py-3 bg-transparent text-[#39FF14] border-2 border-[#39FF14] font-bold font-futuristic rounded-none hover:bg-[#39FF14]/10 hover:scale-105 transition-all flex items-center gap-2">
              <GithubIcon className="w-5 h-5" />
              VIEW GITHUB
            </button>
            <button className="px-8 py-3 bg-transparent text-gray-400 border-2 border-gray-800 font-bold font-futuristic rounded-none hover:border-[#BF00FF] hover:text-[#BF00FF] transition-all flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              SEE EVENTS
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center relative">
          <div className="w-96 h-96 border-2 border-[#39FF14]/20 rounded-full animate-spin-slow flex items-center justify-center">
            <div className="w-80 h-80 border-2 border-[#BF00FF]/20 rounded-full animate-reverse-spin flex items-center justify-center">
              <div className="w-64 h-64 bg-[#39FF14]/5 rounded-full flex items-center justify-center">
                <code className="text-[#39FF14] text-xs font-mono animate-pulse text-center">
                  // INITIALIZING... <br />
                  &gt; WESLEY HACK CLUB <br />
                  &gt; STATUS: ONLINE <br />
                  &gt; ACCESS GRANTED
                </code>
              </div>
            </div>
          </div>
          {/* Decorative floating bits */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-[#39FF14] animate-bounce neon-glow"></div>
          <div className="absolute bottom-10 left-10 w-3 h-3 bg-[#BF00FF] animate-pulse neon-purple-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
