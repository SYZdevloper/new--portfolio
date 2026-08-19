import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/availability-and-booking-journeys/" },
  title: "Availability & Booking Journeys | Hyperlink Tech Solutions",
  description: "We engineer custom booking engines that handle the complexities of travel—dynamic pricing, real-time inventory from API integrations, and multi-currency checkouts.",
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
                        <h1 id="service-title">Streamline complex multi-leg bookings.</h1>
                        <p className="hero-lead">We engineer custom booking engines that handle the complexities of travel—dynamic pricing, real-time inventory from API integrations, and multi-currency checkouts.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based booking flows that eliminate the need for clunky third-party widgets</li>
                            <li>Live API integrations with major reservation systems (TourCMS, Rezdy, FareHarbor)</li>
                            <li>Dynamic pricing logic supporting seasonality, group discounts, and multi-currency</li>
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
                            <small>01 · Higher Conversion</small>
                            <strong>Remove the friction of being redirected to an ugly, separate booking domain.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Dynamic Upsells</small>
                            <strong>Offer pre-trip extensions, insurance, and activity upgrades directly in the flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Pricing</small>
                            <strong>Guarantee that the rate shown on the website exactly matches your reservation backend.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · B2B / B2C Ready</small>
                            <strong>Serve both direct consumers and travel agents with different pricing from the same frontend.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is difficult</p>
                        <p>If a user is ready to spend $5,000, don't make them fight a broken widget.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky booking engines destroy direct revenue.</h2>
                        <p>Tour operators spend thousands on marketing only to send users to an out-of-the-box booking widget that looks like it was built in 2005. When the booking engine is slow, visually disconnected from the brand, or fails to calculate complex group pricing on mobile, the traveler abandons the cart.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users abandon the booking when they are suddenly redirected to a different URL with a completely different design.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile Checkout Failures</h3>
                                <p>The legacy booking widget is not responsive, making it impossible to select complex dates or add-ons on an iPhone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inflexible Logic</h3>
                                <p>The out-of-the-box tool cannot handle your specific business rules, like requiring a 20% deposit now and the balance 60 days prior.</p>
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
                            <p>We engineer booking engines that handle the heavy lifting of travel logic while remaining beautiful and frictionless.</p>
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
                                <h3>Reservation API Middleware</h3>
                                <p>Developing secure Node.js layers that translate availability requests between the modern frontend and legacy tour software databases.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Complex Pricing Engines</h3>
                                <p>Ensuring that seasonality rules, child vs. adult rates, and promo codes are accurately reflected in real-time.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Pricing</small><small>Rates</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Payment Gateway Integration</h3>
                                <p>Implementing Stripe or Adyen to support split payments, deposits, and local international payment methods.</p>
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
                            <p className="eyebrow">Featured Travel Platform</p>
                            <h2>Modernizing global tour operations.</h2>
                        </div>
                        <p>See how we helped a global luxury tour operator migrate from an outdated legacy reservation system to a modern headless architecture, resulting in a 40% increase in direct consumer bookings and massive efficiency gains for their travel agents.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Travel Tech</span>
                                <span>Reservation Systems</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/travel-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>From discovery to departure.</h2>
                                <p>We developed a custom frontend that integrates directly with their Tour Operator Software (TourCMS). By removing the friction of a clunky booking widget and building a dynamic itinerary planner, we transformed how customers buy complex travel.</p>
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
                        <h2 id="faq-title">Common questions about travel tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our Tour Operator Software or GDS?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to platforms like TourCMS, Rezdy, or major GDS (Global Distribution Systems) like Amadeus. This ensures live availability, dynamic pricing, and seamless reservation injection.</p>
                        </details>
                        <details>
                            <summary>Can you build custom multi-day booking engines?</summary>
                            <p>Yes. Off-the-shelf booking tools often fail when a trip involves multiple hotels, flights, and activities over 14 days. We build fully custom React-based booking flows that handle complex, multi-leg itineraries intuitively.</p>
                        </details>
                        <details>
                            <summary>How do you handle dynamic pricing and multiple currencies?</summary>
                            <p>Our custom booking engines calculate live pricing based on your backend rules (seasonality, capacity) and use geolocation to display the correct currency. We integrate with gateways like Stripe to process payments natively without redirects.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other travel capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/destination-and-trip-discovery/"><div><small>Discovery</small><h3>Destination Hubs</h3><p>Ignite the desire to travel.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/availability-and-booking-journeys/"><div><small>Revenue</small><h3>Booking Journeys</h3><p>Streamline complex bookings.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/itinerary-and-planning-tools/"><div><small>Customization</small><h3>Planning Tools</h3><p>Build the perfect trip.</p></div><b>Explore tools ↗</b></a>
                        <a className="related-card" href="/services/traveller-portals/"><div><small>Service</small><h3>Traveller Portals</h3><p>A digital companion.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your travel <br />and tour operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From visually stunning destination hubs to custom multi-leg booking engines and digital traveller portals, we build software that drives direct bookings and elevates the journey.</p>
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
