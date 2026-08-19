import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/supply-chain-dashboards/" },
  title: "Supply Chain Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your TMS, WMS, and accounting software to provide real-time visibility into lane profitability, carrier performance, and warehouse efficiency.",
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
                        <h1 id="service-title">Visibility across the logistics network.</h1>
                        <p className="hero-lead">We aggregate data from your TMS, WMS, and accounting software to provide real-time visibility into lane profitability, carrier performance, and warehouse efficiency.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Margin per Load, On-Time Delivery, Dwell Time)</li>
                            <li>Carrier scorecarding to identify which partners are consistently late or causing claims</li>
                            <li>Real-time tracking of warehouse metrics like picks per hour and dock door utilization</li>
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
                            <strong>Adjust pricing strategies instantly based on real-time lane capacity and margin data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Carrier Optimization</small>
                            <strong>Stop giving freight to carriers who consistently fail your On-Time Service Level Agreements (SLAs).</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Yield Protection</small>
                            <strong>Track which specific customers or lanes are actually driving the highest profit margin.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging TMS and accounting exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When logistics data is siloed</p>
                        <p>You can't manage a national supply chain looking at fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational profitability.</h2>
                        <p>Logistics executives are forced to make strategic decisions with fragmented data. If load data is in the TMS, warehouse data is in the WMS, and financials are in QuickBooks, calculating the true profitability of a specific customer account or identifying a failing carrier is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific high-volume customer is actually unprofitable due to constant accessorials and detention time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Carrier Blind Spots</h3>
                                <p>You continue using a carrier who is constantly late because management can't easily view aggregated on-time performance data.</p>
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
                                <h2>Command centers for supply chain executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize freight flows.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like Gross Margin, Revenue per Truck, and overall On-Time In-Full (OTIF) rates.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate logistics systems (TMS, WMS, ELD) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Cost-to-Serve Analytics</h3>
                                <p>Visual tools to track true customer profitability by factoring in claims, detention time, and support tickets.</p>
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
                            <p className="eyebrow">Featured Logistics Platform</p>
                            <h2>Digitizing freight operations.</h2>
                        </div>
                        <p>See how we helped a national logistics provider replace manual spreadsheets with a custom quoting engine and tracking portal, drastically reducing customer service calls while increasing lane profitability.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Logistics Tech</span>
                                <span>Freight & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/logistics-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From quote to proof of delivery.</h2>
                                <p>We developed a custom portal that integrates with their Transportation Management System (TMS). Shippers can now generate live LTL freight quotes, book the load, and track the truck in real-time without ever picking up the phone.</p>
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
                        <h2 id="faq-title">Common questions about logistics tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our TMS or WMS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard systems like MercuryGate, Manhattan, or custom legacy AS400 databases. This ensures live rates, inventory, and tracking.</p>
                        </details>
                        <details>
                            <summary>Can you automate our quoting process?</summary>
                            <p>Yes. We build custom calculation engines that factor in dimensional weight, lane density, fuel surcharges, and customer-specific tariffs to generate instant, accurate quotes on the web.</p>
                        </details>
                        <details>
                            <summary>Do you build portals for external carriers and owner-operators?</summary>
                            <p>Yes. We build secure B2B portals where external drivers can view available loads, submit bids, upload Proof of Delivery (POD) documents, and track their settlements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other logistics capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/freight-and-capacity-discovery/"><div><small>Discovery</small><h3>Capacity Discovery</h3><p>Showcase network strength.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/quotes-booking-and-dispatch/"><div><small>Revenue</small><h3>Quoting & Booking</h3><p>Digitize the freight sale.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-customer-portals/"><div><small>Service</small><h3>Customer Portals</h3><p>Self-serve tracking.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/supply-chain-dashboards/"><div><small>Operations</small><h3>Supply Chain BI</h3><p>Visibility across the network.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your logistics <br />and supply chain operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated freight quoting engines to real-time tracking portals and carrier management dashboards, we build software that drives efficiency across the supply chain.</p>
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
