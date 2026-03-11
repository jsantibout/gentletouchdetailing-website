"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavigationOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Book", href: "#booking" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href === "#top" ? "body" : href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Persistent button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
        aria-label="Toggle navigation"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-primary"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-primary"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-primary"
          />
        </div>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleClick(link.href)}
                  className="font-display text-3xl md:text-5xl font-extrabold text-foreground hover:text-gold-gradient transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationOverlay;
