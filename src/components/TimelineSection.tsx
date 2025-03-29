import { BarChart, Check, ChevronRight, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent } from "./ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  achievements: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Our journey began with a simple idea: make landing page creation accessible to everyone.",
    icon: Users,
    achievements: [
      "Launched beta version",
      "Secured initial funding",
      "Built core team of 5 engineers",
    ],
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description:
      "Our platform expanded rapidly as we added key features based on customer feedback.",
    icon: Zap,
    achievements: [
      "Reached 10,000 users",
      "Launched premium tier",
      "Expanded team to 15 employees",
    ],
  },
  {
    year: "2022",
    title: "Enterprise Solutions",
    description:
      "We established partnerships with major companies and launched enterprise-level features.",
    icon: BarChart,
    achievements: [
      "Secured 5 enterprise clients",
      "Developed advanced analytics",
      "Introduced team collaboration tools",
    ],
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Our platform went global with multi-language support and international payment options.",
    icon: ChevronRight,
    achievements: [
      "Expanded to 50+ countries",
      "Multi-language support",
      "Reached 100,000 users milestone",
    ],
  },
];

export function TimelineSection() {
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && observerRefs.current[index]) {
          observer.disconnect();
        }
      });
    };
  }, []);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    observerRefs.current[index] = el;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg md:text-xl text-gray-600">
            From humble beginnings to industry leader. Here's how we've evolved
            over the years.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto mt-12 md:mt-20">
          {/* Timeline line - only visible on tablet and up */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 transition-all duration-700 ${
                activeItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              ref={(el) => setRef(el, index)}
            >
              {/* Mobile timeline year marker - only visible on mobile */}
              <div className="flex items-center mb-4 md:hidden">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    activeItems.includes(index)
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  } transition-colors duration-700`}
                >
                  {item.year}
                </div>
                <div className="ml-3 font-bold text-lg">{item.title}</div>
              </div>

              <div
                className={`flex items-center flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <Card
                    className={`border-l-4 ${
                      activeItems.includes(index)
                        ? "border-primary"
                        : "border-gray-200"
                    } transition-colors duration-700`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          {/* Year label hidden on mobile, shown on tablet+ */}
                          <span className="hidden md:inline-block text-sm text-gray-500">
                            {item.year}
                          </span>
                          {/* Title hidden on mobile (shown above card), visible on tablet+ */}
                          <h3 className="hidden md:block text-xl font-bold mt-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            {item.description}
                          </p>

                          <ul className="mt-4 space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline circle - hidden on mobile, shown on tablet+ */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      activeItems.includes(index)
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-500"
                    } transition-colors duration-700`}
                  >
                    {item.year}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
