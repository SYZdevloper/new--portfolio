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
                            <p className="eyebrow">Featured Aviation Build</p>
                            <h2>Modernizing aerospace digital infrastructure.</h2>
                        </div>
                        <p>See how we helped an aviation leader transition from legacy spreadsheets to a secure, cloud-native operational platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Aviation Software Platform</span>
                                <span>Security + Compliance First</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/aviation-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>High stakes, high performance.</h2>
                                <p>We completely re-architected the backend infrastructure to meet strict regulatory standards while delivering an intuitive frontend experience for engineers and operators.</p>
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
                        <h2 id="faq-title">Common questions about our aviation software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle strict compliance requirements (FAA/EASA)?</summary>
                            <p>Our platforms are designed from day one with compliance in mind. We implement immutable audit logs, strict Role-Based Access Control (RBAC), and SOC 2 compliant infrastructure to ensure all actions are traceable and secure.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with legacy ERPs like SAP or AMOS?</summary>
                            <p>Yes. We build secure middleware layers that connect modern, responsive frontends to deeply entrenched aviation MRO and ERP systems without disrupting core operations.</p>
                        </details>
                        <details>
                            <summary>What is your approach to data security in aerospace?</summary>
                            <p>We utilize enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), strict network isolation, and regular third-party penetration testing to protect highly sensitive intellectual property and operational data.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other aviation capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/products-and-capability-platforms/"><div><small>Discovery</small><h3>Capability Platforms</h3><p>Showcase complex aerospace engineering capabilities.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/maintenance-and-asset-workflows/"><div><small>MRO</small><h3>Maintenance Workflows</h3><p>Streamline aircraft maintenance and asset tracking.</p></div><b>Explore maintenance ↗</b></a>
                        <a className="related-card" href="/services/training-and-compliance-portals/"><div><small>Compliance</small><h3>Training Portals</h3><p>Digitize aviation training and regulatory compliance.</p></div><b>Explore training ↗</b></a>
                        <a className="related-card" href="/services/aviation-operations-dashboards/"><div><small>Operations</small><h3>Operations Dashboards</h3><p>Total visibility over flight operations and ground handling.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Take your aviation software <br />to new heights. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that ensure compliance, streamline operations, and modernize the aerospace experience? Let's discuss your roadmap.</p>
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
  "products-and-capability-platforms": {
    metaTitle: "Aviation Products & Capability Platforms",
    eyebrow: "Aerospace Capabilities",
    h1: "Showcase complex aerospace engineering capabilities.",
    lead: "We design immersive digital platforms that allow aviation manufacturers and MROs to present highly technical products, certifications, and engineering capabilities.",
    status: "Aerospace Digital Platforms",
    points: [
      "Interactive 3D models of aircraft components and cabins",
      "Secure portals for sharing confidential engineering spec sheets",
      "Dynamic filtering for certifications and material capabilities"
    ],
    proof: [
      ["01 · Immersive 3D", "Allow buyers to inspect complex components in the browser."],
      ["02 · Secure Access", "Gate sensitive intellectual property behind NDAs."],
      ["03 · Compliance Ready", "Display EASA and FAA certifications dynamically."],
      ["04 · Global Search", "Find the exact capability across worldwide facilities."]
    ],
    problemsIntro: {
      eyebrow: "When capability is hidden",
      asideLead: "PDF brochures cannot sell complex aerospace engineering.",
      title: "Your digital presence must match your engineering precision.",
      mainLead: "Aerospace procurement involves high stakes and long sales cycles. If potential partners cannot easily navigate your capabilities, certifications, and past performance, they will look elsewhere."
    },
    problems: [
      ["Static Collateral", "Relying on outdated PDF matrices to explain highly complex manufacturing capabilities."],
      ["Scattered Specs", "Customers struggle to find the exact component specs and accompanying regulatory paperwork."],
      ["Brand Disconnect", "A company that builds cutting-edge aerospace hardware with a website from 2012."]
    ],
    deliverablesIntro: {
      title: "Interactive capability showcases.",
      lead: "We build digital platforms that translate complex engineering into compelling, searchable web experiences."
    },
    deliverables: [
      ["Interactive 3D", "WebGL and Three.js implementations allowing users to rotate, explode, and inspect aerospace components.", "WebGL", "Three.js", "3D"],
      ["Parametric Search", "Advanced filtering systems to find specific manufacturing capabilities, tolerances, and materials.", "Algolia", "Search", "Filters"],
      ["Secure Data Rooms", "Encrypted portals for sharing ITAR-restricted specs and CAD files with verified partners.", "Encryption", "Auth", "Security"],
      ["Certification Matrices", "Dynamic databases linking specific facilities to their active regulatory approvals.", "Databases", "Compliance", "CMS"]
    ]
  },
  "maintenance-and-asset-workflows": {
    metaTitle: "Maintenance & Asset Workflows for Aviation",
    eyebrow: "Aviation MRO Software",
    h1: "Streamline aircraft maintenance and asset tracking.",
    lead: "We build secure, compliant workflow platforms that manage maintenance schedules, parts inventory, and digital logbooks for MROs and airlines.",
    status: "MRO & Asset Workflows",
    points: [
      "Digitize paper-heavy aircraft maintenance logs (TechLogs)",
      "Automate AOG (Aircraft On Ground) alerts and parts routing",
      "Provide technicians with mobile-friendly task cards"
    ],
    proof: [
      ["01 · Paperless MRO", "Replace clipboards with ruggedized tablet workflows."],
      ["02 · AOG Resolution", "Instantly locate and route critical parts to grounded aircraft."],
      ["03 · Audit Readiness", "Maintain immutable digital records for regulatory audits."],
      ["04 · API Integration", "Connect seamlessly with legacy systems like AMOS."]
    ],
    problemsIntro: {
      eyebrow: "When maintenance stalls",
      asideLead: "Paperwork delays cost airlines thousands per minute.",
      title: "Aviation maintenance runs on compliance and speed.",
      mainLead: "MRO (Maintenance, Repair, and Overhaul) facilities are often bogged down by legacy software, manual data entry, and physical paper trails, leading to increased turnaround times and costly AOG situations."
    },
    problems: [
      ["Paper Trails", "Mechanics waste hours physically signing off on paper task cards and searching for manuals."],
      ["Inventory Blind Spots", "Critical rotables are lost in transit or incorrectly tagged, delaying repairs."],
      ["Clunky Legacy Software", "Technicians avoid using outdated ERP systems because the UX is incredibly frustrating."]
    ],
    deliverablesIntro: {
      title: "Modern MRO workflow applications.",
      lead: "We engineer intuitive software that mechanics actually want to use, while maintaining the strict data integrity required by regulators."
    },
    deliverables: [
      ["Electronic TechLogs", "Secure, offline-capable mobile apps for pilots and mechanics to log and sign off on defects.", "Mobile", "Offline", "E-Sign"],
      ["Digital Task Cards", "Interactive maintenance instructions with embedded photos, torque specs, and digital sign-offs.", "Workflows", "UX/UI", "Tablet"],
      ["Inventory Tracking", "Barcode and RFID integration to track rotables and consumables through the repair lifecycle.", "RFID", "Scanning", "Logistics"],
      ["Legacy Middleware", "Custom API layers that bridge modern mobile apps with aging backend systems like AMOS or SAP.", "APIs", "Integration", "Middleware"]
    ]
  },
  "training-and-compliance-portals": {
    metaTitle: "Aviation Training & Compliance Portals",
    eyebrow: "Crew & Engineer Compliance",
    h1: "Digitize aviation training and regulatory compliance.",
    lead: "We engineer robust LMS platforms tailored for the aviation industry to manage type ratings, recurrent training, and FAA/EASA compliance tracking.",
    status: "Aviation Compliance Portals",
    points: [
      "Centralized tracking for pilot licenses and medical certificates",
      "Interactive eLearning modules for recurrent safety training",
      "Automated alerts for expiring qualifications"
    ],
    proof: [
      ["01 · Always Compliant", "Never ground a crew member due to a lapsed medical."],
      ["02 · Offline Learning", "Crew can complete training modules inflight without WiFi."],
      ["03 · Audit Trails", "Instantly generate training reports for regulatory audits."],
      ["04 · Type Ratings", "Manage complex matrices of aircraft-specific qualifications."]
    ],
    problemsIntro: {
      eyebrow: "When compliance fails",
      asideLead: "Lapsed qualifications cause immediate operational grounding.",
      title: "Managing aviation compliance is a logistical nightmare.",
      mainLead: "Tracking medical certificates, type ratings, line checks, and dangerous goods training for thousands of crew members using spreadsheets is a massive regulatory risk."
    },
    problems: [
      ["Lapsed Certifications", "Without automated warnings, crew members accidentally expire, causing frantic roster changes."],
      ["Scattered Records", "Training records live in four different systems, making regulatory audits incredibly stressful."],
      ["Poor UX for Crew", "Pilots struggle to complete mandatory recurrent training on outdated, desktop-only portals."]
    ],
    deliverablesIntro: {
      title: "Aviation-grade Learning Management Systems.",
      lead: "We build custom LMS and compliance trackers that are secure, mobile-friendly, and fully auditable."
    },
    deliverables: [
      ["Compliance Dashboards", "Traffic-light status boards showing the real-time qualification status of every crew member.", "Dashboards", "Status", "Alerts"],
      ["Offline eLearning", "Mobile apps that allow crew to download training content, complete it offline, and sync upon landing.", "Offline", "Mobile", "Sync"],
      ["Automated Workflows", "Systems that automatically notify crew and scheduling when a recency check is 60 days from expiry.", "Rules", "Notifications", "Logic"],
      ["Document Management", "Secure vaults for uploading, verifying, and storing scanned licenses and medical certificates.", "OCR", "Vault", "Security"]
    ]
  },
  "aviation-operations-dashboards": {
    metaTitle: "Aviation Operations Dashboards",
    eyebrow: "Flight & Ground Operations",
    h1: "Total visibility over flight operations and ground handling.",
    lead: "We develop real-time operations dashboards that aggregate telematics, weather, and scheduling data to keep airlines and ground handlers running efficiently.",
    status: "Aviation Operations Platforms",
    points: [
      "Real-time tracking of turnaround (Turn) milestones",
      "Integration with ACARS and live weather feeds",
      "Mobile tools for baggage handlers and ramp agents"
    ],
    proof: [
      ["01 · Live Turn Tracking", "Monitor fueling, catering, and cleaning in real-time."],
      ["02 · Faster Turnarounds", "Identify ground bottlenecks instantly to prevent delays."],
      ["03 · Unified Data", "Combine radar, weather, and schedule data on one screen."],
      ["04 · Ramp Mobility", "Equip ground crews with ruggedized dispatch tablets."]
    ],
    problemsIntro: {
      eyebrow: "When operations lag",
      asideLead: "A 5-minute delay on the ground compounds all day.",
      title: "Aviation operations require split-second visibility.",
      mainLead: "When the turnaround process relies on radios and whiteboards, operations centers cannot react to weather disruptions or ground handling delays until it is too late."
    },
    problems: [
      ["Information Silos", "The fueler doesn't know the caterer is delayed, leading to ramp congestion and wasted time."],
      ["Reactive Dispatch", "Operations centers only find out about a delay after the scheduled departure time has passed."],
      ["Data Overload", "Dispatchers have to look at six different monitors to understand the status of a single flight."]
    ],
    deliverablesIntro: {
      title: "Real-time aviation command centers.",
      lead: "We build 'single pane of glass' dashboards that ingest massive amounts of live data to give dispatchers total situational awareness."
    },
    deliverables: [
      ["Turnaround Dashboards", "Gantt-style visualizations tracking every ground handling milestone against the target off-block time.", "Live Data", "Gantt", "Metrics"],
      ["Ramp Apps", "High-contrast, large-button mobile interfaces designed for ground crews wearing gloves.", "Rugged", "Mobile", "UX/UI"],
      ["Data Aggregation", "Middleware that ingests live ACARS data, radar feeds, and terminal API data into one unified stream.", "ACARS", "APIs", "Real-time"],
      ["Disruption Alerts", "Algorithmic alerts that highlight flights at risk of missing their slot due to cascading delays.", "Algorithms", "Alerts", "Logic"]
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
