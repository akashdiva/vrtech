
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Mobile header (main + scroll strip) is taller (~120px) than desktop (~80px)
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 130 : 80;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/98 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center space-x-3">
              <img src="/logo-icon.png" alt="VR Technology Logo" className="h-10 md:h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none text-white uppercase">VR Technology</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-lg hover:bg-white/5 tracking-tight ${activeSection === link.href.replace('#', '') ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pl-6">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="bg-red-600 text-white px-7 py-3 rounded-xl text-sm font-black uppercase tracking-tighter hover:bg-red-500 transition-all shadow-xl shadow-red-600/20 active:scale-95"
              >
                Get Enquiries
              </a>
            </div>
          </div>

          {/* Mobile Enquire CTA (Fixed in header) */}
          <div className="md:hidden">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-lg active:scale-90 transition-transform"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Scroll Menu (The "No-Hamburger" Solution) */}
      <div className="md:hidden border-t border-white/5 bg-slate-950/50">
        <div className="overflow-x-auto no-scrollbar py-2 px-4">
          <div className="flex space-x-2 whitespace-nowrap min-w-max">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all border ${activeSection === link.href.replace('#', '')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </nav>
  );
};

export default Navbar;
