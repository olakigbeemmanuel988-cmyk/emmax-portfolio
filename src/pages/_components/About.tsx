import { motion } from 'motion/react';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Certified Specialist', desc: 'Google, Meta & HubSpot certified' },
  { icon: TrendingUp, label: 'Results-Driven', desc: 'Proven ROI across every campaign' },
  { icon: Users, label: 'Client-First', desc: '100% satisfaction guaranteed' },
  { icon: CheckCircle, label: '5+ Years', desc: 'Building digital success stories' },
];

const floatingTags = [
  { label: 'SEO Expert', pos: '-top-4 -right-4', color: 'bg-primary/20 border-primary/40 text-primary' },
  { label: 'Web Dev', pos: '-bottom-4 -left-4', color: 'bg-accent/20 border-accent/40 text-accent' },
  { label: 'E-commerce', pos: 'top-1/2 -right-16', color: 'bg-purple-500/20 border-purple-400/40 text-purple-300' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 rounded-3xl border border-primary/20 rotate-3" />
              <div className="absolute inset-2 rounded-3xl border border-accent/15 -rotate-2" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://hercules-cdn.com/file_J4zCJTZRMqKDWhddo69uIfe6"
                  alt="Emmax - Digital Marketing Specialist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {floatingTags.map(tag => (
                <motion.div
                  key={tag.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute ${tag.pos} px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur ${tag.color}`}
                >
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">About Me</span>
            <h2 className="mt-3 mb-4 text-4xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Emmax</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
              A Digital Marketing Specialist, Website Developer, and E-commerce Expert passionate about helping businesses grow online.
              I combine data-driven strategies with beautiful design to deliver results that actually move the needle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary/40 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 cursor-pointer">
                {"Let's Work Together"}
              </a>
              <a href="#portfolio" className="px-6 py-3 rounded-full border border-border bg-card/50 text-foreground font-semibold text-sm hover:border-primary/40 transition-all cursor-pointer">
                See My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
