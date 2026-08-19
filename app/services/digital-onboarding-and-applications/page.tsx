import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/digital-onboarding-and-applications/" },
  title: "Digital Onboarding & Applications | Hyperlink Tech Solutions",
  description: "We engineer secure digital application flows that integrate eKYC, AML checks, and digital signatures, allowing customers to open accounts or apply for loans in minutes.",
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
                        <div className="hero-status">Digital Applications</div>
                        <p className="eyebrow">Conversion & Compliance</p>
                        <h1 id="service-title">Frictionless customer onboarding.</h1>
                        <p className="hero-lead">We engineer secure digital application flows that integrate eKYC, AML checks, and digital signatures, allowing customers to open accounts or apply for loans in minutes.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based application flows that eliminate the need for downloading and printing PDF forms</li>
                            <li>Live API integrations with identity verification providers (eKYC) to instantly validate passports and driver's licenses</li>
                            <li>Dynamic logic that adapts the question set based on the specific product or the applicant's previous answers</li>
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
                            <strong>Turn a frustrating 30-minute paper application into a smooth, 5-minute mobile flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Fraud</small>
                            <strong>Integrate biometric and document verification directly into the onboarding journey.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Approvals</small>
                            <strong>Push clean, validated data directly into your decision engine or Loan Origination System (LOS).</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Omnichannel Resumption</small>
                            <strong>Allow a customer to start an application on their phone and finish it later on a desktop.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When applying is painful</p>
                        <p>If a customer has to print a form to open a checking account, they will simply use a neobank.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky onboarding destroys customer acquisition.</h2>
                        <p>Financial institutions spend thousands on marketing only to force users into a digital application that looks like a digitized tax return. When the form is slow, asks irrelevant questions, or fails to save progress, the customer abandons the process. This forces them into a branch, drastically increasing your cost to acquire.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Drop-off</h3>
                                <p>Users abandon the application when they realize they have to download, print, and sign a physical document.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Fatigue</h3>
                                <p>The legacy form asks for 5 years of address history without offering an easy Google Maps autocomplete, causing frustration on mobile.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Verification Delays</h3>
                                <p>Accounts take days to open because back-office staff have to manually review photocopies of ID documents sent via email.</p>
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
                                <h2>Automated financial conversion.</h2>
                            </div>
                            <p>We engineer application flows that handle complex regulatory requirements while remaining beautiful and frictionless.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Application Frontends</h3>
                                <p>Building bespoke React flows that guide the user step-by-step, validating data in real-time before submission.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>eKYC & Identity Integrations</h3>
                                <p>Developing secure Node.js layers that connect to services like Onfido or Jumio for instant ID scanning and liveness checks.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Compliance</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Question Logic</h3>
                                <p>Building rules engines that skip irrelevant sections (e.g., hiding 'Spouse Income' if the user selected 'Single').</p>
                                <div className="deliverable-tags"><small>Logic</small><small>UX</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Core System API Middleware</h3>
                                <p>Ensuring that upon completion, the application data and PDF artifacts are pushed directly into your CRM or LOS.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Data</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Finance Platform</p>
                            <h2>Transforming digital lending.</h2>
                        </div>
                        <p>See how we helped a mid-tier credit union replace their PDF application forms with a custom React onboarding flow integrated with digital identity verification, reducing loan abandonment rates by 55%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Fintech</span>
                                <span>Digital Onboarding</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/finance-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant growth.</h2>
                                <p>We developed a secure application portal that dynamically adjusts based on the loan type, automatically validates identity via third-party APIs (eKYC), and pushes the clean data directly into their Loan Origination System (LOS).</p>
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
                        <h2 id="faq-title">Common questions about financial tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure data security and compliance (e.g., GDPR, PCI)?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure data is encrypted at rest and in transit, and architect the frontend so sensitive data (like card numbers) bypasses our servers completely via secure tokens.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with core banking or legacy origination systems?</summary>
                            <p>Yes. We specialize in building secure API middleware that connects modern web and mobile frontends to legacy systems (like Fiserv, Jack Henry, or proprietary LOS platforms), allowing for real-time data exchange without exposing the core.</p>
                        </details>
                        <details>
                            <summary>Do you build tools for branch staff or just the customer?</summary>
                            <p>Both. While we build self-serve customer portals, we also build secure internal dashboards (B2E) that allow branch staff and advisers to view the same customer data, assisting them with complex applications or document collection in real-time.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other finance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/financial-product-websites/"><div><small>Discovery</small><h3>Product Websites</h3><p>Showcase financial products.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/digital-onboarding-and-applications/"><div><small>Conversion</small><h3>Digital Onboarding</h3><p>Frictionless applications.</p></div><b>Explore onboarding ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Service</small><h3>Account Portals</h3><p>Self-serve customer management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/branch-adviser-and-service-workflows/"><div><small>Operations</small><h3>Branch Workflows</h3><p>Empower frontline staff.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your banking <br />and financial operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital onboarding flows to secure customer portals and core banking API integrations, we build software that drives growth and reduces operational risk.</p>
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
