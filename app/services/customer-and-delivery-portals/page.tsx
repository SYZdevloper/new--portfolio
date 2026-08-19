import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-delivery-portals/" },
  title: "Customer & Delivery Portals | Hyperlink Tech Solutions",
  description: "We build unified dashboards where clients can track complex freight deliveries, download invoices, pay outstanding account balances, and manage multi-site purchasing permissions.",
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
                    <strong>Post-Purchase</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Dashboards</div>
                        <p className="eyebrow">Post-Purchase</p>
                        <h1 id="service-title">Self-serve tools for B2B customers.</h1>
                        <p className="hero-lead">We build unified dashboards where clients can track complex freight deliveries, download invoices, pay outstanding account balances, and manage multi-site purchasing permissions.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve invoice retrieval and statement downloads connected directly to the ERP</li>
                            <li>Account payment gateways allowing clients to settle net-30 balances via credit card or ACH</li>
                            <li>Multi-tier account structures allowing a head office to manage purchasing budgets for regional branches</li>
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
                            <small>01 · Lower Support Costs</small>
                            <strong>Stop paying staff to email copies of old invoices to customers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Payments</small>
                            <strong>Make it incredibly easy for clients to pay their outstanding account balances digitally.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Delivery Transparency</small>
                            <strong>Track heavy LTL (Less Than Truckload) freight directly within the portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Corporate Control</small>
                            <strong>Give procurement managers control over what their regional staff can buy.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When account management is manual</p>
                        <p>Your accounting team shouldn't act as a customer service desk.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of self-serve tools suffocates operations.</h2>
                        <p>Wholesale clients require constant administrative support. They need copies of old invoices for their accountants, they want to know where their freight is, and they need to manage which of their staff are allowed to make purchases. If your digital portal doesn't provide this, your phone lines will be permanently jammed.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Invoice Bottlenecks</h3>
                                <p>Your finance team wastes hours every week pulling PDFs from the ERP and emailing them to clients.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rogue Purchasing</h3>
                                <p>A regional branch manager overspends because there are no digital budget controls or approval workflows in the portal.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Delayed Receivables</h3>
                                <p>Clients pay late because the process of executing a bank transfer is manual; they'd rather just click 'Pay Statement' online.</p>
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
                                <h2>Comprehensive B2B account portals.</h2>
                            </div>
                            <p>We engineer secure dashboards that give wholesale clients complete control over their finances and operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Invoice & Statement Portals</h3>
                                <p>API integrations pulling live financial data from SAP or NetSuite, allowing clients to view and download historical PDFs.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Finance</small><small>ERP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Account Payment Gateways</h3>
                                <p>Integrating B2B payment processors (like Stripe or specialized B2B gateways) to allow instant settlement of account balances.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Security</small><small>Fintech</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Corporate Role Management</h3>
                                <p>Custom identity structures allowing a 'Super Admin' client to set purchasing limits and approval workflows for their junior buyers.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>Logic</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Freight Tracking Dashboards</h3>
                                <p>Integrating with major logistics and LTL carriers to provide visual delivery tracking for massive industrial orders.</p>
                                <div className="deliverable-tags"><small>Logistics</small><small>APIs</small><small>Tracking</small></div>
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
