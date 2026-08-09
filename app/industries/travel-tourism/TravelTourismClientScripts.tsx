// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function TravelTourismClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "discovery": { "kicker": "Travel inspiration", "title": "Help travellers find suitable experiences by intent.", "text": "Structure destinations, themes, duration, budget, dates, pace, interests, itineraries and media.", "items": ["Destination architecture", "Trip filters", "Itinerary pages"], "label": "Destination & Trip Discovery" }, "booking": { "kicker": "Travel conversion", "title": "Carry trip context into enquiry or booking.", "text": "Support departures, occupancy, travellers, options, pricing inputs, deposits, policies and confirmation.", "items": ["Departure availability", "Traveller details", "Deposits and confirmation"], "label": "Availability & Booking Journeys" }, "planning": { "kicker": "Trip confidence", "title": "Help customers understand and personalise the journey.", "text": "Provide day plans, maps, stays, transport, activities, notes, saved trips and optional extras.", "items": ["Day-by-day itineraries", "Maps and saved trips", "Extras and preferences"], "label": "Itinerary & Planning Tools" }, "travellers": { "kicker": "Pre-departure service", "title": "Give travellers one place for active bookings.", "text": "Support balances, forms, documents, vouchers, messages, changes, emergency information and feedback.", "items": ["Booking account", "Documents and payments", "Updates and support"], "label": "Traveller Portals" }, "operations": { "kicker": "Departure visibility", "title": "Give teams useful visibility across trips and customers.", "text": "Show enquiries, bookings, departures, capacity inputs, balances, documents, issues and service status.", "items": ["Booking funnel", "Departure readiness", "Customer-service reporting"], "label": "Travel Operations Dashboards" } }

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
