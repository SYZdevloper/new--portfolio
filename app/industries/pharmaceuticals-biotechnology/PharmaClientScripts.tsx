"use client";
import { useEffect } from "react";

export default function PharmaClientScripts() {
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

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observerInstance.unobserve(entry.target);
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
                kicker: "Corporate Websites",
                title: "Build global corporate trust.",
                text: "Enterprise websites for pharmaceutical companies that balance investor relations, scientific innovation, and global regulatory compliance.",
                list: ["Investor relations portals", "Scientific pipeline showcases", "Global compliance architecture"],
                link: "/services/pharmaceutical-corporate-websites/"
            },
            "quoting": {
                kicker: "Clinical Portals",
                title: "Accelerate R&D workflows.",
                text: "Secure digital environments for managing clinical trials, tracking cohort data, and facilitating collaboration between global research teams.",
                list: ["Clinical trial recruitment", "Cohort data management", "Global R&D collaboration"],
                link: "/services/rd-and-clinical-trial-portals/"
            },
            "carrier": {
                kicker: "HCP Portals",
                title: "Educate and empower providers.",
                text: "Gated portals for Healthcare Professionals (HCPs) to access clinical data, medical affairs resources, and secure sample ordering.",
                list: ["Gated clinical evidence", "Medical affairs resources", "Secure sample ordering"],
                link: "/services/hcp-and-medical-affairs-portals/"
            },
            "tracking": {
                kicker: "Patient Platforms",
                title: "Support patient adherence.",
                text: "Digital therapeutic platforms and companion apps that guide patients through complex treatment protocols and improve medication adherence.",
                list: ["Treatment protocol guides", "Medication adherence tracking", "Digital therapeutics"],
                link: "/services/patient-support-and-adherence-platforms/"
            },
            "analytics": {
                kicker: "Supply Dashboards",
                title: "Visibility from lab to patient.",
                text: "Executive dashboards tracking cold-chain logistics, manufacturing batch yields, and global regulatory submission statuses.",
                list: ["Cold-chain logistics tracking", "Batch yield analytics", "Regulatory submission tracking"],
                link: "/services/pharma-supply-chain-dashboards/"
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
