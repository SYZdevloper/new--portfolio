"use client";

import { useEffect } from "react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT ?? "";
const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? "";
const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function HomeInteractions() {
  useEffect(() => {
    const cleanup: Array<() => void> = [];
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const params = new URLSearchParams(window.location.search);
    trackingKeys.forEach((key) => {
      const current = params.get(key);
      if (current) localStorage.setItem(key, current);
      const value = current || localStorage.getItem(key) || "";
      document.querySelectorAll<HTMLInputElement>(`input[name="${key}"]`).forEach((input) => {
        input.value = value;
      });
    });

    const siteHeader = document.getElementById("site-header");
    const floatingCta = document.querySelector<HTMLElement>(".floating-cta");
    const menuButton = document.querySelector<HTMLButtonElement>(".menu-btn");
    const mobileMenuLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".mobile-nav-panel a"));

    const closeMenu = () => {
      siteHeader?.classList.remove("menu-open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open navigation menu");
    };

    const syncHeaderState = () => {
      siteHeader?.classList.toggle("scrolled", window.scrollY > 34);
      floatingCta?.classList.toggle("is-visible", window.scrollY > 720);
    };
    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    cleanup.push(() => window.removeEventListener("scroll", syncHeaderState));

    const toggleMenu = () => {
      if (!siteHeader || !menuButton) return;
      const isOpen = siteHeader.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };
    menuButton?.addEventListener("click", toggleMenu);
    cleanup.push(() => menuButton?.removeEventListener("click", toggleMenu));

    mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMenu));
    cleanup.push(() => mobileMenuLinks.forEach((link) => link.removeEventListener("click", closeMenu)));

    const handleOutsideClick = (event: MouseEvent) => {
      if (siteHeader && event.target instanceof Node && !siteHeader.contains(event.target)) closeMenu();
    };
    document.addEventListener("click", handleOutsideClick);
    cleanup.push(() => document.removeEventListener("click", handleOutsideClick));

    const handleResize = () => {
      if (window.innerWidth > 1020) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    cleanup.push(() => window.removeEventListener("resize", handleResize));

    const applyReveal = (
      selector: string,
      options: { variant?: string; baseDelay?: number; step?: number } = {},
    ) => {
      const { variant = "", baseDelay = 0, step = 90 } = options;
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.classList.add("reveal");
        if (variant) element.classList.add(variant);
        element.style.setProperty("--reveal-delay", `${baseDelay + index * step}ms`);
      });
    };

    applyReveal(".hero-copy", { variant: "reveal-left", baseDelay: 50, step: 0 });
    applyReveal(".hero-product-scene", { variant: "reveal-right", baseDelay: 140, step: 0 });
    applyReveal(".intro-copy", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".intro-title", { variant: "reveal-right", baseDelay: 120, step: 0 });
    applyReveal(".service-bento-card", { variant: "reveal-zoom", baseDelay: 30, step: 85 });
    applyReveal(".section-heading", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".work-card", { variant: "reveal-zoom", baseDelay: 30, step: 110 });
    applyReveal(".industry-link", { variant: "reveal-zoom", baseDelay: 25, step: 65 });
    applyReveal(".trust-card", { variant: "reveal-zoom", baseDelay: 30, step: 75 });
    applyReveal(".company-copy, .company-stats", { variant: "reveal-zoom", baseDelay: 30, step: 100 });
    applyReveal(".faq-intro", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".faq-list", { variant: "reveal-right", baseDelay: 100, step: 0 });
    applyReveal(".pricing-head", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".price-card", { variant: "reveal-zoom", baseDelay: 30, step: 100 });
    applyReveal(".pricing-footnote", { variant: "reveal-zoom", baseDelay: 60, step: 0 });
    applyReveal(".process-overview", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".process-step", { variant: "reveal-right", baseDelay: 60, step: 110 });
    applyReveal(".testimonial-head", { variant: "reveal-zoom", baseDelay: 20, step: 0 });
    applyReveal(".lead-copy", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".lead-panel", { variant: "reveal-right", baseDelay: 120, step: 0 });
    applyReveal(".big-cta .container", { variant: "reveal-zoom", baseDelay: 30, step: 0 });
    applyReveal(".footer-grid, .footer-bottom", { variant: "reveal-zoom", baseDelay: 20, step: 90 });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let revealObserver: IntersectionObserver | null = null;
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
      );
      revealElements.forEach((element) => revealObserver?.observe(element));
    }
    cleanup.push(() => revealObserver?.disconnect());

    const proposalModal = document.getElementById("proposal-modal");
    const proposalDialog = proposalModal?.querySelector<HTMLElement>(".proposal-dialog");
    const proposalClose = proposalModal?.querySelector<HTMLButtonElement>(".modal-close");
    const proposalOpeners = Array.from(document.querySelectorAll<HTMLElement>(".js-open-proposal"));
    const selectedPackage = document.getElementById("selected-package");
    const selectedPackageName = document.getElementById("selected-package-name");
    const selectedPackagePrice = document.getElementById("selected-package-price");
    const packageInput = document.getElementById("popup-package") as HTMLInputElement | null;
    const packagePriceInput = document.getElementById("popup-package-price") as HTMLInputElement | null;
    const serviceSelect = document.getElementById("popup-service") as HTMLSelectElement | null;
    const budgetSelect = document.getElementById("popup-budget") as HTMLSelectElement | null;
    const proposalEyebrow = document.getElementById("proposal-modal-eyebrow");
    const proposalTitle = document.getElementById("proposal-modal-title");
    const proposalDescription = document.getElementById("proposal-modal-description");
    const proposalSubmitButton = document.getElementById("proposal-submit-button") as HTMLButtonElement | null;
    let lastFocusedElement: HTMLElement | null = null;

    const openProposalModal = (event: Event) => {
      event.preventDefault();
      if (!proposalModal) return;
      lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const opener = event.currentTarget as HTMLElement | null;
      const packageName = opener?.dataset.package ?? "";
      const packagePrice = opener?.dataset.price ?? "";
      const service = opener?.dataset.service ?? "";
      const budget = opener?.dataset.budget ?? "";

      if (packageName) {
        selectedPackage?.classList.add("is-visible");
        if (selectedPackageName) selectedPackageName.textContent = `${packageName} package`;
        if (selectedPackagePrice) selectedPackagePrice.textContent = packagePrice;
        if (packageInput) packageInput.value = packageName;
        if (packagePriceInput) packagePriceInput.value = packagePrice;
        if (proposalEyebrow) proposalEyebrow.textContent = "Package enquiry";
        if (proposalTitle) proposalTitle.textContent = `Enquire about the ${packageName} package`;
        if (proposalDescription) {
          proposalDescription.textContent =
            "Your selected package is already added below. Complete the remaining details and we will contact you with the next steps.";
        }
        if (proposalSubmitButton) {
          proposalSubmitButton.innerHTML = `Continue with ${packageName} <span class="arrow">↗</span>`;
        }
        if (serviceSelect && Array.from(serviceSelect.options).some((option) => option.value === service)) {
          serviceSelect.value = service;
        }
        if (budgetSelect) {
          budgetSelect.value = Array.from(budgetSelect.options).some((option) => option.value === budget) ? budget : "";
        }
      } else {
        selectedPackage?.classList.remove("is-visible");
        if (selectedPackageName) selectedPackageName.textContent = "";
        if (selectedPackagePrice) selectedPackagePrice.textContent = "";
        if (packageInput) packageInput.value = "";
        if (packagePriceInput) packagePriceInput.value = "";
        if (serviceSelect) serviceSelect.value = "";
        if (budgetSelect) budgetSelect.value = "";
        if (proposalEyebrow) proposalEyebrow.textContent = "Free product consultation";
        if (proposalTitle) proposalTitle.textContent = "Get your custom proposal";
        if (proposalDescription) {
          proposalDescription.textContent =
            "Tell us what you need. We will reply with the recommended design approach, timeline and estimated budget.";
        }
        if (proposalSubmitButton) {
          proposalSubmitButton.innerHTML = 'Request My Proposal <span class="arrow">↗</span>';
        }
      }

      proposalModal.classList.add("is-open");
      proposalModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      window.setTimeout(() => proposalModal.querySelector<HTMLInputElement>('input[name="name"]')?.focus(), 80);
    };

    const closeProposalModal = () => {
      proposalModal?.classList.remove("is-open");
      proposalModal?.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      lastFocusedElement?.focus();
    };

    proposalOpeners.forEach((opener) => opener.addEventListener("click", openProposalModal));
    cleanup.push(() => proposalOpeners.forEach((opener) => opener.removeEventListener("click", openProposalModal)));
    proposalClose?.addEventListener("click", closeProposalModal);
    cleanup.push(() => proposalClose?.removeEventListener("click", closeProposalModal));

    const handleModalBackdrop = (event: MouseEvent) => {
      if (proposalDialog && event.target instanceof Node && !proposalDialog.contains(event.target)) closeProposalModal();
    };
    proposalModal?.addEventListener("click", handleModalBackdrop);
    cleanup.push(() => proposalModal?.removeEventListener("click", handleModalBackdrop));

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && proposalModal?.classList.contains("is-open")) closeProposalModal();
    };
    document.addEventListener("keydown", handleEscape);
    cleanup.push(() => document.removeEventListener("keydown", handleEscape));

    const forms = Array.from(document.querySelectorAll<HTMLFormElement>(".js-lead-form"));
    const formHandlers = new Map<HTMLFormElement, (event: SubmitEvent) => void>();

    forms.forEach((form) => {
      const handler = async (event: SubmitEvent) => {
        event.preventDefault();
        const status = form.querySelector<HTMLElement>(".form-status");
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        if (!status || !button) return;
        status.className = "form-status";
        status.textContent = "";

        if (!form.checkValidity()) {
          form.reportValidity();
          status.className = "form-status error";
          status.textContent = "Please complete all required fields.";
          return;
        }

        const formData = new FormData(form);
        if (formData.get("website")) return;
        formData.append("form_name", form.dataset.formName || "Website Lead Form");
        formData.append("page_url", window.location.href);
        formData.append("submitted_at", new Date().toISOString());

        button.disabled = true;
        button.textContent = "Sending…";

        try {
          if (FORM_ENDPOINT) {
            const response = await fetch(FORM_ENDPOINT, {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            });
            if (!response.ok) throw new Error("Submission failed");
          } else {
            await new Promise((resolve) => window.setTimeout(resolve, 700));
            console.table(Object.fromEntries(formData.entries()));
          }

          const gtag = (window as GtagWindow).gtag;
          if (GOOGLE_ADS_CONVERSION_ID && gtag) {
            gtag("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_ID });
          }

          status.className = "form-status success";
          status.textContent = FORM_ENDPOINT
            ? "Thank you. Your enquiry has been received."
            : "Mockup form completed. Connect NEXT_PUBLIC_LEAD_FORM_ENDPOINT before launch.";
          form.reset();
          trackingKeys.forEach((key) => {
            const input = form.querySelector<HTMLInputElement>(`input[name="${key}"]`);
            if (input) input.value = localStorage.getItem(key) || "";
          });
        } catch {
          status.className = "form-status error";
          status.textContent = "Something went wrong. Please email hello@hyperlinktechsolutions.com.";
        } finally {
          button.disabled = false;
          button.innerHTML =
            form.dataset.formName === "Hero Lead Form"
              ? 'Get My Free Consultation <span class="arrow">↗</span>'
              : form.dataset.formName === "Proposal Popup Form"
                ? packageInput?.value
                  ? `Continue with ${packageInput.value} <span class="arrow">↗</span>`
                  : 'Request My Proposal <span class="arrow">↗</span>'
                : 'Send My Enquiry <span class="arrow">↗</span>';
        }
      };
      formHandlers.set(form, handler);
      form.addEventListener("submit", handler);
    });
    cleanup.push(() => forms.forEach((form) => {
      const handler = formHandlers.get(form);
      if (handler) form.removeEventListener("submit", handler);
    }));

    return () => cleanup.reverse().forEach((dispose) => dispose());
  }, []);

  return null;
}
