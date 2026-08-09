// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RenewableEnergyClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "projects": { "kicker": "Clean-energy confidence", "title": "Explain technologies, delivery capability and completed projects.", "text": "Structure solutions, sectors, project stages, capacity, locations, outcomes, partners and documents.", "items": ["Technology pages", "Project portfolio", "Impact and capability evidence"], "label": "Project & Capability Websites" }, "sales": { "kicker": "Project development", "title": "Turn interest into qualified project opportunities.", "text": "Capture site, load, location, goals, documents, appointments, assessments and proposal states.", "items": ["Guided project enquiry", "Site and document intake", "Assessment and proposal states"], "label": "Assessments & Proposal Workflows" }, "customers": { "kicker": "Stakeholder access", "title": "Give customers, partners and investors approved project visibility.", "text": "Provide milestones, documents, generation summaries, invoices, reports, announcements and cases.", "items": ["Project accounts", "Documents and reports", "Support and communication"], "label": "Customer & Investor Portals" }, "assets": { "kicker": "Lifecycle operations", "title": "Connect renewable assets with alarms, inspections and service activity.", "text": "Support sites, equipment, readings, alerts, work orders, parts, warranties and evidence.", "items": ["Asset records", "Alert and work-order states", "Warranty and service history"], "label": "Asset & Maintenance Workflows" }, "analytics": { "kicker": "Performance visibility", "title": "Present approved generation and sustainability indicators.", "text": "Show output, availability, savings, emissions estimates, forecasts, maintenance and exceptions.", "items": ["Generation dashboards", "Availability and savings", "ESG reporting inputs"], "label": "Energy & ESG Dashboards" } }

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
