'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function AntigravityBanner() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: '70vh', minHeight: 400 }}>
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full"
        aria-hidden
      >
        <div
          className="w-full h-[120%] -top-[10%] absolute"
          style={{
            backgroundImage: 'url(/images/antigravity.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        >
          {/* Fallback gradient if no image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1a0800 0%, #0a0804 50%, #160d00 100%)',
            }}
          />
        </div>
      </motion.div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,8,4,0.8) 100%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-display text-[clamp(2rem,8vw,7rem)] leading-[0.9]"
          style={{
            background: 'linear-gradient(135deg, #ff4e00 0%, #f5a623 60%, #ff4e00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SIX PIZZAS.
          <br />
          THREE DRINKS.
          <br />
          ONE OBSESSION.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#ff4e00] to-transparent"
        />
      </div>
    </section>
  );
}
