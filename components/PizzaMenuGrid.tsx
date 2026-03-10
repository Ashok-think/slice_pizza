'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Pizza } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ZOMATO_PIZZA_URL = 'https://www.zomato.com/hyderabad/delivery/dish-pizza';


// ─── Pizza Card ───────────────────────────────────
interface CardProps {
  pizza: Pizza;
  index: number;
}

function PizzaCard({ pizza, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(`${pizza.folderPath}/30.webp`);
  const [imgFailed, setImgFailed] = useState(false);
  const { addItem, setOpen } = useCart();

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reset image when pizza changes
  useEffect(() => {
    setImgSrc(`${pizza.folderPath}/30.webp`);
    setImgFailed(false);
  }, [pizza.folderPath]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    el.style.transform = `scale(1.04) perspective(700px) rotateX(${-dy * 12}deg) rotateY(${dx * 12}deg)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = 'scale(1) perspective(700px) rotateX(0deg) rotateY(0deg)';
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.7s ease ${index * 110}ms, transform 0.7s ease ${index * 110}ms`,
        background: '#131008',
        border: '1px solid rgba(245,166,35,0.15)',
        boxShadow: hovered
          ? `0 0 40px rgba(255,78,0,0.25), 0 20px 60px rgba(0,0,0,0.5)`
          : '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      {/* Badge + Spice */}
      <div className="absolute top-3 left-3 z-20 font-body text-xs font-bold px-2.5 py-1 rounded-full text-white"
        style={{ background: pizza.themeColor }}>
        {pizza.badge}
      </div>
      <div className="absolute top-3 right-3 z-20 font-body text-xs text-[#f0e8d5] bg-[rgba(0,0,0,0.65)] px-2 py-1 rounded-full backdrop-blur-sm">
        {'🌶'.repeat(pizza.spiceLevel)}
      </div>

      {/* Pizza Image — hover overlay is scoped inside here so buttons stay visible */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center p-3" style={{ background: '#000000' }}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle, ${pizza.themeColor}25 0%, transparent 70%)` }} />
        {imgFailed ? (
          <div className="text-[90px] select-none">🍕</div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={pizza.name}
            className="w-52 h-52 object-contain relative z-10"
            style={{
              filter: `drop-shadow(0 10px 24px ${pizza.themeColor}60)`,
              mixBlendMode: 'screen',
            }}
            onError={() => {
              if (!imgFailed) setImgFailed(true);
            }}
          />
        )}

        {/* Hover overlay — scoped inside image div only, never covers buttons */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-4"
          style={{
            background: `linear-gradient(to top, ${pizza.themeColor}ee 0%, ${pizza.themeColor}70 50%, transparent 85%)`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <p className="font-display text-sm text-white mb-1 tracking-wider">INGREDIENTS</p>
          <ul className="space-y-0.5">
            {pizza.ingredients.slice(0, 4).map((ing) => (
              <li key={ing} className="font-body text-[11px] text-white/90 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white/60 block shrink-0" />
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Info Row */}
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl text-[#f0e8d5] tracking-wide leading-tight">{pizza.name}</h3>
          <div className="flex flex-col items-end shrink-0">
            <span className="font-display text-xl" style={{ color: pizza.themeColor }}>{pizza.price}</span>
            {pizza.originalPrice && (
              <span className="font-body text-[10px] text-[#6b5f4a] line-through">{pizza.originalPrice}</span>
            )}
          </div>
        </div>
        <p className="font-body text-xs text-[#6b5f4a] mb-3 line-clamp-2">{pizza.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              const priceNum = parseInt(pizza.price.replace(/[^0-9]/g, ''), 10);
              addItem({
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                priceNum,
                themeColor: pizza.themeColor,
                imageSrc: `${pizza.folderPath}/30.webp`,
              });
              setOpen(true);
            }}
            className="flex-1 font-body text-xs font-semibold uppercase tracking-wider px-3 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
            style={{ background: pizza.themeColor, boxShadow: `0 0 16px ${pizza.themeColor}50` }}
          >
            🛒 Add to Cart
          </button>
          <a
            href={ZOMATO_PIZZA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-body text-xs font-semibold uppercase tracking-wider px-3 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1.5"
            style={{ background: '#e23744', boxShadow: '0 0 12px rgba(226,55,68,0.4)' }}
          >
            🍕 Zomato
          </a>
        </div>
      </div>


    </div>
  );
}

// ─── Section ──────────────────────────────────────
export default function PizzaMenuGrid({ pizzas }: { pizzas: Pizza[] }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          ref={headingRef}
          className="font-display text-[clamp(3rem,8vw,7rem)] text-[#f0e8d5] leading-none mb-3"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(60px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          THE PIZZA LINEUP
        </h2>
        <p className="font-body text-[#6b5f4a] text-lg italic">Six perfections. One kitchen.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {pizzas.map((pizza, i) => (
          <PizzaCard key={pizza.id} pizza={pizza} index={i} />
        ))}
      </div>
    </section>
  );
}
