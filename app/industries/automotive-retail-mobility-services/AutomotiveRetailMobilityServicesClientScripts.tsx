// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AutomotiveRetailMobilityServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "inventory": { "kicker": "Retail discovery", "title": "Help customers find the right available vehicle or mobility option.", "text": "Structure stock, specifications, pricing, condition, location, availability, comparison and media.", "items": ["Inventory search", "Vehicle detail pages", "Comparison and saved items"], "label": "Inventory & Vehicle Discovery" }, "conversion": { "kicker": "Retail conversion", "title": "Carry customer intent into the next commercial step.", "text": "Connect enquiries, trade-ins, finance referrals, appointments, documents, deposits and handoffs.", "items": ["Lead journeys", "Appointments and test drives", "Deposits and documents"], "label": "Leads, Appointments & Sales" }, "mobility": { "kicker": "Mobility access", "title": "Build clear availability and booking journeys.", "text": "Support locations, dates, vehicles, extras, eligibility inputs, pricing, payments and booking states.", "items": ["Availability search", "Booking and checkout", "Account and trip history"], "label": "Rental, Subscription & Booking" }, "service": { "kicker": "Aftersales journey", "title": "Make maintenance and repair interactions easier to manage.", "text": "Connect vehicle details, service selection, appointments, estimates, approvals, status and payment.", "items": ["Service booking", "Estimate approvals", "Repair-status visibility"], "label": "Service & Workshop Experiences" }, "operations": { "kicker": "Operational control", "title": "Give teams useful visibility across locations, vehicles and work.", "text": "Show fleet status, reservations, utilisation, turnaround, service, exceptions and approved indicators.", "items": ["Branch dashboards", "Fleet utilisation", "Exceptions and reporting"], "label": "Branch, Fleet & Operations" } }

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
