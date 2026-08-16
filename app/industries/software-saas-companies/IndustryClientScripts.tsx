"use client";
import { useEffect } from "react";

export default function IndustryClientScripts() {
  useEffect(() => {
    const solutionData: any = { "website": { "kicker": "Positioning & demand generation", "title": "A SaaS website that makes the product easy to understand and easy to buy.", "text": "Connect use cases, integrations, pricing, proof and conversion paths around the questions buyers ask before booking a demo or starting a trial.", "items": ["Homepage and use-case architecture", "Demo, trial and pricing journeys", "CMS, technical SEO and analytics"], "link": "/services/saas-marketing-website/", "label": "SaaS Marketing Website" }, "product": { "kicker": "Product experience", "title": "A product interface users can navigate without unnecessary training.", "text": "Clarify navigation, tasks, system states and role-based workflows across the core application.", "items": ["User flows and information architecture", "Responsive interface design", "Reusable product components"], "link": "/services/saas-ui-ux-design/", "label": "Product UI/UX" }, "onboarding": { "kicker": "Activation", "title": "Help new users reach their first meaningful outcome faster.", "text": "Design account setup, workspace configuration, guidance and empty states around the product’s activation moments.", "items": ["Guided setup and checklists", "Role-specific onboarding", "Contextual help and empty states"], "link": "/services/onboarding-experience/", "label": "SaaS Onboarding" }, "dashboard": { "kicker": "Clarity & control", "title": "Turn complex data and activity into clear decisions.", "text": "Organise metrics, actions, alerts, filters and reports into focused role-based dashboards.", "items": ["Role-based dashboard views", "Reporting and data visualisation", "Actions, filters and status tracking"], "link": "/services/dashboard-design/", "label": "SaaS Dashboard" }, "development": { "kicker": "Platform delivery", "title": "Build a maintainable SaaS application around the real workflow.", "text": "Develop secure web applications with authentication, permissions, integrations and reusable frontend architecture.", "items": ["Authentication and role permissions", "Core product workflows", "API and billing integrations"], "link": "/services/custom-saas-development/", "label": "Custom SaaS Development" } };

    const solutionTabs = document.querySelectorAll('.solution-tab');
    if (solutionTabs.length > 0) {
        solutionTabs.forEach((tab) => tab.addEventListener('click', () => {
            solutionTabs.forEach(x => x.classList.remove('active')); 
            tab.classList.add('active'); 
            const key = tab.getAttribute('data-key');
            if(key && solutionData[key]) {
                const d = solutionData[key];
                const uiWindow = document.querySelector('.ui-window');
                const solutionCopy = document.querySelector('.solution-copy');
                
                if (uiWindow && solutionCopy) {
                    uiWindow.classList.add('ui-switching');
                    solutionCopy.classList.add('ui-switching-text');
                    
                    setTimeout(() => {
                        document.getElementById('solutionKicker')!.textContent = d.kicker; 
                        document.getElementById('solutionTitle')!.textContent = d.title; 
                        document.getElementById('solutionText')!.textContent = d.text; 
                        document.getElementById('solutionList')!.innerHTML = d.items.map((x: string) => `<span>${x}</span>`).join(''); 
                        (document.getElementById('solutionLink') as HTMLAnchorElement).href = d.link; 
                        document.getElementById('uiBadge')!.textContent = d.label;
                        
                        uiWindow.setAttribute('data-view', key);
                        
                        // Small stagger for the text fading back in
                        solutionCopy.classList.remove('ui-switching-text');
                        setTimeout(() => {
                            uiWindow.classList.remove('ui-switching');
                        }, 50);
                    }, 150);
                }
            }
        }));
    }

    
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


    const demoForms = document.querySelectorAll('.js-demo-form');
    demoForms.forEach(form => form.addEventListener('submit', async (event) => { 
        event.preventDefault(); 
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn ? btn.textContent : '';
        if (btn) btn.textContent = 'Sending...';

        try {
            const formData = new FormData(form as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const msg = form.querySelector('.success-message');
                if (msg) msg.classList.add('show');
                (form as HTMLFormElement).reset();
            } else {
                console.error('Failed to submit form');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            if (btn) btn.textContent = originalText;
        }
    }));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.reveal-right').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.reveal-zoom').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.stagger-reveal').forEach(el => revealObserver.observe(el));

  }, []);

  return null;
}
