import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const skillGroups = [
  { title: 'Digital Marketing', color: 'bg-primary', skills: [{ name: 'SEO & Content Strategy', level: 95 }, { name: 'Google Ads / PPC', level: 90 }, { name: 'Social Media Marketing', level: 92 }, { name: 'Email Marketing', level: 88 }] },
  { title: 'Web Development', color: 'bg-accent', skills: [{ name: 'HTML / CSS / JS', level: 88 }, { name: 'React & Vite', level: 80 }, { name: 'WordPress & CMS', level: 93 }, { name: 'UI/UX & Design', level: 82 }] },
  { title: 'E-commerce', color: 'bg-purple-400', skills: [{ name: 'Shopify', level: 95 }, { name: 'Amazon FBA', level: 90 }, { name: 'WooCommerce', level: 85 }, { name: 'Dropshipping', level: 88 }] },
];

const certifications = [
  { name: 'Google Ads Certified', issuer: 'Google', color: 'border-primary/40 bg-primary/10 text-primary' },
  { name: 'Meta Blueprint', issuer: 'Meta', color: 'border-accent/40 bg-accent/10 text-accent' },
  { name: 'HubSpot Inbound', issuer: 'HubSpot', color: 'border-amber-400/40 bg-amber-400/10 text-amber-400' },
  { name: 'Shopify Partner', issuer: 'Shopify', color: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-400' },
  { name: 'Google Analytics', issuer: 'Google', color: 'border-purple-400/40 bg-purple-400/10 text-purple-400' },
  { name: 'SEMrush Academy', issuer: 'SEMrush', color: 'border-rose-400/40 bg-rose-400/10 text-rose-400' },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-border overflow-hidden">
        <motion.div className={`h-full rounded-full ${color}`} initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : { width: 0 }} transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Skills &{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.15 }} className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">
              <h3 className="font-bold text-lg mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} index={si} />)}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><Award size={16} />Professional Certifications</div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, i) => (
            <motion.div key={cert.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${cert.color}`}>
              <Award size={13} /><span>{cert.name}</span><span className="text-xs opacity-60">· {cert.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
