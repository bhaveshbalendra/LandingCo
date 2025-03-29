import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "https://picsum.photos/id/238/100/100",
    content:
      "This platform has revolutionized how we create landing pages. Our conversion rates have increased by 30% since we started using it. The drag-and-drop editor is intuitive and the templates are beautiful.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Growth Lead",
    company: "Nova Solutions",
    avatar: "https://picsum.photos/id/239/100/100",
    content:
      "We've tried many landing page builders, but this one stands out. The speed and performance are unmatched, and the analytics integration helps us make data-driven decisions quickly. Highly recommended!",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Elevate Digital",
    avatar: "https://picsum.photos/id/240/100/100",
    content:
      "The team collaboration features have been a game-changer for our remote team. We can work together seamlessly, and the real-time editing prevents conflicts. The customer support is also excellent.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Founder & CEO",
    company: "Spark Innovations",
    avatar: "https://picsum.photos/id/241/100/100",
    content:
      "As a startup founder, I needed a solution that was both powerful and cost-effective. This platform delivers on both fronts. We launched our product with a professional landing page in just one day.",
  },
];

const faqItems = [
  {
    question: "What makes this landing page builder different?",
    answer:
      "Our platform combines ease of use with powerful features. We offer pre-built components, real-time collaboration, integrated analytics, and enterprise-grade security—all in one solution designed to maximize conversions.",
  },
  {
    question: "Do I need coding knowledge to use this platform?",
    answer:
      "Not at all! Our intuitive drag-and-drop editor is designed for users of all skill levels. You can create professional landing pages without writing a single line of code. However, for those who want more control, we do offer custom code options.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Absolutely! You can connect your own custom domain to any landing page created on our platform. We provide easy-to-follow instructions to set up the DNS records, or our support team can assist you with the process.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer flexible pricing plans based on your needs. Our starter plan is free and includes basic features. Premium plans start at $29/month and include advanced features like A/B testing, more templates, and priority support. All plans come with a 14-day free trial.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer:
      "Yes, we integrate with most popular marketing and analytics tools, including Google Analytics, Mailchimp, HubSpot, Zapier, and many more. If you need a specific integration, contact our support team to check availability.",
  },
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonials[0].id
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by marketers and entrepreneurs
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Don't just take our word for it. Here's what our customers have to
            say.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
            {/* Testimonials Display */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 relative order-2 lg:order-1 min-h-[250px] md:min-h-[300px]">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className={`absolute inset-0 bg-white rounded-xl transition-all duration-500 transform ${
                    activeTestimonial === testimonial.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16 pointer-events-none"
                  }`}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="mb-4 md:mb-6">
                      <svg
                        className="w-8 h-8 md:w-12 md:h-12 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-base md:text-xl mb-6 md:mb-8">
                      {testimonial.content}
                    </p>
                    <div className="mt-auto flex items-center">
                      <Avatar className="h-10 w-10 md:h-12 md:w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                          {testimonial.name.split(" ")[1].charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex flex-col gap-3 md:gap-4 order-1 lg:order-2">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(testimonial.id)}
                  className={`text-left p-3 md:p-4 rounded-lg transition-all ${
                    activeTestimonial === testimonial.id
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                        {testimonial.name.split(" ")[1].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-medium text-sm md:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="max-w-3xl mx-auto">
          <div id="faq" className="text-center mb-8 md:mb-10 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Have questions? We're here to help.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
