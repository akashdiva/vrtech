
import React from 'react';
import { INDUSTRIES } from '../constants';
import SectionHeader from './SectionHeader';

const Industries: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          light
          centered
          subtitle="Global Impact"
          title="Industries We Serve"
          description="Delivering specialized technical expertise to high-stakes environments where reliability and performance are critical."
        />

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="group relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center transition-all duration-500 hover:scale-105 shadow-2xl">
              <img 
                src={industry.image} 
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/80 group-hover:from-transparent group-hover:to-slate-900/60 transition-colors"></div>
              <span className="relative z-10 text-white font-bold text-sm sm:text-base text-center px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
