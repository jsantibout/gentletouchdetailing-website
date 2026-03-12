"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  imagePosition?: string;
  index: number;
}

const ServiceSection = ({ title, description, features, price, image, imagePosition = "center", index }: ServiceSectionProps) => {
  const isEven = useMemo(() => index % 2 === 0, [index]);

  return (
    <section className="min-h-screen flex items-center py-20 md:py-0">
      <div className={`container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${!isEven ? 'lg:order-2' : ''}`}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
            0{index + 1}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            {title}
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          <ul className="space-y-3 mb-10">
            {features.map((feature, i) => (
              <li key={i} className="font-body text-sm text-foreground flex items-center gap-3">
                <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex items-end gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">{price}</span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${!isEven ? 'lg:order-1' : ''}`}
        >
          <div className="relative overflow-hidden glow-gold">
            <img
              src={image}
              alt={title}
              className="w-full aspect-square object-cover"
              style={{ objectPosition: imagePosition }}
              loading="lazy"
            />
            <div className="absolute inset-0 border border-gold-subtle" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
