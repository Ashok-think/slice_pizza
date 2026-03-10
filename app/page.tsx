'use client';

import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import AboutSection from '@/components/AboutSection';
import PizzaScrollSequence from '@/components/PizzaScrollSequence';
import PizzaMenuGrid from '@/components/PizzaMenuGrid';
import GallerySection from '@/components/GallerySection';
import AntigravityBanner from '@/components/AntigravityBanner';
import DrinksSection from '@/components/DrinksSection';
import ReservationForm from '@/components/ReservationForm';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import FindUsSection from '@/components/FindUsSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CartSidebar from '@/components/CartSidebar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { pizzas } from '@/data/products';

export default function Home() {
  return (
    <CartProvider>
      <LoadingScreen />
      <CartSidebar />
      <WhatsAppButton />

      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <AboutSection />
        <PizzaScrollSequence pizzas={pizzas} />
        <PizzaMenuGrid pizzas={pizzas} />
        <GallerySection />
        <AntigravityBanner />
        <DrinksSection />
        <ReservationForm />
        <TestimonialsSlider />
        <FindUsSection />
      </main>

      <Footer />
    </CartProvider>
  );
}
