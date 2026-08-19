import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/provider-onboarding/" },
  title: "Provider Onboarding & Vendor Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build automated tools to verify and onboard your marketplace vendors quickly and securely.",
};

export default function ProviderOnboarding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/provider-onboarding/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/provider-onboarding/",
          "name": "Provider Onboarding & Vendor Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build automated tools to verify and onboard your marketplace vendors quickly and securely.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/provider-onboarding/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/provider-onboarding/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/provider-onboarding/#service",
          "name": "Provider Onboarding",
          "serviceType": "Marketplace Engineering",
          "url": "https://hyperlinktechsolutions.com/services/provider-onboarding/",
          "description": "Build automated tools to verify and onboard your marketplace vendors quickly and securely.",
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
                    <strong>Provider Onboarding</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating the supply side</div>
                        <p className="eyebrow">Provider Onboarding</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Scale your marketplace with <em class="accent-text">frictionless vendor onboarding.</em>' }}></h1>
                        <p className="hero-lead">We build secure, automated portals that allow your suppliers to complete KYC checks, set up their profiles, and manage their inventory without requiring manual intervention from your team.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automate KYC/KYB identity and business verification</li>
                            <li>Provide intuitive dashboards for vendors to manage their listings</li>
                            <li>Reduce onboarding drop-off and time-to-first-sale</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get an Onboarding Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Faster Approvals</small>
                            <strong>Automated checks replace days of manual review.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Conversion</small>
                            <strong>Smooth UX means fewer vendors abandon the sign-up process.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Compliance</small>
                            <strong>Secure document collection for tax and legal requirements.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Self-Serve</small>
                            <strong>Vendors can manage their own data without emailing support.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When automated onboarding is necessary</p>
                        <p>You can't scale a marketplace if every vendor requires a 30-minute phone call to set up.</p>
                        <a className="btn" href="#contact">Discuss Provider Onboarding <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual vendor onboarding is an unscalable bottleneck.</h2>
                        <p>If your operations team has to manually review licenses, collect bank details over email, and set up profiles, you will never be able to grow your supply side fast enough.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Slow Verification</h3>
                                <p>Vendors are waiting days for their identity or business documents to be approved, causing them to lose interest.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Data Security Risks</h3>
                                <p>Collecting sensitive tax or bank information via email or unsecured forms opens you up to massive liability.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>High Support Burden</h3>
                                <p>Vendors constantly email support to change their pricing, update their availability, or fix typos on their profile.</p>
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
                                <h2>Secure portals that empower your suppliers.</h2>
                            </div>
                            <p>We build the self-serve infrastructure your vendors need to operate independently on your platform.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Verification</span>
                                <h3>Automated KYC / KYB</h3>
                                <p>Integrating with identity verification APIs (like Stripe Identity or Onfido) to instantly check government IDs and business licenses.</p>
                                <div className="deliverable-tags"><small>KYC/KYB</small><small>Identity</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Profiles</span>
                                <h3>Self-Serve Vendor Portals</h3>
                                <p>Custom dashboards where suppliers can edit their public profiles, upload media, and set their own pricing.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Profiles</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Logistics</span>
                                <h3>Inventory & Availability</h3>
                                <p>Complex calendars and inventory management UIs that allow vendors to block out dates or manage stock levels.</p>
                                <div className="deliverable-tags"><small>Inventory</small><small>Calendars</small><small>Stock</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Compliance</span>
                                <h3>Secure Document Collection</h3>
                                <p>Encrypted flows for collecting W9s, tax documents, and bank details without exposing sensitive data.</p>
                                <div className="deliverable-tags"><small>Tax</small><small>Security</small><small>Encryption</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Onboarding Build</p>
                            <h2>Reducing supplier approval time from 3 days to 5 minutes.</h2>
                        </div>
                        <p>See how we automated the onboarding flow for a healthcare staffing marketplace, safely verifying medical licenses in real-time.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Portal Development</span>
                                <span>Next.js + API Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Automated Vendor Onboarding</p>
                                <h2>Eliminating the manual review bottleneck.</h2>
                                <p>A healthcare marketplace was manually verifying nursing licenses against state databases, a process taking 3 days and severely limiting their growth.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The operations team was drowning in manual verification work. Nurses were dropping off during the 3-day wait time and joining competitor platforms.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure Next.js onboarding portal that integrated with a specialized medical license API. When a nurse submits their credentials, the system pings the state database and verifies it instantly.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The onboarding time dropped from 72 hours to 5 minutes. The platform successfully onboarded 300% more nurses in the following quarter without hiring additional operations staff.</strong></div>
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
                        <h2 id="faq-title">Common questions about provider onboarding.</h2>
                        <p>Answers covering KYC, vendor management, and compliance.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What is KYC and KYB?</summary>
                            <p>Know Your Customer (KYC) and Know Your Business (KYB) are compliance checks to verify identity and prevent fraud. They are legally required for many marketplaces, especially those handling financial payouts.</p>
                        </details>
                        <details>
                            <summary>Can vendors manage their own payout methods?</summary>
                            <p>Yes. We typically integrate Stripe Connect, which provides a secure flow for vendors to enter their bank details directly, keeping your platform out of PCI compliance scope.</p>
                        </details>
                        <details>
                            <summary>What happens if a vendor fails verification?</summary>
                            <p>We build fallback workflows. If the API cannot automatically verify the document (e.g., blurry photo), the application is flagged and routed to your Admin Dashboard for a manual review.</p>
                        </details>
                        <details>
                            <summary>Can you migrate our existing vendors to a new portal?</summary>
                            <p>Yes. We write secure migration scripts to move your existing supplier data from legacy databases or spreadsheets into the new structured platform.</p>
                        </details>
                        <details>
                            <summary>Can vendors have multiple team members access their portal?</summary>
                            <p>Absolutely. For B2B marketplaces, we often build role-based access control (RBAC) into the vendor portal so they can invite their own staff with limited permissions.</p>
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
                    <h2>Build a platform your <br />suppliers will love. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to automate your KYC checks and empower your vendors? Let's discuss your onboarding workflow.</p>
                        <a className="btn" href="#contact">Get an Onboarding Proposal <span className="arrow">↗</span></a>
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
