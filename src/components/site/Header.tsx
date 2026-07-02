import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { productCategories } from "@/lib/menu";
import kulfiLogo from "@/assets/kulfi.png";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentCategory = productCategories.find(c => c.slug === hoveredCategory) || productCategories[0];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={kulfiLogo}
            alt="Kulfi Lounge Logo"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="flex flex-col">
            <span className={`font-brand text-3xl tracking-normal leading-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}>Kulfi Lounge</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] mt-0.5 transition-colors ${
              scrolled ? "text-muted-foreground" : "text-white/60"
            }`}>Since Forever • Mumbai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className={`text-lg font-brand transition-colors hover:text-primary ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => { setDropdown(false); setHoveredCategory(null); }}
          >
            <button
              className={`flex items-center gap-1 text-lg font-brand transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 top-full mt-4 w-[740px] -translate-x-1/2 rounded-3xl border border-border bg-popover/95 p-6 shadow-soft backdrop-blur-xl"
                >
                  <div className="flex gap-6">
                    <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4">
                      {productCategories.map((c) => (
                        <Link
                          key={c.slug}
                          to="/gallery"
                          hash={c.slug}
                          onMouseEnter={() => setHoveredCategory(c.slug)}
                          onClick={() => setDropdown(false)}
                          className="group block"
                        >
                          <div className="flex items-center gap-2 text-base font-brand text-foreground hover:text-primary transition-colors">
                            <span className="text-lg">{c.emoji}</span>
                            {c.name}
                          </div>
                          <div className="ml-7 mt-0.5 text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                            {c.items.slice(0, 3).join(" · ")}
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="w-56 shrink-0 border-l border-border/50 pl-6 flex flex-col justify-between">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-inner">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentCategory.slug}
                            src={currentCategory.image}
                            alt={currentCategory.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="h-full w-full object-cover"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                          <div className="text-[9px] uppercase tracking-wider text-white/80">{currentCategory.emoji} Collection</div>
                          <div className="font-display text-sm font-bold mt-0.5 leading-tight">{currentCategory.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-lg font-brand transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-base font-brand font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 lg:inline-flex"
        >
          Visit Our Store
        </Link>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className={`grid h-11 w-11 place-items-center rounded-full shadow-soft lg:hidden transition-colors ${
            scrolled ? "bg-card text-foreground" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-brand text-black hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-2 rounded-xl bg-secondary/60 px-4 py-3">
                <div className="text-xs font-brand uppercase tracking-wider text-muted-foreground">Products</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {productCategories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/gallery"
                      hash={c.slug}
                      onClick={() => setOpen(false)}
                      className="text-sm font-brand text-foreground hover:text-primary transition-colors"
                    >
                      {c.emoji} {c.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-brand font-semibold text-primary-foreground"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </>
  );
}
