
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import SectionHeader from './SectionHeader';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          centered
          subtitle="Showcase"
          title="Project Gallery"
          description="A glimpse into our field engineering, installation, and fabrication excellence across various industrial sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-white text-lg font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
