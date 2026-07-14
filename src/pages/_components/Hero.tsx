import { motion } from 'motion/react';
import { ArrowRight, Eye, Mail, Sparkles } from 'lucide-react';
import ThreeScene from './ThreeScene.tsx';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0"><ThreeScene /></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/30 to-background/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance mb-6 leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Grow Your Business with{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Marketing,</span>{' '}
          High-Converting{' '}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Websites</span>{' '}
          {'&'} E-commerce{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          I help businesses increase sales, build professional websites, grow their online presence,
          and make smarter buying decisions through honest product reviews.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25 cursor-pointer">
            Get a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-border bg-card/50 text-foreground font-semibold text-base hover:border-primary/50 hover:bg-card transition-all cursor-pointer">
            <Eye size={18} />
            View My Portfolio
          </a>
          <a href="mailto:emmax.digitalcoach@gmail.com" className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-semibold text-base hover:bg-accent/20 transition-all cursor-pointer">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 rounded-full bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
