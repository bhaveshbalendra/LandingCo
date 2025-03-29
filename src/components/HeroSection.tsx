import { ChevronRight } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-purple-900"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTYgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium inline-flex items-center mb-6 backdrop-blur-sm">
              <span className="bg-white text-primary rounded-full w-4 h-4 flex items-center justify-center mr-2">
                <ChevronRight className="h-3 w-3" />
              </span>
              Introducing our premium landing page platform
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Create stunning landing pages that convert
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Build beautiful, high-performing landing pages in minutes with our
              drag-and-drop editor and pre-built templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <LazyImage
                    key={i}
                    className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white"
                    src={`https://picsum.photos/id/${237 + i}/200/200`}
                    alt={`User ${i}`}
                  />
                ))}
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                <span className="font-bold text-white">1,000+</span> people have
                joined in the last week
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-2xl rounded-2xl"></div>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <LazyImage
                src="https://picsum.photos/id/237/800/600"
                alt="Dashboard preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
