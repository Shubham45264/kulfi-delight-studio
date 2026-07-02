import { motion } from "framer-motion";
import { flavours } from "@/lib/menu";

const palette = [
  "bg-[oklch(0.86_0.16_90)] text-[oklch(0.24_0.04_30)]",
  "bg-[oklch(0.78_0.13_18)] text-white",
  "bg-[oklch(0.82_0.11_145)] text-[oklch(0.24_0.04_30)]",
  "bg-[oklch(0.32_0.06_45)] text-white",
  "bg-[oklch(0.97_0.025_85)] text-[oklch(0.24_0.04_30)] border border-border",
  "bg-[oklch(0.7_0.18_330)] text-white",
];

export default function FlavourWall() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Pick Your Mood</span>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Flavour Wall</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          A wall of joy — every name a little nostalgia, every colour a craving.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {flavours.map((f, i) => (
          <motion.span
            key={f}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -6, rotate: -2 }}
            className={`cursor-default rounded-full px-6 py-3 font-display text-base font-semibold shadow-soft sm:text-lg ${palette[i % palette.length]}`}
          >
            {f}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
