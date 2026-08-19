import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/trade-and-distributor-portals/" },
  title: "B2B Trade & Distributor Portals | Hyperlink Tech Solutions",
  description: "Empower your wholesale network. We build custom trade and distributor portals with self-serve ordering, ERP syncing, and real-time inventory visibility.",
};

export default function TradeAndDistributorPortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/",
          "name": "B2B Trade & Distributor Portals | Hyperlink Tech Solutions",
          "description": "Empower your wholesale network. We build custom trade and distributor portals with self-serve ordering, ERP syncing, and real-time inventory visibility.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/#service",
          "name": "Trade & Distributor Portals",
          "serviceType": "B2B Wholesale Portals",
          "url": "https://hyperlinktechsolutions.com/services/trade-and-distributor-portals/",
          "description": "Empower your wholesale network. We build custom trade and distributor portals with self-serve ordering, ERP syncing, and real-time inventory visibility.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, Wholesalers, and Master Distributors"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Trade & Distributor Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Self-Serve B2B Wholesale</div>
                        <p className="eyebrow">Trade & Distributor Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Stop taking wholesale orders via <em class="accent-text">phone and email.</em>' }}></h1>
                        <p className="hero-lead">We build custom B2B portals that allow your trade partners and distributors to view accurate inventory, access their negotiated pricing, and place bulk orders 24/7 without calling your sales team.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Direct integration with ERPs (SAP, NetSuite, Dynamics 365)</li>
                            <li>Tiered customer-specific pricing and discount logic</li>
                            <li>Bulk CSV order uploads and repeat-purchase workflows</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Portal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Distributor portal benefits">
                        <div className="proof-item">
                            <small>01 · 24/7 Self-Service</small>
                            <strong>Distributors can order anytime, across any time zone.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Account Dashboards</small>
                            <strong>Instant access to order history, invoices, and tracking numbers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Sales Efficiency</small>
                            <strong>Free up your reps to sell, rather than doing data entry.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ERP Accuracy</small>
                            <strong>Orders flow directly into your backend without human transcription errors.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Distributor Portals are necessary</p>
                        <p>When you have 5 customer service reps doing nothing but re-typing emailed PDFs into your ERP.</p>
                        <a className="btn" href="#contact">Automate Wholesale <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual wholesale ordering is choking your growth and frustrating your partners.</h2>
                        <p>Your best distributors are forced to wait for business hours to check stock or get a quote. Emailed spreadsheets get lost, prices are quoted incorrectly, and fulfillment is delayed because of basic data entry bottlenecks.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Bottleneck</h3>
                                <p>Distributors email purchase orders as PDFs, which your team then manually re-types into the accounting system, causing delays and typos.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Blind Inventory</h3>
                                <p>Partners don't know if an item is in stock until they call, leading to backorders, frustrated buyers, and lost sales to competitors who offer transparency.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Pricing Chaos</h3>
                                <p>With dozens of different distributor tiers, volume discounts, and negotiated contracts, reps frequently quote the wrong price over the phone.</p>
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
                                <h2>Enterprise-grade trade infrastructure.</h2>
                            </div>
                            <p>We build secure, headless portals that act as a seamless extension of your ERP, giving your partners a modern consumer-grade experience for complex B2B purchasing.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Identity</span>
                                <h3>Role-Based Access Control</h3>
                                <p>Secure logins with granular permissions, ensuring buyers only see their specific catalogues, pricing tiers, and relevant account history.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>RBAC</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Pricing</span>
                                <h3>Dynamic ERP Syncing</h3>
                                <p>Real-time API calls to your ERP to render the exact negotiated price for that specific distributor at the exact moment they log in.</p>
                                <div className="deliverable-tags"><small>ERP</small><small>Pricing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · UX</span>
                                <h3>Rapid Order Workflows</h3>
                                <p>Replacing standard shopping carts with matrix ordering tables, SKU quick-add bars, and CSV upload tools for massive 500-line orders.</p>
                                <div className="deliverable-tags"><small>UX/UI</small><small>Bulk Orders</small><small>B2B</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Account</span>
                                <h3>Self-Serve Dashboards</h3>
                                <p>Complete visibility into open invoices, past orders, RMA returns, and tracking information, eliminating "where is my order" support calls.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Invoices</small><small>Support</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Portal Build</p>
                            <h2>Digitizing a $50M Wholesale Operation.</h2>
                        </div>
                        <p>See how we replaced fax machines and phone calls with a seamless Next.js distributor portal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Distributor Portals</span>
                                <span>ERP Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Dashboard Interface</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Building Materials Manufacturer</p>
                                <h2>Moving 80% of orders to self-serve.</h2>
                                <p>A leading manufacturer of specialized building materials was processing 400 wholesale orders a week entirely through email and phone, pushing their 8-person customer service team to the breaking point.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Their legacy ERP (Epicor) was difficult to integrate with, meaning distributors had zero visibility into real-time inventory or their complex rebate tiers.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure middleware layer to communicate with Epicor, and deployed a React-based frontend portal where dealers can view live stock and place orders instantly.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Within 6 months, 82% of all wholesale orders shifted to the portal. Order processing errors dropped by 95%, and the company scaled revenue without hiring additional data-entry staff.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Trade Portals.</h2>
                        <p>Answers covering ERP sync, dealer adoption, and security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure our legacy ERP can connect to a modern portal?</summary>
                            <p>We build custom middleware APIs (often using Node.js or Python) that securely broker communication between the modern Next.js frontend and older on-premise systems via flat files, SOAP, or direct database queries if REST APIs aren't available.</p>
                        </details>
                        <details>
                            <summary>Can different distributors see different product lines?</summary>
                            <p>Yes. We implement account-level catalogue segmentation. If a specific dealer is not authorized to sell a certain product line, those SKUs will be completely hidden from their view when they log in.</p>
                        </details>
                        <details>
                            <summary>How do we get our "old school" distributors to actually use it?</summary>
                            <p>By making it undeniably faster than calling. We design UX specifically for rapid entry (like CSV uploads and 're-order past purchase' buttons). Once a buyer realizes they can place an order in 30 seconds instead of waiting on hold for 10 minutes, adoption happens naturally.</p>
                        </details>
                        <details>
                            <summary>Do trade portals support credit limits and PO numbers?</summary>
                            <p>Absolutely. At checkout, buyers can enter their internal Purchase Order numbers. We also query the ERP to check their available credit limit, and can automatically route the order for manual review if they exceed it.</p>
                        </details>
                        <details>
                            <summary>Can sales reps use the portal on behalf of the customer?</summary>
                            <p>Yes, we often build an "impersonation" feature. A sales rep can log in, select a distributor, and see the exact pricing and interface that the distributor sees, allowing them to place orders over the phone directly into the portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-information-and-catalogues/"><div><small>Data</small><h3>Product Information</h3><p>Centralize your product specs and deploy high-speed digital catalogues.</p></div><b>Explore PIM ↗</b></a>
                        <a className="related-card" href="/services/production-and-supply-dashboards/"><div><small>Operations</small><h3>Supply Dashboards</h3><p>Visualize your manufacturing pipeline and supply chain telemetry.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your wholesale. <br />Scale without the friction. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your distributors a B2B ordering experience that matches modern consumer standards? Let's discuss your portal.</p>
                        <a className="btn" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
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
