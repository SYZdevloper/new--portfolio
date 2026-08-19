import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/field-and-survey-workflows/" },
  title: "Field & Survey Workflows | Hyperlink Tech Solutions",
  description: "We develop offline-capable mobile apps for foresters, surveyors, and environmental teams to map boundaries, conduct inventories, and log safety incidents without a cellular connection.",
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
                    <strong>Mobility</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Field Mobility Apps</div>
                        <p className="eyebrow">Mobility</p>
                        <h1 id="service-title">Capture geospatial data offline.</h1>
                        <p className="hero-lead">We develop offline-capable mobile apps for foresters, surveyors, and environmental teams to map boundaries, conduct inventories, and log safety incidents without a cellular connection.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>True offline-first mobile architecture utilizing local device storage (IndexedDB/SQLite)</li>
                            <li>Geospatial integration for dropping pins, mapping polygons, and recording GPS tracks</li>
                            <li>Digital forms for safety audits, environmental assessments, and pre-harvest planning</li>
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
                            <small>01 · Never Lose Data</small>
                            <strong>Foresters can survey remote compartments all day without relying on a 4G connection.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Eliminate Paper</small>
                            <strong>Stop writing field notes on wet paper that have to be re-typed in the office later.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Geospatial Accuracy</small>
                            <strong>Attach accurate GPS polygons directly to environmental assessment reports.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Instant Syncing</small>
                            <strong>Data automatically pushes to the corporate GIS system as soon as the forester hits the highway.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the forest is a black spot</p>
                        <p>If your survey app requires an internet connection, it's useless in the woods.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor connectivity destroys data integrity.</h2>
                        <p>Forestry work happens where cellular networks don't exist. When field staff are forced to use web-based tools that drop out, they revert to writing notes on paper or using generic GPS devices. This means data is siloed, delayed, and requires hours of double-entry back at the office.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Double Data Entry</h3>
                                <p>A forester spends all day cruising timber, then spends three hours that night typing plot data into the corporate system.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Location Ambiguity</h3>
                                <p>An environmental hazard is identified, but the exact GPS coordinates weren't logged, making it hard for the harvest crew to find.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>App Frustration</h3>
                                <p>Off-the-shelf apps freeze and crash when transitioning in and out of cellular coverage.</p>
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
                                <h2>Rugged software for the forest.</h2>
                            </div>
                            <p>We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for deep-woods conditions.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Offline-First Architecture</h3>
                                <p>Advanced local caching allowing users to create records, map areas, and run complex forms entirely offline.</p>
                                <div className="deliverable-tags"><small>Offline</small><small>PWA</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Native GIS Integrations</h3>
                                <p>Custom mapping interfaces allowing users to view corporate GIS layers (boundaries, hazards) while offline.</p>
                                <div className="deliverable-tags"><small>GIS</small><small>Maps</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Smart Audit Forms</h3>
                                <p>Customizable digital checklists for safety and environmental compliance, utilizing conditional logic to speed up data entry.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Logic</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Background Sync Engines</h3>
                                <p>Background processes that detect when cellular service is restored and quietly push all saved geospatial data to the central server.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Webhooks</small><small>Integration</small></div>
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
