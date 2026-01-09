'use client';

import { useEffect, useState, useCallback } from 'react';

export function useIntersectionObserver({ threshold = 0.1, rootMargin = '50px' } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [node, setNode] = useState(null);

  const ref = useCallback((element) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, threshold, rootMargin]);

  return { ref, isIntersecting };
}
