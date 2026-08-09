// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function GeneralContractManufacturingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "capabilities": { "kicker": "Buyer confidence", "title": "Explain what the business can manufacture and for whom.", "text": "Structure processes, materials, tolerances, equipment, certifications and example applications.", "items": ["Process and material pages", "Equipment and tolerance data", "Industries and applications"], "label": "Capabilities & Industry Pages" }, "rfq": { "kicker": "Commercial intake", "title": "Collect complete requirements and move opportunities through review.", "text": "Capture drawings, quantities, materials, tolerances, due dates, questions, approvals and quote versions.", "items": ["Guided RFQ forms", "Secure file intake", "Review and quote states"], "label": "RFQ & Quotation Workflows" }, "portal": { "kicker": "Order visibility", "title": "Give authorised customers one place for active work.", "text": "Provide order status, documents, approvals, messages, shipments and approved quality information.", "items": ["Customer accounts", "Orders and milestones", "Documents and approvals"], "label": "Customer Portals" }, "quality": { "kicker": "Quality workflows", "title": "Connect inspection and quality information with the correct job and revision.", "text": "Manage drawings, certificates, inspection records, deviations, corrective actions and approvals.", "items": ["Revision control", "Inspection records", "NCR and corrective actions"], "label": "Quality & Document Control" }, "operations": { "kicker": "Operational visibility", "title": "Help teams understand workload, schedules and exceptions.", "text": "Display jobs, work centres, capacity, due dates, quality holds, shipments and approved indicators.", "items": ["Job and schedule status", "Capacity visibility", "Exceptions and reporting"], "label": "Production & Capacity Dashboards" } }

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
