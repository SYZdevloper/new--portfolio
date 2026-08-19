import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/harvest-and-logistics-workflows/" },
  title: "Harvest & Logistics Workflows | Hyperlink Tech Solutions",
  description: "We engineer traceability applications that track timber from the stump to the weighbridge, generating digital dockets and automating complex freight calculations.",
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
                        <div className="hero-status">Logistics Platforms</div>
                        <p className="eyebrow">Supply Chain</p>
                        <h1 id="service-title">Digitize the journey from forest to mill.</h1>
                        <p className="hero-lead">We engineer traceability applications that track timber from the stump to the weighbridge, generating digital dockets and automating complex freight calculations.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digital harvest dockets created offline in the forest, syncing automatically to the cloud</li>
                            <li>Integration with mill weighbridges to instantly reconcile loaded volume vs. delivered weight</li>
                            <li>Automated freight and contractor payment calculations based on complex matrix rates</li>
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
                            <small>01 · Eliminate Paper Dockets</small>
                            <strong>Stop deciphering handwritten, mud-stained paper dockets.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Instant Reconciliation</small>
                            <strong>Match forest dispatch records with mill weighbridge tickets automatically.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Accurate Payments</small>
                            <strong>Calculate complex haulage rates (by distance, species, grade) without Excel.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Traceability Compliance</small>
                            <strong>Prove the exact compartment origin of every log delivered to the mill.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When logistics run on paper</p>
                        <p>You can't optimize a multi-million dollar supply chain using duplicate docket books.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual logistics processes bleed margin.</h2>
                        <p>Moving timber is logistically complex and involves multiple handoffs. If your drivers are writing paper dockets that get mailed to the office, you have no real-time visibility into production, and reconciling those dockets with the mill's weighbridge data takes weeks of manual data entry.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Lost Dockets</h3>
                                <p>A paper docket falls out of a truck cab, delaying payment to the contractor and breaking the chain of custody.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Delayed Visibility</h3>
                                <p>Management doesn't know exactly how much timber was harvested until the end of the week when paperwork is processed.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Payment Errors</h3>
                                <p>Complex haulage rates are calculated manually in spreadsheets, leading to overpayments or contractor disputes.</p>
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
                            <p>We build digital systems that make every handoff point in your forestry supply chain auditable and instant.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Digital Docket Apps</h3>
                                <p>Offline-capable mobile apps for loaders and drivers to generate digital dispatch records right at the landing.</p>
                                <div className="deliverable-tags"><small>Mobile</small><small>Offline</small><small>Traceability</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Weighbridge API Integrations</h3>
                                <p>Middleware that securely connects your database to the mill's weighbridge system, pulling live weight data for instant matching.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>IoT</small><small>Integration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Automated Rating Engines</h3>
                                <p>Custom logic layers that calculate contractor pay and client invoicing based on dynamic matrices (species, grade, distance, fuel levies).</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Finance</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Chain of Custody Reporting</h3>
                                <p>Systems that automatically generate reports proving the sustainable origin (FSC/PEFC) of all timber processed.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>PDFs</small><small>Reporting</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Forestry Platform</p>
                            <h2>From seedling to sawmill.</h2>
                        </div>
                        <p>See how we helped a large-scale forestry operation digitize their entire supply chain, connecting offline harvest apps in remote forests directly to haulage contractors and the final mill destination.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Forestry Tech</span>
                                <span>GIS & Logistics Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/forestry-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Visibility across the timber lifecycle.</h2>
                                <p>We developed a custom geospatial platform that tracks compartment inventories, generates digital harvest dockets offline, and automatically reconciles weighbridge data at the mill to ensure contractors are paid accurately.</p>
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
                        <h2 id="faq-title">Common questions about forestry & agricultural services tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do offline mobile apps work in remote forest compartments?</summary>
                            <p>We build 'Offline-First' progressive web and mobile applications using local device databases. Foresters and contractors can create harvest dockets, log safety incidents, and map areas entirely offline. The data automatically syncs via cellular or satellite connections when they return to coverage.</p>
                        </details>
                        <details>
                            <summary>Can you integrate GIS (Geographic Information Systems) into portals?</summary>
                            <p>Yes. We regularly integrate Mapbox, ArcGIS, and custom geospatial layers into portals, allowing managers to visually track harvest boundaries, environmental buffers, and haulage routes directly within their operational dashboard.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex contractor payments and reconciliations?</summary>
                            <p>We build automated middleware that links digital harvest dockets generated in the field with weighbridge data from the mill. This logic engine instantly calculates contractor pay based on complex matrix rates (distance, grade, species) and pushes approved invoices to your ERP.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other forestry capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/forestry-and-input-platforms/"><div><small>Marketing</small><h3>Input Platforms</h3><p>Showcase products and technical specifications.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/contractor-and-operator-portals/"><div><small>Operations</small><h3>Contractor Portals</h3><p>Manage vendors, compliance, and payments.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/harvest-and-logistics-workflows/"><div><small>Supply Chain</small><h3>Harvest Logistics</h3><p>Digitize the journey from forest to mill.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/field-and-survey-workflows/"><div><small>Mobility</small><h3>Field Workflows</h3><p>Capture geospatial data offline.</p></div><b>Explore mobility ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your forestry <br />and agricultural operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From offline harvest apps in remote forests to complex weighbridge integrations and contractor portals, we build software that drives resource efficiency.</p>
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
