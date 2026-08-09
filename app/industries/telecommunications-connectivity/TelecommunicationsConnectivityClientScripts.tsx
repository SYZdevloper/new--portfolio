// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function TelecommunicationsConnectivityClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "website": {
                "kicker": "Acquisition & clarity",
                "title": "Help customers understand services, compare plans and choose the right next action.",
                "text": "Structure audiences, service types, plan details, pricing, eligibility and conversion paths around the questions customers ask.",
                "items": ["Service and plan architecture", "Comparison and audience-specific journeys", "Lead, callback and order actions"],
                "link": "/services/business-website-development/",
                "label": "Plan Discovery"
            },
            "availability": {
                "kicker": "Eligibility & location",
                "title": "Show customers which services are available from an approved coverage or address source.",
                "text": "Collect the required location, query serviceability data, explain the result and guide eligible or unavailable users to the correct next step.",
                "items": ["Address, postcode or location input", "Coverage and eligibility API integration", "Eligible plans and alternative journeys"],
                "link": "/services/custom-web-app-development/",
                "label": "Availability Checker"
            },
            "customer": {
                "kicker": "Account self-service",
                "title": "Give customers one clear place to understand and manage their service.",
                "text": "Create authenticated journeys for account information, plans, bills, payments, orders, service requests, notifications and support.",
                "items": ["Secure account dashboard", "Billing, order and request views", "Support and notification journeys"],
                "link": "/services/client-portal-development/",
                "label": "Customer Portal"
            },
            "partner": {
                "kicker": "Channel enablement",
                "title": "Help dealers and partners register opportunities, access information and track progress.",
                "text": "Design role-based workspaces for onboarding, lead or order submission, documents, status updates, commissions and support.",
                "items": ["Partner onboarding and permissions", "Lead or order registration", "Documents, status and performance views"],
                "link": "/services/client-portal-development/",
                "label": "Partner Portal"
            },
            "operations": {
                "kicker": "Visibility & integration",
                "title": "Bring customer, order, service and support states into focused operational views.",
                "text": "Connect approved CRM, billing, provisioning or support data so teams can identify ownership, exceptions and required actions.",
                "items": ["Role-based operations dashboards", "CRM, billing and support integrations", "Alerts, exceptions and status tracking"],
                "link": "/services/dashboard-design/",
                "label": "Operations Dashboard"
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
