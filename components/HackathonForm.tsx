
import React from 'react';
import { Trophy, Users, Rocket } from 'lucide-react';

const HackathonForm: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-futuristic font-black text-white mb-8">
            HACKATHONS & <span className="text-[#39FF14] neon-glow">COMPETITIONS</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We don't just build in isolation. Our club actively participates in local and global
            hackathons. We help students form teams, prep for competitive programming, and
            provide mentorship for national coding challenges.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#39FF14]/10 rounded flex items-center justify-center shrink-0">
                <Trophy className="text-[#39FF14]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-futuristic font-bold">COMPETITION PREP</h4>
                <p className="text-gray-500 text-sm">Focused training for USACO, IOI, and local high school coding cups.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#BF00FF]/10 rounded flex items-center justify-center shrink-0">
                <Users className="text-[#BF00FF]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-futuristic font-bold">TEAM BUILDING</h4>
                <p className="text-gray-500 text-sm">Find your squad. We match designers, frontend gurus, and backend masters.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#39FF14]/10 rounded flex items-center justify-center shrink-0">
                <Rocket className="text-[#39FF14]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-futuristic font-bold">ACCELERATOR SESSIONS</h4>
                <p className="text-gray-500 text-sm">Intensive 48-hour build sessions to launch MVPs for hackathons.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-8 md:p-10 border border-[#39FF14]/20 relative">
          <div className="absolute -top-4 -left-4 px-4 py-1 bg-[#39FF14] text-black text-xs font-bold font-futuristic uppercase">
            Recruiting Now
          </div>
          <h3 className="text-2xl font-futuristic font-bold text-white mb-6">JOIN A TEAM</h3>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="text-xs font-futuristic text-gray-500 uppercase tracking-widest mb-2 block">Full Name</label>
              <input
                type="text"
                placeholder="Michael..."
                className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-futuristic text-gray-500 uppercase tracking-widest mb-2 block">Year Level</label>
              <select className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors appearance-none">
                <option>Year 7</option>
                <option>Year 8</option>
                <option>Year 9</option>
                <option>Year 10</option>
                <option>Year 11</option>
                <option>Year 12</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-futuristic text-gray-500 uppercase tracking-widest mb-2 block">Primary Interests</label>
              <textarea
                placeholder="e.g. Cybersecurity, Web Design, Game Dev"
                rows={3}
                className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-[#39FF14] text-black font-black font-futuristic uppercase tracking-tighter hover:bg-white transition-all transform active:scale-95">
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HackathonForm;
