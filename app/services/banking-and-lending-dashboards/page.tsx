import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/banking-and-lending-dashboards/" },
  title: "Banking & Lending Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from core banking systems and origination platforms into executive dashboards tracking loan approval rates, deposit growth, and compliance metrics.",
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
                        <h1 id="service-title">Visibility across the loan book.</h1>
                        <p className="hero-lead">We aggregate data from core banking systems and origination platforms into executive dashboards tracking loan approval rates, deposit growth, and compliance metrics.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Time-to-Decision, Application Abandonment, Origination Volume) in real-time</li>
                            <li>Conversion funnel analytics identifying exactly where customers are dropping out of the digital application process</li>
                            <li>Branch and adviser scorecarding to identify which teams are consistently driving the highest quality applications</li>
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
                            <strong>Identify a sudden spike in application abandonment and investigate a potential technical issue immediately.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much volume a specific marketing campaign drove through the digital channel today.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Bottleneck Identification</small>
                            <strong>Track the average time it takes for an application to move from 'Submitted' to 'Approved' to identify back-office delays.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging CRM and LOS exports in Excel for the monthly board pack.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When financial data is siloed</p>
                        <p>You can't manage a digital lending operation looking at fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational efficiency.</h2>
                        <p>Finance executives are forced to make strategic decisions with fragmented data. If application starts are tracked in Google Analytics, approvals are in the LOS, and funded loans are in the core banking system, calculating the true conversion rate of your digital channel is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Conversion Failures</h3>
                                <p>Management doesn't realize that 60% of users abandon the application specifically at the 'Upload ID' step because they can't connect the data points.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Performance Data</h3>
                                <p>You cannot easily graph branch origination performance against digital origination performance because the data lives in different systems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend hours every morning manually extracting and merging data from different regional systems to build the daily flash report.</p>
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
                                <h2>Command centers for financial executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to optimize the digital channel and manage risk.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Origination Control Towers</h3>
                                <p>High-level visual dashboards tracking live application submissions against forecasted volume.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (Web Analytics, CRM, LOS) and normalize it in a highly secure cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Funnel & Drop-off Analytics</h3>
                                <p>Visual tools to track the exact customer journey through the onboarding flow, highlighting areas causing friction.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Compliance Reporting</h3>
                                <p>Dynamic engines to instantly generate standardized reports required by regulators or internal risk committees.</p>
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
