'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import type { Pizza } from '@/data/products';

interface Props { pizzas: Pizza[] }

export default function AllPizzasScroll({ pizzas }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal translate — linear, no spring
  const xPercent = useTransform(scrollYProgress, [0, 1], [0, -(pizzas.length - 1) * 100]);

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setActiveIdx(Math.min(pizzas.length - 1, Math.round(v * (pizzas.length - 1))));
    });
  }, [scrollYProgress, pizzas.length]);

  const activePizza = pizzas[activeIdx];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
        <motion.div
          className="h-full origin-left"
          style={{ scaleX: scrollYProgress, background: activePizza?.themeColor ?? '#ff4e00' }}
        />
      </div>

      {/* Outer scroll container */}
      <div ref={containerRef} style={{ height: `${pizzas.length * 100}vh` }}>
        {/* Sticky viewport — NO overflow:hidden so text isn't clipped */}
        <div className="sticky top-0 h-screen" style={{ background: '#0a0804' }}>

          {/* Horizontal track */}
          <motion.div
            className="flex h-full"
            style={{
              x: `${0}%`,
              width: `${pizzas.length * 100}vw`,
              willChange: 'transform',
            }}
            animate={{ x: `${-(activeIdx * 100)}vw` }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {pizzas.map((p, i) => (
              <PizzaSlide key={p.id} pizza={p} index={i} isActive={i === activeIdx} />
            ))}
          </motion.div>

          {/* Dot nav — fixed right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
            {pizzas.map((p, i) => (
              <div key={p.id}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? 10 : 5,
                  height: i === activeIdx ? 10 : 5,
                  background: i === activeIdx ? p.themeColor : 'rgba(255,255,255,0.2)',
                  boxShadow: i === activeIdx ? `0 0 8px ${p.themeColor}` : 'none',
                }}
              />
            ))}
          </div>

          {/* Scroll hint on first slide */}
          {activeIdx === 0 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 animate-bounce pointer-events-none">
              <span className="font-body text-[9px] uppercase tracking-widest text-[#6b5f4a]">Scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 9l5 5 5-5" stroke="#ff4e00" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes floatSpin {
          0%   { transform: rotate(-3deg) translateY(0px); }
          50%  { transform: rotate(3deg) translateY(-14px); }
          100% { transform: rotate(-3deg) translateY(0px); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </>
  );
}

// ─── Single pizza slide ─────────────────────────────────────────────────────────────────────────────────
function PizzaSlide({ pizza, index, isActive }: { pizza: Pizza; index: number; isActive: boolean }) {
  return (
    <div
      className="relative w-screen h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:items-center"
      style={{ padding: '0 5vw' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 80% at 65% 50%, ${pizza.themeColor}18 0%, transparent 65%)`,
        transition: 'opacity 0.6s ease',
        opacity: isActive ? 1 : 0,
      }} />
      {/* Edge vignette — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{
        boxShadow: 'inset 80px 0 120px rgba(10,8,4,0.9), inset -80px 0 120px rgba(10,8,4,0.9)',
      }} />

      {/* on mobile: image FIRST (top), then text below */}
      {/* on desktop: text LEFT, image RIGHT */}

      {/* ── IMAGE (top on mobile, right on desktop) ── */}
      <div className="relative z-10 flex items-center justify-center flex-shrink-0
        w-[65vw] h-[38vh] md:h-full md:flex-1 md:w-auto order-1 md:order-2">
        {/* Glow ring */}
        <div className="absolute rounded-full pointer-events-none" style={{
          width: '55%', height: '55%',
          background: `radial-gradient(circle, ${pizza.themeColor}45 0%, transparent 60%)`,
          filter: 'blur(40px)',
        }} />

        {/* Pizza image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${pizza.folderPath}/30.webp`}
          alt={pizza.name}
          className="relative select-none"
          style={{
            width: 'min(55vw, 480px)',
            height: 'min(55vw, 480px)',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            filter: `drop-shadow(0 0 40px ${pizza.themeColor}80) brightness(1.1)`,
            animation: isActive ? 'floatSpin 5s ease-in-out infinite' : 'none',
          }}
        />

        {/* Ghost slide number — desktop only */}
        <div className="absolute bottom-6 left-8 pointer-events-none select-none hidden md:block">
          <span className="font-display" style={{
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            lineHeight: 1,
            color: `${pizza.themeColor}0d`,
            WebkitTextStroke: `1px ${pizza.themeColor}20`,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Ingredient pills — desktop only */}
        {pizza.ingredients.slice(0, 3).map((ing, j) => (
          <div key={ing}
            className="absolute right-2 font-body text-[9px] text-[#f0e8d5]/70 rounded-full px-2.5 py-1 border border-[rgba(255,255,255,0.07)] whitespace-nowrap backdrop-blur-sm hidden md:block"
            style={{
              top: `${25 + j * 22}%`,
              background: 'rgba(10,8,4,0.75)',
              animation: isActive ? `fadeUp 0.4s ${0.3 + j * 0.08}s ease both` : 'none',
              opacity: 0,
            }}>
            {ing}
          </div>
        ))}
      </div>

      {/* ── TEXT (bottom on mobile, left on desktop) ── */}
      <div className="relative z-20 flex flex-col order-2 md:order-1
        w-full md:w-[42%] md:min-w-0 md:pr-8
        px-2 pb-4 md:pb-0 md:px-0
        items-center md:items-start text-center md:text-left">

        {/* Badge */}
        <span className="font-body text-[10px] uppercase tracking-[0.4em] px-3 py-1 rounded-full border mb-3 whitespace-nowrap"
          style={{ borderColor: `${pizza.themeColor}55`, color: pizza.themeColor }}>
          {pizza.badge}
        </span>

        {/* Name */}
        <h2 className="font-display leading-[0.9] mb-2 break-words w-full"
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 5rem)',
            color: '#f0e8d5',
            textShadow: `0 0 60px ${pizza.themeColor}40`,
            animation: isActive ? 'fadeUp 0.45s ease forwards' : 'none',
          }}>
          {pizza.name.toUpperCase()}
        </h2>

        {/* Tagline */}
        <p className="font-body text-sm md:text-base mb-3 italic"
          style={{ color: pizza.themeColor, animation: isActive ? 'fadeUp 0.45s 0.07s ease both' : 'none', opacity: 0 }}>
          {pizza.tagline}
        </p>

        {/* Craft detail — hidden on small mobile to save space */}
        <div className="mb-3 hidden sm:block" style={{ animation: isActive ? 'fadeUp 0.45s 0.14s ease both' : 'none', opacity: 0 }}>
          <p className="font-body text-[9px] uppercase tracking-[0.4em] mb-0.5" style={{ color: `${pizza.themeColor}90` }}>
            The Craft
          </p>
          <p className="font-display text-lg text-[#f0e8d5] leading-snug mb-1">
            {pizza.section2.title}
          </p>
          <p className="font-body text-xs text-[#6b5f4a] leading-relaxed line-clamp-2">
            {pizza.section2.subtitle}
          </p>
        </div>

        {/* Stats — hidden on mobile */}
        <div className="flex gap-5 mb-4 hidden sm:flex" style={{ animation: isActive ? 'fadeUp 0.45s 0.21s ease both' : 'none', opacity: 0 }}>
          {pizza.stats.map(s => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-body text-[8px] uppercase tracking-widest text-[#6b5f4a]">{s.label}</span>
              <span className="font-display text-sm text-[#f0e8d5]">{s.val}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-3 justify-center md:justify-start" style={{ animation: isActive ? 'fadeUp 0.45s 0.28s ease both' : 'none', opacity: 0 }}>
          <span className="font-display text-2xl md:text-3xl" style={{ color: pizza.themeColor }}>{pizza.price}</span>
          <a href="#menu"
            className="font-body text-xs font-semibold px-4 py-2 rounded-full text-white transition-all hover:scale-105"
            style={{ background: pizza.themeColor }}>
            Order Now →
          </a>
        </div>
      </div>
    </div>
  );
}
