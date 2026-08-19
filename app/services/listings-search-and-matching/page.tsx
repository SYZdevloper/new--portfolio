import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/listings-search-and-matching/" },
  title: "Listings, Search & Matching Engines | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Implement lightning-fast search algorithms so marketplace buyers find exactly what they need.",
};

export default function ListingsSearchAndMatching() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/",
          "name": "Listings, Search & Matching Engines | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Implement lightning-fast search algorithms so marketplace buyers find exactly what they need.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/#service",
          "name": "Listings, Search & Matching",
          "serviceType": "Marketplace Engineering",
          "url": "https://hyperlinktechsolutions.com/services/listings-search-and-matching/",
          "description": "Implement lightning-fast search algorithms so marketplace buyers find exactly what they need.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Marketplace founders and platform operators"
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
                    <strong>Search & Matching</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering discovery</div>
                        <p className="eyebrow">Listings, Search & Matching</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Connect buyers with the right supplier <em class="accent-text">in milliseconds.</em>' }}></h1>
                        <p className="hero-lead">We engineer complex search algorithms and matching engines using tools like Elasticsearch and Algolia to ensure your buyers can filter, map, and discover exactly what they want instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Implement Elasticsearch or Algolia for sub-50ms query speeds</li>
                            <li>Build complex geospatial (radius) and faceted filtering</li>
                            <li>Develop custom algorithmic matching based on user preferences</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Search Engine Proposal <span className="arrow">↗</span></a>
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
                            <strong>Search results that update as the user types.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Geospatial Logic</small>
                            <strong>Accurate radius and map-based boundary filtering.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Typo Tolerance</small>
                            <strong>Users find results even if they spell the category wrong.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smart Ranking</small>
                            <strong>Surface the highest-rated or most relevant vendors first.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When advanced search is necessary</p>
                        <p>If buyers can't find what they want immediately, they assume you don't have it.</p>
                        <a className="btn" href="#contact">Discuss Your Search Engine <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Basic database queries kill marketplace conversion.</h2>
                        <p>Relying on standard SQL `LIKE` queries for a marketplace search is a recipe for disaster. It's slow, breaks on typos, and cannot handle complex filtering.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Frustrating Load Times</h3>
                                <p>Buyers are waiting 5 seconds for search results to load, causing them to bounce before seeing the listings.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Rigid Filtering</h3>
                                <p>Users cannot filter by multiple complex attributes (e.g., price range, dates, AND location simultaneously).</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Irrelevant Results</h3>
                                <p>The platform simply lists the newest vendors first, rather than algorithmically ranking them by relevance or quality.</p>
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
                                <h2>Enterprise search architecture and algorithms.</h2>
                            </div>
                            <p>We integrate powerful search infrastructure to handle complex queries at massive scale.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Infrastructure</span>
                                <h3>Elasticsearch / Algolia Integration</h3>
                                <p>Syncing your primary database with advanced search indexes to provide typo-tolerant, lightning-fast discovery.</p>
                                <div className="deliverable-tags"><small>Elasticsearch</small><small>Algolia</small><small>Indexes</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Location</span>
                                <h3>Geospatial Search</h3>
                                <p>Implementing map-based search, radius filtering (e.g., "within 10 miles"), and polygon bounding boxes.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>Radius</small><small>Geospatial</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Filtering</span>
                                <h3>Faceted Navigation</h3>
                                <p>Building complex sidebars that allow users to drill down by categories, price, availability, and custom attributes.</p>
                                <div className="deliverable-tags"><small>Facets</small><small>Filters</small><small>Drill-down</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Logic</span>
                                <h3>Algorithmic Matching</h3>
                                <p>Writing custom logic to rank search results based on vendor rating, response time, or promoted status.</p>
                                <div className="deliverable-tags"><small>Algorithms</small><small>Ranking</small><small>Sorting</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Search Build</p>
                            <h2>Building a sub-50ms search engine for a local services marketplace.</h2>
                        </div>
                        <p>See how we replaced a slow SQL search with Elasticsearch, enabling instant map-based filtering.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Search Engineering</span>
                                <span>Elasticsearch + Next.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Real-time Geolocation Matching</p>
                                <h2>Instant discovery for local buyers.</h2>
                                <p>A home services marketplace was struggling because their legacy database search took over 4 seconds to calculate which plumbers were within a 15-mile radius of the user.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The standard relational database was not designed for complex geospatial math. The slow load times were directly hurting conversion rates.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We implemented Elasticsearch, securely syncing provider locations and availability from the primary database. We built a React frontend that queries the index instantly as the user drags the map.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Search query times dropped from 4000ms to 45ms. Buyers could instantly see providers on the map, leading to a 35% increase in booked jobs.</strong></div>
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
                        <h2 id="faq-title">Common questions about Search & Matching.</h2>
                        <p>Answers covering Algolia, Elasticsearch, and complex filtering.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Should we use Algolia or Elasticsearch?</summary>
                            <p>Algolia is an excellent, managed service that is very fast to implement but can get expensive at high volumes. Elasticsearch requires more custom engineering to set up but provides absolute control and is often cheaper at scale.</p>
                        </details>
                        <details>
                            <summary>How do you keep the search index in sync with the database?</summary>
                            <p>We build event-driven pipelines. Whenever a vendor updates their profile or changes a price in the primary database, a webhook fires to instantly update that specific record in the search index.</p>
                        </details>
                        <details>
                            <summary>Can you match users automatically without a search bar?</summary>
                            <p>Yes. For "matching" marketplaces (like dating apps or lead-gen), we write backend algorithms that compare user preferences and automatically route the best provider to the buyer.</p>
                        </details>
                        <details>
                            <summary>Do you support calendar availability filtering?</summary>
                            <p>Yes. Searching for "who is available next Tuesday" is a complex query. We structure the search index to include time-blocks, allowing users to filter out vendors who are already booked.</p>
                        </details>
                        <details>
                            <summary>Can you boost certain listings in the results?</summary>
                            <p>Absolutely. We can configure the ranking algorithm to heavily weight vendors who pay for "promoted" status, or boost vendors with 5-star reviews to the top.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your marketplace build.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/marketplace-strategy-and-ux/"><div><small>Design</small><h3>Strategy & UX</h3><p>Design frictionless journeys for both buyers and sellers.</p></div><b>Explore Strategy ↗</b></a>
                        <a className="related-card" href="/services/provider-onboarding/"><div><small>Supply</small><h3>Provider Onboarding</h3><p>Build automated tools to verify and onboard your marketplace vendors.</p></div><b>Explore Onboarding ↗</b></a>
                        <a className="related-card" href="/services/listings-search-and-matching/"><div><small>Discovery</small><h3>Search & Matching</h3><p>Implement lightning-fast search algorithms so buyers find exactly what they need.</p></div><b>Explore Search ↗</b></a>
                        <a className="related-card" href="/services/transactions-and-payments/"><div><small>Finance</small><h3>Transactions & Payments</h3><p>Engineer complex financial plumbing for escrow and split payouts.</p></div><b>Explore Payments ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Help your buyers find <br />exactly what they need. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to upgrade your search from clunky database queries to lightning-fast algorithms? Let's discuss your data.</p>
                        <a className="btn" href="#contact">Get a Search Engine Proposal <span className="arrow">↗</span></a>
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
