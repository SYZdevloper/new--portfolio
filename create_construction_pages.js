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
                            <p className="eyebrow">Featured Engineering Build</p>
                            <h2>Connecting the job site to the boardroom.</h2>
                        </div>
                        <p>See how we helped a massive civil engineering contractor digitize thousands of paper safety forms and provide their executive team with real-time portfolio visibility.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Construction Software</span>
                                <span>Field Mobility + Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/construction-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Eliminating rework and data silos.</h2>
                                <p>We developed a custom ecosystem that allows field workers to capture QA/QC data offline in the trench, which automatically syncs to Procore and populates an executive BI dashboard at headquarters.</p>
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
                        <h2 id="faq-title">Common questions about our ConTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with Procore, Autodesk, or Oracle Aconex?</summary>
                            <p>Yes. We regularly build middleware that connects custom field apps or client portals directly into core construction management platforms like Procore, ensuring data remains centralized without forcing field workers to use clunky interfaces.</p>
                        </details>
                        <details>
                            <summary>Can field applications work without an internet connection?</summary>
                            <p>Absolutely. We specialize in building offline-first PWA and React Native applications. Field engineers can fill out safety forms, capture photos, and annotate drawings deep underground, and the app will automatically sync the payload once they hit a cellular signal.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive files like BIM models and drone surveys?</summary>
                            <p>We architect secure AWS/Azure storage solutions utilizing specialized viewers (like Autodesk Forge or WebGL) to render massive point clouds and 3D models directly in the browser, without requiring the client to download heavy CAD software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other construction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/capability-and-project-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Showcase your engineering capabilities with authority.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/tender-and-prequalification-portals/"><div><small>Procurement</small><h3>Tender Portals</h3><p>Streamline contractor and supplier onboarding.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/field-safety-and-quality-workflows/"><div><small>Site Operations</small><h3>Field Workflows</h3><p>Digitize the job site to eliminate rework.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/construction-operations-dashboards/"><div><small>Executive</small><h3>Operations Dashboards</h3><p>Real-time control over portfolio performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your construction <br />and engineering operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that win tenders, secure the job site, and provide total operational oversight? Let's discuss your roadmap.</p>
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
  "capability-and-project-websites": {
    metaTitle: "Capability & Project Websites",
    eyebrow: "Construction Marketing",
    h1: "Showcase your engineering capabilities with authority.",
    lead: "We design high-performance digital portfolios for major contractors, highlighting technical capabilities, safety records, and flagship infrastructure projects.",
    status: "Corporate Construction Websites",
    points: [
      "Award-winning B2B web design that builds trust with government and enterprise clients",
      "Interactive project maps and rich media galleries (drone footage, timelapses)",
      "Clear articulation of ESG, HSE, and technical compliance standards"
    ],
    proof: [
      ["01 · Bid Support", "A website that serves as a powerful asset during the tender process."],
      ["02 · Talent Attraction", "Position your firm as an employer of choice for top engineers."],
      ["03 · Project Maps", "Visually demonstrate the scale of your global or national footprint."],
      ["04 · Rich Media", "Seamlessly embed 4K drone footage and BIM visualizations without lag."]
    ],
    problemsIntro: {
      eyebrow: "When perception trails reality",
      asideLead: "You build $500M assets, but your website looks like it costs $500.",
      title: "Procurement teams are judging your digital presence.",
      mainLead: "Major infrastructure clients and government bodies scrutinize contractors heavily before awarding tenders. If your digital presence is outdated, hard to navigate, or fails to articulate your safety record, you are losing bids to competitors with lesser capabilities but better presentation."
    },
    problems: [
      ["Outdated Portfolios", "Flagship projects from the last 3 years aren't listed because updating the current CMS requires a developer."],
      ["Hidden Capabilities", "Clients think you only do civil works because your specialized MEP capabilities are buried on page four."],
      ["Poor Talent Pipeline", "Top-tier graduates accept offers from competitors because your careers page lacks a modern, engaging narrative."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for major contractors.",
      lead: "We build corporate platforms that project stability, scale, and technical excellence."
    },
    deliverables: [
      ["Bespoke UI/UX", "High-contrast, authoritative design systems tailored specifically for Tier-1 contractors and engineering firms.", "Design", "Brand", "Authority"],
      ["Interactive Case Studies", "Dynamic portfolio templates that allow you to upload stats, drone videos, and client testimonials easily.", "CMS", "Video", "Stats"],
      ["ESG & Safety Hubs", "Dedicated sections designed to clearly present your HSE metrics, sustainability targets, and compliance certifications.", "HSE", "ESG", "Trust"],
      ["Headless CMS Architecture", "Lightning-fast Next.js builds paired with Sanity or Contentful, ensuring zero lag even with heavy media.", "Next.js", "Sanity", "Speed"]
    ]
  },
  "tender-and-prequalification-portals": {
    metaTitle: "Tender & Prequalification Portals",
    eyebrow: "Procurement Tech",
    h1: "Streamline contractor and supplier onboarding.",
    lead: "We build secure prequalification portals that automate compliance checks, insurance verification, and subcontractor tendering for massive capital projects.",
    status: "Digital Procurement Portals",
    points: [
      "Automated vendor registration and KYC/AML compliance flows",
      "Dynamic document collection for SWMS, insurances, and licenses",
      "Secure bid submission vaults with strict timestamp auditing"
    ],
    proof: [
      ["01 · Faster Onboarding", "Reduce subcontractor approval time from weeks to days."],
      ["02 · Expiry Alerts", "Automated warnings when a sub's insurance or license is about to lapse."],
      ["03 · Audit Trails", "Immutable records of every bid submission and document upload."],
      ["04 · ERP Sync", "Push approved vendors directly into Viewpoint or SAP."]
    ],
    problemsIntro: {
      eyebrow: "When procurement is chaotic",
      asideLead: "Managing 500 subcontractors via email is a compliance disaster.",
      title: "Risk mitigation starts at the tender phase.",
      mainLead: "For a Tier-1 contractor, managing the prequalification of hundreds of trades and suppliers across multiple projects using spreadsheets and PDF attachments is a massive liability. One expired insurance certificate can halt a project or trigger millions in liabilities."
    },
    problems: [
      ["Document Chaos", "Procurement managers waste hours digging through emails to find a subcontractor's Safe Work Method Statement (SWMS)."],
      ["Compliance Blindspots", "A plumber is allowed on site even though their public liability insurance expired three days ago."],
      ["Clunky Tendering", "Distributing massive drawing packages and addendums via Dropbox links that expire or fail to download."]
    ],
    deliverablesIntro: {
      title: "Secure supply chain portals.",
      lead: "We engineer procurement platforms that enforce compliance and streamline vendor collaboration."
    },
    deliverables: [
      ["Vendor KYC Workflows", "Step-by-step digital forms for subcontractors to submit company details, financial stability data, and safety records.", "Forms", "KYC", "Onboarding"],
      ["Document Expiry Engines", "Automated systems that scan uploaded certificates (via OCR) and send warning emails 30 days before expiration.", "OCR", "Alerts", "Logic"],
      ["Secure Data Rooms", "Encrypted storage vaults where subcontractors can securely download heavy tender packages and BIM models.", "AWS", "Security", "Storage"],
      ["Bid Evaluation Dashboards", "Side-by-side comparative views allowing estimators to score and rank submitted proposals efficiently.", "Scoring", "UI/UX", "Data"]
    ]
  },
  "project-and-client-portals": {
    metaTitle: "Project & Client Portals",
    eyebrow: "Project Management",
    h1: "Total transparency for project stakeholders.",
    lead: "We engineer secure client portals that provide real-time updates on construction milestones, budget burn rates, and drone site-surveys.",
    status: "Client Visibility Dashboards",
    points: [
      "Secure login for clients, investors, and joint-venture partners",
      "Real-time visual progress tracking via drone photogrammetry integrations",
      "Automated financial reporting on contingencies and progress claims"
    ],
    proof: [
      ["01 · Built Trust", "Stop waiting for the monthly steering committee to share updates."],
      ["02 · Visual Progress", "Embed live webcam feeds and interactive 3D site models."],
      ["03 · Financial Clarity", "Give clients a clear view of variations, claims, and cash flow."],
      ["04 · Centralized Comms", "Move all RFI and design approvals out of messy email threads."]
    ],
    problemsIntro: {
      eyebrow: "When clients are in the dark",
      asideLead: "A nervous client is a difficult client.",
      title: "Silence breeds anxiety on major capital projects.",
      mainLead: "When a developer or government body is spending $100M on an asset, they demand transparency. Relying on a monthly PDF report that is instantly out-of-date frustrates stakeholders and leads to micromanagement."
    },
    problems: [
      ["Information Lag", "The client board meets on the 15th, but the progress photos in the report are from the 2nd."],
      ["Financial Surprises", "Variations and scope changes aren't clearly tracked, leading to massive disputes at the end of the month."],
      ["Fragmented Updates", "The client receives photos via WhatsApp, schedules via email, and invoices via mail."]
    ],
    deliverablesIntro: {
      title: "Digital control towers for clients.",
      lead: "We build stakeholder portals that aggregate data from your internal tools into a polished, client-facing experience."
    },
    deliverables: [
      ["Progress Dashboards", "Timeline visualizers mapping actual progress against baseline schedules (integrating with Primavera P6 or MS Project).", "Timelines", "APIs", "DataViz"],
      ["Media Integration", "Embeds of Matterport 3D scans, DroneDeploy maps, and live site cameras for immersive remote viewing.", "Media", "Webcams", "3D"],
      ["Financial Summaries", "Clear, high-level roll-ups of contract value, approved variations, and pending claims pulled from the ERP.", "ERP Sync", "Finance", "Charts"],
      ["Document Approvals", "Secure workflows allowing the client representative to digitally sign off on design changes or material selections.", "E-Sign", "Workflows", "Audit"]
    ]
  },
  "field-safety-and-quality-workflows": {
    metaTitle: "Field, Safety & Quality Workflows",
    eyebrow: "Site Operations",
    h1: "Digitize the job site to eliminate rework.",
    lead: "We develop offline-capable mobile apps for field workers to log safety observations (HSE), complete QA/QC checklists, and raise digital RFIs from the trench.",
    status: "Field Mobility Apps",
    points: [
      "Offline-first mobile architecture for remote or underground sites",
      "Digital ITPs (Inspection Test Plans) with photo markup capabilities",
      "Automated routing of safety incidents and non-conformance reports (NCRs)"
    ],
    proof: [
      ["01 · Offline Capable", "Workers can fill out forms deep in a basement without a signal."],
      ["02 · Photo Evidence", "Snap a picture, circle the defect, and attach it to the punch list instantly."],
      ["03 · Faster QA/QC", "Eliminate the delay of walking paper forms back to the site shed."],
      ["04 · Geotagging", "Automatically pin safety observations to specific GPS coordinates on site."]
    ],
    problemsIntro: {
      eyebrow: "When the field is disconnected",
      asideLead: "Paper forms are where data goes to die.",
      title: "You can't manage quality with a clipboard.",
      mainLead: "Construction happens in the mud, not the office. When field engineers are forced to use paper checklists, data is lost, weather damages records, and project managers have no real-time visibility into safety or quality issues."
    },
    problems: [
      ["Data Entry Delays", "An engineer spends Friday afternoon typing week-old paper safety observations into a spreadsheet."],
      ["Connection Drops", "Off-the-shelf apps crash or lose data when the user steps into an elevator shaft and loses 5G."],
      ["Rework Costs", "A concrete pour happens before the QA checklist is actually signed off, resulting in expensive demolition."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the job site.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for the realities of construction."
    },
    deliverables: [
      ["Offline-First Architecture", "Local caching utilizing IndexedDB so users can complete complex workflows entirely without an internet connection.", "Offline", "PWA", "Sync"],
      ["Dynamic Smart Forms", "Checklists with conditional logic (e.g., if 'Fail' is selected, a photo upload becomes mandatory).", "Logic", "Forms", "UI"],
      ["Image Annotation", "Built-in tools allowing users to snap a photo and draw circles or arrows on it before submitting an RFI.", "Canvas", "Media", "Mobile"],
      ["Procore/Aconex Sync", "Middleware that takes field submissions and injects them directly into your core project management system as native records.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "construction-operations-dashboards": {
    metaTitle: "Construction Operations Dashboards",
    eyebrow: "Executive Operations",
    h1: "Real-time control over portfolio performance.",
    lead: "We aggregate data from Procore, ERPs, and IoT sensors into command-center dashboards, giving executives visibility into cash flow, safety metrics, and schedule variance.",
    status: "Construction Dashboards",
    points: [
      "Unified BI dashboards combining finance, schedule, and safety data",
      "Portfolio-wide heatmaps to identify at-risk projects instantly",
      "Automated generation of monthly board reports and KPIs"
    ],
    proof: [
      ["01 · Single Source of Truth", "Stop arguing over whose spreadsheet has the correct numbers."],
      ["02 · Risk Identification", "Spot schedule slippage or cost overruns before they become critical."],
      ["03 · Safety Roll-ups", "Track Total Recordable Incident Frequency Rate (TRIFR) across the whole company."],
      ["04 · Automated Board Packs", "Turn three days of report formatting into a single click."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't steer a billion-dollar portfolio looking in the rearview mirror.",
      title: "Construction margins are too thin for bad data.",
      mainLead: "Executives at major construction firms often receive data that is siloed and weeks old. Finance lives in SAP, project data lives in Procore, and safety lives in a third app. Manually stitching this together obscures critical risks."
    },
    problems: [
      ["Siloed Intelligence", "The project is on schedule according to operations, but finance knows the budget is already blown."],
      ["Manual Reporting", "Highly paid commercial managers spend a week every month just formatting PowerPoint slides for the board."],
      ["Reactive Management", "Leadership only finds out a project is in distress when the client threatens liquidated damages."]
    ],
    deliverablesIntro: {
      title: "Business intelligence for builders.",
      lead: "We engineer data aggregation platforms that give construction executives the exact metrics they need to protect margins."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visualizations of WIP (Work in Progress), cash flow, and margin variance across all active projects.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate tools (ERP, PM software, HR) and normalize it in Snowflake or AWS.", "ETL", "Cloud", "Data"],
      ["Predictive Analytics", "Machine learning models that analyze historical schedule data to flag projects at high risk of delay.", "AI/ML", "Python", "Algorithms"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for steering committees.", "Reporting", "PDFs", "Automation"]
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
