'use client';

import { useEffect, useRef } from 'react';

const INGREDIENT_IMGS = [
  '/images/ingredients/pizza1-1.png',
  '/images/ingredients/pizza1-2.png',
  '/images/ingredients/pizza2-1.png',
  '/images/ingredients/pizza2-2.png',
  '/images/ingredients/pizza3-1.png',
  '/images/ingredients/pizza3-2.png',
  '/images/ingredients/pizza4-1.png',
  '/images/ingredients/pizza4-2.png',
  '/images/ingredients/pizza5-1.png',
  '/images/ingredients/pizza5-2.png',
  '/images/ingredients/pizza6-1.png',
  '/images/ingredients/pizza6-2.png',
  '/images/ingredients/pizza7-1.png',
  '/images/ingredients/pizza7-2.png',
];

interface Props { count?: number; className?: string; }

export default function FloatingIngredients({ count = 14, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    type P = { el: HTMLImageElement; x: number; y: number; vx: number; vy: number; r: number; vr: number; scale: number; opacity: number; loaded: boolean };
    const particles: P[] = [];

    for (let i = 0; i < count; i++) {
      const src = INGREDIENT_IMGS[i % INGREDIENT_IMGS.length];
      const el = document.createElement('img');
      const size = 44 + Math.random() * 48;
      el.style.cssText = `position:absolute;width:${size}px;height:auto;pointer-events:none;user-select:none;will-change:transform;opacity:0;filter:drop-shadow(0 4px 14px rgba(0,0,0,0.4));`;

      // If image doesn't load — hide it silently (user: "keep like 399 if not found")
      el.onerror = () => { el.style.display = 'none'; };
      el.src = src;
      container.appendChild(el);

      particles.push({
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.1 - Math.random() * 0.25, // gentle upward drift
        r: Math.random() * 360,
        vr: (Math.random() - 0.5) * 0.3,
        scale: 0.5 + Math.random() * 0.6,
        opacity: 0,
        loaded: false,
      });
    }

    const animate = () => {
      const W = container.offsetWidth || window.innerWidth;
      const H = container.offsetHeight || window.innerHeight;

      particles.forEach((p) => {
        // Fade in slowly
        if (p.opacity < 0.5) p.opacity = Math.min(0.5, p.opacity + 0.003);

        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;

        // Wrap edges
        if (p.x < -80) p.x = W + 60;
        if (p.x > W + 80) p.x = -60;
        if (p.y < -80) p.y = H + 60;
        if (p.y > H + 80) p.y = -60;

        p.el.style.opacity = String(p.opacity);
        p.el.style.transform = `translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg) scale(${p.scale})`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      particles.forEach((p) => p.el.remove());
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-[2] ${className}`}
      aria-hidden="true"
    />
  );
}
