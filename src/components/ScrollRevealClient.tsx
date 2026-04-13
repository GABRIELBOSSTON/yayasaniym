"use client";

import { useEffect } from "react";

export default function ScrollRevealClient() {
  useEffect(() => {
    // We delay slightly to ensure DOM is fully painted
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-element');

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.15,
        }
      );

      revealElements.forEach((el) => {
        revealObserver.observe(el);
      });

      return () => {
        revealElements.forEach((el) => {
          revealObserver.unobserve(el);
        });
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
