'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WA_NUMBER = '919876543210'; // WhatsApp number without +
const WA_MESSAGE = encodeURIComponent('Hi! I want to place an order at SLICE Pizza.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex items-center gap-3">
      {/* Label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="font-body text-xs font-semibold text-white px-3 py-2 rounded-full whitespace-nowrap"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}
          >
            Order via WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order via WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: hovered ? 1.12 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: hovered ? '0 0 30px rgba(37,211,102,0.6)' : '0 4px 20px rgba(37,211,102,0.3)',
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.65 4.77 1.79 6.77L2 30l7.38-1.77C11.3 29.37 13.6 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.17 0-4.22-.6-5.97-1.63l-.43-.25-4.4 1.05 1.08-4.29-.28-.45A11.47 11.47 0 0 1 4.5 16C4.5 9.65 9.65 4.5 16 4.5S27.5 9.65 27.5 16 22.35 27.5 16 27.5zm6.28-8.58c-.34-.17-2.03-1-2.34-1.12-.32-.12-.55-.17-.78.17s-.89 1.12-1.09 1.35c-.2.22-.4.25-.74.08a9.34 9.34 0 0 1-2.74-1.69 10.23 10.23 0 0 1-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.22-.34.34-.57.11-.22.06-.42-.03-.59s-.78-1.87-1.07-2.56c-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.59.08-.9.42-.31.33-1.17 1.14-1.17 2.79s1.2 3.23 1.36 3.45c.17.22 2.35 3.59 5.7 5.04.79.34 1.41.54 1.89.69.8.25 1.52.22 2.09.13.64-.1 1.97-.8 2.25-1.58.28-.77.28-1.43.2-1.57-.09-.14-.31-.22-.66-.39z" />
        </svg>
      </motion.a>
    </div>
  );
}
