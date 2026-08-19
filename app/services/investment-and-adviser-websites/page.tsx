import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/investment-and-adviser-websites/" },
  title: "Investment & Adviser Websites | Hyperlink Tech Solutions",
  description: "We design high-trust websites for wealth managers, family offices, and funds that convey institutional credibility and clearly articulate complex investment strategies.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Wealth Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Digitally showcase your investment expertise.</h1>
                        <p className="hero-lead">We design high-trust websites for wealth managers, family offices, and funds that convey institutional credibility and clearly articulate complex investment strategies.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Dynamic data visualization natively built in React to showcase historical fund performance and asset allocation</li>
                            <li>Enterprise-grade security and accessibility (WCAG) compliance built into the foundation</li>
                            <li>Headless CMS setups allowing compliance teams to instantly update PDS documents and regulatory disclaimers</li>
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
                            <small>01 · Institutional Trust</small>
                            <strong>Digital experiences that convey absolute stability and sophisticated expertise to HNW clients.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Complex Clarity</small>
                            <strong>Translate dense investment methodologies into easily digestible visual storytelling.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Higher Conversions</small>
                            <strong>Structure that guides the prospective investor seamlessly from a fund page directly into the digital application.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Compliance Agility</small>
                            <strong>Empower your team to update mandatory legal disclaimers globally without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails wealth management</p>
                        <p>If a prospective client cannot easily find the historical performance data, they will question your transparency.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation loses trust and capital.</h2>
                        <p>Wealth management is entirely built on trust. If a prospective investor lands on an outdated website where finding the latest monthly update requires downloading a poorly formatted PDF, they will assume your back-office operations are equally archaic. They need immediate confidence in your strategy and technology.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Opaque Performance</h3>
                                <p>Investors bounce because they cannot easily compare fund performance against benchmark indices on a mobile screen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels sluggish and outdated, actively undermining trust in your institution's technical capability to manage their wealth.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Compliance Bottlenecks</h3>
                                <p>Marketing is unable to update a legally required PDS link without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for modern wealth.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize trust, clarity, and uncompromising speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Interactive Data Visualization</h3>
                                <p>Building bespoke React charts (using libraries like Recharts or D3) to display historical unit prices dynamically.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Data Viz</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Compliance Management</h3>
                                <p>Structuring the CMS so legal teams can easily manage global disclaimers, target market determinations (TMDs), and PDS versions.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Compliance</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly, capturing highly motivated investors worldwide.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
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
