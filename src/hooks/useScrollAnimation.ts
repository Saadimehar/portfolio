import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state to visible if needed on mount
    const timer = setTimeout(() => {
      if (ref.current && !isVisible) {
        const rect = ref.current.getBoundingClientRect();
        // If element is already in viewport on mount, set visible immediately
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
          return;
        }
      }
    }, 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(timer);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
