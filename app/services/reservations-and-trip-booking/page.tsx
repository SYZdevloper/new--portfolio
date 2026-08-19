import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/reservations-and-trip-booking/" },
  title: "Reservations & Trip Booking | Hyperlink Tech Solutions",
  description: "We engineer custom booking engines that handle complex timetables, dynamic pricing, and multi-leg journeys, ensuring passengers can secure their tickets instantly.",
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
                        <h1 id="service-title">Frictionless passenger booking.</h1>
                        <p className="hero-lead">We engineer custom booking engines that handle complex timetables, dynamic pricing, and multi-leg journeys, ensuring passengers can secure their tickets instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based booking flows that eliminate the need for clunky third-party widgets</li>
                            <li>Live API integrations with your core reservation system for real-time seat availability</li>
                            <li>Seamless digital checkout flows supporting Apple Pay, Google Pay, and split payments</li>
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
                            <strong>Turn a frustrating, multi-step booking widget into a 30-second checkout flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Terminal Lines</small>
                            <strong>Shift more ticket sales online to reduce the burden on your physical ticket agents.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Dynamic Upsells</small>
                            <strong>Offer premium seating, luggage upgrades, or flexible ticket options directly in the flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Brand Control</small>
                            <strong>Keep the user on your domain from route selection all the way to payment.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When booking is difficult</p>
                        <p>If buying a bus ticket takes 10 minutes on a phone, passengers will just drive.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Clunky booking widgets destroy ticket sales.</h2>
                        <p>Transport operators spend thousands on marketing only to send users to an out-of-the-box booking widget that looks like it was built a decade ago. When the booking engine is slow, confusing for round-trips, or fails to load on a mobile device, the passenger abandons the purchase.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Redirect Drop-off</h3>
                                <p>Users abandon the booking when they are suddenly redirected to a different URL with a completely different design.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Mobile Checkout Failures</h3>
                                <p>The legacy booking widget is not responsive, making it impossible to select a specific seat on a phone.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inflexible Logic</h3>
                                <p>The off-the-shelf tool cannot handle your specific business rules, like multi-leg ferry journeys with vehicle types.</p>
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
                                <h2>Automated transport commerce.</h2>
                            </div>
                            <p>We engineer booking engines that handle the complex math of timetables while remaining beautiful.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom Booking Frontends</h3>
                                <p>Building bespoke React booking flows that keep the passenger on your domain from route selection to payment.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Ticketing API Middleware</h3>
                                <p>Developing secure Node.js layers that translate availability requests between the modern frontend and legacy reservation databases.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Seat Selection UI</h3>
                                <p>Building interactive, SVG-based seat maps where users can pick their exact spot on the bus or ferry.</p>
                                <div className="deliverable-tags"><small>React</small><small>SVG</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Wallet Integration</h3>
                                <p>Implementing Stripe or Adyen to support one-click checkouts and generating Apple Wallet passes for tickets.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Fintech</small><small>Mobile</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Transport Platform</p>
                            <h2>Modernizing passenger transport.</h2>
                        </div>
                        <p>See how we helped a regional bus and ferry operator replace their legacy booking widget with a custom React frontend, increasing online ticket sales by 35% and drastically reducing lines at the physical terminal.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Transport Tech</span>
                                <span>Booking & Ticketing</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/transport-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless digital ticketing.</h2>
                                <p>We developed a secure booking engine connected directly to their proprietary inventory system. Passengers can now book multi-leg journeys on their phone in seconds, receiving Apple Wallet passes instead of paper tickets.</p>
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
                        <h2 id="faq-title">Common questions about transport tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with our legacy ticketing or reservation system?</summary>
                            <p>We build secure API middleware to connect your headless frontend directly to complex transport management systems. This allows us to pull live timetables, seat availability, and pricing without exposing the core database.</p>
                        </details>
                        <details>
                            <summary>Can you build custom routing and timetable planners?</summary>
                            <p>Yes. We build interactive trip planners where users can input their origin and destination, and our logic engine calculates the optimal route, showing live ETAs and connection times based on your schedules.</p>
                        </details>
                        <details>
                            <summary>Do you build digital tickets like Apple Wallet passes?</summary>
                            <p>Yes. Upon successful checkout, we can automatically generate dynamic QR codes and native Apple Wallet/Google Pay passes that your drivers or terminal staff can scan easily.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other transport capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/transport-service-websites/"><div><small>Discovery</small><h3>Transport Websites</h3><p>Showcase your network.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/reservations-and-trip-booking/"><div><small>Revenue</small><h3>Trip Booking</h3><p>Frictionless ticketing.</p></div><b>Explore booking ↗</b></a>
                        <a className="related-card" href="/services/customer-and-corporate-portals/"><div><small>Service</small><h3>Passenger Portals</h3><p>Self-serve management.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/fleet-driver-and-maintenance/"><div><small>Operations</small><h3>Fleet & Driver Ops</h3><p>Keep the network moving.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your passenger <br />transport operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automated ticketing engines to real-time timetable planners and digital maintenance workflows, we build software that drives efficiency across the transport network.</p>
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
