import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/accounts-loyalty-and-catering/" },
  title: "Accounts, Loyalty & Catering | Hyperlink Tech Solutions",
  description: "We develop unified guest accounts that track loyalty points across all locations, alongside specialized portals for managing high-value corporate catering orders.",
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
                    <strong>Retention & B2B</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Loyalty & B2B</div>
                        <p className="eyebrow">Retention & B2B</p>
                        <h1 id="service-title">Turn one-time diners into regulars.</h1>
                        <p className="hero-lead">We develop unified guest accounts that track loyalty points across all locations, alongside specialized portals for managing high-value corporate catering orders.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Unified digital wallets storing loyalty points earned both in-store (POS) and online</li>
                            <li>Single Sign-On (SSO) allowing guests to log in, view order history, and re-order their 'usual' with one click</li>
                            <li>Dedicated B2B catering portals handling complex tax-exempt orders, invoice payments, and scheduled drops</li>
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
                            <small>01 · Higher LTV</small>
                            <strong>Encourage repeat visits through engaging, easy-to-understand loyalty mechanics.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Frictionless Reordering</small>
                            <strong>Guests can reorder their past customized meals with a single tap.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · B2B Revenue</small>
                            <strong>Capture lucrative corporate catering orders with a professional, self-serve portal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Unified Identity</small>
                            <strong>Stop treating the same guest as two different people online and offline.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When loyalty is fragmented</p>
                        <p>Telling a guest they 'can't use those points online' destroys brand trust.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disconnected systems frustrate your best guests.</h2>
                        <p>Loyalty programs fail when they are difficult to use. If a guest spends hundreds dining in your restaurants but logs into your online ordering app to see '0 points' because the systems don't talk to each other, you are actively alienating your most valuable demographic.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Siloed Rewards</h3>
                                <p>Guests are frustrated when they realize their in-store purchases aren't counting towards their digital VIP tier.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Catering Chaos</h3>
                                <p>Massive $2,000 corporate catering orders are being processed via messy email threads instead of a dedicated portal.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Login Friction</h3>
                                <p>Users abandon their accounts because they have different passwords for the app, the reservations site, and the loyalty program.</p>
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
                                <h2>A single view of the guest.</h2>
                            </div>
                            <p>We engineer digital identity solutions where guests feel recognized and valued, regardless of how they order.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Unified Loyalty Integrations</h3>
                                <p>Connecting systems like Paytronix or Thanx directly into both the headless website and the physical POS.</p>
                                <div className="deliverable-tags"><small>Loyalty</small><small>APIs</small><small>Rewards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure, centralized login flows using Auth0, ensuring one identity across all brand touchpoints.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>B2B Catering Portals</h3>
                                <p>Custom interfaces where corporate admins can save company credit cards, schedule massive orders, and download tax invoices.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Commerce</small><small>Portals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Membership Cards</h3>
                                <p>Generating dynamic QR codes or Apple Wallet passes within the portal for easy scanning at physical registers.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Integration</small><small>UX</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured F&B Platform</p>
                            <h2>Owning the digital dining experience.</h2>
                        </div>
                        <p>See how we helped a national restaurant group migrate off third-party delivery apps by building a custom ordering engine that integrated directly with their Toast POS, increasing direct revenue and saving millions in commissions.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Restaurant Tech</span>
                                <span>POS Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/restaurant-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Direct revenue without the fees.</h2>
                                <p>We developed a custom frontend ordering app that syncs menus, modifiers, and 86'd items live from the POS. When a guest orders, the ticket fires straight to the kitchen display system (KDS) exactly as if they were sitting in the dining room.</p>
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
                        <h2 id="faq-title">Common questions about restaurant tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate online ordering with our POS?</summary>
                            <p>We build API middleware that connects the custom web frontend directly to modern POS systems like Toast, Square, or Lightspeed. This ensures that when an item is marked 'sold out' in the kitchen, it instantly disappears from the website.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with reservation systems like SevenRooms or Resy?</summary>
                            <p>Yes. Instead of using generic widgets that take users off-brand, we can build custom booking forms using the APIs of major reservation platforms. This keeps the user on your domain and improves conversion.</p>
                        </details>
                        <details>
                            <summary>How do you manage menus for a group with 20 different locations?</summary>
                            <p>We implement a headless CMS (like Sanity) connected to a geolocation engine. The system automatically detects the user's nearest restaurant and loads the specific menu and pricing for that location, preventing 'wrong store' orders.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other restaurant capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/brand-menu-and-location-websites/"><div><small>Discovery</small><h3>Brand & Menus</h3><p>Drive foot traffic digitally.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-waitlists/"><div><small>Acquisition</small><h3>Reservations</h3><p>Maximize table utilization.</p></div><b>Explore bookings ↗</b></a>
                        <a className="related-card" href="/services/ordering-and-delivery/"><div><small>Revenue</small><h3>Direct Ordering</h3><p>Own off-premise dining.</p></div><b>Explore ordering ↗</b></a>
                        <a className="related-card" href="/services/accounts-loyalty-and-catering/"><div><small>Retention</small><h3>Loyalty & Catering</h3><p>Turn diners into regulars.</p></div><b>Explore loyalty ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your restaurant <br />and hospitality operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From immersive brand sites to commission-free POS ordering engines and unified loyalty portals, we build software that drives direct revenue for multi-location groups.</p>
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
