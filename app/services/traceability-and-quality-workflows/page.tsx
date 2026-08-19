import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/traceability-and-quality-workflows/" },
  title: "Traceability & Quality Workflows | Hyperlink Tech Solutions",
  description: "We engineer traceability applications that track every batch from the pen or vessel through processing and cold-chain logistics to the final retail pack, ensuring regulatory and certification compliance.",
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
                    <strong>Compliance & Provenance</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Traceability Platforms</div>
                        <p className="eyebrow">Compliance & Provenance</p>
                        <h1 id="service-title">Full-chain provenance from ocean to retail.</h1>
                        <p className="hero-lead">We engineer traceability applications that track every batch from the pen or vessel through processing and cold-chain logistics to the final retail pack, ensuring regulatory and certification compliance.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Batch-level tracking linking specific pens or vessels to final retail SKUs</li>
                            <li>Digital HACCP (Hazard Analysis Critical Control Points) checklists for processing plants</li>
                            <li>Automated generation of export health certificates and catch documentation</li>
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
                            <small>01 · Certification Ready</small>
                            <strong>Maintain the data integrity required for MSC, ASC, and BAP audits.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Rapid Recall</small>
                            <strong>Identify and isolate affected product within minutes, not days, during a recall.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Export Compliance</small>
                            <strong>Automatically generate the health certificates required by importing countries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Consumer Trust</small>
                            <strong>Provide end-to-end provenance data that justifies your premium price point.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When traceability is manual</p>
                        <p>Paper-based batch records are one spilled coffee away from a failed audit.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Gaps in the chain cost you market access.</h2>
                        <p>Global seafood trade is governed by strict traceability requirements. If you cannot digitally prove the origin, processing history, and cold-chain integrity of a specific batch, you risk losing access to premium export markets (EU, Japan, US) and failing your sustainability certifications.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Recall Nightmare</h3>
                                <p>A potential histamine issue is detected, but it takes 48 hours to trace the affected batch back to the specific vessel and landing date.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Audit Failures</h3>
                                <p>Paper HACCP records from the processing plant are incomplete, jeopardizing your MSC chain-of-custody certification.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Export Delays</h3>
                                <p>Manually preparing export health certificates and catch documentation holds up containers at the port.</p>
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
                                <h2>Unbreakable chain of custody.</h2>
                            </div>
                            <p>We build digital systems that make every handoff point in your supply chain auditable and instant.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Batch Tracking Engines</h3>
                                <p>Secure databases that link a final retail carton back through processing, cold storage, and the original pen or vessel.</p>
                                <div className="deliverable-tags"><small>Database</small><small>APIs</small><small>Traceability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital HACCP Checklists</h3>
                                <p>Tablet-optimized forms for processing plant QA staff to log critical control points with timestamps and photo evidence.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Mobile</small><small>Compliance</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Cold-Chain Monitoring</h3>
                                <p>Integrations with IoT temperature loggers that automatically flag any break in the cold chain during transport.</p>
                                <div className="deliverable-tags"><small>IoT</small><small>Alerts</small><small>Logistics</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Export Docs</h3>
                                <p>Systems that automatically populate and generate health certificates and catch documentation based on batch data.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>PDFs</small><small>Trade</small></div>
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
