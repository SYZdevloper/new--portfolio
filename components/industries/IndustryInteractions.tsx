"use client";

import { useEffect } from "react";

export default function IndustryInteractions() {
  useEffect(() => {
    // Animations setup
    const applyReveal = (selector: string, options: { variant?: string, baseDelay?: number, step?: number } = {}) => {
      const { variant = "", baseDelay = 0, step = 90 } = options;
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("reveal");
        if (variant) element.classList.add(variant);
        (element as HTMLElement).style.setProperty("--reveal-delay", `${baseDelay + (index * step)}ms`);
      });
    };

    applyReveal(".hero-copy > *", { variant: "reveal-left", baseDelay: 50, step: 80 });
    applyReveal(".navigator-intro > div", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".navigator-intro > h2", { variant: "reveal-right", baseDelay: 100, step: 0 });
    applyReveal(".family-tab", { variant: "reveal-zoom", baseDelay: 20, step: 60 });
    applyReveal(".industry-row", { variant: "reveal-zoom", baseDelay: 10, step: 40 });
    applyReveal(".seo-section h2, .seo-section p:not(.seo-point p)", { variant: "reveal-left", baseDelay: 20, step: 80 });
    applyReveal(".seo-point", { variant: "reveal-zoom", baseDelay: 40, step: 70 });
    applyReveal(".faq-intro", { variant: "reveal-left", baseDelay: 20, step: 0 });
    applyReveal(".faq-list", { variant: "reveal-right", baseDelay: 100, step: 0 });
    applyReveal(".cta-box", { variant: "reveal-zoom", baseDelay: 30, step: 0 });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(".reveal");

    let revealObserver: IntersectionObserver | null = null;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

      revealElements.forEach((element) => revealObserver!.observe(element));
    }


    // Modal logic
    const modal = document.getElementById('proposalModal');
    const closeModalBtn = document.getElementById('closeModal');
    const proposalForm = document.getElementById('proposalForm');
    const modalMessage = document.getElementById('modalFormMessage');
    const openButtons = document.querySelectorAll('.open-proposal');

    const openModal = () => {
      if (modal) modal.classList.add('open');
      document.body.classList.add('modal-open');
      const modalName = document.getElementById('modalName');
      if (modalName) setTimeout(() => modalName.focus(), 0);
    };

    openButtons.forEach(button => button.addEventListener('click', openModal));

    const closeProposal = () => {
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProposal);
    
    const handleModalClick = (e: MouseEvent) => { 
      if (e.target === modal) closeProposal(); 
    };
    if (modal) modal.addEventListener('click', handleModalClick);
    
    const handleKeyDown = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') closeProposal(); 
    };
    document.addEventListener('keydown', handleKeyDown);

    const handleFormSubmit = (e: SubmitEvent) => { 
      e.preventDefault(); 
      if (modalMessage) modalMessage.classList.add('show'); 
    };
    if (proposalForm) {
      proposalForm.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      if (revealObserver) revealObserver.disconnect();
      openButtons.forEach(button => button.removeEventListener('click', openModal));
      if (closeModalBtn) closeModalBtn.removeEventListener('click', closeProposal);
      if (modal) modal.removeEventListener('click', handleModalClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (proposalForm) proposalForm.removeEventListener('submit', handleFormSubmit);
    };  }, []);

  return null;
}

