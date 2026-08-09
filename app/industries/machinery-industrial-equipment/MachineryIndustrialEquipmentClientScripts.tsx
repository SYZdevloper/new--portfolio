// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function MachineryIndustrialEquipmentClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "catalogue": { "kicker": "Product discovery", "title": "Help technical buyers find and understand the right equipment.", "text": "Structure product families, specifications, filters, comparisons, applications and technical documents around real buying journeys.", "items": ["Product information architecture", "Specification filters and comparisons", "Documents, media and enquiry actions"], "link": "#project-enquiry", "label": "Product Catalogue" },
            "configuration": { "kicker": "Configuration and sales", "title": "Turn complex options into controlled configurations and quotation workflows.", "text": "Capture requirements, validate approved combinations, apply pricing rules, route approvals and generate branded documents.", "items": ["Rules-based product configuration", "Pricing and approval workflows", "Proposal and quotation generation"], "link": "#project-enquiry", "label": "Configurators & Quotes" },
            "dealer": { "kicker": "Partner enablement", "title": "Give dealers and distributors the information and workflows they need.", "text": "Create role-based access to product data, price lists, leads, quotations, orders, documents, cases and approved reporting.", "items": ["Dealer accounts and permissions", "Leads, quotes and order workflows", "Documents and performance visibility"], "link": "/services/client-portal-development/", "label": "Dealer Portals" },
            "service": { "kicker": "After-sales experience", "title": "Connect equipment records with parts, service, maintenance and warranty journeys.", "text": "Help customers and teams identify compatible parts, raise requests, schedule work, follow status and access approved documentation.", "items": ["Equipment and installed-base records", "Parts compatibility and enquiries", "Service, maintenance and warranty states"], "link": "#project-enquiry", "label": "Parts & Service" },
            "operations": { "kicker": "Rental and operations", "title": "Give teams useful visibility across availability, utilisation and service performance.", "text": "Build dashboards for reservations, contracts, inspections, fleet status, maintenance, exceptions and approved indicators.", "items": ["Availability and reservation workflows", "Fleet, inspection and maintenance states", "Operational analytics and reporting"], "link": "/services/dashboard-design/", "label": "Rental & Operations" }
        }

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
