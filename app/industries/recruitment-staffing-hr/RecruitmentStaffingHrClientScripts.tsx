// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function RecruitmentStaffingHrClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "jobs": { "kicker": "Candidate attraction", "title": "Help candidates discover relevant roles and understand employers.", "text": "Structure jobs, locations, work types, skills, salary inputs, teams, culture, benefits and content.", "items": ["Job search", "Employer pages", "Career content"], "label": "Job Websites & Employer Branding" }, "candidates": { "kicker": "Candidate journey", "title": "Make application and communication easier.", "text": "Support profiles, CVs, questions, documents, consent, applications, interviews, offers and status.", "items": ["Candidate profiles", "Applications and documents", "Interview and offer states"], "label": "Candidate Applications & Portals" }, "clients": { "kicker": "Employer service", "title": "Give hiring clients controlled access to recruitment work.", "text": "Provide vacancies, requirements, candidate submissions, feedback, interviews, offers, placements and reports.", "items": ["Vacancy intake", "Candidate shortlists", "Feedback and placement status"], "label": "Client & Vacancy Portals" }, "workforce": { "kicker": "Staffing operations", "title": "Support placed and contingent workers after recruitment.", "text": "Manage availability, assignments, shifts, timesheet inputs, documents, compliance, expenses and messages.", "items": ["Assignment status", "Timesheet inputs", "Documents and compliance"], "label": "Worker & Assignment Portals" }, "analytics": { "kicker": "Operational visibility", "title": "Present approved hiring and staffing indicators.", "text": "Show vacancies, sources, stages, time-to-fill, interviews, placements, workers and service levels.", "items": ["Recruitment funnel", "Placement reporting", "Workforce visibility"], "label": "Recruitment & Workforce Dashboards" } }

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
