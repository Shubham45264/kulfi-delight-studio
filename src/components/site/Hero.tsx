import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { heroSlides } from "@/lib/menu";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + heroSlides.length) % heroSlides.length);
  const slide = heroSlides[i];

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.title} loading="eager" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-32 text-white lg:px-8 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> {slide.kicker}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{slide.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gallery" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:scale-105">
                Explore Menu
              </Link>
              <Link to="/contact" className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20">
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-5">
        <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
