import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationProvider } from "./components/AnimationProvider";
import { ContactSection } from "./components/ContactSection";
import { CookieConsent } from "./components/CookieConsent";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ParallaxSection } from "./components/ParallaxSection";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TimelineSection } from "./components/TimelineSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 bg-gray-50 flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <div className="w-40 h-10 mb-12">
            <SkeletonLoader type="text" />
          </div>
          <SkeletonLoader type="image" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SkeletonLoader type="card" count={3} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <AnimationProvider>
        <div className="min-h-screen font-sans antialiased">
          <Header />
          <main>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <ParallaxSection />
            <TimelineSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;
