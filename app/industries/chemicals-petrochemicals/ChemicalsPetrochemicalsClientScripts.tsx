// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ChemicalsPetrochemicalsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Product selection", "title": "Help technical buyers identify appropriate products and grades.", "text": "Structure families, chemistry, properties, applications, packaging, regions, documents and enquiries.", "items": ["Property filters", "Grade comparisons", "Application and market pages"], "label": "Technical Product Catalogues" }, "documents": { "kicker": "Document control", "title": "Connect approved documents with the correct product, market and version.", "text": "Manage safety data sheets, technical data sheets, certificates, declarations, revisions and access.", "items": ["SDS and TDS libraries", "Certificates and declarations", "Version and market metadata"], "label": "Safety & Technical Resources" }, "sales": { "kicker": "Qualified enquiries", "title": "Move sample and quotation requests through clear states.", "text": "Capture application, specification, volume, location, documents, questions, approvals and follow-up.", "items": ["Technical enquiry forms", "Sample requests", "Quote and approval states"], "label": "Samples & Technical Sales" }, "distributors": { "kicker": "Channel enablement", "title": "Give authorised accounts relevant product and commercial workflows.", "text": "Provide catalogues, price inputs, availability, orders, documents, cases and approved reporting.", "items": ["Account permissions", "Orders and documents", "Cases and status"], "label": "Distributor & Customer Portals" }, "operations": { "kicker": "Operational visibility", "title": "Present approved quality, supply and service indicators.", "text": "Connect batches, tests, certificates, inventory inputs, orders, complaints, actions and performance.", "items": ["Batch and quality status", "Orders and inventory inputs", "Complaint and action reporting"], "label": "Quality & Operations Dashboards" } }

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
