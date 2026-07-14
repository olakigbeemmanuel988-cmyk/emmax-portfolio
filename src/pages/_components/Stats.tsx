import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Completed', color: 'text-primary' },
  { number: 30, suffix: '+', label: 'Happy Clients', color: 'text-accent' },
  { number: 5, suffix: '+', label: 'Years Experience', color: 'text-purple-400' },
  { number: 100, suffix: '%', label: 'Satisfaction Rate', color: 'text-emerald-400' },
];

function CountUp({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else { setCount(Math.floor(start)); }
    }, 20);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className={`text-5xl md:text-6xl font-extrabold ${color}`} style={{ fontFamily: 'Syne, sans-serif' }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 border-y border-border bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center flex flex-col items-center gap-2"
            >
              <CountUp target={stat.number} suffix={stat.suffix} color={stat.color} />
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
