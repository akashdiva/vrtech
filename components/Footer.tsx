
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/logo-icon.png" alt="VR Technology Logo" className="h-8 w-auto object-contain" />
              <span className="text-xl font-bold text-white tracking-tight">VR Technology</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your partner in sustainable thermal excellence. Providing "Single-Window" solutions for cooling technologies and industrial field services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Core Focus</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Dry Cooling Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heat Exchanger Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Field Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Turnaround Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Industry Solutions</a></li>
              <li><a href="#lifecycle" className="hover:text-white transition-colors">Asset Lifecycle</a></li>
              <li><a href="#allied" className="hover:text-white transition-colors">Allied Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Pan-India Service Reach<br />24/7 Operations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:services@vrtechnology.in" className="hover:text-white">services@vrtechnology.in</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Request a callback</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 space-y-4 md:space-y-0">
          <p>© 2024 VR Technology & Industrial Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Safety Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
