// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function LogisticsWarehousingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { 
        "discovery": { 
            "kicker": "Network Discovery", 
            "title": "Showcase your supply chain capabilities.", 
            "text": "Clearly communicate network capacity, specialized equipment, and lane coverage to prospective enterprise shippers.", 
            "items": ["Interactive network maps", "Equipment catalogues", "Lane coverage visualization"], 
            "label": "Freight & Capacity Discovery" 
        }, 
        "quoting": { 
            "kicker": "Revenue", 
            "title": "Digitize the freight sale.", 
            "text": "Engineer custom quoting engines and booking flows that integrate directly with your TMS.", 
            "items": ["Instant web quoting", "Live TMS integration", "Automated BOL generation"], 
            "label": "Quotes, Booking & Dispatch" 
        }, 
        "carrier": { 
            "kicker": "B2B Operations", 
            "title": "Streamline carrier relations.", 
            "text": "Provide secure B2B portals where external carriers and warehouse partners can view loads, submit bids, and upload documents.", 
            "items": ["Load board interfaces", "Digital document vaults", "Automated settlement"], 
            "label": "Carrier & Supplier Portals" 
        }, 
        "tracking": { 
            "kicker": "Service", 
            "title": "Self-serve visibility for shippers.", 
            "text": "Build secure portals where your customers can track active freight, download invoices, and manage shipping addresses.", 
            "items": ["Visual ELD tracking", "Invoice & statement retrieval", "Automated milestone alerts"], 
            "label": "Tracking & Customer Portals" 
        }, 
        "analytics": { 
            "kicker": "Executive Operations", 
            "title": "Visibility across the logistics network.", 
            "text": "Aggregate data from your TMS, WMS, and accounting software to track lane profitability and carrier performance.", 
            "items": ["Executive margin scorecards", "Carrier performance tracking", "Warehouse pick rate analytics"], 
            "label": "Supply Chain Dashboards" 
        } 
    };

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
            menuBtn.textContent = open ? 'A-' : '~';
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
