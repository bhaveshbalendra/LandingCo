import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-3 md:py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">L</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl md:text-2xl",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            LandingCo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "font-medium hover:text-primary transition-colors text-sm lg:text-base",
                isScrolled ? "text-gray-800" : "text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              isScrolled
                ? "border-gray-300"
                : "border-white text-white hover:text-primary hover:bg-white"
            )}
          >
            Log In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu
                className={cn(
                  "h-5 w-5",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
              />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <span className="font-bold text-xl text-primary">
                    LandingCo
                  </span>
                </Link>
              </div>
              <nav className="flex flex-col gap-1 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-2 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
