import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/advisory-operations-dashboards/" },
  title: "Advisory Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your CRM, practice management, and timesheet software into executive dashboards tracking utilization rates, project margins, and pipeline health.",
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
                        <h1 id="service-title">Visibility across your professional services firm.</h1>
                        <p className="hero-lead">We aggregate data from your CRM, practice management, and timesheet software into executive dashboards tracking utilization rates, project margins, and pipeline health.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Staff Utilization, Realization Rates, Work-in-Progress) across the entire firm</li>
                            <li>Project margin analytics identifying which specific engagements or service lines are consistently over-serviced and unprofitable</li>
                            <li>Real-time pipeline tracking showing the Partners exactly how much revenue is forecast for the next quarter</li>
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
                            <strong>Identify that a specific team has a low utilization rate and reallocate them to a struggling project instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much profit you made on a specific fixed-fee engagement after accounting for all consultant hours.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Pipeline Accuracy</small>
                            <strong>Track exactly how many digital assessments converted into actual signed Statements of Work (SOWs).</strong>
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
                        <p>You can't manage a 500-person consulting firm looking at fragmented timesheet reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true engagement profitability.</h2>
                        <p>Professional services executives are forced to make strategic decisions with fragmented data. If sales data is in Salesforce, timesheets are in Harvest, and invoicing is in Xero, calculating the true realization rate of a specific Partner's portfolio is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific Partner is consistently over-servicing their clients, destroying the margin on fixed-fee projects.</p>
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
                                <p>Visual tools to track the true profitability of engagements by merging standard billing rates with actual hours logged.</p>
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
                            <p className="eyebrow">Featured Advisory Platform</p>
                            <h2>Modernizing client collaboration.</h2>
                        </div>
                        <p>See how we helped a mid-tier management consulting firm replace their unsecured email document collection process with a custom React client portal, speeding up the discovery phase of their engagements by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Professional Services</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/advisory-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, structured discovery.</h2>
                                <p>We developed a secure B2B portal where enterprise clients can log in via SSO, view a dynamic checklist of required compliance documents, and securely upload them directly into the consulting firm's practice management software.</p>
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
                        <h2 id="faq-title">Common questions about advisory tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CRMs like Salesforce or HubSpot?</summary>
                            <p>We build API middleware that connects your diagnostic tools and contact forms directly to your CRM. When a prospect completes a 'Cybersecurity Assessment', the tool instantly creates a Lead record containing all their structured answers.</p>
                        </details>
                        <details>
                            <summary>Can you build secure document vaults for legal or M&A teams?</summary>
                            <p>Yes. We build enterprise-grade portals using Auth0 for identity management and AWS/Azure for encrypted file storage, ensuring highly sensitive due-diligence documents are never sent via plain text email.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex intellectual property (IP) libraries?</summary>
                            <p>We use headless CMS platforms (like Sanity) coupled with powerful search engines (like Algolia) to build lightning-fast knowledge hubs. You can gate premium content behind lead-capture forms or client-only logins.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other advisory capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/authority-and-service-websites/"><div><small>Discovery</small><h3>Authority Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/insights-and-knowledge-libraries/"><div><small>Content</small><h3>Knowledge Hubs</h3><p>Monetize your IP.</p></div><b>Explore insights ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-lead-journeys/"><div><small>Conversion</small><h3>B2B Assessments</h3><p>Intelligent qualification.</p></div><b>Explore assessments ↗</b></a>
                        <a className="related-card" href="/services/client-and-project-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services firm. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From intelligent B2B lead generation tools to secure client collaboration portals and utilization dashboards, we build software that drives billable efficiency and firm growth.</p>
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
