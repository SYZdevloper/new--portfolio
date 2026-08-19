import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/driver-and-route-workflows/" },
  title: "Driver & Route Workflows | Hyperlink Tech Solutions",
  description: "We build native mobile applications (iOS/Android) for your delivery fleet, featuring turn-by-turn route optimization, barcode scanning, and digital Proof of Delivery (ePOD).",
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
                    <strong>Mobile Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Driver Apps</div>
                        <p className="eyebrow">Mobile Operations</p>
                        <h1 id="service-title">Optimize the final mile.</h1>
                        <p className="hero-lead">We build native mobile applications (iOS/Android) for your delivery fleet, featuring turn-by-turn route optimization, barcode scanning, and digital Proof of Delivery (ePOD).</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Native React Native applications ensuring smooth performance, offline capability, and low battery drain</li>
                            <li>Dynamic route optimization ordering 80+ stops based on traffic, time windows, and vehicle capacity</li>
                            <li>Digital Proof of Delivery (ePOD) capturing signatures, photos, and exact GPS coordinates at the drop</li>
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
                            <small>01 · Higher Utilization</small>
                            <strong>Drivers complete significantly more stops per day when their route is mathematically optimized.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Flawless Accuracy</small>
                            <strong>Barcode scanning ensures the driver physically cannot drop the wrong package at the wrong address.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Instant Visibility</small>
                            <strong>As soon as a package is marked delivered on the app, the dispatcher and consumer see it.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Smoother Onboarding</small>
                            <strong>An intuitive, consumer-grade app means new drivers can learn the job in minutes, not days.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the fleet is disconnected</p>
                        <p>You cannot manage a modern courier network using paper manifests and WhatsApp messages.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Analog tools cripple driver efficiency.</h2>
                        <p>The final mile is the most expensive part of the supply chain. If drivers are manually deciding their own routing order, getting lost, or recording signatures on clipboards, you are burning fuel and margin. A clunky app that drains their phone battery or crashes constantly leads to high driver turnover.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Inefficient Routing</h3>
                                <p>Drivers crisscross the same zip code three times because they are following an unoptimized, alphabetized list.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Failed Drops</h3>
                                <p>Packages are left at the wrong door because the driver had no barcode scanner to verify the parcel against the address.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Proof of Delivery Delays</h3>
                                <p>The dispatch team has to wait until the end of the day for the driver to return the paper manifest to confirm deliveries.</p>
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
                                <h2>The digital driver companion.</h2>
                            </div>
                            <p>We engineer mobile-first tools that turn gig-workers and professional couriers into highly efficient logistics nodes.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Native Mobile Apps</h3>
                                <p>Building high-performance iOS and Android apps using React Native, utilizing device hardware (camera, GPS).</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>React Native</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Route Optimization Algorithms</h3>
                                <p>Integrating with Mapbox or Onfleet APIs to instantly calculate the fastest sequence of stops, updating live if a new priority order is added.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Maps</small><small>Efficiency</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Barcode & Scanning Logic</h3>
                                <p>Implementing fast, reliable camera scanning to verify parcel IDs against the manifest during loading and delivery.</p>
                                <div className="deliverable-tags"><small>Hardware</small><small>Operations</small><small>Accuracy</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Offline Capabilities</h3>
                                <p>Ensuring the app stores route data locally so a driver can still complete a delivery inside a concrete parking garage with no cellular signal.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Data</small><small>Reliability</small></div>
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
