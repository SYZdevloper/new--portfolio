import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/utility-operations-dashboards/" },
  title: "Utility Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from smart meters, network sensors, and field crews into unified executive dashboards, providing live visibility into grid health and service levels.",
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
                    <strong>Network Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Utility Dashboards</div>
                        <p className="eyebrow">Network Operations</p>
                        <h1 id="service-title">Operational clarity across the grid.</h1>
                        <p className="hero-lead">We aggregate data from smart meters, network sensors, and field crews into unified executive dashboards, providing live visibility into grid health and service levels.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining SCADA telemetry, customer complaints, and crew locations</li>
                            <li>Predictive analytics to identify likely asset failures before they cause an outage</li>
                            <li>Real-time tracking of SLA compliance and regulatory reporting metrics</li>
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
                            <small>01 · Unified View</small>
                            <strong>See grid health, financials, and customer sentiment on one screen.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Response</small>
                            <strong>Identify and dispatch crews to network anomalies instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Regulatory Compliance</small>
                            <strong>Automate the reporting required by government regulators.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Predictive Maintenance</small>
                            <strong>Use machine learning to flag transformers or pumps at risk of failure.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations are siloed</p>
                        <p>You can't optimize a network if the data is locked in five different systems.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data fragmentation limits your operational response.</h2>
                        <p>Utility operators generate massive amounts of data. But if customer complaints live in Salesforce, grid telemetry lives in SCADA, and crew locations live in a separate fleet app, the control room cannot make holistic, rapid decisions during a crisis.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Siloed Intelligence</h3>
                                <p>The control room sees a pressure drop in the water network, but doesn't know there are three customer leak reports in the same area.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Reporting</h3>
                                <p>Analysts spend days pulling data from different systems to build regulatory compliance reports.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reactive Maintenance</h3>
                                <p>Assets are run until failure because there is no consolidated view of maintenance history and live telemetry.</p>
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
                                <h2>Command centers for modern utilities.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give operational leaders total visibility.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like SAIDI/SAIFI (reliability indices), current active outages, and crew deployment.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate proprietary systems (CRM, GIS, SCADA) and normalize it in Snowflake or AWS.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Spatial Analytics</h3>
                                <p>Map-based interfaces that overlay live telemetry data, weather patterns, and active work orders for the control room.</p>
                                <div className="deliverable-tags"><small>GIS</small><small>Mapping</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Regulatory Reports</h3>
                                <p>Dynamic engines to instantly generate branded PDF or data-lake exports required by government utility regulators.</p>
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
                            <p className="eyebrow">Featured Utility Platform</p>
                            <h2>Transforming citizen services.</h2>
                        </div>
                        <p>See how we helped a major regional water corporation completely redesign their digital ecosystem, allowing customers to easily track consumption, report faults, and pay bills online—drastically reducing call center load.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Gov & Utility Tech</span>
                                <span>Portals & CRM Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/utility-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Self-service at scale.</h2>
                                <p>We developed a WCAG-compliant web portal integrated directly with SAP and Salesforce, enabling 500,000+ residents to securely view their smart meter data and self-manage their accounts.</p>
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
                        <h2 id="faq-title">Common questions about utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you build to WCAG (Web Content Accessibility Guidelines) standards?</summary>
                            <p>Yes. We ensure all utility and government platforms are built to WCAG 2.1 AA (or AAA if required) standards. Public services must be accessible to everyone, meaning proper contrast ratios, screen-reader compatibility, and keyboard navigability are baked into our design systems from day one.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive traffic spikes during an outage?</summary>
                            <p>We architect our frontend applications using Next.js on edge networks (like Vercel or AWS CloudFront) with heavy static caching. This means if a storm knocks out power and 100,000 residents visit your outage map simultaneously, the server won't crash under the load.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web portals with legacy billing systems?</summary>
                            <p>Absolutely. Utilities often run on older, robust billing engines (like SAP IS-U or Oracle). We build secure API middleware layers that sit between your legacy system and the modern web frontend, ensuring fast page loads for the user without exposing your core database to the public internet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other utility capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/service-and-information-websites/"><div><small>Public Info</small><h3>Service Websites</h3><p>Clear digital pathways for public services.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/customer-account-portals/"><div><small>Self-Service</small><h3>Account Portals</h3><p>Frictionless self-service for ratepayers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/outage-and-incident-communication/"><div><small>Crisis Comms</small><h3>Outage Communication</h3><p>Keep communities informed during critical events.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/utility-operations-dashboards/"><div><small>Network</small><h3>Operations Dashboards</h3><p>Operational clarity across the grid.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your utility <br />and public services. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From reducing call center load via self-service portals to keeping the public informed during outages, we build software that serves the community.</p>
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
