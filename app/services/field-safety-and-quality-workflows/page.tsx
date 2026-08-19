import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/field-safety-and-quality-workflows/" },
  title: "Field, Safety & Quality Workflows | Hyperlink Tech Solutions",
  description: "We develop offline-capable mobile apps for field workers to log safety observations (HSE), complete QA/QC checklists, and raise digital RFIs from the trench.",
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
                    <strong>Site Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Field Mobility Apps</div>
                        <p className="eyebrow">Site Operations</p>
                        <h1 id="service-title">Digitize the job site to eliminate rework.</h1>
                        <p className="hero-lead">We develop offline-capable mobile apps for field workers to log safety observations (HSE), complete QA/QC checklists, and raise digital RFIs from the trench.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Offline-first mobile architecture for remote or underground sites</li>
                            <li>Digital ITPs (Inspection Test Plans) with photo markup capabilities</li>
                            <li>Automated routing of safety incidents and non-conformance reports (NCRs)</li>
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
                            <small>01 · Offline Capable</small>
                            <strong>Workers can fill out forms deep in a basement without a signal.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Photo Evidence</small>
                            <strong>Snap a picture, circle the defect, and attach it to the punch list instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Faster QA/QC</small>
                            <strong>Eliminate the delay of walking paper forms back to the site shed.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Geotagging</small>
                            <strong>Automatically pin safety observations to specific GPS coordinates on site.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When the field is disconnected</p>
                        <p>Paper forms are where data goes to die.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>You can't manage quality with a clipboard.</h2>
                        <p>Construction happens in the mud, not the office. When field engineers are forced to use paper checklists, data is lost, weather damages records, and project managers have no real-time visibility into safety or quality issues.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Data Entry Delays</h3>
                                <p>An engineer spends Friday afternoon typing week-old paper safety observations into a spreadsheet.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Connection Drops</h3>
                                <p>Off-the-shelf apps crash or lose data when the user steps into an elevator shaft and loses 5G.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Rework Costs</h3>
                                <p>A concrete pour happens before the QA checklist is actually signed off, resulting in expensive demolition.</p>
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
                                <h2>Rugged software for the job site.</h2>
                            </div>
                            <p>We build progressive web apps (PWAs) and React Native mobile tools explicitly designed for the realities of construction.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Offline-First Architecture</h3>
                                <p>Local caching utilizing IndexedDB so users can complete complex workflows entirely without an internet connection.</p>
                                <div className="deliverable-tags"><small>Offline</small><small>PWA</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Smart Forms</h3>
                                <p>Checklists with conditional logic (e.g., if 'Fail' is selected, a photo upload becomes mandatory).</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Forms</small><small>UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Image Annotation</h3>
                                <p>Built-in tools allowing users to snap a photo and draw circles or arrows on it before submitting an RFI.</p>
                                <div className="deliverable-tags"><small>Canvas</small><small>Media</small><small>Mobile</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Procore/Aconex Sync</h3>
                                <p>Middleware that takes field submissions and injects them directly into your core project management system as native records.</p>
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
                            <p className="eyebrow">Featured Engineering Build</p>
                            <h2>Connecting the job site to the boardroom.</h2>
                        </div>
                        <p>See how we helped a massive civil engineering contractor digitize thousands of paper safety forms and provide their executive team with real-time portfolio visibility.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Construction Software</span>
                                <span>Field Mobility + Data Aggregation</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/construction-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Eliminating rework and data silos.</h2>
                                <p>We developed a custom ecosystem that allows field workers to capture QA/QC data offline in the trench, which automatically syncs to Procore and populates an executive BI dashboard at headquarters.</p>
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
                        <h2 id="faq-title">Common questions about our ConTech software.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you integrate with Procore, Autodesk, or Oracle Aconex?</summary>
                            <p>Yes. We regularly build middleware that connects custom field apps or client portals directly into core construction management platforms like Procore, ensuring data remains centralized without forcing field workers to use clunky interfaces.</p>
                        </details>
                        <details>
                            <summary>Can field applications work without an internet connection?</summary>
                            <p>Absolutely. We specialize in building offline-first PWA and React Native applications. Field engineers can fill out safety forms, capture photos, and annotate drawings deep underground, and the app will automatically sync the payload once they hit a cellular signal.</p>
                        </details>
                        <details>
                            <summary>How do you handle massive files like BIM models and drone surveys?</summary>
                            <p>We architect secure AWS/Azure storage solutions utilizing specialized viewers (like Autodesk Forge or WebGL) to render massive point clouds and 3D models directly in the browser, without requiring the client to download heavy CAD software.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other construction capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/capability-and-project-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Showcase your engineering capabilities with authority.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/tender-and-prequalification-portals/"><div><small>Procurement</small><h3>Tender Portals</h3><p>Streamline contractor and supplier onboarding.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/field-safety-and-quality-workflows/"><div><small>Site Operations</small><h3>Field Workflows</h3><p>Digitize the job site to eliminate rework.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/construction-operations-dashboards/"><div><small>Executive</small><h3>Operations Dashboards</h3><p>Real-time control over portfolio performance.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Accelerate your construction <br />and engineering operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build platforms that win tenders, secure the job site, and provide total operational oversight? Let's discuss your roadmap.</p>
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
