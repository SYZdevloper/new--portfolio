// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function SpaceSatelliteClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "services": { "kicker": "Service clarity", "title": "Explain missions, payloads, coverage and commercial services.", "text": "Structure capabilities, satellites, sensors, coverage, service levels, documents and enquiries.", "items": ["Mission and satellite pages", "Coverage experiences", "Service and enquiry journeys"], "label": "Mission & Service Platforms" }, "data": { "kicker": "Customer access", "title": "Help authorised customers discover, order and receive data products.", "text": "Support catalogues, areas of interest, requests, licences, processing, delivery and account history.", "items": ["Data-product catalogue", "Request and order states", "Secure delivery"], "label": "Data Product Portals" }, "ground": { "kicker": "Operational coordination", "title": "Connect approved scheduling and ground-service workflows.", "text": "Support stations, passes, requests, schedules, assets, handoffs, issues and service reporting.", "items": ["Pass and service requests", "Schedule visibility", "Station and asset states"], "label": "Ground Segment Workflows" }, "missions": { "kicker": "Programme visibility", "title": "Give authorised stakeholders relevant programme information.", "text": "Provide milestones, deliverables, files, approvals, risks, issues and approved dashboards.", "items": ["Stakeholder access", "Milestones and deliverables", "Risks and issues"], "label": "Mission Collaboration Portals" }, "operations": { "kicker": "Operational awareness", "title": "Present approved status and performance information in focused views.", "text": "Connect schedules, assets, passes, incidents, service levels and customer delivery indicators.", "items": ["Operational schedules", "Incident and asset states", "Service reporting"], "label": "Mission Operations Dashboards" } }

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
