// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function CommunityInternationalOrganisationsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "information": { "kicker": "Inclusive access", "title": "Help diverse audiences find trusted, relevant information.", "text": "Structure purpose, programmes, countries, communities, languages, locations, leadership, governance, reports and news.", "items": ["Language and location paths", "Accessible content", "Governance and reports"], "label": "Multilingual Organisation Websites" }, "services": { "kicker": "Find local support", "title": "Connect people with appropriate programmes and resources.", "text": "Provide topic, audience, eligibility, language, location, availability, contact, referral and urgent-support information.", "items": ["Service directories", "Eligibility guidance", "Referral journeys"], "label": "Community Services & Resource Directories" }, "engagement": { "kicker": "Community engagement", "title": "Make participation easier to understand and coordinate.", "text": "Support events, groups, roles, registrations, applications, schedules, consent, resources, reminders and communication.", "items": ["Event registration", "Volunteer applications", "Group and chapter activity"], "label": "Events, Participation & Volunteering" }, "partners": { "kicker": "Distributed collaboration", "title": "Give authorised local teams and partners useful tools.", "text": "Manage profiles, locations, programme updates, resources, submissions, documents, funding inputs, reports and requests.", "items": ["Partner access", "Local publishing", "Programme reporting"], "label": "Partner & Chapter Portals" }, "insights": { "kicker": "Responsible visibility", "title": "Present approved engagement and programme indicators.", "text": "Show content reach, language use, service demand, participation, locations, programme inputs, reporting status and accessibility feedback.", "items": ["Audience engagement", "Programme reach", "Accessibility reporting"], "label": "Community & Programme Dashboards" } }

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
