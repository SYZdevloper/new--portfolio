import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/forwarding-operations-dashboards/" },
  title: "Forwarding Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your Freight Management System (like CargoWise) to provide executives with live dashboards tracking lane margins, container dwell times, and demurrage risks.",
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
                        <h1 id="service-title">Control the global supply chain.</h1>
                        <p className="hero-lead">We aggregate data from your Freight Management System (like CargoWise) to provide executives with live dashboards tracking lane margins, container dwell times, and demurrage risks.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (TEU Volume, Yield per Container, Dwell Time) across all lanes</li>
                            <li>Carrier scorecarding to identify which shipping lines are consistently rolling your cargo</li>
                            <li>Real-time tracking of financial risks like accumulated demurrage and detention fees</li>
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
                            <strong>Adjust routing strategies instantly based on port congestion and real-time margin data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Carrier Optimization</small>
                            <strong>Stop booking with carriers who consistently fail your transit time expectations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Yield Protection</small>
                            <strong>Track which specific customers or trade lanes are actually driving the highest profit margin.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging FMS and accounting exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When forwarding data is siloed</p>
                        <p>You can't manage global logistics looking at fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational profitability.</h2>
                        <p>Forwarding executives are forced to make strategic decisions with fragmented data. If volume data is in CargoWise, exception data is in a tracking portal, and financials are in an ERP, calculating the true profitability of a specific customer account or identifying a failing trade lane is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific high-volume importer is actually unprofitable due to constant exceptions and manual work.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Carrier Blind Spots</h3>
                                <p>You continue using an ocean carrier who constantly rolls cargo because management can't easily view aggregated performance data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend weeks manually extracting and merging data from different regional systems to build the monthly board pack.</p>
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
                                <h2>Command centers for forwarding executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize global trade.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like Gross Margin, TEUs moved, and overall On-Time performance.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate logistics systems (FMS, Tracking APIs, ERP) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Cost-to-Serve Analytics</h3>
                                <p>Visual tools to track true customer profitability by factoring in claims, exception management time, and support tickets.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated P&L Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for branch managers and ownership groups.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>PDFs</small><small>Automation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Freight Platform</p>
                            <h2>Digitizing the global supply chain.</h2>
                        </div>
                        <p>See how we helped a global freight forwarder build a custom customer portal connected directly to CargoWise, drastically reducing 'Where is my container?' phone calls and automating their multi-modal quoting process.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Freight Forwarding</span>
                                <span>CargoWise Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/freight-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete visibility, zero phone calls.</h2>
                                <p>We developed a secure portal where shippers can log in, view live AIS tracking of their ocean freight, submit customs documents, and pay invoices via Stripe—all syncing bidirectionally with the legacy freight management system.</p>
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
                        <h2 id="faq-title">Common questions about freight tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CargoWise or other legacy forwarding systems?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex Freight Management Systems (FMS). This allows us to pull live tracking data, shipment statuses, and invoices without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you automate ocean and air quoting?</summary>
                            <p>Yes. Global quoting is incredibly complex due to fluctuating bunker adjustments, peak season surcharges, and local drayage. We build custom calculation engines that pull these variables to generate instant, accurate web quotes for shippers.</p>
                        </details>
                        <details>
                            <summary>Do you provide live map tracking for ocean freight?</summary>
                            <p>Yes. We integrate with visibility providers like Project44, FourKites, or direct AIS data streams to plot containers on an interactive global map within the customer portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other freight capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-service-websites/"><div><small>Discovery</small><h3>Freight Websites</h3><p>Showcase global reach.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/rate-and-quotation-workflows/"><div><small>Revenue</small><h3>Quoting Workflows</h3><p>Automate complex pricing.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/customer-booking-portals/"><div><small>Service</small><h3>Booking Portals</h3><p>Frictionless freight management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-exception-visibility/"><div><small>Operations</small><h3>Exception Tracking</h3><p>Visibility across ocean & air.</p></div><b>Explore tracking ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your global <br />freight forwarding operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated multi-modal quoting engines to real-time ocean tracking portals and CargoWise integrations, we build software that drives efficiency across international borders.</p>
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
