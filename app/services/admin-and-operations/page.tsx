import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/admin-and-operations/" },
  title: "Marketplace Admin & Operations Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build the internal command center your operations team needs to moderate users and resolve disputes.",
};

export default function AdminAndOperations() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/admin-and-operations/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/admin-and-operations/",
          "name": "Marketplace Admin & Operations Dashboards | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build the internal command center your operations team needs to moderate users and resolve disputes.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/admin-and-operations/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/admin-and-operations/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/admin-and-operations/#service",
          "name": "Admin & Operations",
          "serviceType": "Marketplace Engineering",
          "url": "https://hyperlinktechsolutions.com/services/admin-and-operations/",
          "description": "Build the internal command center your operations team needs to moderate users and resolve disputes.",
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
                    <strong>Admin Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">The marketplace command center</div>
                        <p className="eyebrow">Admin & Operations</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Manage your entire marketplace from <em class="accent-text">one powerful dashboard.</em>' }}></h1>
                        <p className="hero-lead">We build custom, secure administrative portals that give your operations team the power to moderate users, resolve disputes, approve payouts, and monitor platform liquidity in real-time.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Provide admins with tools to review, approve, or ban users</li>
                            <li>Handle customer support and financial disputes efficiently</li>
                            <li>Track real-time liquidity and GMV (Gross Merchandise Value)</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get an Admin Dashboard Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · User Moderation</small>
                            <strong>Easily ban bad actors or unpublish poor quality listings.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Dispute Resolution</small>
                            <strong>Access the full transaction history to mediate conflicts.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Financial Oversight</small>
                            <strong>Track platform fees, pending payouts, and refunds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Role-Based Access</small>
                            <strong>Restrict sensitive financial data to senior admins only.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom admin tools are necessary</p>
                        <p>You can't run a scalable marketplace by manually editing database rows.</p>
                        <a className="btn" href="#contact">Discuss Admin Tools <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Operating a marketplace blindly leads to chaos.</h2>
                        <p>If your customer support team has to ask engineers to manually look up transaction records in the database, your operations are bottlenecked.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Dispute Resolution</h3>
                                <p>Customer support takes days to resolve a refund because they lack a unified view of the buyer, the seller, and the transaction.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Platform Spam</h3>
                                <p>Bad actors are uploading fake listings, and your team has no easy interface to review and delete them in bulk.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Blind to Metrics</h3>
                                <p>Leadership has no real-time dashboard to see if supply is meeting demand, causing marketing dollars to be wasted.</p>
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
                                <h2>Secure internal tools for complex operations.</h2>
                            </div>
                            <p>We build the internal software that makes running a massive platform manageable and secure.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Moderation</span>
                                <h3>Content & User Management</h3>
                                <p>Interfaces to review flagged listings, approve KYC documents, and suspend or ban users violating terms of service.</p>
                                <div className="deliverable-tags"><small>Moderation</small><small>Banning</small><small>Review</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Support</span>
                                <h3>Dispute Resolution UI</h3>
                                <p>Providing support staff with a complete ledger of a transaction (messages, payment status, tracking) to quickly resolve conflicts.</p>
                                <div className="deliverable-tags"><small>Support</small><small>Ledgers</small><small>Refunds</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Finance</span>
                                <h3>Payout Approvals</h3>
                                <p>Dashboards for the finance team to review flagged transactions, manually trigger escrow releases, or process complex refunds.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Payouts</small><small>Approvals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Analytics</span>
                                <h3>Liquidity Dashboards</h3>
                                <p>Real-time charts tracking GMV, take-rates, and market liquidity (the ratio of buyers to active sellers).</p>
                                <div className="deliverable-tags"><small>Metrics</small><small>GMV</small><small>Liquidity</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Admin Build</p>
                            <h2>Replacing a messy Google Sheet with a custom Next.js admin dashboard.</h2>
                        </div>
                        <p>See how we built a secure operations center that cut customer support resolution times in half.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Internal Tools</span>
                                <span>Next.js + Role-based Auth</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Marketplace Operations Center</p>
                                <h2>Giving operations the tools they need.</h2>
                                <p>A rapidly growing peer-to-peer rental marketplace was managing all user disputes and payout approvals through a terrifyingly fragile shared Google Sheet.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Operations staff could accidentally delete rows, and there was no security preventing junior staff from seeing sensitive financial totals.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure Next.js admin portal connected directly to their primary database and Stripe API. We implemented strict Role-Based Access Control (RBAC) so only managers could execute refunds.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Support staff could now view the entire lifecycle of a rental in one screen. Dispute resolution times dropped by 50%, and the Google Sheet was permanently deleted.</strong></div>
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
                        <h2 id="faq-title">Common questions about Admin Operations.</h2>
                        <p>Answers covering security, off-the-shelf tools, and permissions.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can't we just use tools like Retool or Forest Admin?</summary>
                            <p>Yes, for early-stage marketplaces, low-code tools like Retool are fantastic. However, as your business logic becomes complex (e.g., orchestrating a refund that touches Stripe, your database, and an email API simultaneously), a custom-coded admin dashboard is much safer.</p>
                        </details>
                        <details>
                            <summary>How do you secure the admin dashboard?</summary>
                            <p>Admin dashboards are kept behind strict authentication (SSO/SAML), often IP-restricted, and we enforce comprehensive audit logging so you know exactly which admin clicked "Refund".</p>
                        </details>
                        <details>
                            <summary>What is Role-Based Access Control (RBAC)?</summary>
                            <p>It means assigning permissions based on job roles. A Tier-1 support agent might only have permission to view a transaction, while a Finance Manager has permission to issue a refund. We build this logic into the dashboard.</p>
                        </details>
                        <details>
                            <summary>Can admins impersonate users to troubleshoot?</summary>
                            <p>Yes. We often build a secure "login as user" feature that allows customer support to see exactly what the user is seeing, which drastically speeds up bug reporting and support.</p>
                        </details>
                        <details>
                            <summary>Do we need a dashboard on day one?</summary>
                            <p>Not a complex one. For an MVP, you can often get by managing things directly in the Stripe dashboard and a basic database viewer. The custom admin dashboard becomes critical once you hire dedicated support staff.</p>
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
                    <h2>Take control of your <br />marketplace operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your team the internal tools they need to scale securely? Let's discuss your operations dashboard.</p>
                        <a className="btn" href="#contact">Get an Admin Dashboard Proposal <span className="arrow">↗</span></a>
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
