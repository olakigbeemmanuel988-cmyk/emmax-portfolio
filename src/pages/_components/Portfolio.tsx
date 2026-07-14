import { motion } from 'motion/react';
import { ExternalLink, TrendingUp, ShoppingCart, Globe, BarChart2, Mail, Star } from 'lucide-react';

const projects = [
  { title: 'Fashion Brand E-commerce', category: 'E-commerce', icon: ShoppingCart, color: 'from-primary/20 to-primary/5', iconColor: 'text-primary', metrics: [{ label: 'Revenue Increase', value: '+340%' }, { label: 'Conversion Rate', value: '4.8%' }], desc: 'Full Shopify store build with custom theme, product photography direction, and Facebook ads funnel.', tags: ['Shopify', 'Facebook Ads', 'Email'] },
  { title: 'SaaS Landing Page', category: 'Web Development', icon: Globe, color: 'from-accent/20 to-accent/5', iconColor: 'text-accent', metrics: [{ label: 'Bounce Rate Drop', value: '-52%' }, { label: 'Demo Signups', value: '+180%' }], desc: 'High-converting SaaS landing page with animated sections, social proof, and A/B-tested CTAs.', tags: ['React', 'Framer', 'CRO'] },
  { title: 'Local Restaurant Chain', category: 'Digital Marketing', icon: TrendingUp, color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-400', metrics: [{ label: 'Google Traffic', value: '+210%' }, { label: 'Monthly Orders', value: '+95 avg' }], desc: 'Full local SEO overhaul, Google Business optimization, and Instagram content strategy.', tags: ['Local SEO', 'Instagram', 'Google'] },
  { title: 'Amazon FBA Product Launch', category: 'E-commerce', icon: BarChart2, color: 'from-amber-500/20 to-amber-500/5', iconColor: 'text-amber-400', metrics: [{ label: 'First Month Sales', value: '$18K' }, { label: 'Product Rating', value: '4.7★' }], desc: 'Product research, listing optimization, launch PPC campaigns, and early review strategy.', tags: ['Amazon FBA', 'PPC', 'SEO'] },
  { title: 'Email Re-engagement Campaign', category: 'Digital Marketing', icon: Mail, color: 'from-purple-500/20 to-purple-500/5', iconColor: 'text-purple-400', metrics: [{ label: 'Open Rate', value: '38%' }, { label: 'Revenue Recovered', value: '$12K' }], desc: 'Segmented win-back email series for a dormant list of 15K subscribers with personalized offers.', tags: ['Email', 'Klaviyo', 'Copywriting'] },
  { title: 'Fitness Influencer Site', category: 'Web Development', icon: Star, color: 'from-rose-500/20 to-rose-500/5', iconColor: 'text-rose-400', metrics: [{ label: 'Monthly Visitors', value: '25K+' }, { label: 'Membership Revenue', value: '+270%' }], desc: 'Custom WordPress site with membership portal, blog, and integrated coaching booking system.', tags: ['WordPress', 'Memberships', 'Booking'] },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold tracking-widest text-primary uppercase">My Work</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Recent{' '}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6 }} className={`group relative p-6 rounded-2xl border border-border bg-gradient-to-br ${project.color} hover:border-primary/40 transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-card/80 ${project.iconColor}`}><project.icon size={18} /></div>
                <span className="text-xs px-2.5 py-1 rounded-full border border-border bg-card/60 text-muted-foreground">{project.category}</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {project.metrics.map(m => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-card/60 border border-border/50 text-center">
                    <p className={`text-lg font-extrabold ${project.iconColor}`}>{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-card/80 text-muted-foreground border border-border/50">{tag}</span>)}
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink size={14} className="text-muted-foreground" /></div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 cursor-pointer">
            Start Your Project <TrendingUp size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
