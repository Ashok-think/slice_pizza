'use client';

import { useEffect, useRef, useState } from 'react';
import { drinks } from '@/data/drinks';
import DrinkCard from './DrinkCard';

export default function DrinksSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="drinks"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(to bottom, #0a0804 0%, #131008 50%, #0a0804 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="font-display text-[clamp(3rem,8vw,7rem)] text-[#f0e8d5] leading-none mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            CRAFT DRINKS
          </h2>
          <p className="font-body text-[#6b5f4a] text-lg italic">
            Curated pairings for every pizza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drinks.map((drink, i) => (
            <div
              key={drink.id}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transition: `opacity 0.7s ease ${i * 150}ms, transform 0.7s ease ${i * 150}ms`,
              }}
            >
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
