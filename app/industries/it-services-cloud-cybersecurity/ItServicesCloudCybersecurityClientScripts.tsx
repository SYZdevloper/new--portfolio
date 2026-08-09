// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function ItServicesCloudCybersecurityClientScripts() {
  useEffect(() => {
    const solutionData: Record<string, any> = {
            "strategy": {
                "kicker": "Technology roadmap",
                "title": "Create a practical modernisation plan around real systems and business priorities.",
                "text": "Map applications, infrastructure, dependencies, ownership and risk before deciding what to migrate, improve, integrate or retain.",
                "items": ["Current technology assessment", "Dependency and ownership mapping", "Phased modernisation roadmap"],
                "link": "#project-enquiry",
                "label": "IT Strategy"
            },
            "cloud": {
                "kicker": "Cloud foundation",
                "title": "Plan and move suitable workloads with clear dependencies, validation and rollback.",
                "text": "Choose an appropriate migration approach, design the target environment and sequence data, application and cutover activities carefully.",
                "items": ["Workload and data discovery", "Target cloud architecture", "Migration, cutover and rollback planning"],
                "link": "/it-services-cloud-cybersecurity/cloud-migration/",
                "label": "Cloud Migration"
            },
            "devops": {
                "kicker": "Repeatable delivery",
                "title": "Replace fragile manual releases with controlled build and deployment workflows.",
                "text": "Connect source control, automated checks, environment configuration, approvals, versioning and rollback options.",
                "items": ["CI/CD pipelines", "Environment configuration and secrets", "Approval, release and rollback procedures"],
                "link": "/it-services-cloud-cybersecurity/devops-ci-cd/",
                "label": "DevOps & CI/CD"
            },
            "security": {
                "kicker": "Reduced exposure",
                "title": "Review visible weaknesses and improve the secure configuration of approved systems.",
                "text": "Assess architecture, identities, public exposure, dependencies, credentials and application controls within a clearly authorised scope.",
                "items": ["Architecture and exposure review", "Identity, configuration and dependency checks", "Prioritised remediation plan"],
                "link": "/it-services-cloud-cybersecurity/security-assessment-hardening/",
                "label": "Security Hardening"
            },
            "resilience": {
                "kicker": "Visibility and continuity",
                "title": "Know when important services fail and how approved systems will be restored.",
                "text": "Define monitoring, alert ownership, backup coverage, recovery targets, restoration procedures and controlled exercises.",
                "items": ["Service health, logs and actionable alerts", "Backup coverage and protected retention", "Recovery procedures and exercises"],
                "link": "/it-services-cloud-cybersecurity/backup-disaster-recovery/",
                "label": "Backup & Recovery"
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
