// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function PlasticsRubberBuildingMaterialsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { 
        "catalogues": { 
            "kicker": "Product Discovery", 
            "title": "Showcase complex material specifications clearly.", 
            "text": "Present fire ratings, acoustic data, compliance standards, and installation guides in an easily filterable interface.", 
            "items": ["Technical spec sheets", "Warranty & compliance docs", "Installation guides"], 
            "label": "Product & Material Catalogues" 
        }, 
        "specifier": { 
            "kicker": "Technical Sales", 
            "title": "Help architects specify your materials.", 
            "text": "Provide interactive visualizers and native BIM/CAD files so specifiers can drag and drop your products into their projects.", 
            "items": ["BIM & CAD libraries", "Material visualizers", "Automated spec-writers"], 
            "label": "Specifier & Design Tools" 
        }, 
        "samples": { 
            "kicker": "Sales Workflows", 
            "title": "Accelerate the commercial specification cycle.", 
            "text": "Digitize sample requests, multi-stage commercial quotes, and project-based product grouping for architects.", 
            "items": ["Digital sample requests", "Multi-stage quoting", "Project board portals"], 
            "label": "Samples, Quotes & Projects" 
        }, 
        "dealers": { 
            "kicker": "B2B Commerce", 
            "title": "Digitize bulk trade and distributor ordering.", 
            "text": "Build ordering engines that handle custom tier pricing, complex pack sizes (pallets/sqm), and heavy freight logistics.", 
            "items": ["Contract pricing engines", "Complex unit conversions", "Self-serve dealer admin"], 
            "label": "Dealer & Distributor Portals" 
        }, 
        "quality": { 
            "kicker": "Executive Operations", 
            "title": "Visibility across manufacturing and supply chain.", 
            "text": "Aggregate data from the factory floor and logistics networks to track First Pass Yield, defect rates, and delivery performance.", 
            "items": ["First Pass Yield tracking", "Logistics dashboards", "Defect analytics"], 
            "label": "Quality & Supply Dashboards" 
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
