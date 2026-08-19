import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/dealer-and-partner-portals/" },
  title: "Telecom Dealer & Partner Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build secure, wholesale portals that allow third-party dealers to sell and provision telecom services.",
};

export default function DealerAndPartnerPortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/",
          "name": "Telecom Dealer & Partner Portals | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build secure, wholesale portals that allow third-party dealers to sell and provision telecom services.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/#service",
          "name": "Dealer & Partner Portals",
          "serviceType": "Telecom Engineering",
          "url": "https://hyperlinktechsolutions.com/services/dealer-and-partner-portals/",
          "description": "Build secure, wholesale portals that allow third-party dealers to sell and provision telecom services.",
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
                    <strong>Partner Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating wholesale channels</div>
                        <p className="eyebrow">Dealer & Partner Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Empower your dealers to sell <em class="accent-text">without emailing your team.</em>' }}></h1>
                        <p className="hero-lead">We build secure B2B portals for telecom wholesalers, allowing your third-party dealers and technicians to qualify addresses, submit orders, and track commissions entirely self-serve.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Eliminate manual order entry by connecting dealers directly to your APIs</li>
                            <li>Implement strict Role-Based Access Control for master agents and sub-agents</li>
                            <li>Provide real-time commission tracking and order status dashboards</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Telecom benefits">
                        <div className="proof-item">
                            <small>01 · Zero Data Entry</small>
                            <strong>Orders flow straight from the dealer to provisioning.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Hierarchical Logic</small>
                            <strong>Manage master agents and their sub-dealers easily.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Commission Clarity</small>
                            <strong>Dealers can track their own payouts, reducing support tickets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Secure Access</small>
                            <strong>Strict authentication protocols protect your core network.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When partner portals are necessary</p>
                        <p>You cannot scale a wholesale telecom business using PDF order forms and spreadsheets.</p>
                        <a className="btn" href="#contact">Discuss Wholesale Portals <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual dealer orders create massive operational bottlenecks.</h2>
                        <p>If your wholesale partners have to email an Excel sheet or a PDF every time they close a deal, your provisioning team is spending all their time doing manual data entry instead of turning up circuits.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Manual Provisioning Errors</h3>
                                <p>Re-typing a dealer's order into your billing system often leads to typos, resulting in the wrong service being provisioned.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Commission Confusion</h3>
                                <p>Dealers constantly email your finance team asking for updates on their payouts, creating massive support overhead.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lack of Visibility</h3>
                                <p>Partners have no way of knowing if an order is stuck in engineering or ready for install, forcing them to call your team for status updates.</p>
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
                                <h2>Secure, automated B2B infrastructure.</h2>
                            </div>
                            <p>We build complex web portals that bridge the gap between your third-party sales force and your internal engineering systems.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>B2B Portal Development</h3>
                                <p>Building lightning-fast Next.js dashboards customized specifically for wholesale workflows and bulk order submission.</p>
                                <div className="deliverable-tags"><small>Next.js</small><small>B2B</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Integration</span>
                                <h3>Automated Provisioning Logic</h3>
                                <p>Connecting the portal to your core network APIs, meaning an order placed by a dealer instantly triggers the backend build without human intervention.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Automation</small><small>Provisioning</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Role-Based Access Control</h3>
                                <p>Architecting complex permission hierarchies so Master Dealers can view the performance of their sub-agents securely.</p>
                                <div className="deliverable-tags"><small>RBAC</small><small>Permissions</small><small>IAM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Finance</span>
                                <h3>Commission Tracking</h3>
                                <p>Integrating with your billing engine to display real-time ledgers, pending payouts, and historical commission statements for each partner.</p>
                                <div className="deliverable-tags"><small>Commissions</small><small>Ledgers</small><small>Finance</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Portal Build</p>
                            <h2>Automating wholesale orders for a national ISP.</h2>
                        </div>
                        <p>See how we eliminated 20 hours a week of manual data entry by building a self-serve portal for 500+ field technicians.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Portal Engineering</span>
                                <span>Next.js + Core API Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Wholesale Telecom Portal</p>
                                <h2>Ending the era of PDF order forms.</h2>
                                <p>A national broadband provider heavily relied on third-party door-to-door sales teams. Every sale resulted in a PDF form emailed to the head office, causing a massive processing backlog.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The internal provisioning team was overwhelmed with data entry. Typos were common, and dealers were frustrated by the slow turnaround times.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a secure, mobile-friendly partner portal. Dealers can now qualify an address, select a bundle, and submit the order on their iPads. The portal API pushes the exact structured data directly into the ISP's billing engine.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Manual data entry was entirely eliminated. The time from a dealer closing a sale to the provisioning team receiving a clean, ready-to-build ticket dropped from 24 hours to 2 seconds.</strong></div>
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
                        <h2 id="faq-title">Common questions about Partner Portals.</h2>
                        <p>Answers covering security, hierarchies, and core integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle complex dealer hierarchies (Master vs Sub-agents)?</summary>
                            <p>We build advanced Role-Based Access Control (RBAC) into the database. A Master Agent logs in and sees aggregate data for all their sub-agents. A sub-agent logs in and only sees their own individual sales.</p>
                        </details>
                        <details>
                            <summary>Can the portal connect to our existing billing system?</summary>
                            <p>Yes. The primary purpose of these portals is integration. We use secure APIs to push orders directly into platforms like Rev.io, Sonar, or your proprietary CRM.</p>
                        </details>
                        <details>
                            <summary>Is it secure to let third parties interact with our APIs?</summary>
                            <p>We never let third parties touch your core APIs directly. We build the Next.js portal as a secure middle-layer. The portal validates the dealer's request, and then the portal's secure backend talks to your core network.</p>
                        </details>
                        <details>
                            <summary>Can dealers bulk-upload orders?</summary>
                            <p>Absolutely. For wholesale partners dealing in high volumes (like MDUs or enterprise setups), we frequently build CSV parsing tools within the portal so they can submit 100 orders at once.</p>
                        </details>
                        <details>
                            <summary>Can we white-label the portal for different master agents?</summary>
                            <p>Yes. Because we build custom Next.js frontends, we can implement dynamic theming. If Agent A logs in, they see their logo and brand colors; if Agent B logs in, the UI shifts to match theirs.</p>
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
                    <h2>Scale your wholesale channel <br />without adding headcount. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to automate your partner orders and eliminate manual data entry? Let's discuss your portal requirements.</p>
                        <a className="btn" href="#contact">Get a Portal Proposal <span className="arrow">↗</span></a>
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
