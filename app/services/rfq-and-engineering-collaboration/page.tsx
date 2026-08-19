import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/rfq-and-engineering-collaboration/" },
  title: "RFQ & Engineering Collaboration Portals | Hyperlink Tech Solutions",
  description: "Secure portals for streamlining the Request for Quote (RFQ) process, managing supplier communications, and sharing engineering drawings with version control.",
};

export default function RfqAndEngineeringCollaboration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/",
          "name": "RFQ & Engineering Collaboration | Hyperlink Tech Solutions",
          "description": "Secure portals for streamlining the Request for Quote (RFQ) process, managing supplier communications, and sharing engineering drawings with version control.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/#service",
          "name": "RFQ & Engineering Collaboration",
          "serviceType": "Digital Engineering Platforms",
          "url": "https://hyperlinktechsolutions.com/services/rfq-and-engineering-collaboration/",
          "description": "Secure portals for streamlining the Request for Quote (RFQ) process, managing supplier communications, and sharing engineering drawings with version control.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, Tier 1 suppliers, and engineering firms"
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
                    <strong>RFQ & Engineering</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Secure Supplier Networks</div>
                        <p className="eyebrow">RFQ & Engineering Collaboration</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Stop losing quotes in <em class="accent-text">email threads.</em>' }}></h1>
                        <p className="hero-lead">We build highly secure, centralized portals that digitize your entire RFQ process. Safely share CAD files, track supplier responses, and manage engineering revisions all in one place.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Centralize supplier communications and bid comparisons</li>
                            <li>Enforce secure, role-based access to proprietary CAD drawings</li>
                            <li>Automate revision control to ensure everyone bids on the latest spec</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your RFQ Portal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="RFQ portal benefits">
                        <div className="proof-item">
                            <small>01 · Bid Centralization</small>
                            <strong>Compare multiple supplier quotes side-by-side in real time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · IP Protection</small>
                            <strong>Watermark and restrict access to sensitive 3D models and drawings.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Revision Control</small>
                            <strong>Automatically notify bidders when engineering specs are updated.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Audit Trails</small>
                            <strong>Maintain a complete history of every interaction and file download.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When an upgrade is necessary</p>
                        <p>If your procurement team is manually tracking quotes in Excel and sharing 50MB CAD files via Dropbox, your IP is at risk.</p>
                        <a className="btn" href="#contact">Discuss Your Workflow <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Manual RFQ processes are slow, insecure, and prone to errors.</h2>
                        <p>Managing the quoting process for complex manufactured parts often involves dozens of emails, confusing revisions, and scattered attachments. This leads to suppliers bidding on outdated drawings and procurement teams wasting days doing manual data entry.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Version Confusion</h3>
                                <p>An engineer updates a drawing, but half the suppliers don't see the email and submit quotes based on the old specifications.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Security Risks</h3>
                                <p>Highly confidential IP and unreleased product designs are being shared over unsecured email chains or public file-sharing links.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Slow Comparisons</h3>
                                <p>Procurement spends hours re-typing supplier responses from PDFs into a master spreadsheet just to compare pricing and lead times.</p>
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
                                <h2>A secure hub for procurement and engineering.</h2>
                            </div>
                            <p>We build centralized web applications that bring your engineers, buyers, and external suppliers into a single, unified environment.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Collaboration</span>
                                <h3>Supplier Portals</h3>
                                <p>Secure logins for vendors to view active RFQs, submit quotes, ask technical questions, and receive feedback.</p>
                                <div className="deliverable-tags"><small>Portals</small><small>Auth</small><small>Bidding</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Data</span>
                                <h3>Quote Normalization</h3>
                                <p>Standardized digital forms that force suppliers to submit pricing in a uniform format, enabling one-click comparisons.</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Analytics</small><small>Tables</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Secure File Vaults</h3>
                                <p>Encrypted storage and viewing for CAD files and drawings, complete with access logs and digital watermarking.</p>
                                <div className="deliverable-tags"><small>Encryption</small><small>CAD Viewers</small><small>Logs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Integration</span>
                                <h3>PLM & ERP Syncing</h3>
                                <p>Pushing awarded contracts directly into your ERP (like SAP) and pulling the latest drawings directly from your PLM.</p>
                                <div className="deliverable-tags"><small>PLM</small><small>ERP API</small><small>Sync</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured RFQ Platform</p>
                            <h2>Standardizing the quoting process for global manufacturing.</h2>
                        </div>
                        <p>See how we helped a Tier 1 automotive supplier eliminate email-based RFQs and reduce quote turnaround time by 60%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>RFQ Portals</span>
                                <span>Supplier Workflows</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Supplier Collaboration Hub</p>
                                <h2>A clearer journey from engineering drawing to final contract.</h2>
                                <p>Procurement teams were tracking 2,000 active quotes across 500 suppliers using Excel. Engineering revisions were frequently missed, leading to costly manufacturing errors.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Users needed a secure way to share confidential CAD models, enforce standardized quote submissions, and track revision history.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We centralized the experience into a secure web portal. Suppliers log in to download watermarked drawings, submit itemized costs, and communicate directly with engineers.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Procurement can now compare 10 supplier bids side-by-side in one click, and IP leakage incidents dropped to zero.</strong></div>
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
                        <h2 id="faq-title">What procurement teams ask before digitizing RFQs.</h2>
                        <p>Answers covering security, supplier adoption, and system integration.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Will suppliers actually use the portal?</summary>
                            <p>Yes. We design the supplier-facing experience to be incredibly simple and frictionless. By reducing the administrative burden on their end and providing clear visibility into RFQ status, supplier adoption rates are typically very high.</p>
                        </details>
                        <details>
                            <summary>How secure is the engineering data?</summary>
                            <p>Security is the foundation of the platform. We implement enterprise-grade encryption, Multi-Factor Authentication (MFA), strict role-based access control (RBAC), and detailed audit logs of who downloaded what and when.</p>
                        </details>
                        <details>
                            <summary>Can this replace our PLM system?</summary>
                            <p>No, it complements it. Your PLM (Product Lifecycle Management) system remains the internal source of truth for engineering. The portal acts as the secure bridge to share specific, approved subsets of that data with external partners.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your RFQ process with the engineering and systems required to launch.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Client Portals</h3><p>Design secure spaces for clients to track programme status.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/custom-web-app-development/"><div><small>Development</small><h3>Custom Web Apps</h3><p>Build the complex logic required for unique bidding processes.</p></div><b>Explore apps ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Connect your quoting portal with existing PLM and ERPs.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Design</small><h3>Design Systems</h3><p>Ensure a consistent experience across all internal tools.</p></div><b>Explore systems ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Plan your secure supplier <br />collaboration experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to move your procurement process out of your inbox? Let's discuss your RFQ workflows.</p>
                        <a className="btn" href="#contact">Discuss Your RFQ <span className="arrow">↗</span></a>
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
