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
                            <p className="eyebrow">Featured Defense Build</p>
                            <h2>Securing the digital supply chain.</h2>
                        </div>
                        <p>See how we helped a Tier-1 defense contractor modernize their supplier collaboration without compromising ITAR security.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Secure Portal Architecture</span>
                                <span>Zero-Trust + React Native</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/defense-case-study.webp" alt="Secure Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Bridging the gap between speed and security.</h2>
                                <p>We developed a custom portal that allows thousands of subcontractors to securely submit RFQs, engineering changes, and audit documents into a highly classified central system.</p>
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
                        <h2 id="faq-title">Common questions about our secure portals.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Are your platforms ITAR and FedRAMP compliant?</summary>
                            <p>Yes. We have experience architecting applications deployed to AWS GovCloud and Azure Government, implementing strict data residency, encryption, and access controls required for defense and government contracts.</p>
                        </details>
                        <details>
                            <summary>How do you handle onboarding for thousands of suppliers?</summary>
                            <p>We build automated KYC and onboarding workflows that integrate with identity providers to verify supplier credentials and assign Role-Based Access Control (RBAC) dynamically.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our secure legacy ERPs?</summary>
                            <p>Absolutely. We build secure middleware layers that safely expose specific data points from legacy, air-gapped mainframes to modern web applications.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other secure software capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/programme-and-supplier-portals/"><div><small>Portals</small><h3>Programme Portals</h3><p>Secure collaboration across complex supply chains.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-and-service-workflows/"><div><small>MRO</small><h3>Asset Workflows</h3><p>Maintain mission-critical assets with absolute precision.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/governance-and-audit-dashboards/"><div><small>Governance</small><h3>Audit Dashboards</h3><p>Real-time oversight for heavily regulated environments.</p></div><b>Explore governance ↗</b></a>
                        <a className="related-card" href="/services/security-assessment-and-hardening/"><div><small>Security</small><h3>Security Assessments</h3><p>Enterprise-grade application security and hardening.</p></div><b>Explore security ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Build software for <br />high-stakes environments. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that ensure compliance, secure your supply chain, and provide total operational oversight? Let's discuss your roadmap.</p>
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
  "programme-and-supplier-portals": {
    metaTitle: "Programme & Supplier Portals",
    eyebrow: "Defense & Heavy Industry Portals",
    h1: "Secure collaboration across complex supply chains.",
    lead: "We engineer secure, ITAR-compliant portals that allow prime contractors and government agencies to coordinate with thousands of tiered suppliers seamlessly.",
    status: "Secure Supplier Portals",
    points: [
      "Zero-trust architecture for secure document and CAD sharing",
      "Automated supplier onboarding and compliance verification",
      "Real-time RFQ and milestone tracking across the supply chain"
    ],
    proof: [
      ["01 · Zero-Trust", "Strict RBAC ensures suppliers only see their specific data."],
      ["02 · Secure File Sharing", "End-to-end encryption for ITAR-sensitive CAD and specs."],
      ["03 · Rapid Onboarding", "Automated compliance checks speed up supplier vetting."],
      ["04 · Milestone Tracking", "Track programme deliverables across thousands of vendors."]
    ],
    problemsIntro: {
      eyebrow: "When supply chains leak",
      asideLead: "Email is the enemy of secure collaboration.",
      title: "Defense programmes require absolute data integrity.",
      mainLead: "Prime contractors struggle to manage engineering changes and securely distribute specs to Tier-3 suppliers without risking data spills or operational delays."
    },
    problems: [
      ["Data Spillage", "Unsecured email threads containing sensitive technical data lead to massive compliance breaches."],
      ["Version Confusion", "Suppliers manufacture parts using outdated specs because they missed a revision email."],
      ["Black Box Subcontractors", "Primes lack visibility into the progress of deeply tiered suppliers, causing sudden programme delays."]
    ],
    deliverablesIntro: {
      title: "Fortified supplier networks.",
      lead: "We build secure web applications that act as the single source of truth between you and your supply chain."
    },
    deliverables: [
      ["Secure Data Rooms", "Encrypted document vaults with granular access controls and strict download tracking.", "Encryption", "Vaults", "Security"],
      ["Supplier Onboarding", "Automated workflows for collecting NDAs, tax forms, and cybersecurity compliance certificates.", "KYC", "Onboarding", "Forms"],
      ["RFQ Management", "Structured bidding portals that standardize quote submission and automate the initial technical review.", "RFQs", "Bidding", "Logic"],
      ["Programme Dashboards", "Aggregated views showing the status of every deliverable tied to a major government contract.", "Dashboards", "Metrics", "Tracking"]
    ]
  },
  "asset-and-service-workflows": {
    metaTitle: "Asset & Service Workflows",
    eyebrow: "Asset Lifecycle Management",
    h1: "Maintain mission-critical assets with absolute precision.",
    lead: "We digitize maintenance, repair, and overhaul (MRO) workflows for defense and heavy industry, ensuring total traceability from the depot to the field.",
    status: "MRO & Asset Software",
    points: [
      "Digitize paper-heavy maintenance logs and technical manuals",
      "Predictive maintenance scheduling using IoT telemetry data",
      "Ruggedized tablet applications for field engineers"
    ],
    proof: [
      ["01 · Digital Twins", "Track the exact configuration of every deployed asset."],
      ["02 · Offline Mode", "Mechanics can complete workflows in areas without connectivity."],
      ["03 · Predictive Alerts", "Schedule maintenance before a critical failure occurs."],
      ["04 · Traceability", "Immutable audit trails for every torqued bolt and replaced part."]
    ],
    problemsIntro: {
      eyebrow: "When assets fail",
      asideLead: "Downtime is not an option for mission-critical hardware.",
      title: "Heavy assets run on data, not just fuel.",
      mainLead: "Managing the maintenance schedule for ships, armored vehicles, or industrial turbines using disconnected spreadsheets results in catastrophic failures and compliance violations."
    },
    problems: [
      ["Paper Trails", "Mechanics waste hours physically signing off on paper task cards and searching for manuals."],
      ["Lost Asset History", "When a component moves between platforms, its maintenance history is frequently lost in translation."],
      ["Reactive Maintenance", "Fixing assets after they break is vastly more expensive than predicting the failure." ]
    ],
    deliverablesIntro: {
      title: "Rugged MRO workflow applications.",
      lead: "We engineer intuitive software that mechanics actually want to use, while maintaining the strict data integrity required by defense standards."
    },
    deliverables: [
      ["Electronic Logbooks", "Secure, offline-capable mobile apps for operators and mechanics to log and sign off on defects.", "Mobile", "Offline", "E-Sign"],
      ["Digital Task Cards", "Interactive maintenance instructions with embedded 3D models, torque specs, and digital sign-offs.", "Workflows", "UX/UI", "Tablet"],
      ["Configuration Management", "Complex databases tracking the exact hierarchy and lifecycle of every serialized part on an asset.", "Databases", "Tracking", "Hierarchy"],
      ["IoT Telemetry", "Ingesting live sensor data to automatically trigger preventative maintenance workflows.", "IoT", "Sensors", "Automation"]
    ]
  },
  "governance-and-audit-dashboards": {
    metaTitle: "Governance & Audit Dashboards",
    eyebrow: "Compliance & Audit Software",
    h1: "Real-time oversight for heavily regulated environments.",
    lead: "We build executive dashboards that aggregate compliance data, track audit findings, and monitor risk across your entire operational footprint.",
    status: "Governance Dashboards",
    points: [
      "Centralized tracking for regulatory audits and CAPAs",
      "Automated compliance scoring and risk heatmaps",
      "Integration with HR, infosec, and operational systems"
    ],
    proof: [
      ["01 · Audit Readiness", "Generate compliance reports for regulators in one click."],
      ["02 · Risk Heatmaps", "Instantly visualize which departments are falling behind."],
      ["03 · CAPA Tracking", "Automated workflows for Corrective and Preventive Actions."],
      ["04 · Single Pane", "Unify data from fragmented regional compliance teams."]
    ],
    problemsIntro: {
      eyebrow: "When audits fail",
      asideLead: "Compliance violations cost millions in fines and lost contracts.",
      title: "Spreadsheets cannot manage enterprise risk.",
      mainLead: "Chief Risk and Compliance Officers lack visibility. When compliance data is buried in emails and PDFs, identifying systemic risks before an audit is impossible."
    },
    problems: [
      ["Siloed Data", "Health & Safety, Infosec, and Environmental teams all use different tools to track compliance."],
      ["Lost Findings", "Audit findings are emailed to managers, but the corrective actions are never actually tracked to completion."],
      ["Boardroom Blind Spots", "Executives rely on manually compiled monthly reports that are outdated the moment they are printed."]
    ],
    deliverablesIntro: {
      title: "Real-time compliance command centers.",
      lead: "We build intuitive governance platforms that automate data collection and provide executives with actionable risk intelligence."
    },
    deliverables: [
      ["Risk Dashboards", "High-level visualizations showing compliance scores across different geographic regions and business units.", "Dashboards", "BI", "Visuals"],
      ["Audit Workflows", "Digital forms and checklists for internal auditors to log findings directly into the central database.", "Forms", "Checklists", "Mobile"],
      ["CAPA Management", "Automated ticketing systems that route corrective actions to the responsible party and escalate if overdue.", "Ticketing", "Logic", "Escalation"],
      ["Automated Reporting", "Dynamic PDF generation engine to instantly produce formatted reports for external regulators.", "PDFs", "Reporting", "Automation"]
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
