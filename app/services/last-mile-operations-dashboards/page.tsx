import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/last-mile-operations-dashboards/" },
  title: "Last-Mile Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your dispatch software, driver apps, and routing engines into executive dashboards tracking on-time delivery rates (OTIF), driver utilization, and cost per drop.",
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
                        <h1 id="service-title">Real-time control of the delivery fleet.</h1>
                        <p className="hero-lead">We aggregate data from your dispatch software, driver apps, and routing engines into executive dashboards tracking on-time delivery rates (OTIF), driver utilization, and cost per drop.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards tracking core metrics (Cost per Drop, Stops per Hour, Exception Rates) across all hubs</li>
                            <li>Live dispatch maps showing exactly where every driver is and their current route progress</li>
                            <li>Post-shift analytics identifying which drivers are consistently late or causing damages</li>
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
                            <strong>Identify a driver falling behind schedule at 11 AM and re-assign stops to a faster courier instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Instantly see how much profit you made on a specific e-commerce client's volume today.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Driver Optimization</small>
                            <strong>Track performance data to reward top drivers and retrain those with high failure rates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Eliminate the days spent manually merging dispatch and accounting exports in Excel.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations data is siloed</p>
                        <p>You can't manage a 500-driver fleet looking at fragmented spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide true operational profitability.</h2>
                        <p>Courier executives are forced to make strategic decisions with fragmented data. If volume data is in the routing software, driver pay is in a spreadsheet, and client billing is in an ERP, calculating the true profitability of a specific route or merchant account is nearly impossible.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Margin Erosion</h3>
                                <p>Management doesn't realize that a specific high-volume merchant is actually unprofitable due to constant failed deliveries and support time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Dispatch Blind Spots</h3>
                                <p>A driver's vehicle breaks down, but dispatch doesn't realize until hours later when customers start complaining about missed ETAs.</p>
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
                                <h2>Command centers for last-mile executives.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and optimize fleet operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Dispatch Control Towers</h3>
                                <p>High-level visual dashboards with live maps, tracking fleet progress against forecasted routing timelines.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Maps</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate logistics systems (Routing, HR, CRM) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Cost-to-Serve Analytics</h3>
                                <p>Visual tools to track true route profitability by factoring in driver pay, fuel, and the time spent managing exceptions.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Data</small><small>Finance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated P&L Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for depot managers and ownership groups.</p>
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
                            <p className="eyebrow">Featured Last-Mile Platform</p>
                            <h2>Powering the local delivery economy.</h2>
                        </div>
                        <p>See how we helped an urban courier network replace manual dispatching with a fully automated routing and merchant portal, scaling their daily capacity from 500 to 5,000 drops per day without hiring more dispatchers.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Courier Tech</span>
                                <span>Routing & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/last-mile-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete final mile control.</h2>
                                <p>We developed a secure B2B merchant portal integrated directly with Shopify, automatically ingesting orders, clustering them via a custom routing algorithm, and pushing turn-by-turn routes directly to the drivers' native mobile app.</p>
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
                        <h2 id="faq-title">Common questions about last-mile tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with e-commerce platforms like Shopify?</summary>
                            <p>We build API middleware that listens for webhooks from Shopify, WooCommerce, or Magento. When a local order is placed, the data is automatically ingested into your dispatch software, generating a tracking link instantly.</p>
                        </details>
                        <details>
                            <summary>Do you build native driver apps?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your fleet. These apps handle barcode scanning, digital signature capture (ePOD), and photo uploads when packages are left at the door.</p>
                        </details>
                        <details>
                            <summary>Can you optimize multi-stop routes automatically?</summary>
                            <p>Yes. We integrate routing algorithms (like Mapbox Optimization or Onfleet APIs) that instantly calculate the most efficient sequence for a driver handling 80 deliveries in a specific zip code, minimizing drive time and fuel costs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other courier capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/delivery-booking-and-pricing/"><div><small>Revenue</small><h3>Booking & Pricing</h3><p>Instant local delivery rates.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-notifications/"><div><small>Service</small><h3>Tracking & Alerts</h3><p>The Amazon-grade experience.</p></div><b>Explore tracking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-merchant-portals/"><div><small>B2B Operations</small><h3>Merchant Portals</h3><p>Empower volume shippers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/driver-and-route-workflows/"><div><small>Mobile</small><h3>Driver Workflows</h3><p>Optimize the final mile.</p></div><b>Explore driver apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your courier <br />and last-mile operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated B2B merchant portals to live consumer tracking links and native driver apps, we build software that drives efficiency in the final mile.</p>
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
