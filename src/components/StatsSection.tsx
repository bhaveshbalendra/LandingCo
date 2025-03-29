import { Award, Building, Globe, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface StatItem {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  duration: number;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 100000,
    label: "Active users",
    suffix: "+",
    duration: 2000,
  },
  {
    icon: Building,
    value: 500,
    label: "Enterprise clients",
    suffix: "+",
    duration: 1500,
  },
  {
    icon: Globe,
    value: 50,
    label: "Countries",
    suffix: "+",
    duration: 1000,
  },
  {
    icon: Award,
    value: 99.9,
    label: "Uptime",
    suffix: "%",
    duration: 1800,
  },
];

function AnimatedCounter({
  value,
  duration,
  suffix,
}: {
  value: number;
  duration: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Check if element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animate counter when in view
  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let requestId: number;
    let progress: number;

    const isInteger = Number.isInteger(value);
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      progress = (timestamp - startTime) / duration;

      const nextCount =
        progress >= 1
          ? value
          : isInteger
          ? Math.floor(progress * value)
          : parseFloat((progress * value).toFixed(1));

      setCount(nextCount);

      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, [isInView, value, duration]);

  return (
    <div
      ref={counterRef}
      className="font-bold text-4xl md:text-5xl text-primary"
    >
      {count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our platform in numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            See why thousands of businesses and individuals trust our platform
            for their landing page needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4 md:mb-6">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <AnimatedCounter
                value={stat.value}
                duration={stat.duration}
                suffix={stat.suffix}
              />
              <p className="text-gray-600 text-sm md:text-base mt-2">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
