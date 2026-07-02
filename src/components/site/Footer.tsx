import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Phone, MapPin, Mail } from "lucide-react";
import kulfiLogo from "@/assets/kulfi.png";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.22_0.04_30)] text-[oklch(0.95_0.02_80)]">
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={kulfiLogo} alt="Kulfi Lounge Logo" className="h-16 w-auto object-contain" />
            <span className="font-brand text-3xl font-normal text-white">Kulfi Lounge</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Hand-crafted kulfi, falooda and premium ice cream — made fresh every day,
            served with the warmth of tradition.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Popular Categories</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>Candy Kulfi</li>
            <li>Falooda</li>
            <li>Premium Ice Cream</li>
            <li>Milkshakes</li>
            <li>Cold Coffee</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Visit Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Shop No 6, Beside Union Bank, Sector 5, Ghansoli, Navi Mumbai 400701</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +91 91671 96923</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +91 95947 91344</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> hello@kulfilounge.in</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>© 2026 Kulfi Lounge. All rights reserved.</p>
          <p>Designed by Himanshu</p>
        </div>
      </div>
    </footer>
  );
}
