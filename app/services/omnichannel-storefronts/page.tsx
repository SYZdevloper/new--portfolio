import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/omnichannel-storefronts/" },
  title: "Omnichannel Storefronts | Hyperlink Tech Solutions",
  description: "We design high-performance headless storefronts that seamlessly bridge the gap between online browsing and in-store shopping for modern retailers.",
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
                    <strong>Unified Commerce</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Storefronts</div>
                        <p className="eyebrow">Unified Commerce</p>
                        <h1 id="service-title">Connect the digital and physical aisle.</h1>
                        <p className="hero-lead">We design high-performance headless storefronts that seamlessly bridge the gap between online browsing and in-store shopping for modern retailers.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Ultra-fast page loads leveraging modern edge caching and Next.js architecture</li>
                            <li>Dynamic stock indicators showing live availability at local brick-and-mortar stores</li>
                            <li>Unified product discovery that accounts for both warehouse and store-level inventory</li>
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
                            <small>01 · Lightning Fast</small>
                            <strong>Sub-second load times that keep mobile shoppers engaged.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Local Context</small>
                            <strong>Show users what is available right now in their city.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks higher in search engines for local retail intent.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Headless Agility</small>
                            <strong>Update content independently of the complex backend inventory platform.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When channels are siloed</p>
                        <p>Customers don't care about your internal systems; they just want to buy.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disconnected storefronts frustrate local shoppers.</h2>
                        <p>If your website operates completely separately from your physical stores, you are losing sales. When a customer finds a product online but can't see if it's in stock at their local mall, they will often abandon the purchase rather than risk a wasted trip.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Inventory Blind Spots</h3>
                                <p>The website only shows warehouse stock, hiding thousands of units sitting on retail shelves.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Mobile Experience</h3>
                                <p>Customers standing in your store try to look up product reviews on your site, but it's too slow to load.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Branding</h3>
                                <p>The digital storefront looks and feels completely different from the physical in-store experience.</p>
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
                                <h2>Next-generation retail experiences.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize speed, aesthetics, and true omnichannel integration.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Shopify Plus or commercetools, built specifically for speed and flexibility.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Live Local Inventory</h3>
                                <p>Custom integrations that ping the POS system to display 'Only 2 left at [Local Store]' directly on the product page.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>UX</small><small>Integration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Advanced Search Integration</h3>
                                <p>Algolia or Typesense implementation for instant, faceted search results prioritizing local availability.</p>
                                <div className="deliverable-tags"><small>Search</small><small>UX</small><small>Discovery</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CMS Integration</h3>
                                <p>Sanity or Contentful setups allowing marketing teams to push campaigns to digital screens in-store and the website simultaneously.</p>
                                <div className="deliverable-tags"><small>CMS</small><small>Agility</small><small>Content</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Omnichannel Platform</p>
                            <h2>Unifying the retail experience.</h2>
                        </div>
                        <p>See how we helped a national fashion retailer bridge the gap between their Shopify Plus storefront and their brick-and-mortar POS system, enabling true click-and-collect functionality and unified loyalty points.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Omnichannel Tech</span>
                                <span>POS & Web Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/omnichannel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From online cart to in-store pickup.</h2>
                                <p>We developed a custom integration layer that syncs live physical store inventory to the web frontend, allowing customers to accurately check local stock, buy online, and pick up in-store within 2 hours.</p>
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
                        <h2 id="faq-title">Common questions about omnichannel retail tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle 'Buy Online, Pick Up In Store' (BOPIS) inventory sync?</summary>
                            <p>We build secure API middleware that connects your eCommerce platform to your physical Point of Sale (POS) system. This ensures that when a customer looks at a product online, they see exactly how many units are sitting on the shelf at their nearest physical store.</p>
                        </details>
                        <details>
                            <summary>Can loyalty points be earned and spent across both channels?</summary>
                            <p>Yes. We integrate unified loyalty management platforms that act as a single source of truth. If a customer buys a shirt in-store, the points instantly reflect in their digital wallet, and they can use those points during their next online checkout.</p>
                        </details>
                        <details>
                            <summary>Can you build custom store appointment booking systems?</summary>
                            <p>Absolutely. We build headless booking engines that allow customers to reserve specific services (like personal styling or equipment fitting) at specific physical locations, syncing directly with store staff calendars.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other retail capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/omnichannel-storefronts/"><div><small>Commerce</small><h3>Storefronts</h3><p>Connect the digital and physical aisle.</p></div><b>Explore storefronts ↗</b></a>
                        <a className="related-card" href="/services/pickup-delivery-and-returns/"><div><small>Fulfillment</small><h3>Pickup & Delivery</h3><p>Frictionless omnichannel logistics.</p></div><b>Explore fulfillment ↗</b></a>
                        <a className="related-card" href="/services/store-locator-and-appointments/"><div><small>Engagement</small><h3>Store Locator</h3><p>Drive foot traffic digitally.</p></div><b>Explore locators ↗</b></a>
                        <a className="related-card" href="/services/customer-accounts-and-loyalty/"><div><small>Retention</small><h3>Accounts & Loyalty</h3><p>Build unified customer relationships.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your omnichannel <br />retail operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From seamless BOPIS (Buy Online Pick Up In Store) workflows to unified POS loyalty integrations, we build software that drives growth across every retail channel.</p>
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
