const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'medical-devices-diagnostics');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const clientScripts = `"use client";
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
                            listEl.innerHTML = data.list.map(item => \`<span>\${item}</span>\`).join("");
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
`;
fs.writeFileSync(path.join(dir, 'MedicalClientScripts.tsx'), clientScripts, 'utf8');

const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MedicalClientScripts from "./MedicalClientScripts";

export const metadata: Metadata = {
    title: "Medical Devices & Diagnostics Software Solutions | Hyperlink",
    description: "Secure, compliant portals, product catalogues, and diagnostic workflows for medical device manufacturers and clinical laboratories.",
    alternates: { canonical: "/industries/medical-devices-diagnostics/" }
};

export default function MedicalIndustryPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="saas-industry-page">
        
            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Medical Devices & Diagnostics</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Life Sciences Technology</p>
                            <h1>Software that bridges clinical and commercial outcomes.</h1>
                            <p className="hero-lead">From complex digital product catalogues to secure diagnostic reporting and connected equipment portals, we build digital infrastructure for medical device manufacturers and laboratories.</p>
                            <div className="hero-points">
                                <span>Design interactive, clinical-grade product catalogues</span>
                                <span>Build secure resource hubs for distributors and surgeons</span>
                                <span>Connect IoT diagnostic data to secure reporting workflows</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current product portal or laboratory workflow and we will identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free MedTech review</span>
                            <h2>Find the digital capability that needs attention first.</h2>
                            <p>Share your current product website, distributor portal, or diagnostic workflow. We will reply with a focused recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    compliance dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/medical-devices-diagnostics" /><input
                                    type="hidden" name="offer" value="free-industries/medical-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Medical Product Websites & Catalogues</option>
                                    <option>Professional & Distributor Resources</option>
                                    <option>Equipment & Service Portals</option>
                                    <option>Diagnostic & Laboratory Workflows</option>
                                    <option>Product & Service Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select>
                                <div className="success-message">Thanks—your request is ready. Connect this form to the
                                    existing API endpoint.</div><button className="btn primary" type="submit">Get My Free
                                    Review →</button>
                            </form>
                            <p className="privacy-note">Capabilities, integrations and regulated workflows depend on
                                approved scope, source data and secure hosting architectures.</p>
                        </aside>
                    </div>
                </div>
            </section>
            
            <section className="section" data-block-type="proofStrip">
                <div className="container">
                    <div className="trust-strip reveal">
                        <div className="trust-item"><strong>Regulatory Alignment</strong><span>Architectures compatible with FDA CFR 21 Part 11 requirements.</span></div>
                        <div className="trust-item"><strong>Secure Infrastructure</strong><span>End-to-end encryption for diagnostic and patient data.</span></div>
                        <div className="trust-item"><strong>IoT Connected</strong><span>Capable of integrating with connected medical devices.</span></div>
                        <div className="trust-item"><strong>B2B Complexity</strong><span>Managing complex distributor pricing and inventory hierarchies.</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Medical commercialization requires absolute accuracy and accessibility.</p>
                        </div>
                        <h2>Fix the friction that frustrates clinicians and delays diagnostics.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Static PDF product brochures.</h3>
                            <p>Surgeons and procurement officers struggle to understand complex equipment specifications through outdated, static PDFs.</p>
                            <span className="outcome">Outcome: Interactive web catalogues with 3D models and searchable clinical data.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Fragmented distributor training.</h3>
                            <p>Global distributors lack a centralized hub for up-to-date surgical guides, regulatory approvals, and training modules.</p>
                            <span className="outcome">Outcome: Secure, role-based resource portals for global partners.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Manual diagnostic reporting.</h3>
                            <p>Laboratories rely on manual data entry and disjointed systems to deliver test results back to referring clinics.</p>
                            <span className="outcome">Outcome: Automated diagnostic workflows with secure digital result delivery.</span>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section" id="solutions" data-block-type="solutionTabs">
                <div className="container">
                    <div className="solutions-shell">
                        <div className="solution-tabs reveal">
                            <p className="eyebrow" style={{"color":"#bfa8ff"}}>What we build</p>
                            <h2>Connected digital capabilities across the industry lifecycle.</h2>
                            <button className="solution-tab active" data-key="discovery"><span>01</span><span>Product Websites</span><span>→</span></button>
                            <button className="solution-tab" data-key="quoting"><span>02</span><span>Professional Resources</span><span>→</span></button>
                            <button className="solution-tab" data-key="carrier"><span>03</span><span>Equipment Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="tracking"><span>04</span><span>Diagnostic Workflows</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>Product Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy" style={{ transition: "opacity 0.3s ease-in-out" }}>
                                <span className="mini" id="solutionKicker">Medical Product Websites</span>
                                <h3 id="solutionTitle">Digital experiences that educate and convert.</h3>
                                <p id="solutionText">Modern medical device websites highlighting complex product capabilities with 3D models, rich technical specifications, and clinical outcome data.</p>
                                <div className="solution-list" id="solutionList">
                                    <span>Interactive 3D product viewing</span>
                                    <span>Technical specification sheets</span>
                                    <span>Clinical outcome highlights</span>
                                </div>
                                <Link className="btn" id="solutionLink" href="/services/medical-product-websites-and-catalogues/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Medical Product Websites</span>
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
                            <h2>A practical lifecycle from product discovery to clinical utilization.</h2>
                            <p>The platform provides clinicians with deep product knowledge, equips distributors with essential resources, and gives manufacturers visibility into field performance.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>Product Discovery</strong><small>Interactive catalogues, surgical technique videos, and compliance data.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>Distributor Enablement</strong><small>Secure portals for quoting, bulk ordering, and territory management.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Operational Control</strong><small>Maintenance tracking, IoT data analytics, and diagnostic reporting.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>React/Next.js</span><span>Secure APIs</span><span>Auth0/CIAM</span><span>3D/WebGL</span><span>ERP Integrations</span></div>
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
                        <h2>A practical route from fragmented data to connected platforms.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand clinical users and regulatory needs.</h3>
                            <p>Review target audiences (surgeons, procurement, lab techs) and strict regulatory requirements (FDA, HIPAA, GDPR) affecting data presentation.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, security and integrations.</h3>
                            <p>Map out complex product hierarchies, determine access control levels for distributors, and design secure API middleware for IoT or ERP connections.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop interactive frontends, secure partner portals, and the backend infrastructure required for compliant data handling.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with clear compliance documentation.</h3>
                            <p>Ensure all systems meet pre-defined validation criteria, train internal teams, and deploy with robust analytics for continuous improvement.</p>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="childIndustryGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Industry categories</p>
                            <p>Explore the domain closest to your organisation.</p>
                        </div>
                        <h2>Different medical products require tailored digital solutions.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Surgical & Implant Devices</h3>
                            <p>Focusing on 3D surgical technique guides, detailed specification catalogues, and clinician training hubs.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Capital Medical Equipment</h3>
                            <p>Requiring ROI calculators, facility planning tools, and robust field service/maintenance portals.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>In-Vitro Diagnostics & Labs</h3>
                            <p>Needing secure diagnostic result reporting, LIS (Laboratory Information System) integrations, and sample tracking.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Wearables & Connected Health</h3>
                            <p>Handling high-frequency IoT data streams, patient-facing dashboards, and clinical API endpoints.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Medical Consumables</h3>
                            <p>Focusing on high-volume B2B eCommerce, distributor bulk ordering, and inventory management integrations.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Dental & Orthodontic Tech</h3>
                            <p>Requiring custom fabrication workflows, treatment planning software interfaces, and practice portals.</p><span>Discuss category</span>
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
                        <div className="faq-item open"><button className="faq-question"><span>Can you integrate the distributor portal with our ERP system?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>Yes. We build secure middleware to connect your custom frontend with legacy ERPs (like SAP or Oracle) to ensure real-time inventory, pricing, and order status are reflected accurately.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you handle software that is classified as a Medical Device (SaMD)?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Our primary focus is on the commercial, operational, and informational layers surrounding the device (catalogues, portals, dashboards). For strict SaMD acting as a diagnostic tool, we partner with specialized regulatory teams to ensure QMS and CFR 21 Part 11 compliance.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you visualize complex products in 3D on the web?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. We utilize WebGL and modern libraries like Three.js to render highly detailed, interactive 3D models of surgical tools or capital equipment directly in the browser without requiring plugins.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>How do you handle restricted clinical content?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>We implement robust Customer Identity and Access Management (CIAM) solutions. This ensures that surgical guides, pricing, or off-label clinical data are strictly gated and only accessible to verified clinicians or distributors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a MedTech project?</p>
                            <h2>Tell us what your clinical users and distributors need next.</h2>
                            <p>Use this form for a new product catalogue, distributor portal, or diagnostic workflow.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/medical-devices-diagnostics" /><input type="hidden" name="offer"
                                value="industries/medical-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Medical Product Websites & Catalogues</option>
                                    <option>Professional & Distributor Resources</option>
                                    <option>Equipment & Service Portals</option>
                                    <option>Diagnostic & Laboratory Workflows</option>
                                    <option>Product & Service Dashboards</option>
                                    <option>Existing platform redesign</option>
                                </select></div>
                            <div className="field full"><label>Project details</label><textarea name="message"
                                    placeholder="Target users, integration dependencies, and timeline"></textarea>
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
      <MedicalClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Medical Industry Page Generated successfully!");
