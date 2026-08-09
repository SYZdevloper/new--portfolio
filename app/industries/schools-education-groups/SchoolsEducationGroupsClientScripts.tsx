// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function SchoolsEducationGroupsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "website": { "kicker": "School discovery", "title": "Show the school experience for prospective and current families.", "text": "Structure stages, curriculum, values, campuses, leadership, facilities, activities, policies, calendars, news and contacts.", "items": ["Curriculum and stage pages", "Campus and activity content", "News and calendars"], "label": "School Websites & Community Content" }, "admissions": { "kicker": "Family conversion", "title": "Guide families from research to enrolment.", "text": "Support enquiries, open-day booking, child and guardian details, documents, assessments, decisions, offers and joining steps.", "items": ["Visit and enquiry forms", "Applications and documents", "Offer and onboarding states"], "label": "Admissions & Enrolment Journeys" }, "community": { "kicker": "Community access", "title": "Give families and learners a useful, controlled view.", "text": "Provide calendars, notices, resources, forms, clubs, trips, payments inputs, requests and approved links to learning systems.", "items": ["Personalised notices", "Forms and resources", "Activities and requests"], "label": "Parent & Student Portals" }, "operations": { "kicker": "Joined-up service", "title": "Connect common administrative journeys.", "text": "Support admissions tasks, approvals, consent, safeguarding routes, facility requests, policy acknowledgement and communication.", "items": ["Administrative tasks", "Consent workflows", "Request routing"], "label": "School Administration Workflows" }, "groups": { "kicker": "Group visibility", "title": "Present approved school and digital-service indicators.", "text": "Show admissions demand, enquiry sources, content status, form completion, service requests and accessibility feedback across campuses.", "items": ["Admissions reporting", "Cross-school content views", "Service indicators"], "label": "Education Group Dashboards" } }

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
