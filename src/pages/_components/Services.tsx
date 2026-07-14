import { motion, useMotionValue, useTransform } from 'motion/react';
import { TrendingUp, Globe, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across SEO, PPC, social media, and email that consistently deliver measurable ROI.',
    features: ['SEO & Content Strategy', 'Social Media Marketing', 'PPC & Google Ads', 'Email Marketing'],
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/30 hover:border-primary/60',
    iconColor: 'text-primary bg-primary/10',
    badge: 'Most Popular',
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Professional, fast, and conversion-optimized websites built with modern technologies that impress and convert.',
    features: ['Custom Web Design', 'Landing Pages', 'WordPress & CMS', 'Speed Optimization'],
    color: 'from-accent/20 to-accent/5',
    border: 'border-accent/30 hover:border-accent/60',
    iconColor: 'text-accent bg-accent/10',
    badge: null,
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    desc: 'End-to-end online store setup, product sourcing, and growth strategies to maximize your e-commerce revenue.',
    features: ['Shopify & WooCommerce', 'Product Research', 'Store Optimization', 'Dropshipping Setup'],
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-400/30 hover:border-purple-400/60',
    iconColor: 'text-purple-400 bg-purple-400/10',
    badge: null,
  },
  {
    icon: Star,
    title: 'Product Reviews & Consulting',
    desc: 'Honest, in-depth product reviews and expert consulting to help businesses make smarter purchasing decisions.',
    features: ['Product Testing', 'Comparison Reports', 'Market Analysis', '1-on-1 Consulting'],
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-400/30 hover:border-amber-400/60',
    iconColor: 'text-amber-400 bg-amber-400/10',
    badge: null,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative p-6 rounded-2xl border bg-gradient-to-br ${service.color} ${service.border} transition-all duration-200 group cursor-default`}
    >
      {service.badge && (
        <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">{service.badge}</span>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.iconColor}`}>
        <service.icon size={22} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{service.desc}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all cursor-pointer">
        Get Started <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold tracking-widest text-primary uppercase">
            What I Offer
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Services That{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Drive Results</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => <ServiceCard key={service.title} service={service} index={i} />)}
        </div>
      </div>
    </section>
  );
}
