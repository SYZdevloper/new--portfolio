import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/consultation-and-client-intake/" },
  title: "Consultation & Client Intake | Hyperlink Tech Solutions",
  description: "We engineer secure digital intake flows integrating conflict checks and dynamic data collection, allowing new clients to securely provide sensitive information before the first meeting.",
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
                    <strong>Conversion & Compliance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Intake</div>
                        <p className="eyebrow">Conversion & Compliance</p>
                        <h1 id="service-title">Frictionless client onboarding.</h1>
                        <p className="hero-lead">We engineer secure digital intake flows integrating conflict checks and dynamic data collection, allowing new clients to securely provide sensitive information before the first meeting.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based application flows that eliminate the need for printing massive PDF intake forms</li>
                            <li>Dynamic logic that adapts the question set based on the specific matter type (e.g., Family Law vs. Commercial Property)</li>
                            <li>Live API integrations with your Practice Management System to instantly push data and trigger automated conflict-of-interest checks</li>
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
                            <small>01 · Higher Completion</small>
                            <strong>Turn a frustrating 20-page paper form into a smooth, 10-minute digital flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Productive Meetings</small>
                            <strong>Your professionals have all the structured data they need before the client even walks into the room.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Engagement</small>
                            <strong>Push clean data directly into your system, allowing instant generation of engagement letters.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Secure Data Collection</small>
                            <strong>Stop clients from emailing highly sensitive financial or legal data over unencrypted channels.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When intake is painful</p>
                        <p>If a client has to print and scan 20 pages just to speak with you, they are already frustrated.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky onboarding destroys client acquisition.</h2>
                        <p>Firms spend thousands on marketing only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or asks irrelevant questions, the client abandons the process, delaying the engagement.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Drop-off</h3>
                                <p>Users abandon the application when they realize they have to download, print, and sign a physical document.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Fatigue</h3>
                                <p>The legacy form asks for 10 years of history without offering an easy dynamic interface, causing frustration.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Data Double-Handling</h3>
                                <p>Paralegals or admins spend hours manually re-typing client data from a printed form into the core practice software.</p>
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
                                <h2>Automated client conversion.</h2>
                            </div>
                            <p>We engineer application flows that handle complex regulatory requirements while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Intake Frontends</h3>
                                <p>Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Question Logic</h3>
                                <p>Building rules engines that skip irrelevant sections (e.g., hiding 'Corporate Entity' fields if the user selected 'Individual').</p>
                                <div className="deliverable-tags"><small>Logic</small><small>UX</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>PMS API Middleware</h3>
                                <p>Developing secure Node.js layers that push the sanitized intake data directly into systems like Clio, Actionstep, or Xero.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Signatures (eSign)</h3>
                                <p>Integrating with DocuSign or HelloSign to dynamically generate the completed engagement letter and collect secure signatures.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Compliance</small></div>
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
