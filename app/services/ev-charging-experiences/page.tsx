import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ev-charging-experiences/" },
  title: "EV & Charging Experiences | Hyperlink Tech Solutions",
  description: "Premium digital experiences for electric vehicle charging, from discovery to payment.",
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
                    <strong>EV & Charging Experiences</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">EV Charging App Design</div>
                        <p className="eyebrow">EV & Charging Experiences</p>
                        <h1 id="service-title">Seamless electric vehicle charging journeys for drivers.</h1>
                        <p className="hero-lead">We design end-to-end digital experiences that keep drivers informed, charged, and delighted.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Find available chargers instantly with accurate location data</li>
                            <li>Start sessions with one tap via Apple Pay or RFID</li>
                            <li>Know exactly if a charger is in use, offline, or available</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Charger Discovery</small>
                            <strong>Find available chargers instantly with accurate location data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Seamless Payments</small>
                            <strong>Start sessions with one tap via Apple Pay, Google Pay, or RFID.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Real-time Status</small>
                            <strong>Know exactly if a charger is in use, offline, or available.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · High Driver NPS</small>
                            <strong>Eliminate frustration and build brand loyalty through UX.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When UX matters</p>
                        <p>Drivers shouldn't need a manual to charge their vehicle.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Charging should be as simple as pumping gas.</h2>
                        <p>We help charge point operators replace clunky, error-prone apps with streamlined digital experiences that get drivers plugged in and paying without the headache.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Fragmented Apps</h3>
                                <p>Drivers are forced to juggle multiple apps to locate a charger, start a session, and manage their wallet.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Charger Anxiety</h3>
                                <p>Poor telemetry means drivers arrive at chargers that are actually broken, offline, or occupied.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Payment Friction</h3>
                                <p>Complex checkout flows, forced account creation, and pre-authorization failures cause drivers to abandon sessions.</p>
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
                                <h2>Custom charging apps built for reliability.</h2>
                            </div>
                            <p>We build native apps and responsive web portals that connect directly to your CSMS to deliver a flawless driver journey.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Mobile App Design</h3>
                                <p>Intuitive native iOS and Android interfaces focused on speed, accessibility, and at-a-glance status visibility.</p>
                                <div className="deliverable-tags"><small>iOS/Android</small><small>React Native</small><small>UX/UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Payment Integration</h3>
                                <p>Secure integration with Stripe, Adyen, and digital wallets for friction-free, PCI-compliant checkout.</p>
                                <div className="deliverable-tags"><small>Stripe/Adyen</small><small>Apple Pay</small><small>RFID</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Mapping & Routing</h3>
                                <p>Interactive maps powered by Mapbox or Google Maps with live charger availability and turn-by-turn routing.</p>
                                <div className="deliverable-tags"><small>Mapbox</small><small>Clustering</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Account Management</h3>
                                <p>Self-serve portals for drivers to manage subscriptions, view charging history, and download tax invoices.</p>
                                <div className="deliverable-tags"><small>Invoices</small><small>Subscriptions</small><small>Auth</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured EV Charging Platform</p>
                            <h2>Boosting utilization rates for a national charger network.</h2>
                        </div>
                        <p>See how we helped a leading energy provider increase session completion by 40% through a refreshed mobile experience.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Mobile UI</span>
                                <span>Real-time Availability</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Driver-first Journey</p>
                                <h2>From locating a charger to payment in a single tap.</h2>
                                <p>Before, drivers had to juggle three apps to find a spot, start a session, and pay. Our unified experience streamlined the flow.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Fragmented interfaces caused drop-offs and low utilization.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a responsive web-app with live map, reservation, and integrated payment.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Session completion rose 40%, and NPS increased by 22 points.</strong></div>
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
                        <h2 id="faq-title">What operators ask about charging UX.</h2>
                        <p>Answers covering real-time availability, payment integration, and driver data.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can drivers reserve a charger in advance?</summary>
                            <p>Yes, our platform supports reservations that lock a slot for up to 30 minutes, syncing directly with the charger's OCPP backend.</p>
                        </details>
                        <details>
                            <summary>Which payment processors are supported?</summary>
                            <p>We integrate with Stripe, Adyen, and regional providers via PCI-compliant APIs to ensure smooth checkout flows.</p>
                        </details>
                        <details>
                            <summary>How is driver privacy handled?</summary>
                            <p>All location data is stored encrypted, and we only retain session logs strictly needed for billing and support.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your charging ecosystem with the systems required to launch.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Sync charger status and pricing data.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Development</small><h3>Custom Web Apps</h3><p>Build bespoke dashboards for drivers.</p></div><b>Explore apps ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Design</small><h3>Design Systems</h3><p>Ensure a consistent brand experience.</p></div><b>Explore systems ↗</b></a>
                        <a className="related-card" href="/services/mobile-app-development/"><div><small>Mobile</small><h3>Mobile Apps</h3><p>Native iOS and Android charging experiences.</p></div><b>Explore mobile ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Plan your next-generation EV <br />charging experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to accelerate driver adoption and revenue? Let's discuss your charging UI.</p>
                        <a className="btn" href="#contact">Discuss Your EV Experience <span className="arrow">↗</span></a>
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
