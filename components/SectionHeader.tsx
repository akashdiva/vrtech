
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, description, centered = false, light = false }) => {
  return (
    <div className={`mb-16 px-4 ${centered ? 'text-center mx-auto max-w-4xl' : 'text-center lg:text-left mx-auto lg:mx-0 max-w-3xl'}`}>
      {subtitle && (
        <span className={`block text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-4 ${light ? 'text-blue-400' : 'text-blue-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-[1.2] tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-slate-400' : 'text-slate-600'} max-w-2xl ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
