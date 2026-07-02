import { motion } from "framer-motion";
import { Cake, HeartHandshake, Briefcase, Users } from "lucide-react";

const events = [
  { Icon: Cake, title: "Birthday Parties", text: "Themed kulfi towers, custom flavours, kid-approved fun." },
  { Icon: HeartHandshake, title: "Weddings", text: "Live kulfi & falooda counters for that royal Indian touch." },
  { Icon: Briefcase, title: "Corporate Events", text: "Premium dessert platters that turn meetings into memories." },
  { Icon: Users, title: "Family Gatherings", text: "Bulk family packs delivered fresh, frozen, and festive." },
];

export default function Celebrate() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Make It Memorable</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Celebrate with Kulfi Lounge</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From intimate dinners to 500-guest weddings — we've sweetened them all.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-3xl bg-card p-7 shadow-soft transition-transform hover:-translate-y-2"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform group-hover:rotate-6">
                <e.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
