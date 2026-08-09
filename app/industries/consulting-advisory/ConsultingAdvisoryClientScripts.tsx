// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ConsultingAdvisoryClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "authority": { "kicker": "Market credibility", "title": "Show what the firm knows and where it creates value.", "text": "Structure services, client problems, sectors, methods, experts, credentials, cases and outcomes.", "items": ["Service architecture", "Sector expertise", "Case studies and evidence"], "label": "Authority & Service Websites" }, "insights": { "kicker": "Thought leadership", "title": "Make expert content useful and discoverable.", "text": "Organise topics, industries, formats, authors, series, reports, events and related capabilities.", "items": ["Insight taxonomy", "Author pages", "Reports and events"], "label": "Insights & Knowledge Libraries" }, "leads": { "kicker": "Qualified demand", "title": "Turn interest into useful commercial context.", "text": "Capture challenges, organisation, scope, urgency, stakeholders, files, appointments and next steps.", "items": ["Diagnostic forms", "Consultation booking", "Qualified lead routing"], "label": "Assessments & Lead Journeys" }, "clients": { "kicker": "Delivery collaboration", "title": "Give clients one place for approved engagement information.", "text": "Support milestones, workstreams, files, meetings, decisions, actions, invoices and reports.", "items": ["Project dashboards", "Files and decisions", "Meetings and actions"], "label": "Client & Project Portals" }, "operations": { "kicker": "Practice visibility", "title": "Show useful pipeline and delivery indicators.", "text": "Connect opportunities, proposals, engagements, resources, milestones, risks and client service.", "items": ["Pipeline reporting", "Engagement status", "Resource visibility"], "label": "Advisory Operations Dashboards" } }

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
