import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/dealer-and-commerce-workflows/" },
  title: "Dealer & Commerce Workflows | Hyperlink Tech Solutions",
  description: "We engineer complex B2B e-commerce platforms and dealer ordering portals that handle early-order programs, variable pricing, and bulk logistics.",
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
                        <h1 id="service-title">Digitize the agricultural supply chain.</h1>
                        <p className="hero-lead">We engineer complex B2B e-commerce platforms and dealer ordering portals that handle early-order programs, variable pricing, and bulk logistics.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom B2B e-commerce engines designed for the complexities of agricultural inputs</li>
                            <li>Automated Early Order Program (EOP) logic, calculating complex tiered discounts and rebates</li>
                            <li>Seamless integration with legacy ERP systems (SAP, JD Edwards, NetSuite)</li>
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
                            <small>01 · Automated Rebates</small>
                            <strong>Eliminate the manual calculation of complex dealer rebate programs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Inventory Visibility</small>
                            <strong>Dealers can see live warehouse stock before placing massive seed or chem orders.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Ordering</small>
                            <strong>Replace faxed and emailed purchase orders with a streamlined digital cart.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Accurate Pricing</small>
                            <strong>Ensure every dealer sees their exact contractual pricing tier.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B ordering is manual</p>
                        <p>Processing million-dollar seed orders via email attachments is slowing you down.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Complex pricing structures break standard e-commerce.</h2>
                        <p>Agricultural supply chains are notoriously complex. Standard Shopify or Magento stores cannot handle the reality of the Ag sector: dealer-specific pricing tiers, complex volume rebates, hazardous goods logistics, and Early Order Programs. When ordering is manual, your customer service team becomes an expensive bottleneck.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Order Entry Errors</h3>
                                <p>A customer service rep miskeys a chemical order from an email, resulting in the wrong pallet being shipped during a critical planting window.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rebate Confusion</h3>
                                <p>Dealers constantly call to check their rebate status because they can't track it themselves.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Stockouts</h3>
                                <p>Dealers place orders blindly without knowing if the product is actually in the warehouse, leading to backorder frustration.</p>
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
                            <p>We build bespoke ordering platforms that understand the specific business logic of agribusiness.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Pricing Engines</h3>
                                <p>Logic layers that query the ERP in real-time to display the correct price based on the logged-in dealer's tier and current promotions.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Early Order Program (EOP) Workflows</h3>
                                <p>Dedicated interfaces for dealers to plan and commit to their seasonal purchases, with visual trackers for rebate thresholds.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>B2B</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>ERP Middleware</h3>
                                <p>Secure Node.js translation layers that securely read/write orders directly into SAP or JD Edwards without exposing the core database.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Node.js</small><small>ERP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Bulk Logistics Calculators</h3>
                                <p>Checkout logic that automatically calculates shipping constraints for pallets, IBCs (shuttles), and hazardous chemicals.</p>
                                <div className="deliverable-tags"><small>Logistics</small><small>Math</small><small>Cart</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured AgTech Platform</p>
                            <h2>Digitizing the growing season.</h2>
                        </div>
                        <p>See how we helped a global crop-protection manufacturer build an offline-first scouting app for their agronomists, instantly syncing paddock data to a centralized dealer ordering portal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>AgTech</span>
                                <span>B2B Commerce & Field Mobility</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/agtech-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From soil to supply chain.</h2>
                                <p>We developed a custom ecosystem that connects field observations directly to dealer inventory systems, ensuring that farmers get the exact chemical prescriptions they need, exactly when they need them.</p>
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
                        <h2 id="faq-title">Common questions about agriculture tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when agronomists are in cellular dead zones?</summary>
                            <p>We build 'Offline-First' applications (using IndexedDB or SQLite for mobile). An agronomist can log weed pressure, take photos, and write a spray recommendation entirely offline. The app stores the data and automatically syncs it to the cloud when they drive back into town.</p>
                        </details>
                        <details>
                            <summary>Can you integrate B2B ordering portals with legacy ERPs like SAP or JD Edwards?</summary>
                            <p>Yes. Agricultural supply chains run on complex legacy ERPs. We build secure API middleware layers that sit between your modern dealer portal and your ERP, translating modern web requests into the specific formats your backend system requires without overloading it.</p>
                        </details>
                        <details>
                            <summary>How do you handle variable pricing for different dealer networks?</summary>
                            <p>We build custom logic engines into our B2B commerce platforms. When a dealer logs in, the platform calls an API to fetch their specific tier pricing, early-order program discounts, and current rebate status, ensuring they only see the pricing rules that apply to them.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other agricultural capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agricultural-product-platforms/"><div><small>Marketing</small><h3>Product Platforms</h3><p>Connect products with producers.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farmer-and-adviser-portals/"><div><small>Collaboration</small><h3>Grower Portals</h3><p>Digital hubs for agronomy and account management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-commerce-workflows/"><div><small>Supply Chain</small><h3>Commerce Workflows</h3><p>Digitize the agricultural supply chain.</p></div><b>Explore commerce ↗</b></a>
                        <a className="related-card" href="/services/field-data-and-service-workflows/"><div><small>Agronomy</small><h3>Field Data Workflows</h3><p>Capture data from the paddock, offline.</p></div><b>Explore field tools ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your agribusiness <br />and supply chain. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline scouting apps for agronomists to complex B2B dealer portals, we build software that drives efficiency across the agricultural sector.</p>
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
