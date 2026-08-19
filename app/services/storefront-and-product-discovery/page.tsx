import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/storefront-and-product-discovery/" },
  title: "Storefront & Product Discovery | Hyperlink Tech Solutions",
  description: "We design high-performance, headless storefronts that captivate customers and guide them seamlessly from inspiration to purchase.",
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
                        <div className="hero-status">Storefronts</div>
                        <p className="eyebrow">Product Discovery</p>
                        <h1 id="service-title">Engaging and fast product discovery.</h1>
                        <p className="hero-lead">We design high-performance, headless storefronts that captivate customers and guide them seamlessly from inspiration to purchase.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Ultra-fast page loads leveraging modern edge caching</li>
                            <li>Dynamic search and personalized product recommendations</li>
                            <li>Immersive rich media experiences (AR, 3D viewers)</li>
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
                            <strong>Sub-second load times that keep shoppers engaged.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Smart Search</small>
                            <strong>Typo-tolerant search that finds the right product every time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks higher in search engines.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Headless Agility</small>
                            <strong>Update content independently of the backend platform.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When discovery is slow</p>
                        <p>Customers won't wait for a slow catalogue to load.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor performance kills conversions.</h2>
                        <p>If your storefront is sluggish or search results are irrelevant, shoppers will bounce to a competitor. Legacy monolithic platforms often struggle to deliver the speed and agility required for modern digital commerce.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Load Times</h3>
                                <p>Heavy themes and plugins slow down your site, directly hurting conversion rates.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Frustrating Search</h3>
                                <p>Customers can't find what they're looking for because of rigid, exact-match search functionality.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inflexible Design</h3>
                                <p>Making simple layout changes requires developer intervention and risky platform deployments.</p>
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
                                <h2>Next-generation storefronts.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize speed, aesthetics, and discoverability.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Shopify, BigCommerce, or custom backends via APIs.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Speed</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Advanced Search Integration</h3>
                                <p>Algolia or Typesense implementation for instant, faceted search results.</p>
                                <div className="deliverable-tags"><small>Search</small><small>UX</small><small>Discovery</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Rich Media Support</h3>
                                <p>Optimized delivery of high-res images, video, and 3D product models.</p>
                                <div className="deliverable-tags"><small>Media</small><small>Performance</small><small>Visuals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CMS Integration</h3>
                                <p>Sanity or Contentful setups allowing marketing teams to build landing pages without code.</p>
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
                            <p className="eyebrow">Featured Retail Platform</p>
                            <h2>Transforming digital commerce.</h2>
                        </div>
                        <p>See how we helped a national retailer migrate to a modern headless architecture, resulting in sub-second load times, a frictionless checkout experience, and a unified view of customer data across channels.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Commerce Tech</span>
                                <span>Omnichannel Experience</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/retail-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Seamless shopping at scale.</h2>
                                <p>We developed a custom storefront that integrates seamlessly with their ERP for real-time inventory, provides personalized product recommendations, and manages complex loyalty subscriptions without slowing down the user experience.</p>
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
                        <h2 id="faq-title">Common questions about retail tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure fast load times during high-traffic events?</summary>
                            <p>We build headless commerce solutions using frameworks like Next.js, leveraging edge caching and static site generation to handle immense traffic spikes (like Black Friday) without performance degradation.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our existing ERP and inventory systems?</summary>
                            <p>Yes. We build secure API middleware to connect your storefront with legacy ERPs, ensuring accurate stock levels, pricing, and order synchronization in real time.</p>
                        </details>
                        <details>
                            <summary>How do you manage complex loyalty and subscription models?</summary>
                            <p>We integrate robust identity and subscription management platforms (like Auth0 or Stripe Billing) to handle recurring payments, tier upgrades, and personalized rewards seamlessly within the customer portal.</p>
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
                        <a className="related-card" href="/services/storefront-and-product-discovery/"><div><small>Discovery</small><h3>Storefronts</h3><p>Engaging product discovery.</p></div><b>Explore storefronts ↗</b></a>
                        <a className="related-card" href="/services/cart-checkout-and-payments/"><div><small>Conversion</small><h3>Checkout & Payments</h3><p>Frictionless checkout experiences.</p></div><b>Explore checkout ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-subscriptions/"><div><small>Retention</small><h3>Loyalty & Subs</h3><p>Customer retention tools.</p></div><b>Explore loyalty ↗</b></a>
                        <a className="related-card" href="/services/orders-returns-and-service/"><div><small>Operations</small><h3>Orders & Returns</h3><p>Streamlined post-purchase ops.</p></div><b>Explore orders ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your retail <br />and commerce operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From high-performance storefronts to complex subscription logic and real-time inventory dashboards, we build software that drives growth across the commerce lifecycle.</p>
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
