import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/tender-and-prequalification-portals/" },
  title: "Tender & Prequalification Portals | Hyperlink Tech Solutions",
  description: "We build secure prequalification portals that automate compliance checks, insurance verification, and subcontractor tendering for massive capital projects.",
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
                    <strong>Procurement Tech</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Procurement Portals</div>
                        <p className="eyebrow">Procurement Tech</p>
                        <h1 id="service-title">Streamline contractor and supplier onboarding.</h1>
                        <p className="hero-lead">We build secure prequalification portals that automate compliance checks, insurance verification, and subcontractor tendering for massive capital projects.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Automated vendor registration and KYC/AML compliance flows</li>
                            <li>Dynamic document collection for SWMS, insurances, and licenses</li>
                            <li>Secure bid submission vaults with strict timestamp auditing</li>
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
                            <small>01 · Faster Onboarding</small>
                            <strong>Reduce subcontractor approval time from weeks to days.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Expiry Alerts</small>
                            <strong>Automated warnings when a sub's insurance or license is about to lapse.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Audit Trails</small>
                            <strong>Immutable records of every bid submission and document upload.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ERP Sync</small>
                            <strong>Push approved vendors directly into Viewpoint or SAP.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When procurement is chaotic</p>
                        <p>Managing 500 subcontractors via email is a compliance disaster.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Risk mitigation starts at the tender phase.</h2>
                        <p>For a Tier-1 contractor, managing the prequalification of hundreds of trades and suppliers across multiple projects using spreadsheets and PDF attachments is a massive liability. One expired insurance certificate can halt a project or trigger millions in liabilities.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Document Chaos</h3>
                                <p>Procurement managers waste hours digging through emails to find a subcontractor's Safe Work Method Statement (SWMS).</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Compliance Blindspots</h3>
                                <p>A plumber is allowed on site even though their public liability insurance expired three days ago.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Clunky Tendering</h3>
                                <p>Distributing massive drawing packages and addendums via Dropbox links that expire or fail to download.</p>
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
                                <h2>Secure supply chain portals.</h2>
                            </div>
                            <p>We engineer procurement platforms that enforce compliance and streamline vendor collaboration.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Vendor KYC Workflows</h3>
                                <p>Step-by-step digital forms for subcontractors to submit company details, financial stability data, and safety records.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>KYC</small><small>Onboarding</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Document Expiry Engines</h3>
                                <p>Automated systems that scan uploaded certificates (via OCR) and send warning emails 30 days before expiration.</p>
                                <div className="deliverable-tags"><small>OCR</small><small>Alerts</small><small>Logic</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted storage vaults where subcontractors can securely download heavy tender packages and BIM models.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Security</small><small>Storage</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Bid Evaluation Dashboards</h3>
                                <p>Side-by-side comparative views allowing estimators to score and rank submitted proposals efficiently.</p>
                                <div className="deliverable-tags"><small>Scoring</small><small>UI/UX</small><small>Data</small></div>
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
