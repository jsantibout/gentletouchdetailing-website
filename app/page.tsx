import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import NavigationOverlay from "@/components/NavigationOverlay";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";

const services = [
 
  {
    title: "Vehicle Detail",
    description:
      "Bring your ride back to life with a deep, head-to-toe refresh. From gleaming paint to spotless interiors, every inch gets the care it deserves-because your car should look as good as it drives.",
    features: [
      "Hand wash",
      "Ceramic spray finish",
      "Tire dressing",
      "Trim treatment",
      "Windows inside/outside",
      "Vacuum",
      "Leather conditioning",
      "Interior stain removal",
      "Interior wipe down",
      "Odor elimination"
    ],
    price: "From $200",
    image: "/assets/service-protection.jpg",
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
    price: "From $100",
    image: "/assets/service-interior.jpg",
  }, 
  {
    title: "Vehicle Wash",
    description:
      "Wash away the dirt and roll out shining. A quick, refreshing clean that leaves your car sparkling, streak-free, and ready for the road",
    features: [
      "Hand wash",
      "Ceramic spray finish",
      "Tire dressing",
      "Windows outside",
      "Vacuum",
    ],
    price: "From $60",
    image: "/assets/Gemini_luxuary-detail-image.png",
    // image: "/assets/luxury-car-detailing-services-photo.jpg",
    imagePosition: "left center",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
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
