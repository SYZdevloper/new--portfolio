// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AutomotiveComponentsSuppliersClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "catalogue": { "kicker": "Technical discovery", "title": "Help buyers find components by system, specification or vehicle application.", "text": "Structure part families, attributes, drawings, cross-references, compatibility and documents.", "items": ["Part and family hierarchy", "Vehicle and application mapping", "Technical documents"], "label": "Component & Application Catalogues" }, "rfq": { "kicker": "Programme intake", "title": "Connect commercial and engineering work around a controlled opportunity.", "text": "Capture requirements, files, questions, samples, feasibility, approvals and quote versions.", "items": ["RFQ intake", "Engineering files and questions", "Samples and approvals"], "label": "RFQ & Engineering Collaboration" }, "customers": { "kicker": "Programme visibility", "title": "Give customers approved access to active programme information.", "text": "Provide milestones, documents, changes, orders, quality records, shipments and messages.", "items": ["Programme dashboards", "Documents and changes", "Orders and shipments"], "label": "Customer & Programme Portals" }, "quality": { "kicker": "Evidence and control", "title": "Tie quality evidence to the correct part, batch, programme and revision.", "text": "Manage certificates, inspections, deviations, corrective actions and traceability records.", "items": ["Inspection and certificates", "Deviation workflows", "Corrective actions"], "label": "Quality & Traceability Workflows" }, "aftermarket": { "kicker": "Channel growth", "title": "Support catalogue, fitment and account workflows for replacement parts.", "text": "Connect fitment data, cross-references, stock context, distributors, enquiries and approved commerce.", "items": ["Fitment search", "Distributor accounts", "Availability and enquiries"], "label": "Aftermarket & Distribution Platforms" } }

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
