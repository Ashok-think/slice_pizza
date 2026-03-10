'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Gallery items from pizza/drink images we already have
const GALLERY = [
  { src: '/images/pepperoni/30.webp',   caption: 'Spicy Pepperoni',      span: 'row-span-2' },
  { src: '/images/truffle/30.webp',     caption: 'Truffle Shroom',        span: '' },
  { src: '/images/bbq/30.webp',         caption: 'BBQ Smokehouse',        span: '' },
  { src: '/images/garden/30.webp',      caption: 'Garden Fresh',          span: 'row-span-2' },
  { src: '/images/margherita/30.webp',  caption: 'Margherita Classica',   span: '' },
  { src: '/images/midnight/30.webp',    caption: 'The Midnight Black',    span: '' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 px-6 overflow-hidden"
      style={{ background: '#0a0804' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs uppercase tracking-[0.5em] text-[#ff4e00] mb-3">From Our Kitchen</p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#f0e8d5] leading-none">
            THE GALLERY
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          style={{ y }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px]"
        >
          {GALLERY.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="font-body text-sm text-[#6b5f4a] italic">
            📸 Tag us{' '}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-[#ff4e00] hover:underline">#SlicePizzaHyderabad</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: typeof GALLERY[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.03 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
      style={{ background: '#000', border: '1px solid rgba(245,166,35,0.1)' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.caption}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.05)' }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.9) 0%, transparent 60%)' }}
      >
        <p className="font-display text-lg text-[#f0e8d5] tracking-wider">{item.caption}</p>
      </div>

      {/* Theme glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,78,0,0.15) 0%, transparent 70%)' }} />
    </motion.div>
  );
}
