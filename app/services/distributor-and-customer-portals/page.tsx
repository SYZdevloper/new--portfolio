import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/distributor-and-customer-portals/" },
  title: "Distributor & Customer Portals | Hyperlink Tech Solutions",
  description: "We build secure B2B portals where distributors can place bulk orders, track hazardous freight logistics, and download batch-specific quality documents.",
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
                        <div className="hero-status">Customer Portals</div>
                        <p className="eyebrow">B2B Commerce</p>
                        <h1 id="service-title">Digitize bulk chemical ordering.</h1>
                        <p className="hero-lead">We build secure B2B portals where distributors can place bulk orders, track hazardous freight logistics, and download batch-specific quality documents.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2B e-commerce engines designed for the complexities of bulk chemical inputs (totes, IBCs, tankers)</li>
                            <li>Automated logistics calculations for dangerous goods, compatibility rules, and freight surcharges</li>
                            <li>Seamless integration with legacy ERP systems (SAP, JD Edwards, NetSuite) for live pricing and inventory</li>
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
                            <strong>Customers can see live warehouse stock before placing bulk orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Ordering</small>
                            <strong>Replace faxed purchase orders with a streamlined digital cart.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Self-Serve Admin</small>
                            <strong>Customers can download invoices and CoAs without calling support.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B ordering is manual</p>
                        <p>Processing hazardous bulk orders via email attachments is slowing you down.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Complex pricing and hazmat rules break standard e-commerce.</h2>
                        <p>Chemical supply chains are notoriously complex. Standard Shopify or Magento stores cannot handle the reality of the sector: customer-specific pricing tiers, complex volume rebates, hazardous goods segregation, and bulk packaging rules. When ordering is manual, your customer service team becomes an expensive bottleneck.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Order Entry Errors</h3>
                                <p>A customer service rep miskeys a chemical grade from an email, resulting in the wrong formulation being shipped to a manufacturing plant.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Logistics Failures</h3>
                                <p>An order is accepted but later rejected by logistics because incompatible dangerous goods were placed on the same manifest.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Stockouts</h3>
                                <p>Distributors place orders blindly without knowing if the product is actually in the tank, leading to backorder frustration.</p>
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
                            <p>We build bespoke ordering platforms that understand the specific business logic of chemical manufacturing.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Pricing Engines</h3>
                                <p>Logic layers that query the ERP in real-time to display the correct price based on the logged-in customer's contract.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dangerous Goods Calculators</h3>
                                <p>Checkout logic that automatically checks UN numbers and packing groups to prevent incompatible shipping combinations.</p>
                                <div className="deliverable-tags"><small>Hazmat</small><small>Math</small><small>Cart</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>ERP Middleware</h3>
                                <p>Secure Node.js translation layers that securely read/write orders directly into SAP without exposing the core database.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Node.js</small><small>ERP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Self-Serve Dashboards</h3>
                                <p>React-based interfaces where users can view order history, track tanker deliveries, and download invoices.</p>
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
                            <p className="eyebrow">Featured Chemical Platform</p>
                            <h2>Digitizing bulk formulations.</h2>
                        </div>
                        <p>See how we helped a global specialty chemicals manufacturer build a headless product platform that automatically matches specific polymer formulations to regional SDS compliance requirements.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Chemical Tech</span>
                                <span>B2B Commerce & Compliance</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/chemical-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From laboratory to logistics.</h2>
                                <p>We developed a custom B2B portal that allows distributors to order bulk IBCs, track hazardous freight via IoT integrations, and instantly download batch-specific Certificates of Analysis (CoA) without calling customer service.</p>
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
                        <h2 id="faq-title">Common questions about chemical industry tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex regulatory and compliance data?</summary>
                            <p>We build structured databases (often via headless CMS like Sanity) that link products to specific regional regulations (REACH, EPA). This ensures that a technical buyer in Europe automatically sees the correct SDS and compliance documents for their jurisdiction.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP?</summary>
                            <p>Yes. Chemical supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern distributor portal and your ERP, translating modern web requests into the specific formats your backend system requires for order entry and inventory.</p>
                        </details>
                        <details>
                            <summary>How do you handle hazardous freight calculations?</summary>
                            <p>We build custom logic engines into the checkout process. The platform automatically checks UN numbers, packing groups, and dangerous goods classes, calculating specific hazmat freight surcharges and preventing incompatible chemicals from being placed on the same pallet.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other chemical capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/technical-product-catalogues/"><div><small>Discovery</small><h3>Technical Catalogues</h3><p>Structure complex chemical formulations.</p></div><b>Explore catalogues ↗</b></a>
                        <a className="related-card" href="/services/safety-and-technical-resources/"><div><small>Compliance</small><h3>Safety Resources</h3><p>Digital hubs for SDS and technical data.</p></div><b>Explore resources ↗</b></a>
                        <a className="related-card" href="/services/samples-and-technical-sales/"><div><small>Sales</small><h3>Sample Workflows</h3><p>Accelerate the technical sales cycle.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/distributor-and-customer-portals/"><div><small>Commerce</small><h3>Distributor Portals</h3><p>Digitize bulk chemical ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your chemical <br />and manufacturing operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From complex technical catalogues to B2B hazardous ordering portals, we build software that drives efficiency across the chemical supply chain.</p>
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
