import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/matter-and-compliance-workflows/" },
  title: "Matter & Compliance Workflows | Hyperlink Tech Solutions",
  description: "We develop bespoke B2B tools for lawyers and accountants, streamlining document generation, complex compliance tracking, and cross-team collaboration.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Practice Tools</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Empower your professional team.</h1>
                        <p className="hero-lead">We develop bespoke B2B tools for lawyers and accountants, streamlining document generation, complex compliance tracking, and cross-team collaboration.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2E (Business-to-Employee) portals allowing staff to view a 360-degree profile of their entire matter or client book</li>
                            <li>Automated document assembly engines that generate complex contracts or tax templates based on structured data inputs</li>
                            <li>Assisted onboarding flows allowing a professional to start a matter and push a secure link to the client for the remaining data</li>
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
                            <small>01 · Faster Execution</small>
                            <strong>Professionals spend less time on administrative data entry and more time on high-value advisory work.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Errors</small>
                            <strong>Stop staff from manually re-keying data or copy-pasting clauses across Word documents.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Better Client Experience</small>
                            <strong>When a client logs in, the portal acts as a seamless extension of the firm's brand and capability.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Audit & Compliance</small>
                            <strong>Ensure every action, document collected, and conflict check is tracked and securely stored for compliance.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When staff tools are outdated</p>
                        <p>Your professionals cannot deliver a premium client experience if they are fighting legacy software.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple billable efficiency.</h2>
                        <p>Firms invest heavily in the client-facing digital experience but often ignore the tools used by their staff. If a senior associate has to manually assemble a 50-page contract by copy-pasting from five different templates, or if they have to log into three different systems just to prepare for a client review, operational costs skyrocket and errors multiply.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Document Assembly</h3>
                                <p>Highly paid professionals are spending hours doing basic 'find and replace' tasks in Microsoft Word.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Disconnects</h3>
                                <p>A client updates their address in the portal, but the accounting CRM isn't updated because the systems don't talk to each other.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Risks</h3>
                                <p>Staff are storing sensitive client documents locally on their desktops because the official secure upload portal is too hard to use.</p>
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
                                <h2>The digital practice companion.</h2>
                            </div>
                            <p>We engineer secure tools that turn your professional team into highly efficient operational nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Practitioner Dashboards</h3>
                                <p>Building secure web apps where staff log in to view their pipeline, upcoming deadlines, and missing client documents.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Integration</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Automated Document Assembly</h3>
                                <p>Custom logic engines that take structured data (e.g., from an intake form) and dynamically generate complex, compliant PDF or Word documents.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Operations</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Document Collection</h3>
                                <p>Portals where professionals can request specific documents and the client receives a secure link to upload it via their phone.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Data</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>PMS API Hooks</h3>
                                <p>Developing middleware that ensures the data entered by the staff perfectly matches the data architecture required by the core practice software.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Workflow</small></div>
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
