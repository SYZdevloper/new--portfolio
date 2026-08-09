// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function HospitalsClinicsHealthcareProvidersClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "discovery": { "kicker": "Find appropriate care", "title": "Help patients understand available services and next steps.", "text": "Structure specialties, conditions, treatments, clinicians, locations, eligibility, preparation guidance and urgent-care information.", "items": ["Service and condition pages", "Clinician and location search", "Clear care pathways"], "label": "Healthcare Websites & Service Discovery" }, "appointments": { "kicker": "Access to care", "title": "Create clear request, referral and scheduling journeys.", "text": "Support service selection, patient details, referral information, availability, reminders, changes and approved triage routes.", "items": ["Appointment requests", "Referral intake", "Reminders and changes"], "label": "Appointments & Referrals" }, "patients": { "kicker": "Secure self-service", "title": "Give patients controlled access to relevant service information.", "text": "Provide appointments, forms, preparation instructions, approved results, letters, invoices, payments, messages and requests.", "items": ["Appointment overview", "Documents and results", "Payments and requests"], "label": "Patient Service Portals" }, "operations": { "kicker": "Coordinated administration", "title": "Connect patient-facing steps with approved operational processes.", "text": "Support intake, eligibility, documents, queues, assignments, approvals, notifications and service follow-up without replacing clinical judgment.", "items": ["Digital intake", "Queue and task states", "Follow-up workflows"], "label": "Clinical Service Workflows" }, "insights": { "kicker": "Operational visibility", "title": "Present approved access and service indicators.", "text": "Show enquiry sources, appointment demand, attendance, waiting-time inputs, form completion, service requests and accessibility feedback.", "items": ["Access reporting", "Attendance indicators", "Service and accessibility views"], "label": "Healthcare Service Dashboards" } }

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
