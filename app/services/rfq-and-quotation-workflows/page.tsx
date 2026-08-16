import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/rfq-and-quotation-workflows/" },
  title: "RFQ & Quotation Workflows | Hyperlink Tech Solutions",
  description: "Collect complete requirements and move opportunities through review with structured RFQ forms and secure file intake.",
};

export default function RfqAndQuotationWorkflows() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/",
          "name": "RFQ & Quotation Workflows | Hyperlink Tech Solutions",
          "description": "Collect complete requirements and move opportunities through review with structured RFQ forms and secure file intake.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/#service",
          "name": "RFQ & Quotation Workflows",
          "serviceType": "Workflow Automation",
          "url": "https://hyperlinktechsolutions.com/services/rfq-and-quotation-workflows/",
          "description": "Collect complete requirements and move opportunities through review with structured RFQ forms and secure file intake.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturers, Suppliers, Distributors"
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
                    <strong>RFQ & Quotation Workflows</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Commercial intake</div>
                        <p className="eyebrow">RFQ & Quotation Workflows</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Collect complete requirements and move opportunities <em class="accent-text">through review.</em>' }}></h1>
                        <p className="hero-lead">Capture drawings, quantities, materials, tolerances, due dates, questions, approvals and quote versions seamlessly without endless email threads.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Guided RFQ forms</li>
                            <li>Secure file intake</li>
                            <li>Review and quote states</li>
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
                            <small>01 · Structured Data</small>
                            <strong>Stop chasing missing details; enforce mandatory fields for complete RFQs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Secure Intake</small>
                            <strong>Safely receive and store large CAD files, blueprints, and NDAs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Visibility</small>
                            <strong>Track every quote's status from 'received' to 'estimating' to 'sent'.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Versioning</small>
                            <strong>Keep a clean record of quote revisions and client approvals.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When structured RFQs are necessary</p>
                        <p>Estimators spend too much time organizing chaotic emails and not enough time pricing winning bids.</p>
                        <a className="btn" href="#contact">Discuss Workflows <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Email is not a quoting system.</h2>
                        <p>When RFQs arrive via disjointed emails with missing attachments, vague requirements, and scattered correspondence, the quoting process grinds to a halt. You lose speed, accuracy, and ultimately, deals.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Incomplete Information</h3>
                                <p>Clients send a request for a part but forget to specify material grade, tolerances, or required quantities, forcing estimators into days of back-and-forth.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>File Management Chaos</h3>
                                <p>Large CAD files bounce back due to email limits, or sensitive blueprints are stored insecurely across different reps' local drives.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Lost Visibility</h3>
                                <p>No one knows who is working on which quote, where the bottlenecks are, or why certain RFQs were abandoned or lost to competitors.</p>
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
                                <h2>Automated RFQ intake systems.</h2>
                            </div>
                            <p>We build robust workflows to handle complex quotation processes, ensuring you get the right information up front and move it smoothly through your organization.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Forms</span>
                                <h3>Guided Intake Flows</h3>
                                <p>Dynamic forms that adapt based on the requested service, ensuring all necessary specifications (materials, finish, quantities) are collected immediately.</p>
                                <div className="deliverable-tags"><small>Dynamic Forms</small><small>Logic</small><small>Data Capture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Files</span>
                                <h3>Secure Document Vaults</h3>
                                <p>Integrated file upload portals capable of handling massive CAD files, managing NDAs, and storing blueprints securely outside of crowded inboxes.</p>
                                <div className="deliverable-tags"><small>CAD</small><small>Security</small><small>NDAs</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Tracking</span>
                                <h3>Estimating Dashboards</h3>
                                <p>Internal Kanban boards or lists where your team can assign, track, and collaborate on quotes in real-time, moving them through standardized states.</p>
                                <div className="deliverable-tags"><small>Kanban</small><small>Status</small><small>Collaboration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Approvals</span>
                                <h3>Client Quote Portals</h3>
                                <p>Secure links sent to clients where they can view the finalized quote, request revisions, or digitally sign off to approve production.</p>
                                <div className="deliverable-tags"><small>Approvals</small><small>Sign-off</small><small>Revisions</small></div>
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
                            <h2>Cutting quoting turnaround time by 50%.</h2>
                        </div>
                        <p>See how a structured RFQ workflow transformed a chaotic estimating department into a streamlined revenue engine.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>RFQ Workflow Engine</span>
                                <span>Custom Web App</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#111', height: '200px' }}>
                                {/* Placeholder for case study image */}
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Custom Parts Supplier</p>
                                <h2>Ending the email tennis match.</h2>
                                <p>A custom parts supplier had a team of 4 estimators overwhelmed by disorganized email RFQs, leading to delayed quotes and lost bids.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Estimators spent 60% of their day just chasing down missing CAD files and clarifying material requirements with clients.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a guided RFQ intake portal integrated with their website, forcing clients to upload files and select specifications before submitting, feeding directly into an internal estimating dashboard.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Quoting turnaround time dropped from 4 days to 2 days, and the company won 15% more bids simply by being the fastest to reply with an accurate price.</strong></div>
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
                        <h2 id="faq-title">Common questions about RFQ workflows.</h2>
                        <p>Answers covering integrations, security, and user experience.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can the RFQ form connect to our existing ERP/CRM?</summary>
                            <p>Yes. We routinely build integrations to push structured RFQ data directly into systems like Salesforce, HubSpot, or industry-specific ERPs via API.</p>
                        </details>
                        <details>
                            <summary>How do you handle large file uploads?</summary>
                            <p>We configure direct-to-cloud storage uploads (e.g., AWS S3) ensuring that massive CAD files don't hit your email server limits and are stored securely.</p>
                        </details>
                        <details>
                            <summary>Will clients hate filling out a long form?</summary>
                            <p>We design forms using progressive disclosure—breaking them down into simple, logical steps. Clients actually prefer it because it ensures their quote is accurate the first time.</p>
                        </details>
                        <details>
                            <summary>Can we track metrics on our estimating team?</summary>
                            <p>Yes. The dashboard provides analytics on how many RFQs are in progress, average turnaround times, and win/loss ratios across different estimators.</p>
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
                        <a className="related-card" href="/services/client-portal-development/"><div><small>Portals</small><h3>Customer Portals</h3><p>Give authorised customers one place for active work.</p></div><b>Explore customer portals ↗</b></a>
                        <a className="related-card" href="/services/quality-and-document-control/"><div><small>Compliance</small><h3>Quality & Document Control</h3><p>Connect inspection and quality information.</p></div><b>Explore quality control ↗</b></a>
                        <a className="related-card" href="/services/production-and-capacity-dashboards/"><div><small>Operations</small><h3>Production Dashboards</h3><p>Help teams understand workload, schedules and exceptions.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Turn chaotic requests into <br />structured quotes. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to streamline your estimating department and close deals faster?</p>
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
