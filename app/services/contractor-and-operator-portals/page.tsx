import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/contractor-and-operator-portals/" },
  title: "Contractor & Operator Portals | Hyperlink Tech Solutions",
  description: "We build secure portals that streamline onboarding, compliance tracking, and automated payment reconciliations for your network of harvest and haulage contractors.",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Contractor Portals</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Manage vendors, compliance, and payments.</h1>
                        <p className="hero-lead">We build secure portals that streamline onboarding, compliance tracking, and automated payment reconciliations for your network of harvest and haulage contractors.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Digital onboarding workflows ensuring contractors meet strict safety and insurance requirements</li>
                            <li>Automated document expiry tracking for licenses, vehicle registrations, and public liability</li>
                            <li>Self-serve portals for contractors to view dockets, rates, and upcoming payments</li>
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
                            <small>01 · Compliance Enforcement</small>
                            <strong>Ensure no contractor enters a forest with expired insurance.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Reduced Admin</small>
                            <strong>Eliminate the phone calls from drivers asking about payment status.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster Onboarding</small>
                            <strong>Move from paper forms to digital contractor induction workflows.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Comms</small>
                            <strong>Push safety alerts and road closures instantly to all active operators.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When contractor management is manual</p>
                        <p>Managing 100 harvest contractors via spreadsheets is a massive compliance risk.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Friction in vendor management slows down operations.</h2>
                        <p>Forestry relies heavily on specialized contractors. When insurance documents are tracked in Excel, inductions are done on paper, and payment disputes take weeks to resolve, your operational team is bogged down in administration instead of managing the resource.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Compliance Lapses</h3>
                                <p>A haulage contractor is involved in an incident, and you discover their public liability insurance expired a month ago.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Payment Disputes</h3>
                                <p>Contractors constantly call the office because they can't reconcile their own records with your manual payment statements.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Inductions</h3>
                                <p>New operators are delayed from starting work because paper induction forms take days to process.</p>
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
                                <h2>Streamlined vendor management.</h2>
                            </div>
                            <p>We engineer secure portals that act as the central hub for your entire contractor network.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Automated Compliance Tracking</h3>
                                <p>Dashboards that visually flag expiring insurances and automatically block non-compliant contractors from the system.</p>
                                <div className="deliverable-tags"><small>Compliance</small><small>Alerts</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Self-Serve Payment Portals</h3>
                                <p>Secure views where contractors can see every approved docket, applied rate, and scheduled payment date.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Transparency</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Digital Inductions</h3>
                                <p>Workflows that allow operators to complete site inductions, watch safety videos, and sign off digitally before arriving on site.</p>
                                <div className="deliverable-tags"><small>Safety</small><small>Forms</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Broadcast Alert Systems</h3>
                                <p>Tools for dispatchers to instantly notify specific contractor groups about weather events or road closures via SMS.</p>
                                <div className="deliverable-tags"><small>Comms</small><small>SMS</small><small>Operations</small></div>
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
