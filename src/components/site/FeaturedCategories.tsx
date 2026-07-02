import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { productCategories } from "@/lib/menu";
import { ArrowUpRight } from "lucide-react";

const featured = productCategories.filter((c) =>
  ["candy-kulfi", "slice-roll", "falooda", "premium", "milkshakes", "cold-coffee"].includes(c.slug)
);

export default function FeaturedCategories() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Collections</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            A flavour for every <span className="text-gradient">mood, moment, mehfil</span>.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          From hand-rolled candy kulfi to towering faloodas — explore the categories Mumbai keeps coming back for.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((c, i) => (
          <Link
            key={c.slug}
            to="/gallery"
            hash={c.slug}
            className="group relative overflow-hidden rounded-3xl bg-card shadow-soft block"
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className={`h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 ${
                    c.imageClassName || ""
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.04_30)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/70">{c.emoji} Category</div>
                    <h3 className="mt-1 font-display text-2xl font-bold">{c.name}</h3>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  );
}
