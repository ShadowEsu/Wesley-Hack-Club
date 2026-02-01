
import React from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon } from './Icons';

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#39FF14] font-futuristic tracking-[0.3em] text-sm mb-2">SHOWCASE</p>
          <h2 className="text-5xl font-futuristic font-black text-white uppercase">PROJECTS <span className="text-[#BF00FF] neon-purple-glow">SHIPPED</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-zinc-900 aspect-[3/4]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-futuristic text-[#BF00FF] tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-futuristic font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {project.description}
                  </p>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-xs font-futuristic text-black bg-[#39FF14] px-4 py-2 hover:bg-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GITHUB
                  </a>
                </div>
              </div>

              {/* Decorative corner lines */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#39FF14] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 h-8 w-[2px] bg-[#39FF14] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
