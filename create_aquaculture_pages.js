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
                            <p className="eyebrow">Featured Aquaculture Platform</p>
                            <h2>From ocean to plate, digitized.</h2>
                        </div>
                        <p>See how we helped a premium salmon producer build a full-chain traceability platform, connecting IoT pen sensors to a consumer-facing QR code experience that tells the story of every fillet.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Aquaculture Tech</span>
                                <span>IoT Telemetry & Traceability</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/aquaculture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Transparent provenance.</h2>
                                <p>We developed a custom ecosystem that ingests live water-quality telemetry from ocean pens, tracks every batch through the processing plant, and delivers a scannable QR code on the final retail pack proving origin and sustainability credentials.</p>
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
                        <h2 id="faq-title">Common questions about aquaculture & fisheries tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with underwater IoT sensors and feeding systems?</summary>
                            <p>Yes. We build secure API middleware that ingests telemetry data from underwater sensors (dissolved oxygen, temperature, salinity) and automated feeding systems, normalizing it into a cloud data warehouse for real-time dashboard visualization and historical analysis.</p>
                        </details>
                        <details>
                            <summary>How do you handle traceability for wild-catch fisheries?</summary>
                            <p>We build chain-of-custody applications that track a catch from the vessel (using e-logbook integrations) through the cold chain, processing, and retail. Each handoff point is digitally timestamped and geotagged, creating an auditable provenance trail for MSC or ASC certification.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work on remote fish farms or vessels at sea?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps and React Native mobile apps. Farm hands or deckhands can log feed quantities, mortality counts, and water quality readings entirely offline; the app will automatically sync once satellite or cellular connectivity is restored.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other aquaculture capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-market-platforms/"><div><small>Marketing</small><h3>Market Platforms</h3><p>Showcase provenance and sustainability credentials.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farm-and-production-portals/"><div><small>Operations</small><h3>Production Portals</h3><p>Manage pens, cages, and hatcheries digitally.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/traceability-and-quality-workflows/"><div><small>Compliance</small><h3>Traceability Workflows</h3><p>Full-chain provenance from ocean to retail.</p></div><b>Explore traceability ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-service-portals/"><div><small>Supply Chain</small><h3>Supplier Portals</h3><p>Coordinate feed, logistics, and service vendors.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your aquaculture <br />and fisheries operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From IoT pen monitoring to consumer-facing traceability QR codes, we build software that drives transparency and efficiency across the blue economy.</p>
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
  "product-and-market-platforms": {
    metaTitle: "Product & Market Platforms",
    eyebrow: "Aquaculture & Fisheries",
    h1: "Showcase provenance and sustainability credentials.",
    lead: "We design high-performance product platforms for seafood brands, aquaculture producers, and fisheries cooperatives to communicate origin, sustainability certifications, and species data.",
    status: "Seafood Product Platforms",
    points: [
      "Dynamic species catalogues with rich nutritional data, sourcing maps, and sustainability badges",
      "Interactive provenance tools allowing consumers to trace a fillet back to the specific farm or vessel",
      "High-performance architecture optimized for global B2B buyers and retail consumers"
    ],
    proof: [
      ["01 · Premium Positioning", "Communicate the quality story that justifies premium pricing."],
      ["02 · Sustainability Trust", "Clearly display MSC, ASC, or BAP certifications and audit results."],
      ["03 · B2B Discovery", "Help importers and chefs find your specific species and pack formats."],
      ["04 · Origin Mapping", "Interactive maps showing the exact ocean region or farm location."]
    ],
    problemsIntro: {
      eyebrow: "When provenance is invisible",
      asideLead: "Consumers will pay a premium for verified sustainable seafood, but only if they can see the proof.",
      title: "Invisible supply chains erode brand value.",
      mainLead: "The global seafood market is increasingly driven by provenance and sustainability. If your website is a generic corporate brochure that buries your MSC certification and species data in PDFs, you are losing premium shelf space to competitors who tell a better digital story."
    },
    problems: [
      ["Generic Branding", "Your hand-harvested, single-origin oysters are presented on a website that looks identical to a commodity frozen fish supplier."],
      ["Hidden Certifications", "Retail buyers struggle to find your ASC audit reports and sustainability metrics."],
      ["Poor B2B Experience", "International importers can't easily filter your product range by species, format, or certification."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for premium seafood.",
      lead: "We build platforms that turn provenance and sustainability into a competitive advantage."
    },
    deliverables: [
      ["Species Catalogues", "Headless CMS implementations allowing your team to manage rich product pages with nutritional data, cook methods, and certifications.", "CMS", "Data", "Speed"],
      ["Interactive Origin Maps", "Custom Mapbox integrations that visually connect a product SKU to its specific farm, ocean zone, or vessel.", "Maps", "Provenance", "UX"],
      ["B2B Product Finders", "Filterable product grids allowing importers to search by species, certification, pack size, and availability.", "React", "Search", "B2B"],
      ["QR Code Landing Pages", "Dynamic micro-sites that are linked from retail packaging, telling the story of a specific batch to the end consumer.", "QR", "Mobile", "Branding"]
    ]
  },
  "farm-and-production-portals": {
    metaTitle: "Farm & Production Portals",
    eyebrow: "Farm Operations",
    h1: "Manage pens, cages, and hatcheries digitally.",
    lead: "We build secure production management portals where farm managers can monitor water quality, track biomass, schedule feeding, and manage stock movements across multiple sites.",
    status: "Production Portals",
    points: [
      "Centralized dashboards showing live pen conditions, biomass estimates, and mortality rates",
      "Digital stock movement records for transfers between hatcheries, grow-out sites, and processors",
      "Integration with IoT sensors for real-time dissolved oxygen, temperature, and pH monitoring"
    ],
    proof: [
      ["01 · Live Monitoring", "See water quality across all your pens and cages on one screen."],
      ["02 · Biomass Accuracy", "Replace guesswork with data-driven biomass estimates for harvest planning."],
      ["03 · Mortality Tracking", "Identify problem pens instantly instead of discovering losses at harvest."],
      ["04 · Multi-Site Sync", "Manage hatcheries, nurseries, and grow-out farms from a single platform."]
    ],
    problemsIntro: {
      eyebrow: "When farm data is scattered",
      asideLead: "Managing a 10-pen salmon farm with a whiteboard and a spreadsheet is a liability.",
      title: "Fragmented data risks your stock.",
      mainLead: "Aquaculture is an inherently high-risk, capital-intensive operation. If water quality data is on a sensor console at the jetty, feeding records are in a notebook, and mortality counts are on a whiteboard, farm managers cannot make the rapid decisions needed to prevent catastrophic stock losses."
    },
    problems: [
      ["Delayed Alerts", "A dissolved oxygen drop in Pen 7 isn't noticed until the morning visual check, by which time significant mortality has occurred."],
      ["Inaccurate Biomass", "Harvest planning is based on rough estimates because there's no system accurately tracking growth and mortality per pen."],
      ["Audit Chaos", "When a regulatory audit occurs, staff spend days frantically compiling paper feeding and treatment records."]
    ],
    deliverablesIntro: {
      title: "The digital farm office.",
      lead: "We engineer secure portals that act as the central nervous system for aquaculture operations."
    },
    deliverables: [
      ["IoT Telemetry Dashboards", "Live interfaces displaying sensor data (DO, temperature, salinity, pH) with configurable alert thresholds per pen.", "IoT", "WebSockets", "Alerts"],
      ["Biomass Tracking", "Growth curve models that ingest sample weight data and mortality counts to continuously estimate live biomass per pen.", "Analytics", "Logic", "Math"],
      ["Stock Movement Records", "Digital workflows for logging transfers, splits, and gradings, maintaining a complete chain-of-custody for every cohort.", "Workflows", "Data", "Compliance"],
      ["Feeding Schedule Management", "Interfaces that track daily feed allocation against recommended feeding tables, flagging over- or under-feeding.", "Planning", "UX", "Automation"]
    ]
  },
  "traceability-and-quality-workflows": {
    metaTitle: "Traceability & Quality Workflows",
    eyebrow: "Compliance & Provenance",
    h1: "Full-chain provenance from ocean to retail.",
    lead: "We engineer traceability applications that track every batch from the pen or vessel through processing and cold-chain logistics to the final retail pack, ensuring regulatory and certification compliance.",
    status: "Traceability Platforms",
    points: [
      "Batch-level tracking linking specific pens or vessels to final retail SKUs",
      "Digital HACCP (Hazard Analysis Critical Control Points) checklists for processing plants",
      "Automated generation of export health certificates and catch documentation"
    ],
    proof: [
      ["01 · Certification Ready", "Maintain the data integrity required for MSC, ASC, and BAP audits."],
      ["02 · Rapid Recall", "Identify and isolate affected product within minutes, not days, during a recall."],
      ["03 · Export Compliance", "Automatically generate the health certificates required by importing countries."],
      ["04 · Consumer Trust", "Provide end-to-end provenance data that justifies your premium price point."]
    ],
    problemsIntro: {
      eyebrow: "When traceability is manual",
      asideLead: "Paper-based batch records are one spilled coffee away from a failed audit.",
      title: "Gaps in the chain cost you market access.",
      mainLead: "Global seafood trade is governed by strict traceability requirements. If you cannot digitally prove the origin, processing history, and cold-chain integrity of a specific batch, you risk losing access to premium export markets (EU, Japan, US) and failing your sustainability certifications."
    },
    problems: [
      ["Recall Nightmare", "A potential histamine issue is detected, but it takes 48 hours to trace the affected batch back to the specific vessel and landing date."],
      ["Audit Failures", "Paper HACCP records from the processing plant are incomplete, jeopardizing your MSC chain-of-custody certification."],
      ["Export Delays", "Manually preparing export health certificates and catch documentation holds up containers at the port."]
    ],
    deliverablesIntro: {
      title: "Unbreakable chain of custody.",
      lead: "We build digital systems that make every handoff point in your supply chain auditable and instant."
    },
    deliverables: [
      ["Batch Tracking Engines", "Secure databases that link a final retail carton back through processing, cold storage, and the original pen or vessel.", "Database", "APIs", "Traceability"],
      ["Digital HACCP Checklists", "Tablet-optimized forms for processing plant QA staff to log critical control points with timestamps and photo evidence.", "Forms", "Mobile", "Compliance"],
      ["Cold-Chain Monitoring", "Integrations with IoT temperature loggers that automatically flag any break in the cold chain during transport.", "IoT", "Alerts", "Logistics"],
      ["Automated Export Docs", "Systems that automatically populate and generate health certificates and catch documentation based on batch data.", "Automation", "PDFs", "Trade"]
    ]
  },
  "supplier-and-service-portals": {
    metaTitle: "Supplier & Service Portals",
    eyebrow: "Supply Chain",
    h1: "Coordinate feed, logistics, and service vendors.",
    lead: "We build secure B2B portals that streamline feed ordering, coordinate vessel and logistics services, and manage compliance documentation for your entire supplier network.",
    status: "Supplier Portals",
    points: [
      "B2B ordering portals for feed suppliers with delivery scheduling and inventory visibility",
      "Contractor compliance management for divers, net cleaners, and marine service providers",
      "Automated document expiry tracking for vessel licenses, insurance, and safety certifications"
    ],
    proof: [
      ["01 · Streamlined Ordering", "Place feed orders digitally with live delivery ETAs and stock levels."],
      ["02 · Compliance Enforcement", "Ensure no contractor works on your farm with expired safety documentation."],
      ["03 · Audit Trails", "Immutable records of every purchase order and service delivery."],
      ["04 · Reduced Admin", "Eliminate the phone calls and emails that slow down procurement."]
    ],
    problemsIntro: {
      eyebrow: "When procurement is manual",
      asideLead: "Managing 50 suppliers via phone calls and emails is a full-time job.",
      title: "Supply chain friction directly impacts your stock.",
      mainLead: "Aquaculture operations depend on a complex web of specialized suppliers—feed companies, net cleaners, veterinary services, and logistics providers. When this coordination happens via phone calls and email, orders are delayed, compliance lapses, and the fish suffer."
    },
    problems: [
      ["Feed Delays", "A phone order for fish feed pellets is misheard, the wrong formulation arrives, and feeding is disrupted for 48 hours."],
      ["Expired Compliance", "A dive team is dispatched to inspect nets, but nobody checked that their commercial diving insurance expired last month."],
      ["No Visibility", "The farm manager has no idea if the next feed delivery is on track until the truck doesn't arrive."]
    ],
    deliverablesIntro: {
      title: "Seamless supply chain coordination.",
      lead: "We build portals that bring order to the complex web of aquaculture suppliers."
    },
    deliverables: [
      ["B2B Feed Ordering", "Secure portals allowing farm managers to place feed orders against contracted pricing with live delivery tracking.", "B2B", "Commerce", "UX"],
      ["Contractor Compliance", "Digital onboarding for service providers, with automated tracking of expiry dates for insurances and dive certificates.", "Compliance", "Alerts", "Logic"],
      ["Service Scheduling", "Calendar-based interfaces for booking net cleaning, marine surveys, and veterinary visits across multiple farm sites.", "Calendars", "Planning", "UX"],
      ["ERP Middleware", "Integration layers that push approved purchase orders directly into your core financial system (SAP, NetSuite, Xero).", "APIs", "Integration", "ERP"]
    ]
  },
  "aquaculture-and-fisheries-dashboards": {
    metaTitle: "Aquaculture & Fisheries Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the blue economy.",
    lead: "We aggregate data from IoT sensors, processing plants, and market systems into executive dashboards, tracking biological performance, cost of production, and market prices in real-time.",
    status: "Aquaculture Dashboards",
    points: [
      "Unified BI dashboards combining biological data (FCR, mortality), processing yields, and market prices",
      "Real-time tracking of feed conversion ratios and cost-per-kilogram across all farm sites",
      "Predictive analytics to forecast harvest windows and optimize market timing"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your farm, processing, and sales data into one executive view."],
      ["02 · Margin Visibility", "Understand the true cost of production per kilogram, per species, per site."],
      ["03 · Market Timing", "Optimize harvest dates based on live market pricing and biomass readiness."],
      ["04 · Automated Board Packs", "Turn disparate operational data into polished investor or board reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a multi-site aquaculture operation looking at last month's spreadsheets.",
      title: "Data silos hide the reality of production.",
      mainLead: "Aquaculture executives are forced to make high-stakes biological and market decisions with incomplete data. If your farm telemetry is in one system, processing yields are in another, and market prices are on a separate portal, you cannot react fast enough to disease events or price shifts."
    },
    problems: [
      ["Hidden Disease", "A specific site is experiencing elevated mortality, but the trend isn't visible until the monthly biology report."],
      ["Poor Market Timing", "Fish are harvested based on a fixed schedule rather than optimizing for the current spot price."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and merging data from farm, processing, and sales systems."]
    ],
    deliverablesIntro: {
      title: "Command centers for aquaculture leaders.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and biology."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like feed conversion ratio (FCR), survival rates, and cost per kg across all sites.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate systems (IoT sensors, ERP, processing software) and normalize it in the cloud.", "ETL", "Cloud", "Data"],
      ["Harvest Optimization", "Models that cross-reference live biomass estimates with current market prices to recommend optimal harvest windows.", "Analytics", "Logic", "React"],
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
