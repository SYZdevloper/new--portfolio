import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/supplier-and-service-portals/" },
  title: "Supplier & Service Portals | Hyperlink Tech Solutions",
  description: "We build secure B2B portals that streamline feed ordering, coordinate vessel and logistics services, and manage compliance documentation for your entire supplier network.",
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
                    <strong>Supply Chain</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Supplier Portals</div>
                        <p className="eyebrow">Supply Chain</p>
                        <h1 id="service-title">Coordinate feed, logistics, and service vendors.</h1>
                        <p className="hero-lead">We build secure B2B portals that streamline feed ordering, coordinate vessel and logistics services, and manage compliance documentation for your entire supplier network.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>B2B ordering portals for feed suppliers with delivery scheduling and inventory visibility</li>
                            <li>Contractor compliance management for divers, net cleaners, and marine service providers</li>
                            <li>Automated document expiry tracking for vessel licenses, insurance, and safety certifications</li>
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
                            <small>01 · Streamlined Ordering</small>
                            <strong>Place feed orders digitally with live delivery ETAs and stock levels.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Compliance Enforcement</small>
                            <strong>Ensure no contractor works on your farm with expired safety documentation.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Audit Trails</small>
                            <strong>Immutable records of every purchase order and service delivery.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Reduced Admin</small>
                            <strong>Eliminate the phone calls and emails that slow down procurement.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When procurement is manual</p>
                        <p>Managing 50 suppliers via phone calls and emails is a full-time job.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Supply chain friction directly impacts your stock.</h2>
                        <p>Aquaculture operations depend on a complex web of specialized suppliers—feed companies, net cleaners, veterinary services, and logistics providers. When this coordination happens via phone calls and email, orders are delayed, compliance lapses, and the fish suffer.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Feed Delays</h3>
                                <p>A phone order for fish feed pellets is misheard, the wrong formulation arrives, and feeding is disrupted for 48 hours.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Expired Compliance</h3>
                                <p>A dive team is dispatched to inspect nets, but nobody checked that their commercial diving insurance expired last month.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>No Visibility</h3>
                                <p>The farm manager has no idea if the next feed delivery is on track until the truck doesn't arrive.</p>
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
                                <h2>Seamless supply chain coordination.</h2>
                            </div>
                            <p>We build portals that bring order to the complex web of aquaculture suppliers.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>B2B Feed Ordering</h3>
                                <p>Secure portals allowing farm managers to place feed orders against contracted pricing with live delivery tracking.</p>
                                <div className="deliverable-tags"><small>B2B</small><small>Commerce</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Contractor Compliance</h3>
                                <p>Digital onboarding for service providers, with automated tracking of expiry dates for insurances and dive certificates.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Alerts</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Service Scheduling</h3>
                                <p>Calendar-based interfaces for booking net cleaning, marine surveys, and veterinary visits across multiple farm sites.</p>
                                <div className="deliverable-tags"><small>Calendars</small><small>Planning</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>ERP Middleware</h3>
                                <p>Integration layers that push approved purchase orders directly into your core financial system (SAP, NetSuite, Xero).</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>ERP</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Aquaculture Platform</p>
                            <h2>From ocean to plate, digitized.</h2>
                        </div>
                        <p>See how we helped a premium salmon producer build a full-chain traceability platform, connecting IoT pen sensors to a consumer-facing QR code experience that tells the story of every fillet.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Aquaculture Tech</span>
                                <span>IoT Telemetry & Traceability</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/aquaculture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Transparent provenance.</h2>
                                <p>We developed a custom ecosystem that ingests live water-quality telemetry from ocean pens, tracks every batch through the processing plant, and delivers a scannable QR code on the final retail pack proving origin and sustainability credentials.</p>
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
                        <h2 id="faq-title">Common questions about aquaculture & fisheries tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with underwater IoT sensors and feeding systems?</summary>
                            <p>Yes. We build secure API middleware that ingests telemetry data from underwater sensors (dissolved oxygen, temperature, salinity) and automated feeding systems, normalizing it into a cloud data warehouse for real-time dashboard visualization and historical analysis.</p>
                        </details>
                        <details>
                            <summary>How do you handle traceability for wild-catch fisheries?</summary>
                            <p>We build chain-of-custody applications that track a catch from the vessel (using e-logbook integrations) through the cold chain, processing, and retail. Each handoff point is digitally timestamped and geotagged, creating an auditable provenance trail for MSC or ASC certification.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work on remote fish farms or vessels at sea?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps and React Native mobile apps. Farm hands or deckhands can log feed quantities, mortality counts, and water quality readings entirely offline; the app will automatically sync once satellite or cellular connectivity is restored.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other aquaculture capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/product-and-market-platforms/"><div><small>Marketing</small><h3>Market Platforms</h3><p>Showcase provenance and sustainability credentials.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/farm-and-production-portals/"><div><small>Operations</small><h3>Production Portals</h3><p>Manage pens, cages, and hatcheries digitally.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/traceability-and-quality-workflows/"><div><small>Compliance</small><h3>Traceability Workflows</h3><p>Full-chain provenance from ocean to retail.</p></div><b>Explore traceability ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-service-portals/"><div><small>Supply Chain</small><h3>Supplier Portals</h3><p>Coordinate feed, logistics, and service vendors.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your aquaculture <br />and fisheries operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From IoT pen monitoring to consumer-facing traceability QR codes, we build software that drives transparency and efficiency across the blue economy.</p>
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
