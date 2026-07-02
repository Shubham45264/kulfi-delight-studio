import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Twitter, Send, MessageCircle } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kulfi Lounge" },
      { name: "description", content: "Visit Kulfi Lounge in Ghansoli, Navi Mumbai. Call us at +91 91671 96923 or message us for orders, events and catering." },
      { property: "og:title", content: "Visit Kulfi Lounge" },
      { property: "og:description", content: "Shop No 6, Beside Union Bank, Sector 5, Ghansoli, Navi Mumbai. Open daily till midnight." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="px-5 pb-12 pt-36 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Say Hello</span>
        <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">Visit Our Store</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Drop in for a kulfi, call us for catering, or just say hi. We love hearing from you.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-card p-8 shadow-soft sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            {sent ? (
              <div className="mt-8 rounded-2xl bg-primary/10 p-8 text-center">
                <div className="text-3xl">🍦</div>
                <p className="mt-3 font-display text-xl font-bold">Got it — thank you!</p>
                <p className="mt-1 text-sm text-muted-foreground">Opening WhatsApp to complete your message...</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget;
                  const name = (target.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (target.elements.namedItem("phone") as HTMLInputElement).value;
                  const email = (target.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const text = `*New Inquiry via Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n\n*Message:*\n${message}`;
                  const encodedText = encodeURIComponent(text);
                  const whatsappUrl = `https://wa.me/919167196923?text=${encodedText}`;

                  window.open(whatsappUrl, "_blank");
                  setSent(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</span>
                    <input name="name" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</span>
                    <input name="phone" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
                  <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          <div className="space-y-5">
            {[
              { Icon: MapPin, title: "Visit", lines: ["Shop No 6, Beside Union Bank", "Sector 5, Ghansoli, Navi Mumbai 400701"] },
              { Icon: MessageCircle, title: "WhatsApp", lines: ["+91 91671 96923"], href: "https://wa.me/919167196923?text=Hi%20Kulfi%20Lounge!%20I'd%20like%20to%20make%20an%20inquiry." },
              { Icon: Phone, title: "Call", lines: ["+91 91671 96923", "+91 95947 91344"], href: "tel:+919167196923" },
              { Icon: Mail, title: "Email", lines: ["hello@kulfilounge.in", "events@kulfilounge.in"], href: "mailto:hello@kulfilounge.in" },
              { Icon: Clock, title: "Hours", lines: ["Mon – Sun · 11:00 AM – 12:00 AM"] },
            ].map((c) => {
              const CardContent = (
                <>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground group-hover:scale-105 transition-transform">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    {c.lines.map((l) => <div key={l} className="text-sm">{l}</div>)}
                  </div>
                </>
              );

              return c.href ? (
                <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:bg-secondary/40 transition-colors group">
                  {CardContent}
                </a>
              ) : (
                <div key={c.title} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                  {CardContent}
                </div>
              );
            })}

            <div className="flex gap-3 px-1">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition-transform hover:scale-110">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] shadow-soft">
          <iframe
            title="Kulfi Lounge Location"
            src="https://www.google.com/maps?q=Shop+no+6,+Beside+Union+Bank,+Sector+5,+Ghansoli,+Navi+Mumbai+400701&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </SiteShell>
  );
}
