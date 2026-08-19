import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/websites-and-plan-discovery/" },
  title: "Telecom Websites & Plan Discovery | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Design high-converting telecom and ISP websites that simplify complex pricing bundles and optimize the checkout flow.",
};

export default function WebsitesAndPlanDiscovery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/",
          "name": "Telecom Websites & Plan Discovery | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Design high-converting telecom and ISP websites that simplify complex pricing bundles and optimize the checkout flow.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/#service",
          "name": "Websites & Plan Discovery",
          "serviceType": "Telecom Engineering",
          "url": "https://hyperlinktechsolutions.com/services/websites-and-plan-discovery/",
          "description": "Design high-converting telecom and ISP websites that simplify complex pricing bundles and optimize the checkout flow.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Telecommunications providers, ISPs, and Broadband companies"
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
                    <strong>Plan Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Optimizing telecom conversions</div>
                        <p className="eyebrow">Websites & Plan Discovery</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn confusing pricing tables into <em class="accent-text">frictionless signups.</em>' }}></h1>
                        <p className="hero-lead">We design and develop high-performance marketing websites for telecom providers, simplifying complex bundles and optimizing checkout flows to drive massive increases in new subscriber acquisition.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Simplify complex broadband and mobile pricing configurations</li>
                            <li>Optimize the checkout and hardware upselling flow</li>
                            <li>Implement headless CMS platforms (Sanity) for instant marketing updates</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Website Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Telecom benefits">
                        <div className="proof-item">
                            <small>01 · Higher Conversions</small>
                            <strong>Clearer pricing UI drastically reduces bounce rates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Easy Upsells</small>
                            <strong>Frictionless flows for adding routers or static IPs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Marketing Control</small>
                            <strong>Update prices and promotions without developer help.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Mobile First</small>
                            <strong>Flawless checkout experiences on any device.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When telecom UX matters</p>
                        <p>If a customer can't understand your bundle pricing in 5 seconds, they will leave.</p>
                        <a className="btn" href="#contact">Discuss Your Website <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Complex pricing kills conversion rates.</h2>
                        <p>Telecom is inherently complicated. You have base speeds, contract lengths, hardware rentals, and installation fees. If your website doesn't simplify this math for the user, you lose the sale.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Confusing Bundle Logic</h3>
                                <p>Customers abandon the checkout because they don't understand the difference between the base plan, the add-ons, and the first-month promo price.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Missed Upsell Revenue</h3>
                                <p>The flow to add a premium router or a static IP is clunky, causing users to just skip it and stick with the basic plan.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Rigid CMS Platforms</h3>
                                <p>The marketing team has to submit a ticket to the engineering team just to launch a weekend promotion or change a plan price.</p>
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
                                <h2>High-performance web architecture.</h2>
                            </div>
                            <p>We build blazing fast, headless websites that provide a premium user experience while giving your marketing team complete control.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Design</span>
                                <h3>UX / UI for Telecom</h3>
                                <p>Designing intuitive pricing cards, comparison tables, and frictionless multi-step checkout flows tailored specifically for ISP bundles.</p>
                                <div className="deliverable-tags"><small>UX Design</small><small>Pricing UI</small><small>Figma</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Engineering</span>
                                <h3>Interactive Plan Builders</h3>
                                <p>Building React/Next.js dynamic calculators that let users adjust speeds, add hardware, and instantly see their exact monthly bill.</p>
                                <div className="deliverable-tags"><small>React</small><small>Calculators</small><small>Next.js</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Platform</span>
                                <h3>Headless CMS (Sanity)</h3>
                                <p>Implementing a modern CMS that allows your marketing team to instantly create landing pages, update promotions, and adjust pricing.</p>
                                <div className="deliverable-tags"><small>Sanity</small><small>Headless CMS</small><small>Content</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Optimization</span>
                                <h3>Checkout Flow Integration</h3>
                                <p>Connecting the beautiful frontend directly to your billing systems (Stripe, Chargebee) and provisioning APIs for a seamless handoff.</p>
                                <div className="deliverable-tags"><small>Checkout</small><small>Billing</small><small>APIs</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Telecom Build</p>
                            <h2>Increasing broadband signups by simplifying the bundle.</h2>
                        </div>
                        <p>See how we redesigned a regional ISP's website to drastically reduce checkout abandonment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Telecom Design</span>
                                <span>Next.js + Sanity CMS</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Broadband Provider Redesign</p>
                                <h2>Ending the confusion of the shopping cart.</h2>
                                <p>A regional fiber provider was losing 70% of users on the hardware selection screen. Their legacy website presented a confusing wall of text regarding router rentals vs purchases.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The website was slow, built on an outdated WordPress theme, and the checkout flow felt like filling out a tax form.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We completely redesigned the flow into a 3-step interactive plan builder using Next.js. We implemented clear, visual toggle switches for hardware and add-ons, instantly updating the total.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Cart abandonment dropped by 45%. Furthermore, because we made the hardware options clearer, router upsells increased by 20% in the first month.</strong></div>
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
                        <h2 id="faq-title">Common questions about Telecom websites.</h2>
                        <p>Answers covering headless CMS, integrations, and performance.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why use a headless CMS like Sanity instead of WordPress?</summary>
                            <p>WordPress is monolithic and can be slow, especially when adding complex logic like plan calculators. A headless CMS separates the content from the code, allowing us to build a lightning-fast React (Next.js) frontend while your team still gets a beautiful dashboard to manage content.</p>
                        </details>
                        <details>
                            <summary>Can you integrate the checkout with our existing billing provider?</summary>
                            <p>Yes. We routinely build custom API integrations to connect the frontend checkout flow securely to existing telecom billing engines, CRM platforms (Salesforce/HubSpot), and provisioning systems.</p>
                        </details>
                        <details>
                            <summary>How do you handle address qualification on the website?</summary>
                            <p>We typically build the "Check Availability" tool as the very first step of the funnel. Users enter their address, we query your availability API, and then we only show them the specific plans available at their location.</p>
                        </details>
                        <details>
                            <summary>Can we A/B test different pricing layouts?</summary>
                            <p>Absolutely. We architect the frontend and the CMS to support seamless A/B testing (via tools like Optimizely or Vercel Edge Config) so you can scientifically prove which pricing page converts better.</p>
                        </details>
                        <details>
                            <summary>Will the website be fast on mobile?</summary>
                            <p>Yes. By using Next.js and static site generation (SSG) or edge caching, we ensure your website loads in milliseconds, providing an app-like experience even on poor cellular connections.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital telecom infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/websites-and-plan-discovery/"><div><small>Growth</small><h3>Websites & Discovery</h3><p>Design high-converting telecom websites that simplify complex bundles.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/coverage-and-availability/"><div><small>Engineering</small><h3>Coverage & Availability</h3><p>Build lightning-fast, highly accurate address lookups and map tools.</p></div><b>Explore coverage ↗</b></a>
                        <a className="related-card" href="/services/dealer-and-partner-portals/"><div><small>Wholesale</small><h3>Dealer & Partner Portals</h3><p>Build secure portals for third-party dealers to sell and provision services.</p></div><b>Explore partner portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Make buying your services <br />effortless. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to replace your confusing checkout flow with a high-converting plan builder? Let's discuss your new website.</p>
                        <a className="btn" href="#contact">Get a Website Proposal <span className="arrow">↗</span></a>
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
