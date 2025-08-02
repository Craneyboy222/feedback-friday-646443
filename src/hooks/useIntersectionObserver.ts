import { useEffect, useState, useRef } from 'react';

interface IntersectionObserverArgs {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (
  options: IntersectionObserverArgs
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [options]);

  const observe = (element: Element) => {
    observerRef.current?.observe(element);
  };

  return { entry, observe };
};