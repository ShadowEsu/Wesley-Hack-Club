
import React from 'react';
import { DiscordIcon, GithubIcon, MessageSquareIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-futuristic font-black text-[#39FF14] mb-6 neon-glow">WESLEY HACK CLUB</h2>
            <p className="text-gray-500 max-w-sm mb-8">
              Empowering the next generation of engineers, hackers, and makers through open-source collaboration and high-energy coding.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 hover:border-[#39FF14] hover:text-[#39FF14] transition-all text-gray-400">
                <DiscordIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 hover:border-[#39FF14] hover:text-[#39FF14] transition-all text-gray-400">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:contact@wesleyhack.club" className="p-3 bg-white/5 border border-white/10 hover:border-[#39FF14] hover:text-[#39FF14] transition-all text-gray-400">
                <MessageSquareIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-futuristic font-bold text-white mb-6 uppercase tracking-widest text-sm">Club Info</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Meeting: Every Tuesday Lunch</li>
              <li>Location: Hamer Building</li>
              <li>Room: CS-101</li>
              <li>Required: Laptop + Curiosity</li>
            </ul>
          </div>

          <div>
            <h4 className="font-futuristic font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" className="hover:text-[#39FF14] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#39FF14] transition-colors">About</a></li>
              <li><a href="#events" className="hover:text-[#39FF14] transition-colors">Events</a></li>
              <li><a href="#projects" className="hover:text-[#39FF14] transition-colors">Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs text-center md:text-left">
            Wesley Hack Club — Founded by Michael K-F and Preston Susanto. <br className="md:hidden" />
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-futuristic text-gray-600 tracking-widest">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
