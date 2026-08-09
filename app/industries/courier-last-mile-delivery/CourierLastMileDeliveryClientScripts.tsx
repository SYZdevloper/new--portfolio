// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function CourierLastMileDeliveryClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "booking": { "kicker": "Shipment creation", "title": "Make courier booking fast and accurate.", "text": "Capture pickup, delivery, contacts, parcels, service levels, slots, price inputs, payment and labels.", "items": ["Address and parcel intake", "Service selection", "Payment and labels"], "label": "Delivery Booking & Pricing" }, "tracking": { "kicker": "Delivery confidence", "title": "Give senders and recipients useful approved updates.", "text": "Show booking, pickup, movement, out-for-delivery, arrival, delivery, attempts and exceptions.", "items": ["Tracking timeline", "SMS and email inputs", "Recipient actions"], "label": "Tracking & Notifications" }, "customers": { "kicker": "Account workflows", "title": "Help business customers manage repeat shipping.", "text": "Support addresses, bulk uploads, shipments, labels, invoices, returns, cases and reports.", "items": ["Merchant accounts", "Bulk shipment intake", "Invoices and reports"], "label": "Customer & Merchant Portals" }, "drivers": { "kicker": "Field execution", "title": "Connect assignments, routes and delivery evidence.", "text": "Support stops, navigation links, scanning, status, proof, cash inputs, issues and returns.", "items": ["Route and stop list", "Scanning and status", "Proof and exception capture"], "label": "Driver & Route Workflows" }, "operations": { "kicker": "Delivery control", "title": "Show useful network and service indicators.", "text": "Connect bookings, routes, drivers, attempts, delivery rates, exceptions, cases and service levels.", "items": ["Route status", "Delivery performance", "Exception reporting"], "label": "Last-Mile Operations Dashboards" } }

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
