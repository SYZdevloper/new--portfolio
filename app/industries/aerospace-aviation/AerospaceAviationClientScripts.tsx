// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AerospaceAviationClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "capabilities": { "kicker": "Technical confidence", "title": "Explain products, capabilities and approved evidence clearly.", "text": "Structure systems, components, services, applications, certifications, documents and enquiries.", "items": ["Capability architecture", "Technical product data", "Certifications and documents"], "label": "Products & Capability Platforms" }, "supplier": { "kicker": "Controlled collaboration", "title": "Give authorised organisations access to relevant programmes and workflows.", "text": "Support enquiries, RFQs, documents, approvals, orders, milestones and cases.", "items": ["Organisation permissions", "Programme workflows", "Documents and milestones"], "label": "Supplier & Customer Portals" }, "maintenance": { "kicker": "Asset support", "title": "Connect asset records, planned work, defects, parts and approved documentation.", "text": "Build role-based workflows around assets, inspections, tasks, materials, releases and exceptions.", "items": ["Asset records", "Maintenance tasks", "Parts and exceptions"], "label": "Maintenance & Asset Workflows" }, "training": { "kicker": "Workforce readiness", "title": "Organise approved learning, qualifications and renewal evidence.", "text": "Support roles, courses, assessments, certificates, expiry rules and reporting.", "items": ["Role-based learning", "Assessments and certificates", "Renewal visibility"], "label": "Training & Compliance Portals" }, "operations": { "kicker": "Operational awareness", "title": "Present useful operational indicators without replacing authoritative systems.", "text": "Connect schedules, assets, disruptions, maintenance, turnaround and performance data.", "items": ["Schedule visibility", "Asset and disruption states", "Operational reporting"], "label": "Aviation Operations Dashboards" } }

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
