import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/component-and-application-catalogues/" },
  title: "Component & Application Catalogues | Hyperlink Tech Solutions",
  description: "Build robust digital catalogues with parametric search, advanced filtering, and technical documentation for complex engineering components.",
};

export default function ComponentAndApplicationCatalogues() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/",
          "name": "Component & Application Catalogues | Hyperlink Tech Solutions",
          "description": "Build robust digital catalogues with parametric search, advanced filtering, and technical documentation for complex engineering components.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/#service",
          "name": "Component & Application Catalogues",
          "serviceType": "Digital Engineering Platforms",
          "url": "https://hyperlinktechsolutions.com/services/component-and-application-catalogues/",
          "description": "Build robust digital catalogues with parametric search, advanced filtering, and technical documentation for complex engineering components.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, distributors, and engineering firms"
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
                    <strong>Component Catalogues</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering Discovery Platforms</div>
                        <p className="eyebrow">Component & Application Catalogues</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Make complex products <em class="accent-text">easy to specify.</em>' }}></h1>
                        <p className="hero-lead">We design and engineer powerful digital catalogues that allow engineers and procurement teams to quickly find, configure, and specify your highly technical components and systems.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Implement lightning-fast parametric search across millions of SKUs</li>
                            <li>Integrate interactive 3D CAD models and technical spec sheets</li>
                            <li>Map complex product relationships and application compatibility</li>
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
                            <small>01 · Parametric Search</small>
                            <strong>Filter by voltage, tolerance, material, or dimensional specs instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Technical Assets</small>
                            <strong>Centralize CAD files, datasheets, and compliance certificates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Cross-Referencing</small>
                            <strong>Map competitor parts to your equivalent components seamlessly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Global Scalability</small>
                            <strong>Manage multi-language, multi-region product data from one PIM.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When an upgrade is necessary</p>
                        <p>If engineers can't confidently identify the right part within two minutes, they will specify a competitor's product.</p>
                        <a className="btn" href="#contact">Discuss Your Data <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Standard e-commerce platforms can't handle engineering complexity.</h2>
                        <p>Traditional B2B shopping carts are designed for t-shirts and office supplies, not industrial valves or microcontrollers with 50 different technical attributes and compatibility requirements.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Silos</h3>
                                <p>Your product specs are trapped in legacy ERPs or PDFs, making it impossible to build a modern, searchable web experience.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Frustrating Search</h3>
                                <p>Customers have to know exact part numbers because your search engine cannot interpret technical ranges or synonyms.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Specification Drop-off</h3>
                                <p>Engineers abandon the site because downloading accurate CAD models or compliance documentation is too difficult.</p>
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
                                <h2>High-performance catalogues built for technical buyers.</h2>
                            </div>
                            <p>We architect robust data structures and lightning-fast search interfaces to modernize your entire product discovery experience.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>PIM & ERP Integration</h3>
                                <p>Structuring your raw technical data and integrating modern Product Information Management (PIM) systems.</p>
                                <div className="deliverable-tags"><small>PIM</small><small>Data Modeling</small><small>API</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Interface</span>
                                <h3>Parametric Discovery</h3>
                                <p>Building faceted search interfaces that allow engineers to drill down using exact technical attributes and ranges.</p>
                                <div className="deliverable-tags"><small>Search</small><small>Elasticsearch</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Assets</span>
                                <h3>Rich Media & CAD</h3>
                                <p>Implementing 3D viewers and automated document generation for spec sheets and compliance certificates.</p>
                                <div className="deliverable-tags"><small>3D Models</small><small>PDF Gen</small><small>Assets</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Global Edge Delivery</h3>
                                <p>Deploying headless architectures that ensure your catalogue loads instantly for customers worldwide, regardless of scale.</p>
                                <div className="deliverable-tags"><small>Headless</small><small>Edge Compute</small><small>Speed</small></div>
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
                            <h2>Transforming legacy PDFs into an interactive component database.</h2>
                        </div>
                        <p>See how we helped a global electronics manufacturer digitize 500,000 SKUs and reduce specification errors by 80%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Catalogue Engineering</span>
                                <span>Algolia + Headless CMS</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Component Discovery Platform</p>
                                <h2>A clearer journey from technical specs to exact parts.</h2>
                                <p>Engineers were spending hours digging through 1,000-page PDF catalogues to find the right resistors and capacitors. If they couldn't find it quickly, they bought from a competitor.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Users needed to filter by exact tolerances, voltages, and package sizes across hundreds of thousands of disconnected products.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a massive, structured PIM and implemented an ultra-fast parametric search interface. Products were prioritized by availability, followed by deep technical attributes.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Engineers can now narrow down 500,000 components to the exact 3 they need in under 2 seconds, with instant CAD downloads.</strong></div>
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
                        <h2 id="faq-title">What engineering teams ask before starting a catalogue project.</h2>
                        <p>Answers covering data migration, search technology, and integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle millions of SKUs?</summary>
                            <p>We utilize enterprise-grade search engines like Elasticsearch or Algolia paired with robust headless architectures. This ensures sub-second response times even when filtering through millions of complex product variations.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our legacy ERP?</summary>
                            <p>Yes. We build middleware layers to securely sync pricing, inventory, and product data from older on-premise systems (like SAP or JD Edwards) to the modern web catalogue.</p>
                        </details>
                        <details>
                            <summary>What if our product data is currently a mess?</summary>
                            <p>Data normalization is often the first step. We help structure your taxonomy, clean up inconsistent attributes, and establish a centralized PIM (Product Information Management) system as a single source of truth.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your catalogue with the engineering workflows required to convert.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/ecommerce-development/"><div><small>Commerce</small><h3>B2B E-commerce</h3><p>Design complex checkout flows for POs and volume pricing.</p></div><b>Explore commerce ↗</b></a>
                        <a className="related-card" href="/services/rfq-and-engineering-collaboration/"><div><small>Quoting</small><h3>RFQ Workflows</h3><p>Streamline the quoting process for custom component variants.</p></div><b>Explore quoting ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Sync inventory and pricing directly from your ERP.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Design</small><h3>Design Systems</h3><p>Create reusable UI components for massive technical platforms.</p></div><b>Explore systems ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Plan your digital catalogue <br />product experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to make your complex components incredibly easy for engineers to specify? Let's discuss your data architecture.</p>
                        <a className="btn" href="#contact">Discuss Your Data <span className="arrow">↗</span></a>
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
