import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ordering-and-delivery/" },
  title: "Ordering & Delivery | Hyperlink Tech Solutions",
  description: "We build custom, commission-free online ordering engines and native apps that integrate directly with your Point of Sale (POS) system, allowing you to bypass third-party delivery fees.",
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
                    <strong>Direct Revenue</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Online Ordering</div>
                        <p className="eyebrow">Direct Revenue</p>
                        <h1 id="service-title">Own your off-premise dining.</h1>
                        <p className="hero-lead">We build custom, commission-free online ordering engines and native apps that integrate directly with your Point of Sale (POS) system, allowing you to bypass third-party delivery fees.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React or React Native ordering apps that inject tickets directly into the POS (Toast, Square, Revel)</li>
                            <li>Live menu syncing, ensuring 86'd items disappear from the website instantly</li>
                            <li>Integration with white-label delivery networks (DoorDash Drive, Uber Direct) to offer delivery without the 30% commission</li>
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
                            <small>01 · Higher Margins</small>
                            <strong>Stop giving away 30% of your off-premise revenue to third-party apps.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Own the Customer</small>
                            <strong>When guests order direct, you keep their email and purchase history for future marketing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Smoother Operations</small>
                            <strong>No more 'tablet farms'—web orders fire straight to the kitchen display exactly like dine-in tickets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Flexible Fulfillment</small>
                            <strong>Offer both scheduled curbside pickup and white-label delivery.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When delivery platforms take over</p>
                        <p>You do the cooking, but the delivery app takes the margin and owns the customer.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Third-party dependency is suffocating margins.</h2>
                        <p>Relying entirely on UberEats or DoorDash is a dangerous strategy. Not only do they take up to 30% of every order, but they also keep the customer data. If you don't offer a frictionless, direct way for loyal guests to order pickup or delivery, you are renting your own customers.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Crushing Commissions</h3>
                                <p>High delivery app fees turn high-volume off-premise sales into low-margin busywork.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>The Tablet Farm</h3>
                                <p>Staff spend hours manually re-keying orders from an iPad into the actual POS system, causing delays and errors.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Blindness</h3>
                                <p>You have no idea who is actually eating your food because the delivery apps refuse to share customer email addresses.</p>
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
                                <h2>Direct ordering engines.</h2>
                            </div>
                            <p>We engineer custom commerce platforms that put the control (and the margin) back in the hands of the restaurant.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>POS API Integration</h3>
                                <p>Middleware that connects the frontend directly to Toast or Square, mapping complex modifier groups and modifiers perfectly.</p>
                                <div className="deliverable-tags"><small>POS</small><small>Integration</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Custom Ordering Frontends</h3>
                                <p>React-based web apps with slide-out carts, upselling logic, and lightning-fast checkout flows.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Commerce</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>White-Label Delivery Routing</h3>
                                <p>Connecting to DoorDash Drive APIs so the customer gets their food delivered, but you own the transaction.</p>
                                <div className="deliverable-tags"><small>Logistics</small><small>APIs</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Native Mobile Apps</h3>
                                <p>Deploying the ordering engine as iOS and Android apps using React Native for your most loyal customers.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Apps</small><small>Retention</small></div>
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
