// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function GovernmentPublicSectorClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "information": { "kicker": "Findable information", "title": "Organise content around people, tasks and life events.", "text": "Structure services, eligibility, responsibilities, policies, locations, contacts, consultations, news and emergency information.", "items": ["Need-based navigation", "Accessible content patterns", "Search and service directories"], "label": "Public Information Websites" }, "services": { "kicker": "Service completion", "title": "Turn complex administrative processes into guided journeys.", "text": "Support eligibility checks, applications, documents, consent, payments inputs, appointments, submissions, receipts and status.", "items": ["Guided forms", "Save and resume", "Submission and status"], "label": "Digital Public Services & Forms" }, "citizens": { "kicker": "Secure self-service", "title": "Give authenticated users controlled access to relevant services.", "text": "Provide profiles, licences, permits, cases, documents, notices, payments inputs, requests and messages.", "items": ["Personal service view", "Cases and documents", "Notices and requests"], "label": "Citizen & Business Portals" }, "staff": { "kicker": "Operational delivery", "title": "Connect public submissions with staff processes.", "text": "Support queues, assignments, evidence, checks, reviews, approvals, correspondence, escalation and audit information.", "items": ["Case worklists", "Review and approval", "Correspondence and audit"], "label": "Administrative Case Workflows" }, "transparency": { "kicker": "Public accountability", "title": "Present approved information in accessible formats.", "text": "Show service demand, turnaround, geographic patterns, budgets inputs, programme indicators, open-data downloads and methodology notes.", "items": ["Service performance", "Accessible data views", "Open-data resources"], "label": "Public Data & Performance Dashboards" } }

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
