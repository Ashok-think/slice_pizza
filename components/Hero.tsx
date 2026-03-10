'use client';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const ZOMATO_URL = 'https://www.zomato.com/hyderabad/delivery/dish-pizza';

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0a0804' }}
    >
      {/* ── Fullscreen Video Background ── */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      />

      {/* ── Gradient Overlays for perfect text readability ── */}
      {/* Left vignette — darkens where text sits */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,8,4,0.92) 0%, rgba(10,8,4,0.75) 40%, rgba(10,8,4,0.35) 70%, rgba(10,8,4,0.15) 100%)',
        }}
      />

      {/* Top fade — blends into navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,8,4,0.8) 0%, transparent 100%)' }}
      />
      {/* Bottom fade — blends into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,8,4,1) 0%, rgba(10,8,4,0.6) 50%, transparent 100%)' }}
      />
      {/* Ember color tint — matches brand palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(255,78,0,0.08) 0%, transparent 65%)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28">
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-px bg-[#ff4e00]" />
            <span className="font-body text-xs uppercase tracking-[0.35em] text-[#ff4e00]">
              Wood-Fired Pizzeria · Hyderabad
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="flex flex-col leading-none">
            {['FIRE.', 'CRAFT.', 'PIZZA.'].map((word, i) => (
              <motion.h1
                key={word}
                custom={i}
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                className="font-display leading-[0.88]"
                style={{
                  fontSize: 'clamp(5rem, 14vw, 11rem)',
                  color: i === 1 ? '#ff4e00' : '#f0e8d5',
                  textShadow:
                    i === 1
                      ? '0 0 80px rgba(255,78,0,0.6)'
                      : '0 4px 40px rgba(10,8,4,0.8)',
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="font-body text-base md:text-lg italic leading-relaxed max-w-md"
            style={{ color: 'rgba(240,232,213,0.75)' }}
          >
            Wood-fired perfection, crafted in the underground.
            Where every pizza tells a story worth tasting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#menu"
              className="font-body font-semibold px-8 py-4 rounded-full bg-[#ff4e00] text-white uppercase tracking-widest text-sm
                transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,78,0,0.7)]"
            >
              Explore Menu
            </a>
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full border border-[rgba(240,232,213,0.3)] text-[#f0e8d5] uppercase tracking-widest text-sm
                transition-all duration-300 hover:border-[#ff4e00] hover:text-[#ff4e00] backdrop-blur-sm flex items-center gap-2"
            >
              <span>🛵</span> Order on Zomato
            </a>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-1"
          >
            {['🔥 Wood Fired', '🌡️ 450°C Oven', '⏳ 48hr Dough', '⭐ 500+ Reviews'].map((tag) => (
              <span
                key={tag}
                className="font-body text-xs uppercase tracking-wider text-[#6b5f4a] border border-[rgba(107,95,74,0.3)] px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: 'rgba(10,8,4,0.4)' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-[#6b5f4a]">Scroll</span>
        <motion.div
          className="w-px bg-gradient-to-b from-[#ff4e00] to-transparent"
          animate={{ height: [28, 44, 28] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
