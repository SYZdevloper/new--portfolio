const fs = require('fs');
const path = require('path');

const directory = path.join('d:', 'new website', 'hyperlink-nextjs-app-router', 'app', 'services');

const template = (slug, data) => `import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/${slug}/" },
  title: "${data.metaTitle} | Hyperlink Tech Solutions",
  description: "${data.lead}",
};

export default function Page() {
  return (
    <>
      <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>${data.eyebrow}</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">${data.status}</div>
                        <p className="eyebrow">${data.eyebrow}</p>
                        <h1 id="service-title">${data.h1}</h1>
                        <p className="hero-lead">${data.lead}</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>${data.points[0]}</li>
                            <li>${data.points[1]}</li>
                            <li>${data.points[2]}</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        ${data.proof.map(p => `
                        <div className="proof-item">
                            <small>${p[0]}</small>
                            <strong>${p[1]}</strong>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">${data.problemsIntro.eyebrow}</p>
                        <p>${data.problemsIntro.asideLead}</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>${data.problemsIntro.title}</h2>
                        <p>${data.problemsIntro.mainLead}</p>

                        <div className="problem-grid">
                            ${data.problems.map((p, i) => `
                            <article className="problem-card">
                                <span className="problem-card-number">0${i+1}</span>
                                <h3>${p[0]}</h3>
                                <p>${p[1]}</p>
                            </article>`).join("")}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section soft" id="included">
                <div className="container">
                    <div className="solution-shell">
                        <div className="solution-head">
                            <div>
                                <p className="eyebrow" style={{color: "#d8c2ff"}}>The deliverables</p>
                                <h2>${data.deliverablesIntro.title}</h2>
                            </div>
                            <p>${data.deliverablesIntro.lead}</p>
                        </div>

                        <div className="deliverable-grid">
                            ${data.deliverables.map((d, i) => `
                            <article className="deliverable-card">
                                <span>0${i+1} · Core</span>
                                <h3>${d[0]}</h3>
                                <p>${d[1]}</p>
                                <div className="deliverable-tags"><small>${d[2]}</small><small>${d[3]}</small><small>${d[4]}</small></div>
                            </article>`).join("")}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Practice Platform</p>
                            <h2>Modernizing client intake.</h2>
                        </div>
                        <p>See how we helped a commercial law firm digitize their archaic, paper-based client onboarding process, allowing them to collect sensitive data securely and run automated conflict checks via API before the first meeting.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>LegalTech</span>
                                <span>Client Intake</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/professional-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant onboarding.</h2>
                                <p>We developed a highly secure application flow that intelligently adapts based on the client type. It automatically securely collects identification documents and pushes the sanitized data directly into their Practice Management System, eliminating manual data entry.</p>
                            </div>
                            <a className="btn primary" href="/work/">View All Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about professional tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure attorney-client privilege and data security?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure all data and documents are encrypted at rest (AES-256) and in transit, and architect secure vaults that bypass standard email protocols completely.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Practice Management Systems (e.g., Clio, Actionstep, Xero)?</summary>
                            <p>Yes. We build secure API middleware to connect your modern web frontend directly to your core practice software. This allows us to push new client data, pull matter statuses, and sync billing information without manual double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you handle complex digital signatures?</summary>
                            <p>Yes. We integrate directly with platforms like DocuSign or HelloSign via API, allowing you to automatically generate complex engagement letters or tax documents and prompt the client to sign them securely within the portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other practice capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/professional-service-websites/"><div><small>Discovery</small><h3>Practice Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/consultation-and-client-intake/"><div><small>Conversion</small><h3>Client Intake</h3><p>Secure digital onboarding.</p></div><b>Explore intake ↗</b></a>
                        <a className="related-card" href="/services/secure-client-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/matter-and-compliance-workflows/"><div><small>Operations</small><h3>Matter Workflows</h3><p>Empower the practice.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services practice. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital client intake flows to highly secure document portals and realization dashboards, we build software that drives billable efficiency and protects your firm's data.</p>
                        <a className="btn" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>
    </>
  );
}
`;

const pages = {
  "professional-service-websites": {
    metaTitle: "Professional Service Websites",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your professional expertise.",
    lead: "We design premium, high-trust websites for law firms, accounting practices, and specialized consultancies that establish industry authority and clearly articulate complex service offerings.",
    status: "Professional Websites",
    points: [
      "Premium, typography-led digital design that conveys institutional stability and intellectual rigor",
      "Dynamic partner and practitioner directories allowing clients to easily find specific legal or financial experts",
      "Headless CMS setups allowing marketing teams to launch new practice areas or publish thought leadership instantly"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that justify premium billing rates to enterprise clients."],
      ["02 · Complex Clarity", "Translate dense legal or financial methodologies into easily digestible visual service pages."],
      ["03 · SEO Optimized", "Structure that ranks highly for niche, high-value B2B search terms (e.g., 'Corporate Restructuring Tax')."],
      ["04 · Marketing Agility", "Empower your team to update partner bios and publish insights without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the firm",
      asideLead: "If a General Counsel cannot quickly understand your firm's unique methodology, they will hire a competitor.",
      title: "Poor digital presentation devalues your expertise.",
      mainLead: "Professional services are built on intellectual capital and trust. If a prospective enterprise client lands on an outdated website with dense walls of text, broken partner directories, and generic stock photos, they will assume your advisory services are equally uninspired. They need immediate confidence in your capability to solve their complex problems."
    },
    problems: [
      ["Academic Clutter", "The website reads like a textbook, failing to quickly communicate the actual business value of your services to a busy executive."],
      ["Slow Performance", "Your website feels outdated and sluggish, undermining trust in your firm's ability to handle modern business challenges."],
      ["Developer Bottlenecks", "Marketing is unable to announce the hiring of a new Partner without waiting weeks for IT support."]
    ],
    deliverablesIntro: {
      title: "Digital flagships for advisory firms.",
      lead: "We build decoupled frontend experiences that prioritize trust, intellectual clarity, and uncompromising speed."
    },
    deliverables: [
      ["Headless Architecture", "Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.", "React", "Headless", "Security"],
      ["Dynamic Service Architecture", "Building structured taxonomies that interlink Partner Profiles, Case Studies, and specific Services intelligently.", "UX", "SEO", "Architecture"],
      ["Premium UI Design", "Crafting bespoke interfaces that rely on negative space, elegant typography, and subtle micro-interactions to convey prestige.", "Design", "UI", "Brand"],
      ["Global Edge Hosting", "Deployment on Vercel to ensure your site loads instantly for prospective clients worldwide.", "DevOps", "Performance", "Scale"]
    ]
  },
  "consultation-and-client-intake": {
    metaTitle: "Consultation & Client Intake",
    eyebrow: "Conversion & Compliance",
    h1: "Frictionless client onboarding.",
    lead: "We engineer secure digital intake flows integrating conflict checks and dynamic data collection, allowing new clients to securely provide sensitive information before the first meeting.",
    status: "Digital Intake",
    points: [
      "Custom React-based application flows that eliminate the need for printing massive PDF intake forms",
      "Dynamic logic that adapts the question set based on the specific matter type (e.g., Family Law vs. Commercial Property)",
      "Live API integrations with your Practice Management System to instantly push data and trigger automated conflict-of-interest checks"
    ],
    proof: [
      ["01 · Higher Completion", "Turn a frustrating 20-page paper form into a smooth, 10-minute digital flow."],
      ["02 · Productive Meetings", "Your professionals have all the structured data they need before the client even walks into the room."],
      ["03 · Faster Engagement", "Push clean data directly into your system, allowing instant generation of engagement letters."],
      ["04 · Secure Data Collection", "Stop clients from emailing highly sensitive financial or legal data over unencrypted channels."]
    ],
    problemsIntro: {
      eyebrow: "When intake is painful",
      asideLead: "If a client has to print and scan 20 pages just to speak with you, they are already frustrated.",
      title: "Clunky onboarding destroys client acquisition.",
      mainLead: "Firms spend thousands on marketing only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or asks irrelevant questions, the client abandons the process, delaying the engagement."
    },
    problems: [
      ["The PDF Drop-off", "Users abandon the application when they realize they have to download, print, and sign a physical document."],
      ["Data Entry Fatigue", "The legacy form asks for 10 years of history without offering an easy dynamic interface, causing frustration."],
      ["Manual Data Double-Handling", "Paralegals or admins spend hours manually re-typing client data from a printed form into the core practice software."]
    ],
    deliverablesIntro: {
      title: "Automated client conversion.",
      lead: "We engineer application flows that handle complex regulatory requirements while remaining beautiful and frictionless."
    },
    deliverables: [
      ["Custom Intake Frontends", "Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.", "UX", "React", "Conversion"],
      ["Dynamic Question Logic", "Building rules engines that skip irrelevant sections (e.g., hiding 'Corporate Entity' fields if the user selected 'Individual').", "Logic", "UX", "Speed"],
      ["PMS API Middleware", "Developing secure Node.js layers that push the sanitized intake data directly into systems like Clio, Actionstep, or Xero.", "APIs", "Integration", "Data"],
      ["Digital Signatures (eSign)", "Integrating with DocuSign or HelloSign to dynamically generate the completed engagement letter and collect secure signatures.", "Integration", "APIs", "Compliance"]
    ]
  },
  "secure-client-portals": {
    metaTitle: "Secure Client Portals",
    eyebrow: "Digital Service",
    h1: "Highly secure collaboration environments.",
    lead: "We build premium digital portals where clients can securely upload sensitive financial or legal documents, track matter progress, and digitally sign binding agreements.",
    status: "Client Portals",
    points: [
      "Secure web and mobile-responsive dashboards replacing massive, unsecured email chains during discovery or audit phases",
      "Digital document vaults containing all historical contracts, tax statements, and court filings securely in one place",
      "Dynamic project or matter trackers showing the client exactly where the engagement is against the agreed timeline"
    ],
    proof: [
      ["01 · Premium Client Experience", "Provide a modern, transparent digital experience that justifies a premium hourly rate."],
      ["02 · Faster Discovery", "Stop professionals from wasting hours chasing clients for missing documents via email."],
      ["03 · Absolute Security", "Ensure highly sensitive financial or legal IP is never transmitted via plain text email attachments."],
      ["04 · Centralized Communication", "Keep all matter updates, deliverables, and feedback securely in one auditable environment."]
    ],
    problemsIntro: {
      eyebrow: "When collaboration is analog",
      asideLead: "Managing a complex legal matter via 400 separate email threads is a major liability.",
      title: "Disorganized collaboration frustrates clients and risks data.",
      mainLead: "Professional services engagements involve massive amounts of sensitive data exchange. If your team is asking a client to email their financial models, or if the client has to call the Partner just to find out if Phase 1 is complete, the service feels chaotic and introduces massive cybersecurity risks."
    },
    problems: [
      ["The Email Grind", "Staff spend hours every week cross-referencing email threads to figure out which documents the client has actually sent."],
      ["Opaque Project Status", "The client is frustrated because they feel they are paying a massive retainer but have no visibility into the daily progress."],
      ["Security Risks", "Staff are emailing highly sensitive M&A or tax documents, risking massive data breaches and regulatory fines."]
    ],
    deliverablesIntro: {
      title: "Centralized client operations.",
      lead: "We engineer secure environments that professionalize the relationship between your firm and the client."
    },
    deliverables: [
      ["Client Dashboards", "API integrations pulling live data from your practice management software, allowing clients to view matter status.", "Integration", "Dashboards", "Data"],
      ["Secure Document Checklists", "Interactive UIs where clients can see exactly which files are required and securely drag-and-drop them into a vault.", "UX", "Security", "Operations"],
      ["Deliverable Review Flows", "Custom interfaces for securely delivering the final strategy document and capturing digital sign-off from the client.", "Operations", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure strict B2B data privacy and MFA (Multi-Factor Authentication).", "Security", "Auth", "Data"]
    ]
  },
  "matter-and-compliance-workflows": {
    metaTitle: "Matter & Compliance Workflows",
    eyebrow: "Operations",
    h1: "Empower your professional team.",
    lead: "We develop bespoke B2B tools for lawyers and accountants, streamlining document generation, complex compliance tracking, and cross-team collaboration.",
    status: "Practice Tools",
    points: [
      "Custom B2E (Business-to-Employee) portals allowing staff to view a 360-degree profile of their entire matter or client book",
      "Automated document assembly engines that generate complex contracts or tax templates based on structured data inputs",
      "Assisted onboarding flows allowing a professional to start a matter and push a secure link to the client for the remaining data"
    ],
    proof: [
      ["01 · Faster Execution", "Professionals spend less time on administrative data entry and more time on high-value advisory work."],
      ["02 · Reduced Errors", "Stop staff from manually re-keying data or copy-pasting clauses across Word documents."],
      ["03 · Better Client Experience", "When a client logs in, the portal acts as a seamless extension of the firm's brand and capability."],
      ["04 · Audit & Compliance", "Ensure every action, document collected, and conflict check is tracked and securely stored for compliance."]
    ],
    problemsIntro: {
      eyebrow: "When staff tools are outdated",
      asideLead: "Your professionals cannot deliver a premium client experience if they are fighting legacy software.",
      title: "Analog tools cripple billable efficiency.",
      mainLead: "Firms invest heavily in the client-facing digital experience but often ignore the tools used by their staff. If a senior associate has to manually assemble a 50-page contract by copy-pasting from five different templates, or if they have to log into three different systems just to prepare for a client review, operational costs skyrocket and errors multiply."
    },
    problems: [
      ["Manual Document Assembly", "Highly paid professionals are spending hours doing basic 'find and replace' tasks in Microsoft Word."],
      ["Data Disconnects", "A client updates their address in the portal, but the accounting CRM isn't updated because the systems don't talk to each other."],
      ["Compliance Risks", "Staff are storing sensitive client documents locally on their desktops because the official secure upload portal is too hard to use."]
    ],
    deliverablesIntro: {
      title: "The digital practice companion.",
      lead: "We engineer secure tools that turn your professional team into highly efficient operational nodes."
    },
    deliverables: [
      ["Practitioner Dashboards", "Building secure web apps where staff log in to view their pipeline, upcoming deadlines, and missing client documents.", "Portals", "Integration", "UX"],
      ["Automated Document Assembly", "Custom logic engines that take structured data (e.g., from an intake form) and dynamically generate complex, compliant PDF or Word documents.", "Logic", "Operations", "Automation"],
      ["Secure Document Collection", "Portals where professionals can request specific documents and the client receives a secure link to upload it via their phone.", "Compliance", "Data", "Security"],
      ["PMS API Hooks", "Developing middleware that ensures the data entered by the staff perfectly matches the data architecture required by the core practice software.", "APIs", "Integration", "Workflow"]
    ]
  },
  "practice-dashboards": {
    metaTitle: "Practice Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the entire practice.",
    lead: "We aggregate data from your practice management software, CRM, and billing systems into executive dashboards tracking billable hours, realization rates, and matter profitability.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Staff Utilization, Realization Rates, Work-in-Progress) across the entire firm",
      "Matter margin analytics identifying which specific practice areas or partners are consistently over-servicing and unprofitable",
      "Real-time pipeline tracking showing the Partnership exactly how much revenue is forecast for the next quarter"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify that a specific team has a low utilization rate and reallocate them to a struggling matter instantly."],
      ["02 · Margin Visibility", "Instantly see how much profit you made on a specific fixed-fee matter after accounting for all logged hours."],
      ["03 · Pipeline Accuracy", "Track exactly how many digital intakes converted into actual signed engagement letters."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging CRM and timesheet exports in Excel for the monthly Partner meeting."]
    ],
    problemsIntro: {
      eyebrow: "When firm data is siloed",
      asideLead: "You can't manage a 200-person firm looking at fragmented timesheet reports.",
      title: "Data silos hide true matter profitability.",
      mainLead: "Professional services executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, timesheets are in Actionstep, and invoicing is in Xero, calculating the true realization rate of a specific Partner's portfolio is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific Partner is consistently over-servicing their clients, destroying the margin on fixed-fee work."],
      ["Siloed Performance Data", "You cannot easily graph marketing spend against actual billed hours because the data lives in disconnected systems."],
      ["Reporting Fatigue", "Operations managers spend hours every week manually extracting and merging data from different regional systems to build the weekly utilization report."]
    ],
    deliverablesIntro: {
      title: "Command centers for firm leadership.",
      lead: "We engineer data aggregation platforms that give Managing Partners the real-time insights needed to optimize utilization and grow margins."
    },
    deliverables: [
      ["Live Firm Control Towers", "High-level visual dashboards tracking live staff utilization and Work-in-Progress (WIP) balances against targets.", "BI", "Dashboards", "Operations"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (CRM, Timesheets, ERP) and normalize it in a highly secure cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Realization & Margin Analytics", "Visual tools to track the true profitability of matters by merging standard billing rates with actual hours logged.", "Analytics", "Data", "Finance"],
      ["Automated Partner Reporting", "Dynamic engines to instantly generate standardized PDF or email summaries for the Partner group highlighting pipeline risks.", "Reporting", "Operations", "Automation"]
    ]
  }
};

Object.keys(pages).forEach(slug => {
  const dirPath = path.join(directory, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'page.tsx');
  const fileContent = template(slug, pages[slug]);
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Created ${slug}`);
});
