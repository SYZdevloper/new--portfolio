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
                            <a className="btn primary" href="#contact">Discuss Your Mission <span className="arrow">↗</span></a>
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
                            <p className="eyebrow">Featured SpaceTech Build</p>
                            <h2>Bridging the gap between orbit and earth.</h2>
                        </div>
                        <p>See how we helped an Earth Observation satellite operator commercialize their raw telemetry data through a lightning-fast digital storefront.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>SpaceTech Software Platform</span>
                                <span>Big Data + Mission Security</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/spacetech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Scaling commercial space operations.</h2>
                                <p>We re-architected the customer interface and data ingestion pipelines, turning a complex, manual sales cycle into a frictionless, automated digital product delivery system.</p>
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
                        <h2 id="faq-title">Common questions about our SpaceTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you handle ITAR and EAR compliance for space projects?</summary>
                            <p>Yes. We have extensive experience designing secure architecture for the space and defense sectors. We utilize strict zero-trust principles, AWS GovCloud, and granular RBAC to ensure your platforms meet regulatory export control requirements.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with existing ground segment APIs?</summary>
                            <p>Absolutely. We build robust middleware that seamlessly connects modern frontend dashboards with legacy ground station APIs, antenna scheduling systems, and satellite telemetry feeds without causing disruption.</p>
                        </details>
                        <details>
                            <summary>How do you manage massive spatial datasets (Earth Observation)?</summary>
                            <p>We leverage cloud-native big data pipelines, efficient tile-servers, and specialized geospatial databases (like PostGIS) to ensure that massive terabyte-scale satellite imagery can be queried, previewed, and delivered to end-users with minimal latency.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other SpaceTech capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/mission-and-service-platforms/"><div><small>Commercial</small><h3>Service Platforms</h3><p>Commercialize your space capabilities.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/data-product-portals/"><div><small>Data</small><h3>Data Product Portals</h3><p>Turn raw telemetry into actionable data products.</p></div><b>Explore data ↗</b></a>
                        <a className="related-card" href="/services/mission-collaboration-portals/"><div><small>Collaboration</small><h3>Collaboration Portals</h3><p>Secure collaboration for complex space missions.</p></div><b>Explore collaboration ↗</b></a>
                        <a className="related-card" href="/services/mission-operations-dashboards/"><div><small>Operations</small><h3>Mission Dashboards</h3><p>Total visibility over your constellation in orbit.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Launch your digital <br />operations to the next level. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build highly secure, high-performance software that commercializes your space capabilities and streamlines mission operations? Let's discuss your trajectory.</p>
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
  "mission-and-service-platforms": {
    metaTitle: "Space Mission & Service Platforms",
    eyebrow: "SpaceTech Digital Platforms",
    h1: "Commercialize your space capabilities.",
    lead: "We design digital platforms that allow satellite operators and launch providers to productize their services and interface seamlessly with commercial customers.",
    status: "Space Capability Platforms",
    points: [
      "Streamlined digital onboarding for commercial space customers",
      "Interactive launch and payload configurators",
      "Secure portals for contracting and technical review"
    ],
    proof: [
      ["01 · Monetization", "Turn complex space capabilities into consumable digital products."],
      ["02 · Configurators", "Allow customers to digitally spec payloads and orbital parameters."],
      ["03 · Compliance", "Embed export control and ITAR checks directly into the sales flow."],
      ["04 · API Ready", "Expose your commercial services securely via modern APIs."]
    ],
    problemsIntro: {
      eyebrow: "When space stays manual",
      asideLead: "The New Space economy demands digital-first customer experiences.",
      title: "Stop selling space services via PDF and email.",
      mainLead: "As launch costs plummet, the volume of commercial customers is skyrocketing. Relying on manual engineering reviews and scattered email chains creates a massive bottleneck for commercializing your capabilities."
    },
    problems: [
      ["Manual Quoting", "Sales teams waste weeks manually calculating orbital parameters and payload feasibility for every inquiry."],
      ["Opaque Onboarding", "Commercial customers are overwhelmed by confusing, non-standardized intake forms."],
      ["Legacy Disconnect", "A company that flies cutting-edge rockets but manages customer relations on a spreadsheet."]
    ],
    deliverablesIntro: {
      title: "Commercial space storefronts.",
      lead: "We build intuitive web platforms that abstract the complexity of space technology, making it easy for customers to buy from you."
    },
    deliverables: [
      ["Payload Configurators", "Interactive UI allowing customers to input mass, volume, and power requirements for instant feasibility checks.", "UI/UX", "Logic", "Validation"],
      ["Customer Portals", "Secure dashboards where clients can track their mission timeline, documentation, and launch integration milestones.", "Dashboards", "Tracking", "Auth"],
      ["Automated Quoting", "Backend engines that calculate dynamic pricing based on target orbits and ride-share availability.", "Pricing", "APIs", "Algorithms"],
      ["E-Sign & Contracting", "Digital workflows for NDAs, Launch Services Agreements (LSA), and regulatory export compliance forms.", "E-Sign", "Compliance", "Workflows"]
    ]
  },
  "data-product-portals": {
    metaTitle: "Earth Observation & Data Product Portals",
    eyebrow: "Space Data Monetization",
    h1: "Turn raw telemetry into actionable data products.",
    lead: "We build high-performance data portals that ingest massive Earth observation and satellite telemetry datasets, allowing customers to easily search, purchase, and consume spatial data.",
    status: "Space Data Portals",
    points: [
      "Geospatial search interfaces for Earth Observation (EO) imagery",
      "Cloud-native pipelines capable of handling terabytes of downlink",
      "Automated subscription billing for continuous data feeds"
    ],
    proof: [
      ["01 · Spatial Search", "Find imagery instantly by drawing polygons on a map."],
      ["02 · Cloud Native", "Process massive geospatial files directly in the browser."],
      ["03 · API Monetization", "Allow enterprise clients to ingest your data programmatically."],
      ["04 · Rapid Delivery", "Reduce the time from satellite downlink to customer delivery."]
    ],
    problemsIntro: {
      eyebrow: "When data sits idle",
      asideLead: "Raw satellite data is useless if customers can't find it.",
      title: "Data is the new oil, but only if you can refine it.",
      mainLead: "Earth Observation and IoT satellite operators generate terabytes of data daily. Without a fast, searchable, and intuitive customer portal, this valuable data remains stranded in cold storage."
    },
    problems: [
      ["Clunky Interfaces", "Customers struggle to search through archives using outdated, slow mapping interfaces that crash on large datasets."],
      ["Manual Delivery", "Data operations teams manually zip and FTP massive imagery files to clients, wasting hours of engineering time."],
      ["Complex Billing", "Inability to implement flexible, API-based usage billing prevents scaling to enterprise software customers."]
    ],
    deliverablesIntro: {
      title: "High-performance Earth data storefronts.",
      lead: "We build lightning-fast geospatial web applications designed specifically to search, visualize, and distribute satellite data."
    },
    deliverables: [
      ["Geospatial Search", "Interactive maps (Mapbox/Cesium) allowing users to search archives by bounding box, cloud cover, and date.", "WebGL", "PostGIS", "Search"],
      ["Data Visualization", "In-browser rendering of massive GeoTIFFs or SAR data using optimized tiling servers.", "Visuals", "Tiling", "Performance"],
      ["API Gateways", "Secure, rate-limited Developer APIs allowing B2B customers to pull data products directly into their own systems.", "APIs", "Auth", "B2B"],
      ["Subscription Billing", "Stripe integration for metered usage billing, tier upgrades, and automated monthly invoicing.", "Stripe", "Billing", "SaaS"]
    ]
  },
  "ground-segment-workflows": {
    metaTitle: "Ground Segment Workflows",
    eyebrow: "Ground Station Operations",
    h1: "Digitize the ground segment lifecycle.",
    lead: "We engineer workflow applications that streamline ground station operations, from antenna scheduling and maintenance tracking to spectrum licensing workflows.",
    status: "Ground Segment Software",
    points: [
      "Centralized dashboards for ground station network health",
      "Automated antenna scheduling and conflict resolution",
      "Digitized hardware maintenance and regulatory compliance"
    ],
    proof: [
      ["01 · Antenna Scheduling", "Optimize pass scheduling across a global network of ground stations."],
      ["02 · Maintenance Tracking", "Digitize MRO workflows for radomes and tracking hardware."],
      ["03 · Spectrum Compliance", "Manage ITU filings and frequency licensing in one place."],
      ["04 · Network Health", "Monitor connectivity and equipment uptime in real-time."]
    ],
    problemsIntro: {
      eyebrow: "When the ground breaks",
      asideLead: "A satellite is useless if the ground station is down.",
      title: "Ground operations run on precision and timing.",
      mainLead: "Managing a global network of ground stations involves complex antenna scheduling, rigorous hardware maintenance, and strict regulatory compliance. Spreadsheets simply cannot keep up with the demands of modern constellations."
    },
    problems: [
      ["Scheduling Conflicts", "Manual antenna pass scheduling leads to dropped connections and missed telemetry downlinks."],
      ["Reactive Maintenance", "Ground hardware fails unexpectedly because maintenance cycles are tracked on disparate spreadsheets."],
      ["Regulatory Chaos", "Tracking complex international spectrum licenses across multiple jurisdictions causes compliance risks."]
    ],
    deliverablesIntro: {
      title: "Modern ground segment management.",
      lead: "We build customized web applications that give ground operators the tools they need to maximize uptime and optimize scheduling."
    },
    deliverables: [
      ["Scheduling Engines", "Interactive Gantt charts and algorithmic logic to resolve conflict scheduling for satellite passes.", "Algorithms", "Gantt", "Logic"],
      ["Network Monitoring", "Real-time dashboards aggregating health data (SNRs, temperatures, connectivity) from global ground assets.", "Dashboards", "WebSockets", "IoT"],
      ["MRO Workflows", "Digital task cards and maintenance logs for field engineers servicing remote antennas.", "Workflows", "Mobile", "Tracking"],
      ["Compliance Databases", "Centralized repositories tracking frequency allocations, ITU filings, and license expiration dates.", "Databases", "Alerts", "Compliance"]
    ]
  },
  "mission-collaboration-portals": {
    metaTitle: "Space Mission Collaboration Portals",
    eyebrow: "Joint Mission Workflows",
    h1: "Secure collaboration for complex space missions.",
    lead: "We develop highly secure, ITAR-compliant portals that allow international space agencies, prime contractors, and scientific teams to coordinate on joint mission deliverables.",
    status: "Mission Collaboration Tools",
    points: [
      "Zero-trust architecture for secure sharing of sensitive specs",
      "Granular Role-Based Access Control (RBAC) across organizations",
      "Centralized tracking of mission milestones and engineering reviews"
    ],
    proof: [
      ["01 · Zero-Trust Security", "Strict data segregation between international partners."],
      ["02 · Engineering Reviews", "Streamline the Preliminary and Critical Design Review (PDR/CDR) process."],
      ["03 · ITAR Compliance", "Ensure export-controlled data never leaves authorized geographic bounds."],
      ["04 · Unified Timelines", "Keep hundreds of contractors aligned on one central mission schedule."]
    ],
    problemsIntro: {
      eyebrow: "When partners disconnect",
      asideLead: "Space missions are international. Security is national.",
      title: "Collaboration without compromising compliance.",
      mainLead: "Joint space missions involve thousands of engineers across different countries and organizations. Sharing sensitive CAD files, design reviews, and schedules over email creates massive security risks and delays."
    },
    problems: [
      ["Data Spillage", "Unsecured email threads containing ITAR-restricted technical data lead to massive compliance breaches."],
      ["Version Confusion", "Contractors manufacture components using outdated specs because they missed a revision update."],
      ["Siloed Schedules", "The Prime contractor lacks visibility into the progress of secondary payload developers, threatening the launch date."]
    ],
    deliverablesIntro: {
      title: "Fortified mission collaboration.",
      lead: "We build secure web applications that act as the single source of truth for complex, multi-organizational space programs."
    },
    deliverables: [
      ["Secure Data Rooms", "Encrypted document vaults with granular access controls and strict download tracking for CAD and specs.", "Encryption", "Vaults", "Security"],
      ["Design Review Workflows", "Structured digital pipelines for submitting, reviewing, and approving engineering data for PDRs and CDRs.", "Workflows", "Approvals", "Audit"],
      ["Identity Management", "Integration with federated identity providers to seamlessly authenticate engineers from partner agencies.", "SSO", "IAM", "Auth"],
      ["Mission Dashboards", "Aggregated Gantt charts showing the status of every deliverable tied to the launch manifest.", "Dashboards", "Metrics", "Tracking"]
    ]
  },
  "mission-operations-dashboards": {
    metaTitle: "Space Mission Operations Dashboards",
    eyebrow: "Flight Dynamics & Telemetry",
    h1: "Total visibility over your constellation in orbit.",
    lead: "We build real-time command and control dashboards that aggregate space telemetry, orbital mechanics, and subsystem health for modern mission operations centers.",
    status: "Constellation Dashboards",
    points: [
      "Real-time visualization of satellite telemetry and subsystem health",
      "Interactive 3D orbital tracking and ground track maps",
      "Automated alerting for anomalies and conjunction events"
    ],
    proof: [
      ["01 · Telemetry Visualization", "Render thousands of data points per second with zero latency."],
      ["02 · 3D Orbital Tracking", "Visualize satellite position, attitude, and ground tracks in real-time."],
      ["03 · Anomaly Alerting", "Automated rules engine to flag out-of-bounds telemetry instantly."],
      ["04 · Operator Efficiency", "Replace clunky legacy software with intuitive, dark-mode interfaces."]
    ],
    problemsIntro: {
      eyebrow: "When operators are blind",
      asideLead: "A constellation is only as good as the software flying it.",
      title: "Modern constellations require modern interfaces.",
      mainLead: "As companies scale from single satellites to mega-constellations, legacy Mission Control software breaks down. Operators are overwhelmed by data and hindered by archaic user interfaces."
    },
    problems: [
      ["Data Overload", "Operators have to look at six different monitors of raw text to understand the health of a single satellite."],
      ["Legacy Clunkiness", "Outdated Java-based client software is slow, prone to crashing, and incredibly difficult to train new operators on."],
      ["Alert Fatigue", "Poorly configured alarm systems constantly trigger false positives, causing operators to ignore critical warnings."]
    ],
    deliverablesIntro: {
      title: "Next-generation Mission Control.",
      lead: "We build web-based command and control interfaces that are fast, intuitive, and designed specifically for the cognitive load of flight operators."
    },
    deliverables: [
      ["Telemetry Dashboards", "High-performance grids and charts utilizing WebSockets to plot live subsystem metrics in real-time.", "WebSockets", "Charts", "Real-time"],
      ["3D Spatial Visualization", "Integration of CesiumJS or Three.js to render live 3D globes with accurate satellite orbits and attitude vectors.", "CesiumJS", "WebGL", "3D"],
      ["Smart Alerting Engine", "Configurable logic systems that group, prioritize, and route anomalies to the correct subsystem engineer.", "Logic", "Alerts", "Routing"],
      ["Dark-Mode UX/UI", "Specialized, high-contrast interface design tailored for dimly lit Mission Operations Centers (MOCs).", "UX/UI", "Accessibility", "Design"]
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
