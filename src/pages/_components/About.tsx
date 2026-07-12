import { motion } from 'motion/react';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Certified Specialist', desc: 'Google, Meta & HubSpot certified' },
  { icon: TrendingUp, label: 'Results-Driven', desc: 'Proven ROI across every campaign' },
  { icon: Users, label: 'Client-First', desc: '100% satisfaction guaranteed' },
  { icon: CheckCircle, label: '5+ Years', desc: 'Building digital success stories' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-[spin_6s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_80px_oklch(0.65_0.28_270_/_0.4)]">
                <img src="https://hercules-cdn.com/file_vJyoCIlmKMeoL5Oj2u5UQSfK" alt="Emmax" className="w-full h-full object-cover object-top" />
              </div>
              {[
                { label: 'SEO Expert', pos: '-top-4 -right-4', color: 'bg-primary/20 border-primary/40 text-primary' },
                { label: 'Web Dev', pos: '-bottom-4 -left-4', color: 'bg-accent/20 border-accent/40 text-accent' },
                { label: 'E-commerce', pos: 'top-1/2 -right-16', color: 'bg-purple-500/20 border-purple-400/40 text-purple-300' },
              ].map(tag => (
                <motion.div key={tag.label} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className={`absolute ${tag.pos} px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur ${tag.color}`}>{tag.label}</motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Emmax</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">A <strong className="text-foreground">Digital Marketing Specialist, Website Developer, and E-commerce Expert</strong> passionate about helping businesses grow online.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div><p className="font-semibold text-sm">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all cursor-pointer">Let's Work Together</a>
              <a href="#portfolio" className="px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary/40 transition-colors cursor-pointer">See My Work</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}