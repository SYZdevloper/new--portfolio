import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/investor-onboarding/" },
  title: "Investor Onboarding | Hyperlink Tech Solutions",
  description: "We engineer secure digital application flows integrating AML/KYC checks and sophisticated logic for complex entity structures (Trusts, SMSFs), allowing investors to commit capital entirely online.",
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
                        <h1 id="service-title">Frictionless investor acquisition.</h1>
                        <p className="hero-lead">We engineer secure digital application flows integrating AML/KYC checks and sophisticated logic for complex entity structures (Trusts, SMSFs), allowing investors to commit capital entirely online.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based application flows that eliminate the need for printing massive PDF application forms</li>
                            <li>Dynamic logic that adapts the question set based on the specific entity type (Individual vs. Corporate Trustee)</li>
                            <li>Live API integrations with identity verification providers (eKYC) to instantly validate passports and driver's licenses</li>
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
                            <strong>Turn a frustrating 40-page paper application into a smooth, 10-minute digital flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Fraud</small>
                            <strong>Integrate biometric and document verification directly into the onboarding journey.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Capital Deployment</small>
                            <strong>Push clean, validated data directly into your registry, allowing instant BPAY or wire transfer instructions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Entity Flexibility</small>
                            <strong>Handle the complexities of SMSFs, Trusts, and corporate structures effortlessly via smart logic.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When onboarding is painful</p>
                        <p>If a client has to print and sign 40 pages to invest in a fund, they will often leave the paperwork on their desk indefinitely.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky onboarding destroys capital acquisition.</h2>
                        <p>Funds spend thousands on marketing and adviser networks only to force users into an onboarding flow that looks like a digitized tax return. When the form is a massive PDF, requires wet signatures, or fails to save progress, the investor abandons the process, delaying capital deployment.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Drop-off</h3>
                                <p>Users abandon the application when they realize they have to download, print, and sign a physical document for a complex trust structure.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Entry Fatigue</h3>
                                <p>The legacy form asks for 10 years of address history without offering an easy Google Maps autocomplete, causing frustration.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Verification Delays</h3>
                                <p>Accounts take days to open because back-office staff have to manually review photocopies of ID documents and query ASIC registers.</p>
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
                                <h2>Automated wealth conversion.</h2>
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
                                <p>Developing secure Node.js layers that connect to services like GreenID or Onfido for instant AML/KYC checks.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Compliance</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Entity Structure Logic</h3>
                                <p>Building rules engines that adapt the required fields based on whether the applicant is a Trust, Company, or SMSF.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>UX</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Signatures (eSign)</h3>
                                <p>Integrating with DocuSign or similar APIs to dynamically generate the completed application and collect secure signatures.</p>
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
