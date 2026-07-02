import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { bestSellers } from "@/lib/menu";

export default function BestSellers() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 lg:py-32">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Crowd Favourites</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Best Sellers</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Voted by thousands. Devoured by more. These are the ones that fly off the counter every single day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-3xl bg-card p-3 shadow-soft transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-primary backdrop-blur">
                  <Heart className="h-4 w-4 fill-current" />
                </div>
                <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Bestseller
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                  <h3 className="truncate font-display text-lg font-semibold">{p.name}</h3>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
