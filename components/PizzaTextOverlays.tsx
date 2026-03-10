'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import type { Pizza } from '@/data/products';

interface Props {
  pizza: Pizza;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

interface OverlaySection {
  title: string;
  subtitle: string;
  start: number;
  end: number;
}

export default function PizzaTextOverlays({ pizza, containerRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const sections: OverlaySection[] = [
    { ...pizza.section1, start: 0.0, end: 0.25 },
    { ...pizza.section2, start: 0.25, end: 0.5 },
    { ...pizza.section3, start: 0.5, end: 0.75 },
    { ...pizza.section4, start: 0.75, end: 1.0 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {sections.map((section, i) => (
        <TextSection
          key={i}
          section={section}
          scrollYProgress={scrollYProgress}
          themeColor={pizza.themeColor}
        />
      ))}

      {/* Bottom info bar */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 px-8">
        {pizza.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-display text-lg text-[#f5a623] tracking-widest">{stat.val}</span>
            <span className="font-body text-xs text-[#6b5f4a] uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextSection({
  section,
  scrollYProgress,
  themeColor,
}: {
  section: OverlaySection;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  themeColor: string;
}) {
  const mid = (section.start + section.end) / 2;
  const opacity = useTransform(
    scrollYProgress,
    [section.start, section.start + 0.05, mid, section.end - 0.05, section.end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [section.start, section.start + 0.1],
    [40, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute left-0 right-0 top-[15%] px-8 md:px-16 lg:px-24 max-w-4xl"
    >
      <h2
        className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none mb-4"
        style={{
          background: `linear-gradient(135deg, #f0e8d5 60%, ${themeColor} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {section.title}
      </h2>
      {section.subtitle && (
        <p className="font-body text-[clamp(1rem,2vw,1.4rem)] text-[#6b5f4a] italic leading-relaxed max-w-xl">
          {section.subtitle}
        </p>
      )}
    </motion.div>
  );
}
