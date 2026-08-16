import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css"; // Using existing template css
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-information-and-catalogues/" },
  title: "Product Information & Catalogues Solutions | Hyperlink Tech Solutions",
  description: "Transform your B2B product information management. We build centralized product information systems and interactive digital catalogues for complex supply chains.",
};

export default function ProductInformationAndCatalogues() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/",
          "name": "Product Information & Catalogues Solutions | Hyperlink Tech Solutions",
          "description": "Transform your B2B product information management. We build centralized product information systems and interactive digital catalogues for complex supply chains.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/#service",
          "name": "Product Information & Catalogues",
          "serviceType": "PIM & Data Architecture",
          "url": "https://hyperlinktechsolutions.com/services/product-information-and-catalogues/",
          "description": "Transform your B2B product information management. We build centralized product information systems and interactive digital catalogues for complex supply chains.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "B2B Manufacturers, Distributors, and Enterprise Retailers"
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
                    <strong>Product Info & Catalogues</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Centralized Data & Digital Discovery</div>
                        <p className="eyebrow">Product Information & Catalogues</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Tame complexity with intelligent <em class="accent-text">product catalogues.</em>' }}></h1>
                        <p className="hero-lead">We design and implement robust Product Information Management (PIM) systems and digital catalogues. Stop fighting fragmented spreadsheets and start delivering unified, accurate product data across every channel.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralize 100,000+ SKUs with dynamic attribute mapping</li>
                            <li>Deploy high-speed headless digital catalogues for B2B discovery</li>
                            <li>Automate syndication to ERPs, marketplaces, and global distributors</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Data Architecture Audit <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="PIM platform benefits">
                        <div className="proof-item">
                            <small>01 · Single Source of Truth</small>
                            <strong>Eliminate data silos and contradictory spec sheets instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Rapid Syndication</small>
                            <strong>Push product updates to all sales channels simultaneously.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Media Management</small>
                            <strong>Link high-res assets, 3D models, and manuals to exact SKUs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Sub-Second Search</small>
                            <strong>Empower buyers with lightning-fast facet filtering.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When PIM solutions are necessary</p>
                        <p>You cannot scale globally when your product data lives in 40 different Excel files.</p>
                        <a className="btn" href="#contact">Discuss Your Data <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented product data destroys buyer trust and sales agility.</h2>
                        <p>When manufacturers and distributors lack a centralized system, launching new products takes months instead of days. Buyers abandon carts because they can't trust the specs, and internal teams waste thousands of hours manually updating disparate portals.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Inconsistency</h3>
                                <p>Your website shows one weight specification, your ERP shows another, and your printed catalogues are already out of date.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Time-to-Market</h3>
                                <p>Adding a new product line requires manual data entry across five different platforms before a customer can actually buy it.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Discovery Experience</h3>
                                <p>Customers cannot easily filter complex product variants or find the exact technical documentation they need to approve a purchase.</p>
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
                                <h2>Enterprise PIM & Catalogue Architecture.</h2>
                            </div>
                            <p>We implement scalable data structures and high-performance frontend catalogues that turn your product information into a competitive advantage.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>Data Modeling & Taxonomy</h3>
                                <p>Designing intuitive classification hierarchies and attribute sets that accommodate even the most complex industrial configurations.</p>
                                <div className="deliverable-tags"><small>Taxonomy</small><small>Schema</small><small>Modeling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Implementation</span>
                                <h3>PIM Platform Integration</h3>
                                <p>Deploying and customizing robust PIM solutions (like Akeneo or custom builds) perfectly synced with your core ERP workflows.</p>
                                <div className="deliverable-tags"><small>PIM</small><small>Integration</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Discovery</span>
                                <h3>Headless Digital Catalogues</h3>
                                <p>Building blazing-fast React/Next.js frontend catalogues powered by Elasticsearch for sub-second part number lookups and filtering.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Elasticsearch</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Distribution</span>
                                <h3>Automated Syndication</h3>
                                <p>Creating API pipelines that automatically push enriched product data to distributor portals, marketplaces, and mobile apps.</p>
                                <div className="deliverable-tags"><small>Syndication</small><small>Pipelines</small><small>Omnichannel</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Implementation</p>
                            <h2>Unifying 150,000 SKUs for a Global Distributor.</h2>
                        </div>
                        <p>See how we eliminated data silos and launched a real-time digital catalogue for a leading industrial supplier.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>PIM & Catalogues</span>
                                <span>Data Architecture</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>Data Visualization</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Global Components Supplier</p>
                                <h2>From spreadsheets to instant discovery.</h2>
                                <p>A major components supplier was struggling to maintain accurate product specs across 12 regional websites. Their manual updates were causing a 30% error rate in order fulfillment due to mismatched data.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Product data was trapped in legacy on-premise systems and individual employee spreadsheets, making new product launches painfully slow.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We architected a centralized PIM connected directly to their SAP ERP, and deployed a Next.js headless catalogue that consumes the clean data via GraphQL APIs.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Time-to-market for new SKUs dropped from 3 weeks to 4 hours. Catalogue search speed improved by 800%, driving a 45% increase in online B2B orders.</strong></div>
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
                        <h2 id="faq-title">Common questions about Product Information.</h2>
                        <p>Answers covering data migrations, PIM software, and ongoing management.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is the difference between an ERP and a PIM?</summary>
                            <p>An ERP handles transactional data (inventory levels, pricing, supply chain). A PIM handles marketing and discovery data (rich text descriptions, 3D models, technical specifications, localized translations). They work best when integrated together.</p>
                        </details>
                        <details>
                            <summary>How long does a product data migration take?</summary>
                            <p>It depends heavily on the cleanliness of your current data. A typical enterprise migration involves 4-6 weeks of data cleansing and taxonomy structuring before the actual technical implementation begins.</p>
                        </details>
                        <details>
                            <summary>Do you build custom PIMs or integrate existing platforms?</summary>
                            <p>We do both. We frequently integrate enterprise solutions like Akeneo or inriver. However, for clients with highly specific, non-standard workflow requirements, we build custom centralized product data hubs.</p>
                        </details>
                        <details>
                            <summary>Can the digital catalogue handle complex pricing tiers?</summary>
                            <p>Yes. By decoupling the frontend catalogue from the backend, we can query your ERP in real-time to display custom-negotiated pricing specific to the authenticated user's account.</p>
                        </details>
                        <details>
                            <summary>How do you ensure search accuracy for part numbers?</summary>
                            <p>We utilize Elasticsearch or Algolia with custom tokenization rules. This ensures that users can find the right product even if they include or omit dashes, spaces, or leading zeros in complex industrial part numbers.</p>
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
                        <a className="related-card" href="/services/trade-and-distributor-portals/"><div><small>Wholesale</small><h3>Distributor Portals</h3><p>Empower your network with self-serve ordering and real-time inventory.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/quality-and-traceability-workflows/"><div><small>Compliance</small><h3>Quality Workflows</h3><p>Digitize your compliance documentation and supply chain traceability.</p></div><b>Explore quality ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Organize your data. <br />Accelerate your sales. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a single source of truth for your complex product catalogue? Let's discuss your data architecture.</p>
                        <a className="btn" href="#contact">Get a PIM Proposal <span className="arrow">↗</span></a>
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
