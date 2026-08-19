const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'marketing-creative-bpo-support-services');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const clientScripts = `"use client";

import { useEffect } from "react";

export default function MarketingCreativeBpoSupportServicesClientScripts() {
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
                    entry.target.classList.add("active");
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => observer.observe(el));

        // FAQ Toggle Logic
        const faqQuestions = document.querySelectorAll(".faq-question");
        faqQuestions.forEach(question => {
            question.addEventListener("click", () => {
                const parent = question.parentElement;
                
                // Close other open items
                document.querySelectorAll(".faq-item").forEach(item => {
                    if (item !== parent) {
                        item.classList.remove("open");
                        const icon = item.querySelector(".faq-question span:last-child");
                        if(icon) icon.textContent = "+";
                    }
                });

                // Toggle current item
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
        };
    }, []);

    return null;
}
`;
fs.writeFileSync(path.join(dir, 'MarketingCreativeBpoSupportServicesClientScripts.tsx'), clientScripts, 'utf8');

const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MarketingCreativeBpoSupportServicesClientScripts from "./MarketingCreativeBpoSupportServicesClientScripts";

export const metadata: Metadata = {
    title: "Marketing, Creative, BPO & Support Services | Hyperlink Tech Solutions",
    description: "We build custom software, client portals, and workflow tools for marketing agencies, creative studios, and BPO service providers.",
    alternates: { canonical: "/industries/marketing-creative-bpo-support-services/" }
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="industry-layout">
        
            <section className="hero" data-block-type="hero">
                <nav className="industry-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/industries/">Industries</Link><span>›</span>
                    <strong>Marketing & BPO</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Marketing, Creative & BPO Software</div>
                        <h1>Software that scales your agency operations.</h1>
                        <p className="hero-lead">From client collaboration portals and digital asset managers to automated BPO dashboards, we build the digital infrastructure that drives service efficiency and protects your margins.</p>
                        
                        <div className="hero-actions">
                            <a className="btn primary" href="#project-enquiry">Discuss Your Roadmap <span className="arrow">↗</span></a>
                            <a className="btn" href="#capabilities">Explore Capabilities</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="capabilities" id="capabilities">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Connected digital capabilities</p>
                            <p>End-to-end digital solutions for service providers.</p>
                        </div>
                        <h2>Streamline the entire creative and support lifecycle.</h2>
                    </div>
                    <div className="capability-grid">
                        <div className="capability-card reveal">
                            <div className="cap-num">01</div>
                            <h3>Agency & Studio Websites</h3>
                            <p>Visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.</p>
                            <Link href="/services/agency-and-studio-websites/" className="cap-link">Explore Websites ↗</Link>
                        </div>

                        <div className="capability-card reveal">
                            <div className="cap-num">02</div>
                            <h3>Client Intake & Briefing</h3>
                            <p>Dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins.</p>
                            <Link href="/services/client-intake-and-briefing/" className="cap-link">Explore Intake ↗</Link>
                        </div>

                        <div className="capability-card reveal">
                            <div className="cap-num">03</div>
                            <h3>Collaboration & Review Portals</h3>
                            <p>Secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback without messy email chains.</p>
                            <Link href="/services/collaboration-and-review-portals/" className="cap-link">Explore Portals ↗</Link>
                        </div>

                        <div className="capability-card reveal">
                            <div className="cap-num">04</div>
                            <h3>Resource & Asset Management</h3>
                            <p>Internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets (DAM).</p>
                            <Link href="/services/resource-and-asset-management/" className="cap-link">Explore DAM ↗</Link>
                        </div>

                        <div className="capability-card reveal">
                            <div className="cap-num">05</div>
                            <h3>BPO & Agency Dashboards</h3>
                            <p>Executive reporting tools providing real-time visibility into account profitability, staff utilization, and SLA compliance.</p>
                            <Link href="/services/bpo-and-agency-dashboards/" className="cap-link">Explore Analytics ↗</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="categories" id="sub-sectors">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Service sub-sectors</p>
                            <p>Specialized solutions for specific service models.</p>
                        </div>
                        <h2>Different service models require tailored digital journeys.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Creative & Digital Agencies</h3>
                            <p>Focusing on visual collaboration, rapid asset feedback loops, and premium client portals.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>PR & Communications</h3>
                            <p>Requiring rapid media monitoring dashboards and secure portals for crisis management documents.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>BPO & Customer Support</h3>
                            <p>Needing high-volume ticket routing, automated QA dashboards, and strict SLA compliance tools.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Market Research & Data</h3>
                            <p>Handling massive datasets, survey tools, and interactive BI dashboards for client reporting.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Managed IT Services (MSP)</h3>
                            <p>Requiring seamless RMM integrations, ticketing portals, and real-time infrastructure status pages.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>↗</b>
                            <h3>Production & Media Studios</h3>
                            <p>Focusing on massive file transfers, cloud rendering orchestration, and strict IP security.</p><span>Discuss category</span>
                        </a>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="faq" id="faq">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Frequently asked</p>
                            <p>Important questions before starting the project.</p>
                        </div>
                        <h2>Clear answers before you build.</h2>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item open"><button className="faq-question"><span>Can you integrate portals with tools like Asana, Monday.com, or Jira?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. We build custom API middleware that securely connects your custom client-facing portal directly into your internal project management software, avoiding double data entry.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle massive file uploads for video production agencies?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We integrate specialized cloud storage architecture (like AWS S3 with Transfer Acceleration) directly into the portal, allowing gigabytes of raw footage to be securely uploaded without timeouts.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build a dashboard that tracks our actual profitability per account?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes, we can pipe data from your timesheet software (like Harvest) and your billing software (like Xero) into a unified dashboard to show your true realization rate and margin per client.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you build SLA monitoring tools for BPOs?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Absolutely. We build live "Control Towers" that ingest ticket data from Zendesk or ServiceNow, visually alerting managers immediately if a high-priority ticket is about to breach its Service Level Agreement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Marketing or BPO project?</p>
                            <h2>Tell us what your clients and creative teams need next.</h2>
                            <p>Use this form for a new agency website, client collaboration portal, DAM, or BPO dashboard.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/marketing-creative-bpo-support-services" /><input type="hidden" name="offer"
                                value="industries/marketing-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Agency or Firm name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Agency & Studio Websites</option>
                                    <option>Client Intake & Briefing</option>
                                    <option>Collaboration & Review Portals</option>
                                    <option>Resource & Asset Management</option>
                                    <option>BPO & Agency Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Users, workflows, CRM/PM systems and timeline"></textarea>
                            </div>
                            <div className="success-message">Thanks—your enquiry is ready. Connect this form to the existing
                                API endpoint.</div>
                            <div className="field full"><button className="btn" type="submit">Request a Project Proposal
                                    ↗</button></div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <MarketingCreativeBpoSupportServicesClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Marketing & BPO Industry Page Generated successfully!");
