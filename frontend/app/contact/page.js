'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: call API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#E3EBD2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#262523]" />
            <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">Reach Us</span>
          </div>
          <h1 className="font-poppins font-bold text-[#262523] text-4xl sm:text-5xl">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-sm border border-[#B3B2AE]/30">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#E3EBD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-[#262523]" />
                </div>
                <h3 className="font-poppins font-bold text-[#262523] text-xl mb-2">Message Sent!</h3>
                <p className="text-[#81817D] font-inter">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-poppins font-semibold text-[#262523] text-xl mb-6">Send us a message</h2>
                {[
                  { label: 'Full Name', name: 'name', type: 'text', required: true },
                  { label: 'Email Address', name: 'email', type: 'email', required: true },
                  { label: 'Phone Number', name: 'phone', type: 'tel', required: false },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="text-[#262523] text-sm font-poppins font-medium block mb-1.5">
                      {f.label} {f.required && <span className="text-[#81817D]">*</span>}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      required={f.required}
                      className="w-full border border-[#B3B2AE] rounded-sm px-4 py-3 text-[#262523] font-inter text-sm focus:outline-none focus:border-[#262523] bg-[#E3EBD2]/30"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[#262523] text-sm font-poppins font-medium block mb-1.5">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-[#B3B2AE] rounded-sm px-4 py-3 text-[#81817D] font-inter text-sm focus:outline-none focus:border-[#262523] bg-[#E3EBD2]/30"
                  >
                    <option value="">Select a service</option>
                    <option>Plan & Estimate</option>
                    <option>Industrial Construction</option>
                    <option>Town Planning Approval</option>
                    <option>Fire & Rescue NOC</option>
                    <option>Pollution Control Approval</option>
                    <option>Interior Works</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#262523] text-sm font-poppins font-medium block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-[#B3B2AE] rounded-sm px-4 py-3 text-[#262523] font-inter text-sm focus:outline-none focus:border-[#262523] bg-[#E3EBD2]/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#262523] text-white py-4 font-poppins font-semibold text-base rounded-sm hover:bg-[#81817D] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: 'Our Office',
                content: 'Scholar Builders, Main Road,\nPerumbavoor, Ernakulam,\nKerala – 683 542',
              },
              { icon: Phone, title: 'Phone', content: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: Mail, title: 'Email', content: 'info@scholarbuilders.in', href: 'mailto:info@scholarbuilders.in' },
            ].map(({ icon: Icon, title, content, href }) => (
              <div key={title} className="bg-white border border-[#B3B2AE]/30 p-6 rounded-sm flex gap-4">
                <div className="w-11 h-11 bg-[#E3EBD2] rounded-sm flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#262523]" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-[#262523] text-sm mb-1">{title}</h3>
                  {href ? (
                    <a href={href} className="text-[#81817D] font-inter text-sm hover:text-[#262523] transition-colors">
                      {content}
                    </a>
                  ) : (
                    <p className="text-[#81817D] font-inter text-sm whitespace-pre-line">{content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-[#B3B2AE]/20 border border-[#B3B2AE]/30 rounded-sm h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={28} className="text-[#81817D] mx-auto mb-2" />
                <p className="text-[#81817D] text-sm font-inter">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
