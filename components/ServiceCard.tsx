
import React from 'react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
  return (
    <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-6 inline-block p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
        <div className="group-hover:text-white transition-colors duration-300">
          {item.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {item.description}
      </p>
      {item.tags && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
