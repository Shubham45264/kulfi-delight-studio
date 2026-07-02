import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteShell from "@/components/site/SiteShell";
import { images, productCategories } from "@/lib/menu";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kulfi Lounge" },
      { name: "description", content: "Browse our kulfi, ice cream, falooda and milkshake creations. A visual feast from Kulfi Lounge, Mumbai." },
      { property: "og:title", content: "Gallery — Kulfi Lounge" },
      { property: "og:description", content: "Every flavour, every category, every craving — beautifully shot." },
    ],
  }),
  component: Gallery,
});

const all = [
  images.kulfiSlice, images.heroMango, images.heroFalooda, images.heroCones,
  images.pRose, images.pChoco, images.pTiramisuCoffee, images.pStraw,
  images.pSundae, images.pShake, images.pMalaiKulfi,
];

function Gallery() {
  return (
    <SiteShell>
      <section className="px-5 pb-12 pt-36 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Visual Feast</span>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">Gallery</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A walk-through of our flavours, our store, and the customers who make every day sweeter.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-2xl font-bold">Product Gallery</h2>
        <div className="mt-6 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {all.map((s, i) => (
            <motion.img
              key={i}
              src={s}
              alt={`Product ${i + 1}`}
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="w-full rounded-2xl object-cover shadow-soft transition-transform hover:-translate-y-1"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-2xl font-bold">By Category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <a
              key={c.slug}
              id={c.slug}
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft scroll-mt-28 block"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className={`h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 ${
                    c.imageClassName || ""
                  }`}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.22_0.04_30)] to-transparent p-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">{c.emoji} Category</div>
                <h3 className="mt-1 font-display text-xl font-bold">{c.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
