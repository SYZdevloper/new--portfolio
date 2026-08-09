// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function FintechPaymentsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Coverage clarity", "title": "Help customers understand approved products before requesting a quote.", "text": "Structure coverage, benefits, exclusions, limits, eligibility, documents, examples and disclosures.", "items": ["Product comparison", "Coverage explanations", "Documents and disclosures"], "label": "Insurance Product Websites" }, "quotes": { "kicker": "Quote conversion", "title": "Collect relevant risk and applicant information progressively.", "text": "Support questions, assets or people, documents, consent, price inputs, referrals, review and purchase.", "items": ["Dynamic quote forms", "Document collection", "Referral and purchase states"], "label": "Quote & Application Journeys" }, "policies": { "kicker": "Policy self-service", "title": "Give customers access to relevant policy actions.", "text": "Provide policies, documents, payments, renewals, changes, beneficiaries, messages and support cases.", "items": ["Policy overview", "Documents and payments", "Changes and renewals"], "label": "Policyholder Portals" }, "claims": { "kicker": "Claims confidence", "title": "Guide claimants through clear evidence and status workflows.", "text": "Support incident details, parties, assets, documents, media, appointments, decisions, payments and communication.", "items": ["Claims intake", "Evidence and appointments", "Status timeline"], "label": "Claims & Service Experiences" }, "brokers": { "kicker": "Distribution and control", "title": "Give authorised brokers and teams useful workflows.", "text": "Provide products, quotes, clients, policies, documents, commissions, cases and approved reporting.", "items": ["Broker accounts", "Client and policy workflows", "Operations reporting"], "label": "Broker & Operations Portals" } }

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
