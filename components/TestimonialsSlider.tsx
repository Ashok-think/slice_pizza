'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Best pizza in the city — the Midnight Black genuinely changed how I think about pizza.",
    author: "Aditya R.",
    stars: 5,
  },
  {
    quote: "The Truffle Shroom is absolutely insane. Came for the vibe, stayed for the food.",
    author: "Meera S.",
    stars: 5,
  },
  {
    quote: "We ordered the full lineup for our office party. Not a single slice was left. Legendary.",
    author: "Rahul T.",
    stars: 5,
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(i);
    startTimer();
  };

  return (
    <section
      className="py-24 px-6 relative"
      style={{
        background: 'linear-gradient(to bottom, #0a0804, #131008, #0a0804)',
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,166,35,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#f0e8d5] mb-12">
          WHAT PEOPLE SAY
        </h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <span key={i} className="text-[#f5a623] text-xl">★</span>
                ))}
              </div>

              <blockquote className="font-accent text-[clamp(1.1rem,2.5vw,1.6rem)] italic text-[#f0e8d5] leading-relaxed mb-6">
                "{testimonials[current].quote}"
              </blockquote>
              <cite className="font-body text-sm font-medium tracking-widest uppercase text-[#6b5f4a] not-italic">
                — {testimonials[current].author}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex gap-3 justify-center mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? '#ff4e00' : '#6b5f4a',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
