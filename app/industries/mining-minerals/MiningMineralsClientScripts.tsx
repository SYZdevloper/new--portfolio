// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function MiningMineralsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "corporate": { "kicker": "Market confidence", "title": "Present the business, portfolio and approved disclosures clearly.", "text": "Structure commodities, projects, stages, locations, governance, reports, announcements and contacts.", "items": ["Project portfolio", "Investor centre", "Governance and reports"], "label": "Corporate & Investor Websites" }, "communities": { "kicker": "Stakeholder access", "title": "Give communities and partners relevant information and service journeys.", "text": "Support updates, consultations, commitments, grievances, documents, opportunities and feedback.", "items": ["Community updates", "Consultation and feedback", "Grievance workflows"], "label": "Community & Stakeholder Portals" }, "suppliers": { "kicker": "Supply workflows", "title": "Manage approved onboarding and project interactions.", "text": "Support registration, assurance, packages, documents, approvals, site requirements and cases.", "items": ["Supplier onboarding", "Assurance evidence", "Package and case states"], "label": "Supplier & Contractor Portals" }, "sites": { "kicker": "Operational evidence", "title": "Connect sites and assets with inspections and actions.", "text": "Build workflows for equipment, checks, findings, work orders, permits, incidents and evidence.", "items": ["Asset and inspection records", "Work and permit states", "Incident actions"], "label": "Site, Asset & Workflows" }, "reporting": { "kicker": "Performance visibility", "title": "Present approved production, safety and environmental indicators.", "text": "Connect output, availability, maintenance, incidents, water, energy, rehabilitation and actions.", "items": ["Production and asset status", "Safety indicators", "Environmental reporting"], "label": "Operations & ESG Dashboards" } }

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
