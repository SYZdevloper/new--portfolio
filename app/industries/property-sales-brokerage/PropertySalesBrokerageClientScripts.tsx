// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function PropertySalesBrokerageClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "listings": { "kicker": "Property discovery", "title": "Help users find relevant properties without unnecessary friction.", "text": "Structure location, type, status, budget, features, maps, media and saved searches.", "items": ["Advanced listing search", "Map and locality pages", "Saved properties and alerts"], "label": "Listings & Property Search" }, "agents": { "kicker": "Trusted advice", "title": "Connect listings with accountable people and local expertise.", "text": "Build agent profiles, territories, offices, availability, reviews, enquiries and appointment journeys.", "items": ["Agent profiles", "Office and locality pages", "Appointments and enquiries"], "label": "Agent & Office Experiences" }, "leads": { "kicker": "Lead response", "title": "Carry listing and customer context into brokerage operations.", "text": "Capture preferences, assign ownership, track contact, schedule visits and manage lead stages.", "items": ["Context-rich leads", "Routing and assignment", "Visit and follow-up states"], "label": "Lead Routing & CRM Workflows" }, "owners": { "kicker": "Supply onboarding", "title": "Give property owners a structured listing and service journey.", "text": "Support submissions, documents, review, valuation requests, mandates, updates and performance.", "items": ["Property submission", "Document collection", "Listing and enquiry visibility"], "label": "Owner & Landlord Portals" }, "operations": { "kicker": "Commercial control", "title": "Give managers useful visibility across listings, leads and teams.", "text": "Show inventory health, response time, visits, conversions, sources and agent performance.", "items": ["Listing-quality indicators", "Lead funnel", "Agent and office reporting"], "label": "Brokerage Dashboards" } }

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
