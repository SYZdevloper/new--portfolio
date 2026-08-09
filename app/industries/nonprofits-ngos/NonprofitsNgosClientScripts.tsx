// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function NonprofitsNgosClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "mission": { "kicker": "Credible storytelling", "title": "Show the problem, response and evidence with care.", "text": "Structure mission, programmes, locations, communities, methods, stories, results, governance, reports and news.", "items": ["Programme discovery", "Impact storytelling", "Governance and reports"], "label": "Mission & Impact Websites" }, "fundraising": { "kicker": "Supporter conversion", "title": "Make giving clear, respectful and trustworthy.", "text": "Support one-time and recurring gifts, funds, appeals, tribute options, gift aid or local equivalents, receipts and donor preferences.", "items": ["Campaign landing pages", "Flexible donation forms", "Receipts and preferences"], "label": "Donation & Campaign Journeys" }, "engagement": { "kicker": "Active participation", "title": "Connect supporters with appropriate opportunities.", "text": "Manage roles, skills, locations, availability, applications, screening inputs, shifts, events, resources and communication.", "items": ["Volunteer matching", "Event registration", "Schedules and resources"], "label": "Volunteer, Event & Community Portals" }, "programmes": { "kicker": "Programme coordination", "title": "Support approved delivery and collaboration processes.", "text": "Connect applications, eligibility, partners, referrals, activities, documents, safeguarding routes, cases and milestones.", "items": ["Programme applications", "Partner access", "Milestones and cases"], "label": "Programme & Partner Workflows" }, "impact": { "kicker": "Responsible reporting", "title": "Present approved operational and outcome indicators.", "text": "Show donations, campaigns, supporter journeys, volunteer participation, programme reach, output inputs, stories and reporting status.", "items": ["Fundraising performance", "Participation indicators", "Impact reporting"], "label": "Impact & Fundraising Dashboards" } }

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
