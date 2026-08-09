// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function WaterWasteEnvironmentalServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "services": { "kicker": "Service clarity", "title": "Help users understand available services and requirements.", "text": "Structure service areas, materials, collection rules, facilities, permits, pricing inputs and guidance.", "items": ["Service and locality pages", "Material guidance", "Facility and permit information"], "label": "Service & Coverage Websites" }, "customers": { "kicker": "Self-service", "title": "Give customers clear access to account and service actions.", "text": "Support premises, containers, schedules, bills, payments, documents, preferences and cases.", "items": ["Accounts and premises", "Schedules and services", "Bills and documents"], "label": "Customer & Account Portals" }, "booking": { "kicker": "Service requests", "title": "Connect requests with eligibility, scheduling and status.", "text": "Support pickups, drop-offs, bulky items, commercial services, evidence, payment and notifications.", "items": ["Service booking", "Eligibility and scheduling", "Status notifications"], "label": "Bookings & Collection Workflows" }, "field": { "kicker": "Operational delivery", "title": "Connect crews, routes, assets and service evidence.", "text": "Build workflows for assignments, inspections, photos, exceptions, incidents, maintenance and completion.", "items": ["Route and job status", "Asset inspections", "Exception evidence"], "label": "Field, Route & Asset Workflows" }, "environment": { "kicker": "Impact visibility", "title": "Present approved service, material and environmental indicators.", "text": "Show volumes, recovery, contamination, water quality inputs, incidents, actions and performance.", "items": ["Material and service volumes", "Environmental measures", "Incident and action reporting"], "label": "Environmental & Compliance Dashboards" } }

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
