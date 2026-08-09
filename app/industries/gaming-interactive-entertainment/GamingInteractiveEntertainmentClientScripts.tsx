// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function GamingInteractiveEntertainmentClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "experience": {
                "kicker": "Game experience",
                "title": "Turn a learning, training or engagement goal into a clear gameplay loop.",
                "text": "Design responsive journeys with intuitive controls, useful feedback, appropriate challenge and accessible interaction patterns.",
                "items": ["Game concept and interaction design", "Responsive controls and onboarding", "Feedback, difficulty and completion states"],
                "link": "/services/saas-ui-ux-design/",
                "label": "Game Design & UX"
            },
            "library": {
                "kicker": "Browser game development",
                "title": "Build fast, responsive games that run directly in modern browsers.",
                "text": "Develop gameplay, animation, sound, scoring and saved progress using HTML5, JavaScript, Canvas, WebGL or an appropriate framework.",
                "items": ["HTML5 and JavaScript development", "Canvas, animation and audio", "Mobile and desktop browser testing"],
                "link": "/services/custom-web-app-development/",
                "label": "HTML5 Game Development"
            },
            "engagement": {
                "kicker": "Gamification systems",
                "title": "Use progress and rewards to reinforce meaningful participation.",
                "text": "Add appropriate points, levels, badges, streaks, leaderboards, unlocks and feedback without distracting from the core objective.",
                "items": ["Progress, levels and achievements", "Challenges, rewards and feedback", "Leaderboards and social features"],
                "link": "/services/api-integration-development/",
                "label": "Gamification & Rewards"
            },
            "education": {
                "kicker": "Education and training",
                "title": "Connect interactive activities with teaching, onboarding and skills practice.",
                "text": "Create role-based portals for activities, question banks, groups, assignments, progress, scores, certificates and approved reporting.",
                "items": ["Educational games and quizzes", "Training simulations and scenarios", "Progress and assessment dashboards"],
                "link": "/services/client-portal-development/",
                "label": "Education & Training"
            },
            "operations": {
                "kicker": "Platform control",
                "title": "Give teams visibility across content, users, releases and performance.",
                "text": "Build operational dashboards for game content, configuration, users, scores, moderation, integrations, exceptions and performance indicators.",
                "items": ["Game content and configuration", "Users, scores and support states", "Engagement analytics and reporting"],
                "link": "/services/admin-panel-development/",
                "label": "Game Operations"
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
