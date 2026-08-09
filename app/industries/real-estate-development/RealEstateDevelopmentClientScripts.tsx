// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RealEstateDevelopmentClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "projects": { "kicker": "Project experience", "title": "Help buyers understand the project and shortlist relevant options.", "text": "Structure location, master plans, towers, units, amenities, specifications, media and updates.", "items": ["Project and phase pages", "Unit and amenity discovery", "Location and progress content"], "label": "Project Websites & Discovery" }, "inventory": { "kicker": "Availability", "title": "Connect approved unit information with customer intent.", "text": "Support unit types, floor plans, availability inputs, comparisons, favourites and enquiry context.", "items": ["Unit-type catalogue", "Floor plans and comparisons", "Availability integrations"], "label": "Inventory & Unit Journeys" }, "leads": { "kicker": "Sales conversion", "title": "Carry campaign and property context into sales workflows.", "text": "Capture source, preferences, budget, appointments, site visits, follow-up and booking states.", "items": ["Lead capture", "Site-visit scheduling", "Booking and follow-up states"], "label": "Leads, Visits & Bookings" }, "partners": { "kicker": "Channel enablement", "title": "Give authorised partners current information and controlled sales tools.", "text": "Provide projects, inventory context, price documents, leads, registrations, collateral and status.", "items": ["Partner accounts", "Lead registration", "Collateral and status"], "label": "Broker & Channel Portals" }, "sales": { "kicker": "Commercial visibility", "title": "Show useful approved indicators across projects and campaigns.", "text": "Connect leads, visits, bookings, inventory, collections, sources and sales performance.", "items": ["Lead and booking funnel", "Inventory visibility", "Campaign reporting"], "label": "Sales & Project Dashboards" } }

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
