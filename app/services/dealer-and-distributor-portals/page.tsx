import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/dealer-and-distributor-portals/" },
  title: "Dealer & Distributor Portals | Hyperlink Tech Solutions",
  description: "We build secure B2B portals where trade dealers and distributors can place bulk orders, check live warehouse inventory, and download customer-specific pricing matrices.",
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
                    <strong>B2B Commerce</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Dealer Portals</div>
                        <p className="eyebrow">B2B Commerce</p>
                        <h1 id="service-title">Digitize bulk material ordering.</h1>
                        <p className="hero-lead">We build secure B2B portals where trade dealers and distributors can place bulk orders, check live warehouse inventory, and download customer-specific pricing matrices.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2B e-commerce engines designed for the complexities of building materials (pallets, packs, linear meters)</li>
                            <li>Live integration with legacy ERP systems (SAP, JD Edwards, NetSuite) for real-time pricing and inventory</li>
                            <li>Self-serve administrative tools for dealers to download invoices, track freight, and manage credit limits</li>
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
                            <small>01 · Contract Pricing</small>
                            <strong>Ensure every distributor sees their exact negotiated tier pricing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Inventory Visibility</small>
                            <strong>Dealers can see live warehouse stock before placing massive bulk orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Ordering</small>
                            <strong>Replace faxed purchase orders with a streamlined digital cart.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Self-Serve Admin</small>
                            <strong>Dealers can download invoices and statements without calling support.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B ordering is manual</p>
                        <p>Processing massive commercial orders via email attachments is slowing you down.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Complex pricing and logistics rules break standard e-commerce.</h2>
                        <p>Building material supply chains are notoriously complex. Standard Shopify stores cannot handle the reality of the sector: customer-specific pricing tiers, complex volume rebates, pack-size rules (e.g., must order in pallets of 50), and variable freight based on massive weight. When ordering is manual, your customer service team becomes an expensive bottleneck.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Order Entry Errors</h3>
                                <p>A customer service rep miskeys a product code from an email, resulting in the wrong colored roofing being shipped to a site.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Freight Calculation Failures</h3>
                                <p>Standard carts can't calculate freight for three tons of bricks, meaning orders have to be processed offline.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Stockout Frustration</h3>
                                <p>Dealers place orders blindly without knowing if the product is actually in the warehouse, leading to backorders and angry builders.</p>
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
                                <h2>Custom B2B commerce engines.</h2>
                            </div>
                            <p>We build bespoke ordering platforms that understand the specific business logic of materials manufacturing.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Pricing Engines</h3>
                                <p>Logic layers that query the ERP in real-time to display the correct price based on the logged-in dealer's specific contract.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Complex Unit Conversions</h3>
                                <p>Checkout logic that automatically converts 'square meters' requested by the user into the 'pallets and packs' required by the warehouse.</p>
                                <div className="deliverable-tags"><small>Math</small><small>Cart</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>ERP Middleware</h3>
                                <p>Secure Node.js translation layers that securely read/write orders directly into SAP or Epicor without exposing the core database.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Node.js</small><small>ERP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Self-Serve Dashboards</h3>
                                <p>React-based interfaces where dealers can view order history, track flatbed deliveries, and download monthly statements.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Dashboards</small><small>React</small></div>
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
