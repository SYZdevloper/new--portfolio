// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function OilGasClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "corporate": { "kicker": "Stakeholder confidence", "title": "Explain operations, capabilities and responsible-business information.", "text": "Structure segments, assets, services, projects, locations, governance, sustainability and news.", "items": ["Corporate architecture", "Asset and project pages", "Governance and sustainability"], "label": "Corporate & Capability Platforms" }, "suppliers": { "kicker": "Supply assurance", "title": "Manage approved supplier and contractor interactions.", "text": "Support registration, questionnaires, documents, approvals, expiries, work packages and cases.", "items": ["Supplier onboarding", "Assurance documents", "Package and case workflows"], "label": "Supplier & Contractor Portals" }, "projects": { "kicker": "Controlled collaboration", "title": "Give authorised stakeholders relevant project information.", "text": "Provide milestones, deliverables, files, approvals, issues, actions and approved reporting.", "items": ["Project access", "Deliverables and approvals", "Issues and actions"], "label": "Project & Partner Portals" }, "assets": { "kicker": "Operational evidence", "title": "Connect assets with approved inspection and service workflows.", "text": "Support equipment, checks, findings, work orders, parts, permits and completion evidence.", "items": ["Asset registers", "Inspection and finding states", "Maintenance workflows"], "label": "Asset, Inspection & Maintenance" }, "operations": { "kicker": "Operational awareness", "title": "Present approved operational and health, safety and environment indicators.", "text": "Connect production inputs, availability, maintenance, incidents, actions and environmental measures.", "items": ["Asset and production status", "Maintenance and incidents", "HSE reporting"], "label": "Operations & HSE Dashboards" } }

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
