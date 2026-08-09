// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function FitnessWellnessBusinessesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "brand": { "kicker": "Client confidence", "title": "Help clients understand the experience before booking.", "text": "Structure services, classes, locations, practitioners, facilities, pricing, policies and outcomes.", "items": ["Service pages", "Practitioner profiles", "Location experiences"], "label": "Brand, Service & Location Websites" }, "booking": { "kicker": "Appointment conversion", "title": "Make booking and rescheduling straightforward.", "text": "Connect classes, appointments, capacity, staff, locations, waitlists, reminders and cancellation rules.", "items": ["Live schedules", "Appointments and classes", "Waitlists and reminders"], "label": "Schedules, Booking & Waitlists" }, "membership": { "kicker": "Recurring relationship", "title": "Support flexible commercial models and client accounts.", "text": "Build plans, class packs, trials, subscriptions, billing, freezes, credits and receipts.", "items": ["Membership plans", "Packs and credits", "Billing and receipts"], "label": "Memberships, Packs & Payments" }, "clients": { "kicker": "Ongoing support", "title": "Give clients one place for their wellness relationship.", "text": "Provide bookings, plans, content, forms, goals, progress inputs, messages and documents.", "items": ["Client accounts", "Programs and content", "Progress and communication"], "label": "Client & Program Portals" }, "operations": { "kicker": "Business visibility", "title": "Show useful membership, booking and service indicators.", "text": "Connect leads, bookings, attendance, capacity, membership, retention, feedback and staff activity.", "items": ["Booking and attendance", "Membership reporting", "Retention indicators"], "label": "Studio & Wellness Dashboards" } }

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
