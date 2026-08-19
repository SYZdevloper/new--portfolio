import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/investment-reporting-dashboards/" },
  title: "Investment Reporting Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your portfolio management system, CRM, and custodial feeds into executive dashboards tracking FUM growth, asset class allocation, and fee revenue.",
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
                    <strong>Executive Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Operations Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across Funds Under Management (FUM).</h1>
                        <p className="hero-lead">We aggregate data from your portfolio management system, CRM, and custodial feeds into executive dashboards tracking FUM growth, asset class allocation, and fee revenue.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Net Inflows, FUM Growth, Client Churn) in real-time across the firm</li>
                            <li>Adviser scorecarding to identify which relationship managers are consistently driving the highest net new assets</li>
                            <li>Real-time tracking of asset class concentrations to manage firm-wide risk exposure</li>
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
                            <small>01 · Live Decision Making</small>
                            <strong>Identify a sudden spike in client withdrawals and investigate the root cause immediately.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much fee revenue a specific adviser or fund strategy generated this month.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Risk Management</small>
                            <strong>Track the firm's overall exposure to a specific equity sector across all client portfolios instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging CRM and custodial exports in Excel for the monthly board pack.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When firm data is siloed</p>
                        <p>You can't manage a $1B wealth firm looking at fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational efficiency.</h2>
                        <p>Wealth executives are forced to make strategic decisions with fragmented data. If client acquisition is tracked in the CRM, FUM is in the portfolio system, and revenue is in the accounting software, calculating the true profitability of a specific advisory team is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Revenue Leakage</h3>
                                <p>Management doesn't realize that a specific advisory team is heavily discounting their fees to win business, destroying margin.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Performance Data</h3>
                                <p>You cannot easily graph marketing spend against net new assets because the data lives in disconnected systems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend hours every morning manually extracting and merging data from different regional systems to build the weekly flash report.</p>
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
                                <h2>Command centers for wealth executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to manage risk and grow FUM.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Firm Control Towers</h3>
                                <p>High-level visual dashboards tracking live FUM balances against forecasted growth targets.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (CRM, Custodians, Marketing) and normalize it in a highly secure cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Adviser Yield Analytics</h3>
                                <p>Visual tools to track the true profitability of relationship managers by merging their salary costs with the fee revenue they generate.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Board Reporting</h3>
                                <p>Dynamic engines to instantly generate standardized PDF reports for the investment committee or board of directors.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>Compliance</small><small>Automation</small></div>
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
