import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/project-and-client-portals/" },
  title: "Project & Client Portals | Hyperlink Tech Solutions",
  description: "We engineer secure client portals that provide real-time updates on construction milestones, budget burn rates, and drone site-surveys.",
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
                    <strong>Project Management</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Client Visibility Dashboards</div>
                        <p className="eyebrow">Project Management</p>
                        <h1 id="service-title">Total transparency for project stakeholders.</h1>
                        <p className="hero-lead">We engineer secure client portals that provide real-time updates on construction milestones, budget burn rates, and drone site-surveys.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure login for clients, investors, and joint-venture partners</li>
                            <li>Real-time visual progress tracking via drone photogrammetry integrations</li>
                            <li>Automated financial reporting on contingencies and progress claims</li>
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
                            <small>01 · Built Trust</small>
                            <strong>Stop waiting for the monthly steering committee to share updates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Visual Progress</small>
                            <strong>Embed live webcam feeds and interactive 3D site models.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Financial Clarity</small>
                            <strong>Give clients a clear view of variations, claims, and cash flow.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Comms</small>
                            <strong>Move all RFI and design approvals out of messy email threads.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When clients are in the dark</p>
                        <p>A nervous client is a difficult client.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Silence breeds anxiety on major capital projects.</h2>
                        <p>When a developer or government body is spending $100M on an asset, they demand transparency. Relying on a monthly PDF report that is instantly out-of-date frustrates stakeholders and leads to micromanagement.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Lag</h3>
                                <p>The client board meets on the 15th, but the progress photos in the report are from the 2nd.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Financial Surprises</h3>
                                <p>Variations and scope changes aren't clearly tracked, leading to massive disputes at the end of the month.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Updates</h3>
                                <p>The client receives photos via WhatsApp, schedules via email, and invoices via mail.</p>
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
                                <h2>Digital control towers for clients.</h2>
                            </div>
                            <p>We build stakeholder portals that aggregate data from your internal tools into a polished, client-facing experience.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Progress Dashboards</h3>
                                <p>Timeline visualizers mapping actual progress against baseline schedules (integrating with Primavera P6 or MS Project).</p>
                                <div className="deliverable-tags"><small>Timelines</small><small>APIs</small><small>DataViz</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Media Integration</h3>
                                <p>Embeds of Matterport 3D scans, DroneDeploy maps, and live site cameras for immersive remote viewing.</p>
                                <div className="deliverable-tags"><small>Media</small><small>Webcams</small><small>3D</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Financial Summaries</h3>
                                <p>Clear, high-level roll-ups of contract value, approved variations, and pending claims pulled from the ERP.</p>
                                <div className="deliverable-tags"><small>ERP Sync</small><small>Finance</small><small>Charts</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Document Approvals</h3>
                                <p>Secure workflows allowing the client representative to digitally sign off on design changes or material selections.</p>
                                <div className="deliverable-tags"><small>E-Sign</small><small>Workflows</small><small>Audit</small></div>
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
