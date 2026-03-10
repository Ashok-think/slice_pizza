'use client';

const text = 'WOOD FIRED ★ FRESH DAILY ★ CRAFTED WITH LOVE ★ EST. 2024 ★ NO SHORTCUTS ★ ';

export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden bg-[#ff4e00] py-4 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate text twice to create seamless loop */}
        {[1, 2].map((n) => (
          <span
            key={n}
            className="font-display text-xl text-white uppercase tracking-[0.2em] pr-0"
          >
            {text.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
