// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RestaurantsCafesFoodServiceClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "brand": { "kicker": "Guest appetite", "title": "Help guests choose a venue, dish or service confidently.", "text": "Structure menus, categories, dietary fields, locations, hours, galleries, offers and contact actions.", "items": ["Digital menus", "Location pages", "Dietary and offer content"], "label": "Brand, Menu & Location Websites" }, "booking": { "kicker": "Table conversion", "title": "Make table and visit planning simple.", "text": "Connect location, date, time, party, seating inputs, deposits, confirmation, changes and reminders.", "items": ["Reservation integration", "Waitlist journeys", "Deposits and reminders"], "label": "Reservations & Waitlists" }, "ordering": { "kicker": "Order conversion", "title": "Create clear pickup and delivery journeys.", "text": "Support menus, modifiers, locations, slots, addresses, payments, order status and service recovery.", "items": ["Online ordering", "Pickup and delivery", "Order status"], "label": "Ordering & Delivery" }, "loyalty": { "kicker": "Guest relationship", "title": "Support repeat visits and higher-value enquiries.", "text": "Build profiles, rewards, offers, gift cards, catering requests, events and feedback.", "items": ["Loyalty accounts", "Gift cards and offers", "Catering and events"], "label": "Accounts, Loyalty & Catering" }, "operations": { "kicker": "Operational visibility", "title": "Present approved location and guest indicators.", "text": "Show reservations, orders, enquiries, feedback, service cases, menu health and branch performance.", "items": ["Location performance", "Guest feedback", "Service reporting"], "label": "Location & Guest Dashboards" } }

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
