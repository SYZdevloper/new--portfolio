// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function EventsVenuesBookingPlatformsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "discovery": { "kicker": "Experience discovery", "title": "Help audiences find relevant events and spaces.", "text": "Structure categories, dates, locations, capacity, facilities, accessibility, packages, media and maps.", "items": ["Event search", "Venue and space pages", "Calendar and maps"], "label": "Event & Venue Discovery" }, "booking": { "kicker": "Conversion", "title": "Connect interest with the right booking path.", "text": "Support tickets, seating inputs, venue requests, availability, packages, deposits, payments and confirmation.", "items": ["Ticketing integration", "Venue enquiry forms", "Deposits and confirmation"], "label": "Tickets, Enquiries & Booking" }, "organisers": { "kicker": "Partner operations", "title": "Give organisers and venue teams role-based workflows.", "text": "Provide events, spaces, schedules, files, attendees, suppliers, requests, settlements and reports.", "items": ["Organiser accounts", "Schedule and file workflows", "Attendance and settlement views"], "label": "Organiser & Venue Portals" }, "attendees": { "kicker": "Guest service", "title": "Support visitors before, during and after the event.", "text": "Connect tickets, wallets, itineraries, directions, accessibility, notifications, check-in and feedback.", "items": ["Ticket accounts", "Event itineraries", "Check-in and alerts"], "label": "Attendee Experience" }, "operations": { "kicker": "Live visibility", "title": "Present approved booking and event indicators.", "text": "Show sales, capacity, arrivals, check-in, issues, suppliers, service cases and event performance.", "items": ["Sales and capacity", "Check-in status", "Event reporting"], "label": "Event Operations Dashboards" } }

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
