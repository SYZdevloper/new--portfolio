import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/partner-and-terminal-portals/" },
  title: "Partner & Terminal Portals | Hyperlink Tech Solutions",
  description: "We engineer secure collaboration portals that synchronize shipping lines, drayage carriers, and terminal operators to eliminate port congestion.",
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
                    <strong>Port & Terminal Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Terminal Collaboration Portals</div>
                        <p className="eyebrow">Port & Terminal Operations</p>
                        <h1 id="service-title">Orchestrate complex terminal operations securely.</h1>
                        <p className="hero-lead">We engineer secure collaboration portals that synchronize shipping lines, drayage carriers, and terminal operators to eliminate port congestion.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digital appointment booking for drayage trucks (TOS integration)</li>
                            <li>Real-time vessel scheduling and berth planning visibility</li>
                            <li>Automated gate entry via RFID and license plate recognition (LPR)</li>
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
                            <small>01 · Shorter Queues</small>
                            <strong>Mandatory digital appointments reduce truck idling at the gate.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Berth Optimization</small>
                            <strong>Give partners real-time visibility into vessel ETAs and crane availability.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Data Integration</small>
                            <strong>Connect seamlessly with Navis N4 or other Terminal Operating Systems.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Demurrage Tracking</small>
                            <strong>Transparently track free time and calculate storage fees.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When terminals clog</p>
                        <p>Port congestion destroys supply chain velocity.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Terminals must be perfectly synchronized ecosystems.</h2>
                        <p>When truck drivers don't know if their container is available, and terminals don't know when the trucks are arriving, you get massive gate queues, wasted fuel, and frustrated partners.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Gate Congestion</h3>
                                <p>Hundreds of trucks arrive at once because there is no enforced digital appointment system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Container Blindness</h3>
                                <p>Dispatchers send trucks to pick up containers that are still buried at the bottom of a stack.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Gate Checks</h3>
                                <p>Clerks manually verifying paperwork at the gate adds 5 minutes to every single transaction.</p>
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
                                <h2>Digital terminal operating portals.</h2>
                            </div>
                            <p>We build B2B portals that act as the digital handshake between the terminal and the outside world.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Appointment Systems</h3>
                                <p>Slot-booking engines that throttle truck arrivals based on terminal capacity and crane availability.</p>
                                <div className="deliverable-tags"><small>Booking</small><small>Logic</small><small>Throttling</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Container Availability</h3>
                                <p>Real-time search interfaces allowing dispatchers to check if freight is cleared by customs and ready for pickup.</p>
                                <div className="deliverable-tags"><small>Search</small><small>Status</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated Gate Flows</h3>
                                <p>Integrations with OCR cameras and RFID readers to allow pre-cleared trucks to enter without stopping.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>OCR</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Fee Calculators</h3>
                                <p>Portals allowing partners to view and pay demurrage/detention fees online before dispatching a truck.</p>
                                <div className="deliverable-tags"><small>Payments</small><small>Billing</small><small>Stripe</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Logistics Build</p>
                            <h2>Moving freight at the speed of software.</h2>
                        </div>
                        <p>See how we helped a global logistics provider replace fragmented legacy systems with a unified digital routing and visibility platform.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Transportation Software Platform</span>
                                <span>Real-time Tracking + Logistics</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/logistics-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>End-to-end operational visibility.</h2>
                                <p>We developed a custom portal that connects dispatchers, drivers, and port terminals, ensuring seamless data flow and eliminating hours of manual data entry.</p>
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
                        <h2 id="faq-title">Common questions about our logistics platforms.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with existing Transportation Management Systems (TMS)?</summary>
                            <p>Yes. We regularly build middleware that connects modern web frontends with legacy TMS platforms like MercuryGate, Oracle OTM, and McLeod, allowing for bidirectional data sync without replacing your core system.</p>
                        </details>
                        <details>
                            <summary>How do you handle real-time tracking (telematics)?</summary>
                            <p>We ingest streaming data from ELD and telematics providers (like Samsara or Geotab) via WebSockets and APIs, processing millions of location pings into smooth, real-time map visualizations.</p>
                        </details>
                        <details>
                            <summary>Do you build mobile apps for drivers?</summary>
                            <p>Absolutely. We build offline-capable, high-contrast mobile applications for drivers that handle proof of delivery (e-signatures), document scanning, and automated arrival geofencing.</p>
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
                        <a className="related-card" href="/services/passenger-and-customer-experiences/"><div><small>Mobility</small><h3>Passenger Experiences</h3><p>Frictionless digital journeys for modern passengers.</p></div><b>Explore mobility ↗</b></a>
                        <a className="related-card" href="/services/freight-and-cargo-portals/"><div><small>Logistics</small><h3>Freight & Cargo Portals</h3><p>Total visibility from origin to destination.</p></div><b>Explore freight ↗</b></a>
                        <a className="related-card" href="/services/fleet-and-asset-workflows/"><div><small>Maintenance</small><h3>Fleet Workflows</h3><p>Keep your rolling stock moving efficiently.</p></div><b>Explore fleet ↗</b></a>
                        <a className="related-card" href="/services/transport-operations-dashboards/"><div><small>Operations</small><h3>Operations Dashboards</h3><p>Real-time control over global supply chains.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your logistics <br />and transport operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that eliminate bottlenecks, secure your supply chain, and provide total operational oversight? Let's discuss your roadmap.</p>
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
