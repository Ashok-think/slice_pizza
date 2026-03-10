'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string; phone: string; date: string; time: string; guests: string; notes: string;
}

const TIME_SLOTS = ['12:00 PM','1:00 PM','2:00 PM','3:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'];
const GUEST_OPTIONS = ['1','2','3','4','5','6','7','8+'];

export default function ReservationForm() {
  const [form, setForm] = useState<FormData>({ name:'', phone:'', date:'', time:'', guests:'2', notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <section id="reservation" className="py-24 px-6 bg-[#0a0804]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
            className="text-6xl mb-6">🎉</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-[#f0e8d5] leading-none mb-4">
            TABLE RESERVED!
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-body text-[#6b5f4a] text-lg mb-8">
            We're expecting you, {form.name}! See you on {form.date} at {form.time} for {form.guests} guests.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="font-body text-sm text-[#6b5f4a] mb-8">
            📱 We'll WhatsApp you a confirmation shortly at {form.phone}
          </motion.p>
          <button onClick={() => setSubmitted(false)}
            className="font-body text-sm font-semibold px-6 py-3 rounded-full border border-[rgba(245,166,35,0.3)] text-[#f5a623] uppercase tracking-widest hover:border-[#f5a623] transition-colors">
            Book Another Table
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 px-6" style={{ background: 'linear-gradient(to bottom, #0a0804, #0d0a05, #0a0804)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] text-[#f0e8d5] leading-none mb-3">
            BOOK A TABLE
          </h2>
          <p className="font-body text-[#6b5f4a] italic text-lg">Reserve your spot at the underground</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 rounded-2xl"
          style={{ background: '#131008', border: '1px solid rgba(245,166,35,0.12)' }}
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Full Name *</label>
            <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
              placeholder="Your name"
              className="px-4 py-3 rounded-xl font-body text-sm text-[#f0e8d5] outline-none transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,166,35,0.15)' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,78,0,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,166,35,0.15)'}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Phone Number *</label>
            <input required type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
              placeholder="+91 98765 43210"
              className="px-4 py-3 rounded-xl font-body text-sm text-[#f0e8d5] outline-none transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,166,35,0.15)' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,78,0,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,166,35,0.15)'}
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Date *</label>
            <input required type="date" value={form.date} min={today}
              onChange={e => setForm(f => ({...f, date: e.target.value}))}
              className="px-4 py-3 rounded-xl font-body text-sm text-[#f0e8d5] outline-none transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,166,35,0.15)', colorScheme: 'dark' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,78,0,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,166,35,0.15)'}
            />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Time *</label>
            <select required value={form.time} onChange={e => setForm(f => ({...f, time: e.target.value}))}
              className="px-4 py-3 rounded-xl font-body text-sm text-[#f0e8d5] outline-none transition-all duration-200 cursor-pointer"
              style={{ background: '#1a1208', border: '1px solid rgba(245,166,35,0.15)', colorScheme: 'dark' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,78,0,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,166,35,0.15)'}
            >
              <option value="" disabled>Pick a time</option>
              {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Number of Guests *</label>
            <div className="flex gap-2 flex-wrap">
              {GUEST_OPTIONS.map(g => (
                <button key={g} type="button" onClick={() => setForm(f => ({...f, guests: g}))}
                  className="px-4 py-2 rounded-full font-body text-sm transition-all duration-200"
                  style={{
                    background: form.guests === g ? '#ff4e00' : 'rgba(255,255,255,0.04)',
                    border: form.guests === g ? '1px solid #ff4e00' : '1px solid rgba(245,166,35,0.15)',
                    color: form.guests === g ? '#fff' : '#6b5f4a',
                    boxShadow: form.guests === g ? '0 0 16px rgba(255,78,0,0.4)' : 'none',
                  }}
                >{g}</button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider text-[#6b5f4a]">Special Requests</label>
            <textarea value={form.notes} onChange={e => setForm(f => ({...f, notes: e.target.value}))}
              placeholder="Allergies, celebrations, preferences..."
              rows={3}
              className="px-4 py-3 rounded-xl font-body text-sm text-[#f0e8d5] outline-none resize-none transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,166,35,0.15)' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,78,0,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,166,35,0.15)'}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: loading ? '#6b5f4a' : 'linear-gradient(135deg, #ff4e00, #e23000)',
                boxShadow: loading ? 'none' : '0 0 30px rgba(255,78,0,0.4)',
              }}
            >
              {loading ? '🔥 Reserving your table...' : '🍕 Reserve Table'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
