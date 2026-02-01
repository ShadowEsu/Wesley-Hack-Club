
import React, { useState, useEffect } from 'react';

const CalendarCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Calculate next Tuesday 1:00 PM (Approx lunch)
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextTuesday = new Date();
      nextTuesday.setDate(now.getDate() + (7 + 2 - now.getDay()) % 7);
      nextTuesday.setHours(13, 0, 0, 0);

      if (now > nextTuesday) {
        nextTuesday.setDate(nextTuesday.getDate() + 7);
      }

      const difference = nextTuesday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-futuristic font-black text-white mb-8">
            SYSTEM <span className="text-[#BF00FF] neon-purple-glow">HEARTBEAT</span>
          </h2>

          <div className="glass-card p-8 border-[#BF00FF]/20 relative">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-futuristic font-bold text-white uppercase tracking-widest">Next Meeting</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-red-500 font-futuristic text-xs">LIVE COUNTDOWN</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HRS', val: timeLeft.hours },
                { label: 'MIN', val: timeLeft.minutes },
                { label: 'SEC', val: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-futuristic font-black text-white mb-2">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold tracking-[0.2em]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Time: <span className="text-white">Tuesday Lunch (1:15 PM)</span></p>
                <p className="text-sm text-gray-400">Location: <span className="text-white">Hamer Building</span></p>
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white font-futuristic text-xs px-6 py-3 transition-colors">
                ADD TO GOOGLE CAL
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-7 gap-2 p-4 border border-[#39FF14]/20 rounded-lg">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
              <div key={d} className="text-center text-[10px] font-bold text-gray-600 mb-2">{d}</div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center text-xs font-futuristic border border-white/5 ${
                  (i + 1) % 7 === 2 ? 'bg-[#39FF14]/20 text-[#39FF14] border-[#39FF14]/40 shadow-[0_0_10px_rgba(57,255,20,0.2)]' : 'text-gray-400'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarCountdown;
