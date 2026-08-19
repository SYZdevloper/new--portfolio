import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/sales-and-project-dashboards/" },
  title: "Sales & Project Dashboards | Hyperlink Tech Solutions",
  description: "We build executive dashboards for property developers, aggregating CRM data, marketing spend, and inventory velocity into a single source of truth.",
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
                    <strong>Developer Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Real Estate Dashboards</div>
                        <p className="eyebrow">Developer Operations</p>
                        <h1 id="service-title">Total visibility over project sales and revenue.</h1>
                        <p className="hero-lead">We build executive dashboards for property developers, aggregating CRM data, marketing spend, and inventory velocity into a single source of truth.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Real-time aggregation of sales velocity across multiple projects</li>
                            <li>Visual heatmaps of building inventory and reservation status</li>
                            <li>Marketing ROI tracking from lead source to final contract</li>
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
                            <small>01 · Single Pane of Glass</small>
                            <strong>Unify data from your CRM, ERP, and marketing platforms.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Sales Velocity</small>
                            <strong>Track exactly how fast units are moving compared to projections.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Inventory Heatmaps</small>
                            <strong>Visually identify which floorplans or elevations are underperforming.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ROI Attribution</small>
                            <strong>Know exactly which marketing channel produced the most revenue.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When executives are blind</p>
                        <p>Spreadsheets cannot manage a billion-dollar pipeline.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Real estate development runs on cash flow and velocity.</h2>
                        <p>When a developer launches a major project, executives need instant visibility into sales performance. Relying on manually compiled weekly reports means critical pricing and marketing decisions are made too late.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Silos</h3>
                                <p>Marketing knows the cost-per-lead, Sales knows the conversion rate, but nobody knows the actual ROI.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Outdated Reports</h3>
                                <p>By the time the Friday sales report is generated, the data is already three days old.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Pricing Misses</h3>
                                <p>Without visual heatmaps, developers fail to notice that corner units are underpriced and selling too fast.</p>
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
                                <h2>Command centers for developers.</h2>
                            </div>
                            <p>We engineer BI dashboards that aggregate complex real estate data into actionable, real-time insights for executives.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Dashboards</h3>
                                <p>High-level visualizations of total revenue, units sold, and active pipeline across the entire portfolio.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Visuals</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Inventory Heatmaps</h3>
                                <p>Interactive building stackers color-coded by status (Available, Reserved, Sold) to visualize sales velocity.</p>
                                <div className="deliverable-tags"><small>DataViz</small><small>SVG</small><small>Live Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Marketing Attribution</h3>
                                <p>Middleware that connects ad spend data with CRM closed-won data to calculate true cost-per-acquisition.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Data pipelines</small><small>ROI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engine to instantly generate PDF or email summaries for board meetings and investors.</p>
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
                            <p className="eyebrow">Featured Real Estate Build</p>
                            <h2>Selling off-plan with digital precision.</h2>
                        </div>
                        <p>See how we helped a master developer accelerate pre-sales by replacing static PDFs with a fully interactive, CRM-connected inventory platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Property Tech Platform</span>
                                <span>3D Visualization + CRM Sync</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/realestate-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Interactive inventory, instant reservations.</h2>
                                <p>We developed a custom portal that allows buyers and brokers to explore units in 3D, view live pricing, and place deposits directly through a seamless Stripe integration.</p>
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
                        <h2 id="faq-title">Common questions about our PropTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with Salesforce or Hubspot?</summary>
                            <p>Yes. We build robust API integrations with leading real estate CRMs (Salesforce, HubSpot, Propertybase) to ensure leads, availability statuses, and reservations sync in real-time between the website and the sales team.</p>
                        </details>
                        <details>
                            <summary>How do you handle 3D models and interactive masterplans?</summary>
                            <p>We utilize WebGL, Three.js, and specialized tiling methods to render high-fidelity architectural models and interactive maps directly in the browser, without requiring the user to download heavy plugins.</p>
                        </details>
                        <details>
                            <summary>Can buyers place deposits online?</summary>
                            <p>Absolutely. We integrate secure payment gateways (like Stripe or regional equivalents) to allow buyers to place holds or pay EOI (Expression of Interest) fees directly through the unit journey flow.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other real estate capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-websites-and-discovery/"><div><small>Marketing</small><h3>Project Websites</h3><p>Immersive digital experiences for new developments.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/inventory-and-unit-journeys/"><div><small>Sales</small><h3>Unit Journeys</h3><p>Help buyers find their perfect space, instantly.</p></div><b>Explore inventory ↗</b></a>
                        <a className="related-card" href="/services/broker-and-channel-portals/"><div><small>Partners</small><h3>Broker Portals</h3><p>Empower your broker network to sell faster.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/sales-and-project-dashboards/"><div><small>Operations</small><h3>Project Dashboards</h3><p>Total visibility over project sales and revenue.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your property <br />sales and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that wow buyers, empower brokers, and provide total operational oversight? Let's discuss your project.</p>
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
