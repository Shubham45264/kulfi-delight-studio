import kulfiSlice from "@/assets/kulfi-slice.jpg";
import heroMango from "@/assets/hero-mango-matka.jpg";
import heroCones from "@/assets/hero-cones.jpg";
import heroFalooda from "@/assets/hero-falooda.jpg";
import pRose from "@/assets/p-rose.png";
import pChoco from "@/assets/p-choco.jpg";
import pChocoCup from "@/assets/p-choco-cup.png";
import pStraw from "@/assets/p-strawberry.jpg";
import pSundae from "@/assets/p-sundae.jpg";
import pShake from "@/assets/p-milkshake.jpg";
import pOreoShake from "@/assets/p-oreo-shake.png";
import pMalaiKulfi from "@/assets/p-malai-kulfi.png";
import pTiramisuCoffee from "@/assets/p-tiramisu-coffee.png";
import pFalooda from "@/assets/p-falooda.png";
import pPremiumCups from "@/assets/p-premium-cups.png";
import pFaloodaCentered from "@/assets/p-falooda-centered.png";
import pPremiumCupsCentered from "@/assets/p-premium-cups-centered.png";
import pGulkandKulfi from "@/assets/p-gulkand-kulfi.png";
import pGulkandKulfiPink from "@/assets/p-gulkand-kulfi-pink.png";

export const images = {
  kulfiSlice, heroMango, heroCones, heroFalooda, pFalooda, pPremiumCups,
  pFaloodaCentered, pPremiumCupsCentered, pGulkandKulfi, pGulkandKulfiPink,
  pRose, pChoco, pChocoCup, pStraw, pSundae, pShake, pOreoShake, pMalaiKulfi, pTiramisuCoffee,
};

export type Category = {
  name: string;
  slug: string;
  emoji: string;
  blurb: string;
  image: string;
  items: string[];
  imageClassName?: string;
};

export const productCategories: Category[] = [
  {
    name: "Candy Kulfi", slug: "candy-kulfi", emoji: "🍡", blurb: "Hand-rolled on sticks, frozen on traditional matkas.", image: pMalaiKulfi,
    items: ["Mawa Malai", "Kesar Pista", "Mango", "Rose", "Anjeer", "Chocolate"]
  },
  {
    name: "Special Candy Kulfi", slug: "special-candy-kulfi", emoji: "✨", blurb: "Limited specials blending tradition with playful twists.", image: pRose,
    items: ["Gulkand", "KitKat", "Anjeer Kaju", "Paan", "Tender Coconut"]
  },
  {
    name: "Kulfi Slice Roll", slug: "slice-roll", emoji: "🥮", blurb: "Thick creamy round rolls, sliced fresh to order.", image: kulfiSlice,
    items: ["Mawa Malai", "Pista", "Blueberry", "Mango", "Chocolate"]
  },
  {
    name: "Ice Cream Cups", slug: "cups", emoji: "🍦", blurb: "Classic flavours in convenient single-serve cups.", image: pSundae,
    items: ["Vanilla", "Chocolate", "Butterscotch", "Strawberry", "Mango"]
  },
  {
    name: "Premium Ice Cream", slug: "premium", emoji: "🍨", blurb: "Imported ingredients. Indulgent, layered, unforgettable.", image: pPremiumCupsCentered,
    items: ["Biscoff", "Belgian Chocolate", "Dark Brownie Fudge", "Pistachio Royale"]
  },
  {
    name: "Falooda", slug: "falooda", emoji: "🥤", blurb: "Tall glasses of vermicelli, basil seeds, and rose joy.", image: pFaloodaCentered,
    items: ["Rabdi Falooda", "Kesar Kulfi Falooda", "Dry Fruit Kulfi Falooda", "Royal Falooda"]
  },
  {
    name: "Milkshakes", slug: "milkshakes", emoji: "🥛", blurb: "Thick, chilled, topped sky-high.", image: pShake,
    items: ["Oreo", "Belgian Chocolate", "KitKat", "Strawberry", "Cold Coffee"]
  },
  {
    name: "Kulfi Milkshakes", slug: "kulfi-milkshakes", emoji: "🥃", blurb: "A glass of melted kulfi — our signature creation.", image: pStraw,
    items: ["Kesar", "Shahi Gulab", "Thandai", "Mawa Malai"]
  },
  {
    name: "Cold Coffee", slug: "cold-coffee", emoji: "☕", blurb: "Cafe-grade espresso meets Indian summer.", image: pTiramisuCoffee,
    items: ["Classic Cold Coffee", "Tiramisu", "Chocolate", "Hazelnut"]
  },
];

export const heroSlides = [
  {
    image: kulfiSlice,
    kicker: "Signature Matka Kulfi",
    title: "The Taste of Real Kulfi",
    subtitle: "Slow-frozen in earthen matkas, the way our grandmothers swore by.",
  },
  {
    image: heroMango,
    kicker: "Crafted with Tradition",
    title: "Crafted with Tradition",
    subtitle: "Alphonso, kesar, gulkand — flavours rooted in Indian soil.",
  },
  {
    image: heroCones,
    kicker: "Premium Ice Cream",
    title: "Premium Ice Cream & Falooda",
    subtitle: "From Belgian chocolate to royal faloodas — every scoop, a story.",
  },
  {
    image: heroFalooda,
    kicker: "Every Scoop, A Story",
    title: "Every Scoop Tells a Story",
    subtitle: "Three generations of dessert-making, one unforgettable bite.",
  },
];

export const bestSellers = [
  { name: "Mawa Malai Kulfi", category: "Candy Kulfi", image: pMalaiKulfi },
  { name: "Gulkand Kulfi", category: "Candy Kulfi", image: pGulkandKulfiPink },
  { name: "Rabdi Falooda", category: "Falooda", image: pFaloodaCentered },
  { name: "Belgian Chocolate", category: "Premium Ice Cream", image: pChocoCup },
  { name: "Oreo Milkshake", category: "Milkshakes", image: pOreoShake },
  { name: "Tiramisu Cold Coffee", category: "Cold Coffee", image: pTiramisuCoffee },
];

export const flavours = [
  "Mango", "Kesar Pista", "Gulkand", "Chocolate", "Strawberry",
  "Blueberry", "Biscoff", "Belgian Chocolate", "Oreo", "Shahi Gulab",
  "Thandai", "Rose", "Paan", "KitKat", "Anjeer Kaju", "Tender Coconut",
];
