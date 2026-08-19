import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/commerce-and-campaign-experiences/" },
  title: "Commerce & Campaign Experiences | Hyperlink Tech Solutions",
  description: "Drive conversions with high-performance digital commerce and campaign experiences. We build headless storefronts and targeted landing pages for enterprise brands.",
};

export default function CommerceAndCampaignExperiences() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/",
          "name": "Commerce & Campaign Experiences | Hyperlink Tech Solutions",
          "description": "Drive conversions with high-performance digital commerce and campaign experiences. We build headless storefronts and targeted landing pages for enterprise brands.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/#service",
          "name": "Commerce & Campaign Experiences",
          "serviceType": "Headless Commerce & Digital Marketing",
          "url": "https://hyperlinktechsolutions.com/services/commerce-and-campaign-experiences/",
          "description": "Drive conversions with high-performance digital commerce and campaign experiences. We build headless storefronts and targeted landing pages for enterprise brands.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Retail Brands, D2C Companies, and Enterprise Marketing Teams"
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
                    <strong>Commerce & Campaigns</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">High-Conversion Digital Journeys</div>
                        <p className="eyebrow">Commerce & Campaign Experiences</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Storefronts and campaigns that actually <em class="accent-text">convert.</em>' }}></h1>
                        <p className="hero-lead">We design and engineer headless commerce experiences and high-velocity marketing campaigns. Move beyond standard templates and deliver lightning-fast, personalized buying journeys that maximize ROI.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Headless Shopify & BigCommerce implementations via Next.js</li>
                            <li>Sub-second page loads for maximum ad-spend efficiency</li>
                            <li>A/B testable, component-driven campaign landing pages</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Commerce Audit <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Commerce platform benefits">
                        <div className="proof-item">
                            <small>01 · Core Web Vitals</small>
                            <strong>Achieve perfect Google Lighthouse scores to boost organic SEO.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Omnichannel</small>
                            <strong>Unify web, mobile, and social selling into one backend.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Marketing Agility</small>
                            <strong>Launch new campaign pages in minutes using pre-built blocks.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Conversion Rate</small>
                            <strong>Frictionless checkouts that prevent cart abandonment.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When Headless Commerce is necessary</p>
                        <p>You are spending $100k/month on ads, but your site takes 5 seconds to load.</p>
                        <a className="btn" href="#contact">Boost Conversions <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Slow websites and generic templates are burning your marketing budget.</h2>
                        <p>Modern consumers have zero patience for sluggish storefronts or clunky checkout flows. If your digital experience feels outdated or fails to adapt to high-traffic events, your customer acquisition costs will continually rise while conversions drop.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Performance Penalty</h3>
                                <p>Bloated monolithic themes cause slow page loads, directly tanking your SEO rankings and increasing ad bounce rates.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rigid Campaign Launches</h3>
                                <p>Marketing teams have to wait weeks for developers to hard-code a new landing page for a seasonal product drop.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disconnected Journeys</h3>
                                <p>The transition from a targeted social ad to a generic product page feels disjointed, causing users to abandon the funnel.</p>
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
                                <h2>High-Velocity Commerce Architecture.</h2>
                            </div>
                            <p>We decouple the frontend from the backend, allowing for absolute creative freedom and unparalleled performance without sacrificing enterprise security.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Commerce</span>
                                <h3>Headless Storefronts</h3>
                                <p>Building blazing-fast Next.js frontends connected to Shopify Plus, BigCommerce, or commercetools via robust GraphQL APIs.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>Shopify Plus</small><small>Headless</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Marketing</span>
                                <h3>Campaign Landing Pages</h3>
                                <p>Designing highly visual, interactive microsites specifically tuned to convert traffic from high-spend ad campaigns and product drops.</p>
                                <div className="deliverable-tags"><small>Microsites</small><small>Conversion</small><small>CRO</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Content</span>
                                <h3>CMS Component Libraries</h3>
                                <p>Integrating headless CMS platforms (Sanity, Contentful) so marketers can build complex pages via drag-and-drop, without developers.</p>
                                <div className="deliverable-tags"><small>Sanity</small><small>Contentful</small><small>Agility</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Optimization</span>
                                <h3>A/B Testing & Personalization</h3>
                                <p>Implementing edge-based middleware to serve personalized content and run split tests without impacting page load speeds.</p>
                                <div className="deliverable-tags"><small>Edge</small><small>Personalization</small><small>Testing</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Commerce Build</p>
                            <h2>Handling 10,000 visitors a minute during a drop.</h2>
                        </div>
                        <p>See how we rebuilt a lifestyle brand's architecture to handle massive viral traffic spikes.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Headless Commerce</span>
                                <span>Shopify + Next.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#1a1a1a', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>High-Performance Storefront</div>
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">D2C Lifestyle Brand</p>
                                <h2>Ending the launch-day crash.</h2>
                                <p>A prominent streetwear brand was routinely crashing their standard eCommerce platform during hyped product drops, leading to massive social media backlash and lost revenue.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Their monolithic setup couldn't scale the database fast enough to handle the sudden influx of 50,000 concurrent users checking inventory.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We migrated them to a headless Next.js architecture deployed on Vercel's edge network, utilizing static generation and stale-while-revalidate caching.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>During the next drop, the site maintained a 300ms page load time with zero downtime. Conversion rates jumped 22% due to the frictionless checkout flow.</strong></div>
                            </div>
                            <a className="btn primary" href="/contact">Start Your Project <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about Headless Commerce.</h2>
                        <p>Answers covering Shopify, CMS integrations, and performance.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What exactly is Headless Commerce?</summary>
                            <p>It means separating the visual "head" of the website (the frontend UI built with Next.js) from the backend logic (the database, checkout, and inventory management handled by Shopify or BigCommerce). They communicate via APIs.</p>
                        </details>
                        <details>
                            <summary>Why is headless faster than a standard Shopify theme?</summary>
                            <p>Standard themes render pages dynamically on every request. Headless architectures allow us to pre-generate pages globally on edge networks (CDNs) and only fetch the tiny bits of data that change (like cart count), resulting in near-instant load times.</p>
                        </details>
                        <details>
                            <summary>Will my marketing team still be able to edit content?</summary>
                            <p>Yes. In fact, it becomes easier. We integrate a Headless CMS (like Sanity) which provides a visual, drag-and-drop interface for your marketers to build complex landing pages without touching code or relying on developers.</p>
                        </details>
                        <details>
                            <summary>Does moving headless break our existing Shopify apps?</summary>
                            <p>It can. Many Shopify apps rely on injecting scripts into the standard theme. During migration, we either integrate those tools via API instead, or build custom, faster equivalents directly into the new frontend architecture.</p>
                        </details>
                        <details>
                            <summary>How does this impact SEO and advertising?</summary>
                            <p>Speed is a primary ranking factor for Google (Core Web Vitals). Faster sites rank higher organically. Additionally, because the site loads instantly, ad-click bounce rates drop significantly, directly improving your ROAS (Return on Ad Spend).</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-information-and-catalogues/"><div><small>Data</small><h3>Product Information</h3><p>Centralize your product specs to feed your new headless storefront.</p></div><b>Explore PIM ↗</b></a>
                        <a className="related-card" href="/services/trade-and-distributor-portals/"><div><small>Wholesale</small><h3>Distributor Portals</h3><p>Expand your commerce operations into the B2B sector with self-serve ordering.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Drive conversions. <br />Dominate your market. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to upgrade from slow templates to a high-performance commerce architecture? Let's discuss your next campaign.</p>
                        <a className="btn" href="#contact">Get a Commerce Audit <span className="arrow">↗</span></a>
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
