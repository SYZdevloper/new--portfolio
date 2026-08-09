// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function AssociationsMembershipOrganisationsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "website": { "kicker": "Member value", "title": "Present the organisation, community and benefits clearly.", "text": "Structure membership tiers, standards, advocacy, chapters, committees, resources, events, news, awards and directories.", "items": ["Membership value pages", "Sector and policy content", "Events and resources"], "label": "Association & Membership Websites" }, "membership": { "kicker": "Membership lifecycle", "title": "Guide people and organisations through approved membership steps.", "text": "Support eligibility, profiles, organisations, evidence, approvals, fees inputs, renewals, preferences and status.", "items": ["Guided applications", "Approval workflows", "Renewals and preferences"], "label": "Applications, Renewals & Accounts" }, "members": { "kicker": "Member experience", "title": "Give members access to useful benefits and connections.", "text": "Provide profiles, entitlements, documents, communities, committees, directories, opportunities, requests and communication.", "items": ["Personalised dashboard", "Member directory", "Committees and communities"], "label": "Member Portals & Directories" }, "events": { "kicker": "Professional participation", "title": "Connect programmes with member records.", "text": "Manage events, sessions, speakers, registration, tickets inputs, attendance, learning, CPD inputs, certificates and feedback.", "items": ["Event registration", "Learning records", "Certificates and CPD"], "label": "Events, Learning & Credentials" }, "operations": { "kicker": "Organisational insight", "title": "Present approved membership and engagement indicators.", "text": "Show applications, approvals, renewals, retention, events, content use, chapter activity, service requests and revenue inputs.", "items": ["Membership lifecycle", "Engagement reporting", "Chapter and event views"], "label": "Membership Dashboards" } }

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
