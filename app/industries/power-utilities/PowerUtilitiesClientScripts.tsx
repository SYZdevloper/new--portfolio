// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function PowerUtilitiesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "service": { "kicker": "Customer clarity", "title": "Help customers understand services, obligations and next steps.", "text": "Structure connections, tariffs, support, planned work, safety, efficiency and assistance information.", "items": ["Service journeys", "Tariff and support content", "Safety and efficiency guidance"], "label": "Service & Information Websites" }, "accounts": { "kicker": "Self-service", "title": "Give customers secure access to relevant account actions.", "text": "Support profile, premises, meter readings, usage, bills, payments, documents and preferences.", "items": ["Account and premises", "Usage and bills", "Payments and documents"], "label": "Customer Account Portals" }, "requests": { "kicker": "Case management", "title": "Connect applications and requests with clear status.", "text": "Capture new connections, changes, faults, appointments, evidence, communication and outcomes.", "items": ["Connection applications", "Service cases", "Appointments and status"], "label": "Connections & Service Requests" }, "outages": { "kicker": "Timely updates", "title": "Give customers reliable approved information during planned and unplanned events.", "text": "Connect maps, affected areas, status, estimated restoration inputs, subscriptions and updates.", "items": ["Outage maps", "Alert subscriptions", "Incident updates"], "label": "Outage & Incident Communication" }, "operations": { "kicker": "Operational awareness", "title": "Present approved asset, work and service indicators.", "text": "Show field work, incidents, assets, demand inputs, service levels and exceptions.", "items": ["Field-work status", "Asset and incident views", "Service reporting"], "label": "Utility Operations Dashboards" } }

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
