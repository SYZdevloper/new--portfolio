import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-catalogue-and-discovery/" },
  title: "B2B Product Catalogues & Discovery | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Architect massive, complex B2B catalogues that handle spec sheets, bulk ordering, and CAD integrations.",
};

export default function ProductCatalogueAndDiscovery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/",
          "name": "B2B Product Catalogues & Discovery | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Architect massive, complex B2B catalogues that handle spec sheets, bulk ordering, and CAD integrations.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/#service",
          "name": "Product Catalogue & Discovery",
          "serviceType": "Manufacturing & B2B Engineering",
          "url": "https://hyperlinktechsolutions.com/services/product-catalogue-and-discovery/",
          "description": "Architect massive, complex B2B catalogues that handle spec sheets, bulk ordering, and CAD integrations.",
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
                    <strong>B2B Catalogues</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering complex product data</div>
                        <p className="eyebrow">Product Catalogue & Discovery</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Industrial B2B catalogues that actually <em class="accent-text">make sense.</em>' }}></h1>
                        <p className="hero-lead">We architect massive, high-performance product catalogues for manufacturers and distributors. Stop trying to force complex industrial spec sheets into standard eCommerce templates.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integrate seamlessly with PIMs (Akeneo) and core ERPs (SAP/NetSuite)</li>
                            <li>Implement lightning-fast part number search with Elasticsearch</li>
                            <li>Provide native downloads for CAD files, spec sheets, and manuals</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Catalogue Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="B2B platform benefits">
                        <div className="proof-item">
                            <small>01 · ERP Sync</small>
                            <strong>Real-time inventory and pricing pulled directly from your backend.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Sub-second Search</small>
                            <strong>Buyers find exact part numbers instantly, even with typos.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Rich Media</small>
                            <strong>Support for massive 3D models and technical PDFs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Bulk Checkout</small>
                            <strong>Frictionless CSV uploads and rapid order entry forms.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B catalogues are necessary</p>
                        <p>You cannot sell a $5,000 industrial pump using a standard Shopify theme.</p>
                        <a className="btn" href="#contact">Discuss Your Catalogue <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Legacy eCommerce platforms fail at B2B complexity.</h2>
                        <p>Standard web stores are built to sell t-shirts, not machinery. When manufacturers try to cram thousands of SKUs, complex variations, and spec sheets into generic platforms, the user experience collapses.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Terrible Part Search</h3>
                                <p>Engineers try to search for a specific 12-digit part number, but your database crashes or returns completely irrelevant results.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Disconnected Data</h3>
                                <p>Your website says an item is in stock, but your ERP says it isn't, leading to cancelled orders and angry procurement managers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Missing Technical Docs</h3>
                                <p>Buyers bounce to your competitors because they cannot easily find and download the CAD files or spec sheets they need to approve the purchase.</p>
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
                                <h2>Enterprise-grade product architecture.</h2>
                            </div>
                            <p>We build headless catalogues that handle massive data loads, keeping your frontend incredibly fast and your backend perfectly synced.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Search</span>
                                <h3>Elasticsearch Part Number Lookups</h3>
                                <p>Implementing advanced search algorithms that can parse complex industrial part numbers, allowing for fuzzy matching and sub-second results.</p>
                                <div className="deliverable-tags"><small>Elasticsearch</small><small>Algorithms</small><small>Part Numbers</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Data</span>
                                <h3>PIM & ERP Integration</h3>
                                <p>Connecting your frontend to Akeneo or your ERP (SAP, NetSuite) so product specs, pricing, and inventory are always a single source of truth.</p>
                                <div className="deliverable-tags"><small>PIM</small><small>ERP</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Media</span>
                                <h3>CAD & Spec Sheet Rendering</h3>
                                <p>Building dedicated UI components for engineers to preview 3D models in the browser and bulk-download technical documentation.</p>
                                <div className="deliverable-tags"><small>CAD</small><small>3D</small><small>PDFs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Transactions</span>
                                <h3>B2B Bulk Checkout Flows</h3>
                                <p>Replacing the standard "shopping cart" with rapid order entry tables, allowing procurement teams to paste in 50 part numbers at once.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Checkout</small><small>Bulk Orders</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured B2B Build</p>
                            <h2>Replacing a slow Magento site with a Next.js catalogue.</h2>
                        </div>
                        <p>See how we migrated an industrial supplier with 40,000 SKUs onto a blazing-fast, headless architecture.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B Engineering</span>
                                <span>Next.js + Elasticsearch</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Industrial Supplier Catalogue</p>
                                <h2>Ending the 8-second search query.</h2>
                                <p>A national supplier of hydraulic components was losing major enterprise accounts because their legacy Magento site took 8 seconds to return a search result, and half the time, it was the wrong part.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The database was choking on the complex part number variations (dashes vs spaces) and the site lacked the ability to download technical spec sheets.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We decoupled the frontend, building a custom Next.js catalogue powered by an Elasticsearch index. We implemented a custom algorithm specifically tuned to ignore dashes and spaces in part numbers.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Search times dropped to 40ms. The site's conversion rate doubled within a month, and the sales team reported a massive drop in "Can you help me find this part?" support calls.</strong></div>
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
                        <h2 id="faq-title">Common questions about B2B Catalogues.</h2>
                        <p>Answers covering ERP integrations, headless architecture, and CAD files.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why do we need a headless architecture for a catalogue?</summary>
                            <p>Because B2B data is heavy. If you rely on a monolithic platform (like Magento) to render the page AND query 40,000 SKUs, it gets incredibly slow. Headless separates the UI (Next.js) from the data (ERP/PIM), making the browsing experience instantaneous.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our specific ERP?</summary>
                            <p>Yes. The primary purpose of a modern B2B catalogue is integration. We build secure middleware to sync data between your Next.js frontend and systems like SAP, Oracle, NetSuite, or Epicor.</p>
                        </details>
                        <details>
                            <summary>How do you handle tiered wholesale pricing?</summary>
                            <p>We authenticate the user at login and query the ERP for their specific customer group. The catalogue then dynamically updates to show their negotiated prices instead of the public MSRP.</p>
                        </details>
                        <details>
                            <summary>Can users upload a CSV to create an order?</summary>
                            <p>Absolutely. For B2B buyers who already know what they want, we build "Rapid Order Entry" tools where they can upload a spreadsheet of part numbers to instantly populate their cart.</p>
                        </details>
                        <details>
                            <summary>Do you support 3D/CAD viewers in the browser?</summary>
                            <p>Yes. We can integrate WebGL libraries (like Three.js) or third-party CAD viewing APIs to allow engineers to rotate and inspect 3D models directly on the product page before downloading.</p>
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
                    <h2>Make your complex products <br />easy to buy. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build an industrial catalogue that your engineers and procurement buyers will actually love using? Let's discuss your data.</p>
                        <a className="btn" href="#contact">Get a Catalogue Proposal <span className="arrow">↗</span></a>
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
