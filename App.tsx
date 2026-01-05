
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import Gallery from './components/Gallery';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CORE_SERVICES, ALLIED_SERVICES } from './constants';
import { HardHat, Activity, Package, CheckCircle2, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* Stats Bar / Quick Access */}
      <div className="relative z-20 -mt-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10 border border-white/5">
          <div className="flex items-center space-x-6 pb-6 sm:pb-0 sm:pr-4">
            <div className="bg-blue-500/20 p-4 rounded-2xl text-blue-400 flex-shrink-0"><HardHat className="w-8 h-8" /></div>
            <div>
              <div className="text-3xl font-black text-white tracking-tighter">24/7</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Field Support</div>
            </div>
          </div>
          <div className="flex items-center space-x-6 py-6 sm:py-0 sm:pl-4 lg:pl-10 lg:pr-4">
            <div className="bg-blue-500/20 p-4 rounded-2xl text-blue-400 flex-shrink-0"><Activity className="w-8 h-8" /></div>
            <div>
              <div className="text-3xl font-black text-white tracking-tighter">Audit</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Energy & CFD</div>
            </div>
          </div>
          <div className="flex items-center space-x-6 py-6 sm:py-0 sm:pr-4 lg:pl-10 lg:pr-4">
            <div className="bg-orange-500/20 p-4 rounded-2xl text-orange-400 flex-shrink-0"><Package className="w-8 h-8" /></div>
            <div>
              <div className="text-3xl font-black text-white tracking-tighter">Genuine</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">OEM Spares</div>
            </div>
          </div>
          <div className="flex items-center space-x-6 pt-6 sm:pt-0 sm:pl-4 lg:pl-10">
            <div className="bg-purple-500/20 p-4 rounded-2xl text-purple-400 flex-shrink-0"><CheckCircle2 className="w-8 h-8" /></div>
            <div>
              <div className="text-3xl font-black text-white tracking-tighter">Quality</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">ASNT Level II</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            centered
            subtitle="Our Expertise"
            title="Core Service Portfolio"
            description="VR Technology provides end-to-end site services tailored to client-specific requirements in critical industrial sectors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {CORE_SERVICES.map((service, idx) => (
              <ServiceCard key={idx} item={service} />
            ))}
          </div>
        </div>
      </section>

      <div id="solutions" className="scroll-mt-20">
        <Industries />
      </div>

      {/* Asset Lifecycle Section */}
      <section id="lifecycle" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <SectionHeader
                subtitle="Lifecycle Management"
                title="Strategic Solutions for Critical Infrastructure"
                description="Our comprehensive approach to maintenance ensures your assets perform at peak capacity throughout their design life."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Thermal Optimization",
                  "Material Upgrades",
                  "Mechanical Overhauls",
                  "Integrity Testing",
                  "Helium Leak Detection",
                  "Fan-Pitch Calibration",
                  "Vibration Analysis",
                  "Revamping Projects"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                    <div className="bg-blue-500/10 p-1 rounded-full text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center lg:text-left">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="inline-flex items-center text-blue-600 font-black uppercase text-xs tracking-[0.2em] hover:text-blue-700"
                >
                  Download Lifecycle Brochure <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-4 sm:space-y-8">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" alt="Mechanical Work" className="w-full h-64 sm:h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Engineering" className="w-full h-40 sm:h-48 object-cover" />
                </div>
              </div>
              <div className="space-y-4 sm:space-y-8 pt-12 sm:pt-20">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" alt="Piping" className="w-full h-40 sm:h-48 object-cover" />
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600" alt="Industrial Facility" className="w-full h-64 sm:h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allied Services Section */}
      <section id="allied" className="py-32 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] -mr-80 -mt-80"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-red-600/10 rounded-full blur-[120px] -ml-80 -mb-80"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            light
            centered
            subtitle="Industrial Fabrications"
            title="Allied Engineering Services"
            description="Our specialized fabrication unit handles complex industrial projects with precision engineering and high-grade materials."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ALLIED_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group relative overflow-hidden">
                <div className="bg-blue-600/20 text-blue-400 p-4 rounded-2xl w-fit mb-8 group-hover:bg-blue-500 group-hover:text-slate-900 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="scroll-mt-20">
        <Gallery />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
