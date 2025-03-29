import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10">
          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">
                  L
                </span>
              </div>
              <span className="font-bold text-xl md:text-2xl text-white">
                LandingCo
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base mb-6 pr-4">
              Create stunning, high-performing landing pages that convert
              visitors into customers. Our innovative platform makes it easy to
              build beautiful pages.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="text-sm md:text-base">
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center">
            <div className="space-y-4">
              <h3 className="font-bold text-base md:text-lg">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get the latest news and updates delivered straight to your
                inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white text-sm h-9 md:h-10"
                />
                <Button size="icon" className="h-9 w-9 md:h-10 md:w-10">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <div className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} LandingCo. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
