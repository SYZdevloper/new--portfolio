// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function EdtechOnlineLearningClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "marketplace": { "kicker": "Course conversion", "title": "Help learners choose an appropriate course or pathway.", "text": "Structure topics, skills, levels, formats, instructors, outcomes, prerequisites, previews, pricing, reviews and FAQs.", "items": ["Course search", "Pathway comparison", "Checkout and enrolment"], "label": "Course Marketplaces & Product Websites" }, "learning": { "kicker": "Learner progress", "title": "Create focused journeys through digital learning content.", "text": "Support modules, video, reading, interactive activities, bookmarks, notes, progress, schedules and completion.", "items": ["Responsive learning player", "Progress tracking", "Bookmarks and notes"], "label": "Learning Management Experiences" }, "assessment": { "kicker": "Evidence of learning", "title": "Support approved checks of knowledge and completion.", "text": "Provide quizzes, assignments, projects, rubrics, feedback, attempts, certificates, badges and verification.", "items": ["Quizzes and assignments", "Feedback workflows", "Certificates and badges"], "label": "Assessment & Credentials" }, "instructors": { "kicker": "Learning operations", "title": "Give educators and business customers useful controls.", "text": "Manage cohorts, enrolments, content, schedules, submissions, feedback, announcements, seats and reports.", "items": ["Cohort management", "Content and feedback", "Organisation accounts"], "label": "Instructor & Organisation Portals" }, "analytics": { "kicker": "Product insight", "title": "Present useful engagement and learning indicators.", "text": "Show discovery, conversion, starts, activity, progression, assessment inputs, completion, support and retention.", "items": ["Learning funnel", "Engagement reporting", "Completion and retention"], "label": "Learning Product Analytics" } }

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
