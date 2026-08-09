// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RetailOmnichannelCommerceClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "commerce": { "kicker": "Connected shopping", "title": "Help customers shop across digital and physical channels.", "text": "Structure products, stores, local availability, prices, offers, fulfilment and account context.", "items": ["Product and store discovery", "Local availability", "Channel-aware shopping"], "label": "Omnichannel Storefronts" }, "fulfilment": { "kicker": "Flexible fulfilment", "title": "Make fulfilment choices clear and manageable.", "text": "Support delivery slots, click and collect, ship from store, reservations, returns and exchanges.", "items": ["Pickup workflows", "Delivery options", "Returns and exchanges"], "label": "Pickup, Delivery & Returns" }, "stores": { "kicker": "Local conversion", "title": "Connect digital intent with the right store.", "text": "Build maps, hours, services, inventory context, appointments, events and directions.", "items": ["Store locator", "Local service pages", "Appointments and events"], "label": "Store Locator & Appointments" }, "loyalty": { "kicker": "Customer relationship", "title": "Join profiles, purchases and benefits across channels.", "text": "Support identity, preferences, receipts, rewards, offers, saved items and service history.", "items": ["Unified accounts", "Digital receipts", "Rewards and offers"], "label": "Customer Accounts & Loyalty" }, "operations": { "kicker": "Operational control", "title": "Give teams visibility across stores, orders and service.", "text": "Show orders, pickups, inventory inputs, tasks, returns, cases and approved retail indicators.", "items": ["Store and order status", "Task workflows", "Retail analytics"], "label": "Retail Operations Dashboards" } }

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
