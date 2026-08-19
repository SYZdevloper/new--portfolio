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
                            <p className="eyebrow">Featured Forestry Platform</p>
                            <h2>From seedling to sawmill.</h2>
                        </div>
                        <p>See how we helped a large-scale forestry operation digitize their entire supply chain, connecting offline harvest apps in remote forests directly to haulage contractors and the final mill destination.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Forestry Tech</span>
                                <span>GIS & Logistics Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/forestry-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Visibility across the timber lifecycle.</h2>
                                <p>We developed a custom geospatial platform that tracks compartment inventories, generates digital harvest dockets offline, and automatically reconciles weighbridge data at the mill to ensure contractors are paid accurately.</p>
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
                        <h2 id="faq-title">Common questions about forestry & agricultural services tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do offline mobile apps work in remote forest compartments?</summary>
                            <p>We build 'Offline-First' progressive web and mobile applications using local device databases. Foresters and contractors can create harvest dockets, log safety incidents, and map areas entirely offline. The data automatically syncs via cellular or satellite connections when they return to coverage.</p>
                        </details>
                        <details>
                            <summary>Can you integrate GIS (Geographic Information Systems) into portals?</summary>
                            <p>Yes. We regularly integrate Mapbox, ArcGIS, and custom geospatial layers into portals, allowing managers to visually track harvest boundaries, environmental buffers, and haulage routes directly within their operational dashboard.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex contractor payments and reconciliations?</summary>
                            <p>We build automated middleware that links digital harvest dockets generated in the field with weighbridge data from the mill. This logic engine instantly calculates contractor pay based on complex matrix rates (distance, grade, species) and pushes approved invoices to your ERP.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other forestry capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/forestry-and-input-platforms/"><div><small>Marketing</small><h3>Input Platforms</h3><p>Showcase products and technical specifications.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/contractor-and-operator-portals/"><div><small>Operations</small><h3>Contractor Portals</h3><p>Manage vendors, compliance, and payments.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/harvest-and-logistics-workflows/"><div><small>Supply Chain</small><h3>Harvest Logistics</h3><p>Digitize the journey from forest to mill.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-and-survey-workflows/"><div><small>Mobility</small><h3>Field Workflows</h3><p>Capture geospatial data offline.</p></div><b>Explore mobility ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your forestry <br />and agricultural operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline harvest apps in remote forests to complex weighbridge integrations and contractor portals, we build software that drives resource efficiency.</p>
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
  "forestry-and-input-platforms": {
    metaTitle: "Forestry & Input Platforms",
    eyebrow: "Product Platforms",
    h1: "Showcase products and technical specifications.",
    lead: "We design high-performance websites for forestry suppliers, input manufacturers, and service organizations to clearly communicate capabilities, technical data, and sustainability.",
    status: "Forestry Websites",
    points: [
      "Dynamic catalogs for silviculture inputs, seedlings, and specialized equipment",
      "Interactive coverage maps highlighting operational regions and service areas",
      "High-performance architecture ensuring fast load times for global procurement teams"
    ],
    proof: [
      ["01 · Technical Clarity", "Easily display complex specifications, SDS, and yield data."],
      ["02 · Sustainability Trust", "Showcase FSC or PEFC certifications clearly to corporate buyers."],
      ["03 · B2B Discovery", "Help corporate land managers find your specific services and capabilities."],
      ["04 · Low Bandwidth", "Optimized media delivery for fast loading in rural areas."]
    ],
    problemsIntro: {
      eyebrow: "When capabilities are hidden",
      asideLead: "Corporate forestry managers shouldn't have to guess if you have the capacity for a 10,000-hectare project.",
      title: "Vague online presence loses major contracts.",
      mainLead: "Forestry and large-scale agricultural services require immense trust. If your website fails to clearly articulate your equipment fleet, safety certifications, and technical expertise, major corporate or government clients will bypass you for a competitor who looks more capable on screen."
    },
    problems: [
      ["Generic Branding", "Your highly specialized silviculture operation is presented on a website that looks like a standard landscaping business."],
      ["Hidden Certifications", "Procurement teams struggle to find your safety and environmental audit reports."],
      ["Poor Mobile UX", "Clients struggle to read your service capabilities on their phones while out in the field."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for forestry services.",
      lead: "We build platforms that turn your operational scale and safety record into a competitive advantage."
    },
    deliverables: [
      ["Service Catalogs", "Headless CMS implementations allowing your team to update equipment fleets and service lines instantly.", "CMS", "Data", "Speed"],
      ["Interactive Coverage Maps", "Custom Mapbox integrations that visually demonstrate your operational footprint and logistics hubs.", "Maps", "Scale", "UX"],
      ["Certification Vaults", "Dedicated sections for displaying live safety statistics, environmental policies, and FSC/PEFC certifications.", "Trust", "B2B", "Compliance"],
      ["Lead Generation Funnels", "Optimized enquiry forms tailored to large-scale procurement and tender requests.", "Leads", "Forms", "Conversion"]
    ]
  },
  "contractor-and-operator-portals": {
    metaTitle: "Contractor & Operator Portals",
    eyebrow: "Operations",
    h1: "Manage vendors, compliance, and payments.",
    lead: "We build secure portals that streamline onboarding, compliance tracking, and automated payment reconciliations for your network of harvest and haulage contractors.",
    status: "Contractor Portals",
    points: [
      "Digital onboarding workflows ensuring contractors meet strict safety and insurance requirements",
      "Automated document expiry tracking for licenses, vehicle registrations, and public liability",
      "Self-serve portals for contractors to view dockets, rates, and upcoming payments"
    ],
    proof: [
      ["01 · Compliance Enforcement", "Ensure no contractor enters a forest with expired insurance."],
      ["02 · Reduced Admin", "Eliminate the phone calls from drivers asking about payment status."],
      ["03 · Faster Onboarding", "Move from paper forms to digital contractor induction workflows."],
      ["04 · Centralized Comms", "Push safety alerts and road closures instantly to all active operators."]
    ],
    problemsIntro: {
      eyebrow: "When contractor management is manual",
      asideLead: "Managing 100 harvest contractors via spreadsheets is a massive compliance risk.",
      title: "Friction in vendor management slows down operations.",
      mainLead: "Forestry relies heavily on specialized contractors. When insurance documents are tracked in Excel, inductions are done on paper, and payment disputes take weeks to resolve, your operational team is bogged down in administration instead of managing the resource."
    },
    problems: [
      ["Compliance Lapses", "A haulage contractor is involved in an incident, and you discover their public liability insurance expired a month ago."],
      ["Payment Disputes", "Contractors constantly call the office because they can't reconcile their own records with your manual payment statements."],
      ["Slow Inductions", "New operators are delayed from starting work because paper induction forms take days to process."]
    ],
    deliverablesIntro: {
      title: "Streamlined vendor management.",
      lead: "We engineer secure portals that act as the central hub for your entire contractor network."
    },
    deliverables: [
      ["Automated Compliance Tracking", "Dashboards that visually flag expiring insurances and automatically block non-compliant contractors from the system.", "Compliance", "Alerts", "Logic"],
      ["Self-Serve Payment Portals", "Secure views where contractors can see every approved docket, applied rate, and scheduled payment date.", "Finance", "Transparency", "UX"],
      ["Digital Inductions", "Workflows that allow operators to complete site inductions, watch safety videos, and sign off digitally before arriving on site.", "Safety", "Forms", "Mobile"],
      ["Broadcast Alert Systems", "Tools for dispatchers to instantly notify specific contractor groups about weather events or road closures via SMS.", "Comms", "SMS", "Operations"]
    ]
  },
  "harvest-and-logistics-workflows": {
    metaTitle: "Harvest & Logistics Workflows",
    eyebrow: "Supply Chain",
    h1: "Digitize the journey from forest to mill.",
    lead: "We engineer traceability applications that track timber from the stump to the weighbridge, generating digital dockets and automating complex freight calculations.",
    status: "Logistics Platforms",
    points: [
      "Digital harvest dockets created offline in the forest, syncing automatically to the cloud",
      "Integration with mill weighbridges to instantly reconcile loaded volume vs. delivered weight",
      "Automated freight and contractor payment calculations based on complex matrix rates"
    ],
    proof: [
      ["01 · Eliminate Paper Dockets", "Stop deciphering handwritten, mud-stained paper dockets."],
      ["02 · Instant Reconciliation", "Match forest dispatch records with mill weighbridge tickets automatically."],
      ["03 · Accurate Payments", "Calculate complex haulage rates (by distance, species, grade) without Excel."],
      ["04 · Traceability Compliance", "Prove the exact compartment origin of every log delivered to the mill."]
    ],
    problemsIntro: {
      eyebrow: "When logistics run on paper",
      asideLead: "You can't optimize a multi-million dollar supply chain using duplicate docket books.",
      title: "Manual logistics processes bleed margin.",
      mainLead: "Moving timber is logistically complex and involves multiple handoffs. If your drivers are writing paper dockets that get mailed to the office, you have no real-time visibility into production, and reconciling those dockets with the mill's weighbridge data takes weeks of manual data entry."
    },
    problems: [
      ["Lost Dockets", "A paper docket falls out of a truck cab, delaying payment to the contractor and breaking the chain of custody."],
      ["Delayed Visibility", "Management doesn't know exactly how much timber was harvested until the end of the week when paperwork is processed."],
      ["Payment Errors", "Complex haulage rates are calculated manually in spreadsheets, leading to overpayments or contractor disputes."]
    ],
    deliverablesIntro: {
      title: "Unbreakable chain of custody.",
      lead: "We build digital systems that make every handoff point in your forestry supply chain auditable and instant."
    },
    deliverables: [
      ["Digital Docket Apps", "Offline-capable mobile apps for loaders and drivers to generate digital dispatch records right at the landing.", "Mobile", "Offline", "Traceability"],
      ["Weighbridge API Integrations", "Middleware that securely connects your database to the mill's weighbridge system, pulling live weight data for instant matching.", "APIs", "IoT", "Integration"],
      ["Automated Rating Engines", "Custom logic layers that calculate contractor pay and client invoicing based on dynamic matrices (species, grade, distance, fuel levies).", "Logic", "Finance", "Automation"],
      ["Chain of Custody Reporting", "Systems that automatically generate reports proving the sustainable origin (FSC/PEFC) of all timber processed.", "Compliance", "PDFs", "Reporting"]
    ]
  },
  "field-and-survey-workflows": {
    metaTitle: "Field & Survey Workflows",
    eyebrow: "Mobility",
    h1: "Capture geospatial data offline.",
    lead: "We develop offline-capable mobile apps for foresters, surveyors, and environmental teams to map boundaries, conduct inventories, and log safety incidents without a cellular connection.",
    status: "Field Mobility Apps",
    points: [
      "True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite)",
      "Geospatial integration for dropping pins, mapping polygons, and recording GPS tracks",
      "Digital forms for safety audits, environmental assessments, and pre-harvest planning"
    ],
    proof: [
      ["01 · Never Lose Data", "Foresters can survey remote compartments all day without relying on a 4G connection."],
      ["02 · Eliminate Paper", "Stop writing field notes on wet paper that have to be re-typed in the office later."],
      ["03 · Geospatial Accuracy", "Attach accurate GPS polygons directly to environmental assessment reports."],
      ["04 · Instant Syncing", "Data automatically pushes to the corporate GIS system as soon as the forester hits the highway."]
    ],
    problemsIntro: {
      eyebrow: "When the forest is a black spot",
      asideLead: "If your survey app requires an internet connection, it's useless in the woods.",
      title: "Poor connectivity destroys data integrity.",
      mainLead: "Forestry work happens where cellular networks don't exist. When field staff are forced to use web-based tools that drop out, they revert to writing notes on paper or using generic GPS devices. This means data is siloed, delayed, and requires hours of double-entry back at the office."
    },
    problems: [
      ["Double Data Entry", "A forester spends all day cruising timber, then spends three hours that night typing plot data into the corporate system."],
      ["Location Ambiguity", "An environmental hazard is identified, but the exact GPS coordinates weren't logged, making it hard for the harvest crew to find."],
      ["App Frustration", "Off-the-shelf apps freeze and crash when transitioning in and out of cellular coverage."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the forest.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for deep-woods conditions."
    },
    deliverables: [
      ["Offline-First Architecture", "Advanced local caching allowing users to create records, map areas, and run complex forms entirely offline.", "Offline", "PWA", "Sync"],
      ["Native GIS Integrations", "Custom mapping interfaces allowing users to view corporate GIS layers (boundaries, hazards) while offline.", "GIS", "Maps", "Mobile"],
      ["Smart Audit Forms", "Customizable digital checklists for safety and environmental compliance, utilizing conditional logic to speed up data entry.", "Forms", "Logic", "UX"],
      ["Background Sync Engines", "Background processes that detect when cellular service is restored and quietly push all saved geospatial data to the central server.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "resource-and-yield-dashboards": {
    metaTitle: "Resource & Yield Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the forestry lifecycle.",
    lead: "We aggregate data from field surveys, harvest logistics, and financial systems into executive dashboards, tracking operational efficiency, yield versus forecast, and contractor performance.",
    status: "Forestry Dashboards",
    points: [
      "Unified BI dashboards combining inventory data, daily harvest production, and mill deliveries",
      "Real-time tracking of actual yield against pre-harvest cruise estimates",
      "Predictive analytics to forecast supply chain bottlenecks and optimize logistics"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your GIS, dispatch, and financial data into one executive view."],
      ["02 · Yield Visibility", "Instantly see if a compartment is over or under-performing against estimates."],
      ["03 · Supply Chain Agility", "Redirect haulage fleets proactively based on mill queues and weather events."],
      ["04 · Automated Board Packs", "Turn disparate operational data into polished investor reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a vast forestry estate looking at last month's spreadsheets.",
      title: "Data silos hide the reality of production.",
      mainLead: "Forestry executives are forced to make high-stakes operational decisions with fragmented data. If your inventory is in a GIS platform, your harvest data is in a logistics app, and your financials are in an ERP, you cannot react fast enough to weather events or market shifts."
    },
    problems: [
      ["Hidden Bottlenecks", "A specific harvest crew is consistently underperforming, but the trend isn't visible until the monthly production report."],
      ["Poor Logistics Planning", "Trucks spend hours waiting in queues at the mill because dispatch data isn't synchronized with mill capacity."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and merging data from field apps and weighbridges just to build the quarterly yield report."]
    ],
    deliverablesIntro: {
      title: "Command centers for forestry leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to optimize the resource."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like daily tons harvested, freight costs per ton, and safety incident rates.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (GIS, Logistics Apps, ERP) and normalize it in a cloud data warehouse.", "ETL", "Cloud", "Data"],
      ["Geospatial Analytics", "Map-based interfaces that overlay live production data with weather patterns to predict operational disruptions.", "GIS", "Mapping", "React"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for investors, boards, and forest managers.", "Reporting", "PDFs", "Automation"]
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
