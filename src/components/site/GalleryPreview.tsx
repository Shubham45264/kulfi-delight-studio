import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { images } from "@/lib/menu";
import { ArrowRight } from "lucide-react";

const shots = [
  { img: images.pOreoShake, className: "col-start-1 row-start-1 row-span-2" },
  { img: images.pPremiumCupsCentered, className: "col-start-2 row-start-1 col-span-2" },
  { img: images.pGulkandKulfiPink, className: "col-start-2 row-start-2" },
  { img: images.pChocoCup, className: "col-start-3 row-start-2" },
  { img: images.pFaloodaCentered, className: "col-start-4 row-start-1 row-span-2" },
];

export default function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">In The Wild</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Sweet Moments</h2>
        </div>
        <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View full gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid h-[500px] grid-cols-4 grid-rows-2 gap-3 sm:h-[600px]">
        {shots.map(({ img, className }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`overflow-hidden rounded-3xl shadow-soft ${className}`}
          >
            <img src={img} alt="Kulfi moment" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
