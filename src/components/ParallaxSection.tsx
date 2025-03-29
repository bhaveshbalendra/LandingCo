import { useEffect, useRef, useState } from "react";
import { LazyImage } from "./LazyImage";
import { Button } from "./ui/button";

export function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress through section (0 to 1)
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / windowHeight;
          setScrollY(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll progress
  const textTransform = `translateY(${scrollY * -50}px)`;
  const imageTransform = `translateY(${scrollY * 80}px) scale(${
    1 + scrollY * 0.1
  })`;
  const opacityValue = Math.min(1, 0.4 + scrollY * 0.6);

  return (
    <section
      ref={sectionRef}
      className="relative h-auto md:h-[120vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-20"
    >
      {/* Background circles */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: 0.4 }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl bg-gradient-to-br from-primary/30 to-purple-500/30"
            style={{
              width: `${Math.random() * 30 + 20}vw`,
              height: `${Math.random() * 30 + 20}vw`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${
                scrollY * (Math.random() * 100 - 50)
              }px)`,
              opacity: 0.3 + Math.random() * 0.2,
              transition: "transform 0.2s ease-out",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh]">
          <div
            ref={textRef}
            className="max-w-xl text-center lg:text-left mb-12 lg:mb-0"
            style={{
              transform: textTransform,
              opacity: opacityValue,
              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Beautiful scrolling effects for impressive landing pages
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Engage your visitors with stunning parallax effects that respond
              to scrolling. Create immersive experiences that leave a lasting
              impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">Explore Examples</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full max-w-lg lg:max-w-xl overflow-hidden rounded-xl shadow-2xl">
            <LazyImage
              src="https://picsum.photos/id/1049/1000/1500"
              alt="Parallax Demo"
              className="w-full h-full object-cover"
              style={{
                transform: imageTransform,
                transition: "transform 0.2s ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
