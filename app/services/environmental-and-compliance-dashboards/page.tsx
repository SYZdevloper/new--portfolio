import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/environmental-and-compliance-dashboards/" },
  title: "Environmental & Compliance Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from fleet telematics, weighbridges, and customer CRMs into executive dashboards, providing live visibility into recycling diversion rates and EPA compliance.",
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
                        <div className="hero-status">Compliance Dashboards</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Track diversion rates and fleet efficiency.</h1>
                        <p className="hero-lead">We aggregate data from fleet telematics, weighbridges, and customer CRMs into executive dashboards, providing live visibility into recycling diversion rates and EPA compliance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining tons-collected, landfill diversion rates, and fleet fuel efficiency</li>
                            <li>Automated carbon accounting and sustainability reporting for government regulators (EPA)</li>
                            <li>Real-time tracking of route profitability and landfill levy costs</li>
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
                            <small>01 · Single Source of Truth</small>
                            <strong>Stop hunting across routing software and weighbridge systems for data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Telemetry</small>
                            <strong>Monitor fleet location, safety metrics, and route completion in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ESG Automation</small>
                            <strong>Turn raw tonnage data into auditable sustainability reports instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Margin Visibility</small>
                            <strong>Understand the exact profitability of specific commercial routes.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't optimize a fleet using last month's Excel spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos are hiding operational inefficiencies.</h2>
                        <p>Environmental operators are drowning in data. With routing data in AMCS, weights in the weighbridge software, and customer data in Salesforce, executives cannot make rapid, profitable decisions because the data is never in one place at the same time.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Siloed Intelligence</h3>
                                <p>The fleet is hitting route completion targets, but landfill levies are destroying the margin, and leadership can't see the disconnect.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Reporting</h3>
                                <p>Analysts spend weeks manually extracting data to build EPA compliance reports.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reactive Management</h3>
                                <p>Leadership only finds out a major commercial route is unprofitable during the end-of-year financial review.</p>
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
                                <h2>Command centers for environmental leaders.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give executives the exact metrics they need to protect margins and ensure compliance.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visualizations of daily tonnage, diversion rates, and route profitability across all active depots.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate proprietary systems (Weighbridges, Telematics, CRM) and normalize it in Snowflake or AWS.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Carbon Accounting Engines</h3>
                                <p>Algorithms that translate raw fuel usage and tonnage data into standardized ESG reporting frameworks.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Math</small><small>Reporting</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Regulatory Reports</h3>
                                <p>Dynamic engines to instantly generate branded PDF or data-lake exports required by the EPA or local government councils.</p>
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
                            <p className="eyebrow">Featured Environmental Platform</p>
                            <h2>Transforming waste management.</h2>
                        </div>
                        <p>See how we helped a major waste management operator digitize their commercial bookings, outfit drivers with offline-first routing apps, and aggregate weighbridge data into a unified executive dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Environmental Tech</span>
                                <span>Field Mobility & Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/waste-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>End-to-end operational visibility.</h2>
                                <p>We developed a custom ecosystem that connects customer self-service portals directly to the routing software in the garbage trucks, reducing missed collections by 80% and providing instant EPA compliance reporting.</p>
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
                        <h2 id="faq-title">Common questions about waste & environmental tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate web bookings directly into our routing software?</summary>
                            <p>Yes. We regularly build API middleware that takes a booking from the public website, processes the payment, and injects the job directly into specialized routing platforms like Routeware, AMCS, or Fleetmatics.</p>
                        </details>
                        <details>
                            <summary>How do drivers use the app if they are in remote areas?</summary>
                            <p>We build driver applications with an 'Offline-First' architecture (using PWA or React Native). Drivers can view their route, tick off completed jobs, and upload photos of contaminated bins entirely offline. The app syncs the data back to HQ the moment a cellular connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle EPA and government compliance reporting?</summary>
                            <p>We build automated data pipelines that pull tonnage from weighbridges, asset data from the CRM, and fleet telematics into a centralized cloud database. From there, we generate dynamic dashboards and automated PDF reports that perfectly match regulatory requirements.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other environmental capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-coverage-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Connect communities with environmental services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-and-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless account management for residents.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/bookings-and-collection-workflows/"><div><small>Operations</small><h3>Booking Workflows</h3><p>Digitize hard-rubbish and skip bin bookings.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-route-and-asset-workflows/"><div><small>Field Crews</small><h3>Route Workflows</h3><p>Optimize collection routes and asset tracking.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your waste and <br />environmental operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless customer booking portals to offline routing apps for your drivers, we build software that drives operational efficiency.</p>
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
