// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function TrainingCoachingResearchClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "programmes": { "kicker": "Qualified interest", "title": "Explain who each programme serves and what participation involves.", "text": "Structure outcomes, audiences, methods, formats, schedules, facilitators, evidence, pricing and enquiries.", "items": ["Programme discovery", "Expert profiles", "Consultation and booking"], "label": "Programme & Expertise Websites" }, "learning": { "kicker": "Ongoing participation", "title": "Give participants a clear view of their programme.", "text": "Support schedules, sessions, goals, activities, resources, reflections, messages, progress and approved notes.", "items": ["Personal programme view", "Goals and activities", "Resources and communication"], "label": "Learner & Coaching Portals" }, "events": { "kicker": "Group delivery", "title": "Coordinate live and blended learning experiences.", "text": "Manage dates, capacity, registration, payment inputs, waitlists, reminders, attendance, materials and follow-up.", "items": ["Cohort registration", "Waitlists and reminders", "Attendance and follow-up"], "label": "Workshops, Cohorts & Events" }, "knowledge": { "kicker": "Knowledge discovery", "title": "Make research, evidence and resources easier to explore.", "text": "Organise themes, projects, experts, methods, datasets metadata, publications, tools, events and collaboration enquiries.", "items": ["Research discovery", "Publication libraries", "Expert and project profiles"], "label": "Research & Knowledge Platforms" }, "reporting": { "kicker": "Outcome visibility", "title": "Present approved engagement and delivery indicators.", "text": "Show enquiries, bookings, attendance, participation, activity, completion, feedback inputs, outputs and support demand.", "items": ["Programme reporting", "Engagement indicators", "Research output views"], "label": "Programme & Research Dashboards" } }

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
