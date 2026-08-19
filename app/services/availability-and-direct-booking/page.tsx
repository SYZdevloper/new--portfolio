import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/availability-and-direct-booking/" },
  title: "Availability & Direct Booking | Hyperlink Tech Solutions",
  description: "We build frictionless, headless booking engines that integrate seamlessly with your Property Management System (PMS) to increase direct revenue and reduce OTA reliance.",
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
                    <strong>Conversion</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Booking Engines</div>
                        <p className="eyebrow">Conversion</p>
                        <h1 id="service-title">Maximize high-margin direct bookings.</h1>
                        <p className="hero-lead">We build frictionless, headless booking engines that integrate seamlessly with your Property Management System (PMS) to increase direct revenue and reduce OTA reliance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based booking flows that eliminate the need for clunky third-party widgets</li>
                            <li>Live API integrations with major PMS platforms (Opera, Cloudbeds, Mews) for real-time rates</li>
                            <li>Frictionless checkout experiences with digital wallet integration (Apple Pay, Google Pay)</li>
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
                            <small>01 · Lower OTA Fees</small>
                            <strong>Drive more traffic to your direct channel, saving 15-25% on commission.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Conversion</small>
                            <strong>Remove the friction of being redirected to an ugly, separate booking domain.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Dynamic Upsells</small>
                            <strong>Offer room upgrades, breakfast, and spa packages directly in the booking flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Accurate Pricing</small>
                            <strong>Guarantee that the rate shown on the website exactly matches your PMS.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is difficult</p>
                        <p>If your direct booking is harder to use than Expedia, you will lose the margin.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky booking widgets destroy direct revenue.</h2>
                        <p>Hotels spend thousands on marketing only to send users to a third-party booking widget that looks like it was built in 2005. When the booking engine is slow, visually disconnected from the brand, or fails on mobile, the guest will simply book your hotel through an Online Travel Agency (OTA) instead.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users abandon the booking when they are suddenly redirected to a different URL with a completely different design.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile Checkout Failures</h3>
                                <p>The legacy booking widget is not responsive, making it impossible to select dates on an iPhone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Upsell Revenue</h3>
                                <p>The out-of-the-box booking tool doesn't allow for elegant promotion of high-margin add-ons like airport transfers.</p>
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
                                <h2>Custom booking architecture.</h2>
                            </div>
                            <p>We engineer booking engines that look like your brand and convert like an OTA.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Booking Frontends</h3>
                                <p>Building bespoke React booking flows that keep the user on your domain from date selection to payment.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>PMS API Middleware</h3>
                                <p>Developing secure Node.js layers that translate availability requests between the modern frontend and legacy PMS databases.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Pricing Logic</h3>
                                <p>Ensuring that complex length-of-stay rules, promo codes, and corporate rates are accurately reflected in real-time.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>Rates</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Payment Gateway Integration</h3>
                                <p>Implementing Stripe or Adyen to support one-click checkouts and local international payment methods.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Security</small><small>Fintech</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Hospitality Platform</p>
                            <h2>Elevating the digital guest journey.</h2>
                        </div>
                        <p>See how we helped a luxury hotel group redesign their entire digital footprint, migrating to a headless architecture that seamlessly blended immersive property storytelling with a lightning-fast custom booking engine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Hospitality Tech</span>
                                <span>Direct Bookings</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/hospitality-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Reducing reliance on OTAs.</h2>
                                <p>We developed a custom frontend that integrates directly with their Property Management System (PMS). By removing the friction of a clunky legacy booking widget and replacing it with a tailored React experience, direct bookings increased by 42%.</p>
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
                        <h2 id="faq-title">Common questions about hospitality tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Property Management System (PMS)?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to industry-standard PMS platforms like Opera (Oracle), Cloudbeds, or Mews. This ensures live availability, real-time pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom booking engines instead of using widgets?</summary>
                            <p>Yes. Legacy booking widgets often break the brand experience and hurt conversions. We build fully custom React-based booking flows that look and feel like part of your website, while pulling data from your backend systems via API.</p>
                        </details>
                        <details>
                            <summary>How do you ensure the website is fast despite heavy imagery and video?</summary>
                            <p>We use Next.js and advanced media optimization techniques (lazy loading, next-gen formats, edge caching). This allows us to build visually immersive, video-heavy hotel sites that still load in under a second and rank highly on Google.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other hospitality capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/property-and-experience-websites/"><div><small>Discovery</small><h3>Property Websites</h3><p>Immersive digital destinations.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/availability-and-direct-booking/"><div><small>Revenue</small><h3>Direct Booking</h3><p>Maximize high-margin reservations.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/guest-and-concierge-portals/"><div><small>Service</small><h3>Guest Portals</h3><p>Elevate the on-property experience.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/offers-dining-and-events/"><div><small>Ancillary</small><h3>Dining & Events</h3><p>Drive revenue across the property.</p></div><b>Explore ancillary ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your hospitality <br />and tourism operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning headless property websites to custom PMS-integrated booking engines and digital concierge portals, we build software that drives direct revenue and elevates the guest experience.</p>
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
