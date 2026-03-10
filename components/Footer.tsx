'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const menuLinks = ['All Pizzas', 'Drinks', 'Specials', 'Catering'];
const infoLinks = ['Our Story', 'Careers', 'Press', 'Contact'];
const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'TikTok', icon: '🎵', href: '#' },
  { label: 'Twitter', icon: '🐦', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#080604] border-t border-[rgba(245,166,35,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="font-display text-4xl tracking-wider">
              <span className="text-white">SL</span>
              <span className="text-[#ff4e00]">I</span>
              <span className="text-white">CE</span>
            </a>
            <p className="font-body text-sm text-[#6b5f4a] leading-relaxed max-w-xs">
              Underground wood-fired pizza, crafted with obsession. Est. 2024, Hyderabad.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-[rgba(245,166,35,0.2)] flex items-center justify-center text-sm
                    hover:border-[#ff4e00] hover:bg-[rgba(255,78,0,0.1)] transition-all duration-200"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Menu */}
          <div className="flex flex-col gap-3">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#f5a623] font-semibold mb-2">Menu</h4>
            {menuLinks.map((link) => (
              <a
                key={link}
                href="#menu"
                className="font-body text-sm text-[#6b5f4a] hover:text-[#f0e8d5] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 — Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#f5a623] font-semibold mb-2">Info</h4>
            {infoLinks.map((link) => (
              <a
                key={link}
                href="#about"
                className="font-body text-sm text-[#6b5f4a] hover:text-[#f0e8d5] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 4 — Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-[#f5a623] font-semibold mb-2">
              Stay in the loop
            </h4>
            <p className="font-body text-sm text-[#6b5f4a]">
              New specials, events, and behind-the-scenes fire.
            </p>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-body text-sm text-[#ff4e00]"
              >
                ✓ You are on the list!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="font-body text-sm px-4 py-2.5 rounded-full bg-[#161310] border border-[rgba(245,166,35,0.2)]
                    text-[#f0e8d5] placeholder-[#6b5f4a] outline-none focus:border-[#ff4e00] transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="font-body text-xs font-semibold px-5 py-2.5 rounded-full bg-[#ff4e00] text-white uppercase tracking-widest
                    transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,78,0,0.6)] hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(245,166,35,0.08)] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#6b5f4a]">
            © 2024 SLICE Cafe. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#6b5f4a]">
            Made with 🔥 in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
