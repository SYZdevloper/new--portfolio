import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/asset-and-service-workflows/" },
  title: "Asset & Service Workflows | Hyperlink Tech Solutions",
  description: "We digitize maintenance, repair, and overhaul (MRO) workflows for defense and heavy industry, ensuring total traceability from the depot to the field.",
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
                    <strong>Asset Lifecycle Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">MRO & Asset Software</div>
                        <p className="eyebrow">Asset Lifecycle Management</p>
                        <h1 id="service-title">Maintain mission-critical assets with absolute precision.</h1>
                        <p className="hero-lead">We digitize maintenance, repair, and overhaul (MRO) workflows for defense and heavy industry, ensuring total traceability from the depot to the field.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digitize paper-heavy maintenance logs and technical manuals</li>
                            <li>Predictive maintenance scheduling using IoT telemetry data</li>
                            <li>Ruggedized tablet applications for field engineers</li>
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
                        
                        <div className="proof-item">
                            <small>01 · Digital Twins</small>
                            <strong>Track the exact configuration of every deployed asset.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Offline Mode</small>
                            <strong>Mechanics can complete workflows in areas without connectivity.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Predictive Alerts</small>
                            <strong>Schedule maintenance before a critical failure occurs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Traceability</small>
                            <strong>Immutable audit trails for every torqued bolt and replaced part.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When assets fail</p>
                        <p>Downtime is not an option for mission-critical hardware.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Heavy assets run on data, not just fuel.</h2>
                        <p>Managing the maintenance schedule for ships, armored vehicles, or industrial turbines using disconnected spreadsheets results in catastrophic failures and compliance violations.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Paper Trails</h3>
                                <p>Mechanics waste hours physically signing off on paper task cards and searching for manuals.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Lost Asset History</h3>
                                <p>When a component moves between platforms, its maintenance history is frequently lost in translation.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reactive Maintenance</h3>
                                <p>Fixing assets after they break is vastly more expensive than predicting the failure.</p>
                            </article>
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
                                <h2>Rugged MRO workflow applications.</h2>
                            </div>
                            <p>We engineer intuitive software that mechanics actually want to use, while maintaining the strict data integrity required by defense standards.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Electronic Logbooks</h3>
                                <p>Secure, offline-capable mobile apps for operators and mechanics to log and sign off on defects.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Offline</small><small>E-Sign</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Task Cards</h3>
                                <p>Interactive maintenance instructions with embedded 3D models, torque specs, and digital sign-offs.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>UX/UI</small><small>Tablet</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Configuration Management</h3>
                                <p>Complex databases tracking the exact hierarchy and lifecycle of every serialized part on an asset.</p>
                                <div className="deliverable-tags"><small>Databases</small><small>Tracking</small><small>Hierarchy</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>IoT Telemetry</h3>
                                <p>Ingesting live sensor data to automatically trigger preventative maintenance workflows.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>Sensors</small><small>Automation</small></div>
                            </article>
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
