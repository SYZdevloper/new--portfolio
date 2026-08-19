import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/membership-and-visitor-accounts/" },
  title: "Membership & Visitor Accounts | Hyperlink Tech Solutions",
  description: "We build secure portals where loyal members can renew their passes, access digital tickets for fast entry, and claim exclusive food and merchandise discounts.",
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
                    <strong>Loyalty</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Passholder Portals</div>
                        <p className="eyebrow">Loyalty</p>
                        <h1 id="service-title">Self-serve management for annual passholders.</h1>
                        <p className="hero-lead">We build secure portals where loyal members can renew their passes, access digital tickets for fast entry, and claim exclusive food and merchandise discounts.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Self-serve dashboards allowing members to view their digital pass barcode, renew their subscription, or update their photo</li>
                            <li>Exclusive access layers allowing passholders to book limited-capacity events or early-access dates before the general public</li>
                            <li>Automated card-on-file billing for monthly subscription models or annual renewals</li>
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
                            <small>01 · Reduced Support Calls</small>
                            <strong>Passholders can update their expired credit card or change their address without calling guest services.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Retention</small>
                            <strong>Make it incredibly easy for a member to click 'Renew Now' when their pass is about to expire.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Gate Entry</small>
                            <strong>Members always have their digital barcode ready on their phone, eliminating lost plastic cards.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Targeted Marketing</small>
                            <strong>Use the portal to push personalized offers based on a member's specific visit history.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When loyalty is analog</p>
                        <p>Your guest services desk shouldn't be clogged with people trying to reprint a lost plastic pass.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of self-service frustrates your best customers.</h2>
                        <p>Annual passholders are your most valuable asset. But if they have to stand in a 20-minute line at Guest Services just to update their photo, or if they can't figure out how to apply their member discount online, they feel undervalued. A clunky renewal process directly leads to churn.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>High Admin Burden</h3>
                                <p>Your guest services team spends hours processing simple membership renewals or replacing lost cards manually.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Opaque Benefits</h3>
                                <p>Members don't renew because they don't know how to access or use the '10% off food' benefit they were promised.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Login Friction</h3>
                                <p>Users abandon their accounts because the legacy portal requires a 16-digit pass number as a username instead of a simple email address.</p>
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
                                <h2>Centralized passholder operations.</h2>
                            </div>
                            <p>We engineer secure dashboards that give your loyal members complete control over their relationship with the park.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Passholder Dashboards</h3>
                                <p>API integrations pulling live data from the ticketing software, allowing members to view their digital pass and expiry date.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>Dashboards</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Self-Serve Renewals</h3>
                                <p>Logic engines that allow users to safely update a credit card and automatically process a renewal payment via API.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>APIs</small><small>Service</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Benefit Wallets</h3>
                                <p>Custom interfaces displaying available perks (e.g., 'Free Bring-a-Friend Ticket') which can be redeemed directly into the cart.</p>
                                <div className="deliverable-tags"><small>Commerce</small><small>Loyalty</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0 to ensure a seamless experience across the web and mobile apps.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Data</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Attractions Platform</p>
                            <h2>Transforming the visitor experience.</h2>
                        </div>
                        <p>See how we helped a major regional zoo replace a clunky legacy ticketing widget with a custom React booking flow, increasing online pre-sales by 40% and drastically reducing queues at the front gate on Saturday mornings.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Visitor Tech</span>
                                <span>Ticketing Integrations</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/attractions-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless entry, higher revenue.</h2>
                                <p>We developed a secure ticketing engine connected directly to their POS system (like Gateway or Centaman). Families can now purchase time-slotted tickets, add a giraffe-feeding experience to their cart, and checkout with Apple Pay in seconds.</p>
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
                        <h2 id="faq-title">Common questions about attractions tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with complex ticketing systems like Gateway Ticketing or Centaman?</summary>
                            <p>We build API middleware that connects your custom web frontend directly to your core ticketing software. This allows us to pull live capacity, dynamic pricing, and pass validations without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you handle time-slotted or capacity-limited entry?</summary>
                            <p>Yes. We build interactive calendar and time-picker UIs that query the ticketing system in real-time. If a 10:00 AM slot reaches its 50-person limit, our frontend immediately grays it out to prevent overselling.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets for Apple Wallet or Google Pay?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your turnstiles or gate staff can scan instantly.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other attraction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/attraction-and-activity-websites/"><div><small>Discovery</small><h3>Attraction Websites</h3><p>Showcase the experience.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/tickets-passes-and-booking/"><div><small>Revenue</small><h3>Ticketing & Passes</h3><p>Frictionless gate entry.</p></div><b>Explore ticketing ↗</b></a>
                        <a className="related-card" href="/services/membership-and-visitor-accounts/"><div><small>Loyalty</small><h3>Member Portals</h3><p>Self-serve passholders.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/groups-events-and-education/"><div><small>B2B Operations</small><h3>Group Bookings</h3><p>Streamline large groups.</p></div><b>Explore B2B ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your attraction <br />and visitor operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From custom ticketing engines to digital passholder wallets and live attendance dashboards, we build software that drives revenue and reduces gate friction.</p>
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
