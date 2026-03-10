import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-10 leading-tight">
            The Art of
            <br />
            <span className="text-gold-gradient">Optical Perfection</span>
          </h2>
          <div className="w-16 h-px bg-gold-gradient mx-auto mb-10" />
          <p className="font-body text-muted-foreground leading-loose text-base md:text-lg max-w-2xl mx-auto mb-8">
            We don't simply clean vehicles. We restore the relationship between surface and light — 
            engineering every panel, every curve, every reflection back to the manufacturer's original vision.
          </p>
          <p className="font-body text-muted-foreground leading-loose text-base md:text-lg max-w-2xl mx-auto">
            Each vehicle that enters our studio receives a tailored approach. We analyze paint depth, 
            surface contaminants, and environmental wear to create a bespoke restoration plan. 
            The result is not just a clean car — it's a vehicle that commands attention through 
            the sheer clarity of its finish.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
