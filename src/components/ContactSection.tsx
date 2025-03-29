import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@landingco.com",
      description: "Our friendly team is here to help.",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Market St, San Francisco, CA",
      description: "Come say hello at our office.",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm.",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Got a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <AnimatedSection className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                  {formStatus === "success" && (
                    <div className="bg-green-50 text-green-700 px-4 py-3 rounded flex items-center">
                      <Check className="h-5 w-5 mr-2" />
                      Your message has been sent successfully!
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 md:p-3 rounded-full text-primary">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm md:text-base">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {item.description}
                        </p>
                        <p className="font-medium mt-1 text-sm md:text-base">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
