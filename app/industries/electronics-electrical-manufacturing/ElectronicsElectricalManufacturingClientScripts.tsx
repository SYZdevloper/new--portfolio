// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ElectronicsElectricalManufacturingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "catalogue": { "kicker": "Parametric discovery", "title": "Help engineers and buyers identify suitable products.", "text": "Structure families, specifications, filters, comparisons, applications and approved documents.", "items": ["Parametric filters", "Product comparisons", "Datasheets and certifications"], "label": "Product Catalogue & Search" }, "quotes": { "kicker": "Technical sales", "title": "Move enquiries, samples and quotations through clear commercial states.", "text": "Capture requirements, assign owners, manage approvals and generate approved documents.", "items": ["Requirement capture", "Sample-request workflow", "Pricing and quote approvals"], "label": "Samples & Quotation Workflows" }, "partners": { "kicker": "Channel enablement", "title": "Give authorised partners access to the information and workflows they need.", "text": "Provide product data, price lists, availability, enquiries, orders, documents and service cases.", "items": ["Role-based accounts", "Price and availability visibility", "Orders and documents"], "label": "Distributor & Customer Portals" }, "quality": { "kicker": "Controlled information", "title": "Keep product, quality and compliance information tied to approved records.", "text": "Manage certificates, test reports, revisions, exceptions and customer-facing documentation.", "items": ["Certificates and test reports", "Revision-controlled documents", "Exception visibility"], "label": "Quality & Compliance Records" }, "operations": { "kicker": "Operational visibility", "title": "Give teams useful visibility across orders, production and after-sales work.", "text": "Connect approved indicators, schedules, exceptions, service status and reporting.", "items": ["Order and production status", "Exceptions and service cases", "Operational dashboards"], "label": "Production & Service Dashboards" } }

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
