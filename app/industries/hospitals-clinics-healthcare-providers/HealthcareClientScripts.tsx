"use client";
import { useEffect } from "react";

export default function HealthcareClientScripts() {
    useEffect(() => {
        // Sticky Header Logic
        const header = document.querySelector(".site-header");
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header?.classList.add("scrolled");
            } else {
                header?.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Reveal Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => observer.observe(el));

        const revealZoomElements = document.querySelectorAll(".reveal-zoom");
        revealZoomElements.forEach(el => observer.observe(el));

        const revealRightElements = document.querySelectorAll(".reveal-right");
        revealRightElements.forEach(el => observer.observe(el));

        // Solution Tabs Logic
        const tabs = document.querySelectorAll(".solution-tab");
        const solutionCopy = document.querySelector(".solution-copy") as HTMLElement | null;
        const uiBadge = document.getElementById("uiBadge");

        const contentMap: Record<string, { kicker: string, title: string, text: string, list: string[], link: string }> = {
            "discovery": {
                kicker: "Service Discovery",
                title: "Guide patients to the right care.",
                text: "Modern healthcare websites that make it easy for patients to find specialists, understand services, and navigate complex clinical campuses.",
                list: ["Provider directories", "Interactive campus maps", "Service line showcasing"],
                link: "/services/healthcare-websites-and-service-discovery/"
            },
            "quoting": {
                kicker: "Appointments",
                title: "Frictionless digital booking.",
                text: "Secure scheduling workflows that handle complex triage, insurance verification, and automated appointment reminders.",
                list: ["EHR-integrated booking", "Digital intake forms", "Automated SMS reminders"],
                link: "/services/appointments-and-referrals/"
            },
            "carrier": {
                kicker: "Patient Portals",
                title: "Empower patients with their own data.",
                text: "Secure, HIPAA-compliant portals where patients can view lab results, message providers, and manage their family's health records.",
                list: ["Lab result viewing", "Secure messaging", "Telehealth integrations"],
                link: "/services/patient-service-portals/"
            },
            "tracking": {
                kicker: "Clinical Workflows",
                title: "Digital tools for care teams.",
                text: "Custom clinical interfaces that reduce administrative burden, manage bed capacity, and orchestrate patient handoffs securely.",
                list: ["Bed management boards", "Care coordination tools", "EHR middleware APIs"],
                link: "/services/clinical-service-workflows/"
            },
            "analytics": {
                kicker: "Healthcare Analytics",
                title: "Visibility into care operations.",
                text: "Executive dashboards that aggregate data across departments to track patient wait times, clinical outcomes, and revenue cycles.",
                list: ["Wait time monitoring", "Clinical outcome tracking", "Revenue cycle dashboards"],
                link: "/services/healthcare-service-dashboards/"
            }
        };

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                const key = tab.getAttribute("data-key");
                
                if (key && contentMap[key] && solutionCopy) {
                    const data = contentMap[key];
                    solutionCopy.style.opacity = "0";
                    
                    setTimeout(() => {
                        const kickerEl = document.getElementById("solutionKicker");
                        const titleEl = document.getElementById("solutionTitle");
                        const textEl = document.getElementById("solutionText");
                        const listEl = document.getElementById("solutionList");
                        const linkEl = document.getElementById("solutionLink");
                        
                        if (kickerEl) kickerEl.textContent = data.kicker;
                        if (titleEl) titleEl.textContent = data.title;
                        if (textEl) textEl.textContent = data.text;
                        if (linkEl) linkEl.setAttribute("href", data.link);
                        
                        if (listEl) {
                            listEl.innerHTML = data.list.map(item => `<span>${item}</span>`).join("");
                        }
                        
                        if (uiBadge) uiBadge.textContent = data.kicker;
                        
                        solutionCopy.style.opacity = "1";
                    }, 300);
                }
            });
        });

        // FAQ Toggle Logic
        const faqQuestions = document.querySelectorAll(".faq-question");
        faqQuestions.forEach(question => {
            question.addEventListener("click", () => {
                const parent = question.parentElement;
                
                document.querySelectorAll(".faq-item").forEach(item => {
                    if (item !== parent) {
                        item.classList.remove("open");
                        const icon = item.querySelector(".faq-question span:last-child");
                        if(icon) icon.textContent = "+";
                    }
                });

                parent?.classList.toggle("open");
                const icon = question.querySelector("span:last-child");
                if (parent?.classList.contains("open")) {
                    if(icon) icon.textContent = "−";
                } else {
                    if(icon) icon.textContent = "+";
                }
            });
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            revealElements.forEach(el => observer.unobserve(el));
            revealZoomElements.forEach(el => observer.unobserve(el));
            revealRightElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return null;
}
