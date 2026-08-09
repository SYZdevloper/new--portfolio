// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function FoodBeverageConsumerManufacturingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "products": { "kicker": "Product clarity", "title": "Create reliable product experiences across brands, markets and channels.", "text": "Structure variants, packs, ingredients, allergens, claims, nutrition and approved media.", "items": ["Product and pack hierarchy", "Ingredients and allergen fields", "Market-specific content"], "label": "Product Information & Catalogues" }, "trade": { "kicker": "B2B relationships", "title": "Give trade customers and distributors clear account workflows.", "text": "Support enquiries, samples, price lists, documents, orders and approved account information.", "items": ["Trade accounts", "Samples and enquiries", "Orders and documents"], "label": "Trade & Distributor Portals" }, "commerce": { "kicker": "Consumer engagement", "title": "Connect campaigns, product discovery and approved commerce journeys.", "text": "Build responsive launches, bundles, subscriptions, store locators and campaign interactions.", "items": ["Campaign landing pages", "Product discovery", "Commerce integrations"], "label": "Commerce & Campaign Experiences" }, "quality": { "kicker": "Operational confidence", "title": "Make approved quality records and traceability states easier to access.", "text": "Connect batches, checks, certificates, complaints, recalls and corrective-action records.", "items": ["Batch and lot records", "Quality documents", "Complaint and recall states"], "label": "Quality & Traceability Workflows" }, "operations": { "kicker": "Operational visibility", "title": "Bring useful manufacturing and supply indicators into focused dashboards.", "text": "Show schedules, output, downtime, waste, inventory, orders and exceptions from approved sources.", "items": ["Production indicators", "Inventory and order status", "Waste and exception reporting"], "label": "Production & Supply Dashboards" } }

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
