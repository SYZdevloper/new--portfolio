import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ordering-and-replenishment/" },
  title: "Ordering & Replenishment | Hyperlink Tech Solutions",
  description: "We engineer custom B2B cart experiences supporting quick-order pads, CSV uploads, barcode scanning, and automated subscription replenishment to make reordering effortless.",
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
                    <strong>Sales Workflows</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Ordering</div>
                        <p className="eyebrow">Sales Workflows</p>
                        <h1 id="service-title">Streamline bulk ordering and restocks.</h1>
                        <p className="hero-lead">We engineer custom B2B cart experiences supporting quick-order pads, CSV uploads, barcode scanning, and automated subscription replenishment to make reordering effortless.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Quick-order interfaces for buyers who already know their exact SKU numbers</li>
                            <li>CSV bulk upload functionality allowing procurement to add 500 lines to a cart instantly</li>
                            <li>Saved order templates and automated replenishment schedules for recurring stock</li>
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
                            <small>01 · Frictionless Reorders</small>
                            <strong>Reduce a 30-minute procurement task to a 2-minute digital process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Bulk Efficiency</small>
                            <strong>Buyers can upload a massive spreadsheet straight into the checkout flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Errors</small>
                            <strong>Eliminate the mistakes that happen when customer service manually keys in faxed orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Recurring Revenue</small>
                            <strong>Lock in sales with automated weekly or monthly replenishment carts.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B ordering is tedious</p>
                        <p>B2B buyers are ordering 200 items at a time, not browsing for one.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Retail-style carts fail B2B procurement.</h2>
                        <p>Standard eCommerce carts are designed for consumers buying a few items. If a procurement manager needs to order 300 different electrical components, forcing them to visit 300 individual product pages and click 'add to cart' is infuriating. They will simply email a spreadsheet instead, shifting the admin burden back to your team.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Bulk Entry</h3>
                                <p>Your sales team spends hours re-typing massive purchase orders sent via email or fax.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Time-Consuming Carts</h3>
                                <p>Buyers complain that the website is too slow and difficult for large, complex weekly restock orders.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Recurring Sales</h3>
                                <p>Customers forget to reorder consumables because there is no automated reminder or subscription system.</p>
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
                                <h2>High-volume ordering engines.</h2>
                            </div>
                            <p>We build custom cart interfaces designed specifically for the speed and scale of wholesale procurement.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Quick-Order Pads</h3>
                                <p>Custom React interfaces where buyers can simply tab through SKU and Quantity fields, adding dozens of items in seconds.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>CSV Cart Uploaders</h3>
                                <p>Tools that parse a customer's Excel or CSV file, map the SKUs, and instantly populate a massive B2B cart.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Data</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Order Template Portals</h3>
                                <p>Saved shopping lists allowing buyers to load their 'Weekly Restock' template and check out with two clicks.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>UX</small><small>Retention</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Barcode & Mobile Scanning</h3>
                                <p>Progressive Web Apps (PWAs) allowing warehouse staff to scan a shelf barcode and instantly add the item to a replenishment cart.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Hardware</small><small>PWA</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured B2B Platform</p>
                            <h2>Modernizing wholesale distribution.</h2>
                        </div>
                        <p>See how we helped a national industrial distributor migrate from a legacy AS400 system to a modern headless B2B portal, allowing procurement teams to quick-order thousands of SKUs via CSV upload while retaining exact contract pricing.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B Tech</span>
                                <span>Wholesale & Distribution</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/b2b-distribution-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Speed and scale for B2B buyers.</h2>
                                <p>We developed a custom ordering engine that integrates directly with their ERP, providing real-time visibility into complex freight calculations, warehouse inventory, and automated account-level volume discounts.</p>
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
                        <h2 id="faq-title">Common questions about B2B distribution tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle customer-specific tier pricing?</summary>
                            <p>We build secure API middleware that connects the frontend portal directly to your ERP (like SAP, NetSuite, or Epicor). When a B2B user logs in, the pricing engine queries the ERP in real-time to display their exact negotiated rate and volume discounts.</p>
                        </details>
                        <details>
                            <summary>Can you support massive catalogues with hundreds of thousands of SKUs?</summary>
                            <p>Yes. We use headless architecture and enterprise search tools like Algolia or Elasticsearch. This allows buyers to search massive databases instantly by part number, competitor cross-reference, or complex technical facets without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you support punchout catalogs (cXML/OCI)?</summary>
                            <p>Yes. We can integrate your B2B commerce platform with major eProcurement systems (like Ariba, Coupa, or Jaggaer) so your enterprise clients can shop your site directly from within their own purchasing software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other distribution capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/b2b-catalogues-and-search/"><div><small>Discovery</small><h3>Catalogues & Search</h3><p>Find exact parts instantly.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/accounts-pricing-and-quotations/"><div><small>Commerce</small><h3>Pricing & Quotes</h3><p>Digitize complex B2B pricing.</p></div><b>Explore pricing ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-replenishment/"><div><small>Operations</small><h3>Quick Ordering</h3><p>Streamline bulk restocks.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/customer-and-delivery-portals/"><div><small>Post-Purchase</small><h3>Delivery Portals</h3><p>Self-serve B2B tools.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your B2B wholesale <br />and distribution operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From lightning-fast search for massive catalogues to complex ERP pricing integrations and quick-order portals, we build software that drives B2B volume.</p>
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
