"use client";
import { useEffect, useRef } from "react";

export default function useScrollTop() {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const stickyHeader = document.querySelector("#sticky-menu");
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (stickyHeader) {
        if (currentScrollTop > 250) {
          if (currentScrollTop > lastScrollTop.current) {
            // Scrolling down
            stickyHeader.classList.add("scrolling");
            stickyHeader.classList.remove("reveal-header");
          } else {
            // Scrolling up
            stickyHeader.classList.remove("scrolling");
            stickyHeader.classList.add("reveal-header");
          }
        } else {
          stickyHeader.classList.remove("scrolling", "reveal-header");
        }
      }
      
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
