"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      video.play().catch(() => {});
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden mb-16 md:mb-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_45%_56%_/_0.04)_0%,_transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <img
          src="/assets/logo.png"
          alt="Gentle Touch Detailing"
          className="w-64 md:w-80 lg:w-96 mb-12"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Premium Auto Detailing
          </p>
          <div className="w-16 h-px bg-gold-gradient mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-sm max-w-md mx-auto leading-relaxed px-6">
            Where precision meets perfection. Every surface restored to its purest form.
          </p>
        </motion.div>
      </motion.div>

      {/* Promo video */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl px-6 mt-12"
      >
        <div className="relative">
          <video
            ref={videoRef}
            src="/assets/promo-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg"
          />
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gold-gradient opacity-40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
