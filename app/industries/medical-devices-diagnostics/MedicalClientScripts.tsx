"use client";
import { useEffect } from "react";

export default function MedicalClientScripts() {
    useEffect(() => {
        const header = document.querySelector(".site-header");
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header?.classList.add("scrolled");
            } else {
                header?.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);

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

        const tabs = document.querySelectorAll(".solution-tab");
        const solutionCopy = document.querySelector(".solution-copy") as HTMLElement | null;
        const uiBadge = document.getElementById("uiBadge");

        const contentMap: Record<string, { kicker: string, title: string, text: string, list: string[], link: string }> = {
            "discovery": {
                kicker: "Medical Product Websites",
                title: "Digital experiences that educate and convert.",
                text: "Modern medical device websites highlighting complex product capabilities with 3D models, rich technical specifications, and clinical outcome data.",
                list: ["Interactive 3D product viewing", "Technical specification sheets", "Clinical outcome highlights"],
                link: "/services/medical-product-websites-and-catalogues/"
            },
            "quoting": {
                kicker: "Professional Resources",
                title: "Empower distributors and clinicians.",
                text: "Secure B2B resource hubs where medical professionals can access training materials, surgical guides, and bulk ordering workflows.",
                list: ["Surgical guide libraries", "Clinician training modules", "Secure bulk ordering"],
                link: "/services/professional-and-distributor-resources/"
            },
            "carrier": {
                kicker: "Equipment Portals",
                title: "Manage capital equipment fleets.",
                text: "Portals for hospital procurement and biomedical engineering to track device maintenance schedules, warranty status, and service tickets.",
                list: ["Maintenance schedule tracking", "Warranty status viewing", "Service ticket management"],
                link: "/services/equipment-and-service-portals/"
            },
            "tracking": {
                kicker: "Laboratory Workflows",
                title: "Streamline diagnostic data.",
                text: "Secure digital workflows for laboratories to receive test orders, track sample provenance, and deliver digital diagnostic reports to providers.",
                list: ["Test order processing", "Sample provenance tracking", "Secure diagnostic reporting"],
                link: "/services/diagnostic-and-laboratory-workflows/"
            },
            "analytics": {
                kicker: "Product Dashboards",
                title: "Insights into device utilization.",
                text: "Dashboards providing analytics on IoT medical device usage, field service performance, and diagnostic result turnaround times.",
                list: ["IoT device utilization", "Field service analytics", "Diagnostic turnaround reporting"],
                link: "/services/product-and-service-dashboards/"
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
