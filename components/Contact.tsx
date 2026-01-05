
import React, { useState, FormEvent } from 'react';
import { Send, PhoneCall, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import Toast from './Toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Service Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'success'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        show: true,
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToast({
        show: true,
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'VR Technology',
        },
        publicKey
      );

      setToast({
        show: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        type: 'success'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: 'Service Enquiry',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToast({
        show: true,
        message: 'Failed to send message. Please try again or contact us directly.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="flex items-center space-x-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="p-4 bg-blue-100 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">Direct Support</h4>
                  <p className="text-slate-600 text-sm mt-1">Operating 24/7, 365 Days a year for critical shutdowns.</p>
                </div>
              </div>

              <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 className="text-2xl font-black mb-4 italic tracking-tight text-blue-400">"Right First Time. On Time. Every Time."</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Our guiding principle ensures we deliver OEM-level turnaround and shutdown support across the nation.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium appearance-none"
                >
                  <option>Service Enquiry</option>
                  <option>Spare Parts Quote</option>
                  <option>Performance Audit Request</option>
                  <option>Career Opportunities</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Message *</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none font-medium"
                  placeholder="Tell us about your project requirements..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-500 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-red-600/20 uppercase tracking-tighter text-lg hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </section>
  );
};

export default Contact;
