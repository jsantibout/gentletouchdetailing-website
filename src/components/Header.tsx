"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Book", href: "#booking" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 h-16"
      style={{
        backgroundColor: `hsl(var(--background) / ${bgOpacity.get()})`,
        borderBottomColor: `hsl(var(--border) / ${borderOpacity.get()})`,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
    >
      <motion.div
        style={{ backgroundColor: `hsl(var(--background) / ${bgOpacity})` }}
        className="absolute inset-0 -z-10"
      />

      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center"
      >
        <img src="/assets/logo.png" alt="Gentle Touch Detailing" className="h-10 w-auto" />
      </button>

      {/* Nav links */}
      <nav className="flex items-center gap-10">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => handleClick(link.href)}
            className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
