"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section id="booking" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
            Begin
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Book Your Service
          </h2>
          <div className="w-16 h-px bg-gold-gradient mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Cal
            calLink="joseph-santibout"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
