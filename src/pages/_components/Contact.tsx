import { motion } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/2349049078503?text=' + encodeURIComponent("Hi Emmax! I'd like to discuss a project.");

const contactInfo = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+234 9057952035', href: WHATSAPP_URL, color: 'text-emerald-400' },
  { icon: Mail, label: 'Email', value: 'emmax.digitalcoach@gmail.com', href: 'mailto:emmax.digitalcoach@gmail.com', color: 'text-primary' },
  { icon: MapPin, label: 'Location', value: 'Nigeria (Remote Worldwide)', href: null, color: 'text-accent' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null, color: 'text-purple-400' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Emmax! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`);
    window.open('https://wa.me/2349049078503?text=' + msg, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            {"Let's"}{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work Together</span>
          </motion.h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Contact Details</h3>
              <div className="space-y-5">
                {contactInfo.map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center shrink-0 ${item.color}`}><item.icon size={18} /></div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold hover:underline cursor-pointer ${item.color}`}>{item.value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
              <p className="text-sm text-foreground font-semibold mb-2">Free Consultation</p>
              <p className="text-xs text-muted-foreground mb-4">No commitment. Just a 30-minute call to explore how I can help your business grow.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all cursor-pointer">
                <MessageCircle size={15} />Book a Free Call
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="E-commerce">E-commerce Setup</option>
                    <option value="Product Reviews & Consulting">Product Reviews & Consulting</option>
                    <option value="Full Package">Full Digital Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                    <option value="">Select budget</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,500">$500 – $1,500</option>
                    <option value="$1,500 - $5,000">$1,500 – $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Let's discuss">{"Let's discuss"}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Your Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your business, goals, and what you'd like to achieve..." className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02] cursor-pointer">
                {sent ? <><CheckCircle size={18} />Opening WhatsApp...</> : <><Send size={18} />Send via WhatsApp</>}
              </button>
              <p className="text-xs text-muted-foreground text-center">This will open WhatsApp with your message pre-filled.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
