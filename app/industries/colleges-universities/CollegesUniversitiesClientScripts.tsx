// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function CollegesUniversitiesClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "programmes": { "kicker": "Student recruitment", "title": "Help prospects find the right study option and next step.", "text": "Structure subjects, awards, modes, campuses, intakes, modules, requirements, fees, funding, careers and enquiries.", "items": ["Programme finder", "Comparison and favourites", "Contextual enquiry routes"], "label": "Programme Discovery & Recruitment" }, "admissions": { "kicker": "Application confidence", "title": "Guide prospective students through complex admissions information.", "text": "Support events, enquiries, applications links, documents, decisions, offer-holder content, visas guidance and enrolment steps.", "items": ["Event registration", "Applicant guidance", "Offer-holder journeys"], "label": "Admissions & Applicant Journeys" }, "research": { "kicker": "Research visibility", "title": "Connect expertise, facilities and outputs for academic and external audiences.", "text": "Organise themes, researchers, projects, centres, equipment, publications, impact, funding and collaboration enquiries.", "items": ["Researcher profiles", "Project and output discovery", "Partnership enquiries"], "label": "Research & Knowledge Platforms" }, "students": { "kicker": "Student support", "title": "Bring approved services and actions into a clearer experience.", "text": "Provide personalised links, calendars, forms, cases, appointments, resources, payments inputs, wellbeing routes and status.", "items": ["Service directory", "Forms and appointments", "Case and status views"], "label": "Student Service Portals" }, "analytics": { "kicker": "Digital insight", "title": "Present approved recruitment, content and service indicators.", "text": "Show programme interest, event engagement, enquiry sources, application handoffs, search behaviour, service demand and accessibility feedback.", "items": ["Recruitment analytics", "Content performance", "Student-service indicators"], "label": "Higher-Education Dashboards" } }

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
