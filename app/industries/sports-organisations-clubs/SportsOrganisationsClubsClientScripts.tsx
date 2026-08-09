// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function SportsOrganisationsClubsClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = { "club": { "kicker": "Community home", "title": "Give every audience clear access to relevant sports information.", "text": "Structure teams, fixtures, results, tables, venues, news, history, programs and contacts.", "items": ["Team and competition pages", "Fixtures and results", "News and community content"], "label": "Club, Team & Competition Websites" }, "membership": { "kicker": "Participant onboarding", "title": "Make joining and renewal easier to administer.", "text": "Support people, households, membership types, eligibility, waivers, documents, payments and status.", "items": ["Member registration", "Renewals and payments", "Documents and waivers"], "label": "Membership & Registration" }, "events": { "kicker": "Participation", "title": "Connect audiences with matches, camps, clinics and community programs.", "text": "Support calendars, registrations, tickets, capacity, sessions, venues, reminders and attendance.", "items": ["Event discovery", "Registration and ticketing", "Attendance inputs"], "label": "Events, Tickets & Programs" }, "operations": { "kicker": "Role coordination", "title": "Give staff and volunteers the information relevant to their role.", "text": "Provide assignments, availability, qualifications, documents, tasks, messages and reimbursements.", "items": ["Role-based accounts", "Availability and assignments", "Documents and tasks"], "label": "Officials & Volunteer Portals" }, "insights": { "kicker": "Organisation visibility", "title": "Present approved participation and engagement indicators.", "text": "Show members, renewals, programs, attendance, volunteers, communications and community reach.", "items": ["Membership reporting", "Program participation", "Volunteer activity"], "label": "Membership & Participation Dashboards" } }

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
