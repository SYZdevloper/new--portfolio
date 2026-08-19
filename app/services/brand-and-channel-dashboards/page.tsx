import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/brand-and-channel-dashboards/" },
  title: "Brand & Channel Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your D2C website, wholesale portals, and retail partners into executive dashboards tracking channel profitability, campaign ROI, and inventory movement.",
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
                        <div className="hero-status">Brand Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across your entire sales ecosystem.</h1>
                        <p className="hero-lead">We aggregate data from your D2C website, wholesale portals, and retail partners into executive dashboards tracking channel profitability, campaign ROI, and inventory movement.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining direct-to-consumer sales data with B2B wholesale orders</li>
                            <li>Real-time tracking of marketing campaign ROI across both digital and physical retail channels</li>
                            <li>Predictive analytics for demand forecasting and global inventory allocation</li>
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
                            <strong>Consolidate your Shopify, ERP, and marketing data into one executive view.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Channel Profitability</small>
                            <strong>Instantly compare the margin of a D2C sale versus a wholesale retail order.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Campaign Visibility</small>
                            <strong>Track how a digital brand campaign impacts physical retail sell-through.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Board Packs</small>
                            <strong>Turn disparate multi-channel data into polished executive reports instantly.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When brand data is siloed</p>
                        <p>You can't optimize a global brand looking at separate D2C and B2B spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented data hides true channel performance.</h2>
                        <p>Brand executives are forced to make high-stakes allocation decisions with fragmented data. If your D2C data is in Shopify, your wholesale data is in SAP, and your marketing spend is across five platforms, you cannot accurately determine which channel is actually driving profitability.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Blind Inventory Allocation</h3>
                                <p>You allocate too much stock to wholesale, causing costly stockouts on your higher-margin D2C website.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Unclear Campaign ROI</h3>
                                <p>A massive influencer campaign drives sales, but you can't tell if the uplift happened online or in physical retail stores.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend weeks manually extracting and merging data from different systems just to build the quarterly sales report.</p>
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
                                <h2>Command centers for brand leaders.</h2>
                            </div>
                            <p>We engineer data aggregation platforms that give leadership the real-time insights needed to optimize global channels.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>High-level visual dashboards tracking KPIs like Blended CAC, Channel Margin, and global inventory turnover.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines that extract data from disparate systems (Shopify, ERP, Ad Networks) and normalize it in a cloud data warehouse.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Cloud</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Sell-Through Analytics</h3>
                                <p>Visual tools to track how quickly retail partners are moving your product off their shelves (via EDI integrations).</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>React</small><small>B2B</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for brand managers and executives.</p>
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
                            <p className="eyebrow">Featured Consumer Brand Platform</p>
                            <h2>Unifying wholesale and D2C.</h2>
                        </div>
                        <p>See how we helped a global consumer goods brand launch a headless product experience that serves millions of D2C shoppers while simultaneously powering a secure portal for their massive retail distribution network.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Brand Tech</span>
                                <span>B2B & D2C Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/brand-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A single source of product truth.</h2>
                                <p>We developed a custom architecture connected to their PIM that ensures every product launch features perfectly synced marketing copy, high-res assets, and pricing, whether the user is a retail buyer or an end consumer.</p>
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
                        <h2 id="faq-title">Common questions about consumer brand tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive traffic spikes during product launches?</summary>
                            <p>We build Campaign & Launch experiences using static site generation (SSG) via Next.js and host them on global edge networks (like Vercel). This ensures the site remains lightning-fast even when millions of users hit it simultaneously during a drop.</p>
                        </details>
                        <details>
                            <summary>Can you integrate a B2B wholesale portal with our existing ERP?</summary>
                            <p>Yes. We build custom API middleware that allows your Retailer Portals to talk directly to legacy ERPs (like SAP or NetSuite), ensuring that wholesale customers see their specific contract pricing and live inventory without manual data entry.</p>
                        </details>
                        <details>
                            <summary>What is a PIM and why do we need one?</summary>
                            <p>A Product Information Management (PIM) system acts as the central brain for your product data. We integrate your website with your PIM so that when marketing updates a product description or pack shot, it automatically updates on your D2C site, your B2B portal, and your retailer feeds.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other consumer brand capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-and-product-websites/"><div><small>Brand Experience</small><h3>Brand Websites</h3><p>Immersive digital brand homes.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/campaign-and-launch-experiences/"><div><small>Activations</small><h3>Campaigns & Launches</h3><p>High-impact product drops.</p></div><b>Explore campaigns ↗</b></a>
                        <a className="related-card" href="/services/retailer-and-distributor-portals/"><div><small>B2B Commerce</small><h3>Retailer Portals</h3><p>Empower your wholesale channel.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/product-information-and-assets/"><div><small>Data</small><h3>Product Information</h3><p>A single source of truth.</p></div><b>Explore PIM ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your consumer brand <br />and wholesale operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-traffic product launches to complex B2B distributor portals and PIM integrations, we build software that drives growth across your entire channel ecosystem.</p>
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
