// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function InvestmentWealthManagementClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "website": { "kicker": "Credibility", "title": "Present the firm, services and approved information with authority.", "text": "Structure audiences, strategies, philosophy, people, insights, disclosures, reports and enquiries.", "items": ["Service and strategy pages", "Team and credentials", "Insights and disclosures"], "label": "Investment & Adviser Websites" }, "onboarding": { "kicker": "Controlled intake", "title": "Guide prospects through approved account and relationship setup.", "text": "Support profiles, entities, suitability inputs, verification, documents, agreements, review and status.", "items": ["Prospect profiles", "Suitability and KYC inputs", "Agreements and approval"], "label": "Investor Onboarding" }, "portal": { "kicker": "Secure reporting", "title": "Give clients access to approved relationship information.", "text": "Provide portfolio summaries, holdings inputs, transactions, reports, documents, messages and requests.", "items": ["Portfolio views", "Reports and statements", "Secure communication"], "label": "Investor & Client Portals" }, "adviser": { "kicker": "Client service", "title": "Help advisers manage relationship tasks and evidence.", "text": "Connect households, goals, meetings, notes, documents, actions, approvals and service cases.", "items": ["Client and household views", "Meeting and action tracking", "Document workflows"], "label": "Adviser & Relationship Workflows" }, "reporting": { "kicker": "Approved visibility", "title": "Present portfolio and service indicators clearly.", "text": "Show allocations, performance inputs, contributions, income, documents, tasks and reporting status.", "items": ["Allocation views", "Performance reporting", "Service dashboards"], "label": "Investment Reporting Dashboards" } }

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
