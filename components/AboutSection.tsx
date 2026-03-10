'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: 500, suffix: '+', label: 'Happy Reviews' },
  { number: 6, suffix: '', label: 'Signature Pizzas' },
  { number: 3, suffix: '', label: 'Craft Drinks' },
];

function CountStat({ number, suffix, label, trigger }: { number: number; suffix: string; label: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1800;
    const step = number / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= number) {
        setCount(number);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [trigger, number]);

  return (
    <div className="p-6 rounded-2xl border border-[rgba(245,166,35,0.15)] bg-[#131008] flex flex-col gap-2">
      <span className="font-display text-6xl text-[#ff4e00] leading-none">
        {count}{suffix}
      </span>
      <span className="font-body text-sm text-[#6b5f4a] uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTrigger(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Quote + story */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-8"
        >
          <blockquote
            className="font-accent text-[clamp(2rem,5vw,3.5rem)] italic leading-tight"
            style={{
              background: 'linear-gradient(135deg, #f0e8d5 0%, #f5a623 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            "Born from a love of fire"
          </blockquote>
          <div className="w-12 h-px bg-[#ff4e00]" />
          <p className="font-body text-[#6b5f4a] leading-relaxed text-base">
            SLICE was born in a basement kitchen at 2am, fuelled by a dream and a wood-fired oven. 
            We started as a weekend pop-up in Koramangala, Bangalore — and the queue never left. 
            Today we serve six carefully crafted pizzas, three signature drinks, and an atmosphere 
            that makes you forget everything else. Every ingredient is sourced with intention. 
            Every pizza is built with obsession.
          </p>
          <p className="font-body text-[#6b5f4a] leading-relaxed text-base">
            We do not believe in shortcuts. Our dough ferments for 48 hours. Our sauces are 
            made from scratch. Our wood-fired oven runs at 450°C. This is what real pizza tastes like.
          </p>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-4"
        >
          {stats.map((s) => (
            <CountStat key={s.label} {...s} trigger={trigger} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
