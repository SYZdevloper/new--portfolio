import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/adviser-and-relationship-workflows/" },
  title: "Adviser & Relationship Workflows | Hyperlink Tech Solutions",
  description: "We develop bespoke B2B portals for financial advisers and relationship managers, streamlining client data collection, portfolio reviews, and compliance documentation.",
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
                        <div className="hero-status">Adviser Tools</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Empower your advisory team.</h1>
                        <p className="hero-lead">We develop bespoke B2B portals for financial advisers and relationship managers, streamlining client data collection, portfolio reviews, and compliance documentation.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2E (Business-to-Employee) portals allowing advisers to view a 360-degree profile of their entire client book</li>
                            <li>Digital Fact-Find workflows replacing secure-email threads when gathering initial financial data from a new prospect</li>
                            <li>Assisted onboarding flows allowing an adviser to start an application and push a secure link to the client to digitally sign</li>
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
                            <small>01 · Faster Origination</small>
                            <strong>Advisers spend less time chasing missing signatures and more time managing wealth.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Errors</small>
                            <strong>Stop staff from manually re-keying data from a printed Fact-Find into the CRM.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Better Client Experience</small>
                            <strong>When a client logs in, the portal acts as a seamless extension of the adviser's personal brand.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Audit & Compliance</small>
                            <strong>Ensure every Record of Advice (ROA) and interaction is tracked and securely stored for compliance.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When adviser tools are outdated</p>
                        <p>Your advisers cannot deliver a premium client experience if they are fighting legacy software.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple adviser efficiency.</h2>
                        <p>Wealth firms invest heavily in the client-facing digital experience but often ignore the tools used by their advisers. If a wealth manager has to ask a client to email highly sensitive tax documents, or if they have to log into three different systems just to prepare for a portfolio review, operational costs skyrocket.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Email Grind</h3>
                                <p>Advisers spend hours every week playing email ping-pong with clients trying to collect the correct identification documents.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Disconnects</h3>
                                <p>A client updates their address in the portal, but the adviser's CRM isn't updated because the systems don't talk to each other.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Risks</h3>
                                <p>Advisers are storing sensitive client documents locally on their desktops because the official secure upload portal is too hard to use.</p>
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
                                <h2>The digital adviser companion.</h2>
                            </div>
                            <p>We engineer secure tools that turn your advisory team into highly efficient operational nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Adviser Dashboards</h3>
                                <p>Building secure web apps where staff log in to view their pipeline, upcoming reviews, and missing client documents.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Integration</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital Fact-Find Tools</h3>
                                <p>Custom interfaces allowing an adviser to send a secure, dynamic form to a prospect to capture their financial position before the first meeting.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Operations</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Document Collection</h3>
                                <p>Portals where advisers can request specific documents and the client receives a secure link to upload it via their phone.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Data</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CRM API Hooks</h3>
                                <p>Developing middleware that ensures the data entered by the adviser perfectly matches the data architecture required by Salesforce or Xplan.</p>
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
                            <p className="eyebrow">Featured Wealth Platform</p>
                            <h2>Modernizing fund operations.</h2>
                        </div>
                        <p>See how we helped a boutique funds management firm digitize their archaic, paper-based onboarding process, allowing them to verify complex trust structures via API and secure $50M in new capital entirely online within the first month.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>WealthTech</span>
                                <span>Digital Onboarding</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/wealth-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant capital raising.</h2>
                                <p>We developed a highly secure application flow that intelligently adapts based on the entity type (Individual, SMSF, Company). It automatically queries ASIC and identity registers for real-time AML/KYC checks, generating a pre-filled, compliant digital mandate for the investor to e-sign.</p>
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
                        <h2 id="faq-title">Common questions about wealth tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex entity structures (Trusts, Companies, SMSFs)?</summary>
                            <p>We build dynamic logic into the digital application. If a user selects 'Corporate Trustee for a Trust', our React form automatically generates the exact required fields for beneficial owners, drastically simplifying what is traditionally a confusing 40-page PDF.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Portfolio Management Systems (e.g., Praemium, Iress)?</summary>
                            <p>Yes. We build secure API middleware to pull real-time portfolio data, asset allocations, and historical performance from your core systems, displaying it securely within the custom investor portal.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for high-net-worth clients?</summary>
                            <p>We implement enterprise-grade IAM (Identity and Access Management) using Auth0 or Okta. We enforce strict Multi-Factor Authentication (MFA), ensure all data is encrypted at rest, and use secure document vaults to eliminate sending sensitive tax files over email.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other wealth capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/investment-and-adviser-websites/"><div><small>Discovery</small><h3>Wealth Websites</h3><p>Showcase institutional trust.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/investor-onboarding/"><div><small>Conversion</small><h3>Investor Onboarding</h3><p>Frictionless digital applications.</p></div><b>Explore onboarding ↗</b></a>
                        <a className="related-card" href="/services/investor-and-client-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Premium digital experiences.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/adviser-and-relationship-workflows/"><div><small>Operations</small><h3>Adviser Workflows</h3><p>Empower the advisory team.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your wealth <br />and funds management operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital onboarding of complex entities to highly secure, premium investor portals, we build software that drives capital growth and operational efficiency.</p>
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
