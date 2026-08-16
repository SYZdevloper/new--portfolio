import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/dealer-and-distributor-portals/" },
  title: "Dealer & Distributor Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Empower your wholesale distribution network with self-serve portals to check inventory, place bulk orders, and track shipments.",
};

export default function DealerAndDistributorPortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/",
          "name": "Dealer & Distributor Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Empower your wholesale distribution network with self-serve portals to check inventory, place bulk orders, and track shipments.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/#service",
          "name": "Dealer & Distributor Portals",
          "serviceType": "Manufacturing & B2B Engineering",
          "url": "https://hyperlinktechsolutions.com/services/dealer-and-distributor-portals/",
          "description": "Empower your wholesale distribution network with self-serve portals to check inventory, place bulk orders, and track shipments.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "B2B Manufacturers, heavy equipment dealers, and industrial suppliers"
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
                    <strong>Dealer Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating the wholesale channel</div>
                        <p className="eyebrow">Dealer & Distributor Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Give your dealers the tools to buy <em class="accent-text">without calling your warehouse.</em>' }}></h1>
                        <p className="hero-lead">We build secure, enterprise-grade portals for heavy equipment manufacturers and industrial suppliers. Allow your dealer network to check real-time inventory, view their tiered pricing, and submit bulk orders instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integrate directly with SAP, NetSuite, or Epicor for real-time inventory</li>
                            <li>Enforce complex wholesale pricing tiers and volume discounts</li>
                            <li>Eliminate manual data entry for your internal sales and fulfillment teams</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="B2B platform benefits">
                        <div className="proof-item">
                            <small>01 · Zero Data Entry</small>
                            <strong>Orders flow straight from the dealer to the warehouse floor.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Real-time Stock</small>
                            <strong>Dealers know exactly what is available before they promise it to a client.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Tiered Pricing</small>
                            <strong>Each dealer sees their specific negotiated pricing automatically.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Self-Serve Tracking</small>
                            <strong>Dealers track their own shipments and invoices without calling support.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B portals are necessary</p>
                        <p>If your warehouse team spends half their day answering "Do you have this in stock?" phone calls, you have a massive operational bottleneck.</p>
                        <a className="btn" href="#contact">Discuss Wholesale Portals <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual dealer orders create massive friction and errors.</h2>
                        <p>B2B distribution is often stuck in the dark ages. Dealers are forced to email PDF order forms or call the warehouse just to check a price, slowing down sales and introducing massive data entry errors.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Inventory Blind Spots</h3>
                                <p>A dealer sells a machine to a customer, only to find out 3 days later that your warehouse is actually out of stock, destroying their relationship with the buyer.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual Provisioning Errors</h3>
                                <p>Your internal team has to re-type the dealer's emailed order into your ERP, inevitably leading to typos, wrong parts being shipped, and costly returns.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Support Overhead</h3>
                                <p>Dealers constantly email your finance team asking for copies of old invoices or tracking numbers, draining your internal resources.</p>
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
                                <h2>Secure, automated B2B infrastructure.</h2>
                            </div>
                            <p>We build complex web portals that bridge the gap between your distribution network and your internal ERP systems.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>B2B Customer Portals</h3>
                                <p>Building lightning-fast Next.js dashboards customized specifically for wholesale workflows and bulk order submission.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>B2B</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Integration</span>
                                <h3>ERP Inventory & Pricing Sync</h3>
                                <p>Connecting the portal to your core ERP so dealers see real-time stock levels and their specific negotiated pricing tier automatically.</p>
                                <div className="deliverable-tags"><small>ERP</small><small>Pricing</small><small>Inventory</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Fulfillment</span>
                                <h3>Order Tracking & History</h3>
                                <p>Providing a ledger where dealers can view past orders, download invoices, and track live freight shipments.</p>
                                <div className="deliverable-tags"><small>Ledgers</small><small>Tracking</small><small>Invoices</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Security</span>
                                <h3>Role-Based Access Control</h3>
                                <p>Architecting complex permission hierarchies so a dealership owner can view all orders, while their junior purchaser can only submit draft orders for approval.</p>
                                <div className="deliverable-tags"><small>RBAC</small><small>Permissions</small><small>IAM</small></div>
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
                            <h2>Eliminating manual dealer phone calls by connecting directly to SAP.</h2>
                        </div>
                        <p>See how we built a self-serve portal for a global heavy equipment manufacturer, saving their team hundreds of hours a month.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Portal Engineering</span>
                                <span>Next.js + SAP API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Global Distributor Portal</p>
                                <h2>Ending the era of PDF order forms.</h2>
                                <p>A global manufacturer relied on a network of 400 dealerships. Every order was submitted via email and had to be manually entered into SAP by an internal sales rep.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The manual data entry was prone to errors, and the warehouse team was constantly fielding phone calls from dealers checking stock levels.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure, Next.js dealer portal deeply integrated with their SAP backend. Dealers log in, see their exact pricing tier, view live stock, and submit orders directly into the fulfillment queue.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Manual data entry was entirely eliminated for portal orders. The support calls regarding stock checks dropped by 80%, allowing the internal team to focus on strategic sales.</strong></div>
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
                        <h2 id="faq-title">Common questions about Dealer Portals.</h2>
                        <p>Answers covering ERP integration, security, and complex pricing.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle custom pricing for different dealers?</summary>
                            <p>This is the most common requirement. The portal itself doesn't calculate the price; it securely authenticates the user and queries your ERP (e.g., NetSuite). The ERP returns the specific, negotiated price for that specific dealer, which we then display on the frontend.</p>
                        </details>
                        <details>
                            <summary>Can the portal connect to our existing ERP?</summary>
                            <p>Yes. The primary purpose of these portals is integration. We use secure APIs or middleware to push orders and pull data directly from platforms like SAP, NetSuite, Epicor, or custom SQL databases.</p>
                        </details>
                        <details>
                            <summary>Is it secure to let third parties interact with our ERP?</summary>
                            <p>We never let third parties touch your core databases directly. We build the Next.js portal as a secure middle-layer. The portal validates the dealer's request, and then the portal's secure backend talks to your ERP.</p>
                        </details>
                        <details>
                            <summary>Can dealers bulk-upload orders?</summary>
                            <p>Absolutely. For distributors ordering hundreds of small parts, we frequently build CSV parsing tools within the portal so they can submit a massive order instantly without clicking through a catalogue.</p>
                        </details>
                        <details>
                            <summary>How do you handle shipping for heavy equipment?</summary>
                            <p>We integrate freight calculation APIs directly into the checkout flow. For massive machinery, the portal can automatically request custom LTL (Less Than Truckload) freight quotes based on the total weight and destination.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your industrial B2B infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-catalogue-and-discovery/"><div><small>Catalogues</small><h3>B2B Discovery</h3><p>Architect massive, complex B2B catalogues with CAD downloads and bulk ordering.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/equipment-configurators-and-quotes/"><div><small>Sales</small><h3>Equipment Configurators</h3><p>Build interactive CPQ engines to customize heavy machinery instantly.</p></div><b>Explore configurators ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Wholesale</small><h3>Dealer Portals</h3><p>Empower your distributors with self-serve ordering and inventory access.</p></div><b>Explore dealer portals ↗</b></a>
                        <a className="related-card" href="/services/rental-and-operations-dashboards/"><div><small>Operations</small><h3>Rental Dashboards</h3><p>Build the command center to track fleet utilization and rental telematics.</p></div><b>Explore rental dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Scale your wholesale channel <br />without adding headcount. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to automate your partner orders and eliminate manual data entry? Let's discuss your ERP integration.</p>
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
