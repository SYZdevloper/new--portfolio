// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function SportstechPerformancePlatformsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "product": { "kicker": "Product clarity", "title": "Help teams and athletes understand the product and its value.", "text": "Structure audiences, use cases, features, devices, integrations, evidence, pricing and demos.", "items": ["Use-case pages", "Product demonstrations", "Evidence and integrations"], "label": "SportsTech Product Websites" }, "athletes": { "kicker": "Collaborative training", "title": "Give athletes and staff role-based workflows.", "text": "Support profiles, teams, plans, sessions, feedback, files, goals and communication.", "items": ["Athlete profiles", "Training plans", "Coach feedback"], "label": "Athlete & Coach Portals" }, "assessment": { "kicker": "Performance evidence", "title": "Standardise approved assessment and review processes.", "text": "Capture protocols, results, benchmarks, notes, media, recommendations and reassessments.", "items": ["Assessment protocols", "Results and benchmarks", "Reassessment history"], "label": "Testing & Assessment Workflows" }, "data": { "kicker": "Connected performance", "title": "Bring supported data sources into one useful context.", "text": "Connect wearables, sensors, video, training, wellness and competition inputs with clear ownership.", "items": ["Device integrations", "Data normalisation", "Permissions and provenance"], "label": "Device & Data Integrations" }, "analytics": { "kicker": "Decision support", "title": "Present metrics around goals, workload and trends.", "text": "Show sessions, readiness inputs, load, progress, comparisons, alerts and approved reports.", "items": ["Athlete trends", "Team views", "Alerts and reports"], "label": "Performance Dashboards" } }

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
