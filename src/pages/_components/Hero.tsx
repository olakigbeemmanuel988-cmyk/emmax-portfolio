import { motion } from 'motion/react';
import { ArrowRight, Eye, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene.tsx';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.65_0.28_270_/_0.15)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(oklch(0.65 0.28 270 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.28 270 / 0.3) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new projects
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance mb-6 leading-tight">
          Grow Your Business with{' '}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">Digital Marketing,</span>{' '}
          High-Converting Websites{' '}
          <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">{'&'} E-commerce</span>{' '}Solutions
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          I help businesses increase sales, build professional websites, grow their online presence, and make smarter buying decisions through honest product reviews.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 hover:scale-105 transition-all cursor-pointer shadow-[0_0_30px_oklch(0.65_0.28_270_/_0.5)]">Get a Free Consultation <ArrowRight className="w-5 h-5" /></a>
          <a href="#portfolio" className="flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-card/50 backdrop-blur text-foreground font-semibold text-base hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer"><Eye className="w-5 h-5" /> View My Portfolio</a>
          <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-base hover:bg-accent/20 transition-all cursor-pointer"><Mail className="w-5 h-5" /> Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}