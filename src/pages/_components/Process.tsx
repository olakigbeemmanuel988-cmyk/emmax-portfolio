import { motion } from 'motion/react';
import { MessageSquare, Search, Lightbulb, PenTool, Rocket, BarChart2, RefreshCw } from 'lucide-react';

const steps = [
  { number: '01', icon: MessageSquare, title: 'Discovery Call', desc: 'We start with a free consultation to understand your business, goals, and challenges in depth.', color: 'text-primary border-primary/30 bg-primary/10', line: 'bg-gradient-to-b from-primary to-accent' },
  { number: '02', icon: Search, title: 'Research & Audit', desc: 'Deep competitive analysis, market research, and audit of your current digital presence and gaps.', color: 'text-accent border-accent/30 bg-accent/10', line: 'bg-gradient-to-b from-accent to-purple-400' },
  { number: '03', icon: Lightbulb, title: 'Strategy Design', desc: 'Custom strategy crafted with clear KPIs, timelines, and measurable milestones for your goals.', color: 'text-purple-400 border-purple-400/30 bg-purple-400/10', line: 'bg-gradient-to-b from-purple-400 to-amber-400' },
  { number: '04', icon: PenTool, title: 'Creative Execution', desc: 'I build, design, and create all assets — websites, ad creatives, content, and automations.', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10', line: 'bg-gradient-to-b from-amber-400 to-emerald-400' },
  { number: '05', icon: Rocket, title: 'Launch', desc: 'Everything goes live with meticulous quality checks. Campaigns are launched and sites deployed.', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10', line: 'bg-gradient-to-b from-emerald-400 to-rose-400' },
  { number: '06', icon: BarChart2, title: 'Monitor & Optimize', desc: 'Real-time tracking, weekly reports, and continuous optimization to maximize ROI and results.', color: 'text-rose-400 border-rose-400/30 bg-rose-400/10', line: 'bg-gradient-to-b from-rose-400 to-primary' },
  { number: '07', icon: RefreshCw, title: 'Scale & Repeat', desc: 'What works gets scaled. We double down on winning strategies and expand into new channels.', color: 'text-primary border-primary/30 bg-primary/10', line: null },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            My{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
          </motion.h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex gap-6 relative">
              {step.line && <div className="absolute left-6 top-14 bottom-0 w-0.5 z-0"><div className={`h-full w-full ${step.line} opacity-30`} /></div>}
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${step.color}`}><step.icon size={20} /></div>
              <div className="pb-10 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest">{step.number}</span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
