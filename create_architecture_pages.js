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
                            <a className="btn primary" href="#contact">Discuss Your Practice <span className="arrow">↗</span></a>
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
                            <h2>Elevating the studio experience.</h2>
                        </div>
                        <p>See how we helped a global architectural practice build a seamless digital ecosystem that took them from beautiful portfolio websites to fully integrated client project portals.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Architecture Tech</span>
                                <span>WebGL & Web Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/architecture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Designing for designers.</h2>
                                <p>We developed a high-performance Next.js portfolio that renders heavy 3D fly-throughs flawlessly, backed by a secure client portal where stakeholders can review plans and sign off on material finishes.</p>
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
                        <h2 id="faq-title">Common questions about architecture & design tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle heavy media files on portfolio sites?</summary>
                            <p>We utilize modern frameworks like Next.js paired with global CDNs and automated image/video compression via services like Cloudinary or Mux. This ensures that even heavy 4K videos and high-res architectural renders load instantly without hurting your SEO.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our practice management software?</summary>
                            <p>Yes. We frequently integrate web platforms with industry-standard software like Deltek, ArchiSnapper, or BQE Core to automate time-tracking dashboards, project accounting, and CRM functions.</p>
                        </details>
                        <details>
                            <summary>Are client portals secure enough for confidential designs?</summary>
                            <p>Absolutely. We build bespoke portals using enterprise-grade authentication (Auth0/Okta), ensuring that pre-release designs, tender documents, and financial estimates are strictly accessible only to authorized stakeholders.</p>
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
                        <a className="related-card" href="/services/portfolio-and-practice-websites/"><div><small>Marketing</small><h3>Practice Websites</h3><p>Digital portfolios that win major commissions.</p></div><b>Explore portfolios ↗</b></a>
                        <a className="related-card" href="/services/consultations-and-proposal-journeys/"><div><small>Sales</small><h3>Proposal Journeys</h3><p>Streamline the path to a signed contract.</p></div><b>Explore proposals ↗</b></a>
                        <a className="related-card" href="/services/client-project-portals/"><div><small>Collaboration</small><h3>Client Portals</h3><p>Keep clients engaged during the design phase.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/practice-and-service-dashboards/"><div><small>Operations</small><h3>Practice Dashboards</h3><p>Track utilization and practice profitability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your practice with <br />bespoke digital tools. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From award-winning portfolios to secure client collaboration portals, we build the technology that powers leading design firms.</p>
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
  "portfolio-and-practice-websites": {
    metaTitle: "Portfolio & Practice Websites",
    eyebrow: "Architecture & Design",
    h1: "Digital portfolios that win major commissions.",
    lead: "We design highly visual, immersive websites for architectural practices, interior design firms, and engineering consultancies to showcase their best work.",
    status: "Practice Portfolios",
    points: [
      "Award-winning, minimalist UI that lets your architectural photography shine",
      "Headless CMS integration allowing architects to easily update projects without coding",
      "High-performance video and WebGL integration for 3D walkthroughs"
    ],
    proof: [
      ["01 · Brand Authority", "Position your studio alongside top-tier global practices."],
      ["02 · Talent Pipeline", "Attract the best graduate architects and senior designers."],
      ["03 · Media Handling", "Zero lag, even with dozens of 4K render images."],
      ["04 · SEO Growth", "Rank for specialized architectural and design services."]
    ],
    problemsIntro: {
      eyebrow: "When design fails online",
      asideLead: "Your buildings are state-of-the-art, but your website is stuck in 2014.",
      title: "Poor digital presentation costs you premium clients.",
      mainLead: "For a design-led practice, your website is your most critical asset. If your digital portfolio feels clunky, loads slowly, or features a templated design, high-net-worth clients and commercial developers will question your studio's commitment to detail and innovation."
    },
    problems: [
      ["Slow Image Loading", "Potential clients bounce because heavy architectural renders take ten seconds to load on their phones."],
      ["Rigid Templates", "Your bespoke design philosophy is forced into a generic WordPress theme that looks like everyone else's."],
      ["Hidden Expertise", "Your thought leadership, sustainability initiatives, and masterplanning expertise are buried in PDFs."]
    ],
    deliverablesIntro: {
      title: "Bespoke digital foundations.",
      lead: "We build portfolios that mirror the precision and elegance of your physical projects."
    },
    deliverables: [
      ["Immersive UI/UX", "Minimalist, high-end interfaces that use typography and whitespace to elevate your visual assets.", "Design", "Figma", "UI/UX"],
      ["Headless Architecture", "Next.js frontends paired with Sanity CMS, providing lightning-fast load times and total creative freedom.", "Next.js", "Speed", "CMS"],
      ["Media Optimization", "Automated pipelines that compress and serve heavy videos and images efficiently based on device size.", "Media", "CDN", "Performance"],
      ["Interactive Filtering", "Fluid project grids that allow users to filter your portfolio by sector, scale, or location instantly.", "UX", "Search", "React"]
    ]
  },
  "consultations-and-proposal-journeys": {
    metaTitle: "Consultations & Proposal Journeys",
    eyebrow: "Client Acquisition",
    h1: "Streamline the path from inquiry to signed contract.",
    lead: "We build digital proposal journeys that automate NDA signing, fee estimates, and initial consultation scheduling for professional services.",
    status: "Digital Proposals",
    points: [
      "Interactive intake forms that qualify leads based on budget and scope",
      "Automated scheduling for initial design consultations",
      "Dynamic, trackable digital proposals with integrated e-signatures"
    ],
    proof: [
      ["01 · Better Leads", "Filter out tire-kickers before they take up a partner's time."],
      ["02 · Faster Closing", "Send beautiful digital proposals instead of static PDFs."],
      ["03 · E-Signatures", "Get fee agreements signed directly within the browser."],
      ["04 · CRM Sync", "Push all prospect data directly into HubSpot or Salesforce."]
    ],
    problemsIntro: {
      eyebrow: "When onboarding is manual",
      asideLead: "Partners are spending too much time qualifying bad leads.",
      title: "Friction in the sales process loses premium clients.",
      mainLead: "If a prospective client has to wait days for an email reply to schedule a consultation, or is sent a clunky Word document to sign as a fee proposal, the initial trust is broken. Modern clients expect a seamless, digital-first onboarding experience."
    },
    problems: [
      ["Time Waste", "Senior architects spend hours on calls with leads who ultimately don't have the budget for a custom build."],
      ["Lost Proposals", "You send a PDF fee estimate and have no idea if the client ever opened it or shared it with their board."],
      ["Messy Onboarding", "Chasing clients for signed NDAs, initial deposits, and site surveys via disjointed email threads."]
    ],
    deliverablesIntro: {
      title: "Automated acquisition flows.",
      lead: "We engineer systems that make saying 'yes' to your practice frictionless."
    },
    deliverables: [
      ["Smart Intake Forms", "Multi-step logic forms that capture project details, site locations, and budget brackets, routing high-value leads to partners.", "Forms", "Logic", "Routing"],
      ["Digital Proposals", "Trackable web-based proposals that notify you when a client is viewing them, complete with rich media embeds.", "Proposals", "Analytics", "Web"],
      ["Integrated E-Sign", "Seamless contract execution workflows using DocuSign or bespoke API integrations for fee agreements.", "E-Sign", "Contracts", "Legal"],
      ["Scheduling Automation", "Direct calendar integrations (Calendly/ChiliPiper) allowing qualified leads to book initial briefs instantly.", "Calendars", "Sync", "UX"]
    ]
  },
  "client-project-portals": {
    metaTitle: "Client Project Portals",
    eyebrow: "Client Collaboration",
    h1: "Keep clients engaged throughout the design phase.",
    lead: "We develop secure project rooms where clients can review CAD drawings, sign off on material schedules, and track design variations in real-time.",
    status: "Client Portals",
    points: [
      "Secure, centralized hubs for all project documentation and correspondence",
      "Interactive 3D model viewers and design variation approval flows",
      "Integrated financial tracking for fee stages and consultant costs"
    ],
    proof: [
      ["01 · Centralized Comms", "Move design feedback out of messy email chains."],
      ["02 · Digital Sign-offs", "Get binding approvals on concept designs and material boards."],
      ["03 · Total Transparency", "Clients can log in 24/7 to see project progress and upcoming milestones."],
      ["04 · Secure Vault", "Protect sensitive IP, financial data, and tender documents."]
    ],
    problemsIntro: {
      eyebrow: "When collaboration is scattered",
      asideLead: "Managing a $5M house build via WhatsApp and Dropbox is a liability.",
      title: "Disjointed communication leads to design disputes.",
      mainLead: "During a long design phase, sending Revit exports, material mood boards, and fee invoices via fragmented emails creates confusion. When clients can't easily find the latest revision, decisions are delayed and scope creep occurs."
    },
    problems: [
      ["Version Control Chaos", "The client accidentally approves Revision B instead of Revision C because they lost the latest email link."],
      ["Unrecorded Approvals", "A client gives verbal approval for a costly design variation, leading to disputes when the invoice arrives."],
      ["Client Anxiety", "Without a clear view of the roadmap, clients constantly email partners for minor updates, draining practice resources."]
    ],
    deliverablesIntro: {
      title: "The digital studio experience.",
      lead: "We build bespoke portals that make clients feel deeply connected to the design process."
    },
    deliverables: [
      ["Interactive Viewers", "Web-based integrations allowing clients to spin and explore 3D BIM models or panoramic renders directly in the browser.", "3D", "WebGL", "BIM"],
      ["Approval Workflows", "Structured 'stage gate' sign-offs where clients must digitally accept the Concept Design before Schematic Design begins.", "Workflows", "E-Sign", "Process"],
      ["Financial Dashboards", "Clear summaries of paid invoices, upcoming fee stages, and approved consultant variations.", "Finance", "Dashboards", "Clarity"],
      ["Document Hubs", "Organized, searchable vaults for town planning permits, engineering reports, and final construction issue drawings.", "Storage", "Search", "Security"]
    ]
  },
  "property-and-facility-workflows": {
    metaTitle: "Property & Facility Workflows",
    eyebrow: "Facility Management",
    h1: "Digitize post-occupancy and facility management.",
    lead: "We engineer applications that allow facility managers and tenants to log maintenance requests, track warranties, and view digital twin building data.",
    status: "Facility Management Apps",
    points: [
      "Mobile apps for tenants to log defects and maintenance tickets",
      "Digital handover manuals replacing massive physical binders",
      "Integration with IoT sensors and digital twin platforms for predictive maintenance"
    ],
    proof: [
      ["01 · Digital Handovers", "Deliver the O&M manuals as a searchable, cloud-based app."],
      ["02 · Defect Tracking", "Streamline the post-occupancy defect liability period."],
      ["03 · IoT Integration", "Connect the building's BMS to a centralized dashboard."],
      ["04 · Tenant Apps", "Provide a premium digital experience for building occupants."]
    ],
    problemsIntro: {
      eyebrow: "When buildings go offline",
      asideLead: "Handing over a smart building with a paper manual makes no sense.",
      title: "The architect's job doesn't end at practical completion.",
      mainLead: "After a major commercial build, handing over thousands of pages of warranties, maintenance schedules, and as-built drawings in physical binders guarantees they will be lost. This makes the defect period chaotic and frustrates facility managers."
    },
    problems: [
      ["Lost Documentation", "Two years after completion, the facility manager can't find the warranty for the HVAC system."],
      ["Messy Defect Logging", "Tenants report issues via phone calls, leading to untracked repairs and disputes with the builder."],
      ["Disconnected Systems", "The building has smart sensors, but the data is locked in a proprietary system nobody checks."]
    ],
    deliverablesIntro: {
      title: "Smart software for smart assets.",
      lead: "We build the digital infrastructure required to manage modern buildings efficiently."
    },
    deliverables: [
      ["Digital O&M Manuals", "Searchable, secure web platforms that host all as-built drawings, warranties, and maintenance schedules.", "Cloud", "Search", "Archive"],
      ["Defect Ticketing Systems", "Mobile-friendly apps allowing tenants to take a photo of an issue and route it directly to the FM team.", "Mobile", "Ticketing", "UX"],
      ["Digital Twin Dashboards", "Interfaces that visualize live IoT data (energy usage, HVAC performance) against the building's 3D model.", "IoT", "DataViz", "API"],
      ["Lifecycle Tracking", "Automated alerts for facility managers when major assets are due for scheduled maintenance or warranty expiration.", "Alerts", "Logic", "Planning"]
    ]
  },
  "practice-and-service-dashboards": {
    metaTitle: "Practice & Service Dashboards",
    eyebrow: "Practice Management",
    h1: "Track utilization and practice profitability.",
    lead: "We build BI dashboards for practice partners, aggregating time-tracking, invoicing, and pipeline data to measure project margins and team utilization.",
    status: "Practice Dashboards",
    points: [
      "Unified BI dashboards extracting data from Deltek, Xero, and CRM",
      "Real-time tracking of project burn rates against fixed-fee agreements",
      "Resource allocation forecasting to balance studio workloads"
    ],
    proof: [
      ["01 · Margin Visibility", "Know exactly which projects are profitable and which are bleeding time."],
      ["02 · Utilization Rates", "See instantly if your design team is over-capacity or under-utilized."],
      ["03 · Automated Reporting", "Stop spending the weekend building Excel reports for the Monday partner meeting."],
      ["04 · Pipeline Forecasting", "Predict cash flow based on weighted prospects in your CRM."]
    ],
    problemsIntro: {
      eyebrow: "When the studio flies blind",
      asideLead: "Winning design awards doesn't guarantee a profitable practice.",
      title: "You can't manage margins with gut feeling.",
      mainLead: "Many professional services firms struggle because their data is siloed. Time sheets are in one app, invoices in another, and the sales pipeline in a third. Without a unified view, partners discover a project was unprofitable months after it finishes."
    },
    problems: [
      ["Fixed-Fee Blowouts", "A project is billed at a fixed fee, but the design team spends double the allocated hours perfecting it, destroying the margin."],
      ["Resource Bottlenecks", "One team is working until midnight while another team has no billable work for the week."],
      ["Delayed Intelligence", "Partners only see the financial health of the practice when the accountant finalizes the month-end reports."]
    ],
    deliverablesIntro: {
      title: "Business intelligence for partners.",
      lead: "We build custom dashboards that give studio leadership the clarity needed to scale."
    },
    deliverables: [
      ["Unified BI Dashboards", "Secure executive scorecards that pull live data via API from your accounting, time-tracking, and CRM tools.", "BI", "APIs", "Data"],
      ["Burn-Rate Monitors", "Visual gauges that track actual hours logged against the estimated budget for every active project stage.", "Tracking", "Alerts", "Finance"],
      ["Resource Heatmaps", "Interactive calendars showing team utilization, helping directors allocate staff to upcoming projects efficiently.", "Planning", "UX", "Management"],
      ["Automated Partner Packs", "Systems that automatically generate and email branded PDF financial summaries to the leadership team every Friday.", "Automation", "PDFs", "Reporting"]
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
