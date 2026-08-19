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
                            <p className="eyebrow">Featured Mining Platform</p>
                            <h2>Digitizing remote operations.</h2>
                        </div>
                        <p>See how we helped a Tier 1 mining contractor replace hundreds of paper forms with an offline-first inspection app, syncing directly to their centralized HSE and operations dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Resources Tech</span>
                                <span>Field Mobility & Telemetry</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/mining-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connectivity without connection.</h2>
                                <p>We developed an offline-capable React Native application for operators in the Pilbara, allowing them to log pre-start checks and hazards instantly, restoring critical data flows to the Perth head office.</p>
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
                        <h2 id="faq-title">Common questions about mining & resources tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when the mine site has zero cellular coverage?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture (using technologies like IndexedDB or SQLite). Workers can capture data, annotate photos, and sign forms completely offline. The app stores the encrypted payload locally and automatically syncs to the server the moment the device hits camp Wi-Fi or a cellular network.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web dashboards with SAP, Maximo, or Pronto?</summary>
                            <p>Yes. We frequently develop secure middleware layers that pull operational data from heavy ERP and asset management systems, translating it into lightweight, high-performance web dashboards for executive viewing, without risking the core database.</p>
                        </details>
                        <details>
                            <summary>How secure are your contractor and joint-venture portals?</summary>
                            <p>Security is paramount for resources projects. We implement SOC2 compliant architectures on AWS/Azure, utilizing strict Role-Based Access Control (RBAC) via Auth0/Okta, ensuring external contractors or JV partners can only access the exact documentation cleared for their role.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other resources capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/corporate-and-capability-platforms/"><div><small>Marketing</small><h3>Capability Platforms</h3><p>Project scale, safety, and operational excellence.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-contractor-portals/"><div><small>Procurement</small><h3>Contractor Portals</h3><p>Secure digital onboarding for the supply chain.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-inspection-and-maintenance/"><div><small>Site Operations</small><h3>Field Inspections</h3><p>Digitize the pit, the plant, and the port.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/operations-and-hse-dashboards/"><div><small>Executive</small><h3>HSE Dashboards</h3><p>Command center visibility for remote sites.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize operations across <br />your resource portfolio. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From digitizing safety checks at the coal face to giving executives live visibility in Perth, we build the software that keeps the resources sector moving.</p>
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
  "corporate-and-capability-platforms": {
    metaTitle: "Corporate & Capability Platforms",
    eyebrow: "Mining & Resources",
    h1: "Project scale, safety, and operational excellence.",
    lead: "We design robust corporate platforms for mining operators, tier-one contractors, and METS (Mining Equipment, Technology and Services) providers to communicate capability and ESG commitments.",
    status: "Mining Corporate Websites",
    points: [
      "Authoritative UI tailored for government, investors, and joint-venture partners",
      "Interactive asset maps highlighting global operations and resource lifecycles",
      "Clear articulation of zero-harm policies, ESG metrics, and technical capability"
    ],
    proof: [
      ["01 · Bid Support", "A digital presence that backs up your tender submissions."],
      ["02 · Investor Trust", "Provide institutional investors with clear asset overviews."],
      ["03 · Talent Pipeline", "Attract top engineering and operational talent to remote sites."],
      ["04 · High Performance", "Headless architecture that loads instantly, even on remote satellite connections."]
    ],
    problemsIntro: {
      eyebrow: "When capability is hidden",
      asideLead: "You manage billions in assets, but your website says otherwise.",
      title: "Outdated digital footprints cost you contracts.",
      mainLead: "In the resources sector, trust is built on scale, safety, and reliability. If your corporate website is difficult to navigate, looks outdated, or buries your ESG credentials in dense PDFs, you risk losing confidence from government bodies, JV partners, and top-tier talent."
    },
    problems: [
      ["Poor Presentation", "Your flagship engineering feats are poorly photographed and buried in an unsearchable 'projects' page."],
      ["Hidden ESG Metrics", "Investors struggle to find your latest sustainability reports and emissions data."],
      ["Rigid Management", "Your communications team relies on a developer to post urgent community notices or ASX announcements."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for resource leaders.",
      lead: "We build corporate platforms that project the engineering strength and stability of your operations."
    },
    deliverables: [
      ["Interactive Asset Maps", "Custom Mapbox integrations allowing users to explore mine sites, processing plants, and port facilities visually.", "Mapbox", "DataViz", "React"],
      ["ESG & Safety Hubs", "Dedicated sections that clearly communicate your zero-harm initiatives, local community engagement, and environmental targets.", "ESG", "HSE", "Trust"],
      ["Headless CMS Architecture", "Lightning-fast Next.js builds paired with Sanity or Contentful, ensuring zero lag and total editorial control.", "Next.js", "Sanity", "Speed"],
      ["Investor Relations Sync", "Automated feeds that pull live share prices, ASX/TSX announcements, and financial reports directly to the site.", "APIs", "Finance", "Sync"]
    ]
  },
  "supplier-and-contractor-portals": {
    metaTitle: "Supplier & Contractor Portals",
    eyebrow: "Procurement Tech",
    h1: "Secure digital onboarding for the supply chain.",
    lead: "We engineer secure web portals that automate vendor registration, prequalification, and tender management across massive resource projects.",
    status: "Vendor Portals",
    points: [
      "Automated vendor prequalification and KYC/AML compliance workflows",
      "Dynamic document collection for insurances, SWMS, and plant certifications",
      "Secure bid submission vaults with strict timestamp auditing"
    ],
    proof: [
      ["01 · Faster Onboarding", "Reduce contractor approval time from weeks to days."],
      ["02 · Compliance Alerts", "Automated warnings when a contractor's insurance or ticket is about to expire."],
      ["03 · Audit Trails", "Immutable records of every bid submission and document upload."],
      ["04 · ERP Sync", "Push approved vendors directly into SAP, Pronto, or Mincom."]
    ],
    problemsIntro: {
      eyebrow: "When procurement is a bottleneck",
      asideLead: "Managing 1,000 contractors via email is a compliance disaster.",
      title: "Risk mitigation starts at the gate.",
      mainLead: "A typical mining operation relies on hundreds of specialized subcontractors. Managing their prequalification, safety documentation, and insurances through spreadsheets and email attachments creates massive compliance liabilities and slows down mobilization."
    },
    problems: [
      ["Document Chaos", "Procurement managers waste hours digging through emails to find a crane operator's high-risk work license."],
      ["Compliance Blindspots", "A contractor is mobilized to site despite their public liability insurance having expired last week."],
      ["Clunky Tendering", "Distributing massive drawing packages and tender documents via expiring Dropbox links frustrates bidders."]
    ],
    deliverablesIntro: {
      title: "Secure supply chain gateways.",
      lead: "We engineer procurement platforms that enforce compliance and streamline vendor collaboration."
    },
    deliverables: [
      ["Vendor KYC Workflows", "Step-by-step digital forms for subcontractors to submit company details, financial stability data, and safety records.", "Forms", "KYC", "Onboarding"],
      ["Document Expiry Engines", "Automated systems that track expiry dates on uploaded certificates and send warning emails 30 days prior.", "Alerts", "Cron", "Logic"],
      ["Secure Data Rooms", "Encrypted storage vaults where subcontractors can securely download heavy tender packages and CAD models.", "AWS", "Security", "Storage"],
      ["ERP Middleware", "Integration layers that take fully approved vendor data and inject it cleanly into your central financial system.", "APIs", "SAP", "Integration"]
    ]
  },
  "project-and-partner-portals": {
    metaTitle: "Project & Partner Portals",
    eyebrow: "Joint Venture Hubs",
    h1: "Align joint-venture partners and stakeholders.",
    lead: "We develop secure data rooms and collaboration hubs for mining joint ventures, ensuring investors, partners, and government stakeholders have real-time project visibility.",
    status: "JV & Investor Portals",
    points: [
      "Secure, role-based access for JV partners, off-takers, and government bodies",
      "Live data feeds showing project construction progress and capital expenditure",
      "Centralized document vaults for feasibility studies, environmental approvals, and board packs"
    ],
    proof: [
      ["01 · Institutional Trust", "Provide JV partners with the transparency they demand."],
      ["02 · Live Milestones", "Track EPC progress against baseline schedules visually."],
      ["03 · Secure Vault", "Stop emailing highly sensitive financial models and drilling results."],
      ["04 · Centralized Comms", "Move steering committee approvals out of messy email chains."]
    ],
    problemsIntro: {
      eyebrow: "When partners fly blind",
      asideLead: "Managing a $500M joint venture via email attachments is a major risk.",
      title: "Sophisticated capital requires sophisticated reporting.",
      mainLead: "Major resource projects are rarely funded by a single entity. When you have multiple JV partners, government regulators, and institutional investors, relying on monthly PDF reports breeds anxiety and micromanagement. Stakeholders expect secure, real-time transparency."
    },
    problems: [
      ["Information Lag", "Partners only find out about a processing plant delay when they read the monthly steering committee report."],
      ["Scattered Documents", "An investor requests a historical environmental impact statement, triggering a frantic search through internal drives."],
      ["Version Control", "Stakeholders are reviewing outdated capital expenditure forecasts because they missed an email update."]
    ],
    deliverablesIntro: {
      title: "Digital control towers for capital.",
      lead: "We build secure, data-rich portals that aggregate operational data into polished stakeholder experiences."
    },
    deliverables: [
      ["Live Performance Dashboards", "Integrations with your project controls software to show partners live charts of schedule variance and budget burn.", "Dashboards", "BI", "Data"],
      ["Secure Data Rooms", "Encrypted document vaults (AWS S3) with granular permissions, ensuring stakeholders only see data cleared for their role.", "AWS", "Security", "RBAC"],
      ["Media Integration", "Embeds of drone site-surveys and 3D geological models for immersive remote viewing of the asset.", "Media", "3D", "Webcams"],
      ["Digital Sign-offs", "Secure workflows allowing steering committee members to digitally sign off on major variations or budget approvals.", "E-Sign", "Workflows", "Audit"]
    ]
  },
  "asset-inspection-and-maintenance": {
    metaTitle: "Asset, Inspection & Maintenance",
    eyebrow: "Field Mobility",
    h1: "Digitize the pit, the plant, and the port.",
    lead: "We build offline-first mobile apps for field crews to conduct pre-start checks, log equipment defects, and route maintenance tickets instantly.",
    status: "Mining Field Apps",
    points: [
      "Offline-first mobile architecture designed specifically for remote mine sites",
      "Digital pre-starts for heavy mobile equipment (HME) and light vehicles",
      "Automated defect routing directly into maintenance management systems (MMS)"
    ],
    proof: [
      ["01 · Offline Capable", "Operators can complete inspections deep in the pit without a network connection."],
      ["02 · Photo Evidence", "Snap a picture of a hydraulic leak and attach it instantly to the defect ticket."],
      ["03 · Faster Turnaround", "Eliminate the delay of driving paper inspection books back to the crib room."],
      ["04 · Geotagging", "Automatically pin hazards to specific GPS coordinates on the haul road."]
    ],
    problemsIntro: {
      eyebrow: "When the field is disconnected",
      asideLead: "Paper pre-starts are where maintenance data goes to die.",
      title: "Downtime is expensive. Paperwork makes it worse.",
      mainLead: "When operators rely on carbon-copy paper books to conduct pre-start checks on $5M haul trucks, data is lost to dust and rain, maintenance planners receive information days late, and critical defects go unnoticed until the machine breaks down."
    },
    problems: [
      ["Data Entry Delays", "A planner spends Friday afternoon typing week-old paper defect reports into SAP."],
      ["Connection Drops", "Off-the-shelf apps freeze or lose data when the operator drives into a communications black spot."],
      ["Unreadable Forms", "Critical safety observations are ignored because the handwritten note is illegible."]
    ],
    deliverablesIntro: {
      title: "Rugged software for remote operations.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for the realities of a mine site."
    },
    deliverables: [
      ["Offline-First Architecture", "Local caching utilizing IndexedDB so operators can complete complex workflows entirely without an internet connection.", "Offline", "PWA", "Sync"],
      ["Dynamic Smart Forms", "Checklists with conditional logic (e.g., if 'Critical Defect' is selected, the truck is automatically locked out in the system).", "Logic", "Forms", "UI"],
      ["Image Annotation", "Built-in tools allowing users to snap a photo and draw circles or arrows on it before submitting a maintenance request.", "Canvas", "Media", "Mobile"],
      ["MMS Integration", "Middleware that takes field submissions and injects them directly into SAP, Maximo, or Pronto as native work orders.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "operations-and-hse-dashboards": {
    metaTitle: "Operations & HSE Dashboards",
    eyebrow: "Executive Operations",
    h1: "Command center visibility for remote sites.",
    lead: "We aggregate data from fleet management systems, ERPs, and IoT sensors to provide executives with live dashboards tracking production metrics, cash flow, and HSE (Health, Safety, Environment) compliance.",
    status: "Mine Dashboards",
    points: [
      "Unified BI dashboards combining tons-moved, plant throughput, and financial data",
      "Live tracking of Total Recordable Injury Frequency Rates (TRIFR) and hazard reports",
      "Predictive analytics for equipment availability and operational bottlenecks"
    ],
    proof: [
      ["01 · Single Source of Truth", "Stop arguing over whose spreadsheet has the correct daily production numbers."],
      ["02 · Risk Identification", "Spot safety trends or throughput bottlenecks before they impact the monthly target."],
      ["03 · HSE Roll-ups", "Track safety compliance across multiple sites and contracting companies instantly."],
      ["04 · Automated Board Packs", "Turn three days of report formatting into a single click."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't steer a multi-billion dollar asset looking in the rearview mirror.",
      title: "Data silos are hiding operational inefficiencies.",
      mainLead: "Mining executives are drowning in data but starving for insight. With fleet data in Modular, processing data in SCADA, and safety data in INX, leadership cannot make rapid, profitable decisions because the data is never in one place at the same time."
    },
    problems: [
      ["Siloed Intelligence", "The pit is hitting production targets, but the processing plant is bottlenecked, and leadership can't see the disconnect."],
      ["Manual Reporting", "Highly paid engineers spend a week every month just formatting data exports into PowerPoint slides for the board."],
      ["Reactive Management", "Leadership only finds out about a spike in hazard reports when an incident actually occurs."]
    ],
    deliverablesIntro: {
      title: "Business intelligence for mining leaders.",
      lead: "We engineer data aggregation platforms that give executives the exact metrics they need to protect margins and safety."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visualizations of daily production (BCM/Tonnes), cash flow, and unit costs across all active sites.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (FMS, SCADA, ERP) and normalize it in Snowflake or AWS.", "ETL", "Cloud", "Data"],
      ["HSE Heatmaps", "Interactive dashboards that visualize safety leading indicators (hazard reports, near misses) to predict incident risks.", "HSE", "Analytics", "Safety"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for steering committees and site general managers.", "Reporting", "PDFs", "Automation"]
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
