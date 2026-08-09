// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ConstructionCivilEngineeringClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "capabilities": { "kicker": "Buyer confidence", "title": "Show what the business can deliver and where it has proved it.", "text": "Structure sectors, services, regions, equipment, certifications, projects and outcomes.", "items": ["Capability architecture", "Project portfolio", "Credentials and resources"], "label": "Capability & Project Websites" }, "tenders": { "kicker": "Opportunity control", "title": "Manage business-development submissions through clear states.", "text": "Support opportunities, questionnaires, files, responsibilities, reviews, deadlines and approvals.", "items": ["Tender pipeline", "Secure document intake", "Review and submission states"], "label": "Tender & Prequalification Portals" }, "projects": { "kicker": "Delivery visibility", "title": "Give authorised stakeholders approved project information.", "text": "Provide milestones, drawings, submittals, requests, photos, issues, certificates and reports.", "items": ["Project dashboards", "Documents and approvals", "Issues and milestones"], "label": "Project & Client Portals" }, "field": { "kicker": "Site evidence", "title": "Standardise approved site records and follow-up.", "text": "Capture diaries, inspections, observations, incidents, quality checks, actions and evidence.", "items": ["Daily site records", "Safety inspections", "Quality and action tracking"], "label": "Field, Safety & Quality Workflows" }, "operations": { "kicker": "Portfolio visibility", "title": "Bring project and commercial indicators into focused views.", "text": "Connect schedule, cost inputs, progress, resources, safety, quality and exceptions.", "items": ["Portfolio status", "Progress and resource views", "Risk and exception reporting"], "label": "Construction Operations Dashboards" } }

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
