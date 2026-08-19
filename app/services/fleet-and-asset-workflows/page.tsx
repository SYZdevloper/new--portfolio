import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/fleet-and-asset-workflows/" },
  title: "Fleet & Asset Workflows | Hyperlink Tech Solutions",
  description: "We digitize maintenance, dispatch, and telematics tracking for commercial fleets, ensuring vehicles spend less time in the shop and more time on the road.",
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
                    <strong>Fleet Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Fleet & Asset Software</div>
                        <p className="eyebrow">Fleet Management</p>
                        <h1 id="service-title">Keep your rolling stock moving efficiently.</h1>
                        <p className="hero-lead">We digitize maintenance, dispatch, and telematics tracking for commercial fleets, ensuring vehicles spend less time in the shop and more time on the road.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digitize pre-trip inspections and DVIRs (Driver Vehicle Inspection Reports)</li>
                            <li>Predictive maintenance scheduling using OBD-II telemetry</li>
                            <li>Streamlined dispatch and routing workflows</li>
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
                            <small>01 · Digital DVIRs</small>
                            <strong>Eliminate paper inspection forms with mobile driver apps.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Less Downtime</small>
                            <strong>Catch minor engine fault codes before they become major breakdowns.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Smart Dispatch</small>
                            <strong>Assign loads based on driver hours of service (HOS) and vehicle location.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Parts Inventory</small>
                            <strong>Track maintenance costs and parts usage per vehicle.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When fleets break down</p>
                        <p>A parked truck is burning money.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Maintenance is proactive, not reactive.</h2>
                        <p>Managing a large fleet using whiteboards and paper inspection reports guarantees that preventative maintenance will be missed, leading to costly breakdowns and DOT compliance failures.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Paper Inspections</h3>
                                <p>Drivers pencil-whip paper DVIRs, and mechanics never see the defects until a roadside inspection fails.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Reactive Repairs</h3>
                                <p>Fleet managers only know a truck has a check engine light when the driver calls it in.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Inefficient Dispatch</h3>
                                <p>Dispatchers assign loads to trucks that are due for preventative maintenance the next day.</p>
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
                                <h2>Connected fleet operations.</h2>
                            </div>
                            <p>We build digital workflows that connect the driver, the mechanic, and the dispatcher in real-time.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Driver Mobile Apps</h3>
                                <p>High-contrast, offline-capable apps for completing DVIRs, taking photos of defects, and capturing e-signatures.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Offline</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Maintenance Portals</h3>
                                <p>Kanban boards for mechanics to prioritize repairs, order parts, and log labor hours.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>Kanban</small><small>MRO</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Telematics Integration</h3>
                                <p>Middleware that pulls fault codes (DTCs), odometer readings, and fuel levels from Geotab or Samsara.</p>
                                <div className="deliverable-tags"><small>Telematics</small><small>APIs</small><small>IoT</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Compliance Tracking</h3>
                                <p>Automated alerts for expiring driver licenses, DOT physicals, and annual vehicle inspections.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Alerts</small><small>Rules</small></div>
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
