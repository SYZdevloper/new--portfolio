// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RecreationLeisureAttractionsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "discover": { "kicker": "Visitor desire", "title": "Help visitors understand what to do and plan confidently.", "text": "Structure attractions, activities, age guidance, accessibility, facilities, maps, schedules, media and policies.", "items": ["Experience pages", "Maps and schedules", "Accessibility information"], "label": "Attraction & Activity Websites" }, "booking": { "kicker": "Visit conversion", "title": "Create a clear route from date selection to confirmation.", "text": "Support dates, times, guests, tickets, capacity, add-ons, promo codes, payments and confirmation.", "items": ["Timed entry", "Ticket and pass options", "Payments and confirmation"], "label": "Tickets, Passes & Booking" }, "members": { "kicker": "Repeat visits", "title": "Give visitors useful account and membership tools.", "text": "Support passes, bookings, tickets, wallets, renewals, benefits, preferences and visit history.", "items": ["Digital tickets", "Membership renewals", "Benefits and history"], "label": "Membership & Visitor Accounts" }, "groups": { "kicker": "Higher-value bookings", "title": "Connect schools, groups and private events with qualified workflows.", "text": "Capture group type, size, date, activities, accessibility, catering, documents, quotes and approval.", "items": ["Group enquiries", "Educational visits", "Private events"], "label": "Groups, Events & Education" }, "operations": { "kicker": "Operational awareness", "title": "Present approved booking and visitor indicators.", "text": "Show capacity, arrivals, check-in, memberships, groups, incidents, feedback and attraction performance.", "items": ["Capacity and arrivals", "Check-in status", "Visitor reporting"], "label": "Visitor Operations Dashboards" } }

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
