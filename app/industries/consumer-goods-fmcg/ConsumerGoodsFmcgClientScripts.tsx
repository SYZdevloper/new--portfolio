// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ConsumerGoodsFmcgClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "brands": { "kicker": "Consumer relevance", "title": "Tell clear product stories for each audience and market.", "text": "Structure brands, ranges, variants, benefits, usage, ingredients, packs, media and availability actions.", "items": ["Brand architecture", "Product storytelling", "Market-specific content"], "label": "Brand & Product Websites" }, "campaigns": { "kicker": "Market activation", "title": "Create focused experiences for launches and promotions.", "text": "Connect campaign stories, products, creators, competitions, samples, stores and approved conversion actions.", "items": ["Launch landing pages", "Interactive campaigns", "Sampling and store actions"], "label": "Campaign & Launch Experiences" }, "trade": { "kicker": "Trade enablement", "title": "Give partners current information and resources.", "text": "Provide catalogues, sell sheets, media, planograms, promotions, orders, cases and reporting.", "items": ["Trade accounts", "Asset libraries", "Promotion and order workflows"], "label": "Retailer & Distributor Portals" }, "content": { "kicker": "Content governance", "title": "Keep product and brand assets structured and current.", "text": "Manage attributes, packs, claims, documents, images, videos, market rules, revisions and approvals.", "items": ["Product information", "Digital assets", "Approval workflows"], "label": "Product Information & Assets" }, "insights": { "kicker": "Performance visibility", "title": "Bring approved campaign and trade indicators together.", "text": "Show engagement, leads, samples, retailer activity, assets, cases and market performance.", "items": ["Campaign reporting", "Trade activity", "Content health"], "label": "Brand & Channel Dashboards" } }

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
