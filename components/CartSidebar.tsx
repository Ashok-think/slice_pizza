'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const ZOMATO_URL = 'https://www.zomato.com/bangalore/search?q=pizza';

export default function CartSidebar() {
  const { items, open, setOpen, removeItem, updateQty, total, clearCart } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed right-0 top-0 h-full w-full max-w-md z-[201] flex flex-col"
            style={{ background: '#0f0c07', borderLeft: '1px solid rgba(245,166,35,0.15)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(245,166,35,0.1)]">
              <div>
                <h2 className="font-display text-2xl text-[#f0e8d5] tracking-wider">YOUR ORDER</h2>
                <p className="font-body text-xs text-[#6b5f4a] mt-0.5">{items.length} item{items.length !== 1 ? 's' : ''} in cart</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full border border-[rgba(240,232,213,0.15)] flex items-center justify-center text-[#f0e8d5] hover:border-[#ff4e00] hover:text-[#ff4e00] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="text-6xl">🍕</div>
                  <p className="font-display text-2xl text-[#f0e8d5]">Cart is empty</p>
                  <p className="font-body text-sm text-[#6b5f4a]">Add some delicious pizzas or drinks!</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="font-body text-sm font-semibold px-6 py-3 rounded-full bg-[#ff4e00] text-white uppercase tracking-widest mt-2 hover:scale-105 transition-transform"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-4 p-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,166,35,0.1)' }}
                    >
                      {/* Image */}
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                        style={{ background: '#000' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.imageSrc} alt={item.name}
                          className="w-14 h-14 object-contain" style={{ mixBlendMode: 'screen' }} />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm font-semibold text-[#f0e8d5] truncate">{item.name}</p>
                        <p className="font-body text-xs text-[#f5a623] mt-0.5">₹{(item.priceNum * item.qty).toLocaleString()}</p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 rounded-full border border-[rgba(240,232,213,0.2)] text-[#f0e8d5] flex items-center justify-center text-sm hover:border-[#ff4e00] hover:text-[#ff4e00] transition-colors"
                        >−</button>
                        <span className="font-body text-sm text-[#f0e8d5] w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 rounded-full border border-[rgba(240,232,213,0.2)] text-[#f0e8d5] flex items-center justify-center text-sm hover:border-[#ff4e00] hover:text-[#ff4e00] transition-colors"
                        >+</button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-full text-[#6b5f4a] flex items-center justify-center text-xs hover:text-[#ff4e00] transition-colors ml-1"
                        >🗑</button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[rgba(245,166,35,0.1)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-[#6b5f4a] uppercase tracking-wider">Total</span>
                  <span className="font-display text-2xl text-[#f5a623]">₹{total.toLocaleString()}</span>
                </div>
                <a
                  href={ZOMATO_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #ff4e00, #e23000)', boxShadow: '0 0 24px rgba(255,78,0,0.4)' }}
                >
                  🛵 Order on Zomato
                </a>
                <button
                  onClick={clearCart}
                  className="w-full py-2.5 rounded-xl font-body text-xs text-[#6b5f4a] uppercase tracking-widest border border-[rgba(107,95,74,0.2)] hover:border-[rgba(255,78,0,0.4)] hover:text-[#ff4e00] transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
