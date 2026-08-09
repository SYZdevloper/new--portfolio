// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RailMarineAdvancedTransportClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "customer": { "kicker": "Service discovery", "title": "Help customers understand and access transport services.", "text": "Structure routes, schedules, fares or quotes, accessibility, bookings, accounts, alerts and support.", "items": ["Route and service search", "Booking or enquiry journeys", "Accounts and alerts"], "label": "Passenger & Customer Experiences" }, "freight": { "kicker": "Shipment visibility", "title": "Give customers clear commercial and operational cargo workflows.", "text": "Support quotes, bookings, documents, milestones, tracking events, exceptions and invoices.", "items": ["Freight quotations", "Shipment milestones", "Documents and exceptions"], "label": "Freight & Cargo Portals" }, "fleet": { "kicker": "Asset lifecycle", "title": "Connect vehicles, vessels, equipment, inspections and service work.", "text": "Build workflows for assets, checks, defects, maintenance, parts, work orders and releases.", "items": ["Asset records", "Inspection and defect states", "Maintenance workflows"], "label": "Fleet & Asset Workflows" }, "partners": { "kicker": "Network coordination", "title": "Give authorised partners the workflows relevant to their role.", "text": "Support operators, agents, terminals, suppliers, documents, slots, cases and reporting.", "items": ["Organisation access", "Slot and service workflows", "Documents and cases"], "label": "Partner & Terminal Portals" }, "operations": { "kicker": "Operational awareness", "title": "Present approved schedules, assets and exceptions in focused views.", "text": "Connect fleet status, movements, disruptions, maintenance, turnaround and performance indicators.", "items": ["Movement and fleet status", "Disruption and maintenance", "Operational reporting"], "label": "Transport Operations Dashboards" } }

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
