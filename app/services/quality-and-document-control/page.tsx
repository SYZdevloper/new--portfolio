import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/quality-and-document-control/" },
  title: "Quality & Document Control | Hyperlink Tech Solutions",
  description: "Connect inspection and quality information with the correct job and revision.",
};

export default function QualityAndDocumentControl() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/quality-and-document-control/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/quality-and-document-control/",
          "name": "Quality & Document Control | Hyperlink Tech Solutions",
          "description": "Connect inspection and quality information with the correct job and revision.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/quality-and-document-control/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/quality-and-document-control/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/quality-and-document-control/#service",
          "name": "Quality & Document Control",
          "serviceType": "Quality Management Systems",
          "url": "https://hyperlinktechsolutions.com/services/quality-and-document-control/",
          "description": "Connect inspection and quality information with the correct job and revision.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturing, Aerospace, Medical Device"
          }
        }
      ]
    }
    ` }} />
      
    <ServiceInteractions />
      <div className="service-page-wrapper">
        <SiteHeader />

        <main id="top">
            <section className="hero service-hero" aria-labelledby="service-title">
                <nav className="service-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services/">Services</Link><span>›</span>
                    <strong>Quality & Document Control</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Quality workflows</div>
                        <p className="eyebrow">Quality & Document Control</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Connect inspection and quality information with the correct <em class="accent-text">job and revision.</em>' }}></h1>
                        <p className="hero-lead">Manage drawings, certificates, inspection records, deviations, corrective actions and approvals with absolute precision and digital traceability.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Revision control</li>
                            <li>Inspection records</li>
                            <li>NCR and corrective actions</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Single Truth</small>
                            <strong>Ensure the shop floor is always working from the latest approved revision.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Traceability</small>
                            <strong>Link every material cert and inspection record directly to the specific batch or serial number.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Compliance Ready</small>
                            <strong>Simplify ISO and AS9100 audits with instantly accessible digital records.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated NCRs</small>
                            <strong>Trigger workflows for non-conformances immediately upon failed inspections.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital quality control is necessary</p>
                        <p>Manual quality control is prone to errors, missing documents, and expensive rework caused by outdated revisions.</p>
                        <a className="btn" href="#contact">Discuss Quality Systems <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Lost paperwork equals lost profits.</h2>
                        <p>When quality management relies on physical binders, fragmented folders, and printed drawings, compliance becomes a nightmare and the risk of building parts to the wrong spec skyrockets.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Revision Chaos</h3>
                                <p>An engineer updates a drawing, but the machinist on the floor is still using the printed Rev B from yesterday. Thousands of dollars are wasted on scrap.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Audit Panic</h3>
                                <p>When an auditor asks for the material certs and inspection logs for a job completed 6 months ago, it triggers a frantic, multi-day scavenger hunt.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow NCR Resolution</h3>
                                <p>Non-conformances are documented on paper, sitting in an inbox while production halts, delaying root cause analysis and corrective actions.</p>
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
                                <h2>Strict document and quality control.</h2>
                            </div>
                            <p>We build secure systems to manage critical manufacturing documentation and ensure quality compliance across every job.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Revisions</span>
                                <h3>Document Version Control</h3>
                                <p>Centralized repositories for CAD files and blueprints that ensure the shop floor only has access to the single, latest approved revision.</p>
                                <div className="deliverable-tags"><small>Versioning</small><small>Access Control</small><small>Drawings</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Logs</span>
                                <h3>Digital Inspection Records</h3>
                                <p>Tablet-friendly interfaces for quality inspectors to log measurements, attach photos, and automatically flag out-of-tolerance dimensions.</p>
                                <div className="deliverable-tags"><small>Inspections</small><small>Tablets</small><small>Tolerances</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · NCRs</span>
                                <h3>Deviation & Corrective Action</h3>
                                <p>Automated workflows for handling Non-Conformance Reports (NCRs), routing them to engineering and quality teams for fast disposition and CAPA.</p>
                                <div className="deliverable-tags"><small>NCR</small><small>CAPA</small><small>Workflows</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Certs</span>
                                <h3>Material & Compliance Tracking</h3>
                                <p>Systems that link inbound material certificates directly to outbound jobs, providing complete end-to-end traceability for strict industries.</p>
                                <div className="deliverable-tags"><small>Traceability</small><small>Certificates</small><small>Compliance</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Implementation</p>
                            <h2>Achieving AS9100 compliance with digital precision.</h2>
                        </div>
                        <p>See how moving from paper binders to a digital QMS saved an aerospace supplier hundreds of hours during audits.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Digital QMS</span>
                                <span>Secure Web Portal</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#111', height: '200px' }}>
                                {/* Placeholder for case study image */}
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Aerospace Component Manufacturer</p>
                                <h2>Audits made effortless.</h2>
                                <p>An aerospace supplier was struggling to maintain the rigorous documentation required for AS9100 compliance using physical paperwork and disjointed Excel files.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Preparing for annual audits took weeks of administrative effort, and missing signatures frequently caused minor non-conformances.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We developed a lightweight digital QMS that enforced digital sign-offs on all revisions, linked material certs to job travelers via barcode, and digitized all inspection logs.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Audit preparation time was reduced from weeks to hours, and scrap rates dropped by 12% because machinists could no longer access outdated drawing revisions.</strong></div>
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
                        <h2 id="faq-title">Common questions about Quality Control systems.</h2>
                        <p>Answers covering compliance, security, and integration.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Does this replace our ERP system?</summary>
                            <p>No. It often works alongside your ERP. While the ERP handles inventory and financials, our system handles the deep document management, digital signatures, and inspection workflows that generic ERPs struggle with.</p>
                        </details>
                        <details>
                            <summary>Is it compliant with FDA or FAA regulations?</summary>
                            <p>We build systems capable of adhering to strict regulations (like FDA 21 CFR Part 11), ensuring audit trails, secure electronic signatures, and strict role-based access.</p>
                        </details>
                        <details>
                            <summary>How do operators access drawings on the floor?</summary>
                            <p>Through ruggedized tablets or workstation kiosks. They scan a job barcode, and the system instantly pulls up the correct, current revision of the drawing.</p>
                        </details>
                        <details>
                            <summary>Can it handle customer-supplied documents?</summary>
                            <p>Yes. Customer drawings, specs, and requirements can be ingested, versioned, and linked securely to the respective jobs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Complete your digital infrastructure.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/capabilities-and-industry-pages/"><div><small>Discovery</small><h3>Capabilities Pages</h3><p>Structure processes, materials, and tolerances.</p></div><b>Explore capabilities ↗</b></a>
                        <a className="related-card" href="/services/rfq-and-quotation-workflows/"><div><small>Intake</small><h3>RFQ Workflows</h3><p>Collect complete requirements and move opportunities through review.</p></div><b>Explore RFQ workflows ↗</b></a>
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Customer Portals</h3><p>Give authorised customers one place for active work.</p></div><b>Explore customer portals ↗</b></a>
                        <a className="related-card" href="/services/production-and-capacity-dashboards/"><div><small>Operations</small><h3>Production Dashboards</h3><p>Help teams understand workload, schedules and exceptions.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Stop failing audits due to <br />missing paperwork. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to digitize your quality control and guarantee the shop floor always has the right revision?</p>
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
