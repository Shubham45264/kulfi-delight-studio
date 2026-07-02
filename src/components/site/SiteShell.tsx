import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919167196923?text=Hi%20Kulfi%20Lounge!%20I'd%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[45] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-colors hover:bg-[#20ba5a]"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 2a9.978 9.978 0 0 0-9.969 9.97c0 1.905.533 3.687 1.453 5.215L2 22l5.003-1.314a9.92 9.92 0 0 0 5.028 1.353 9.978 9.978 0 0 0 9.969-9.97A9.978 9.978 0 0 0 12.031 2zm0 1.704c4.566 0 8.266 3.7 8.266 8.266 0 4.566-3.7 8.266-8.266 8.266a8.21 8.21 0 0 1-4.246-1.17l-.304-.18-3.15.827.842-3.072-.197-.314a8.21 8.21 0 0 1-1.211-4.357c0-4.566 3.7-8.266 8.266-8.266zm-2.025 3.03a.754.754 0 0 0-.547.254c-.19.206-.723.708-.723 1.728 0 1.02.744 2.007.846 2.146.103.137 1.464 2.235 3.548 3.132 2.083.898 2.083.6 2.46.565.378-.036 1.218-.498 1.389-.98.17-.48.17-.893.12-.98-.051-.087-.188-.138-.394-.241s-1.218-.6-1.407-.668c-.188-.068-.326-.103-.463.103-.137.206-.53.668-.65.808-.12.14-.24.154-.447.051-.206-.102-.872-.321-1.66-1.024-.614-.548-1.029-1.225-1.15-1.43-.12-.206-.013-.317.09-.42.093-.092.206-.24.31-.36.102-.12.137-.206.206-.343a.379.379 0 0 0-.017-.36c-.051-.103-.463-1.115-.634-1.528-.166-.399-.333-.344-.463-.35h-.394z" />
        </svg>
      </motion.a>
    </div>
  );
}
