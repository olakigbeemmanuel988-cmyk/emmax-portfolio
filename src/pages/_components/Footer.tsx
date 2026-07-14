import { motion } from 'motion/react';
import EmmaxLogo from './EmmaxLogo.tsx';
import { MessageCircle, Mail, Share2, AtSign, PlayCircle } from 'lucide-react';

const footerLinks = {
  Services: ['Digital Marketing', 'Website Development', 'E-commerce', 'Product Reviews'],
  Company: ['About', 'Portfolio', 'Testimonials', 'Process'],
  Legal: ['Privacy Policy', 'Terms & Conditions'],
};

const socials = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/2349049078503' },
  { icon: Share2, label: 'Instagram', href: '#' },
  { icon: AtSign, label: 'Twitter / X', href: '#' },
  { icon: PlayCircle, label: 'YouTube', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:emmax.digitalcoach@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <EmmaxLogo size="default" className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">Digital Marketing Specialist, Website Developer, and E-commerce Expert helping businesses grow online across Africa and beyond.</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} aria-label={s.label} className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer">
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{group}</p>
              <ul className="space-y-2.5">{links.map(link => <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{link}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <p className="font-bold text-foreground">Ready to grow your business?</p>
            <p className="text-sm text-muted-foreground">{"Let's build something great together."}</p>
          </div>
          <a href="https://wa.me/2349049078503?text=Hi+Emmax!+I'd+like+a+free+consultation." target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 cursor-pointer">
            <MessageCircle size={15} />Get Free Consultation
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground border-t border-border pt-8">
          <p>© {year} Emmax Digital. All rights reserved.</p>
          <p>Crafted with passion for digital excellence</p>
        </div>
      </div>
    </footer>
  );
}
