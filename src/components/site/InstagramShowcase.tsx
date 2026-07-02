import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { images } from "@/lib/menu";

const grid = [
  images.kulfiSlice, images.heroMango, images.pRose, images.heroCones,
  images.pChoco, images.heroFalooda, images.pShake, images.pMalaiKulfi,
];

export default function InstagramShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">@kulfilounge</span>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Follow Us On Instagram</h2>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Real customers. Real cravings. Tag us with #KulfiLoungeMoments to be featured.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {grid.map((src, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative block aspect-square overflow-hidden rounded-2xl"
          >
            <img src={src} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 grid place-items-center bg-primary/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <Instagram className="h-8 w-8 text-white" />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105">
          <Instagram className="h-4 w-4" /> View More
        </a>
      </div>
    </section>
  );
}
