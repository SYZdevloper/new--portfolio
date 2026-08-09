// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function HealthtechTelemedicineClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Product evaluation", "title": "Help professional buyers and users assess approved products.", "text": "Structure intended use, clinical context, features, configurations, specifications, accessories, evidence, safety information and enquiries.", "items": ["Product discovery", "Technical comparison", "Evidence and safety content"], "label": "Medical Product Websites & Catalogues" }, "resources": { "kicker": "Controlled enablement", "title": "Give authorised audiences access to relevant materials.", "text": "Provide instructions for use, certificates, regulatory documents, training, commercial resources, market availability and updates.", "items": ["Document libraries", "Audience access", "Market-specific resources"], "label": "Professional & Distributor Resources" }, "service": { "kicker": "Product support", "title": "Connect equipment owners with approved service workflows.", "text": "Support registration, serials, warranties, maintenance, calibration, consumables, cases, files and service history.", "items": ["Equipment registration", "Maintenance and calibration", "Support cases"], "label": "Equipment & Service Portals" }, "diagnostics": { "kicker": "Coordinated operations", "title": "Support digital steps around diagnostic services and systems.", "text": "Connect orders, specimens or studies, status, quality checks, authorised results delivery, exceptions and communication.", "items": ["Order and sample status", "Quality workflow", "Authorised result access"], "label": "Diagnostic & Laboratory Workflows" }, "reporting": { "kicker": "Operational visibility", "title": "Present approved commercial and service indicators.", "text": "Show product interest, resource use, installed equipment, service cases, maintenance status, turnaround inputs and distributor activity.", "items": ["Product engagement", "Service performance", "Distributor reporting"], "label": "Product & Service Dashboards" } }

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
