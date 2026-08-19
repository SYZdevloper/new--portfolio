import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-and-material-catalogues/" },
  title: "Product & Material Catalogues | Hyperlink Tech Solutions",
  description: "We design high-performance product catalogues for building material manufacturers, enabling architects and builders to easily find technical data, warranties, and installation guides.",
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
                    <strong>Product Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Material Catalogues</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Showcase materials and technical specifications.</h1>
                        <p className="hero-lead">We design high-performance product catalogues for building material manufacturers, enabling architects and builders to easily find technical data, warranties, and installation guides.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Advanced taxonomy and filtering for complex product lines (colors, finishes, dimensions)</li>
                            <li>Dynamic linkage between base products and required installation accessories</li>
                            <li>High-performance architecture optimized for architects browsing massive visual assets</li>
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
                            <small>01 · Technical Clarity</small>
                            <strong>Easily display fire ratings, acoustic data, and sustainability metrics.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Advanced Filtering</small>
                            <strong>Builders can search by application, material type, or compliance standard.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimization</small>
                            <strong>Capture organic search intent for specific building materials.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Single Source of Truth</small>
                            <strong>Centralize product data by integrating with your existing PIM.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When technical data is buried</p>
                        <p>Architects won't wait days for a sales rep to email a product spec sheet.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Hard-to-find information loses commercial specifications.</h2>
                        <p>Building materials are highly technical. Whether an architect is looking for the fire rating of cladding or a builder needs an installation manual for roofing, they need instant access. If your website is just a list of disorganized PDFs, they will specify a competitor with better digital tools.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>PDF Graveyards</h3>
                                <p>Your product data is locked inside hundreds of outdated PDFs that cannot be searched or filtered by specifiers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Inconsistent Data</h3>
                                <p>The marketing website shows different product specifications than the internal ERP system or printed brochures.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Searchability</h3>
                                <p>Customers cannot easily find products using industry-standard identifiers or specific project applications.</p>
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
                                <h2>Digital foundations for manufacturers.</h2>
                            </div>
                            <p>We build platforms that put critical technical information at the fingertips of the construction industry.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless CMS Architecture</h3>
                                <p>Implementations using Sanity or Contentful, allowing your technical team to structure complex parent-child SKU relationships.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Data</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Advanced Search Interfaces</h3>
                                <p>Algolia or Elasticsearch integrations allowing lightning-fast filtering by properties, applications, and regulatory compliance.</p>
                                <div className="deliverable-tags"><small>Search</small><small>React</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>PIM Integrations</h3>
                                <p>Secure middleware that syncs your website catalogue directly with your Product Information Management (PIM) system.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Data</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Dynamic Spec Sheets</h3>
                                <p>React components that dynamically generate printable technical data sheets (TDS) based on the exact product variant selected.</p>
                                <div className="deliverable-tags"><small>React</small><small>PDFs</small><small>Formatting</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Materials Platform</p>
                            <h2>Digitizing the specification lifecycle.</h2>
                        </div>
                        <p>See how we helped a national building materials manufacturer build a headless product platform that connects digital CAD libraries directly to architect sample requests and distributor inventory.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Manufacturing Tech</span>
                                <span>B2B Commerce & Specification</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/materials-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From architectural concept to site delivery.</h2>
                                <p>We developed a custom portal that allows architects to download BIM files and request physical samples, while seamlessly routing the resulting commercial quotes to the nearest authorized dealer based on real-time ERP inventory.</p>
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
                        <h2 id="faq-title">Common questions about building materials tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex product variations (colours, sizes, finishes)?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity or integrated PIMs) that manage complex parent-child SKU relationships. This allows a user to view a 'product line' and then filter dynamically by specific finish or dimension without navigating through hundreds of separate pages.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy manufacturing ERPs?</summary>
                            <p>Yes. We build secure API middleware layers that sit between your modern dealer portal and legacy ERPs (like SAP, JD Edwards, or Epicor). This translates modern web cart requests into the specific formats your backend system requires for order entry and inventory deduction.</p>
                        </details>
                        <details>
                            <summary>Do you host CAD and BIM files directly on the platform?</summary>
                            <p>Yes. We build dedicated architectural resource libraries where specifiers can easily filter and download Revit, SketchUp, and AutoCAD files. We can also track these downloads to generate high-intent leads for your commercial sales team.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other manufacturing capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-material-catalogues/"><div><small>Discovery</small><h3>Material Catalogues</h3><p>Showcase technical specifications.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/specifier-and-design-tools/"><div><small>Technical Sales</small><h3>Design Tools</h3><p>Help architects specify products.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/samples-quotes-and-projects/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the specification cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-distributor-portals/"><div><small>Commerce</small><h3>Dealer Portals</h3><p>Digitize bulk material ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your materials <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues for architects to B2B bulk ordering portals for dealers, we build software that drives efficiency across the construction supply chain.</p>
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
