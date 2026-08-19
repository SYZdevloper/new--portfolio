const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'marketing-creative-bpo-support-services');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const clientScripts = `"use client";
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
                    entry.target.classList.add("active");
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
        const solutionCopy = document.querySelector(".solution-copy");
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
                            listEl.innerHTML = data.list.map(item => \`<span>\${item}</span>\`).join("");
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
`;
fs.writeFileSync(path.join(dir, 'MarketingBPOClientScripts.tsx'), clientScripts, 'utf8');

const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import "../industry-template.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MarketingBPOClientScripts from "./MarketingBPOClientScripts";

export const metadata: Metadata = {
    title: "Marketing, Creative, BPO & Support Services Software Solutions | Hyperlink",
    description: "B2B digital platforms, custom client portals, DAMs, and workflow tools for marketing agencies, creative studios, and BPOs.",
    alternates: { canonical: "/industries/marketing-creative-bpo-support-services/" }
};

export default function MarketingBPOIndustryPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="saas-industry-page">
        
            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Marketing & BPO</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Agency & Support Technology</p>
                            <h1>Software that scales your creative operations.</h1>
                            <p className="hero-lead">From client collaboration portals and digital asset managers to automated BPO dashboards, we build the digital infrastructure that drives service efficiency and protects your margins.</p>
                            <div className="hero-points">
                                <span>Automate client onboarding and creative briefing via secure portals</span>
                                <span>Centralize visual feedback loops and asset reviews away from email</span>
                                <span>Track true account profitability with integrated time and billing tools</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current workflow or platform idea and we will
                                identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Agency Tech review</span>
                            <h2>Find the digital journey that needs attention first.</h2>
                            <p>Share your current platform, workflow or project idea. We will reply with a focused
                                recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    integration dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/marketing-creative-bpo-support-services" /><input
                                    type="hidden" name="offer" value="free-industries/marketing-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Agency/Firm name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Agency & Studio Websites</option>
                                    <option>Client Intake & Briefing</option>
                                    <option>Collaboration & Review Portals</option>
                                    <option>Resource & Asset Management</option>
                                    <option>BPO & Agency Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing API endpoint.</div><button className="btn primary" type="submit">Get My Free
                                    Review →</button>
                            </form>
                            <p className="privacy-note">Capabilities, integrations and regulated workflows depend on
                                approved scope, source data and responsible providers.</p>
                        </aside>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="proofStrip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Industry-specific logic</strong><span>Portals adapt to video vs. print briefing requirements seamlessly.</span></div>
                        <div className="trust-item"><strong>Roles connected</strong><span>Creatives, account managers, and clients interact in one place.</span></div>
                        <div className="trust-item"><strong>Operations included</strong><span>Feedback, approvals, and timesheets remain entirely visible.</span></div>
                        <div className="trust-item"><strong>Integration-aware</strong><span>Seamless connections to Asana, Monday.com, and Harvest.</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Service delivery requires alignment and absolute visibility.</p>
                        </div>
                        <h2>Fix the friction that slows production and frustrates clients.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Messy client briefs destroy project margins.</h3>
                            <p>Account managers waste billable hours chasing clients for correct logos and strategy documents because they use unstructured email chains.</p>
                            <span className="outcome">Outcome: Automated digital intake flows driving straight into Monday.com.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Feedback loops get lost in translation.</h3>
                            <p>Clients send vague feedback like "make it pop" via email, forcing designers to guess which frame of a video they are talking about.</p>
                            <span className="outcome">Outcome: Secure review portals with time-stamped visual annotations.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>BPO teams struggle with SLA visibility.</h3>
                            <p>Support centers miss critical ticket deadlines because agents are working across three disconnected legacy software systems.</p>
                            <span className="outcome">Outcome: Unified 'Control Tower' dashboards highlighting SLA risks instantly.</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the agency lifecycle.</h2>
                            <button className="solution-tab active" data-key="discovery"><span>01</span><span>Agency & Studio Websites</span><span>→</span></button>
                            <button className="solution-tab" data-key="quoting"><span>02</span><span>Client Intake & Briefing</span><span>→</span></button>
                            <button className="solution-tab" data-key="carrier"><span>03</span><span>Collaboration & Review Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="tracking"><span>04</span><span>Resource & Asset Management</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>BPO & Agency Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy" style={{ transition: "opacity 0.3s ease-in-out" }}>
                                <span className="mini" id="solutionKicker">Agency Websites</span>
                                <h3 id="solutionTitle">Digitally showcase your creative portfolio.</h3>
                                <p id="solutionText">Visually stunning, high-performance portfolios and marketing sites that showcase creative work and capture high-value enterprise leads.</p>
                                <div className="solution-list" id="solutionList">
                                    <span>Immersive WebGL sections</span>
                                    <span>Dynamic case studies</span>
                                    <span>Headless CMS architecture</span>
                                </div>
                                <Link className="btn" id="solutionLink" href="/services/agency-and-studio-websites/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Agency Websites</span>
                                </div>
                                <div className="ui-body">
                                    <div className="ui-side"><i></i><i></i><i></i><i></i><i></i></div>
                                    <div className="ui-main">
                                        <div className="ui-title"></div>
                                        <div className="ui-stats"><span></span><span></span><span></span></div>
                                        <div className="ui-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" id="work" data-block-type="platformBlueprint">
                <div className="container">
                    <div className="case-study">
                        <div className="case-visual">
                            <div className="case-browser">
                                <div className="case-browser-top"></div>
                                <div className="case-browser-body">
                                    <div className="case-browser-main"></div>
                                    <div className="case-browser-side"><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="case-copy">
                            <p className="eyebrow">Connected platform blueprint</p>
                            <h2>A practical lifecycle from client brief to final asset handover.</h2>
                            <p>The platform gives clients a premium onboarding experience, provides creatives with structured feedback loops, and empowers operations teams with live profitability tracking.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Client experience</strong><small>Digital briefing, secure visual annotations, and self-serve final asset downloads.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Creative workspace</strong><small>Asset managers, version control, and PM tool syncing (Asana, Monday.com).</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Executive control</strong><small>Utilization dashboards, margin tracking, and automated SLA reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>React/Next.js</span><span>AWS S3</span><span>Auth0</span><span>Data Visualization</span><span>Integrations</span></div>
                            <a className="btn primary" href="#project-enquiry">Discuss Your Project →</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="process">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">How the project moves</p>
                            <p>Users, data and integration dependencies remain visible throughout delivery.</p>
                        </div>
                        <h2>A practical route from messy emails to a scalable digital agency.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand users, workflows and outcomes.</h3>
                            <p>Review target audiences, file size constraints, PM tool architectures, and success measures.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, logic and integrations.</h3>
                            <p>Map out exactly how user roles are managed, how APIs will hit Monday.com, and how cloud storage is architected.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop headless portals, secure digital asset vaults, and the complex feedback canvas logic.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with clear ownership.</h3>
                            <p>Document the integration layer, train the account managers, and optimize based on actual client usage.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="childIndustryGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Industry categories</p>
                            <p>Explore the business model closest to your organisation.</p>
                        </div>
                        <h2>Different service models require tailored digital journeys.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Creative & Digital Agencies</h3>
                            <p>Focusing on visual collaboration, rapid asset feedback loops, and premium client portals.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>PR & Communications</h3>
                            <p>Requiring rapid media monitoring dashboards and secure portals for crisis management documents.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>BPO & Customer Support</h3>
                            <p>Needing high-volume ticket routing, automated QA dashboards, and strict SLA compliance tools.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Market Research & Data</h3>
                            <p>Handling massive datasets, survey tools, and interactive BI dashboards for client reporting.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Managed IT Services (MSP)</h3>
                            <p>Requiring seamless RMM integrations, ticketing portals, and real-time infrastructure status pages.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
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
                            <h2>Tell us what your clients, creative teams and operations need next.</h2>
                            <p>Use this form for a new agency website, collaboration portal, DAM, or BPO dashboard.</p>
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
                                    →</button></div>
                        </form>
                    </div>
                </div>
            </section>
        
      </main>

      <SiteFooter />
      <MarketingBPOClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Marketing & BPO Industry Page v4 Generated successfully!");
