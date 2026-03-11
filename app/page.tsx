import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import NavigationOverlay from "@/components/NavigationOverlay";
import FooterSection from "@/components/FooterSection";

const services = [
  {
    title: "Exterior Restoration",
    description:
      "A meticulous multi-stage process that removes imperfections and restores your vehicle's paint to a mirror-like finish. Every panel is hand-corrected to reveal the depth and clarity hidden beneath surface damage.",
    features: [
      "Clay bar decontamination",
      "Multi-stage paint correction",
      "Hand polish to mirror finish",
      "Wheel & tire restoration",
      "Glass clarity treatment",
    ],
    price: "From $350",
    image: "/assets/Gemini_luxuary-detail-image.png",
    // image: "/assets/luxury-car-detailing-services-photo.jpg",
    imagePosition: "left center",
  },
  {
    title: "Interior Revival",
    description:
      "A comprehensive interior treatment that deep cleans, conditions, and protects every surface. From leather seats to dashboard trim, we restore the cabin to a state that surpasses showroom condition.",
    features: [
      "Deep leather conditioning",
      "Steam extraction cleaning",
      "Dashboard & trim restoration",
      "Headliner treatment",
      "Odor elimination",
    ],
    price: "From $275",
    image: "/assets/service-interior.jpg",
  },
  {
    title: "Ceramic Protection",
    description:
      "The ultimate shield for your vehicle's finish. Our ceramic coating bonds at a molecular level, creating a hydrophobic barrier that repels water, UV rays, and contaminants for years of lasting protection.",
    features: [
      "9H ceramic coating application",
      "5-year durability guarantee",
      "Hydrophobic surface treatment",
      "UV & chemical resistance",
      "Enhanced gloss amplification",
    ],
    price: "From $800",
    image: "/assets/service-protection.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />

      <div id="services">
        {services.map((service, i) => (
          <ServiceSection key={service.title} {...service} index={i} />
        ))}
      </div>

      <div id="philosophy">
        <AboutSection />
      </div>

      <BookingSection />
      <FooterSection />
      <NavigationOverlay />
    </div>
  );
}
