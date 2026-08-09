// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function FreightShippingForwardingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "services": { "kicker": "Service clarity", "title": "Help customers understand modes, lanes and capabilities.", "text": "Structure air, ocean, road, rail, project cargo, customs, regions, documents and enquiries.", "items": ["Mode and lane pages", "Cargo capabilities", "Service enquiries"], "label": "Freight Service Websites" }, "quotes": { "kicker": "Qualified quotes", "title": "Collect complete shipment requirements.", "text": "Capture origin, destination, dates, incoterms, cargo, dimensions, weight, documents, services and quote states.", "items": ["Guided quote forms", "Cargo and document inputs", "Review and quote states"], "label": "Rate & Quotation Workflows" }, "customers": { "kicker": "Account workflow", "title": "Give customers one place to manage freight work.", "text": "Support quotes, bookings, shipments, parties, documents, invoices, messages and cases.", "items": ["Customer accounts", "Bookings and shipments", "Documents and invoices"], "label": "Customer Booking Portals" }, "tracking": { "kicker": "Shipment confidence", "title": "Present approved milestones and meaningful exceptions.", "text": "Connect pickup, departure, transhipment, arrival, customs, delivery, delays and notifications.", "items": ["Shipment timeline", "Exception alerts", "Proof and documents"], "label": "Tracking & Exception Visibility" }, "operations": { "kicker": "Operational visibility", "title": "Show useful shipment and service indicators.", "text": "Connect bookings, milestones, documents, exceptions, teams, carriers and service performance.", "items": ["Shipment pipeline", "Document readiness", "Exception reporting"], "label": "Forwarding Operations Dashboards" } }

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
