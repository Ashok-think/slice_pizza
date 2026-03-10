# 🍕 SLICE — Premium Wood-Fired Pizza Cafe

> A cinematic, full-stack restaurant website for **SLICE**, a premium wood-fired pizzeria in Bangalore. Built with Next.js 14, TypeScript, Framer Motion, and Tailwind CSS.

**Live Demo →** [slice-psi.vercel.app](https://slice-psi.vercel.app)

---

![SLICE Hero](public/images/readme-hero.png)

---

## ✨ Features

| Feature                          | Description                                                      |
| -------------------------------- | ---------------------------------------------------------------- |
| 🎬 **Hero Video**                | Fullscreen wood-fired video background with blend effects        |
| 🔄 **Horizontal Pizza Showcase** | Scroll-driven left-to-right carousel through 10 signature pizzas |
| 🛒 **Cart Sidebar**              | Global cart with qty controls, total price, Order on Zomato CTA  |
| 🍕 **Pizza Menu Grid**           | 10-item menu with Add to Cart + Zomato/Swiggy ordering           |
| 🍹 **Drinks Section**            | Curated craft drinks with animated reveal                        |
| 📅 **Table Reservation**         | Multi-field booking form with success confirmation               |
| 🖼️ **Gallery Section**           | Masonry-style parallax gallery                                   |
| 💬 **WhatsApp Button**           | Floating order button with pre-filled message                    |
| ⏳ **Loading Screen**            | Branded intro animation before page loads                        |
| 🗺️ **Find Us Section**           | Google Maps embed + contact info + CTA buttons                   |
| 📱 **Fully Responsive**          | Mobile-first, works on all screen sizes                          |

---

## 🛠️ Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **State** — React Context API (Cart)
- **Fonts** — Bebas Neue (display) · DM Sans (body) · Playfair Display (accent)
- **Deployment** — [Vercel](https://vercel.com)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Ashok-think/slice_pizza.git
cd slice_pizza

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📁 Project Structure

```
slice_pizza/
├── app/
│   ├── page.tsx          # Main page — all sections assembled
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── globals.css       # Global styles, animations, CSS variables
├── components/
│   ├── Hero.tsx                  # Fullscreen video hero
│   ├── PizzaScrollSequence.tsx   # Horizontal scroll showcase
│   ├── PizzaMenuGrid.tsx         # Menu with cart integration
│   ├── CartSidebar.tsx           # Slide-in cart panel
│   ├── DrinksSection.tsx         # Craft drinks
│   ├── ReservationForm.tsx       # Table booking form
│   ├── GallerySection.tsx        # Masonry gallery
│   ├── WhatsAppButton.tsx        # Floating WhatsApp CTA
│   ├── LoadingScreen.tsx         # Intro loading animation
│   ├── FindUsSection.tsx         # Map + contact
│   ├── Navbar.tsx                # Sticky transparent nav
│   └── Footer.tsx                # Footer
├── context/
│   └── CartContext.tsx    # Global cart state
├── data/
│   ├── products.ts        # 10 pizza definitions with full metadata
│   └── drinks.ts          # Craft drinks data
└── public/
    ├── images/            # Pizza images (webp, scroll-animated)
    └── videos/
        └── hero.mp4       # Hero background video
```

---

## 🍕 Menu — Signature Pizzas

| #   | Pizza               | Price | Badge           |
| --- | ------------------- | ----- | --------------- |
| 1   | Spicy Pepperoni     | ₹599  | BESTSELLER      |
| 2   | Truffle Shroom      | ₹699  | CHEF'S PICK     |
| 3   | BBQ Smokehouse      | ₹649  | CROWD FAVOURITE |
| 4   | Garden Fresh        | ₹549  | VEGETARIAN      |
| 5   | Margherita Classica | ₹499  | THE CLASSIC     |
| 6   | The Midnight Black  | ₹749  | SIGNATURE       |
| 7   | Paneer Tikka Masala | ₹579  | INDIAN FUSION   |
| 8   | Four Cheese Bianca  | ₹649  | CHEESE LOVER    |
| 9   | Volcano Chicken     | ₹629  | FIRESTARTER     |

---

## ⚡ Performance Highlights

- **Single scroll listener** for the entire multi-pizza showcase (not 1 per pizza)
- **CSS `@keyframes`** used for pizza float animations — GPU-only, zero JS per frame
- **`mix-blend-mode: screen`** to remove dark backgrounds from product images without image editing
- **`will-change: transform`** on all animated elements for GPU compositing
- **`text-rendering: optimizeSpeed`** + `-webkit-font-smoothing: antialiased` for crisp text

---

## 📦 Deploy

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

```bash
git push origin main   # triggers auto-deploy on Vercel
```

---

## 📄 License

MIT — free to use and adapt.

---

<p align="center">Made with 🍕 and a lot of ☕ in Bangalore</p>
