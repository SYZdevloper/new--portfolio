// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function LegalAccountingTaxServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "website": { "kicker": "Professional authority", "title": "Help clients find the right expertise and understand next steps.", "text": "Structure services, issues, sectors, jurisdictions, professionals, credentials, insights and enquiries.", "items": ["Service and issue pages", "Professional profiles", "Insights and credentials"], "label": "Professional Service Websites" }, "intake": { "kicker": "Qualified onboarding", "title": "Collect relevant client and matter information securely.", "text": "Support appointments, people, organisations, issue details, documents, conflicts, consent and engagement states.", "items": ["Consultation booking", "Structured intake", "Conflict and engagement steps"], "label": "Consultation & Client Intake" }, "portal": { "kicker": "Client access", "title": "Give clients controlled access to relevant work.", "text": "Provide matters, tasks, files, requests, deadlines, messages, invoices and reports.", "items": ["Matter overview", "Secure files", "Tasks and deadlines"], "label": "Secure Client Portals" }, "workflows": { "kicker": "Service delivery", "title": "Connect approved internal and client actions.", "text": "Support checklists, evidence, reviews, approvals, filings, renewals, signatures and audit information.", "items": ["Checklist workflows", "Review and approval", "Filing and renewal states"], "label": "Matter & Compliance Workflows" }, "operations": { "kicker": "Operational visibility", "title": "Present useful pipeline and service indicators.", "text": "Show enquiries, matters, deadlines, workload, billing inputs, document status and client service.", "items": ["Matter pipeline", "Deadline visibility", "Practice reporting"], "label": "Practice Dashboards" } }

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
