import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/distributor-and-customer-portals/" },
  title: "Distributor & Customer Portals | Hyperlink Tech Solutions",
  description: "Digitize your B2B supply chain. We build custom distributor and customer portals that sync directly with your ERP for 24/7 self-serve ordering.",
};

export default function DistributorAndCustomerPortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/",
          "name": "Distributor & Customer Portals | Hyperlink Tech Solutions",
          "description": "Digitize your B2B supply chain. We build custom distributor and customer portals that sync directly with your ERP for 24/7 self-serve ordering.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/#service",
          "name": "Distributor & Customer Portals",
          "serviceType": "B2B eCommerce & Supply Chain Portals",
          "url": "https://hyperlinktechsolutions.com/services/distributor-and-customer-portals/",
          "description": "Digitize your B2B supply chain. We build custom distributor and customer portals that sync directly with your ERP for 24/7 self-serve ordering.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Wholesale Manufacturers, B2B Distributors, and Enterprise Suppliers"
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
                    <strong>Distributor & Customer Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Self-Service Architecture</div>
                        <p className="eyebrow">Distributor & Customer Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Replace PDF order forms with <em class="accent-text">24/7 digital ordering.</em>' }}></h1>
                        <p className="hero-lead">We build custom, highly secure B2B portals that allow your distributors and enterprise customers to place orders, track shipments, and manage their accounts without calling your sales team.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Direct API integration with ERPs (SAP, NetSuite, Epicor)</li>
                            <li>Complex matrix pricing and customer-specific discount tiers</li>
                            <li>Automated re-ordering and bulk CSV upload capabilities</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your B2B Portal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Portal benefits">
                        <div className="proof-item">
                            <small>01 · Lower OPEX</small>
                            <strong>Stop paying sales reps to manually key in routine re-orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Error Reduction</small>
                            <strong>Eliminate data-entry mistakes caused by interpreting handwritten faxes.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · 24/7 Revenue</small>
                            <strong>Distributors in different time zones can place orders at midnight.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Customer Retention</small>
                            <strong>B2B buyers prefer suppliers who make purchasing frictionless.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B Portals are necessary</p>
                        <p>When your customer service team spends 80% of their day answering "Where is my order?" emails.</p>
                        <a className="btn" href="#contact">Automate Your Ordering <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual B2B ordering processes are capping your growth.</h2>
                        <p>If your distributors have to email a PDF form to request a quote, wait 24 hours for pricing approval, and then call to provide payment details, you are introducing massive friction into your revenue stream. Modern B2B buyers expect the same self-serve convenience they get from consumer apps like Amazon.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Order Bottleneck</h3>
                                <p>Your business can only process as many orders per day as your customer service reps can manually type into your ERP system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Pricing Confusion</h3>
                                <p>Sales reps constantly quote outdated prices because the "master spreadsheet" of customer-specific discounts isn't updated in real-time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Blind Customers</h3>
                                <p>Distributors cannot check their own inventory levels, track inbound shipments, or download past invoices without contacting your staff.</p>
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
                                <h2>Enterprise Portal Architecture.</h2>
                            </div>
                            <p>We build secure, account-based web applications that pull real-time data from your backend systems, giving your B2B customers total control over their purchasing lifecycle.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Identity</span>
                                <h3>Account & Role Management</h3>
                                <p>Implementing complex role-based access control (RBAC) so a distributor's purchasing manager can approve orders drafted by their junior buyers.</p>
                                <div className="deliverable-tags"><small>RBAC</small><small>Identity</small><small>Approvals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Commerce</span>
                                <h3>B2B eCommerce Engines</h3>
                                <p>Building quick-order forms, SKU-level search, bulk CSV uploads, and automated subscription re-ordering specifically designed for wholesale buyers.</p>
                                <div className="deliverable-tags"><small>Bulk Orders</small><small>B2B Cart</small><small>Re-order</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Integrations</span>
                                <h3>ERP & Pricing Sync</h3>
                                <p>Writing middleware to query your ERP in real-time, ensuring the portal displays accurate inventory levels and exact customer-specific contract pricing.</p>
                                <div className="deliverable-tags"><small>ERP APIs</small><small>Middleware</small><small>Pricing Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Logistics</span>
                                <h3>Self-Serve Tracking & Invoicing</h3>
                                <p>Creating dashboards where customers can track freight shipments via 3PL APIs, view credit limits, and download historical PDF invoices.</p>
                                <div className="deliverable-tags"><small>Tracking</small><small>Invoices</small><small>Credit</small></div>
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
                            <h2>Digitizing a $500M distribution network.</h2>
                        </div>
                        <p>See how we eliminated manual data entry for a leading industrial manufacturer.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Customer Portals</span>
                                <span>Next.js & SAP Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>B2B Dashboard Interface</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Industrial Parts Manufacturer</p>
                                <h2>Ending the fax machine era.</h2>
                                <p>An industrial manufacturer with 2,000 global distributors was processing 60% of their wholesale orders via fax and email attachments, requiring a team of 15 people just to key the data into SAP.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Distributors had 15 different pricing tiers, meaning off-the-shelf eCommerce platforms like Shopify couldn't handle the complex pricing logic.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom Next.js portal with a Node.js middleware layer that queries SAP in real-time. Distributors log in, see their exact negotiated prices, and can upload a CSV to order 500 SKUs instantly.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Within 6 months, 85% of wholesale orders migrated to the digital portal. Order processing errors dropped by 99%, and the manufacturer repurposed their data-entry staff into proactive outbound sales.</strong></div>
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
                        <h2 id="faq-title">Common questions about B2B Portals.</h2>
                        <p>Answers covering ERP syncing, payments, and security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How does the portal know what price to show a specific customer?</summary>
                            <p>We do not store pricing logic in the web portal itself. Instead, when a user logs in, the portal securely pings your ERP (via API) with their unique Account ID, and the ERP returns the exact, real-time pricing matrix negotiated for that specific distributor.</p>
                        </details>
                        <details>
                            <summary>Can B2B buyers pay with Net 30/60 terms instead of a credit card?</summary>
                            <p>Yes. During checkout, we can display "Pay on Account" or "Purchase Order" as payment methods. The portal queries your ERP to check their available credit limit before allowing the order to process. We can also integrate Stripe/B2B payment gateways for immediate invoice clearing.</p>
                        </details>
                        <details>
                            <summary>Can our sales reps use this portal on behalf of the customer?</summary>
                            <p>Absolutely. We frequently build "Impersonation" features. A sales rep can log into the portal, "masquerade" as one of their assigned distributors, draft an order, and send it to the distributor for final one-click approval.</p>
                        </details>
                        <details>
                            <summary>Is this built on Shopify or Magento?</summary>
                            <p>While we can utilize platforms like Shopify Plus for B2B, for highly complex operations we typically build fully custom applications (Next.js/React). Custom architecture is often required when your backend business logic is too complex for standard eCommerce templates to handle cleanly.</p>
                        </details>
                        <details>
                            <summary>How secure is the connection to our internal ERP?</summary>
                            <p>Extremely secure. The web portal never talks directly to your ERP database. We build a secure, authenticated middleware API layer that acts as a gatekeeper, ensuring only authorized queries can pass through your company's firewall.</p>
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
                        <a className="related-card" href="/services/production-and-service-dashboards/"><div><small>Visibility</small><h3>Production Dashboards</h3><p>Give your team real-time visibility into the orders coming through the portal.</p></div><b>Explore dashboards ↗</b></a>
                        <a className="related-card" href="/services/product-catalogue-and-discovery/"><div><small>Discovery</small><h3>Catalogue Search</h3><p>Enhance your portal with lightning-fast SKU filtering.</p></div><b>Explore search ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize orders. <br />Scale wholesale. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your B2B customers the self-serve purchasing experience they expect? Let's discuss your ERP integration.</p>
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
