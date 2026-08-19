"use client";
import { useEffect } from "react";

export default function MarketingBPOClientScripts() {
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
                kicker: "Agency Websites",
                title: "Digitally showcase your creative portfolio.",
                text: "Visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.",
                list: ["Immersive WebGL sections", "Dynamic case studies", "Headless CMS architecture"],
                link: "/services/agency-and-studio-websites/"
            },
            "quoting": {
                kicker: "Client Intake",
                title: "Capture precise project requirements.",
                text: "Dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins.",
                list: ["Dynamic briefing logic", "Secure asset uploads", "PM Tool API Middleware"],
                link: "/services/client-intake-and-briefing/"
            },
            "carrier": {
                kicker: "Review Portals",
                title: "Secure, centralized creative feedback.",
                text: "Secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback.",
                list: ["Client review dashboards", "Annotation markup tools", "Identity management (CIAM)"],
                link: "/services/collaboration-and-review-portals/"
            },
            "tracking": {
                kicker: "Asset Management",
                title: "Scale your creative production.",
                text: "Internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets.",
                list: ["Custom DAM interfaces", "Cloud storage (AWS S3)", "Resource scheduling"],
                link: "/services/resource-and-asset-management/"
            },
            "analytics": {
                kicker: "Agency Dashboards",
                title: "Visibility across your service delivery.",
                text: "Aggregate data from CRM and timesheets into executive dashboards tracking profitability, utilization, and SLA compliance.",
                list: ["Control tower dashboards", "Data warehousing", "Automated client reporting"],
                link: "/services/bpo-and-agency-dashboards/"
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
