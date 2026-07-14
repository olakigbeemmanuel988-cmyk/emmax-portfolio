import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Adaeze Okonkwo', role: 'Fashion Boutique Owner', location: 'Lagos, Nigeria', rating: 5, text: "Emmax completely transformed my online store. Sales tripled in just 3 months after he revamped my Shopify store and launched targeted Facebook ads. Best investment I've made for my business.", gradient: 'from-primary/10 to-primary/5' },
  { name: 'Chidi Eze', role: 'SaaS Founder', location: 'Abuja, Nigeria', rating: 5, text: 'The landing page Emmax built for us is phenomenal. Our demo request rate went up 180% within weeks. He understands both design and conversion psychology — a rare combination.', gradient: 'from-accent/10 to-accent/5' },
  { name: 'Sarah Mitchell', role: 'Restaurant Chain Manager', location: 'London, UK', rating: 5, text: 'Our Google traffic doubled and we now rank #1 for our main keywords in the city. Emmax knows local SEO inside and out. Professional, responsive, and genuinely caring about results.', gradient: 'from-emerald-500/10 to-emerald-500/5' },
  { name: 'Blessing Taiwo', role: 'Amazon FBA Seller', location: 'Port Harcourt, Nigeria', rating: 5, text: "Made $18K in my first month on Amazon thanks to Emmax's product research and launch strategy. He guided me through every step. Couldn't have done it without him.", gradient: 'from-amber-500/10 to-amber-500/5' },
  { name: 'Kelechi Nwosu', role: 'Fitness Coach', location: 'Enugu, Nigeria', rating: 5, text: 'My membership site went from zero to 25K monthly visitors in 6 months. Emmax built a beautiful site and the SEO strategy he put in place is still bringing organic traffic daily.', gradient: 'from-purple-500/10 to-purple-500/5' },
  { name: 'James Okafor', role: 'E-commerce Entrepreneur', location: 'Benin City, Nigeria', rating: 5, text: 'From email marketing to full store optimization, Emmax handles everything professionally. He recovered $12K in revenue from our dormant email list alone. Incredibly talented.', gradient: 'from-rose-500/10 to-rose-500/5' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            What Clients{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Say</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }} className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${t.gradient} backdrop-blur hover:border-primary/30 transition-all duration-300`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, si) => <Star key={si} size={14} className="text-amber-400 fill-amber-400" />)}</div>
                <Quote size={20} className="text-primary/30" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 mb-5">{`"${t.text}"`}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">{t.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
