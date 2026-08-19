import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tracking-and-notifications/" },
  title: "Tracking & Notifications | Hyperlink Tech Solutions",
  description: "We build visually rich, map-based tracking pages and automated notification systems (SMS/Email) that keep the end-consumer informed every step of the delivery journey.",
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
                    <strong>Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Tracking Portals</div>
                        <p className="eyebrow">Service</p>
                        <h1 id="service-title">The Amazon-grade tracking experience.</h1>
                        <p className="hero-lead">We build visually rich, map-based tracking pages and automated notification systems (SMS/Email) that keep the end-consumer informed every step of the delivery journey.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>White-labeled tracking links displaying a live map pin of the driver approaching the destination</li>
                            <li>Automated milestone notifications (Out for Delivery, Next Stop, Delivered) via SMS and email</li>
                            <li>Interactive feedback loops allowing the consumer to rate the delivery experience immediately</li>
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
                            <strong>Consumers can see exactly where their package is without calling your team or the merchant.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Higher Delivery Success</small>
                            <strong>When consumers know a driver is 10 minutes away, they make sure to answer the door.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Brand Protection</small>
                            <strong>Provide a premium, modern tracking experience that makes your merchants look highly professional.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Proof</small>
                            <strong>A single source of truth for all historical tracking data, signatures, and delivery photos.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When service is analog</p>
                        <p>Your customer service team shouldn't be a human tracking number.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lack of visibility frustrates modern consumers.</h2>
                        <p>End-consumers expect the same tracking visibility they get from Amazon or Uber. If they receive a vague 'Your package will arrive between 9 AM and 5 PM' email, they are instantly frustrated. When there is no live map or accurate ETA, your support phones ring constantly with 'Where is my delivery?' calls.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Tracking Blind Spots</h3>
                                <p>Consumers are angry because they receive no updates between the package leaving the depot and arriving.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Failed Deliveries</h3>
                                <p>Drivers waste time attempting a delivery because the consumer didn't know they were arriving and stepped out.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>High Support Costs</h3>
                                <p>Your dispatch team wastes hours every week acting as the middleman between the angry consumer and the driver.</p>
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
                                <h2>Comprehensive consumer visibility.</h2>
                            </div>
                            <p>We engineer secure dashboards that give the end-consumer absolute clarity and control over their delivery.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Visual Tracking Maps</h3>
                                <p>Integrating with your driver app or API provider to show a live, moving map pin of the vehicle's location.</p>
                                <div className="deliverable-tags"><small>Maps</small><small>APIs</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Predictive ETAs</h3>
                                <p>Logic engines that calculate precise estimated times of arrival based on the driver's current position and traffic data.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Data</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated SMS Notifications</h3>
                                <p>Transactional Twilio integrations triggering text messages when the package is the 'next stop' on the route.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>Automation</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Delivery Preference Forms</h3>
                                <p>Interfaces allowing the consumer to quickly tell the driver to 'Leave at back door' while the delivery is en route.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Integration</small><small>Service</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Last-Mile Platform</p>
                            <h2>Powering the local delivery economy.</h2>
                        </div>
                        <p>See how we helped an urban courier network replace manual dispatching with a fully automated routing and merchant portal, scaling their daily capacity from 500 to 5,000 drops per day without hiring more dispatchers.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Courier Tech</span>
                                <span>Routing & Tracking</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/last-mile-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Complete final mile control.</h2>
                                <p>We developed a secure B2B merchant portal integrated directly with Shopify, automatically ingesting orders, clustering them via a custom routing algorithm, and pushing turn-by-turn routes directly to the drivers' native mobile app.</p>
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
                        <h2 id="faq-title">Common questions about last-mile tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with e-commerce platforms like Shopify?</summary>
                            <p>We build API middleware that listens for webhooks from Shopify, WooCommerce, or Magento. When a local order is placed, the data is automatically ingested into your dispatch software, generating a tracking link instantly.</p>
                        </details>
                        <details>
                            <summary>Do you build native driver apps?</summary>
                            <p>Yes. We use React Native to build high-performance iOS and Android apps for your fleet. These apps handle barcode scanning, digital signature capture (ePOD), and photo uploads when packages are left at the door.</p>
                        </details>
                        <details>
                            <summary>Can you optimize multi-stop routes automatically?</summary>
                            <p>Yes. We integrate routing algorithms (like Mapbox Optimization or Onfleet APIs) that instantly calculate the most efficient sequence for a driver handling 80 deliveries in a specific zip code, minimizing drive time and fuel costs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other courier capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/delivery-booking-and-pricing/"><div><small>Revenue</small><h3>Booking & Pricing</h3><p>Instant local delivery rates.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/tracking-and-notifications/"><div><small>Service</small><h3>Tracking & Alerts</h3><p>The Amazon-grade experience.</p></div><b>Explore tracking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-merchant-portals/"><div><small>B2B Operations</small><h3>Merchant Portals</h3><p>Empower volume shippers.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/driver-and-route-workflows/"><div><small>Mobile</small><h3>Driver Workflows</h3><p>Optimize the final mile.</p></div><b>Explore driver apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your courier <br />and last-mile operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated B2B merchant portals to live consumer tracking links and native driver apps, we build software that drives efficiency in the final mile.</p>
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
