// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AutomotiveManufacturersClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "vehicles": { "kicker": "Vehicle discovery", "title": "Help customers explore models and build relevant configurations.", "text": "Structure variants, specifications, features, media, comparisons, options and market availability.", "items": ["Model and variant pages", "Vehicle comparison", "Configuration journeys"], "label": "Vehicle Experience & Configurators" }, "leads": { "kicker": "Retail conversion", "title": "Connect high-intent actions with dealers and sales teams.", "text": "Capture configuration context, location, preferred dealer, appointments, reservations and consent.", "items": ["Lead capture", "Test-drive booking", "Dealer routing"], "label": "Leads, Test Drives & Reservations" }, "dealers": { "kicker": "Network enablement", "title": "Give authorised dealers controlled access to sales and support workflows.", "text": "Provide leads, stock context, campaigns, documents, training, cases and approved reporting.", "items": ["Dealer accounts", "Lead and stock workflows", "Documents and support"], "label": "Dealer Network Platforms" }, "owners": { "kicker": "Ownership experience", "title": "Give owners one place for vehicles, service and support.", "text": "Connect vehicle records, manuals, maintenance, appointments, warranties, campaigns and cases.", "items": ["Vehicle profile", "Service booking", "Warranty and support"], "label": "Owner & Service Portals" }, "operations": { "kicker": "Operational visibility", "title": "Show approved production and quality indicators in useful context.", "text": "Connect schedules, output, holds, defects, supplier issues and delivery indicators.", "items": ["Production status", "Quality and supplier issues", "Operational reporting"], "label": "Manufacturing & Quality Dashboards" } }

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
