import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: 'How much do your services cost?', a: 'Pricing depends on the scope and type of project. Digital marketing packages start from $300/month, website development from $500, and e-commerce setups from $800. I offer free consultations so we can discuss your exact needs and build a custom quote.' },
  { q: 'How long does a typical project take?', a: 'A basic website takes 1–2 weeks. E-commerce stores take 2–4 weeks. For digital marketing, you will start seeing results within 30–90 days depending on the channel. I always give you a clear timeline before we start.' },
  { q: 'Do you work with clients outside Nigeria?', a: 'Yes! I work with clients across Africa, Europe, the UK, and North America. Everything is done remotely via video calls, WhatsApp, and project management tools. Time zones are never a problem.' },
  { q: 'What platforms do you specialize in?', a: 'For e-commerce: Shopify, WooCommerce, and Amazon FBA. For websites: WordPress, React/Vite, and custom builds. For marketing: Google Ads, Meta Ads, SEO, email (Klaviyo, Mailchimp), and social media strategy.' },
  { q: 'Do you offer ongoing support after a project is done?', a: 'Absolutely. I offer monthly retainer packages for website maintenance, digital marketing management, and e-commerce growth. Most of my clients stick around for ongoing collaboration after the initial project.' },
  { q: 'Can you help if I have no online presence at all?', a: "That's actually where I shine the most. Whether you're starting from scratch or need a full rebrand, I'll build your complete digital foundation — from domain setup to your first paying customers." },
  { q: 'How do we communicate during a project?', a: 'Mainly via WhatsApp and email for quick updates. For larger projects, I use Notion or Trello for project tracking. I provide weekly progress reports and am always responsive within 24 hours.' },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
        <span className="font-semibold text-sm md:text-base">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-primary"><ChevronDown size={18} /></motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 bg-card/20">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase"><HelpCircle size={14} />FAQ</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Common{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
          </motion.h2>
        </div>
        <div className="space-y-3">{faqs.map((faq, i) => <FAQItem key={faq.q} faq={faq} index={i} />)}</div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-muted-foreground mt-8">
          Still have questions?{' '}<a href="#contact" className="text-primary hover:underline cursor-pointer font-medium">Get in touch</a>
        </motion.p>
      </div>
    </section>
  );
}
