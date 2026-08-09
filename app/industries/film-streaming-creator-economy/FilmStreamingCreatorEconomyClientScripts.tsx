// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function FilmStreamingCreatorEconomyClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "experience": {
                "kicker": "Audience experience",
                "title": "Create a clear path from account setup and discovery to access and playback.",
                "text": "Design responsive journeys for profiles, content, plans, entitlements, playback states, watchlists and account management.",
                "items": ["Responsive streaming interface", "Account, profile and watchlist journeys", "Playback states and video-provider integration"],
                "link": "/services/saas-ui-ux-design/",
                "label": "Streaming Product UX"
            },
            "catalogue": {
                "kicker": "Content discovery",
                "title": "Help audiences understand what is available and find the next relevant title.",
                "text": "Structure genres, formats, collections, people, metadata, search, filters and detail pages around real viewing intent.",
                "items": ["Catalogue and collection architecture", "Search, filters and metadata", "Detail pages, related titles and watchlists"],
                "link": "/services/custom-web-app-development/",
                "label": "Catalogue & Discovery"
            },
            "monetisation": {
                "kicker": "Audience revenue",
                "title": "Connect plans, purchases and access rules to the content experience.",
                "text": "Design subscriptions, rentals, purchases, memberships, promotions, account states and payment-provider integrations.",
                "items": ["Subscription and membership plans", "Rentals, purchases and promotions", "Entitlements, billing and account states"],
                "link": "/services/api-integration-development/",
                "label": "Monetisation"
            },
            "creator": {
                "kicker": "Creator operations",
                "title": "Give creators and partners a clear way to submit, manage and understand content.",
                "text": "Create role-based portals for profiles, media, metadata, rights information, review status, publishing and approved reporting.",
                "items": ["Creator onboarding and profiles", "Content submission and review states", "Audience and revenue reporting"],
                "link": "/services/client-portal-development/",
                "label": "Creator Portal"
            },
            "operations": {
                "kicker": "Platform control",
                "title": "Give teams visibility across catalogues, access, rights, transactions and support.",
                "text": "Build operational dashboards for content, availability, moderation, users, payments, exceptions and performance indicators.",
                "items": ["Content and rights administration", "Users, transactions and support states", "Operational analytics and reporting"],
                "link": "/services/admin-panel-development/",
                "label": "Content Operations"
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
