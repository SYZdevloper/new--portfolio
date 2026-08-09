// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function HotelsResortsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "property": { "kicker": "Destination desire", "title": "Show why the property and destination are worth choosing.", "text": "Structure rooms, suites, amenities, dining, wellness, activities, galleries, location and policies.", "items": ["Room and suite pages", "Amenities and experiences", "Destination content"], "label": "Property & Experience Websites" }, "booking": { "kicker": "Booking conversion", "title": "Create a clear route from dates to confirmation.", "text": "Connect dates, guests, rooms, packages, extras, promo codes, policies, payments and confirmation.", "items": ["Availability search", "Packages and extras", "Booking integration"], "label": "Availability & Direct Booking" }, "offers": { "kicker": "Revenue opportunities", "title": "Promote relevant packages and bookable experiences.", "text": "Support offers, restaurants, spa, activities, celebrations, tables, appointments and enquiries.", "items": ["Offer landing pages", "Dining and spa bookings", "Event enquiries"], "label": "Offers, Dining & Events" }, "guests": { "kicker": "Guest experience", "title": "Give guests useful pre-arrival and in-stay tools.", "text": "Support reservations, preferences, check-in inputs, requests, itineraries, messages and feedback.", "items": ["Pre-arrival journeys", "Concierge requests", "Itineraries and feedback"], "label": "Guest & Concierge Portals" }, "operations": { "kicker": "Commercial visibility", "title": "Present approved booking and service indicators.", "text": "Show channels, occupancy inputs, offers, enquiries, requests, response times and guest feedback.", "items": ["Booking funnel", "Guest-service status", "Property reporting"], "label": "Hospitality Dashboards" } }

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
