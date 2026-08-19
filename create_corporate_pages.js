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
                            <p className="eyebrow">Featured Corporate Platform</p>
                            <h2>Digitizing the social license to operate.</h2>
                        </div>
                        <p>See how we helped a tier-one resource company consolidate their investor communications, community grant applications, and site contractor inductions into a single, highly secure digital ecosystem.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Corporate Tech</span>
                                <span>ESG & Stakeholder Management</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/corporate-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Visibility from the board to the pit.</h2>
                                <p>We developed a headless corporate architecture that seamlessly handles massive traffic spikes during quarterly reporting, while privately serving secure portals for local community stakeholders and tier-one contractors.</p>
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
                        <h2 id="faq-title">Common questions about corporate & resource tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate live share prices and ASX/NYSE announcements?</summary>
                            <p>Yes. We regularly integrate with financial data providers (like IRESS or EQS) to display real-time share price charts and automatically publish market announcements to your corporate website without double-handling data.</p>
                        </details>
                        <details>
                            <summary>How do you handle security for corporate and investor platforms?</summary>
                            <p>We build using Headless CMS architecture and static-site generation (Next.js). This means there is no traditional database exposed to the public internet, virtually eliminating the risk of SQL injection or WordPress-style vulnerabilities, ensuring your market-sensitive data is secure.</p>
                        </details>
                        <details>
                            <summary>Do your site workflow apps work completely offline in remote areas?</summary>
                            <p>Absolutely. We specialize in Offline-First progressive web and mobile applications using local device databases. Site workers can complete hazard reports, vehicle pre-starts, and asset inspections entirely offline; the app will automatically sync when they return to the site office Wi-Fi.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other corporate capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/corporate-and-investor-websites/"><div><small>Communications</small><h3>Investor Websites</h3><p>Communicate scale, governance, and value.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/community-and-stakeholder-portals/"><div><small>Engagement</small><h3>Stakeholder Portals</h3><p>Transparent community engagement.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/corporate-supplier-and-contractor-portals/"><div><small>Procurement</small><h3>Contractor Portals</h3><p>Streamline vendor onboarding.</p></div><b>Explore procurement ↗</b></a>
                        <a className="related-card" href="/services/operations-and-esg-dashboards/"><div><small>Analytics</small><h3>ESG Dashboards</h3><p>Visibility across production and sustainability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your corporate <br />and operational footprint. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From highly secure investor websites to offline hazard reporting apps on remote sites, we build software that drives governance and operational efficiency.</p>
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
  "corporate-and-investor-websites": {
    metaTitle: "Corporate & Investor Websites",
    eyebrow: "Corporate Communications",
    h1: "Communicate scale, governance, and value.",
    lead: "We design high-performance corporate websites for resource and infrastructure companies, ensuring investors and media have instant access to market announcements, share prices, and ESG reports.",
    status: "Corporate Websites",
    points: [
      "Ultra-secure Headless CMS architecture preventing unauthorized access to market-sensitive data",
      "Live API integrations with financial data providers (ASX, NYSE, IRESS) for stock charts",
      "High-performance global hosting to handle massive traffic spikes during quarterly reporting"
    ],
    proof: [
      ["01 · Unbreakable Security", "Headless architecture eliminates traditional CMS vulnerabilities."],
      ["02 · Live Market Data", "Automated feeds for share prices and stock exchange announcements."],
      ["03 · ESG Showcase", "Interactive hubs for sustainability reports and governance policies."],
      ["04 · Traffic Resilience", "Edge-caching ensures the site stays fast during major news events."]
    ],
    problemsIntro: {
      eyebrow: "When corporate communications fail",
      asideLead: "Investors shouldn't struggle to find your latest quarterly report.",
      title: "Poor digital governance destroys market confidence.",
      mainLead: "Major resource and infrastructure companies are judged by their transparency and digital presence. If your corporate website is slow, vulnerable to hacking, or requires manual uploads for every market announcement, you are creating compliance risks and frustrating institutional investors."
    },
    problems: [
      ["Security Vulnerabilities", "Your current WordPress site is constantly targeted by bots, risking the leak of embargoed financial data."],
      ["Delayed Announcements", "Manual processes mean your website is hours behind the official stock exchange feed."],
      ["Poor Investor UX", "Analysts struggle to find historical financial data because PDFs are buried in disorganized folders."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for listed companies.",
      lead: "We build platforms that project stability, scale, and uncompromising governance."
    },
    deliverables: [
      ["Headless CMS Architecture", "Implementations using Sanity or Contentful that decouple the database from the public site, ensuring maximum security.", "Security", "CMS", "Speed"],
      ["Financial Data Integrations", "Secure middleware that pulls live charting data, historical prices, and official announcements directly from market APIs.", "APIs", "Finance", "React"],
      ["Interactive ESG Hubs", "Dedicated micro-sites that visualize your carbon reduction goals, diversity metrics, and community investments.", "ESG", "DataViz", "Brand"],
      ["Global Edge Hosting", "Deployment on Vercel or AWS Edge networks to ensure lightning-fast load times for international investors.", "DevOps", "Performance", "Scale"]
    ]
  },
  "community-and-stakeholder-portals": {
    metaTitle: "Community & Stakeholder Portals",
    eyebrow: "Stakeholder Engagement",
    h1: "Transparent community engagement.",
    lead: "We build secure portals that manage community grants, local employment initiatives, and environmental impact reporting, proving your social license to operate.",
    status: "Stakeholder Portals",
    points: [
      "Digital grant application and assessment workflows for community funding programs",
      "Interactive environmental monitoring dashboards (noise, dust, water) for local transparency",
      "Supplier registration gateways prioritizing local and Indigenous businesses"
    ],
    proof: [
      ["01 · Social License", "Prove your commitment to the region with transparent digital engagement."],
      ["02 · Streamlined Grants", "Move community funding applications out of messy email chains."],
      ["03 · Environmental Trust", "Show local residents live data on noise and dust monitoring."],
      ["04 · Local Procurement", "Make it easy for regional businesses to pre-qualify as suppliers."]
    ],
    problemsIntro: {
      eyebrow: "When engagement is reactive",
      asideLead: "Community trust is lost when stakeholders feel ignored or uninformed.",
      title: "Poor stakeholder management risks major projects.",
      mainLead: "Large-scale operations exist alongside local communities. When grant applications are lost in emails, environmental complaints go unanswered, and local businesses struggle to register as suppliers, the community turns hostile, threatening your social license to operate."
    },
    problems: [
      ["Grant Administration Chaos", "The corporate affairs team spends weeks manually sorting through PDF applications for community funding."],
      ["Information Voids", "Local residents turn to social media rumors because they can't easily find official environmental monitoring data."],
      ["Procurement Friction", "Local businesses complain they are locked out of major projects because the supplier registration process is opaque."]
    ],
    deliverablesIntro: {
      title: "Platforms that build trust.",
      lead: "We engineer digital spaces that foster positive, transparent relationships with project stakeholders."
    },
    deliverables: [
      ["Grant Management Portals", "Secure forms where community groups can submit funding applications, track status, and upload post-project acquittals.", "Forms", "Workflows", "Community"],
      ["Environmental Transparency Dashboards", "Public-facing interfaces that map live or delayed IoT sensor data (air quality, noise) to reassure local residents.", "IoT", "DataViz", "Trust"],
      ["Local Supplier Gateways", "Registration portals specifically designed to identify and fast-track local or Indigenous-owned businesses into the procurement pipeline.", "B2B", "Procurement", "ESG"],
      ["Grievance Management Workflows", "Structured digital ticketing systems for community complaints, ensuring every issue is logged, assigned, and resolved.", "Ticketing", "Compliance", "Comms"]
    ]
  },
  "corporate-supplier-and-contractor-portals": {
    metaTitle: "Supplier & Contractor Portals",
    eyebrow: "Procurement & Compliance",
    h1: "Streamline vendor onboarding and compliance.",
    lead: "We engineer secure B2B portals for major projects, automating contractor inductions, tracking insurance expiries, and managing tender submissions.",
    status: "Contractor Portals",
    points: [
      "Automated vendor pre-qualification workflows capturing insurances, safety records, and certifications",
      "Digital site induction systems delivering safety videos and capturing digital signatures",
      "Secure document vaults for distributing tender packages and receiving bids"
    ],
    proof: [
      ["01 · Compliance Enforcement", "Ensure no vendor enters a site with expired public liability insurance."],
      ["02 · Faster Inductions", "Contractors arrive on day one already inducted and ready to work."],
      ["03 · Tender Security", "Distribute massive engineering packages securely to approved bidders."],
      ["04 · Audit Trails", "Immutable records of every submitted compliance document."]
    ],
    problemsIntro: {
      eyebrow: "When procurement is manual",
      asideLead: "Managing 500 contractors via spreadsheets is a massive safety and financial risk.",
      title: "Vendor friction slows down project delivery.",
      mainLead: "Major infrastructure and resource projects run on contractors. When safety inductions are done on paper, insurance expiries are tracked in Excel, and tenders are managed via Dropbox, your procurement and HSE teams are bogged down in administration instead of driving project value."
    },
    problems: [
      ["Compliance Lapses", "A subcontractor is involved in an incident, and you discover their Workers Compensation insurance expired a month ago."],
      ["Induction Bottlenecks", "Dozens of workers sit in a site shed for four hours completing paper inductions instead of turning tools."],
      ["Tender Chaos", "Engineering drawings are lost or version-control is broken because they were distributed via disparate email chains."]
    ],
    deliverablesIntro: {
      title: "Streamlined vendor management.",
      lead: "We build secure portals that act as the central compliance and procurement hub for your operations."
    },
    deliverables: [
      ["Automated Compliance Tracking", "Dashboards that visually flag expiring insurances and automatically lock non-compliant vendors out of the site access system.", "Compliance", "Alerts", "Logic"],
      ["Digital Induction Workflows", "Modules that allow workers to watch site-specific safety videos, complete quizzes, and sign off digitally before arriving.", "Safety", "Forms", "Mobile"],
      ["Tender & Bid Portals", "Secure data rooms where pre-qualified suppliers can download massive CAD files and submit structured commercial bids.", "B2B", "Security", "Procurement"],
      ["ERP / Finance Middleware", "Integration layers that push approved vendor details directly into SAP or Oracle, eliminating double data entry.", "APIs", "Integration", "ERP"]
    ]
  },
  "site-asset-and-workflows": {
    metaTitle: "Site, Asset & Workflows",
    eyebrow: "Field Operations",
    h1: "Digitize remote site operations.",
    lead: "We develop offline-capable mobile apps and workflow tools for remote sites, enabling digital pre-starts, hazard reporting, and asset inspections without cellular coverage.",
    status: "Field Mobility Apps",
    points: [
      "True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite) for remote areas",
      "Digital vehicle pre-starts, JSEAs (Job Safety Environmental Analyses), and hazard observation forms",
      "Asset inspection tools with barcode/QR scanning and geotagged photo attachments"
    ],
    proof: [
      ["01 · Never Lose Data", "Workers can complete safety forms deep in a pit without 4G connectivity."],
      ["02 · Eliminate Paper", "Stop manually transcribing wet, dirty hazard reports at the end of the shift."],
      ["03 · Instant Alerts", "Critical hazards sync immediately to the HSE manager when the tablet hits Wi-Fi."],
      ["04 · Asset Traceability", "Scan a pump's QR code and instantly view its entire maintenance history."]
    ],
    problemsIntro: {
      eyebrow: "When the site is a black spot",
      asideLead: "If your safety app requires an internet connection, it's useless on a remote project.",
      title: "Poor connectivity destroys operational integrity.",
      mainLead: "Heavy industry happens where cellular networks often don't exist. When field workers are forced to use web-based tools that drop out, they revert to writing safety forms on paper or skipping them entirely. This means critical hazard data is siloed, delayed, and requires hours of double-entry."
    },
    problems: [
      ["Double Data Entry", "A supervisor spends three hours every evening typing paper Take-5 forms into the corporate safety system."],
      ["Delayed Hazard Response", "A critical equipment fault is written on a paper pre-start, but the mechanic doesn't receive the paperwork until the next day."],
      ["App Frustration", "Off-the-shelf enterprise apps freeze and crash when a worker drives out of Wi-Fi range."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the field.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for harsh, disconnected environments."
    },
    deliverables: [
      ["Offline-First Architecture", "Advanced local caching allowing users to create records, attach photos, and run complex forms entirely offline.", "Offline", "PWA", "Sync"],
      ["Smart Safety Forms", "Customizable digital checklists for JSEAs, Take-5s, and incidents, utilizing conditional logic to speed up data entry.", "Forms", "Logic", "UX"],
      ["QR & Barcode Asset Scanning", "Native integrations allowing the app to scan an asset tag and instantly retrieve its manuals and inspection history.", "Hardware", "Assets", "Mobile"],
      ["Background Sync Engines", "Background processes that detect when cellular or site Wi-Fi is restored and quietly push all saved data to the central server.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "operations-and-esg-dashboards": {
    metaTitle: "Operations & ESG Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across production and sustainability.",
    lead: "We aggregate data from site SCADA systems, fleet management, and environmental sensors into executive dashboards tracking production yield, emissions, and safety incidents.",
    status: "Executive Dashboards",
    points: [
      "Unified BI dashboards combining live production volumes, equipment downtime, and safety metrics",
      "Automated ESG (Environmental, Social, Governance) reporting capturing Scope 1 & Scope 2 emissions",
      "Predictive analytics to identify operational bottlenecks and maintenance requirements"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your ERP, SCADA, and HSE systems into one executive view."],
      ["02 · Automated ESG", "Stop manually calculating carbon emissions in spreadsheets every quarter."],
      ["03 · Production Visibility", "Instantly see if a specific site is trailing its daily tonnage targets."],
      ["04 · Board-Ready Reports", "Turn disparate operational data into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a multi-billion dollar operation looking at last month's spreadsheets.",
      title: "Data silos hide the reality of operations.",
      mainLead: "Corporate leaders are forced to make high-stakes decisions with fragmented data. If your production data is in a site historian, your safety data is in a legacy app, and your emissions data is in a massive Excel file, you cannot react fast enough to operational bottlenecks or regulatory pressures."
    },
    problems: [
      ["ESG Reporting Burden", "Sustainability teams spend weeks manually extracting fuel usage and electricity data just to build the annual ESG report."],
      ["Hidden Downtime", "A specific processing plant is consistently underperforming, but the trend isn't visible until the end-of-month reconciliation."],
      ["Reactive Maintenance", "Equipment fails catastrophically because condition-monitoring data wasn't surfaced to the right executives in time."]
    ],
    deliverablesIntro: {
      title: "Command centers for corporate leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize yield and prove sustainability."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like Total Recordable Injury Frequency Rate (TRIFR), daily tonnage, and OEE.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (SCADA, Fleet Management, ERP) and normalize it in the cloud.", "ETL", "Cloud", "Data"],
      ["ESG & Emissions Tracking", "Custom calculators that convert raw energy and fuel data into compliant Scope 1 and Scope 2 carbon equivalents.", "ESG", "Analytics", "React"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for investors, boards, and site managers.", "Reporting", "PDFs", "Automation"]
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
