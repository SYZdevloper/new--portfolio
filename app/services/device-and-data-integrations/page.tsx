import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/device-and-data-integrations/" },
  title: "Device & Data Integrations | Hyperlink Tech Solutions",
  description: "We develop API middleware and Bluetooth integrations to ingest live data from wearables (GPS, HR), velocity-based training devices, and force plates into a single centralized database.",
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
                    <strong>Data Engineering</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Data Integrations</div>
                        <p className="eyebrow">Data Engineering</p>
                        <h1 id="service-title">Connect the performance ecosystem.</h1>
                        <p className="hero-lead">We develop API middleware and Bluetooth integrations to ingest live data from wearables (GPS, HR), velocity-based training devices, and force plates into a single centralized database.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Robust ETL pipelines connecting to third-party APIs (STATSports, Catapult, VALD, Oura)</li>
                            <li>Automated data normalization, ensuring 'High Speed Running' from different GPS brands can be compared accurately</li>
                            <li>Cloud data warehousing (AWS/GCP) designed specifically for the high volume and velocity of biomechanical time-series data</li>
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
                            <small>01 · A Single Source of Truth</small>
                            <strong>Stop opening five different software platforms just to see how hard an athlete trained today.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Automated Workflows</small>
                            <strong>Eliminate the daily chore of exporting CSVs from the GPS software and importing them into the AMS.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Historical Asset Value</small>
                            <strong>Build a proprietary data warehouse that becomes a highly valuable asset for the franchise over time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable Architecture</small>
                            <strong>Ensure your database can handle millions of rows of 100Hz accelerometer data without crashing.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When hardware doesn't talk</p>
                        <p>Having 10 pieces of elite hardware is useless if the data lives in 10 different silos.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data fragmentation hides the true physical picture.</h2>
                        <p>Elite teams invest hundreds of thousands of dollars in GPS units, force plates, and sleep trackers. But if the GPS data lives on one server, the strength data in another, and the wellness data in a spreadsheet, the High-Performance Manager cannot see the correlation between poor sleep, high acute load, and a subsequent hamstring injury.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The CSV Grind</h3>
                                <p>Sports scientists waste two hours every morning manually exporting and merging CSV files from different hardware providers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Siloed Analysis</h3>
                                <p>You cannot easily graph an athlete's maximum sprint velocity against their weekly hamstring strength because the data is disconnected.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Vendor Lock-in</h3>
                                <p>The team is terrified to change GPS providers because they don't own their historical data; it's trapped in the vendor's cloud.</p>
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
                                <h2>Unified high-performance data architecture.</h2>
                            </div>
                            <p>We engineer the invisible pipelines that connect your entire hardware ecosystem into one proprietary asset.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Hardware API Middleware</h3>
                                <p>Developing secure Node.js layers that routinely poll third-party APIs to extract session data the moment a device is synced.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Normalization Engines</h3>
                                <p>Building logic that cleanses incoming data, standardizes naming conventions (e.g., matching 'Hamstring L' to 'Left Hamstring'), and flags anomalies.</p>
                                <div className="deliverable-tags"><small>Data</small><small>ETL</small><small>Quality</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Time-Series Warehousing</h3>
                                <p>Architecting cloud databases (like Snowflake or TimescaleDB) specifically designed to handle massive volumes of high-frequency sports data.</p>
                                <div className="deliverable-tags"><small>Cloud</small><small>Data</small><small>Scale</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Bluetooth/Local Integrations</h3>
                                <p>Where APIs don't exist, we can build custom local integrations to pull data directly from hardware files via local network scripts.</p>
                                <div className="deliverable-tags"><small>Hardware</small><small>Engineering</small><small>Innovation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured SportsTech Platform</p>
                            <h2>Unifying high-performance data.</h2>
                        </div>
                        <p>See how we helped a professional sports franchise replace five different Excel spreadsheets and three disconnected hardware apps with a single, unified Athlete Management System (AMS), saving the sports science team 15 hours of data entry per week.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>High Performance</span>
                                <span>Data Engineering</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/sportstech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From silos to scorecards.</h2>
                                <p>We developed a secure cloud infrastructure that automatically ingests GPS data (Catapult), strength metrics (VALD), and subjective wellness surveys into a single dashboard, allowing the High-Performance Manager to identify injury risks instantly.</p>
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
                        <h2 id="faq-title">Common questions about SportsTech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate data from different hardware providers (GPS, Force Plates)?</summary>
                            <p>We build robust ETL (Extract, Transform, Load) pipelines that connect to the APIs of major providers (like STATSports, Catapult, or VALD), normalizing the disparate data into a single, unified data warehouse for your team.</p>
                        </details>
                        <details>
                            <summary>Can you build mobile apps for athletes to log wellness data?</summary>
                            <p>Yes. We build lightweight, secure React Native apps where athletes can quickly log RPE (Rate of Perceived Exertion), sleep quality, and muscle soreness before they even arrive at the training facility.</p>
                        </details>
                        <details>
                            <summary>How do you ensure medical and performance data is secure?</summary>
                            <p>Athlete health data is highly sensitive. We implement enterprise-grade security protocols (like Auth0 for identity management), encrypt data at rest, and ensure role-based access control so a coach only sees what the medical team allows.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other high-performance capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/sportstech-product-websites/"><div><small>Discovery</small><h3>Product Sites</h3><p>Commercialize your tech.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/athlete-and-coach-portals/"><div><small>Service</small><h3>Athlete Portals</h3><p>The high-performance hub.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/testing-and-assessment-workflows/"><div><small>Operations</small><h3>Testing Workflows</h3><p>Digitize sports science.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/device-and-data-integrations/"><div><small>Engineering</small><h3>Device Integrations</h3><p>Connect the ecosystem.</p></div><b>Explore integrations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your high-performance <br />and SportsTech operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex hardware API integrations to mobile athlete wellness apps and predictive injury dashboards, we build software that drives elite performance.</p>
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
