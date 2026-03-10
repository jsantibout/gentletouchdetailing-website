import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        <img src={logo} alt="Gentle Touch Detailing" className="w-20 mb-8 opacity-60" />
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Gentle Touch Detailing
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
