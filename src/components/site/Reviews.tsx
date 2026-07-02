import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Ghansoli Local", quote: "The mawa malai kulfi is exactly like my dadi used to make. I've been coming here every Sunday for three years.", stars: 5 },
  { name: "Rohan Mehta", role: "Foodie / Mumbai", quote: "That Belgian Chocolate ice cream is criminally good. Their faloodas? Even better. This place is a Mumbai institution.", stars: 5 },
  { name: "Aisha Khan", role: "Wedding Planner", quote: "We had Kulfi Lounge cater 12 weddings last season. Not a single complaint. Pure magic on a stick.", stars: 5 },
  { name: "Vikram Joshi", role: "Regular since 2018", quote: "Tiramisu cold coffee + kesar pista kulfi = my standard order. I've converted my whole office.", stars: 5 },
];

export default function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);

  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Kind Words</span>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">What Our Guests Say</h2>

        <div className="relative mt-14 rounded-[2rem] bg-card p-8 shadow-soft sm:p-12">
          <Quote className="mx-auto h-10 w-10 text-primary/30" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">"{r.quote}"</p>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: r.stars }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft hover:bg-primary hover:text-primary-foreground transition">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Review ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft hover:bg-primary hover:text-primary-foreground transition">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
