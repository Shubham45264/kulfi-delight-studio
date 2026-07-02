import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteShell from "@/components/site/SiteShell";
import { images } from "@/lib/menu";
import heritage from "@/assets/heritage.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kulfi Lounge" },
      { name: "description", content: "Three generations of dessert-making in Mumbai. Discover the story, craft and people behind Kulfi Lounge." },
      { property: "og:title", content: "Our Story — Kulfi Lounge" },
      { property: "og:description", content: "Where tradition meets the modern dessert lover." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={heritage} alt="Heritage kulfi" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 text-white lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
            Three generations.<br />One sweet obsession.
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <div className="grid gap-12">
          {[
            { tag: "Our Story", title: "It started with a wooden matka.", text: "In 1962, our grandfather wheeled a single matka through the lanes of South Bombay. He sold five flavours — mawa, kesar, mango, pista and chocolate — for fifty paise each. Three generations later, the matka is still here. So is the recipe. Just a few more flavours." },
            { tag: "Our Journey", title: "From street cart to Mumbai institution.", text: "We now serve over 1000 happy customers every week from our flagship store in Ghansoli, Navi Mumbai. But ask anyone in our family — we're still that little cart. Still hand-rolling, hand-pouring, hand-freezing every single piece." },
            { tag: "Quality Promise", title: "If it isn't real, we don't sell it.", text: "No artificial flavours. No vegetable fat. No shortcuts. Real Alphonso mango. Real Kashmiri kesar. Real Belgian chocolate. Real cream, churned daily. If we won't feed it to our own kids, we won't serve it to yours." },
            { tag: "The Craft", title: "The traditional kulfi-making process.", text: "Milk is boiled and reduced for six hours until it becomes thick, sweet rabri. Flavours are folded in by hand. The mixture is poured into stainless steel moulds, sealed with atta dough, and lowered into earthen matkas packed with rock salt and ice. Twelve hours later — magic." },
          ].map((b, i) => (
            <motion.div
              key={b.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-l-2 border-primary pl-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{b.tag}</span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{b.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[images.kulfiSlice, images.heroMango, images.heroFalooda, images.pSundae].map((s, i) => (
            <motion.img
              key={i}
              src={s}
              alt="Kulfi craft"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="aspect-square w-full rounded-3xl object-cover shadow-soft"
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
