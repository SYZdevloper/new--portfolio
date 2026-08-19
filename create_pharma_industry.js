const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'industries', 'pharmaceuticals-biotechnology');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const clientScripts = `"use client";
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
fs.writeFileSync(path.join(dir, 'PharmaClientScripts.tsx'), clientScripts, 'utf8');

const pageTsx = `import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PharmaClientScripts from "./PharmaClientScripts";

export const metadata: Metadata = {
    title: "Pharmaceuticals & Biotechnology Software Solutions | Hyperlink",
    description: "Secure, compliant web portals, clinical trial platforms, and patient adherence tools for pharmaceutical and biotech companies.",
    alternates: { canonical: "/industries/pharmaceuticals-biotechnology/" }
};

export default function PharmaIndustryPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="saas-industry-page">
        
            <section className="hero" data-block-type="hero" data-block-id="industry-hero">
                <div className="container">
                    <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a
                            href="/industries/">Industries</a><span>/</span><strong>Pharmaceuticals & Biotechnology</strong></div>
                    <div className="hero-grid">
                        <div className="hero-copy reveal">
                            <p className="eyebrow">Life Sciences Technology</p>
                            <h1>Software that accelerates the path to patients.</h1>
                            <p className="hero-lead">From clinical trial recruitment and R&D collaboration portals to strict regulatory compliance dashboards and patient support platforms, we build digital infrastructure for modern life sciences.</p>
                            <div className="hero-points">
                                <span>Design global, compliant corporate and product websites</span>
                                <span>Build secure R&D portals for clinical data management</span>
                                <span>Connect patients and HCPs with digital adherence tools</span>
                            </div>
                            <div className="hero-actions"><a className="btn primary" href="#free-review">Get a Free Industry
                                    Review →</a><a className="btn" href="#solutions">Explore Solutions</a></div>
                            <p className="microcopy">No obligation. Share your current clinical workflow or digital patient journey and we will identify a practical first-release opportunity.</p>
                        </div>
                        <aside className="review-card reveal-right" id="free-review"><span className="review-badge">Free Pharma Tech review</span>
                            <h2>Find the digital capability that needs attention first.</h2>
                            <p>Share your current patient platform, R&D portal, or compliance challenge. We will reply with a focused recommendation.</p>
                            <div className="review-deliverables"><span>Current journey
                                    observations</span><span>Highest-priority opportunity</span><span>Key data and
                                    regulatory dependencies</span></div>
                            <form className="compact-form js-demo-form" action="/api/leads" method="post"><input
                                    type="hidden" name="source_page" value="industries/pharmaceuticals-biotechnology" /><input
                                    type="hidden" name="offer" value="free-industries/pharma-review" /><input
                                    name="email" type="email" required={true} placeholder="Work email *" /><input name="company"
                                    required={true} placeholder="Company name *" /><select name="goal">
                                    <option>Primary requirement</option>
                                    <option>Pharmaceutical Corporate Websites</option>
                                    <option>R&D & Clinical Trial Portals</option>
                                    <option>HCP & Medical Affairs Portals</option>
                                    <option>Patient Support & Adherence Platforms</option>
                                    <option>Pharma Supply Chain Dashboards</option>
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
                        <div className="trust-item"><strong>Regulatory Alignment</strong><span>Architectures compatible with HIPAA, GDPR, and FDA guidelines.</span></div>
                        <div className="trust-item"><strong>Secure Infrastructure</strong><span>End-to-end encryption for clinical and patient data.</span></div>
                        <div className="trust-item"><strong>Global Scalability</strong><span>Multi-region deployments with localized compliance controls.</span></div>
                        <div className="trust-item"><strong>Identity Management</strong><span>Strict role-based access for HCPs and researchers.</span></div>
                    </div>
                </div>
            </section>
            
            <section className="section soft" data-block-type="painOutcomeGrid">
                <div className="container">
                    <div className="section-head reveal">
                        <div>
                            <p className="eyebrow">Where digital journeys break</p>
                            <p>Life sciences require absolute accuracy, security, and global compliance.</p>
                        </div>
                        <h2>Fix the friction that delays trials and frustrates patients.</h2>
                    </div>
                    <div className="problem-grid">
                        <article className="problem-card reveal-zoom"><span className="problem-num">01</span>
                            <h3>Siloed clinical trial data.</h3>
                            <p>Researchers struggle to aggregate cohort data from multiple disparate clinics, delaying the R&D pipeline.</p>
                            <span className="outcome">Outcome: Unified R&D portals for secure, centralized trial data collection.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">02</span>
                            <h3>Poor patient adherence.</h3>
                            <p>Patients abandon complex biological treatments because they lack clear guidance and side-effect management tools.</p>
                            <span className="outcome">Outcome: Companion digital platforms that guide patients through their treatment.</span>
                        </article>
                        <article className="problem-card reveal-zoom"><span className="problem-num">03</span>
                            <h3>Fragmented HCP engagement.</h3>
                            <p>Doctors cannot easily access the latest clinical evidence, relying on outdated materials and slow MSL responses.</p>
                            <span className="outcome">Outcome: Secure, gated HCP portals containing real-time medical affairs resources.</span>
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
                            <button className="solution-tab active" data-key="discovery"><span>01</span><span>Corporate Websites</span><span>→</span></button>
                            <button className="solution-tab" data-key="quoting"><span>02</span><span>Clinical Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="carrier"><span>03</span><span>HCP Portals</span><span>→</span></button>
                            <button className="solution-tab" data-key="tracking"><span>04</span><span>Patient Platforms</span><span>→</span></button>
                            <button className="solution-tab" data-key="analytics"><span>05</span><span>Supply Dashboards</span><span>→</span></button>
                        </div>
                        <div className="solution-panel reveal-right">
                            <div className="solution-copy" style={{ transition: "opacity 0.3s ease-in-out" }}>
                                <span className="mini" id="solutionKicker">Corporate Websites</span>
                                <h3 id="solutionTitle">Build global corporate trust.</h3>
                                <p id="solutionText">Enterprise websites for pharmaceutical companies that balance investor relations, scientific innovation, and global regulatory compliance.</p>
                                <div className="solution-list" id="solutionList">
                                    <span>Investor relations portals</span>
                                    <span>Scientific pipeline showcases</span>
                                    <span>Global compliance architecture</span>
                                </div>
                                <Link className="btn" id="solutionLink" href="/services/pharmaceutical-corporate-websites/">Discuss this capability →</Link>
                            </div>
                            <div className="ui-window" aria-hidden="true">
                                <div className="ui-top">
                                    <div className="ui-dots"><i></i><i></i><i></i></div><span className="ui-badge"
                                        id="uiBadge">Corporate Websites</span>
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
                            <h2>A practical lifecycle from clinical R&D to patient outcome.</h2>
                            <p>The platform provides researchers with secure collaboration tools, equips HCPs with essential medical data, and gives patients the resources to adhere to treatment.</p>
                            <div className="case-features">
                                <div className="case-feature"><span>01</span>
                                    <div><strong>R&D Enablement</strong><small>Clinical trial recruitment portals, data ingestion APIs, and cohort tracking.</small></div>
                                </div>
                                <div className="case-feature"><span>02</span>
                                    <div><strong>HCP Engagement</strong><small>Secure portals for clinical evidence, sample ordering, and medical affairs.</small></div>
                                </div>
                                <div className="case-feature"><span>03</span>
                                    <div><strong>Patient Support</strong><small>Digital adherence tools, symptom tracking, and companion applications.</small></div>
                                </div>
                            </div>
                            <div className="case-stack"><span>React/Next.js</span><span>Secure APIs</span><span>Auth0/CIAM</span><span>Data Security</span><span>Cloud Compliance</span></div>
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
                        <h2>A practical route from complex requirements to compliant platforms.</h2>
                    </div>
                    <div className="process-grid">
                        <article className="process-step"><span>01 · DISCOVER</span>
                            <h3>Understand clinical users and regulatory needs.</h3>
                            <p>Review target audiences (patients, HCPs, researchers) and strict regulatory constraints regarding off-label promotion and data privacy.</p>
                        </article>
                        <article className="process-step"><span>02 · STRUCTURE</span>
                            <h3>Define taxonomy, security and compliance.</h3>
                            <p>Map out secure data flows for patient information, determine identity verification protocols for HCP portals, and establish audit trails.</p>
                        </article>
                        <article className="process-step"><span>03 · BUILD & INTEGRATE</span>
                            <h3>Create the product in focused milestones.</h3>
                            <p>Develop accessible frontends, secure CIAM integrations, and the backend infrastructure required for compliant clinical data handling.</p>
                        </article>
                        <article className="process-step"><span>04 · LAUNCH & IMPROVE</span>
                            <h3>Release with strict validation protocols.</h3>
                            <p>Ensure all systems meet pre-defined validation criteria, execute security penetration testing, and deploy with robust monitoring.</p>
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
                        <h2>Different scientific domains require tailored digital solutions.</h2>
                    </div>
                    <div className="category-grid">
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Biopharmaceuticals</h3>
                            <p>Focusing on complex biologic therapies, specialized patient adherence tools, and highly regulated HCP engagement.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Clinical Research Organizations (CROs)</h3>
                            <p>Requiring trial recruitment portals, secure investigator collaboration hubs, and decentralized trial (DCT) platforms.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Genomics & Precision Medicine</h3>
                            <p>Needing secure platforms to visualize complex genetic data, generate personalized reports, and integrate with bioinformatics pipelines.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Animal Health</h3>
                            <p>Handling veterinary professional portals, farm/herd health tracking apps, and consumer pet health platforms.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Digital Therapeutics (DTx)</h3>
                            <p>Focusing on software-as-a-medical-device (SaMD), behavior modification algorithms, and clinical efficacy tracking.</p><span>Discuss category</span>
                        </a>
                        <a className="category-card" href="#project-enquiry"><b>→</b>
                            <h3>Nutraceuticals</h3>
                            <p>Requiring high-volume consumer eCommerce, science-backed product education hubs, and personalized supplement quizzes.</p><span>Discuss category</span>
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
                        <div className="faq-item open"><button className="faq-question"><span>How do you handle verifying Healthcare Professionals (HCPs)?</span><span>−</span></button>
                            <div className="faq-answer">
                                <p>We integrate with specialized identity providers and databases (like MedPro or OneKey) to programmatically verify an HCP’s credentials before granting them access to restricted medical affairs content.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Are your patient adherence apps HIPAA / GDPR compliant?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Yes. Any platform handling Protected Health Information (PHI) is architected from the ground up for compliance, featuring data encryption at rest, secure transit, and strict audit logging.</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Can you build portals for clinical trial recruitment?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>Absolutely. We build accessible, user-friendly recruitment landing pages featuring pre-screening logic, secure consent capture, and integrations with backend clinical trial management systems (CTMS).</p>
                            </div>
                        </div>
                        <div className="faq-item reveal"><button className="faq-question"><span>Do you build software that counts as a Medical Device (SaMD)?</span><span>+</span></button>
                            <div className="faq-answer">
                                <p>For applications classified as Digital Therapeutics (DTx) or SaMD, we follow strict software development lifecycles (IEC 62304) and partner with regulatory specialists to ensure the code passes FDA/EMA clearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="final-cta" id="project-enquiry">
                <div className="container">
                    <div className="final-box">
                        <div className="final-copy">
                            <p className="eyebrow" style={{"color":"#cdbdff"}}>Have a Pharma or Biotech project?</p>
                            <h2>Tell us what your clinical teams and patients need next.</h2>
                            <p>Use this form for a new HCP portal, clinical trial platform, or patient adherence application.</p>
                        </div>
                        <form className="full-form js-demo-form" action="/api/leads" method="post"><input type="hidden"
                                name="source_page" value="industries/pharmaceuticals-biotechnology" /><input type="hidden" name="offer"
                                value="industries/pharma-project-proposal" />
                            <div className="field"><label>Name *</label><input name="name" required={true} placeholder="Your name" />
                            </div>
                            <div className="field"><label>Work email *</label><input name="email" type="email" required={true}
                                    placeholder="you@company.com" /></div>
                            <div className="field"><label>Company</label><input name="company" placeholder="Company name" />
                            </div>
                            <div className="field"><label>Primary requirement</label><select name="requirement">
                                    <option>Pharmaceutical Corporate Websites</option>
                                    <option>R&D & Clinical Trial Portals</option>
                                    <option>HCP & Medical Affairs Portals</option>
                                    <option>Patient Support & Adherence Platforms</option>
                                    <option>Pharma Supply Chain Dashboards</option>
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
      <PharmaClientScripts />
    </>
  );
}
`;
fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

console.log("Pharma Industry Page Generated successfully!");
