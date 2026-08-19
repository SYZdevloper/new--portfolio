import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/programme-and-supplier-portals/" },
  title: "Programme & Supplier Portals | Hyperlink Tech Solutions",
  description: "We engineer secure, ITAR-compliant portals that allow prime contractors and government agencies to coordinate with thousands of tiered suppliers seamlessly.",
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
                    <strong>Defense & Heavy Industry Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Secure Supplier Portals</div>
                        <p className="eyebrow">Defense & Heavy Industry Portals</p>
                        <h1 id="service-title">Secure collaboration across complex supply chains.</h1>
                        <p className="hero-lead">We engineer secure, ITAR-compliant portals that allow prime contractors and government agencies to coordinate with thousands of tiered suppliers seamlessly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Zero-trust architecture for secure document and CAD sharing</li>
                            <li>Automated supplier onboarding and compliance verification</li>
                            <li>Real-time RFQ and milestone tracking across the supply chain</li>
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
                            <small>01 · Zero-Trust</small>
                            <strong>Strict RBAC ensures suppliers only see their specific data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Secure File Sharing</small>
                            <strong>End-to-end encryption for ITAR-sensitive CAD and specs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Rapid Onboarding</small>
                            <strong>Automated compliance checks speed up supplier vetting.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Milestone Tracking</small>
                            <strong>Track programme deliverables across thousands of vendors.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When supply chains leak</p>
                        <p>Email is the enemy of secure collaboration.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Defense programmes require absolute data integrity.</h2>
                        <p>Prime contractors struggle to manage engineering changes and securely distribute specs to Tier-3 suppliers without risking data spills or operational delays.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Spillage</h3>
                                <p>Unsecured email threads containing sensitive technical data lead to massive compliance breaches.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Version Confusion</h3>
                                <p>Suppliers manufacture parts using outdated specs because they missed a revision email.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Black Box Subcontractors</h3>
                                <p>Primes lack visibility into the progress of deeply tiered suppliers, causing sudden programme delays.</p>
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
                                <h2>Fortified supplier networks.</h2>
                            </div>
                            <p>We build secure web applications that act as the single source of truth between you and your supply chain.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted document vaults with granular access controls and strict download tracking.</p>
                                <div className="deliverable-tags"><small>Encryption</small><small>Vaults</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Supplier Onboarding</h3>
                                <p>Automated workflows for collecting NDAs, tax forms, and cybersecurity compliance certificates.</p>
                                <div className="deliverable-tags"><small>KYC</small><small>Onboarding</small><small>Forms</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>RFQ Management</h3>
                                <p>Structured bidding portals that standardize quote submission and automate the initial technical review.</p>
                                <div className="deliverable-tags"><small>RFQs</small><small>Bidding</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Programme Dashboards</h3>
                                <p>Aggregated views showing the status of every deliverable tied to a major government contract.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Metrics</small><small>Tracking</small></div>
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
