import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-account-portals/" },
  title: "Customer Account Portals | Hyperlink Tech Solutions",
  description: "We build highly secure, intuitive portals where customers can manage their accounts, view transaction histories, and originate new financial products effortlessly.",
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
                    <strong>Digital Banking</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Customer Portals</div>
                        <p className="eyebrow">Digital Banking</p>
                        <h1 id="service-title">Self-serve management for your customers.</h1>
                        <p className="hero-lead">We build highly secure, intuitive portals where customers can manage their accounts, view transaction histories, and originate new financial products effortlessly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure web and mobile-responsive dashboards displaying aggregated balances, recent transactions, and loan progress</li>
                            <li>Self-serve capabilities allowing customers to securely update their address, reset a PIN, or dispute a transaction</li>
                            <li>Seamless cross-selling environments allowing existing customers to apply for a credit card with pre-filled data</li>
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
                            <small>01 · Reduced Call Volume</small>
                            <strong>Customers can view their statements or change their address without calling the contact center.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Customer Lifetime Value</small>
                            <strong>Make it incredibly easy for an existing savings customer to originate a personal loan within the portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Premium Experience</small>
                            <strong>Provide a modern digital banking experience that rivals the agility of specialized fintechs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Identity</small>
                            <strong>Ensure a single, secure login across all your digital properties and financial products.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When banking is analog</p>
                        <p>Your call center shouldn't be overwhelmed by people asking for their current balance.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of self-service frustrates modern customers.</h2>
                        <p>Consumers expect their bank to provide the same digital agility as Amazon or Uber. If a customer has to call a branch to request a statement, or if they are forced to re-enter all their personal details to apply for a second product, they feel undervalued and look for alternatives.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Support Costs</h3>
                                <p>Your contact center spends hours every day helping customers reset passwords or explaining basic transaction history.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Opaque Product Status</h3>
                                <p>Customers call repeatedly because they have no digital way to check the status of their pending mortgage application.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Login Friction</h3>
                                <p>Users abandon their accounts because the legacy portal uses a confusing username system instead of biometric or mobile authentication.</p>
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
                                <h2>Centralized customer operations.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your customers complete control over their financial lives.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Customer Dashboards</h3>
                                <p>API integrations pulling live data from your core banking system (CBS), allowing clients to view real-time balances.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Self-Serve Account Actions</h3>
                                <p>Logic engines that allow users to safely lock a debit card, set travel notices, or download tax documents securely.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>APIs</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Document Vaults</h3>
                                <p>Interfaces for securely delivering sensitive documents (like loan contracts) and capturing digital signatures (eSignature integrations).</p>
                                <div className="deliverable-tags"><small>Security</small><small>Compliance</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 or Ping Identity to ensure strict data privacy and MFA (Multi-Factor Authentication).</p>
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
