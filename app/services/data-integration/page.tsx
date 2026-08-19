import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/data-integration/" },
  title: "Data Integration & API Services | Hyperlink Tech Solutions",
  description: "Securely sync data across CRMs, ERPs, and legacy systems to create a single source of truth.",
};

export default function DataIntegration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/data-integration/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/data-integration/",
          "name": "Data Integration & API Services | Hyperlink Tech Solutions",
          "description": "Securely sync data across CRMs, ERPs, and legacy systems to create a single source of truth.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/data-integration/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/data-integration/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/data-integration/#service",
          "name": "Data Integration Services",
          "serviceType": "Data Engineering",
          "url": "https://hyperlinktechsolutions.com/services/data-integration/",
          "description": "Securely sync data across CRMs, ERPs, and legacy systems to create a single source of truth.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Growing businesses, enterprises, and operations teams"
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
                    <strong>Data Integration</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Creating a single source of truth</div>
                        <p className="eyebrow">Data Integration Services</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Connect your fragmented systems into <em class="accent-text">one unified dataset.</em>' }}></h1>
                        <p className="hero-lead">We build secure, robust data pipelines and API connectors that seamlessly sync information across your entire software stack, ensuring every department operates from the same data.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Sync CRMs, ERPs, and bespoke legacy platforms</li>
                            <li>Eliminate manual CSV exports and data merging</li>
                            <li>Ensure real-time data accuracy across the business</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Data Integration Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Automation benefits">
                        <div className="proof-item">
                            <small>01 · Data Accuracy</small>
                            <strong>Prevent conflicts caused by out-of-sync systems.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Time Saved</small>
                            <strong>Stop wasting hours manually formatting exports.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Secure Transfer</small>
                            <strong>Encrypted, reliable pipelines that protect sensitive data.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Hub</small>
                            <strong>Build a data warehouse that powers accurate reporting.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When integration is necessary</p>
                        <p>Data silos slow down decision-making and create organizational friction.</p>
                        <a className="btn" href="#contact">Discuss Your Data Stack <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your business can't scale when teams are looking at different numbers.</h2>
                        <p>We help growing companies tear down data silos, replacing manual spreadsheet merges with automated pipelines that feed directly into central data warehouses.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Fragmented Reporting</h3>
                                <p>Marketing, sales, and finance are all pulling numbers from different tools, creating conflicting reports.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Manual CSV Exports</h3>
                                <p>Teams waste hours downloading, cleaning, and uploading spreadsheets between disconnected software.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Customer Experience Gaps</h3>
                                <p>Support teams can't see a customer's full history because CRM and billing data are isolated.</p>
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
                                <h2>Enterprise-grade pipelines built for reliability and speed.</h2>
                            </div>
                            <p>We architect custom data integration solutions that handle complex transformations without breaking when an API updates.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Connectors</span>
                                <h3>Custom API Integrations</h3>
                                <p>Direct, secure connections between platforms like Salesforce, HubSpot, Stripe, Xero, and legacy systems.</p>
                                <div className="deliverable-tags"><small>REST</small><small>GraphQL</small><small>SOAP</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Pipelines</span>
                                <h3>ETL / ELT Architecture</h3>
                                <p>Extracting, transforming, and loading high-volume data safely into centralized data warehouses.</p>
                                <div className="deliverable-tags"><small>ETL</small><small>Pipelines</small><small>Sync</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Storage</span>
                                <h3>Data Warehousing</h3>
                                <p>Designing robust database schemas (PostgreSQL, Snowflake) to serve as your operational single source of truth.</p>
                                <div className="deliverable-tags"><small>PostgreSQL</small><small>Snowflake</small><small>SQL</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Monitoring</span>
                                <h3>Real-time Sync & Logging</h3>
                                <p>Automated monitoring that alerts your team instantly if a sync fails or data anomalies are detected.</p>
                                <div className="deliverable-tags"><small>Logging</small><small>Alerts</small><small>Real-time</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Integration Build</p>
                            <h2>Merging legacy operations with modern marketing.</h2>
                        </div>
                        <p>See how we connected a 15-year-old bespoke ERP system to modern CRM platforms to unify customer data.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Data Engineering</span>
                                <span>PostgreSQL + API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Unified Customer Data Pipeline</p>
                                <h2>Ending the daily spreadsheet migration.</h2>
                                <p>We designed a custom API layer over an inaccessible legacy ERP, pulling millions of rows of transaction data into a modern warehouse that feeds directly into HubSpot.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>The sales team had no visibility into inventory or past purchases because the ERP couldn't talk to HubSpot, forcing daily manual CSV uploads.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We engineered a Node.js ETL pipeline that securely queried the ERP database nightly, transformed the complex legacy data structures, and pushed clean records into HubSpot via API.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>Sales reps gained instant, real-time access to customer purchase histories within HubSpot, accelerating deal closures and entirely eliminating 15 hours of manual data entry per week.</strong></div>
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
                        <h2 id="faq-title">Common questions about data integration projects.</h2>
                        <p>Answers covering security, legacy systems, and database choices.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with our bespoke legacy software?</summary>
                            <p>Yes. If the software has an API, database access (SQL/NoSQL), or even just flat-file export capabilities (SFTP), we can build a secure pipeline to extract and sync that data.</p>
                        </details>
                        <details>
                            <summary>How do you handle sensitive data security?</summary>
                            <p>All pipelines are built with encryption in transit and at rest. We follow strict IAM (Identity and Access Management) protocols and use secure cloud infrastructure (AWS/GCP) to protect PII and financial data.</p>
                        </details>
                        <details>
                            <summary>What databases do you use for warehousing?</summary>
                            <p>For most mid-market applications, we utilize managed PostgreSQL databases on AWS or Supabase. For enterprise-scale analytics, we implement Snowflake or Google BigQuery.</p>
                        </details>
                        <details>
                            <summary>Do you use tools like Fivetran or build custom code?</summary>
                            <p>We evaluate both. If a managed connector like Fivetran fits perfectly and is cost-effective, we use it. If the data requires complex transformation logic or the APIs are non-standard, we write custom Node.js/Python pipelines.</p>
                        </details>
                        <details>
                            <summary>How do we know if data stops syncing?</summary>
                            <p>We build comprehensive alerting into every pipeline. If an external API goes down or a webhook fails, the system logs the error, queues the data for a retry, and immediately alerts your technical team via Slack or email.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Scale your operations with intelligent automation.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/workflow-automation/"><div><small>Automation</small><h3>Workflow Automation</h3><p>Turn manual tasks into scalable, automated workflows.</p></div><b>Explore workflow automation ↗</b></a>
                        <a className="related-card" href="/services/document-processing/"><div><small>AI</small><h3>Document Processing</h3><p>Extract structured data from unstructured PDFs and forms using AI.</p></div><b>Explore document processing ↗</b></a>
                        <a className="related-card" href="/services/internal-ai-assistants/"><div><small>Assistants</small><h3>Internal AI Assistants</h3><p>Custom AI agents built on your company data to automate internal requests.</p></div><b>Explore AI assistants ↗</b></a>
                        <a className="related-card" href="/services/reporting-and-dashboards/"><div><small>Analytics</small><h3>Reporting & Dashboards</h3><p>Real-time operational dashboards that visualize your automated workflows.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Stop merging spreadsheets. <br />Start trusting your data. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to connect your critical business systems and create a reliable single source of truth? Let's discuss your data architecture.</p>
                        <a className="btn" href="#contact">Get a Data Integration Proposal <span className="arrow">↗</span></a>
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
