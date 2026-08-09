// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function MetalsFabricationClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Material discovery", "title": "Help users find products by application and performance need.", "text": "Structure materials, grades, dimensions, properties, finishes, standards, documents and availability inputs.", "items": ["Application filters", "Property comparisons", "Technical documents"], "label": "Product & Material Catalogues" }, "specification": { "kicker": "Specification support", "title": "Give architects and engineers approved selection resources.", "text": "Connect systems, assemblies, details, drawings, BIM files, standards, calculators and specification text.", "items": ["System selectors", "CAD and BIM resources", "Specification documents"], "label": "Specifier & Design Tools" }, "samples": { "kicker": "Project conversion", "title": "Carry project context into technical sales.", "text": "Capture application, location, quantities, drawings, samples, quotes, approvals and follow-up.", "items": ["Sample requests", "Project enquiries", "Quotation states"], "label": "Samples, Quotes & Projects" }, "dealers": { "kicker": "Channel enablement", "title": "Give authorised partners relevant product and account workflows.", "text": "Provide catalogues, price inputs, availability, orders, documents, training and cases.", "items": ["Dealer accounts", "Orders and documents", "Training and support"], "label": "Dealer & Distributor Portals" }, "operations": { "kicker": "Operational visibility", "title": "Present approved product, order and quality indicators.", "text": "Connect batches, tests, certificates, stock inputs, orders, complaints, actions and performance.", "items": ["Batch and test status", "Order and supply views", "Complaint reporting"], "label": "Quality & Supply Dashboards" } }

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
