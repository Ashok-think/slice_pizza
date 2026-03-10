'use client';

import { useState } from 'react';
import type { Drink } from '@/data/drinks';
import { useCart } from '@/context/CartContext';

const ZOMATO_DRINK_URL = 'https://www.zomato.com/bangalore/search?q=drinks';

interface Props {
  drink: Drink;
}

export default function DrinkCard({ drink }: Props) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const fallbackEmoji = drink.id === 'ember-lemonade' ? '🍋' : drink.id === 'midnight-matcha' ? '🍵' : '🍹';
  const { addItem } = useCart();

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(to bottom, ${drink.themeColor}16 0%, #131008 100%)`,
        border: `1px solid ${drink.themeColor}35`,
        boxShadow: hovered
          ? `0 0 40px ${drink.themeColor}50, 0 20px 60px rgba(0,0,0,0.6)`
          : '0 4px 20px rgba(0,0,0,0.4)',
        transform: hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10 font-body text-xs font-bold px-2.5 py-1 rounded-full text-white"
        style={{ background: drink.themeColor }}>
        {drink.badge}
      </div>

      {/* Image area */}
      <div
        className="w-full aspect-square flex items-center justify-center relative overflow-hidden"
        style={{ background: `radial-gradient(circle, ${drink.themeColor}20 0%, transparent 70%)` }}
      >
        {imgFailed ? (
          <div className="text-[80px] select-none">{fallbackEmoji}</div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={drink.imagePath}
            alt={drink.name}
            className="w-52 h-52 object-contain"
            style={{
              mixBlendMode: 'screen',
              filter: `drop-shadow(0 12px 28px ${drink.themeColor}80)`,
            }}
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Glow overlay on hover */}
        <div className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${drink.themeColor}30 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-2xl text-[#f0e8d5] tracking-wide leading-tight">{drink.name}</h3>
          <span className="font-display text-xl shrink-0 text-[#f5a623]">{drink.price}</span>
        </div>
        <p className="font-body text-sm text-[#6b5f4a] italic">{drink.tagline}</p>
        <p className="font-body text-xs text-[#6b5f4a] leading-relaxed mt-0.5">{drink.description}</p>

        {/* Ingredients */}
        <ul className="mt-1 space-y-0.5">
          {drink.ingredients.slice(0, 3).map((ing) => (
            <li key={ing} className="font-body text-xs text-[#f0e8d5]/50 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ background: drink.themeColor }} />
              {ing}
            </li>
          ))}
        </ul>

        {/* Pairing */}
        <span className="font-body text-xs text-[#6b5f4a] border border-[rgba(107,95,74,0.25)] px-3 py-1.5 rounded-full self-start mt-1">
          🍕 Pairs with {drink.pairsWith}
        </span>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              const priceNum = parseInt((drink.price || '').replace(/[^0-9]/g, ''), 10) || 0;
              addItem({
                id: drink.id,
                name: drink.name,
                price: drink.price || '',
                priceNum,
                themeColor: drink.themeColor,
                imageSrc: drink.imagePath,
              });
            }}
            className="flex-1 font-body text-xs font-semibold uppercase tracking-wider px-3 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
            style={{ background: drink.themeColor, boxShadow: `0 0 14px ${drink.themeColor}50` }}
          >
            🛒 Add to Cart
          </button>
          <a
            href={ZOMATO_DRINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-body text-xs font-semibold uppercase tracking-wider px-3 py-2.5 rounded-xl border border-[rgba(240,232,213,0.2)] text-[#f0e8d5] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            🛵 Zomato
          </a>
        </div>
      </div>
    </div>
  );
}
