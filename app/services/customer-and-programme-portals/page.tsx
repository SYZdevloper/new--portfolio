import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-programme-portals/" },
  title: "Customer & Programme Portals | Hyperlink Tech Solutions",
  description: "Build secure B2B client portals to track long-term programme milestones, share project documents, and provide real-time visibility into manufacturing status.",
};

export default function CustomerAndProgrammePortals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/",
          "name": "Customer & Programme Portals | Hyperlink Tech Solutions",
          "description": "Build secure B2B client portals to track long-term programme milestones, share project documents, and provide real-time visibility into manufacturing status.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/#service",
          "name": "Customer & Programme Portals",
          "serviceType": "Digital Enterprise Solutions",
          "url": "https://hyperlinktechsolutions.com/services/customer-and-programme-portals/",
          "description": "Build secure B2B client portals to track long-term programme milestones, share project documents, and provide real-time visibility into manufacturing status.",
          "provider": { "@id": "https://hyperlinktechsolutions.com/#organization" },
          "areaServed": "Worldwide",
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Enterprise manufacturers, logistics providers, and professional services"
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
                    <strong>Customer Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Client Visibility & Tracking</div>
                        <p className="eyebrow">Customer & Programme Portals</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Give your clients <em class="accent-text">complete transparency.</em>' }}></h1>
                        <p className="hero-lead">We develop secure, customized web portals that allow your enterprise clients to log in and instantly see the status of their orders, long-term programmes, and project milestones without picking up the phone.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Provide real-time visibility into complex, multi-month manufacturing cycles</li>
                            <li>Securely share progress reports, invoices, and compliance documentation</li>
                            <li>Reduce account management overhead and endless status-update emails</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Build Your Portal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Portal benefits">
                        <div className="proof-item">
                            <small>01 · Status Dashboards</small>
                            <strong>Visual timelines showing exactly where a project is in the lifecycle.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Document Sharing</small>
                            <strong>A single secure vault for contracts, CAD files, and quality sign-offs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Issue Tracking</small>
                            <strong>Allow clients to flag issues and track resolution in real-time.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · ERP Integration</small>
                            <strong>Pull live data directly from SAP, Oracle, or Dynamics 365.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When an upgrade is necessary</p>
                        <p>If your account managers are spending 40% of their week pulling data from ERPs just to email status reports to clients, you need a portal.</p>
                        <a className="btn" href="#contact">Discuss Your Workflow <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Enterprise clients expect consumer-grade digital experiences.</h2>
                        <p>When B2B clients spend millions on a manufacturing programme or long-term service contract, they expect more than a monthly PDF update. They want on-demand access to data, just like they have with FedEx or Amazon.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The "Where is my stuff?" Problem</h3>
                                <p>Your customer service team is overwhelmed by routine calls and emails from clients asking for basic updates on their orders.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Fragmented Communication</h3>
                                <p>Project approvals, design iterations, and change orders are scattered across dozens of unorganized email threads.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Data Bottlenecks</h3>
                                <p>The live data exists in your internal ERP or MRP systems, but clients have no way to access it without going through an account manager.</p>
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
                                <h2>A centralized hub for the entire customer journey.</h2>
                            </div>
                            <p>We build beautiful, highly secure web applications that connect your internal data systems directly to your clients.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Tracking</span>
                                <h3>Programme Dashboards</h3>
                                <p>Visual milestones, Gantt charts, and progress bars that translate complex ERP data into easy-to-understand project tracking.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Data Viz</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Collaboration</span>
                                <h3>Secure Approvals</h3>
                                <p>Built-in workflows allowing clients to securely review, comment on, and digitally sign off on designs, changes, or milestones.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>E-signatures</small><small>Approvals</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Enterprise IAM</h3>
                                <p>Implementing Identity and Access Management (like Okta or Azure AD) to ensure clients only see their specific company data.</p>
                                <div className="deliverable-tags"><small>IAM</small><small>SSO</small><small>RBAC</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Custom API Middleware</h3>
                                <p>Building secure, rate-limited APIs that act as a bridge between your legacy on-premise systems and the modern web frontend.</p>
                                <div className="deliverable-tags"><small>API Design</small><small>Middleware</small><small>Integration</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Client Portal</p>
                            <h2>Providing visibility into 18-month manufacturing cycles.</h2>
                        </div>
                        <p>See how we helped a heavy machinery manufacturer give their enterprise clients real-time visibility into their multi-million dollar orders.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Customer Portals</span>
                                <span>ERP Integration</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Programme Tracking Dashboard</p>
                                <h2>A clearer journey from order placement to final delivery.</h2>
                                <p>Account managers were spending 15 hours a week manually extracting status updates from SAP to send PDF reports to anxious clients awaiting their machinery.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Clients needed on-demand visibility into engineering milestones, manufacturing status, and shipping documents without constantly emailing their rep.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a secure client portal that syncs with SAP nightly. Clients log in to see visual progress bars for their equipment, download test certificates, and digitally approve design changes.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Customer service inquiries dropped by 45%, and the portal became a key selling point for the manufacturer's sales team.</strong></div>
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
                        <h2 id="faq-title">What enterprises ask before building customer portals.</h2>
                        <p>Answers covering data privacy, ERP connections, and user experience.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure clients only see their own data?</summary>
                            <p>We implement strict multi-tenant architecture and Row-Level Security (RLS) in the database. Combined with enterprise authentication, it is mathematically impossible for one client to access another's data.</p>
                        </details>
                        <details>
                            <summary>Can this replace our CRM?</summary>
                            <p>No, it works alongside it. Tools like Salesforce are for your internal sales and service teams. The portal is the external, customer-facing window into the data that lives in your CRM or ERP.</p>
                        </details>
                        <details>
                            <summary>How long does it take to build?</summary>
                            <p>A typical enterprise portal takes 3 to 6 months from initial discovery to deployment, heavily depending on the complexity of integrating with your existing internal systems and APIs.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Connect your customer experience with the systems required to launch.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/dashboard-design/"><div><small>UX Design</small><h3>Dashboard Design</h3><p>Create intuitive interfaces for complex project tracking.</p></div><b>Explore design ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Bridge the gap between your legacy ERP and the web portal.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/workflow-automation/"><div><small>Operations</small><h3>Workflow Automation</h3><p>Automate client notifications and internal approval routings.</p></div><b>Explore automation ↗</b></a>
                        <a className="related-card" href="/services/design-system-development/"><div><small>Design</small><h3>Design Systems</h3><p>Ensure your portal matches your corporate brand perfectly.</p></div><b>Explore systems ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Plan your B2B customer <br />portal experience. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your enterprise clients the transparency they expect? Let's discuss your ideal customer portal.</p>
                        <a className="btn" href="#contact">Discuss Your Portal <span className="arrow">↗</span></a>
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
