import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/practice-dashboards/" },
  title: "Practice Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your practice management software, CRM, and billing systems into executive dashboards tracking billable hours, realization rates, and matter profitability.",
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
                        <h1 id="service-title">Visibility across the entire practice.</h1>
                        <p className="hero-lead">We aggregate data from your practice management software, CRM, and billing systems into executive dashboards tracking billable hours, realization rates, and matter profitability.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Staff Utilization, Realization Rates, Work-in-Progress) across the entire firm</li>
                            <li>Matter margin analytics identifying which specific practice areas or partners are consistently over-servicing and unprofitable</li>
                            <li>Real-time pipeline tracking showing the Partnership exactly how much revenue is forecast for the next quarter</li>
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
                            <strong>Identify that a specific team has a low utilization rate and reallocate them to a struggling matter instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much profit you made on a specific fixed-fee matter after accounting for all logged hours.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Pipeline Accuracy</small>
                            <strong>Track exactly how many digital intakes converted into actual signed engagement letters.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging CRM and timesheet exports in Excel for the monthly Partner meeting.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When firm data is siloed</p>
                        <p>You can't manage a 200-person firm looking at fragmented timesheet reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true matter profitability.</h2>
                        <p>Professional services executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, timesheets are in Actionstep, and invoicing is in Xero, calculating the true realization rate of a specific Partner's portfolio is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific Partner is consistently over-servicing their clients, destroying the margin on fixed-fee work.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Performance Data</h3>
                                <p>You cannot easily graph marketing spend against actual billed hours because the data lives in disconnected systems.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Operations managers spend hours every week manually extracting and merging data from different regional systems to build the weekly utilization report.</p>
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
                                <h2>Command centers for firm leadership.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give Managing Partners the real-time insights needed to optimize utilization and grow margins.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Firm Control Towers</h3>
                                <p>High-level visual dashboards tracking live staff utilization and Work-in-Progress (WIP) balances against targets.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (CRM, Timesheets, ERP) and normalize it in a highly secure cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Realization & Margin Analytics</h3>
                                <p>Visual tools to track the true profitability of matters by merging standard billing rates with actual hours logged.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Partner Reporting</h3>
                                <p>Dynamic engines to instantly generate standardized PDF or email summaries for the Partner group highlighting pipeline risks.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>Operations</small><small>Automation</small></div>
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
