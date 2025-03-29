import { useEffect, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Load image when it's 200px from viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imgStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  const containerStyle = {
    position: "relative" as const,
    width: width || "100%",
    height: height || "auto",
  };

  return (
    <div style={containerStyle} className={className} ref={imgRef}>
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      {isInView && (
        <img
          src={src}
          alt={alt}
          style={imgStyle}
          onLoad={handleLoad}
          className={`w-full h-full ${className}`}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
}
