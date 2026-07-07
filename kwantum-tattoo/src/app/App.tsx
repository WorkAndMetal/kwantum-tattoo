import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/shared/Marquee";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "@/hooks/useTheme";

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="noise-overlay">
          <Header />
          <main>
            <Hero />
            <Marquee />
            <Gallery />
            <Appointment />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
