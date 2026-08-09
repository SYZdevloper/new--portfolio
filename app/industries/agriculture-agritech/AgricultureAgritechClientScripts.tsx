// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AgricultureAgritechClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Relevant discovery", "title": "Help users find products and guidance relevant to crops and conditions.", "text": "Structure categories, crops, stages, applications, specifications, documents and dealer actions.", "items": ["Crop and application search", "Product and technical pages", "Dealer and enquiry journeys"], "label": "Agricultural Product Platforms" }, "farmers": { "kicker": "User support", "title": "Give farmers and advisers useful role-based tools.", "text": "Support farms, fields, crops, activities, recommendations, questions, documents and notifications.", "items": ["Farm and field profiles", "Activity records", "Advisory and support"], "label": "Farmer & Adviser Portals" }, "commerce": { "kicker": "Market access", "title": "Connect products, dealers, availability inputs, enquiries and approved transactions.", "text": "Build accounts, dealer locators, price inputs, carts, orders, documents and status.", "items": ["Dealer network", "Product enquiries and orders", "Documents and status"], "label": "Dealer & Commerce Workflows" }, "field": { "kicker": "Operational evidence", "title": "Capture consistent field and service information.", "text": "Support visits, observations, samples, tasks, media, recommendations, follow-up and exceptions.", "items": ["Field visits", "Observations and media", "Tasks and follow-up"], "label": "Field Data & Service Workflows" }, "analytics": { "kicker": "Decision visibility", "title": "Present approved agronomic and programme indicators.", "text": "Connect adoption, activities, crop inputs, service levels, alerts and outcomes from reliable sources.", "items": ["Programme participation", "Field-activity indicators", "Alerts and reporting"], "label": "Farm & Programme Dashboards" } }

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
