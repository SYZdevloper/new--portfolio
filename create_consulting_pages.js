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
                            <p className="eyebrow">Featured Advisory Platform</p>
                            <h2>Modernizing client collaboration.</h2>
                        </div>
                        <p>See how we helped a mid-tier management consulting firm replace their unsecured email document collection process with a custom React client portal, speeding up the discovery phase of their engagements by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Professional Services</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/advisory-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, structured discovery.</h2>
                                <p>We developed a secure B2B portal where enterprise clients can log in via SSO, view a dynamic checklist of required compliance documents, and securely upload them directly into the consulting firm's practice management software.</p>
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
                        <h2 id="faq-title">Common questions about advisory tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CRMs like Salesforce or HubSpot?</summary>
                            <p>We build API middleware that connects your diagnostic tools and contact forms directly to your CRM. When a prospect completes a 'Cybersecurity Assessment', the tool instantly creates a Lead record containing all their structured answers.</p>
                        </details>
                        <details>
                            <summary>Can you build secure document vaults for legal or M&A teams?</summary>
                            <p>Yes. We build enterprise-grade portals using Auth0 for identity management and AWS/Azure for encrypted file storage, ensuring highly sensitive due-diligence documents are never sent via plain text email.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex intellectual property (IP) libraries?</summary>
                            <p>We use headless CMS platforms (like Sanity) coupled with powerful search engines (like Algolia) to build lightning-fast knowledge hubs. You can gate premium content behind lead-capture forms or client-only logins.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other advisory capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/authority-and-service-websites/"><div><small>Discovery</small><h3>Authority Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/insights-and-knowledge-libraries/"><div><small>Content</small><h3>Knowledge Hubs</h3><p>Monetize your IP.</p></div><b>Explore insights ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-lead-journeys/"><div><small>Conversion</small><h3>B2B Assessments</h3><p>Intelligent qualification.</p></div><b>Explore assessments ↗</b></a>
                        <a className="related-card" href="/services/client-and-project-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services firm. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From intelligent B2B lead generation tools to secure client collaboration portals and utilization dashboards, we build software that drives billable efficiency and firm growth.</p>
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
  "authority-and-service-websites": {
    metaTitle: "Authority & Service Websites",
    eyebrow: "Brand Discovery",
    h1: "Digitally showcase your advisory expertise.",
    lead: "We design premium, high-trust websites for consulting firms, legal practices, and professional services that establish industry authority and clearly articulate complex service offerings.",
    status: "Professional Websites",
    points: [
      "Premium, typography-led digital design that conveys institutional stability and intellectual rigor",
      "Dynamic partner and consultant directories allowing clients to easily find specific industry experts",
      "Headless CMS setups allowing marketing teams to launch new practice areas or service lines instantly"
    ],
    proof: [
      ["01 · Brand Authority", "Digital experiences that justify premium billing rates to enterprise clients."],
      ["02 · Complex Clarity", "Translate dense consulting methodologies into easily digestible visual service pages."],
      ["03 · SEO Optimized", "Structure that ranks highly for niche, high-value B2B search terms (e.g., 'Supply Chain Restructuring')."],
      ["04 · Marketing Agility", "Empower your team to update partner bios and service pages without developer help."]
    ],
    problemsIntro: {
      eyebrow: "When digital fails the firm",
      asideLead: "If a CEO cannot quickly understand your firm's unique methodology, they will hire a competitor.",
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
  "insights-and-knowledge-libraries": {
    metaTitle: "Insights & Knowledge Libraries",
    eyebrow: "Content & SEO",
    h1: "Monetize and distribute your intellectual property.",
    lead: "We build robust, searchable knowledge hubs that house whitepapers, case studies, and proprietary research, designed to capture high-value B2B leads.",
    status: "Knowledge Hubs",
    points: [
      "Lightning-fast, faceted search interfaces (powered by Algolia) allowing users to filter research by industry, topic, or author",
      "Dynamic gating logic that requires an email capture only for premium, high-value assets",
      "Seamless API integrations pushing downloaded lead data directly into Salesforce, HubSpot, or Marketo"
    ],
    proof: [
      ["01 · Lead Generation", "Turn your firm's research into a predictable engine for capturing enterprise MQLs (Marketing Qualified Leads)."],
      ["02 · Thought Leadership", "Position your Partners as absolute authorities by showcasing their research beautifully."],
      ["03 · SEO Dominance", "Structure thousands of articles perfectly so Google indexes them for long-tail industry queries."],
      ["04 · Intelligent Gating", "Don't annoy users with forms for basic articles; only gate the high-value whitepapers."]
    ],
    problemsIntro: {
      eyebrow: "When IP is buried",
      asideLead: "If your groundbreaking supply chain report is hidden in a broken PDF link on page 4 of the blog, it generates zero leads.",
      title: "Disorganized content destroys marketing ROI.",
      mainLead: "Consulting firms spend hundreds of hours producing incredible research, whitepapers, and case studies. However, if that intellectual property is dumped into a generic WordPress blog with no filtering, no search capability, and clunky lead-capture forms, the investment is wasted. Clients simply cannot find the insights relevant to their specific problem."
    },
    problems: [
      ["The PDF Graveyard", "High-value research is locked inside unreadable PDFs that don't rank on Google and can't be read on mobile."],
      ["Search Frustration", "A prospect searching for 'Healthcare M&A' gets 50 irrelevant blog posts because the site's native search is broken."],
      ["Disconnected Leads", "A user downloads a whitepaper, but the form data just goes to a generic email inbox instead of syncing with the CRM."]
    ],
    deliverablesIntro: {
      title: "The digital engine for thought leadership.",
      lead: "We engineer knowledge hubs that distribute your firm's IP elegantly while capturing deep B2B data."
    },
    deliverables: [
      ["Faceted Search UIs", "Integrating Algolia or Meilisearch to provide instant, typo-tolerant search filtering across thousands of insights.", "React", "Search", "UX"],
      ["Digital-First Reports", "Converting static PDFs into interactive, data-rich React web pages that rank highly on Google and look stunning on mobile.", "UX", "SEO", "Web"],
      ["Dynamic Lead Capture", "Building smart forms that utilize progressive profiling (asking for 'Company Size' on the second download, not the first).", "Forms", "Marketing", "Data"],
      ["CRM Integration", "Developing middleware that pushes the lead data and their specific content interests directly into HubSpot or Salesforce.", "APIs", "Integration", "CRM"]
    ]
  },
  "assessments-and-lead-journeys": {
    metaTitle: "Assessments & Lead Journeys",
    eyebrow: "Conversion",
    h1: "Intelligent B2B lead qualification.",
    lead: "We engineer interactive digital assessments and diagnostic tools that provide immediate value to prospects while capturing deep, structured data for your sales team.",
    status: "B2B Diagnostics",
    points: [
      "Custom React-based diagnostic tools (e.g., 'Cybersecurity Readiness Scorecard') that ask prospects targeted questions",
      "Dynamic logic that calculates a personalized score or report instantly based on the prospect's answers",
      "Seamless API integrations pushing the prospect's full diagnostic profile directly to the Partner responsible for that sector"
    ],
    proof: [
      ["01 · Higher Conversion", "Prospects are far more likely to complete an interactive 'Scorecard' than a generic 'Contact Us' form."],
      ["02 · Deep Qualification", "Your sales team receives structured data (e.g., 'Revenue > $50M', 'Using Legacy ERP') before the first meeting."],
      ["03 · Immediate Value", "The prospect receives a beautifully generated PDF report with initial recommendations instantly."],
      ["04 · Scalable Prospecting", "Automate the initial discovery phase of your consulting methodology."]
    ],
    problemsIntro: {
      eyebrow: "When lead gen is passive",
      asideLead: "A 'Contact Us' form gives your sales team a name and an email. An assessment gives them a business problem to solve.",
      title: "Generic forms kill B2B conversion rates.",
      mainLead: "Professional services firms struggle to differentiate their digital lead generation. If your only call-to-action is a generic 'Speak to a Partner' form, prospects will hesitate. They don't want a sales pitch; they want value. If you don't offer a tool to help them self-diagnose their problem, they will bounce."
    },
    problems: [
      ["Low Form Submissions", "Traffic to your service pages is high, but nobody is filling out the 'Contact Us' form."],
      ["Unqualified Leads", "Partners waste time on intro calls with prospects who are far too small for your minimum engagement fee."],
      ["Cold First Meetings", "The sales team goes into the first meeting completely blind, wasting 30 minutes just gathering basic discovery facts."]
    ],
    deliverablesIntro: {
      title: "Automated B2B discovery.",
      lead: "We engineer interactive tools that trade personalized consulting value for deep prospect data."
    },
    deliverables: [
      ["Interactive Diagnostics", "Building bespoke React flows that guide a prospect through a visually engaging set of discovery questions.", "UX", "React", "Conversion"],
      ["Scoring & Logic Engines", "Developing backend algorithms that calculate maturity scores or benchmarking data based on the user's specific inputs.", "Logic", "Math", "Data"],
      ["Dynamic Report Generation", "Engines that take the calculated score and automatically generate a stunning, personalized PDF report sent via email.", "Reporting", "PDFs", "Automation"],
      ["CRM API Routing", "Middleware that analyzes the answers and routes the lead to the correct Partner in Salesforce based on industry or company size.", "APIs", "Integration", "Workflow"]
    ]
  },
  "client-and-project-portals": {
    metaTitle: "Client & Project Portals",
    eyebrow: "Digital Service",
    h1: "Secure, collaborative client environments.",
    lead: "We develop bespoke B2B portals where clients can securely upload sensitive documents, track project milestones, and review advisory deliverables in real-time.",
    status: "Client Portals",
    points: [
      "Secure, centralized dashboards replacing massive email chains during the discovery and due diligence phases",
      "Dynamic project trackers showing the client exactly where the engagement is against the agreed timeline",
      "Digital document vaults for securely delivering final reports, tax strategies, or M&A documentation"
    ],
    proof: [
      ["01 · Premium Client Experience", "Provide a modern, transparent digital experience that justifies a premium retainer."],
      ["02 · Faster Discovery", "Stop consultants from wasting hours chasing clients for missing documents via email."],
      ["03 · Absolute Security", "Ensure highly sensitive financial or legal IP is never transmitted via unencrypted email attachments."],
      ["04 · Centralized Communication", "Keep all project updates, deliverables, and feedback securely in one auditable environment."]
    ],
    problemsIntro: {
      eyebrow: "When collaboration is analog",
      asideLead: "Managing a $500k consulting engagement via 400 separate email threads is unacceptable.",
      title: "Disorganized collaboration frustrates enterprise clients.",
      mainLead: "Professional services engagements involve massive amounts of sensitive data exchange. If your team is asking an enterprise client to email their financial models, or if the client has to call the Partner just to find out if Phase 1 is complete, the service feels chaotic and unprofessional."
    },
    problems: [
      ["The Email Grind", "Consultants spend hours every week cross-referencing email threads to figure out which documents the client has actually sent."],
      ["Opaque Project Status", "The client is frustrated because they feel they are paying a massive retainer but have no visibility into the daily progress."],
      ["Security Risks", "Staff are emailing highly sensitive M&A documents, risking massive data breaches and compliance violations."]
    ],
    deliverablesIntro: {
      title: "Centralized client operations.",
      lead: "We engineer secure environments that professionalize the relationship between your firm and the client."
    },
    deliverables: [
      ["Client Dashboards", "API integrations pulling live data from your practice management software (e.g., Karbon, Monday.com), allowing clients to view project status.", "Integration", "Dashboards", "Data"],
      ["Secure Document Checklists", "Interactive UIs where clients can see exactly which files are required and securely drag-and-drop them into a vault.", "UX", "Security", "Operations"],
      ["Deliverable Review Flows", "Custom interfaces for securely delivering the final strategy document and capturing digital sign-off from the client.", "Operations", "Compliance", "UX"],
      ["Identity Management (CIAM)", "Secure, centralized login flows using Auth0 to ensure strict B2B data privacy and MFA (Multi-Factor Authentication).", "Security", "Auth", "Data"]
    ]
  },
  "advisory-operations-dashboards": {
    metaTitle: "Advisory Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across your professional services firm.",
    lead: "We aggregate data from your CRM, practice management, and timesheet software into executive dashboards tracking utilization rates, project margins, and pipeline health.",
    status: "Operations Analytics",
    points: [
      "Unified BI dashboards tracking core metrics (Staff Utilization, Realization Rates, Work-in-Progress) across the entire firm",
      "Project margin analytics identifying which specific engagements or service lines are consistently over-serviced and unprofitable",
      "Real-time pipeline tracking showing the Partners exactly how much revenue is forecast for the next quarter"
    ],
    proof: [
      ["01 · Live Decision Making", "Identify that a specific team has a low utilization rate and reallocate them to a struggling project instantly."],
      ["02 · Margin Visibility", "Instantly see how much profit you made on a specific fixed-fee engagement after accounting for all consultant hours."],
      ["03 · Pipeline Accuracy", "Track exactly how many digital assessments converted into actual signed Statements of Work (SOWs)."],
      ["04 · Automated Reporting", "Eliminate the days spent manually merging CRM and timesheet exports in Excel for the monthly Partner meeting."]
    ],
    problemsIntro: {
      eyebrow: "When firm data is siloed",
      asideLead: "You can't manage a 500-person consulting firm looking at fragmented timesheet reports.",
      title: "Data silos hide true engagement profitability.",
      mainLead: "Professional services executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, timesheets are in Harvest, and invoicing is in Xero, calculating the true realization rate of a specific Partner's portfolio is nearly impossible."
    },
    problems: [
      ["Hidden Margin Erosion", "Management doesn't realize that a specific Partner is consistently over-servicing their clients, destroying the margin on fixed-fee projects."],
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
      ["Realization & Margin Analytics", "Visual tools to track the true profitability of engagements by merging standard billing rates with actual hours logged.", "Analytics", "Data", "Finance"],
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
