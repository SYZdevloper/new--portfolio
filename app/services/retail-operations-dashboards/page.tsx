import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/retail-operations-dashboards/" },
  title: "Retail Operations Dashboards | Hyperlink Tech Solutions",
  description: "We aggregate data from your eCommerce platform, in-store POS, and warehouse systems into executive dashboards tracking total revenue, inventory turnover, and staff efficiency.",
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
                        <div className="hero-status">Retail Analytics</div>
                        <p className="eyebrow">Executive Operations</p>
                        <h1 id="service-title">Visibility across every channel.</h1>
                        <p className="hero-lead">We aggregate data from your eCommerce platform, in-store POS, and warehouse systems into executive dashboards tracking total revenue, inventory turnover, and staff efficiency.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified BI dashboards combining online conversion rates with physical store foot traffic</li>
                            <li>Real-time tracking of BOPIS fulfillment times and ship-from-store efficiency</li>
                            <li>Predictive analytics for omnichannel demand forecasting and stock rebalancing</li>
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
                            <small>01 · Actionable Insights</small>
                            <strong>Consolidate fragmented omnichannel data into clear, actionable metrics.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Inventory Optimization</small>
                            <strong>Forecast demand accurately to prevent stockouts in high-traffic retail locations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Staff Efficiency</small>
                            <strong>Track how quickly store teams are picking and packing online orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · True Omnichannel ROI</small>
                            <strong>Understand how digital marketing spend directly drives physical store visits.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When retail data is siloed</p>
                        <p>You can't optimize an omnichannel business looking at separate reports.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented data leads to missed opportunities.</h2>
                        <p>Retail executives often struggle with data spread across Shopify, their physical POS system, and their warehouse ERP. This fragmentation makes it impossible to quickly understand which channels are truly driving profitability and where inventory is getting stuck.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Blind Merchandising</h3>
                                <p>Online and in-store inventory allocations are based on guesswork rather than unified, real-time conversion data.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Fulfillment Bottlenecks</h3>
                                <p>Management doesn't realize a specific retail store is taking 4 hours to pick BOPIS orders, ruining the customer experience.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Reporting Fatigue</h3>
                                <p>Analysts spend hours manually compiling reports in Excel to merge online sales with physical register data.</p>
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
                                <h2>Intelligent retail command centers.</h2>
                            </div>
                            <p>We build data platforms and custom tooling that give your leadership team the power to operate a unified commerce network.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Executive Scorecards</h3>
                                <p>Custom BI interfaces tracking high-level KPIs like Omnichannel LTV, margin performance, and store-by-store fulfillment times.</p>
                                <div className="deliverable-tags"><small>BI</small><small>Dashboards</small><small>Metrics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Data Warehousing</h3>
                                <p>Pipelines extracting data from digital commerce platforms, physical POS systems, and ERPs into a central cloud repository.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Data</small><small>Cloud</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Fulfillment Analytics</h3>
                                <p>Visual tools to chart BOPIS SLAs (Service Level Agreements) and compare ship-from-store efficiency across different retail locations.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>React</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Reporting</h3>
                                <p>Dynamic engines to instantly generate branded PDF or email summaries for regional managers and retail executives.</p>
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
                            <p className="eyebrow">Featured Omnichannel Platform</p>
                            <h2>Unifying the retail experience.</h2>
                        </div>
                        <p>See how we helped a national fashion retailer bridge the gap between their Shopify Plus storefront and their brick-and-mortar POS system, enabling true click-and-collect functionality and unified loyalty points.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Omnichannel Tech</span>
                                <span>POS & Web Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/omnichannel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From online cart to in-store pickup.</h2>
                                <p>We developed a custom integration layer that syncs live physical store inventory to the web frontend, allowing customers to accurately check local stock, buy online, and pick up in-store within 2 hours.</p>
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
                        <h2 id="faq-title">Common questions about omnichannel retail tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle 'Buy Online, Pick Up In Store' (BOPIS) inventory sync?</summary>
                            <p>We build secure API middleware that connects your eCommerce platform to your physical Point of Sale (POS) system. This ensures that when a customer looks at a product online, they see exactly how many units are sitting on the shelf at their nearest physical store.</p>
                        </details>
                        <details>
                            <summary>Can loyalty points be earned and spent across both channels?</summary>
                            <p>Yes. We integrate unified loyalty management platforms that act as a single source of truth. If a customer buys a shirt in-store, the points instantly reflect in their digital wallet, and they can use those points during their next online checkout.</p>
                        </details>
                        <details>
                            <summary>Can you build custom store appointment booking systems?</summary>
                            <p>Absolutely. We build headless booking engines that allow customers to reserve specific services (like personal styling or equipment fitting) at specific physical locations, syncing directly with store staff calendars.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other retail capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/omnichannel-storefronts/"><div><small>Commerce</small><h3>Storefronts</h3><p>Connect the digital and physical aisle.</p></div><b>Explore storefronts ↗</b></a>
                        <a className="related-card" href="/services/pickup-delivery-and-returns/"><div><small>Fulfillment</small><h3>Pickup & Delivery</h3><p>Frictionless omnichannel logistics.</p></div><b>Explore fulfillment ↗</b></a>
                        <a className="related-card" href="/services/store-locator-and-appointments/"><div><small>Engagement</small><h3>Store Locator</h3><p>Drive foot traffic digitally.</p></div><b>Explore locators ↗</b></a>
                        <a className="related-card" href="/services/customer-accounts-and-loyalty/"><div><small>Retention</small><h3>Accounts & Loyalty</h3><p>Build unified customer relationships.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your omnichannel <br />retail operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless BOPIS (Buy Online Pick Up In Store) workflows to unified POS loyalty integrations, we build software that drives growth across every retail channel.</p>
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
