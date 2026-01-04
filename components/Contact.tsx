
import React from 'react';
import { Send, PhoneCall } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader 
              subtitle="Get In Touch"
              title="Ready to Optimize Your Plant Performance?"
              description="Connect with our technical experts today for enquiries, performance audits, or spare parts requirements."
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-emerald-200 transition-colors">
                <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Direct Support</h4>
                  <p className="text-slate-600 text-sm mt-1">Operating 24/7, 365 Days a year for critical shutdowns.</p>
                </div>
              </div>
              
              <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 className="text-2xl font-black mb-4 italic tracking-tight text-emerald-400">"Right First Time. On Time. Every Time."</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Our guiding principle ensures we deliver OEM-level turnaround and shutdown support across the nation.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Subject</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium appearance-none">
                  <option>Service Enquiry</option>
                  <option>Spare Parts Quote</option>
                  <option>Performance Audit Request</option>
                  <option>Career Opportunities</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button 
                type="submit" 
                className="group w-full bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-emerald-500/20 uppercase tracking-tighter text-lg hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
