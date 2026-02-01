
import React, { useEffect, useState } from 'react';
import { STATS } from '../constants';

const StatsTicker: React.FC = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const intervals = STATS.map((stat, index) => {
      const step = Math.ceil(stat.value / 30);
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[index] < stat.value) {
            next[index] = Math.min(stat.value, next[index] + step);
          }
          return next;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-black border-y border-[#39FF14]/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <h3 className="text-4xl md:text-5xl font-futuristic font-black text-[#39FF14] neon-glow group-hover:scale-110 transition-transform">
                {counts[i]}{stat.suffix}
              </h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Ticker */}
        <div className="mt-16 overflow-hidden border border-[#39FF14]/20 py-3 relative bg-[#39FF14]/5">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="flex animate-scroll whitespace-nowrap space-x-12">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex space-x-12 items-center">
                <span className="text-[#39FF14] font-futuristic text-sm tracking-widest">NEXT MEETING: TUESDAY LUNCH</span>
                <span className="text-[#BF00FF] font-futuristic text-sm tracking-widest">•</span>
                <span className="text-white font-futuristic text-sm tracking-widest">CTF THIS FRIDAY!</span>
                <span className="text-[#BF00FF] font-futuristic text-sm tracking-widest">•</span>
                <span className="text-[#39FF14] font-futuristic text-sm tracking-widest">BRING A LAPTOP!</span>
                <span className="text-[#BF00FF] font-futuristic text-sm tracking-widest">•</span>
                <span className="text-white font-futuristic text-sm tracking-widest">PROJECTS SHIPPED: 15+</span>
                <span className="text-[#BF00FF] font-futuristic text-sm tracking-widest">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StatsTicker;
