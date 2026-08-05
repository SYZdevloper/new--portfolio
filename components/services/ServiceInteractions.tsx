"use client";

import { useEffect } from "react";

export default function ServiceInteractions() {
  useEffect(() => {
    const siteHeader = document.getElementById("site-header");
    const floatingCta = document.querySelector(".floating-cta");
    const menuButton = document.querySelector(".menu-btn");
    const mobileMenuLinks = document.querySelectorAll(".mobile-nav-panel a");

    const syncHeaderState = () => {
      if (siteHeader) siteHeader.classList.toggle("scrolled", window.scrollY > 34);
      if (floatingCta) floatingCta.classList.toggle("is-visible", window.scrollY > 720);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });

    const handleMenuToggle = () => {
      if (!siteHeader || !menuButton) return;
      const isOpen = siteHeader.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    if (menuButton) {
      menuButton.addEventListener("click", handleMenuToggle);
    }

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (!siteHeader || !menuButton) return;
        siteHeader.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    const handleDocumentClick = (event: MouseEvent) => {
      if (siteHeader && !siteHeader.contains(event.target as Node)) {
        siteHeader.classList.remove("menu-open");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    const handleResize = () => {
      if (window.innerWidth > 1020 && siteHeader && menuButton) {
        siteHeader.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    };

    window.addEventListener("resize", handleResize);

    // Animations setup
    const applyReveal = (selector: string, options: { variant?: string, baseDelay?: number, step?: number } = {}) => {
      const { variant = "", baseDelay = 0, step = 90 } = options;
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("reveal");
        if (variant) element.classList.add(variant);
        (element as HTMLElement).style.setProperty("--reveal-delay", `${baseDelay + (index * step)}ms`);
      });
    };

    applyReveal(".hero-copy", { variant: "reveal-left", baseDelay: 50, step: 0 });
    applyReveal(".proof-item", { variant: "reveal-zoom", baseDelay: 20, step: 80 });
    applyReveal(".content-intro-aside", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".content-intro-main > h2, .content-intro-main > p", { variant: "reveal-right", baseDelay: 80, step: 80 });
    applyReveal(".problem-card", { variant: "reveal-zoom", baseDelay: 20, step: 75 });
    applyReveal(".solution-head", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".deliverable-card", { variant: "reveal-zoom", baseDelay: 30, step: 75 });
    applyReveal(".section-heading", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".case-visual", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".case-copy", { variant: "reveal-right", baseDelay: 110, step: 0 });
    applyReveal(".website-type-card", { variant: "reveal-zoom", baseDelay: 20, step: 65 });
    applyReveal(".integration-copy", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".integration-cloud", { variant: "reveal-right", baseDelay: 110, step: 0 });
    applyReveal(".process-overview", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".process-step", { variant: "reveal-right", baseDelay: 55, step: 90 });
    applyReveal(".scope-copy", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".scope-factor", { variant: "reveal-right", baseDelay: 45, step: 70 });
    applyReveal(".trust-card", { variant: "reveal-zoom", baseDelay: 20, step: 70 });
    applyReveal(".faq-intro", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".faq-list", { variant: "reveal-right", baseDelay: 100, step: 0 });
    applyReveal(".related-card", { variant: "reveal-zoom", baseDelay: 20, step: 75 });
    applyReveal(".lead-copy", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".lead-panel", { variant: "reveal-right", baseDelay: 110, step: 0 });
    applyReveal(".big-cta .container", { variant: "reveal-zoom", baseDelay: 30, step: 0 });
    applyReveal(".footer-grid, .footer-bottom", { variant: "reveal-zoom", baseDelay: 20, step: 90 });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(".reveal");

    let revealObserver: IntersectionObserver | null = null;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

      revealElements.forEach((element) => revealObserver!.observe(element));
    }

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      if (menuButton) menuButton.removeEventListener("click", handleMenuToggle);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
      if (revealObserver) {
        revealObserver.disconnect();
      }
    };
  }, []);

  return null;
}
