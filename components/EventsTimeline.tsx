
import React from 'react';
import { EVENTS } from '../constants';
import { Bookmark } from 'lucide-react';

const EventsTimeline: React.FC = () => {
  return (
    <section id="events" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[#BF00FF] font-futuristic tracking-[0.3em] text-sm mb-2">TIMELINE</p>
            <h2 className="text-5xl font-futuristic font-black text-white">UPCOMING <span className="text-[#39FF14] neon-glow">EVENTS</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm">Join us for weekly workshops, competitions, and guest speaker sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <div
              key={event.id}
              className="group glass-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#39FF14]/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/20 flex flex-col items-center justify-center font-futuristic">
                  <span className="text-[#39FF14] font-bold text-lg leading-none">{event.date.split(' ')[1]}</span>
                  <span className="text-xs text-[#39FF14]/70 uppercase">{event.date.split(' ')[0]}</span>
                </div>
                <span className="text-[10px] font-futuristic px-2 py-1 border border-[#BF00FF]/40 text-[#BF00FF] uppercase tracking-widest">
                  {event.type}
                </span>
              </div>

              <h3 className="text-xl font-futuristic font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors uppercase">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {event.description}
              </p>

              <button className="flex items-center gap-2 text-xs font-futuristic font-bold text-[#39FF14] border-b border-[#39FF14]/20 pb-1 hover:border-[#39FF14] transition-all group/btn">
                <Bookmark size={14} className="group-hover/btn:fill-[#39FF14]" />
                SAVE TO CALENDAR
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
