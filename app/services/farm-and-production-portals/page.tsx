import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/farm-and-production-portals/" },
  title: "Farm & Production Portals | Hyperlink Tech Solutions",
  description: "We build secure production management portals where farm managers can monitor water quality, track biomass, schedule feeding, and manage stock movements across multiple sites.",
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
                    <strong>Farm Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Production Portals</div>
                        <p className="eyebrow">Farm Operations</p>
                        <h1 id="service-title">Manage pens, cages, and hatcheries digitally.</h1>
                        <p className="hero-lead">We build secure production management portals where farm managers can monitor water quality, track biomass, schedule feeding, and manage stock movements across multiple sites.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralized dashboards showing live pen conditions, biomass estimates, and mortality rates</li>
                            <li>Digital stock movement records for transfers between hatcheries, grow-out sites, and processors</li>
                            <li>Integration with IoT sensors for real-time dissolved oxygen, temperature, and pH monitoring</li>
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
                            <small>01 · Live Monitoring</small>
                            <strong>See water quality across all your pens and cages on one screen.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Biomass Accuracy</small>
                            <strong>Replace guesswork with data-driven biomass estimates for harvest planning.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Mortality Tracking</small>
                            <strong>Identify problem pens instantly instead of discovering losses at harvest.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Multi-Site Sync</small>
                            <strong>Manage hatcheries, nurseries, and grow-out farms from a single platform.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When farm data is scattered</p>
                        <p>Managing a 10-pen salmon farm with a whiteboard and a spreadsheet is a liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Fragmented data risks your stock.</h2>
                        <p>Aquaculture is an inherently high-risk, capital-intensive operation. If water quality data is on a sensor console at the jetty, feeding records are in a notebook, and mortality counts are on a whiteboard, farm managers cannot make the rapid decisions needed to prevent catastrophic stock losses.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Delayed Alerts</h3>
                                <p>A dissolved oxygen drop in Pen 7 isn't noticed until the morning visual check, by which time significant mortality has occurred.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Inaccurate Biomass</h3>
                                <p>Harvest planning is based on rough estimates because there's no system accurately tracking growth and mortality per pen.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Audit Chaos</h3>
                                <p>When a regulatory audit occurs, staff spend days frantically compiling paper feeding and treatment records.</p>
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
                                <h2>The digital farm office.</h2>
                            </div>
                            <p>We engineer secure portals that act as the central nervous system for aquaculture operations.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>IoT Telemetry Dashboards</h3>
                                <p>Live interfaces displaying sensor data (DO, temperature, salinity, pH) with configurable alert thresholds per pen.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>WebSockets</small><small>Alerts</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Biomass Tracking</h3>
                                <p>Growth curve models that ingest sample weight data and mortality counts to continuously estimate live biomass per pen.</p>
                                <div className="deliverable-tags"><small>Analytics</small><small>Logic</small><small>Math</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Stock Movement Records</h3>
                                <p>Digital workflows for logging transfers, splits, and gradings, maintaining a complete chain-of-custody for every cohort.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>Data</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Feeding Schedule Management</h3>
                                <p>Interfaces that track daily feed allocation against recommended feeding tables, flagging over- or under-feeding.</p>
                                <div className="deliverable-tags"><small>Planning</small><small>UX</small><small>Automation</small></div>
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
