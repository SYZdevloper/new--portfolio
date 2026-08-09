// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function DefenseSecurityClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "capabilities": { "kicker": "Approved communication", "title": "Present capabilities and releasable product information clearly.", "text": "Structure solutions, applications, approved specifications, evidence, documents and enquiries by audience.", "items": ["Audience-specific content", "Approved product information", "Controlled enquiries"], "label": "Capability & Product Platforms" }, "programmes": { "kicker": "Controlled collaboration", "title": "Connect authorised organisations around programme work.", "text": "Support suppliers, milestones, deliverables, files, approvals, issues and approved performance information.", "items": ["Organisation access", "Milestones and deliverables", "Files and approvals"], "label": "Programme & Supplier Portals" }, "assets": { "kicker": "Lifecycle visibility", "title": "Connect approved asset, inspection, maintenance and support states.", "text": "Build workflows for assets, tasks, parts, service cases, exceptions and controlled documentation.", "items": ["Asset records", "Maintenance and service states", "Parts and exceptions"], "label": "Asset & Service Workflows" }, "training": { "kicker": "Workforce evidence", "title": "Organise approved training, qualifications and readiness information.", "text": "Support roles, learning, assessments, certificates, expiries and authorised reporting.", "items": ["Role-based learning", "Qualifications and expiries", "Readiness reporting"], "label": "Training & Readiness Portals" }, "governance": { "kicker": "Controlled oversight", "title": "Give authorised teams useful status and evidence views.", "text": "Connect approvals, access, milestones, exceptions, training, assets and audit indicators.", "items": ["Access and approval status", "Programme exceptions", "Audit-oriented reporting"], "label": "Governance & Audit Dashboards" } }

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
