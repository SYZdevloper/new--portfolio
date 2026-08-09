// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function DigitalPlatformsMarketplacesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "strategy": {
                "kicker": "Business model & journey design",
                "title": "Define how every side creates, receives and exchanges value on the platform.",
                "text": "Map users, roles, supply, demand, trust, transactions and operations before turning the idea into screens and features.",
                "items": ["User roles and value exchange", "Marketplace journey and information architecture", "MVP scope and success measures"],
                "link": "#project-enquiry",
                "label": "Marketplace Strategy"
            },
            "onboarding": {
                "kicker": "Supply activation",
                "title": "Help providers create complete, useful profiles and understand what happens next.",
                "text": "Design registration, business details, verification states, listing setup, approvals and role-specific guidance.",
                "items": ["Provider registration and profiles", "Verification and approval states", "Guided listing or service setup"],
                "link": "/services/client-portal-development/",
                "label": "Provider Onboarding"
            },
            "discovery": {
                "kicker": "Demand and matching",
                "title": "Help customers find and compare the right listing, service or provider.",
                "text": "Structure categories, searchable information, filters, location, availability and comparison around the real decision.",
                "items": ["Listings and detail pages", "Search, filters and map discovery", "Shortlists, comparison and matching"],
                "link": "/services/custom-web-app-development/",
                "label": "Search & Matching"
            },
            "transactions": {
                "kicker": "Value exchange",
                "title": "Connect booking, payment and fulfilment states around the platform's transaction.",
                "text": "Plan carts or bookings, fees, payment status, notifications, refunds and provider payouts around a suitable payment provider.",
                "items": ["Orders, bookings or requests", "Payments, commissions and refunds", "Status updates and fulfilment workflows"],
                "link": "/services/api-integration-development/",
                "label": "Transactions & Payments"
            },
            "operations": {
                "kicker": "Platform control",
                "title": "Give internal teams the visibility to approve, support and improve the marketplace.",
                "text": "Create role-based admin tools for users, providers, listings, transactions, moderation, disputes, reporting and configuration.",
                "items": ["Approvals and moderation", "Transactions, disputes and support", "Reports, roles and platform settings"],
                "link": "/services/admin-panel-development/",
                "label": "Admin & Operations"
            }
        }

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
