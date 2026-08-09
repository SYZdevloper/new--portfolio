// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function EcommerceD2cBrandsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "store": { "kicker": "Conversion experience", "title": "Help shoppers reach the right product with confidence.", "text": "Structure collections, search, filters, product detail, reviews, bundles and recommendations.", "items": ["Collection architecture", "Search and filters", "High-converting product pages"], "label": "Storefront & Product Discovery" }, "checkout": { "kicker": "Purchase flow", "title": "Reduce avoidable friction between intent and order.", "text": "Connect carts, promotions, addresses, delivery options, payments, confirmation and recovery.", "items": ["Cart and promotions", "Checkout optimisation", "Payment integrations"], "label": "Cart, Checkout & Payments" }, "retention": { "kicker": "Repeat purchases", "title": "Give customers reasons and simple tools to return.", "text": "Support profiles, order history, reordering, subscriptions, rewards, referrals and preferences.", "items": ["Customer accounts", "Subscriptions and reorders", "Loyalty and referrals"], "label": "Accounts, Loyalty & Subscriptions" }, "operations": { "kicker": "Commerce operations", "title": "Connect post-purchase workflows with clear status.", "text": "Support orders, fulfilment, tracking inputs, returns, refunds, exchanges, cases and communication.", "items": ["Order visibility", "Returns and exchanges", "Customer-service workflows"], "label": "Orders, Returns & Service" }, "growth": { "kicker": "Growth visibility", "title": "Help teams understand products, funnels and campaigns.", "text": "Show catalogue health, conversion, source, basket, retention, returns and approved performance indicators.", "items": ["Merchandising controls", "Funnel analytics", "Retention reporting"], "label": "Merchandising & Analytics" } }

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
