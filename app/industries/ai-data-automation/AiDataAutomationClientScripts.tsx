// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AiDataAutomationClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "workflow": {
                "kicker": "Process orchestration",
                "title": "Turn repetitive multi-step work into a visible, controlled workflow.",
                "text": "Connect forms, rules, assignments, approvals and notifications so work moves forward without depending on manual follow-up.",
                "items": ["Form-to-workflow automation", "Approvals, routing and escalation", "Exception queues for human review"],
                "link": "/services/custom-web-app-development/",
                "label": "Workflow Automation"
            },
            "integration": {
                "kicker": "Connected systems",
                "title": "Move approved information between business applications without repeated data entry.",
                "text": "Map, validate and synchronise data through APIs, webhooks, databases or scheduled imports and exports.",
                "items": ["API and webhook integrations", "CRM, ERP and database synchronisation", "Validation and duplicate checks"],
                "link": "/services/api-integration-development/",
                "label": "Data Integration"
            },
            "documents": {
                "kicker": "AI-assisted processing",
                "title": "Extract, classify and route business documents with visible quality controls.",
                "text": "Process invoices, applications, reports or attachments while sending low-confidence and sensitive cases to authorised reviewers.",
                "items": ["Field and table extraction", "Document classification and validation", "Human review for exceptions"],
                "link": "/services/custom-web-app-development/",
                "label": "Document Processing"
            },
            "assistant": {
                "kicker": "Approved knowledge access",
                "title": "Help authorised users find and work with selected organisational information.",
                "text": "Create a focused assistant grounded in approved sources, with role-based access, source visibility and escalation options.",
                "items": ["Search across approved documents", "Role-aware access boundaries", "Feedback, logging and quality review"],
                "link": "/services/custom-web-app-development/",
                "label": "Internal AI Assistant"
            },
            "reporting": {
                "kicker": "Operational visibility",
                "title": "Replace recurring spreadsheet preparation with clearer, fresher reporting.",
                "text": "Collect, transform and present business data through scheduled reports and role-specific dashboards.",
                "items": ["Automated data preparation", "KPI dashboards and exception views", "Freshness indicators and controlled exports"],
                "link": "/services/dashboard-design/",
                "label": "Reporting & Dashboards"
            }
        }

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
