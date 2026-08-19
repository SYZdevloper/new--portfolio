import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/aftermarket-and-distribution-platforms/" },
  title: "Aftermarket & Distribution Platforms | Hyperlink Tech Solutions",
  description: "B2B e-commerce platforms and dealer portals designed specifically for aftermarket parts sales, warranty tracking, and lifecycle service management.",
};

export default function AftermarketAndDistributionPlatforms() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/",
          "name": "Aftermarket & Distribution Platforms | Hyperlink Tech Solutions",
          "description": "B2B e-commerce platforms and dealer portals designed specifically for aftermarket parts sales, warranty tracking, and lifecycle service management.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/#service",
          "name": "Aftermarket & Distribution Platforms",
          "serviceType": "B2B E-commerce & Dealer Networks",
          "url": "https://hyperlinktechsolutions.com/services/aftermarket-and-distribution-platforms/",
          "description": "B2B e-commerce platforms and dealer portals designed specifically for aftermarket parts sales, warranty tracking, and lifecycle service management.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Original Equipment Manufacturers (OEMs) and wholesale distributors"
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
                    <strong>Aftermarket Platforms</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Parts, Service & Warranty</div>
                        <p className="eyebrow">Aftermarket & Distribution Platforms</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Digitize your most <em class="accent-text">profitable revenue stream.</em>' }}></h1>
                        <p className="hero-lead">We engineer robust B2B e-commerce portals that make it incredibly easy for your dealer network and end-users to find the right spare parts, check live inventory, and process warranty claims online.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Implement visual parts catalogues and interactive exploded diagrams</li>
                            <li>Provide complex, customer-specific pricing and volume discounts</li>
                            <li>Automate the RMA (Return Merchandise Authorization) and warranty process</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Platform <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Aftermarket benefits">
                        <div className="proof-item">
                            <small>01 · VIN/Serial Search</small>
                            <strong>Customers type in their machine's serial number to see exact fitment.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · B2B Pricing</small>
                            <strong>Automatically display the correct tier pricing for different distributors.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Live Inventory</small>
                            <strong>Sync directly with your ERP to show accurate stock levels across warehouses.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Self-Service Returns</small>
                            <strong>Allow dealers to initiate and track warranty claims without calling support.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When an upgrade is necessary</p>
                        <p>If your dealers are buying aftermarket parts from third-party competitors because your ordering process is too difficult, you are losing margin.</p>
                        <a className="btn" href="#contact">Discuss Your Network <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Selling aftermarket parts shouldn't require a phone call.</h2>
                        <p>For many OEMs, the aftermarket is the highest-margin segment of the business. Yet, the ordering experience relies on outdated PDF catalogues, phone calls to verify stock, and emails to submit warranty claims.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Ordering Friction</h3>
                                <p>Dealers struggle to identify the correct replacement part because they lack access to digital, interactive schematics.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Inventory Blind Spots</h3>
                                <p>Without real-time ERP integration, customers place orders for parts that are out of stock, leading to delays and frustration.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Grey Market Losses</h3>
                                <p>When the OEM ordering experience is poor, dealers turn to faster, non-genuine parts suppliers to service machines.</p>
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
                                <h2>A modern e-commerce experience for B2B buyers.</h2>
                            </div>
                            <p>We build specialized platforms that handle the unique complexities of industrial distribution, from tiered pricing to complex fitment logic.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Discovery</span>
                                <h3>Exploded View Catalogues</h3>
                                <p>Integrating interactive 2D or 3D schematics where users can click on a specific visual component to add it to their cart.</p>
                                <div className="deliverable-tags"><small>Schematics</small><small>Hotspots</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Commerce</span>
                                <h3>B2B Checkout Workflows</h3>
                                <p>Supporting purchase orders (POs), credit limits, tiered pricing, and bulk CSV uploads for massive stock orders.</p>
                                <div className="deliverable-tags"><small>B2B Cart</small><small>Pricing</small><small>Invoicing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Integration</span>
                                <h3>ERP & Warehouse Sync</h3>
                                <p>Building robust middleware to ensure the website always reflects accurate pricing, stock availability, and shipping timelines.</p>
                                <div className="deliverable-tags"><small>ERP</small><small>WMS</small><small>Real-time</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Service</span>
                                <h3>Warranty & RMA Management</h3>
                                <p>Digital workflows for dealers to submit claims, upload photos of defective parts, and track approval status.</p>
                                <div className="deliverable-tags"><small>RMA</small><small>Portals</small><small>Workflows</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Aftermarket Platform</p>
                            <h2>Digitizing a $50M global spare parts business.</h2>
                        </div>
                        <p>See how we helped an industrial equipment manufacturer move their entire dealer network from phone orders to a modern B2B e-commerce platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B E-Commerce</span>
                                <span>ERP Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Dealer Portal Re-platforming</p>
                                <h2>A clearer journey from broken machine to replacement part.</h2>
                                <p>Dealers were struggling to identify correct replacement parts using outdated PDF schematics. Call center volume was unmanageable, and the OEM was losing aftermarket sales to third-party grey market suppliers.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Users needed visual exploded-view diagrams, real-time stock availability, and accurate, dealer-specific tiered pricing drawn straight from the ERP.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a headless B2B commerce platform. Dealers now enter a machine's serial number to see exact 2D schematics, click the part they need, and checkout with their approved credit limits.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Online order volume increased by 200% in the first quarter, and customer service calls regarding stock checks dropped by 70%.</strong></div>
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
                        <h2 id="faq-title">What distributors ask before building B2B commerce.</h2>
                        <p>Answers covering pricing logic, ERP integrations, and B2B requirements.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle customer-specific pricing?</summary>
                            <p>B2B pricing is rarely one-size-fits-all. We integrate your platform directly with your ERP's pricing engine. When a dealer logs in, the platform queries the ERP in real-time to display their specific negotiated rates and volume discounts.</p>
                        </details>
                        <details>
                            <summary>Can customers order using their own internal part numbers?</summary>
                            <p>Yes. We can build cross-reference features that allow procurement teams to search, upload, and order using their own SKU formats, seamlessly mapping them to your internal part numbers.</p>
                        </details>
                        <details>
                            <summary>Which e-commerce engines do you recommend?</summary>
                            <p>Depending on the complexity, we utilize enterprise headless commerce engines (like Commerce Layer or Elastic Path) or custom builds, allowing us to deeply integrate with your existing systems without being constrained by rigid templates.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your B2B commerce with the engineering and systems required to scale.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Product Catalogues</h3><p>Organize complex parts with parametric filtering.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Sync inventory and pricing directly from your ERP.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Development</small><h3>Custom Web Apps</h3><p>Build custom workflows for RMAs and warranties.</p></div><b>Explore apps ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Design</small><h3>Design Systems</h3><p>Ensure a consistent experience across all dealer portals.</p></div><b>Explore systems ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Plan your B2B commerce <br />and aftermarket experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to make it incredibly easy for your dealers to buy parts and submit warranty claims? Let's discuss your B2B platform.</p>
                        <a className="btn" href="#contact">Discuss Your Platform <span className="arrow">↗</span></a>
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
