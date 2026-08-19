import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/accounts-sessions-and-payments/" },
  title: "Accounts, Sessions & Payments | Hyperlink Tech Solutions",
  description: "Frictionless billing, transaction pipelines, and secure payment integrations for EV charging.",
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
                    <strong>Accounts, Sessions & Payments</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">EV Payments & Billing</div>
                        <p className="eyebrow">Accounts, Sessions & Payments</p>
                        <h1 id="service-title">Frictionless billing and account management for EV drivers.</h1>
                        <p className="hero-lead">We design robust transaction pipelines, subscription logic, and secure payment integrations for charge point operators.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Handle complex cross-border payments and tax logic natively</li>
                            <li>Offer discounted kWh rates for premium monthly members</li>
                            <li>Generate compliant, itemized B2C and B2B PDF receipts</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Multi-currency</small>
                            <strong>Handle complex cross-border payments and tax logic natively.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Subscription Tiers</small>
                            <strong>Offer discounted kWh rates for premium monthly members.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Invoice Automation</small>
                            <strong>Generate compliant, itemized B2C and B2B PDF receipts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Low Dispute Rates</small>
                            <strong>Transparent billing timelines prevent chargebacks.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When billing breaks</p>
                        <p>Revenue leakage and chargebacks kill CPO margins.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>EV billing is uniquely complex. We simplify it.</h2>
                        <p>From pre-authorization holds to dynamic time-based tariffs and roaming fees, EV payments require specialized logic that standard e-commerce setups can't handle.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Confusing Pricing</h3>
                                <p>Drivers cannot decipher how they were billed due to complex combinations of parking fees, kWh rates, and idle fees.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Failed Authorizations</h3>
                                <p>Heavy-handed pre-authorizations lock up driver funds, causing bank declines and frustrating user experiences.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Complex Roaming</h3>
                                <p>Reconciling payments across multiple eMSPs and CPOs via OCPI leads to delayed settlements and billing errors.</p>
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
                                <h2>Transaction pipelines built for EV infrastructure.</h2>
                            </div>
                            <p>We integrate robust payment gateways with custom tariff engines to ensure every session is priced, billed, and receipted accurately.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Stripe/Adyen Integrations</h3>
                                <p>Enterprise-grade payment processing with support for Apple Pay, Google Pay, and localized payment methods.</p>
                                <div className="deliverable-tags"><small>Stripe</small><small>Adyen</small><small>Wallets</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Membership Engines</h3>
                                <p>Subscription systems that automatically apply the correct tariff discounts based on a driver's tier.</p>
                                <div className="deliverable-tags"><small>Tiers</small><small>Discounts</small><small>Recurring</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Session Aggregation</h3>
                                <p>Middleware that translates raw CDRs (Charge Detail Records) from your CSMS into structured invoice data.</p>
                                <div className="deliverable-tags"><small>CDRs</small><small>Parsing</small><small>Middleware</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Invoicing</h3>
                                <p>Dynamic PDF generation for receipts and monthly B2B statements, compliant with regional tax requirements.</p>
                                <div className="deliverable-tags"><small>PDFs</small><small>Tax/VAT</small><small>B2B/B2C</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Billing System</p>
                            <h2>Consolidating complex roaming tariffs.</h2>
                        </div>
                        <p>See how we helped a global CPO manage dynamic pricing, membership tiers, and seamless post-paid billing.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Payments</span>
                                <span>Subscription Logic</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Automated Invoicing</p>
                                <h2>Simplifying the end-of-month charging bill.</h2>
                                <p>Drivers were confused by multi-network billing, pre-authorization holds, and unclear kWh rates across different regions.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Processing thousands of micro-transactions reliably with accurate, transparent receipts.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We integrated Stripe Billing with a custom session-aggregation engine to produce clear, itemized monthly invoices.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Payment disputes fell by 80% and revenue collection accelerated.</strong></div>
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
                        <h2 id="faq-title">Questions about EV billing and payments.</h2>
                        <p>Answers covering payment gateways, subscriptions, and security.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you support Apple Pay and Google Pay?</summary>
                            <p>Yes, we build native digital wallet integrations so drivers can start sessions instantly without entering card details.</p>
                        </details>
                        <details>
                            <summary>Can we offer subscription memberships?</summary>
                            <p>Absolutely. We can implement tiered memberships (e.g., $10/month for discounted kWh rates) using modern billing engines.</p>
                        </details>
                        <details>
                            <summary>How do you handle failed payments?</summary>
                            <p>We set up automated dunning processes, smart retries, and in-app notifications to gracefully handle expired cards or insufficient funds.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your payment infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/transactions-and-payments/"><div><small>Finance</small><h3>Transactions</h3><p>Scale your payment processing architecture.</p></div><b>Explore payments ↗</b></a>
                        <a className="related-card" href="/services/subscriptions-and-member-access/"><div><small>Access</small><h3>Subscriptions</h3><p>Manage membership tiers and access rules.</p></div><b>Explore subscriptions ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Connect Stripe, Adyen, and your ERP.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Web</small><h3>Web Apps</h3><p>Build secure driver account portals.</p></div><b>Explore web apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Upgrade your charging <br />billing experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to reduce payment friction and improve cash flow? Let's discuss your transaction flows.</p>
                        <a className="btn" href="#contact">Discuss Payments <span className="arrow">↗</span></a>
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
