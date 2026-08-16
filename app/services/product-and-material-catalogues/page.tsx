import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-and-material-catalogues/" },
  title: "Product & Material Catalogues | Hyperlink Tech Solutions",
  description: "Digital product and material catalogues for B2B manufacturers. We build headless discovery platforms that manage complex specifications, CAD files, and materials.",
};

export default function ProductAndMaterialCatalogues() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/",
          "name": "Product & Material Catalogues | Hyperlink Tech Solutions",
          "description": "Digital product and material catalogues for B2B manufacturers. We build headless discovery platforms that manage complex specifications, CAD files, and materials.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/#service",
          "name": "Product & Material Catalogues",
          "serviceType": "PIM & Discovery Architecture",
          "url": "https://hyperlinktechsolutions.com/services/product-and-material-catalogues/",
          "description": "Digital product and material catalogues for B2B manufacturers. We build headless discovery platforms that manage complex specifications, CAD files, and materials.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Building Materials, Industrial Manufacturing, and Hardware Suppliers"
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
                    <strong>Product & Material Catalogues</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Advanced B2B Discovery</div>
                        <p className="eyebrow">Product & Material Catalogues</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Material spec sheets that <em class="accent-text">actually sell.</em>' }}></h1>
                        <p className="hero-lead">We architect high-performance digital catalogues specifically for building materials, hardware, and industrial products. Help architects, engineers, and buyers find exactly what they need in milliseconds.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralized PIM integrations for complex material variants</li>
                            <li>Native support for CAD, Revit/BIM, and high-res texture downloads</li>
                            <li>Lightning-fast facet filtering via headless Next.js and Elasticsearch</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Catalogue <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Catalogue platform benefits">
                        <div className="proof-item">
                            <small>01 · Sub-Second Search</small>
                            <strong>Find obscure material grades instantly without timing out.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Rich Asset Management</small>
                            <strong>Link installation guides, safety sheets, and BIM models to SKUs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Omni-Channel Sync</small>
                            <strong>Update a spec once and publish it to all dealer networks.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Specifier Friendly</small>
                            <strong>Built for how architects and engineers actually research products.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Material Catalogues are necessary</p>
                        <p>When buyers abandon your site because they can't find the exact fire-rating spec they need.</p>
                        <a className="btn" href="#contact">Improve Discovery <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Generic eCommerce templates destroy material and hardware sales.</h2>
                        <p>If you are trying to sell commercial flooring, structural steel, or electrical components using a template designed for t-shirts, you are losing bids. Specifiers and engineers require deep technical data, specialized filtering, and instant access to compliance documents.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Inadequate Filtering</h3>
                                <p>Standard systems can't handle complex hierarchies like thickness, tensile strength, and finish combinations simultaneously.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Trapped Specifications</h3>
                                <p>Critical technical data is locked inside static PDF cut sheets, making it impossible for buyers to search or compare products.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Asset Loading</h3>
                                <p>Pages crawl to a halt trying to load high-resolution material textures or interactive 3D component models.</p>
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
                                <h2>Headless Catalogue Architecture.</h2>
                            </div>
                            <p>We decouple your front-end from your backend databases, delivering blazing fast discovery experiences powered by enterprise-grade product information management (PIM).</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Data</span>
                                <h3>PIM & ERP Unification</h3>
                                <p>Structuring your raw material data in systems like Akeneo or inriver, ensuring technical attributes are clean, standardized, and searchable.</p>
                                <div className="deliverable-tags"><small>PIM</small><small>Taxonomy</small><small>Clean Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Discovery</span>
                                <h3>Advanced Faceted Search</h3>
                                <p>Implementing Algolia or Elasticsearch to allow engineers to drill down into 100,000+ SKUs using dozens of complex, overlapping technical filters.</p>
                                <div className="deliverable-tags"><small>Search</small><small>Algolia</small><small>Facets</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Media</span>
                                <h3>BIM/CAD & Document Serving</h3>
                                <p>Building dedicated asset architecture to seamlessly deliver heavy CAD files, Revit families, and Safety Data Sheets (SDS) at scale.</p>
                                <div className="deliverable-tags"><small>BIM</small><small>CAD</small><small>Assets</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · UI/UX</span>
                                <h3>Specifier-Focused Interfaces</h3>
                                <p>Designing technical product pages that prioritize specs, comparison tables, and quick-add bulk ordering tools rather than standard consumer carts.</p>
                                <div className="deliverable-tags"><small>B2B UX</small><small>Comparisons</small><small>Bulk</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Catalogue Build</p>
                            <h2>Digitizing 40,000 architectural surfaces.</h2>
                        </div>
                        <p>See how we built a unified material discovery platform for a commercial surfacing manufacturer.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Material Catalogues</span>
                                <span>Next.js Architecture</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>High-Res Asset Library</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Building Materials Manufacturer</p>
                                <h2>Winning the architect's spec.</h2>
                                <p>A leading manufacturer of commercial laminates and surfaces was losing bids because architects couldn't easily filter their catalogue by fire rating and environmental certifications to include in their project specs.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Their legacy site relied on a monolithic CMS that couldn't handle relational filtering across 40,000 color, finish, and substrate combinations.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We migrated their data to a structured PIM and built a headless Next.js frontend with sub-second Algolia search, allowing architects to filter by exact technical requirements.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Search abandonment dropped by 72%. The manufacturer saw a 40% increase in product spec downloads, directly leading to inclusion in major commercial bids.</strong></div>
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
                        <h2 id="faq-title">Common questions about Material Catalogues.</h2>
                        <p>Answers covering data structure, BIM integrations, and performance.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex material variants?</summary>
                            <p>We use a parent/child data structure in a PIM. The parent holds the general product description, while the children hold the specific SKUs (e.g., 2mm vs 4mm thickness). This keeps the frontend clean while allowing precise filtering.</p>
                        </details>
                        <details>
                            <summary>Can architects download BIM/Revit files directly?</summary>
                            <p>Yes. We can integrate cloud storage buckets directly into the product page UI, allowing users to download heavy technical assets (BIM, CAD, high-res texture maps) without slowing down the initial page load.</p>
                        </details>
                        <details>
                            <summary>Does this replace our printed catalogues?</summary>
                            <p>It doesn't have to, but it makes them easier to produce. A centralized digital catalogue can actually export formatted data (via APIs or InDesign plugins) to automatically generate your printed material sheets, ensuring consistency.</p>
                        </details>
                        <details>
                            <summary>Will this help us rank on Google?</summary>
                            <p>Significantly. Headless architecture generates incredibly fast page load speeds. Furthermore, by pulling technical specs out of PDFs and rendering them as HTML text, Google can finally index your specific material attributes.</p>
                        </details>
                        <details>
                            <summary>Can you integrate real-time inventory from our ERP?</summary>
                            <p>Yes. The catalogue frontend can query your ERP (SAP, NetSuite) via API to show real-time stock levels or estimated lead times for specific materials before a buyer places an order.</p>
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
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Discovery</small><h3>Specifier Tools</h3><p>Build visual configurators and calculators for architects.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Samples & Quotes</h3><p>Digitize the process of ordering material samples and RFQs.</p></div><b>Explore quotes ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Organize your materials. <br />Win the spec. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a digital catalogue that architects and engineers actually enjoy using? Let's discuss your product data.</p>
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
