import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/quality-and-supply-dashboards/" },
  title: "Quality & Supply Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from factory ERPs, quality control systems, and logistics partners into executive dashboards tracking yield, defect rates, and delivery times.",
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
                        <h1 id="service-title">Visibility across manufacturing and dispatch.</h1>
                        <p className="hero-lead">We aggregate data from factory ERPs, quality control systems, and logistics partners into executive dashboards tracking yield, defect rates, and delivery times.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining plant production data, QA lab results, and sales forecasts</li>
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
                            <strong>Consolidate your ERP, QA, and plant data into one executive view.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Quality Visibility</small>
                            <strong>Instantly see the rate of manufacturing defects across all regional plants.</strong>
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
                        <p>You can't manage a national manufacturing operation looking at last month's spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Data silos hide the reality of production.</h2>
                        <p>Manufacturing leaders are forced to make high-stakes operational and safety decisions with fragmented data. If your production data is in an ancient AS400 system, your quality data is in a spreadsheet, and your logistics data is on a partner's portal, you cannot react fast enough to margin pressure.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Hidden Quality Issues</h3>
                                <p>A specific plant is consistently producing off-spec products, but the trend isn't visible until the end-of-month QA report.</p>
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
                                <h2>Command centers for manufacturing leaders.</h2>
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
                                <p>Pipelines that extract data from disparate proprietary systems (ERP, SCADA) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Process Analytics</h3>
                                <p>Visual tools to chart batch variations and compare performance across different production lines or facilities.</p>
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
                            <p className="eyebrow">Featured Materials Platform</p>
                            <h2>Digitizing the specification lifecycle.</h2>
                        </div>
                        <p>See how we helped a national building materials manufacturer build a headless product platform that connects digital CAD libraries directly to architect sample requests and distributor inventory.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Manufacturing Tech</span>
                                <span>B2B Commerce & Specification</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/materials-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From architectural concept to site delivery.</h2>
                                <p>We developed a custom portal that allows architects to download BIM files and request physical samples, while seamlessly routing the resulting commercial quotes to the nearest authorized dealer based on real-time ERP inventory.</p>
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
                        <h2 id="faq-title">Common questions about building materials tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex product variations (colours, sizes, finishes)?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity or integrated PIMs) that manage complex parent-child SKU relationships. This allows a user to view a 'product line' and then filter dynamically by specific finish or dimension without navigating through hundreds of separate pages.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy manufacturing ERPs?</summary>
                            <p>Yes. We build secure API middleware layers that sit between your modern dealer portal and legacy ERPs (like SAP, JD Edwards, or Epicor). This translates modern web cart requests into the specific formats your backend system requires for order entry and inventory deduction.</p>
                        </details>
                        <details>
                            <summary>Do you host CAD and BIM files directly on the platform?</summary>
                            <p>Yes. We build dedicated architectural resource libraries where specifiers can easily filter and download Revit, SketchUp, and AutoCAD files. We can also track these downloads to generate high-intent leads for your commercial sales team.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other manufacturing capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Material Catalogues</h3><p>Showcase technical specifications.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Technical Sales</small><h3>Design Tools</h3><p>Help architects specify products.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the specification cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Commerce</small><h3>Dealer Portals</h3><p>Digitize bulk material ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your materials <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues for architects to B2B bulk ordering portals for dealers, we build software that drives efficiency across the construction supply chain.</p>
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
