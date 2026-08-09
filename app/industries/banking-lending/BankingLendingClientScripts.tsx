// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function BankingLendingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Product clarity", "title": "Help customers understand and compare approved products.", "text": "Structure accounts, loans, features, rates, fees, eligibility, calculators, documents and disclosures.", "items": ["Product comparison", "Rate and fee content", "Eligibility guidance"], "label": "Financial Product Websites" }, "onboarding": { "kicker": "Application conversion", "title": "Guide applicants through a clear, controlled process.", "text": "Support identity details, consent, eligibility inputs, documents, verification, review and decision states.", "items": ["Progressive applications", "Document collection", "Verification and status"], "label": "Digital Onboarding & Applications" }, "customers": { "kicker": "Self-service", "title": "Give customers secure access to relevant account actions.", "text": "Provide products, balances or summaries, statements, repayments, documents, profile, messages and cases.", "items": ["Account overview", "Statements and repayments", "Secure service requests"], "label": "Customer Account Portals" }, "service": { "kicker": "Joined-up support", "title": "Carry customer context into staff-assisted journeys.", "text": "Connect appointments, applications, tasks, evidence, approvals, communication and escalations.", "items": ["Appointment booking", "Case ownership", "Approvals and escalation"], "label": "Branch, Adviser & Service Workflows" }, "analytics": { "kicker": "Operational visibility", "title": "Present approved product and service indicators.", "text": "Show applications, stages, turnaround, abandonment, service requests, repayment inputs and exceptions.", "items": ["Application funnel", "Turnaround reporting", "Service and exception views"], "label": "Banking & Lending Dashboards" } }

    document.querySelectorAll('.solution-tab').forEach((tab) => {
        tab.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            document.querySelectorAll('.solution-tab').forEach(x => x.classList.remove('active'));
            target.classList.add('active');
            
            const key = target.dataset.key;
            if (!key || !solutionData[key]) return;
            
            const d = solutionData[key];
            const kicker = document.getElementById('solutionKicker');
            if (kicker) kicker.textContent = d.kicker;
            
            const title = document.getElementById('solutionTitle');
            if (title) title.textContent = d.title;
            
            const text = document.getElementById('solutionText');
            if (text) text.textContent = d.text;
            
            const list = document.getElementById('solutionList');
            if (list) list.innerHTML = d.items.map((x: string) => '<span>' + x + '</span>').join('');
            
            const link = document.getElementById('solutionLink') as HTMLAnchorElement | null;
            if (link) link.href = d.link;
            
            const badge = document.getElementById('uiBadge');
            if (badge) badge.textContent = d.label;
        });
    });

    
    const handleFaqClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('.faq-question');
        if (!target) return;
        const item = target.closest('.faq-item');
        if (!item) return;
        
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(x => {
            x.classList.remove('open');
            const lastSpan = x.querySelector('.faq-question span:last-child');
            if (lastSpan) lastSpan.textContent = '+';
        });
        
        if (!wasOpen) {
            item.classList.add('open');
            const lastSpan = target.querySelector('span:last-child');
            if (lastSpan) lastSpan.textContent = '\u2212';
        }
    };
    
    if (!(window as any)._faqListenerAdded) {
        document.addEventListener('click', handleFaqClick);
        (window as any)._faqListenerAdded = true;
    }


    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom"));
    if (prefersReducedMotion) {
        revealElements.forEach(element => element.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
        revealElements.forEach(element => revealObserver.observe(element));
    }

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const open = mobileMenu.classList.toggle('open');
            menuBtn.textContent = open ? '×' : '☰';
        });
    }

    document.querySelectorAll('.js-demo-form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const successMsg = form.querySelector('.success-message');
            if (successMsg) successMsg.classList.add('show');
        });
    });

  }, []);

  return null;
}
