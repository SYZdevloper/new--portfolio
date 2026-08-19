import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/accounts-pricing-and-quotations/" },
  title: "Accounts, Pricing & Quotations | Hyperlink Tech Solutions",
  description: "We build secure portals that integrate directly with your ERP, ensuring logged-in customers see their exact negotiated tier pricing, volume breaks, and digital RFQ workflows.",
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
                        <div className="hero-status">Pricing & RFQs</div>
                        <p className="eyebrow">B2B Commerce</p>
                        <h1 id="service-title">Digitize complex B2B pricing and quotes.</h1>
                        <p className="hero-lead">We build secure portals that integrate directly with your ERP, ensuring logged-in customers see their exact negotiated tier pricing, volume breaks, and digital RFQ workflows.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Real-time ERP integration to display customer-specific contract pricing automatically</li>
                            <li>Dynamic volume discount tables encouraging higher Average Order Value (AOV)</li>
                            <li>Digital Request For Quote (RFQ) workflows replacing messy email threads</li>
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
                            <small>01 · Contract Accuracy</small>
                            <strong>Eliminate pricing disputes by showing the exact ERP contract price.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Quotes</small>
                            <strong>Turn cart contents into a formal PDF quote with one click.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Sales Efficiency</small>
                            <strong>Reps can build and send digital quotes on behalf of the customer.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Punchout Ready</small>
                            <strong>Integrate pricing directly into your clients' eProcurement systems.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When B2B pricing is manual</p>
                        <p>Relying on sales reps to quote every bulk order creates a massive bottleneck.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Opaque pricing stops B2B buyers from self-serving.</h2>
                        <p>Wholesale distribution runs on relationship pricing. If a loyal customer logs into your portal but only sees retail pricing, they won't buy. If they have to call a sales rep to confirm their specific discount tier, your customer service team becomes an expensive bottleneck to revenue.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Incorrect Pricing</h3>
                                <p>Standard eCommerce platforms can't handle the complexity of the 50 different pricing matrices stored in your ERP.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Quoting Chaos</h3>
                                <p>Procurement teams request quotes via email, leading to lost threads, delayed responses, and lost sales.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Intervention</h3>
                                <p>Your team spends hours manually re-keying web orders into the ERP because the pricing didn't match the contract.</p>
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
                                <h2>Intelligent B2B commerce logic.</h2>
                            </div>
                            <p>We engineer systems that understand and automate the complex realities of wholesale pricing.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>ERP Pricing Middleware</h3>
                                <p>Secure API layers (Node.js) that query your legacy ERP (SAP, Epicor) in real-time to fetch the exact price for the authenticated user.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital RFQ Portals</h3>
                                <p>Custom interfaces where buyers can submit complex carts for pricing review, and sales reps can approve them digitally.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>UX</small><small>Sales</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Sales Rep Impersonation</h3>
                                <p>Features allowing your sales team to log in 'as the customer' to build carts and verify pricing on their behalf.</p>
                                <div className="deliverable-tags"><small>Auth</small><small>Sales</small><small>Support</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Tiered Volume Calculators</h3>
                                <p>Dynamic UI elements that clearly show buyers how much they will save if they order the next pallet size up.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured B2B Platform</p>
                            <h2>Modernizing wholesale distribution.</h2>
                        </div>
                        <p>See how we helped a national industrial distributor migrate from a legacy AS400 system to a modern headless B2B portal, allowing procurement teams to quick-order thousands of SKUs via CSV upload while retaining exact contract pricing.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>B2B Tech</span>
                                <span>Wholesale & Distribution</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/b2b-distribution-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Speed and scale for B2B buyers.</h2>
                                <p>We developed a custom ordering engine that integrates directly with their ERP, providing real-time visibility into complex freight calculations, warehouse inventory, and automated account-level volume discounts.</p>
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
                        <h2 id="faq-title">Common questions about B2B distribution tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle customer-specific tier pricing?</summary>
                            <p>We build secure API middleware that connects the frontend portal directly to your ERP (like SAP, NetSuite, or Epicor). When a B2B user logs in, the pricing engine queries the ERP in real-time to display their exact negotiated rate and volume discounts.</p>
                        </details>
                        <details>
                            <summary>Can you support massive catalogues with hundreds of thousands of SKUs?</summary>
                            <p>Yes. We use headless architecture and enterprise search tools like Algolia or Elasticsearch. This allows buyers to search massive databases instantly by part number, competitor cross-reference, or complex technical facets without slowing down the site.</p>
                        </details>
                        <details>
                            <summary>Do you support punchout catalogs (cXML/OCI)?</summary>
                            <p>Yes. We can integrate your B2B commerce platform with major eProcurement systems (like Ariba, Coupa, or Jaggaer) so your enterprise clients can shop your site directly from within their own purchasing software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other distribution capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/b2b-catalogues-and-search/"><div><small>Discovery</small><h3>Catalogues & Search</h3><p>Find exact parts instantly.</p></div><b>Explore search ↗</b></a>
                        <a className="related-card" href="/services/accounts-pricing-and-quotations/"><div><small>Commerce</small><h3>Pricing & Quotes</h3><p>Digitize complex B2B pricing.</p></div><b>Explore pricing ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-replenishment/"><div><small>Operations</small><h3>Quick Ordering</h3><p>Streamline bulk restocks.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/customer-and-delivery-portals/"><div><small>Post-Purchase</small><h3>Delivery Portals</h3><p>Self-serve B2B tools.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your B2B wholesale <br />and distribution operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From lightning-fast search for massive catalogues to complex ERP pricing integrations and quick-order portals, we build software that drives B2B volume.</p>
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
