// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function LivestockDairyAnimalAgricultureClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Relevant information", "title": "Help producers find appropriate approved products and services.", "text": "Structure species, life stage, purpose, specifications, documents, guidance and enquiries.", "items": ["Species-based discovery", "Product and service pages", "Technical documents"], "label": "Animal Product & Service Platforms" }, "producers": { "kicker": "Producer support", "title": "Give farms and advisers role-based access to useful workflows.", "text": "Support holdings, herds, animals, visits, plans, documents, cases and communication.", "items": ["Farm and herd profiles", "Advisory workflows", "Documents and cases"], "label": "Producer & Adviser Portals" }, "records": { "kicker": "Operational evidence", "title": "Organise approved production and quality information.", "text": "Capture groups, events, yields, feed inputs, samples, checks, exceptions and actions.", "items": ["Herd and event records", "Production indicators", "Quality and action states"], "label": "Herd, Production & Quality Records" }, "services": { "kicker": "Service delivery", "title": "Connect samples and service work with clear status.", "text": "Support requests, collection, chain of custody, results, recommendations, visits and follow-up.", "items": ["Sample workflows", "Field-service visits", "Results and follow-up"], "label": "Laboratory & Field Services" }, "analytics": { "kicker": "Decision visibility", "title": "Present approved production and service indicators.", "text": "Show herd activity, output, quality, service response, alerts and programme performance.", "items": ["Production dashboards", "Quality and alerts", "Programme reporting"], "label": "Animal Agriculture Dashboards" } }

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
