import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/product-information-and-assets/" },
  title: "Product Information & Assets | Hyperlink Tech Solutions",
  description: "We build centralized digital asset management (DAM) and PIM integrations to ensure your product copy, pack shots, and technical data are consistent across every global retailer.",
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
                    <strong>Data Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Product Data</div>
                        <p className="eyebrow">Data Management</p>
                        <h1 id="service-title">A single source of truth for your products.</h1>
                        <p className="hero-lead">We build centralized digital asset management (DAM) and PIM integrations to ensure your product copy, pack shots, and technical data are consistent across every global retailer.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integration with enterprise PIM systems (Akeneo, Salsify, Inriver) to centralize product data</li>
                            <li>Automated syndication of accurate product copy and imagery to major retail partners (Amazon, Walmart)</li>
                            <li>Headless CMS setups that dynamically pull live PIM data onto your brand website</li>
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
                            <small>01 · Brand Consistency</small>
                            <strong>Ensure the exact same product description appears on your site and your retailers' sites.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Time to Market</small>
                            <strong>Launch new products globally without manually updating spreadsheets for weeks.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Error Reduction</small>
                            <strong>Eliminate embarrassing typos and incorrect technical specs across sales channels.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Assets</small>
                            <strong>Link high-res pack shots directly to the product SKU in a single database.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When product data is fragmented</p>
                        <p>If your product data lives in spreadsheets, your brand is inconsistent.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Siloed information delays global product launches.</h2>
                        <p>Consumer brands often manage thousands of SKUs across multiple regions. If product descriptions are in a Word doc, dimensions are in an ERP, and images are in a Dropbox folder, launching a new product requires massive manual effort. This fragmentation leads to incorrect information appearing on major retail sites.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Retailer Penalties</h3>
                                <p>Major retailers (like Amazon) suppress your listings because the provided product data is incomplete or improperly formatted.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Inconsistent Branding</h3>
                                <p>A key product is advertised with a new feature on your D2C site, but the old description is still live on a wholesale partner's site.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Data Entry</h3>
                                <p>Your eCommerce team spends weeks copying and pasting data from spreadsheets into Shopify for every new season drop.</p>
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
                                <h2>Master data architecture.</h2>
                            </div>
                            <p>We engineer systems that establish a single, unbreakable source of truth for your entire product catalog.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>PIM Implementation & Integration</h3>
                                <p>Connecting specialized Product Information Management systems to your D2C frontend and B2B portals.</p>
                                <div className="deliverable-tags"><small>PIM</small><small>Data</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Automated Channel Syndication</h3>
                                <p>Building API pipelines that format and push your product data out to specific retailer requirements automatically.</p>
                                <div className="deliverable-tags"><small>Syndication</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>DAM Integration</h3>
                                <p>Connecting your Digital Asset Management system so that pack shots are automatically linked to their corresponding SKUs.</p>
                                <div className="deliverable-tags"><small>DAM</small><small>Media</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Regional Data Localization</h3>
                                <p>Structuring the database to manage complex parent-child relationships for regional translations and market-specific compliance.</p>
                                <div className="deliverable-tags"><small>Data</small><small>Localization</small><small>Structure</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Consumer Brand Platform</p>
                            <h2>Unifying wholesale and D2C.</h2>
                        </div>
                        <p>See how we helped a global consumer goods brand launch a headless product experience that serves millions of D2C shoppers while simultaneously powering a secure portal for their massive retail distribution network.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Brand Tech</span>
                                <span>B2B & D2C Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/brand-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>A single source of product truth.</h2>
                                <p>We developed a custom architecture connected to their PIM that ensures every product launch features perfectly synced marketing copy, high-res assets, and pricing, whether the user is a retail buyer or an end consumer.</p>
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
                        <h2 id="faq-title">Common questions about consumer brand tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive traffic spikes during product launches?</summary>
                            <p>We build Campaign & Launch experiences using static site generation (SSG) via Next.js and host them on global edge networks (like Vercel). This ensures the site remains lightning-fast even when millions of users hit it simultaneously during a drop.</p>
                        </details>
                        <details>
                            <summary>Can you integrate a B2B wholesale portal with our existing ERP?</summary>
                            <p>Yes. We build custom API middleware that allows your Retailer Portals to talk directly to legacy ERPs (like SAP or NetSuite), ensuring that wholesale customers see their specific contract pricing and live inventory without manual data entry.</p>
                        </details>
                        <details>
                            <summary>What is a PIM and why do we need one?</summary>
                            <p>A Product Information Management (PIM) system acts as the central brain for your product data. We integrate your website with your PIM so that when marketing updates a product description or pack shot, it automatically updates on your D2C site, your B2B portal, and your retailer feeds.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other consumer brand capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-and-product-websites/"><div><small>Brand Experience</small><h3>Brand Websites</h3><p>Immersive digital brand homes.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/campaign-and-launch-experiences/"><div><small>Activations</small><h3>Campaigns & Launches</h3><p>High-impact product drops.</p></div><b>Explore campaigns ↗</b></a>
                        <a className="related-card" href="/services/retailer-and-distributor-portals/"><div><small>B2B Commerce</small><h3>Retailer Portals</h3><p>Empower your wholesale channel.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/product-information-and-assets/"><div><small>Data</small><h3>Product Information</h3><p>A single source of truth.</p></div><b>Explore PIM ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your consumer brand <br />and wholesale operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-traffic product launches to complex B2B distributor portals and PIM integrations, we build software that drives growth across your entire channel ecosystem.</p>
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
