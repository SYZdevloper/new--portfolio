import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/animal-agriculture-dashboards/" },
  title: "Animal Agriculture Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from IoT sensors, abattoir feedback, and herd management apps into executive dashboards, tracking mortality rates, feed conversion, and genetic progress.",
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
                        <div className="hero-status">Livestock Dashboards</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across the livestock supply chain.</h1>
                        <p className="hero-lead">We aggregate data from IoT sensors, abattoir feedback, and herd management apps into executive dashboards, tracking mortality rates, feed conversion, and genetic progress.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining processing data, feed costs, and veterinary records</li>
                            <li>Real-time tracking of mortalities, morbidity, and treatment efficacy across multiple sites</li>
                            <li>Predictive analytics to identify disease outbreaks or supply chain bottlenecks</li>
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
                            <strong>Consolidate your feedmill, vet, and processing data into one executive view.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Margin Visibility</small>
                            <strong>Understand the true cost of production per kilogram of meat/milk.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Supply Chain Agility</small>
                            <strong>Move stock proactively based on live weather models and feed availability.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Board Packs</small>
                            <strong>Turn disparate data sets into polished executive reports instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't manage a corporate agricultural portfolio looking at last month's spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide the reality of production.</h2>
                        <p>Corporate agriculture leaders are forced to make high-stakes decisions in volatile markets. If your feed data is in one system, your vet data is in a legacy app, and your processor feedback is in a PDF, you cannot react fast enough to disease outbreaks or price changes.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Outbreaks</h3>
                                <p>A specific feedlot is experiencing high morbidity, but leadership doesn't notice until the end-of-month mortality report.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Margin Squeeze</h3>
                                <p>Feed costs spike, but the impact on the final margin isn't calculated until the animals are already processed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Reporting Burden</h3>
                                <p>Analysts spend weeks manually extracting and matching EID data in Excel just to build the quarterly performance report.</p>
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
                                <h2>Command centers for corporate agriculture.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and animal welfare.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like feed conversion ratio (FCR), mortality rates, and average daily gain.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate proprietary systems (Feedmills, Abattoirs, Vet Apps) and normalize it in the cloud.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Geospatial Analytics</h3>
                                <p>Map-based interfaces that overlay live property data with weather patterns to predict feed shortages or flood risks.</p>
                                <div className="deliverable-tags"><small>GIS</small><small>Mapping</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for site managers and executives.</p>
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
                            <p className="eyebrow">Featured Livestock Platform</p>
                            <h2>Digitizing the drafting yard.</h2>
                        </div>
                        <p>See how we helped a national veterinary network build an offline-first mobile app that allows vets to scan RFID tags, log pregnancy ultrasound results, and issue digital prescriptions seamlessly.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Livestock Tech</span>
                                <span>IoT Integration & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/livestock-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From paddock to portal.</h2>
                                <p>We developed a custom ecosystem that connects EID wand scanners via Bluetooth to a ruggedized iPad app, eliminating paper records and syncing directly with the producer's management dashboard.</p>
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
                        <h2 id="faq-title">Common questions about animal agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate mobile apps with Bluetooth EID (Electronic ID) scanners?</summary>
                            <p>Yes. We regularly build React Native applications that connect via Bluetooth Low Energy (BLE) to industry-standard hardware like Gallagher or Tru-Test EID wands and scale heads, automatically pulling tag numbers into the app.</p>
                        </details>
                        <details>
                            <summary>How do field apps work when vets are out of cellular range?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture using local databases. A vet can scan a thousand cows, log their condition scores, and issue treatments offline. The app securely caches the data and syncs automatically when a connection is restored.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex traceability and compliance reporting?</summary>
                            <p>We engineer secure data pipelines that track individual animal histories (treatments, movements, feed). This data can be automatically formatted and transmitted to national traceability databases (like NLIS in Australia) or used to generate QA certificates for processors.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other livestock capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/animal-product-and-service-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect livestock solutions with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/producer-and-adviser-portals/"><div><small>Collaboration</small><h3>Producer Portals</h3><p>Digital hubs for herd health and management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/herd-production-and-quality-records/"><div><small>Data</small><h3>Production Records</h3><p>Digitize livestock traceability and performance.</p></div><b>Explore records ↗</b></a>
                        <a className="related-card" href="/services/laboratory-and-field-services/"><div><small>Vets & Techs</small><h3>Field Services</h3><p>Offline data capture for vets and technicians.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your livestock <br />and animal health operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline EID scanning apps for vets in the drafting yard to executive dashboards tracking feed conversion, we build software that drives animal agriculture.</p>
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
