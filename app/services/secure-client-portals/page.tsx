import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/secure-client-portals/" },
  title: "Secure Client Portals | Hyperlink Tech Solutions",
  description: "We build premium digital portals where clients can securely upload sensitive financial or legal documents, track matter progress, and digitally sign binding agreements.",
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
                    <strong>Digital Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Client Portals</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Highly secure collaboration environments.</h1>
                        <p className="hero-lead">We build premium digital portals where clients can securely upload sensitive financial or legal documents, track matter progress, and digitally sign binding agreements.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure web and mobile-responsive dashboards replacing massive, unsecured email chains during discovery or audit phases</li>
                            <li>Digital document vaults containing all historical contracts, tax statements, and court filings securely in one place</li>
                            <li>Dynamic project or matter trackers showing the client exactly where the engagement is against the agreed timeline</li>
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
                            <small>01 · Premium Client Experience</small>
                            <strong>Provide a modern, transparent digital experience that justifies a premium hourly rate.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Discovery</small>
                            <strong>Stop professionals from wasting hours chasing clients for missing documents via email.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Absolute Security</small>
                            <strong>Ensure highly sensitive financial or legal IP is never transmitted via plain text email attachments.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Communication</small>
                            <strong>Keep all matter updates, deliverables, and feedback securely in one auditable environment.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When collaboration is analog</p>
                        <p>Managing a complex legal matter via 400 separate email threads is a major liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized collaboration frustrates clients and risks data.</h2>
                        <p>Professional services engagements involve massive amounts of sensitive data exchange. If your team is asking a client to email their financial models, or if the client has to call the Partner just to find out if Phase 1 is complete, the service feels chaotic and introduces massive cybersecurity risks.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Email Grind</h3>
                                <p>Staff spend hours every week cross-referencing email threads to figure out which documents the client has actually sent.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Opaque Project Status</h3>
                                <p>The client is frustrated because they feel they are paying a massive retainer but have no visibility into the daily progress.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Security Risks</h3>
                                <p>Staff are emailing highly sensitive M&A or tax documents, risking massive data breaches and regulatory fines.</p>
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
                                <h2>Centralized client operations.</h2>
                            </div>
                            <p>We engineer secure environments that professionalize the relationship between your firm and the client.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Client Dashboards</h3>
                                <p>API integrations pulling live data from your practice management software, allowing clients to view matter status.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Secure Document Checklists</h3>
                                <p>Interactive UIs where clients can see exactly which files are required and securely drag-and-drop them into a vault.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Security</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Deliverable Review Flows</h3>
                                <p>Custom interfaces for securely delivering the final strategy document and capturing digital sign-off from the client.</p>
                                <div className="deliverable-tags"><small>Operations</small><small>Compliance</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure strict B2B data privacy and MFA (Multi-Factor Authentication).</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Data</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Practice Platform</p>
                            <h2>Modernizing client intake.</h2>
                        </div>
                        <p>See how we helped a commercial law firm digitize their archaic, paper-based client onboarding process, allowing them to collect sensitive data securely and run automated conflict checks via API before the first meeting.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>LegalTech</span>
                                <span>Client Intake</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/professional-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant onboarding.</h2>
                                <p>We developed a highly secure application flow that intelligently adapts based on the client type. It automatically securely collects identification documents and pushes the sanitized data directly into their Practice Management System, eliminating manual data entry.</p>
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
                        <h2 id="faq-title">Common questions about professional tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure attorney-client privilege and data security?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure all data and documents are encrypted at rest (AES-256) and in transit, and architect secure vaults that bypass standard email protocols completely.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Practice Management Systems (e.g., Clio, Actionstep, Xero)?</summary>
                            <p>Yes. We build secure API middleware to connect your modern web frontend directly to your core practice software. This allows us to push new client data, pull matter statuses, and sync billing information without manual double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you handle complex digital signatures?</summary>
                            <p>Yes. We integrate directly with platforms like DocuSign or HelloSign via API, allowing you to automatically generate complex engagement letters or tax documents and prompt the client to sign them securely within the portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other practice capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/professional-service-websites/"><div><small>Discovery</small><h3>Practice Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/consultation-and-client-intake/"><div><small>Conversion</small><h3>Client Intake</h3><p>Secure digital onboarding.</p></div><b>Explore intake ↗</b></a>
                        <a className="related-card" href="/services/secure-client-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/matter-and-compliance-workflows/"><div><small>Operations</small><h3>Matter Workflows</h3><p>Empower the practice.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services practice. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital client intake flows to highly secure document portals and realization dashboards, we build software that drives billable efficiency and protects your firm's data.</p>
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
