import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/practice-and-service-dashboards/" },
  title: "Practice & Service Dashboards | Hyperlink Tech Solutions",
  description: "We build BI dashboards for practice partners, aggregating time-tracking, invoicing, and pipeline data to measure project margins and team utilization.",
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
                    <strong>Practice Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Practice Dashboards</div>
                        <p className="eyebrow">Practice Management</p>
                        <h1 id="service-title">Track utilization and practice profitability.</h1>
                        <p className="hero-lead">We build BI dashboards for practice partners, aggregating time-tracking, invoicing, and pipeline data to measure project margins and team utilization.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards extracting data from Deltek, Xero, and CRM</li>
                            <li>Real-time tracking of project burn rates against fixed-fee agreements</li>
                            <li>Resource allocation forecasting to balance studio workloads</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Practice <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Margin Visibility</small>
                            <strong>Know exactly which projects are profitable and which are bleeding time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Utilization Rates</small>
                            <strong>See instantly if your design team is over-capacity or under-utilized.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Automated Reporting</small>
                            <strong>Stop spending the weekend building Excel reports for the Monday partner meeting.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Pipeline Forecasting</small>
                            <strong>Predict cash flow based on weighted prospects in your CRM.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the studio flies blind</p>
                        <p>Winning design awards doesn't guarantee a profitable practice.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>You can't manage margins with gut feeling.</h2>
                        <p>Many professional services firms struggle because their data is siloed. Time sheets are in one app, invoices in another, and the sales pipeline in a third. Without a unified view, partners discover a project was unprofitable months after it finishes.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Fixed-Fee Blowouts</h3>
                                <p>A project is billed at a fixed fee, but the design team spends double the allocated hours perfecting it, destroying the margin.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Resource Bottlenecks</h3>
                                <p>One team is working until midnight while another team has no billable work for the week.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Delayed Intelligence</h3>
                                <p>Partners only see the financial health of the practice when the accountant finalizes the month-end reports.</p>
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
                                <h2>Business intelligence for partners.</h2>
                            </div>
                            <p>We build custom dashboards that give studio leadership the clarity needed to scale.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Unified BI Dashboards</h3>
                                <p>Secure executive scorecards that pull live data via API from your accounting, time-tracking, and CRM tools.</p>
                                <div className="deliverable-tags"><small>BI</small><small>APIs</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Burn-Rate Monitors</h3>
                                <p>Visual gauges that track actual hours logged against the estimated budget for every active project stage.</p>
                                <div className="deliverable-tags"><small>Tracking</small><small>Alerts</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Resource Heatmaps</h3>
                                <p>Interactive calendars showing team utilization, helping directors allocate staff to upcoming projects efficiently.</p>
                                <div className="deliverable-tags"><small>Planning</small><small>UX</small><small>Management</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Partner Packs</h3>
                                <p>Systems that automatically generate and email branded PDF financial summaries to the leadership team every Friday.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>PDFs</small><small>Reporting</small></div>
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
                            <h2>Elevating the studio experience.</h2>
                        </div>
                        <p>See how we helped a global architectural practice build a seamless digital ecosystem that took them from beautiful portfolio websites to fully integrated client project portals.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Architecture Tech</span>
                                <span>WebGL & Web Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/architecture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Designing for designers.</h2>
                                <p>We developed a high-performance Next.js portfolio that renders heavy 3D fly-throughs flawlessly, backed by a secure client portal where stakeholders can review plans and sign off on material finishes.</p>
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
                        <h2 id="faq-title">Common questions about architecture & design tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle heavy media files on portfolio sites?</summary>
                            <p>We utilize modern frameworks like Next.js paired with global CDNs and automated image/video compression via services like Cloudinary or Mux. This ensures that even heavy 4K videos and high-res architectural renders load instantly without hurting your SEO.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our practice management software?</summary>
                            <p>Yes. We frequently integrate web platforms with industry-standard software like Deltek, ArchiSnapper, or BQE Core to automate time-tracking dashboards, project accounting, and CRM functions.</p>
                        </details>
                        <details>
                            <summary>Are client portals secure enough for confidential designs?</summary>
                            <p>Absolutely. We build bespoke portals using enterprise-grade authentication (Auth0/Okta), ensuring that pre-release designs, tender documents, and financial estimates are strictly accessible only to authorized stakeholders.</p>
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
                        <a className="related-card" href="/services/portfolio-and-practice-websites/"><div><small>Marketing</small><h3>Practice Websites</h3><p>Digital portfolios that win major commissions.</p></div><b>Explore portfolios ↗</b></a>
                        <a className="related-card" href="/services/consultations-and-proposal-journeys/"><div><small>Sales</small><h3>Proposal Journeys</h3><p>Streamline the path to a signed contract.</p></div><b>Explore proposals ↗</b></a>
                        <a className="related-card" href="/services/client-project-portals/"><div><small>Collaboration</small><h3>Client Portals</h3><p>Keep clients engaged during the design phase.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/practice-and-service-dashboards/"><div><small>Operations</small><h3>Practice Dashboards</h3><p>Track utilization and practice profitability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your practice with <br />bespoke digital tools. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From award-winning portfolios to secure client collaboration portals, we build the technology that powers leading design firms.</p>
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
