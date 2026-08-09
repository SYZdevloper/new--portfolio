// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ArchitectureInteriorsPropertyServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "portfolio": { "kicker": "Design authority", "title": "Show work with enough context to support a buying decision.", "text": "Structure sectors, services, projects, locations, teams, awards, process and insights.", "items": ["Project case studies", "Sector and service pages", "Team and expertise"], "label": "Portfolio & Practice Websites" }, "enquiries": { "kicker": "New business", "title": "Turn interest into a useful project conversation.", "text": "Capture project type, location, scope, budget, timeline, files, appointments and follow-up.", "items": ["Qualified enquiry forms", "Consultation booking", "Brief and file intake"], "label": "Consultations & Proposal Journeys" }, "clients": { "kicker": "Collaboration", "title": "Give clients one place for approved project communication.", "text": "Support milestones, files, comments, decisions, approvals, meetings, invoices and reports.", "items": ["Project milestones", "Files and approvals", "Meetings and reports"], "label": "Client Project Portals" }, "property": { "kicker": "Service delivery", "title": "Connect properties, spaces, assets, requests and vendors.", "text": "Build role-based workflows for cases, inspections, work orders, documents, access and status.", "items": ["Property records", "Service requests", "Vendor and work-order states"], "label": "Property & Facility Workflows" }, "operations": { "kicker": "Operational visibility", "title": "Show useful project, resource and service indicators.", "text": "Connect pipeline, projects, workload, approvals, cases, service levels and performance.", "items": ["Pipeline and projects", "Resource visibility", "Service reporting"], "label": "Practice & Service Dashboards" } }

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
