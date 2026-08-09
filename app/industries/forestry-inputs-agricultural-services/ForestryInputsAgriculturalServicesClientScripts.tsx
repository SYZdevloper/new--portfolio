// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ForestryInputsAgriculturalServicesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "market": { "kicker": "Buyer clarity", "title": "Help buyers understand products, origin and availability.", "text": "Structure species, form, grade, certification, season, location, media, documents and enquiries.", "items": ["Species and product pages", "Origin and certification", "Availability and enquiries"], "label": "Product & Market Platforms" }, "production": { "kicker": "Production control", "title": "Connect sites, ponds or cages with production activity.", "text": "Support stocks, feed, growth, mortality, water readings, treatments, tasks and harvest planning.", "items": ["Site and batch records", "Feeding and growth", "Water and health observations"], "label": "Farm & Production Portals" }, "traceability": { "kicker": "Chain visibility", "title": "Tie approved records across production and supply steps.", "text": "Connect seed or stock, feed, harvest, lots, processing, tests, documents and shipments.", "items": ["Lot and batch identity", "Quality records", "Shipment traceability"], "label": "Traceability & Quality Workflows" }, "services": { "kicker": "Ecosystem coordination", "title": "Give farms, buyers and service partners relevant workflows.", "text": "Support products, service requests, visits, samples, documents, orders and cases.", "items": ["Supplier accounts", "Field and lab services", "Orders and cases"], "label": "Supplier & Service Portals" }, "analytics": { "kicker": "Operational visibility", "title": "Present approved production and sustainability indicators.", "text": "Show biomass estimates, feed inputs, survival, water quality, harvests, service levels and exceptions.", "items": ["Production indicators", "Water and health alerts", "Harvest and impact reporting"], "label": "Aquaculture & Fisheries Dashboards" } }

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
