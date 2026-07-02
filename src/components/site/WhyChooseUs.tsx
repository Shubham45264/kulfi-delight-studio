import { motion } from "framer-motion";
import { Leaf, Award, Sparkles, Users } from "lucide-react";

const items = [
  {
    Icon: Leaf,
    num: "01",
    title: "Fresh Ingredients",
    text: "Daily farm-fresh milk deliveries, hand-picked seasonal fruits, and premium roasted nuts.",
    iconColor: "text-[oklch(0.55_0.15_145)]",
    iconBg: "bg-[oklch(0.95_0.04_145)]",
    glowColor: "bg-[oklch(0.82_0.11_145)]/10"
  },
  {
    Icon: Award,
    num: "02",
    title: "Traditional Recipes",
    text: "Three generations of secret family recipes, slow-frozen in authentic clay matkas.",
    iconColor: "text-[oklch(0.55_0.15_18)]",
    iconBg: "bg-[oklch(0.95_0.04_18)]",
    glowColor: "bg-[oklch(0.78_0.13_18)]/10"
  },
  {
    Icon: Sparkles,
    num: "03",
    title: "Premium Quality",
    text: "Imported Belgian cocoa, real Kashmiri saffron, and zero artificial flavors or colors.",
    iconColor: "text-[oklch(0.55_0.15_90)]",
    iconBg: "bg-[oklch(0.95_0.04_90)]",
    glowColor: "bg-[oklch(0.86_0.16_90)]/10"
  },
  {
    Icon: Users,
    num: "04",
    title: "Loved by Thousands",
    text: "Over 10,000+ five-star reviews from Mumbai's most discerning dessert lovers.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    glowColor: "bg-primary/10"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute -left-64 top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Why Kulfi Lounge
            </div>
            
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-foreground">
              Tradition you can <span className="relative inline-block text-gradient">taste<span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent/30" /></span>.
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg">
              We don't take shortcuts. Every kulfi, every scoop, every glass is made the long way —
              because that's the only way it tastes like home.
            </p>

            <div className="mt-10 grid w-full grid-cols-2 gap-6 border-t border-border/60 pt-8">
              <div>
                <div className="font-display text-3xl font-extrabold text-primary">100%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Pure Vegetarian</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-accent">Zero</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Artificial Preservatives</div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 sm:pb-8">
            {items.map(({ Icon, num, title, text, iconColor, iconBg, glowColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-card/60 backdrop-blur-md p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-soft hover:border-primary/20 group ${
                  i % 2 === 1 ? "sm:translate-y-6" : ""
                }`}
              >
                {/* Large Background Number */}
                <span className="absolute right-6 top-4 font-display text-8xl font-black text-foreground/[0.03] select-none transition-transform duration-500 group-hover:scale-105 group-hover:text-primary/[0.04]">
                  {num}
                </span>

                {/* Floating Glow on Hover */}
                <div className={`absolute -right-12 -bottom-12 h-36 w-36 rounded-full ${glowColor} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Icon Container */}
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${iconBg} ${iconColor} transition-transform duration-500 group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative z-10 mt-6 font-display text-xl font-bold text-foreground">{title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
