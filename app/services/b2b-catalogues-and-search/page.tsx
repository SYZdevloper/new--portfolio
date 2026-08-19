import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/b2b-catalogues-and-search/" },
  title: "B2B Catalogues & Search | Hyperlink Tech Solutions",
  description: "We design high-performance B2B catalogues capable of indexing hundreds of thousands of SKUs, empowering procurement teams to find exact parts instantly via faceted search and cross-referencing.",
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
                        <div className="hero-status">B2B Catalogues</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Advanced search for massive B2B catalogues.</h1>
                        <p className="hero-lead">We design high-performance B2B catalogues capable of indexing hundreds of thousands of SKUs, empowering procurement teams to find exact parts instantly via faceted search and cross-referencing.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Lightning-fast search engines (Algolia/Elasticsearch) built for huge datasets</li>
                            <li>Competitor cross-referencing and exact part-number matching</li>
                            <li>Advanced technical faceting allowing filtering by dimensions, material, or compliance</li>
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
                            <small>01 · Instant Results</small>
                            <strong>Sub-second search results across 500,000+ SKUs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accurate Cross-Ref</small>
                            <strong>Allow buyers to search a competitor's SKU and find your equivalent.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Technical Filtering</small>
                            <strong>Drill down by highly specific technical attributes (e.g., thread pitch, voltage).</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High ROI</small>
                            <strong>When B2B buyers find the exact part faster, conversion rates skyrocket.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When procurement is difficult</p>
                        <p>B2B buyers know exactly what they want; don't make them dig for it.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor search destroys B2B sales volume.</h2>
                        <p>B2B buyers aren't browsing for fun; they are executing a job. If they paste a specific manufacturer part number into your search bar and get zero results, or if they have to navigate through 12 clunky categories to find a widget, they will buy from a competitor whose site is easier to use.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Search Failures</h3>
                                <p>Your current eCommerce platform chokes when searching through hundreds of thousands of SKUs, causing page timeouts.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rigid Querying</h3>
                                <p>If a buyer searches for a SKU but misses a single hyphen, the site returns '0 Results' instead of the correct product.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Data Structure</h3>
                                <p>Buyers cannot filter products by the technical specifications they actually care about (size, material, rating).</p>
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
                                <h2>Search engines for scale.</h2>
                            </div>
                            <p>We engineer headless catalogues prioritizing speed, typo-tolerance, and deep technical filtering.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Enterprise Search Integration</h3>
                                <p>Implementing Algolia or Elasticsearch to handle massive, complex product indexes with instant response times.</p>
                                <div className="deliverable-tags"><small>Search</small><small>APIs</small><small>Performance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Cross-Reference Logic</h3>
                                <p>Building databases that map competitor SKUs or generic industry codes to your specific internal part numbers.</p>
                                <div className="deliverable-tags"><small>Data</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Headless Frontend Architecture</h3>
                                <p>Using Next.js to deliver lightning-fast, SEO-optimized catalogue pages that don't rely on a slow monolithic backend.</p>
                                <div className="deliverable-tags"><small>React</small><small>Next.js</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>PIM Syndication</h3>
                                <p>Connecting the frontend directly to your Product Information Management system (Akeneo, Inriver) to ensure data accuracy.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>PIM</small><small>Data</small></div>
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
