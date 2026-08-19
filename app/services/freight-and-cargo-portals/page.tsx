import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/freight-and-cargo-portals/" },
  title: "Freight & Cargo Portals | Hyperlink Tech Solutions",
  description: "We build digital freight forwarding portals that allow shippers to book capacity, track cargo in real-time, and manage customs documentation entirely online.",
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
                    <strong>Logistics & Forwarding</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Freight & Cargo Platforms</div>
                        <p className="eyebrow">Logistics & Forwarding</p>
                        <h1 id="service-title">Total visibility from origin to destination.</h1>
                        <p className="hero-lead">We build digital freight forwarding portals that allow shippers to book capacity, track cargo in real-time, and manage customs documentation entirely online.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Instant quoting and capacity booking for LTL, FTL, and ocean freight</li>
                            <li>Real-time track-and-trace visibility using ELD/AIS data</li>
                            <li>Digitized bill of lading and customs documentation workflows</li>
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
                            <small>01 · Instant Quotes</small>
                            <strong>Generate accurate freight quotes in seconds based on live rates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Track & Trace</small>
                            <strong>Map-based tracking from warehouse pickup to final port.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Paperless Customs</small>
                            <strong>Secure uploads for commercial invoices and Bills of Lading.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Carrier Integrations</small>
                            <strong>Direct API connections to major steamship lines and haulers.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When freight gets lost</p>
                        <p>You can't manage global logistics via email threads.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Shippers demand Amazon-level visibility.</h2>
                        <p>Traditional freight forwarding is bogged down by manual rate negotiations, PDF invoices, and 'Where is my freight?' phone calls. The lack of digital transparency destroys trust.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Rate Haggling</h3>
                                <p>Shippers wait days for a freight quote because brokers are manually calling carriers.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Black Hole Tracking</h3>
                                <p>Once a container gets on a ship, the customer has no idea where it is until it arrives.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Document Chaos</h3>
                                <p>Customs clearance is delayed because a vital PDF was lost in an email chain.</p>
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
                                <h2>Digital freight forwarders.</h2>
                            </div>
                            <p>We engineer B2B logistics portals that automate quoting, tracking, and documentation.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Quoting Engines</h3>
                                <p>Algorithmic pricing calculators that factor in lane history, fuel surcharges, and spot rates.</p>
                                <div className="deliverable-tags"><small>Pricing</small><small>Algorithms</small><small>APIs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Visibility Dashboards</h3>
                                <p>Interactive maps aggregating AIS (ship tracking) and ELD (trucking) data for end-to-end visibility.</p>
                                <div className="deliverable-tags"><small>AIS</small><small>Mapping</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Document Vaults</h3>
                                <p>Secure, structured repositories for packing lists, BOLs, and customs declarations.</p>
                                <div className="deliverable-tags"><small>Docs</small><small>OCR</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Shipper Analytics</h3>
                                <p>Reporting tools that show clients their landed costs, transit times, and carbon emissions.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>BI</small><small>Carbon</small></div>
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
