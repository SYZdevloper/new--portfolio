// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function MediaNewsPublishingClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "website": {
                "kicker": "Reader experience",
                "title": "Present fast-moving stories through a clear, responsive editorial system.",
                "text": "Connect the homepage, sections, topics, authors, article formats and reader actions around the publication's editorial priorities.",
                "items": ["Homepage and section architecture", "Article, author and topic templates", "Mobile performance and technical SEO"],
                "link": "/services/business-website-development/",
                "label": "Editorial Website"
            },
            "cms": {
                "kicker": "Editorial operations",
                "title": "Give teams structured tools for creating, reviewing, scheduling and updating content.",
                "text": "Define content types, reusable blocks, media, authors, revisions, corrections, roles and approval states around the real newsroom workflow.",
                "items": ["Structured content and reusable blocks", "Draft, review and scheduling states", "Authors, roles, revisions and corrections"],
                "link": "/services/custom-web-app-development/",
                "label": "Editorial CMS"
            },
            "discovery": {
                "kicker": "Content depth",
                "title": "Help readers navigate topics, authors, formats and archives without reaching dead ends.",
                "text": "Plan search, filters, topic pages, related content and archive structures around the publication's taxonomy and reader intent.",
                "items": ["Search and filters", "Topics, tags, authors and archives", "Related and recommended content"],
                "link": "/services/custom-web-app-development/",
                "label": "Search & Archives"
            },
            "subscriptions": {
                "kicker": "Reader revenue",
                "title": "Connect registration, paid access and account management to the reading experience.",
                "text": "Design plans, checkout, access rules, renewal states, account preferences and member-only journeys around suitable providers.",
                "items": ["Registration and subscription plans", "Paywall or access rules", "Member account and billing states"],
                "link": "/services/client-portal-development/",
                "label": "Subscriptions"
            },
            "audience": {
                "kicker": "Distribution & measurement",
                "title": "Connect newsletters, advertising and analytics without overwhelming the reader journey.",
                "text": "Integrate approved audience and revenue tools with clear consent, placement, performance and operational requirements.",
                "items": ["Newsletter signup and preference flows", "Advertising and sponsor placements", "Analytics and publisher dashboards"],
                "link": "/services/api-integration-development/",
                "label": "Audience & Revenue"
            }
        }

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
