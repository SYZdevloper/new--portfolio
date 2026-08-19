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
                            <p className="eyebrow">Featured Energy Platform</p>
                            <h2>Powering the transition.</h2>
                        </div>
                        <p>See how we helped a national renewable energy developer digitize their site assessment workflows and build investor-facing ESG dashboards, accelerating capital deployment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Energy Tech</span>
                                <span>SCADA Integration & Dashboards</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/energy-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Data-driven infrastructure.</h2>
                                <p>We developed a custom web application that ingests live generation data from solar farms, calculates real-time ESG metrics, and presents them in a secure portal for institutional investors.</p>
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
                        <h2 id="faq-title">Common questions about energy & utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with our existing SCADA or BMS systems?</summary>
                            <p>Yes. We regularly build middleware (using Node.js or Python) that securely extracts telemetry data from legacy SCADA systems, normalizes it, and pipes it into modern cloud data warehouses like AWS Redshift or Snowflake for visualization.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work for technicians in remote wind farms?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps (PWAs) and React Native mobile apps. Technicians can log maintenance data, capture photos, and run diagnostic checklists offline; the app will automatically sync payloads once a connection is re-established.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for investor portals?</summary>
                            <p>We implement enterprise-grade security protocols, including SOC2 compliant AWS architecture, strict Role-Based Access Control (RBAC) via Auth0 or Okta, and end-to-end encryption to ensure sensitive financial and PPA data is totally secure.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other energy capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-and-capability-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Build public trust and showcase energy capabilities.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-proposal-workflows/"><div><small>Sales</small><h3>Proposal Workflows</h3><p>Digitize feasibility studies and solar proposals.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/customer-and-investor-portals/"><div><small>Stakeholders</small><h3>Investor Portals</h3><p>Secure environments for off-takers and investors.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-and-maintenance-workflows/"><div><small>Operations</small><h3>Maintenance Apps</h3><p>Keep critical infrastructure online and compliant.</p></div><b>Explore apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your energy <br />infrastructure and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automating field maintenance to providing investors with live generation data, we build software that powers the transition.</p>
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
  "project-and-capability-websites": {
    metaTitle: "Project & Capability Websites",
    eyebrow: "Energy & Infrastructure",
    h1: "Build public trust and showcase energy capabilities.",
    lead: "We design high-performance websites for renewable energy developers, utility providers, and infrastructure funds to communicate scale, ESG commitments, and technical expertise.",
    status: "Corporate Energy Websites",
    points: [
      "Authoritative web design tailored for government, enterprise, and community stakeholders",
      "Interactive asset maps showing live projects, grid connections, and generation stats",
      "Dedicated community consultation portals for major infrastructure developments"
    ],
    proof: [
      ["01 · Community Trust", "Communicate project impact clearly during the planning phase."],
      ["02 · Investor Appeal", "Showcase your portfolio of operational and pipeline assets."],
      ["03 · ESG Clarity", "Highlight your commitment to net-zero and sustainability metrics."],
      ["04 · High Performance", "Fast-loading architecture that handles 4K drone footage seamlessly."]
    ],
    problemsIntro: {
      eyebrow: "When public perception lags",
      asideLead: "You are building the future of the grid, but your website looks like it's from 2010.",
      title: "Major infrastructure requires major digital authority.",
      mainLead: "Renewable energy and infrastructure projects face immense scrutiny from local communities, government regulators, and institutional investors. A fragmented, outdated website breeds distrust and fails to communicate the technical sophistication of your operations."
    },
    problems: [
      ["Community Pushback", "NIMBY groups control the narrative because your project information is buried in unreadable PDFs."],
      ["Hidden Scale", "Investors can't easily visualize the geographical spread and total MW capacity of your portfolio."],
      ["Rigid CMS", "Your communications team has to hire a developer just to publish a press release or update an ESG metric."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for energy leaders.",
      lead: "We build corporate platforms that project stability, scale, and technical excellence."
    },
    deliverables: [
      ["Interactive Asset Maps", "Custom Mapbox integrations that allow users to explore your solar, wind, and battery assets globally.", "Mapbox", "DataViz", "React"],
      ["Community Consultation Hubs", "Dedicated micro-sites for specific wind or solar farm developments, complete with feedback forms and timelines.", "Hubs", "Forms", "Trust"],
      ["Dynamic ESG Reporting", "Visual blocks that pull live data (e.g., CO2 offset, MW generated) directly into your website.", "ESG", "APIs", "Metrics"],
      ["Headless CMS Architecture", "Lightning-fast Next.js builds paired with Sanity or Contentful, empowering your comms team to publish instantly.", "Next.js", "Sanity", "Speed"]
    ]
  },
  "assessments-and-proposal-workflows": {
    metaTitle: "Assessments & Proposal Workflows",
    eyebrow: "Commercial & Residential Sales",
    h1: "Digitize feasibility studies and solar proposals.",
    lead: "We build custom software that automates site assessments, calculates ROI for commercial solar/battery installations, and generates dynamic digital proposals.",
    status: "Proposal Engines",
    points: [
      "Custom algorithms to calculate solar yield, battery storage requirements, and ROI",
      "Tablet apps for sales engineers to conduct rapid on-site roof and electrical assessments",
      "Automated generation of interactive, web-based commercial proposals"
    ],
    proof: [
      ["01 · Faster Quoting", "Reduce commercial solar proposal generation from days to minutes."],
      ["02 · Accurate Yields", "Integrate with API weather and irradiance data for precise ROI."],
      ["03 · Digital Sign-offs", "Get Power Purchase Agreements (PPAs) signed directly in the browser."],
      ["04 · CRM Sync", "Automatically push closed-won deals into Salesforce or HubSpot."]
    ],
    problemsIntro: {
      eyebrow: "When quoting is a bottleneck",
      asideLead: "Engineering shouldn't be spending hours copying data into Excel.",
      title: "Manual proposals limit your sales velocity.",
      mainLead: "Commercial solar, HVAC, and energy efficiency retrofits require complex calculations. If your sales engineers are manually pulling satellite imagery, checking tariff rates, and building Excel models for every quote, your cost of acquisition is far too high."
    },
    problems: [
      ["Human Error", "A typo in an Excel formula results in a commercial proposal that underestimates the payback period by two years."],
      ["Slow Turnarounds", "It takes a week to get a quote to a client, and a competitor wins the deal in the meantime."],
      ["Static PDFs", "You send a 30-page PDF proposal and have no idea if the CFO ever actually read it."]
    ],
    deliverablesIntro: {
      title: "Automated energy sales engines.",
      lead: "We engineer software that turns complex energy calculations into beautiful, instantly generated proposals."
    },
    deliverables: [
      ["Site Assessment Apps", "Tablet-optimized forms for engineers to log switchboard photos, roof pitch, and shading details on site.", "Mobile", "Forms", "UX"],
      ["Yield & ROI Calculators", "Custom backend logic (Node/Python) that calculates financial payback models based on local grid tariffs.", "Logic", "Algorithms", "Math"],
      ["Interactive Digital Proposals", "Web-based quotes where clients can toggle between cash-purchase or PPA options and see ROI change in real-time.", "React", "Dynamic", "UX"],
      ["Automated Contract Generation", "Systems that automatically populate Docusign contracts the moment a client clicks 'Accept'.", "E-Sign", "APIs", "Legal"]
    ]
  },
  "customer-and-investor-portals": {
    metaTitle: "Customer & Investor Portals",
    eyebrow: "Stakeholder Portals",
    h1: "Secure environments for off-takers and investors.",
    lead: "We engineer secure web portals that provide real-time visibility into project milestones, PPA (Power Purchase Agreement) performance, and financial returns for institutional investors.",
    status: "Investor Dashboards",
    points: [
      "Secure, role-based access for institutional investors, banks, and corporate off-takers",
      "Live data feeds showing project construction progress and operational MW generation",
      "Centralized document vaults for financial models, compliance reports, and tax documents"
    ],
    proof: [
      ["01 · Institutional Trust", "Provide pension funds and banks with the transparency they demand."],
      ["02 · Live Generation Data", "Off-takers can see exactly how much green energy they are drawing."],
      ["03 · Secure Vault", "Stop emailing highly sensitive financial models and PPAs."],
      ["04 · Automated Reporting", "Reduce the overhead of manually compiling monthly investor updates."]
    ],
    problemsIntro: {
      eyebrow: "When investors fly blind",
      asideLead: "Managing $100M of institutional capital via email attachments is a major risk.",
      title: "Sophisticated capital requires sophisticated reporting.",
      mainLead: "Institutional investors and corporate off-takers (like Amazon or Google buying your wind power) expect real-time transparency. If you are managing investor relations through massive email threads and Dropbox links, you risk compliance breaches and client frustration."
    },
    problems: [
      ["Information Lag", "Investors only find out about a grid-connection delay when they read the monthly PDF report."],
      ["Scattered Documents", "A bank requests a historical compliance certificate, triggering a frantic search through internal drives."],
      ["Manual Overhead", "Your finance team wastes three days every month formatting generation data into PowerPoint slides."]
    ],
    deliverablesIntro: {
      title: "Digital control towers for capital.",
      lead: "We build secure, data-rich portals that aggregate operational data into polished stakeholder experiences."
    },
    deliverables: [
      ["Live Performance Dashboards", "Integrations with your SCADA data lake to show investors live charts of uptime, curtailment, and yield.", "SCADA", "Charts", "BI"],
      ["Secure Data Rooms", "Encrypted document vaults (AWS S3) with granular permissions, ensuring LPs only see their specific fund data.", "AWS", "Security", "RBAC"],
      ["Development Timelines", "Visual roadmaps tracking EPC milestones, grid connection approvals, and commissioning dates.", "Timelines", "UX", "Tracking"],
      ["Automated Dividend/Yield Reports", "Engines that pull data from your ERP to dynamically generate individual financial statements.", "ERP", "PDFs", "Finance"]
    ]
  },
  "asset-and-maintenance-workflows": {
    metaTitle: "Asset & Maintenance Workflows",
    eyebrow: "Field Operations",
    h1: "Keep critical infrastructure online and compliant.",
    lead: "We develop offline-capable mobile apps for field technicians to conduct grid inspections, log wind turbine defects, and track preventative maintenance schedules.",
    status: "Field Mobility Apps",
    points: [
      "Offline-first mobile architecture for remote wind, solar, and grid infrastructure",
      "Digital safety workflows (JSA/SWMS) integrated directly into maintenance tickets",
      "Automated syncing of field data with core asset management systems (Maximo/SAP)"
    ],
    proof: [
      ["01 · Offline Capable", "Technicians can log defects in remote areas with zero cellular reception."],
      ["02 · Photo Evidence", "Attach annotated photos directly to the specific turbine component ticket."],
      ["03 · Safety First", "Enforce digital safety checks before a technician can begin a high-voltage task."],
      ["04 · ERP Integration", "Eliminate double data entry by syncing field apps directly with IBM Maximo."]
    ],
    problemsIntro: {
      eyebrow: "When the field is disconnected",
      asideLead: "Paper forms don't belong on a $50M wind turbine.",
      title: "Downtime is expensive. Paperwork makes it worse.",
      mainLead: "Maintaining critical energy infrastructure requires precision. When technicians rely on paper checklists or clunky legacy software that crashes offline, preventative maintenance schedules are missed, data is lost to the elements, and asset lifespans degrade."
    },
    problems: [
      ["Data Loss", "A technician completes a detailed transformer inspection, but the paper gets ruined in the rain."],
      ["Sync Failures", "Off-the-shelf apps freeze when transitioning between offline and online states on remote sites."],
      ["Compliance Risks", "There is no verifiable timestamp to prove a technician completed a safety check before starting work."]
    ],
    deliverablesIntro: {
      title: "Rugged software for remote operations.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for harsh field environments."
    },
    deliverables: [
      ["Offline-First Architecture", "Local caching utilizing IndexedDB so technicians can complete complex workflows entirely without an internet connection.", "Offline", "PWA", "Sync"],
      ["Smart Inspection Forms", "Checklists with conditional logic (e.g., if 'Corrosion' is selected, a photo upload becomes mandatory).", "Logic", "Forms", "UI"],
      ["Image Annotation", "Built-in tools allowing technicians to snap a photo of a cracked solar panel and draw a red circle around the defect.", "Canvas", "Media", "Mobile"],
      ["Asset Management Sync", "Middleware that injects field submissions directly into SAP, Maximo, or your bespoke asset registry.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "energy-and-esg-dashboards": {
    metaTitle: "Energy & ESG Dashboards",
    eyebrow: "Executive Operations",
    h1: "Real-time visibility into generation and emissions.",
    lead: "We aggregate SCADA data, smart meter feeds, and financial systems into executive dashboards, tracking live megawatt generation, grid constraints, and ESG reporting metrics.",
    status: "Operational Dashboards",
    points: [
      "Unified BI dashboards combining live telemetry (IoT/SCADA) with financial market data",
      "Automated carbon accounting and Scope 1/2/3 emission tracking",
      "Predictive analytics for curtailment risks and preventative maintenance"
    ],
    proof: [
      ["01 · Single Source of Truth", "Stop hunting across five different vendor platforms for data."],
      ["02 · Live Telemetry", "Monitor live generation (MW), battery state-of-charge, and grid pricing."],
      ["03 · ESG Automation", "Turn raw energy data into auditable sustainability reports instantly."],
      ["04 · Predictive Alerts", "Get notified of inverter faults before they cause massive downtime."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't optimize a gigawatt portfolio using yesterday's spreadsheets.",
      title: "Data silos are hiding operational inefficiencies.",
      mainLead: "Energy operators are drowning in data but starving for insight. With turbine data in one system, battery telemetry in another, and wholesale grid pricing in a third, executives cannot make rapid, profitable decisions during grid volatility."
    },
    problems: [
      ["Siloed Intelligence", "An inverter goes offline at a solar farm, but the operations center doesn't notice until the daily report is generated."],
      ["Manual ESG Reporting", "Sustainability managers spend weeks manually calculating Scope 2 emissions for regulatory compliance."],
      ["Missed Opportunities", "Without live visibility into battery charge states vs. grid pricing, you are leaving arbitrage money on the table."]
    ],
    deliverablesIntro: {
      title: "Command centers for the energy transition.",
      lead: "We engineer data aggregation platforms that give executives the exact metrics they need to optimize yield."
    },
    deliverables: [
      ["Telemetry Aggregation", "Pipelines that extract high-frequency data from SCADA systems and normalize it in a cloud data warehouse.", "ETL", "AWS/GCP", "Data"],
      ["Real-Time Dashboards", "React-based operational interfaces with sub-second latency for monitoring grid frequency and asset status.", "React", "WebSockets", "BI"],
      ["Carbon Accounting Engines", "Algorithms that translate raw energy consumption/generation data into standardized ESG reporting frameworks.", "Logic", "Math", "Reporting"],
      ["Automated Alerts", "Systems that trigger SMS or email warnings when assets underperform against expected weather-adjusted models.", "Alerts", "Twilio", "DevOps"]
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
