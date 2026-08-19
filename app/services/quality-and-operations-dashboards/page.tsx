import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/quality-and-operations-dashboards/" },
  title: "Quality & Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from LIMS (Laboratory Information Management Systems), ERPs, and plant sensors into executive dashboards tracking yield, quality control, and safety metrics.",
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
                        <div className="hero-status">Operations Dashboards</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across the chemical supply chain.</h1>
                        <p className="hero-lead">We aggregate data from LIMS (Laboratory Information Management Systems), ERPs, and plant sensors into executive dashboards tracking yield, quality control, and safety metrics.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining plant production data, lab quality results, and sales forecasts</li>
                            <li>Real-time tracking of First Pass Yield (FPY), off-spec batches, and overall equipment effectiveness (OEE)</li>
                            <li>Predictive analytics to identify supply chain bottlenecks or raw material shortages</li>
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
                            <strong>Consolidate your ERP, LIMS, and plant data into one executive view.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Quality Visibility</small>
                            <strong>Instantly see the rate of off-spec production across all regional plants.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Supply Chain Agility</small>
                            <strong>Move raw materials proactively based on live demand and transit times.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Board Packs</small>
                            <strong>Turn disparate operational data into polished executive reports instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives fly blind</p>
                        <p>You can't manage a global chemical operation looking at last month's spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide the reality of production.</h2>
                        <p>Chemical manufacturing leaders are forced to make high-stakes operational and safety decisions with fragmented data. If your production data is in SAP, your quality data is in a legacy LIMS, and your safety incidents are in a spreadsheet, you cannot react fast enough to process deviations or margin pressure.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Quality Issues</h3>
                                <p>A specific plant is consistently producing off-spec batches, but the trend isn't visible until the end-of-month QA report.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Margin Squeeze</h3>
                                <p>Raw material costs spike, but the impact on final product margins isn't calculated until the batches are already sold.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Reporting Burden</h3>
                                <p>Analysts spend weeks manually extracting and merging data from different plant systems just to build the quarterly yield report.</p>
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
                                <h2>Command centers for chemical leaders.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to protect margins and quality.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like First Pass Yield, safety incident rates, and production volumes.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate proprietary systems (LIMS, ERP, SCADA) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Process Analytics</h3>
                                <p>Visual tools to chart batch variations and compare performance across different reactor lines or facilities.</p>
                                <div className="deliverable-tags"><small>DataViz</small><small>Analytics</small><small>React</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for plant managers and executives.</p>
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
                            <p className="eyebrow">Featured Chemical Platform</p>
                            <h2>Digitizing bulk formulations.</h2>
                        </div>
                        <p>See how we helped a global specialty chemicals manufacturer build a headless product platform that automatically matches specific polymer formulations to regional SDS compliance requirements.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Chemical Tech</span>
                                <span>B2B Commerce & Compliance</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/chemical-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From laboratory to logistics.</h2>
                                <p>We developed a custom B2B portal that allows distributors to order bulk IBCs, track hazardous freight via IoT integrations, and instantly download batch-specific Certificates of Analysis (CoA) without calling customer service.</p>
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
                        <h2 id="faq-title">Common questions about chemical industry tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex regulatory and compliance data?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity) that link products to specific regional regulations (REACH, EPA). This ensures that a technical buyer in Europe automatically sees the correct SDS and compliance documents for their jurisdiction.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP?</summary>
                            <p>Yes. Chemical supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern distributor portal and your ERP, translating modern web requests into the specific formats your backend system requires for order entry and inventory.</p>
                        </details>
                        <details>
                            <summary>How do you handle hazardous freight calculations?</summary>
                            <p>We build custom logic engines into the checkout process. The platform automatically checks UN numbers, packing groups, and dangerous goods classes, calculating specific hazmat freight surcharges and preventing incompatible chemicals from being placed on the same pallet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other chemical capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/technical-product-catalogues/"><div><small>Discovery</small><h3>Technical Catalogues</h3><p>Structure complex chemical formulations.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/safety-and-technical-resources/"><div><small>Compliance</small><h3>Safety Resources</h3><p>Digital hubs for SDS and technical data.</p></div><b>Explore resources ↗</b></a>
                        <a className="related-card" href="/services/samples-and-technical-sales/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the technical sales cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Distributor Portals</h3><p>Digitize bulk chemical ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your chemical <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues to B2B hazardous ordering portals, we build software that drives efficiency across the chemical supply chain.</p>
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
