import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/transactions-and-payments/" },
  title: "Marketplace Transactions & Payments | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Engineer complex financial plumbing for escrow, split payouts, and secure marketplace transactions.",
};

export default function TransactionsAndPayments() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/transactions-and-payments/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/transactions-and-payments/",
          "name": "Marketplace Transactions & Payments | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Engineer complex financial plumbing for escrow, split payouts, and secure marketplace transactions.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/transactions-and-payments/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/transactions-and-payments/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/transactions-and-payments/#service",
          "name": "Transactions & Payments",
          "serviceType": "Marketplace Engineering",
          "url": "https://hyperlinktechsolutions.com/services/transactions-and-payments/",
          "description": "Engineer complex financial plumbing for escrow, split payouts, and secure marketplace transactions.",
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
                    <strong>Payments & Escrow</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Engineering financial plumbing</div>
                        <p className="eyebrow">Transactions & Payments</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Complex marketplace payouts, <em class="accent-text">handled securely.</em>' }}></h1>
                        <p className="hero-lead">We integrate advanced payment infrastructures like Stripe Connect to handle split routing, secure escrow holds, and automated vendor payouts while keeping your platform compliant.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Integrate Stripe Connect for marketplace compliance and routing</li>
                            <li>Hold funds securely in escrow until milestones or delivery are met</li>
                            <li>Automate platform fee deductions and vendor payouts</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Payments Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Split Payouts</small>
                            <strong>Automatically route funds to the vendor and your platform fee.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Escrow Holds</small>
                            <strong>Hold buyer funds securely until the service is delivered.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Compliance</small>
                            <strong>Offload KYC and 1099 tax reporting to Stripe.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Global Reach</small>
                            <strong>Accept multi-currency payments and handle international payouts.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom payments are necessary</p>
                        <p>Holding third-party money in your own business bank account is a massive legal liability.</p>
                        <a className="btn" href="#contact">Discuss Payment Routing <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Standard payment gateways can't handle multi-party transactions.</h2>
                        <p>If you just use a standard Stripe or PayPal integration, all the money goes to you, and you have to manually wire it to vendors. This creates massive tax, legal, and operational nightmares.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Payout Nightmares</h3>
                                <p>Your finance team spends hours every week manually calculating platform fees and wiring money to suppliers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Compliance Risks</h3>
                                <p>Acting as an unlicensed money transmitter by holding funds in your own accounts instead of a proper escrow setup.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Dispute Headaches</h3>
                                <p>Handling refunds manually when a buyer is unhappy with a supplier's work.</p>
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
                                <h2>Secure routing and automated settlements.</h2>
                            </div>
                            <p>We architect financial flows that protect buyers, guarantee supplier payouts, and automatically collect your platform fees.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Infrastructure</span>
                                <h3>Stripe Connect Integration</h3>
                                <p>Implementing the industry standard for marketplace payments, handling complex money routing directly through Stripe's API.</p>
                                <div className="deliverable-tags"><small>Stripe Connect</small><small>APIs</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Security</span>
                                <h3>Escrow & Milestone Holds</h3>
                                <p>Configuring logic to authorize a buyer's card, hold the funds in a secure state, and only release them when the job is marked complete.</p>
                                <div className="deliverable-tags"><small>Escrow</small><small>Holds</small><small>Milestones</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Logic</span>
                                <h3>Split Payout Algorithms</h3>
                                <p>Writing backend logic to dynamically calculate platform fees (e.g., 10% + $2) and route the exact remaining balance to the vendor.</p>
                                <div className="deliverable-tags"><small>Math</small><small>Fees</small><small>Splits</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Operations</span>
                                <h3>Refund & Dispute Flows</h3>
                                <p>Building tools for your admins to reverse transactions or issue partial refunds directly from your custom dashboard.</p>
                                <div className="deliverable-tags"><small>Refunds</small><small>Disputes</small><small>Ledger</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Payment Build</p>
                            <h2>Implementing complex B2B escrow routing.</h2>
                        </div>
                        <p>See how we integrated Stripe Connect to handle $50k+ transactions with milestone-based payout releases.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>FinTech Engineering</span>
                                <span>Stripe Connect + Node.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Complex B2B Escrow Routing</p>
                                <h2>Securing massive enterprise transactions.</h2>
                                <p>A B2B heavy machinery marketplace needed to facilitate $50k+ transactions. Buyers refused to pay upfront, and sellers refused to ship without a guarantee of funds.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The platform needed a way to hold funds securely in the middle, releasing partial payments upon shipping, and final payments upon delivery.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We integrated Stripe Connect with Destination Charges. When a buyer commits, the funds are captured and held securely by Stripe. We built a custom Node.js engine that listens for shipping and delivery webhooks to trigger the partial payouts.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The escrow system established absolute trust on both sides, allowing the platform to successfully process over $2M in transaction volume in the first 6 months.</strong></div>
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
                        <h2 id="faq-title">Common questions about Marketplace Payments.</h2>
                        <p>Answers covering Stripe Connect, escrow, and global payouts.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Why do we need Stripe Connect instead of standard Stripe?</summary>
                            <p>Standard Stripe deposits all money into your business account. Stripe Connect routes the money directly to the vendor's connected account, separating your platform fees from their revenue. This keeps you out of regulatory trouble.</p>
                        </details>
                        <details>
                            <summary>Can we hold funds in escrow?</summary>
                            <p>Yes. With Stripe Connect, we can authorize a charge and place a hold on the funds. The funds sit securely in Stripe's ecosystem until your backend API tells Stripe to release them to the vendor.</p>
                        </details>
                        <details>
                            <summary>Who handles the 1099 tax reporting for vendors?</summary>
                            <p>If you use Stripe Connect (Custom or Express), Stripe handles the collection of W9s and automatically generates and sends 1099 tax forms to your vendors at the end of the year.</p>
                        </details>
                        <details>
                            <summary>Can we charge different fees for different vendors?</summary>
                            <p>Yes. Because the split logic is handled in our custom backend code before we send the request to Stripe, we can build logic to charge VIP vendors 5% and standard vendors 10%.</p>
                        </details>
                        <details>
                            <summary>Do you support PayPal or crypto?</summary>
                            <p>While we can integrate PayPal or crypto gateways, Stripe Connect is by far the most robust and legally compliant solution for multi-party marketplace routing. We strongly recommend starting with Stripe.</p>
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
                    <h2>Secure your transactions and <br />automate your payouts. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build compliant, automated financial infrastructure for your platform? Let's discuss your payment flows.</p>
                        <a className="btn" href="#contact">Get a Payments Proposal <span className="arrow">↗</span></a>
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
