"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-2xl">
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

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Thank You</h3>
            <p className="font-body text-muted-foreground">We'll be in touch within 24 hours to confirm your appointment.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Vehicle</label>
              <input
                type="text"
                required
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Year, Make, Model"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Service</label>
              <select
                required
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
              >
                <option value="">Select a service</option>
                <option value="exterior">Exterior Restoration</option>
                <option value="interior">Interior Revival</option>
                <option value="protection">Ceramic Protection</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Notes</label>
              <textarea
                rows={4}
                className="w-full bg-secondary border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Any specific concerns or requests"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold-gradient py-4 font-display text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Request Appointment
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
