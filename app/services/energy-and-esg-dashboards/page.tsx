import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/energy-and-esg-dashboards/" },
  title: "Energy & ESG Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate SCADA data, smart meter feeds, and financial systems into executive dashboards, tracking live megawatt generation, grid constraints, and ESG reporting metrics.",
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
                        <div className="hero-status">Operational Dashboards</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Real-time visibility into generation and emissions.</h1>
                        <p className="hero-lead">We aggregate SCADA data, smart meter feeds, and financial systems into executive dashboards, tracking live megawatt generation, grid constraints, and ESG reporting metrics.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining live telemetry (IoT/SCADA) with financial market data</li>
                            <li>Automated carbon accounting and Scope 1/2/3 emission tracking</li>
                            <li>Predictive analytics for curtailment risks and preventative maintenance</li>
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
                            <strong>Stop hunting across five different vendor platforms for data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Telemetry</small>
                            <strong>Monitor live generation (MW), battery state-of-charge, and grid pricing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · ESG Automation</small>
                            <strong>Turn raw energy data into auditable sustainability reports instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Predictive Alerts</small>
                            <strong>Get notified of inverter faults before they cause massive downtime.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't optimize a gigawatt portfolio using yesterday's spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos are hiding operational inefficiencies.</h2>
                        <p>Energy operators are drowning in data but starving for insight. With turbine data in one system, battery telemetry in another, and wholesale grid pricing in a third, executives cannot make rapid, profitable decisions during grid volatility.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Siloed Intelligence</h3>
                                <p>An inverter goes offline at a solar farm, but the operations center doesn't notice until the daily report is generated.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual ESG Reporting</h3>
                                <p>Sustainability managers spend weeks manually calculating Scope 2 emissions for regulatory compliance.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Missed Opportunities</h3>
                                <p>Without live visibility into battery charge states vs. grid pricing, you are leaving arbitrage money on the table.</p>
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
                                <h2>Command centers for the energy transition.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give executives the exact metrics they need to optimize yield.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Telemetry Aggregation</h3>
                                <p>Pipelines that extract high-frequency data from SCADA systems and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>AWS/GCP</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Real-Time Dashboards</h3>
                                <p>React-based operational interfaces with sub-second latency for monitoring grid frequency and asset status.</p>
                                <div className="deliverable-tags"><small>React</small><small>WebSockets</small><small>BI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Carbon Accounting Engines</h3>
                                <p>Algorithms that translate raw energy consumption/generation data into standardized ESG reporting frameworks.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Math</small><small>Reporting</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Alerts</h3>
                                <p>Systems that trigger SMS or email warnings when assets underperform against expected weather-adjusted models.</p>
                                <div className="deliverable-tags"><small>Alerts</small><small>Twilio</small><small>DevOps</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Energy Platform</p>
                            <h2>Powering the transition.</h2>
                        </div>
                        <p>See how we helped a national renewable energy developer digitize their site assessment workflows and build investor-facing ESG dashboards, accelerating capital deployment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Energy Tech</span>
                                <span>SCADA Integration & Dashboards</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/energy-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Data-driven infrastructure.</h2>
                                <p>We developed a custom web application that ingests live generation data from solar farms, calculates real-time ESG metrics, and presents them in a secure portal for institutional investors.</p>
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
                        <h2 id="faq-title">Common questions about energy & utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with our existing SCADA or BMS systems?</summary>
                            <p>Yes. We regularly build middleware (using Node.js or Python) that securely extracts telemetry data from legacy SCADA systems, normalizes it, and pipes it into modern cloud data warehouses like AWS Redshift or Snowflake for visualization.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work for technicians in remote wind farms?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps (PWAs) and React Native mobile apps. Technicians can log maintenance data, capture photos, and run diagnostic checklists offline; the app will automatically sync payloads once a connection is re-established.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for investor portals?</summary>
                            <p>We implement enterprise-grade security protocols, including SOC2 compliant AWS architecture, strict Role-Based Access Control (RBAC) via Auth0 or Okta, and end-to-end encryption to ensure sensitive financial and PPA data is totally secure.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other energy capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-and-capability-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Build public trust and showcase energy capabilities.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-proposal-workflows/"><div><small>Sales</small><h3>Proposal Workflows</h3><p>Digitize feasibility studies and solar proposals.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/customer-and-investor-portals/"><div><small>Stakeholders</small><h3>Investor Portals</h3><p>Secure environments for off-takers and investors.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-and-maintenance-workflows/"><div><small>Operations</small><h3>Maintenance Apps</h3><p>Keep critical infrastructure online and compliant.</p></div><b>Explore apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your energy <br />infrastructure and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automating field maintenance to providing investors with live generation data, we build software that powers the transition.</p>
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
