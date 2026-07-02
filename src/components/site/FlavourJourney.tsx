import { motion } from "framer-motion";
import { Milk, Sprout, ChefHat, Snowflake } from "lucide-react";

const steps = [
  { Icon: Milk, title: "Fresh Milk", text: "Sourced daily from farms outside Mumbai. Boiled, reduced, transformed." },
  { Icon: Sprout, title: "Premium Ingredients", text: "Alphonso mango, Kashmiri kesar, Iranian pista — nothing less." },
  { Icon: ChefHat, title: "Handcrafted Preparation", text: "Stirred for hours, poured into moulds, sealed by hand." },
  { Icon: Snowflake, title: "Frozen Perfection", text: "Set slowly in earthen matkas for that signature dense texture." },
];

export default function FlavourJourney() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.04_30)] py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-30" aria-hidden style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--primary) 0%, transparent 40%)"
      }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Process</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Our Flavours Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            From farm to first bite — every kulfi takes a 24-hour journey of love.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/40 to-transparent lg:block" aria-hidden />
          <div className="space-y-12 lg:space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-3 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <s.Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-5xl font-bold text-white/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold">{s.title}</h3>
                  <p className="mt-3 max-w-md text-white/70 lg:max-w-none">{s.text}</p>
                </div>
                <div className="hidden h-px w-full bg-white/10 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
