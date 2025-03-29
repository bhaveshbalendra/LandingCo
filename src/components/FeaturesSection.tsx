import { BarChart, Layers, PenTool, Shield, Users, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const features = [
  {
    icon: Layers,
    title: "Pre-built Components",
    description:
      "Access over 100+ pre-built components designed to increase conversion.",
  },
  {
    icon: Zap,
    title: "Optimized for Speed",
    description: "Lightning-fast loading times to keep your visitors engaged.",
  },
  {
    icon: BarChart,
    title: "Analytics Integration",
    description: "Built-in analytics to track how your landing pages perform.",
  },
  {
    icon: PenTool,
    title: "Easy Customization",
    description:
      "Intuitive drag-and-drop editor for quick and easy customization.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security to protect your data and privacy.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together with your team in real-time on your landing pages.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build amazing landing pages
          </h2>
          <p className="text-xl text-gray-600">
            Our platform is packed with features to help you create
            high-converting landing pages in minutes, not days.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} className="group">
              <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Not sure where to start? Check out our templates for inspiration.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all features
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
