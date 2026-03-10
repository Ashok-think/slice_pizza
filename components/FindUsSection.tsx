'use client';

import { motion } from 'framer-motion';

const infoItems = [
  { icon: '📍', label: '12 Ember Lane, Koramangala, Bangalore' },
  { icon: '🕐', label: 'Monday – Sunday: 12pm – 11pm' },
  { icon: '📞', label: '+91 98765 43210' },
  { icon: '📧', label: 'hello@slicecafe.in' },
];

export default function FindUsSection() {
  return (
    <section id="find-us" className="py-24 px-6 bg-[#0a0804]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#f0e8d5] leading-none mb-10">
            COME FIND US
          </h2>
          <div className="flex flex-col gap-6">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <span className="font-body text-[#f0e8d5]/80 text-base leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#menu"
              className="font-body text-sm font-semibold px-6 py-3 rounded-full bg-[#ff4e00] text-white uppercase tracking-widest
                transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,78,0,0.6)]"
            >
              Order Online
            </a>
            <a
              href="tel:+919876543210"
              className="font-body text-sm font-semibold px-6 py-3 rounded-full border border-[rgba(245,166,35,0.3)] text-[#f5a623] uppercase tracking-widest
                transition-all duration-300 hover:border-[#f5a623]"
            >
              Call Us
            </a>
            <a
              href="#reservation"
              className="font-body text-sm font-semibold px-6 py-3 rounded-full border border-[rgba(255,78,0,0.3)] text-[#ff4e00] uppercase tracking-widest
                transition-all duration-300 hover:border-[#ff4e00]"
            >
              🍕 Book a Table
            </a>
          </div>
        </motion.div>

        {/* Right — Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl overflow-hidden"
          style={{ height: 420, border: '1px solid rgba(255,78,0,0.2)' }}
        >
          <iframe
            title="SLICE Cafe Location — Koramangala, Bangalore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5773055764456!2d77.6216!3d12.9346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c7a8d62d6f%3A0x4f7a231474c60e0e!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: 'invert(92%) hue-rotate(180deg) saturate(0.8) brightness(0.85)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
