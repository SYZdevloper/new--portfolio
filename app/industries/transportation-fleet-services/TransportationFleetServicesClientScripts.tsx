// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function TransportationFleetServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "services": { "kicker": "Service discovery", "title": "Help customers choose the right transport service.", "text": "Structure routes, charters, vehicles, capacity, accessibility, service areas, policies and enquiries.", "items": ["Route and service pages", "Fleet showcase", "Qualified enquiries"], "label": "Transport Service Websites" }, "booking": { "kicker": "Booking conversion", "title": "Capture complete passenger or commercial trip needs.", "text": "Support origin, destination, dates, passengers, vehicles, extras, pricing inputs, payment and confirmation.", "items": ["Trip enquiry", "Vehicle selection", "Payment and confirmation"], "label": "Reservations & Trip Booking" }, "customers": { "kicker": "Account access", "title": "Give customers one place for active transport work.", "text": "Provide bookings, passengers, travellers, documents, invoices, changes, messages and reports.", "items": ["Account bookings", "Documents and invoices", "Changes and support"], "label": "Customer & Corporate Portals" }, "fleet": { "kicker": "Operational readiness", "title": "Connect vehicles and drivers with assignments and service states.", "text": "Support availability, inspections, licences, schedules, defects, maintenance, fuel inputs and documents.", "items": ["Vehicle and driver records", "Assignments and inspections", "Maintenance states"], "label": "Fleet, Driver & Maintenance" }, "operations": { "kicker": "Network visibility", "title": "Present useful trip and fleet indicators.", "text": "Show bookings, dispatch, vehicle status, delays, utilisation, maintenance, incidents and service levels.", "items": ["Dispatch status", "Fleet utilisation", "Incident and service reporting"], "label": "Transport Operations Dashboards" } }

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
