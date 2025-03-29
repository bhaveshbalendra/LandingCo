import React, { createContext, useContext, useEffect, useState } from "react";

interface AnimationContextType {
  shouldAnimate: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  shouldAnimate: false,
});

export const useAnimation = () => useContext(AnimationContext);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Enable animations after the initial load to improve perceived performance
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ shouldAnimate }}>
      {children}
    </AnimationContext.Provider>
  );
}
