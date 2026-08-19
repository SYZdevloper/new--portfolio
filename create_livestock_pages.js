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
                            <p className="eyebrow">Featured Livestock Platform</p>
                            <h2>Digitizing the drafting yard.</h2>
                        </div>
                        <p>See how we helped a national veterinary network build an offline-first mobile app that allows vets to scan RFID tags, log pregnancy ultrasound results, and issue digital prescriptions seamlessly.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Livestock Tech</span>
                                <span>IoT Integration & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/livestock-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From paddock to portal.</h2>
                                <p>We developed a custom ecosystem that connects EID wand scanners via Bluetooth to a ruggedized iPad app, eliminating paper records and syncing directly with the producer's management dashboard.</p>
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
                        <h2 id="faq-title">Common questions about animal agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate mobile apps with Bluetooth EID (Electronic ID) scanners?</summary>
                            <p>Yes. We regularly build React Native applications that connect via Bluetooth Low Energy (BLE) to industry-standard hardware like Gallagher or Tru-Test EID wands and scale heads, automatically pulling tag numbers into the app.</p>
                        </details>
                        <details>
                            <summary>How do field apps work when vets are out of cellular range?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture using local databases. A vet can scan a thousand cows, log their condition scores, and issue treatments offline. The app securely caches the data and syncs automatically when a connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex traceability and compliance reporting?</summary>
                            <p>We engineer secure data pipelines that track individual animal histories (treatments, movements, feed). This data can be automatically formatted and transmitted to national traceability databases (like NLIS in Australia) or used to generate QA certificates for processors.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other livestock capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/animal-product-and-service-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect livestock solutions with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/producer-and-adviser-portals/"><div><small>Collaboration</small><h3>Producer Portals</h3><p>Digital hubs for herd health and management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/herd-production-and-quality-records/"><div><small>Data</small><h3>Production Records</h3><p>Digitize livestock traceability and performance.</p></div><b>Explore records ↗</b></a>
                        <a className="related-card" href="/services/laboratory-and-field-services/"><div><small>Vets & Techs</small><h3>Field Services</h3><p>Offline data capture for vets and technicians.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your livestock <br />and animal health operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline EID scanning apps for vets in the drafting yard to executive dashboards tracking feed conversion, we build software that drives animal agriculture.</p>
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
  "animal-product-and-service-platforms": {
    metaTitle: "Animal Product & Service Platforms",
    eyebrow: "Animal Agriculture",
    h1: "Connect livestock solutions with producers.",
    lead: "We design high-performance websites for animal health companies, feed manufacturers, and genetics providers to clearly communicate efficacy and product catalogs.",
    status: "Livestock Product Platforms",
    points: [
      "Dynamic product catalogues integrated with inventory for vaccines, feed, and genetics",
      "Interactive dosage calculators based on animal weight and species",
      "High-performance architecture ensuring fast load times on rural internet connections"
    ],
    proof: [
      ["01 · Technical Clarity", "Easily display complex SDS, withholding periods, and dosage data."],
      ["02 · Genetic Trust", "Showcase EBVs (Estimated Breeding Values) and trial data clearly."],
      ["03 · Find a Stockist", "Interactive mapping tools to connect producers with local vets and stores."],
      ["04 · Low Bandwidth", "Optimized media delivery for fast loading in rural areas."]
    ],
    problemsIntro: {
      eyebrow: "When technical data is buried",
      asideLead: "Producers shouldn't have to download a PDF just to check a withholding period.",
      title: "Hard-to-find information loses sales.",
      mainLead: "Animal health and nutrition products are highly technical. Whether it's a new drench or a custom feed ration, producers and vets need instant access to dosage rates, active ingredients, and safety data. If your website is slow or difficult to navigate on a phone in the yards, they will choose a competitor."
    },
    problems: [
      ["Outdated Labels", "A producer accesses an old version of a product label, leading to incorrect dosage or withholding periods."],
      ["Poor Mobile UX", "Vets struggle to use your dosage calculator on their phones while standing in the crush."],
      ["Slow Rural Loads", "Heavy video backgrounds cause your site to time out on 3G connections."]
    ],
    deliverablesIntro: {
      title: "Digital foundations for animal health.",
      lead: "We build platforms that put critical livestock information at the fingertips of the industry."
    },
    deliverables: [
      ["Dynamic Product Catalogues", "Headless CMS implementations allowing your team to update labels, EBVs, and SDS documents instantly.", "CMS", "Data", "Speed"],
      ["Dosage & Feed Calculators", "Custom React tools that drive engagement and provide instant value based on herd size and weight.", "React", "Logic", "UX"],
      ["Stockist Locators", "Mapbox integrations that route producers to the nearest rural retail store carrying your specific product line.", "Maps", "Routing", "Sales"],
      ["Low-Bandwidth Optimization", "Aggressive edge-caching and automated media compression ensuring fast load times globally.", "Vercel", "CDN", "Performance"]
    ]
  },
  "producer-and-adviser-portals": {
    metaTitle: "Producer & Adviser Portals",
    eyebrow: "Customer Collaboration",
    h1: "Digital hubs for herd health and management.",
    lead: "We build secure portals where livestock producers and their veterinary advisers can collaborate on health protocols, feed rations, and historical production data.",
    status: "Producer Portals",
    points: [
      "Secure, unified dashboards replacing fragmented email chains and spreadsheets",
      "Digital delivery and approval of veterinary prescriptions and feed recommendations",
      "Historical data vault for lab results, abattoir feedback, and genetic data"
    ],
    proof: [
      ["01 · Sticky Relationships", "Make it impossible for customers to leave by housing all their historical herd data."],
      ["02 · Faster Approvals", "Producers can click 'Approve' on a custom feed ration instantly via SMS."],
      ["03 · Less Admin", "Stop re-sending lab results and invoices; producers can self-serve 24/7."],
      ["04 · Centralized Comms", "Keep the vet, the nutritionist, and the producer in total sync."]
    ],
    problemsIntro: {
      eyebrow: "When advice is scattered",
      asideLead: "Managing a 5,000-head feedlot via WhatsApp and email is a liability.",
      title: "Disjointed communication risks herd health.",
      mainLead: "Intensive livestock farming requires intense collaboration between the producer, the vet, and the nutritionist. When feed rations are texted, lab results are emailed as PDFs, and prescriptions arrive by mail, the producer is left to piece the puzzle together, increasing the risk of expensive mistakes."
    },
    problems: [
      ["Lost Recommendations", "A producer loses a text message about a treatment protocol and under-doses a mob of cattle."],
      ["Data Silos", "Historical blood test data is trapped on the hard drive of a vet who left the practice."],
      ["Compliance Nightmares", "Without a central digital record of antibiotic applications, QA audits become a massive administrative headache."]
    ],
    deliverablesIntro: {
      title: "The digital farm office.",
      lead: "We engineer secure portals that act as the central source of truth for livestock operations."
    },
    deliverables: [
      ["Unified Dashboards", "React-based interfaces where users can view upcoming tasks, recent vet advice, and market prices in one glance.", "UX", "React", "Dashboards"],
      ["Digital Prescriptions", "Workflows that allow a vet to write a script and instantly push it to the producer's portal and the local pharmacy.", "Workflows", "Logic", "Sync"],
      ["Data Vaults", "Secure AWS S3 storage for all herd data (lab results, kill sheets) tied directly to the customer's account.", "AWS", "Storage", "Security"],
      ["Role-Based Access (RBAC)", "Strict permission models ensuring farm hands can see task lists, but only the owner can see financial data.", "Auth0", "RBAC", "Security"]
    ]
  },
  "herd-production-and-quality-records": {
    metaTitle: "Herd, Production & Quality Records",
    eyebrow: "Data Management",
    h1: "Digitize livestock traceability and performance.",
    lead: "We engineer applications that track individual animal health records, integrate with EID (Electronic Identification) tags, and manage quality assurance data.",
    status: "Herd Management",
    points: [
      "Individual animal tracking using EID/RFID integration for precise data capture",
      "Automated compliance reporting for national traceability systems and QA programs",
      "Analysis of feed conversion, daily weight gain, and genetic performance"
    ],
    proof: [
      ["01 · Lifetime Traceability", "Track every treatment, movement, and weight from birth to processing."],
      ["02 · Automated Compliance", "Generate NVDs (National Vendor Declarations) or QA certificates digitally."],
      ["03 · Performance Tracking", "Identify your most profitable genetic lines based on real abattoir feedback."],
      ["04 · Error Reduction", "Eliminate transcription errors by syncing directly with hardware scales."]
    ],
    problemsIntro: {
      eyebrow: "When records are manual",
      asideLead: "You can't optimize herd genetics with a mud-stained notebook.",
      title: "Manual data entry limits herd profitability.",
      mainLead: "Tracking the performance of thousands of animals requires precise data. If you are writing down tag numbers and weights in a notebook, then typing them into Excel later, you are introducing errors, losing time, and missing the insights needed to cull underperforming animals."
    },
    problems: [
      ["Transcription Errors", "A 16-digit EID number is written down incorrectly, breaking the traceability chain for that animal."],
      ["Delayed Insights", "It takes weeks to manually match abattoir kill sheets back to the original sire data."],
      ["Audit Panic", "When a QA audit occurs, staff spend days frantically organizing paper treatment records."]
    ],
    deliverablesIntro: {
      title: "Precision livestock management.",
      lead: "We build data systems that turn individual animal metrics into herd-level profitability."
    },
    deliverables: [
      ["Hardware Integration (IoT)", "Bluetooth middleware that connects web and mobile apps directly to EID wands and digital scale heads.", "IoT", "BLE", "Integration"],
      ["Traceability Engines", "Secure databases that maintain immutable histories of animal movements, linking to national databases via API.", "APIs", "Database", "Compliance"],
      ["Performance Analytics", "Visual tools to chart Average Daily Gain (ADG) and compare performance across different mobs, feeds, or genetics.", "DataViz", "Analytics", "React"],
      ["Digital Vendor Declarations", "Systems that automatically generate legally compliant movement documents based on the selected animals.", "Automation", "PDFs", "Legal"]
    ]
  },
  "laboratory-and-field-services": {
    metaTitle: "Laboratory & Field Services",
    eyebrow: "Field Mobility",
    h1: "Offline data capture for vets and technicians.",
    lead: "We develop offline-capable mobile apps for field veterinarians and technicians to log ultrasound results, collect tissue samples, and issue digital prescriptions from the drafting yard.",
    status: "Field Mobility Apps",
    points: [
      "True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite)",
      "Bluetooth integration with EID scanners to instantly identify animals in the crush",
      "Digital requisition forms for sending blood and tissue samples to pathology labs"
    ],
    proof: [
      ["01 · Never Lose Data", "Vets can pregnancy-test 500 cows all day without relying on a 4G connection."],
      ["02 · Eliminate Paper", "Stop writing field notes on wet paper that have to be re-typed in the clinic later."],
      ["03 · Faster Results", "Submit digital lab requisitions from the field so the lab is ready when samples arrive."],
      ["04 · Hardware Sync", "Scan a tag and have the animal's entire medical history appear instantly."]
    ],
    problemsIntro: {
      eyebrow: "When the yards are a black spot",
      asideLead: "If your vet app requires an internet connection, it's useless on a farm.",
      title: "Poor connectivity destroys data integrity.",
      mainLead: "Veterinary and technician work happens where cellular networks don't. When field staff are forced to use web-based tools that drop out, they revert to writing notes on paper or their arms. This means data is siloed, delayed, and often lost entirely."
    },
    problems: [
      ["Double Data Entry", "A vet spends all day in the yards, then spends three hours that night typing their notes into the clinic CRM."],
      ["Lost Samples", "A blood sample arrives at the lab, but the handwritten paper requisition form is illegible or missing."],
      ["App Frustration", "Off-the-shelf CRM apps freeze and crash when transitioning in and out of cellular coverage."]
    ],
    deliverablesIntro: {
      title: "Rugged software for the field.",
      lead: "We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for rural conditions."
    },
    deliverables: [
      ["Offline-First Architecture", "Advanced local caching allowing users to create records, scan tags, and run complex forms entirely offline.", "Offline", "PWA", "Sync"],
      ["Bluetooth Scanner Sync", "Native integrations allowing the app to receive rapid-fire tag numbers directly from an EID wand.", "BLE", "Hardware", "Mobile"],
      ["Smart Clinical Forms", "Customizable digital checklists for condition scoring or autopsies, utilizing conditional logic to speed up data entry.", "Forms", "Logic", "UX"],
      ["Background Sync Engines", "Background processes that detect when cellular service is restored and quietly push all saved data to the central server.", "APIs", "Webhooks", "Integration"]
    ]
  },
  "animal-agriculture-dashboards": {
    metaTitle: "Animal Agriculture Dashboards",
    eyebrow: "Executive Operations",
    h1: "Visibility across the livestock supply chain.",
    lead: "We aggregate data from IoT sensors, abattoir feedback, and herd management apps into executive dashboards, tracking mortality rates, feed conversion, and genetic progress.",
    status: "Livestock Dashboards",
    points: [
      "Unified BI dashboards combining processing data, feed costs, and veterinary records",
      "Real-time tracking of mortalities, morbidity, and treatment efficacy across multiple sites",
      "Predictive analytics to identify disease outbreaks or supply chain bottlenecks"
    ],
    proof: [
      ["01 · Single Source of Truth", "Consolidate your feedmill, vet, and processing data into one executive view."],
      ["02 · Margin Visibility", "Understand the true cost of production per kilogram of meat/milk."],
      ["03 · Supply Chain Agility", "Move stock proactively based on live weather models and feed availability."],
      ["04 · Automated Board Packs", "Turn disparate data sets into polished executive reports instantly."]
    ],
    problemsIntro: {
      eyebrow: "When executives fly blind",
      asideLead: "You can't manage a corporate agricultural portfolio looking at last month's spreadsheets.",
      title: "Data silos hide the reality of production.",
      mainLead: "Corporate agriculture leaders are forced to make high-stakes decisions in volatile markets. If your feed data is in one system, your vet data is in a legacy app, and your processor feedback is in a PDF, you cannot react fast enough to disease outbreaks or price changes."
    },
    problems: [
      ["Hidden Outbreaks", "A specific feedlot is experiencing high morbidity, but leadership doesn't notice until the end-of-month mortality report."],
      ["Margin Squeeze", "Feed costs spike, but the impact on the final margin isn't calculated until the animals are already processed."],
      ["Manual Reporting Burden", "Analysts spend weeks manually extracting and matching EID data in Excel just to build the quarterly performance report."]
    ],
    deliverablesIntro: {
      title: "Command centers for corporate agriculture.",
      lead: "We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and animal welfare."
    },
    deliverables: [
      ["Executive Scorecards", "High-level visual dashboards tracking KPIs like feed conversion ratio (FCR), mortality rates, and average daily gain.", "BI", "Dashboards", "Metrics"],
      ["Data Warehousing", "Pipelines that extract data from disparate proprietary systems (Feedmills, Abattoirs, Vet Apps) and normalize it in the cloud.", "ETL", "Cloud", "Data"],
      ["Geospatial Analytics", "Map-based interfaces that overlay live property data with weather patterns to predict feed shortages or flood risks.", "GIS", "Mapping", "React"],
      ["Automated Reporting", "Dynamic engines to instantly generate branded PDF or email summaries for site managers and executives.", "Reporting", "PDFs", "Automation"]
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
