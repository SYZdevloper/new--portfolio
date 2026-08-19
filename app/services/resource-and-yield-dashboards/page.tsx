import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/resource-and-yield-dashboards/" },
  title: "Resource & Yield Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from field surveys, harvest logistics, and financial systems into executive dashboards, tracking operational efficiency, yield versus forecast, and contractor performance.",
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
                        <div className="hero-status">Forestry Dashboards</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across the forestry lifecycle.</h1>
                        <p className="hero-lead">We aggregate data from field surveys, harvest logistics, and financial systems into executive dashboards, tracking operational efficiency, yield versus forecast, and contractor performance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining inventory data, daily harvest production, and mill deliveries</li>
                            <li>Real-time tracking of actual yield against pre-harvest cruise estimates</li>
                            <li>Predictive analytics to forecast supply chain bottlenecks and optimize logistics</li>
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
                            <strong>Consolidate your GIS, dispatch, and financial data into one executive view.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Yield Visibility</small>
                            <strong>Instantly see if a compartment is over or under-performing against estimates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Supply Chain Agility</small>
                            <strong>Redirect haulage fleets proactively based on mill queues and weather events.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Board Packs</small>
                            <strong>Turn disparate operational data into polished investor reports instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't manage a vast forestry estate looking at last month's spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide the reality of production.</h2>
                        <p>Forestry executives are forced to make high-stakes operational decisions with fragmented data. If your inventory is in a GIS platform, your harvest data is in a logistics app, and your financials are in an ERP, you cannot react fast enough to weather events or market shifts.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Bottlenecks</h3>
                                <p>A specific harvest crew is consistently underperforming, but the trend isn't visible until the monthly production report.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Poor Logistics Planning</h3>
                                <p>Trucks spend hours waiting in queues at the mill because dispatch data isn't synchronized with mill capacity.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Reporting Burden</h3>
                                <p>Analysts spend weeks manually extracting and merging data from field apps and weighbridges just to build the quarterly yield report.</p>
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
                                <h2>Command centers for forestry leaders.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to optimize the resource.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like daily tons harvested, freight costs per ton, and safety incident rates.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (GIS, Logistics Apps, ERP) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Geospatial Analytics</h3>
                                <p>Map-based interfaces that overlay live production data with weather patterns to predict operational disruptions.</p>
                                <div className="deliverable-tags"><small>GIS</small><small>Mapping</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for investors, boards, and forest managers.</p>
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
                            <p className="eyebrow">Featured Forestry Platform</p>
                            <h2>From seedling to sawmill.</h2>
                        </div>
                        <p>See how we helped a large-scale forestry operation digitize their entire supply chain, connecting offline harvest apps in remote forests directly to haulage contractors and the final mill destination.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Forestry Tech</span>
                                <span>GIS & Logistics Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/forestry-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Visibility across the timber lifecycle.</h2>
                                <p>We developed a custom geospatial platform that tracks compartment inventories, generates digital harvest dockets offline, and automatically reconciles weighbridge data at the mill to ensure contractors are paid accurately.</p>
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
                        <h2 id="faq-title">Common questions about forestry & agricultural services tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do offline mobile apps work in remote forest compartments?</summary>
                            <p>We build 'Offline-First' progressive web and mobile applications using local device databases. Foresters and contractors can create harvest dockets, log safety incidents, and map areas entirely offline. The data automatically syncs via cellular or satellite connections when they return to coverage.</p>
                        </details>
                        <details>
                            <summary>Can you integrate GIS (Geographic Information Systems) into portals?</summary>
                            <p>Yes. We regularly integrate Mapbox, ArcGIS, and custom geospatial layers into portals, allowing managers to visually track harvest boundaries, environmental buffers, and haulage routes directly within their operational dashboard.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex contractor payments and reconciliations?</summary>
                            <p>We build automated middleware that links digital harvest dockets generated in the field with weighbridge data from the mill. This logic engine instantly calculates contractor pay based on complex matrix rates (distance, grade, species) and pushes approved invoices to your ERP.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other forestry capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/forestry-and-input-platforms/"><div><small>Marketing</small><h3>Input Platforms</h3><p>Showcase products and technical specifications.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/contractor-and-operator-portals/"><div><small>Operations</small><h3>Contractor Portals</h3><p>Manage vendors, compliance, and payments.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/harvest-and-logistics-workflows/"><div><small>Supply Chain</small><h3>Harvest Logistics</h3><p>Digitize the journey from forest to mill.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-and-survey-workflows/"><div><small>Mobility</small><h3>Field Workflows</h3><p>Capture geospatial data offline.</p></div><b>Explore mobility ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your forestry <br />and agricultural operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline harvest apps in remote forests to complex weighbridge integrations and contractor portals, we build software that drives resource efficiency.</p>
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
