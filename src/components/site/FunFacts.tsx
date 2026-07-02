import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const facts = [
  { value: 20, suffix: "+", label: "Flavours" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Product Categories" },
  { value: 365, suffix: "", label: "Days of Happiness" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function FunFacts() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-[oklch(0.55_0.18_15)] to-[oklch(0.4_0.1_30)] p-10 text-white shadow-glow sm:p-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-6xl font-bold tracking-tight sm:text-7xl">
                <Counter to={f.value} suffix={f.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">{f.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
