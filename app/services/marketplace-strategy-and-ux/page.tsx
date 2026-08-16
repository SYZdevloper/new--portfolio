import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/marketplace-strategy-and-ux/" },
  title: "Marketplace Strategy & UX Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Design frictionless journeys for both buyers and sellers to solve the chicken-and-egg problem of two-sided marketplaces.",
};

export default function MarketplaceStrategyAndUX() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/",
          "name": "Marketplace Strategy & UX Services | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Design frictionless journeys for both buyers and sellers to solve the chicken-and-egg problem of two-sided marketplaces.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/#service",
          "name": "Marketplace Strategy & UX",
          "serviceType": "Marketplace Engineering",
          "url": "https://hyperlinktechsolutions.com/services/marketplace-strategy-and-ux/",
          "description": "Design frictionless journeys for both buyers and sellers to solve the chicken-and-egg problem of two-sided marketplaces.",
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
                    <strong>Strategy & UX</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Designing for two distinct user groups</div>
                        <p className="eyebrow">Marketplace Strategy & UX</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Solve the chicken-and-egg problem <em class="accent-text">with flawless UX.</em>' }}></h1>
                        <p className="hero-lead">Building a marketplace requires satisfying two entirely different audiences simultaneously. We design cohesive, trustworthy user experiences that drive both supplier onboarding and buyer conversion.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Map complex two-sided user journeys before writing a line of code</li>
                            <li>Design high-converting trust markers and verification flows</li>
                            <li>Establish a clear monetization and feature roadmap</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Strategy Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Reduced Friction</small>
                            <strong>Clearer pathways for users to list and buy services.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Trust</small>
                            <strong>UX that establishes safety for both sides of the transaction.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Time to Value</small>
                            <strong>Helping users achieve their goals immediately upon signing up.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable Design</small>
                            <strong>Design systems that adapt as you add new product categories.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When strategy is necessary</p>
                        <p>If one side of your marketplace is frustrated, the whole platform dies.</p>
                        <a className="btn" href="#contact">Discuss Your Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Marketplaces fail when one side of the transaction is ignored.</h2>
                        <p>Founders often focus entirely on the buyer experience, leaving the suppliers with clunky tools, or vice-versa. We ensure both sides get a premium experience.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Vendor Churn</h3>
                                <p>Suppliers are leaving the platform because the dashboard to upload and manage their listings is confusing and slow.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Low Buyer Trust</h3>
                                <p>Buyers are abandoning carts because the platform doesn't adequately communicate vendor verification or guarantee dispute resolution.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Conflicting Priorities</h3>
                                <p>Your team is struggling to balance features that benefit buyers versus features that benefit sellers.</p>
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
                                <h2>A complete blueprint for a balanced platform.</h2>
                            </div>
                            <p>We deliver comprehensive design systems and strategy roadmaps that prove the concept works before development begins.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Strategy</span>
                                <h3>Two-sided User Journeys</h3>
                                <p>Mapping out the exact step-by-step experience for a supplier joining the platform versus a buyer finding them.</p>
                                <div className="deliverable-tags"><small>Journeys</small><small>Mapping</small><small>Flows</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Design</span>
                                <h3>Trust & Verification UI</h3>
                                <p>Designing the specific visual cues (badges, reviews, identity checks) that give users the confidence to transact.</p>
                                <div className="deliverable-tags"><small>Trust</small><small>UI Design</small><small>Badges</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Structure</span>
                                <h3>Information Architecture</h3>
                                <p>Organizing complex taxonomy so categories, sub-categories, and filters make sense to both the person listing and the person searching.</p>
                                <div className="deliverable-tags"><small>Taxonomy</small><small>IA</small><small>Structure</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Prototyping</span>
                                <h3>High-Fidelity Prototypes</h3>
                                <p>Clickable Figma prototypes of both the buyer app and the supplier dashboard to test with real users.</p>
                                <div className="deliverable-tags"><small>Figma</small><small>Testing</small><small>Prototypes</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured UX Build</p>
                            <h2>Redesigning a service marketplace to increase booking conversions by 40%.</h2>
                        </div>
                        <p>See how we overhauled a local service platform to dramatically reduce buyer hesitation and increase supplier retention.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Marketplace Design</span>
                                <span>Figma Prototyping</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Service Marketplace Redesign</p>
                                <h2>Building trust on both sides.</h2>
                                <p>The platform had plenty of traffic, but buyers were nervous about booking unvetted professionals, and professionals hated the clunky scheduling interface.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The existing platform lacked trust markers, making it look like a generic directory rather than a secure marketplace.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We redesigned the supplier profiles to prominently feature background check badges and structured reviews. We also overhauled the supplier scheduling UI to be mobile-first.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>By clearly displaying trust markers, buyer conversions jumped 40%. The new mobile scheduling interface reduced supplier churn by 25% in the first quarter.</strong></div>
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
                        <h2 id="faq-title">Common questions about Marketplace UX.</h2>
                        <p>Answers covering the chicken-and-egg problem and balancing priorities.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Should we build the buyer side or the supplier side first?</summary>
                            <p>You must design both simultaneously to ensure they connect, but during go-to-market, you generally need to acquire supply (vendors) before you can attract demand (buyers).</p>
                        </details>
                        <details>
                            <summary>How do you handle trust and safety in the design?</summary>
                            <p>We design clear verification flows (e.g., uploading ID or licenses) and create visual badges that appear on approved profiles so buyers feel safe transacting.</p>
                        </details>
                        <details>
                            <summary>Do you design for mobile or desktop?</summary>
                            <p>Both. For many marketplaces, the buyer side is heavily mobile (booking on the go), while the supplier side might be more desktop-heavy (managing inventory and finances).</p>
                        </details>
                        <details>
                            <summary>Can we just use a marketplace template?</summary>
                            <p>Templates are fine for testing an initial idea, but they quickly break down when you need to introduce complex business logic or unique workflows specific to your industry.</p>
                        </details>
                        <details>
                            <summary>What happens after the design phase?</summary>
                            <p>Once the strategy and Figma prototypes are approved, our engineering team takes over to build the custom frontend and backend architecture.</p>
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
                    <h2>Design a platform users <br />actually want to use. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to map out the perfect journey for your buyers and sellers? Let's discuss your marketplace strategy.</p>
                        <a className="btn" href="#contact">Get a Strategy Proposal <span className="arrow">↗</span></a>
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
