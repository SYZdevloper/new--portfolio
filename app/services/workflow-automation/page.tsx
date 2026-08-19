import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/workflow-automation/" },
  title: "Workflow Automation & API Integration Services | Hyperlink Tech Solutions",
  description: "Custom workflow automation and API integration services designed to eliminate manual data entry, connect siloed systems, and scale business operations.",
};

export default function WorkflowAutomation() {
  return (
    <>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/workflow-automation/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/workflow-automation/",
          "name": "Workflow Automation & API Integration Services | Hyperlink Tech Solutions",
          "description": "Custom workflow automation and API integrations to connect systems and eliminate manual data entry.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/workflow-automation/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/workflow-automation/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/workflow-automation/#service",
          "name": "Workflow Automation Services",
          "serviceType": "Automation & Integration",
          "url": "https://hyperlinktechsolutions.com/services/workflow-automation/",
          "description": "Design and build custom workflow automations and API integrations that connect disconnected software and eliminate repetitive tasks.",
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
                    <strong>Workflow Automation</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Connecting systems and automating manual processes</div>
                        <p className="eyebrow">Workflow Automation Services</p>
                        <h1 id="service-title">Turn manual tasks into <em className="accent-text">scalable, automated workflows.</em></h1>
                        <p className="hero-lead">We design and build custom workflow automations and API integrations that connect your disconnected software, eliminate repetitive tasks, and let your team focus on high-value work.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Connect siloed CRMs, ERPs, and specialized tools</li>
                            <li>Automate data entry and reporting pipelines</li>
                            <li>Build reliable, error-free operational workflows</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get an Automation Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Automation benefits">
                        <div className="proof-item">
                            <small>01 · System connectivity</small>
                            <strong>Seamless integrations between legacy tools and modern APIs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Error reduction</small>
                            <strong>Eliminate human error from manual data entry and transfers.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Operational scale</small>
                            <strong>Handle 10x the volume without increasing administrative headcount.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Real-time data</small>
                            <strong>Ensure all departments operate from the same up-to-date information.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When automation is necessary</p>
                        <p>Your operations should scale with revenue, not headcount.</p>
                        <a className="btn" href="#contact">Discuss Your Workflow <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your team should be driving growth—not copy-pasting data.</h2>
                        <p>We help businesses replace fragile spreadsheets and manual workflows with robust, automated pipelines that connect your existing software stack.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Siloed business data</h3>
                                <p>Important information is trapped across different tools, requiring manual exports to build a complete picture.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Process bottlenecks</h3>
                                <p>Critical workflows depend on manual approvals or data entry, slowing down service delivery and fulfillment.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>High error rates</h3>
                                <p>Manual data handling leads to costly mistakes, missed details, and unreliable reporting across departments.</p>
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
                                <h2>Custom integrations built for your specific operational logic.</h2>
                            </div>
                            <p>We don't use rigid off-the-shelf connectors. We engineer robust, custom pipelines tailored to your specific business rules and data requirements.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Foundation</span>
                                <h3>API Integration & Middleware</h3>
                                <p>Custom-coded connections between your core tools (HubSpot, Salesforce, Xero, etc.) using reliable webhooks and REST APIs.</p>
                                <div className="deliverable-tags"><small>REST/GraphQL</small><small>Webhooks</small><small>Authentication</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Intelligence</span>
                                <h3>Logic & Rule Engines</h3>
                                <p>Advanced branching logic that automatically routes data, triggers alerts, and updates statuses based on complex business rules.</p>
                                <div className="deliverable-tags"><small>Branching</small><small>Parsing</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Reliability</span>
                                <h3>Monitoring & Logging</h3>
                                <p>Clear dashboards to track automation health, view run histories, and instantly flag integration errors before they impact operations.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>Alerting</small><small>Retries</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Infrastructure</span>
                                <h3>Cloud Architecture</h3>
                                <p>Scalable, serverless infrastructure designed to handle high-volume data processing securely and efficiently.</p>
                                <div className="deliverable-tags"><small>AWS/GCP</small><small>Serverless</small><small>Security</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Automation Build</p>
                            <h2>Turning new enquiries into structured sales opportunities.</h2>
                        </div>
                        <p>See how FlowPilot connected lead capture, AI qualification, CRM updates and personalised follow-ups in one controlled automation workflow.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Automation project visual">
                            <div className="case-visual-top">
                                <span>AI Sales Automation</span>
                                <span>Workflow Orchestration + CRM APIs</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/ai-automation-workflow.webp" alt="Workflow Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">FlowPilot Lead Intake & Outreach</p>
                                <h2>From incoming lead to approved follow-up—automatically.</h2>
                                <p>We created an AI-assisted workflow that evaluates new enquiries, identifies high-intent prospects, creates CRM opportunities and prepares relevant follow-up messages for team approval.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Sales teams were manually reviewing lead submissions, determining their priority, entering information into the CRM and preparing individual responses. This slowed the first response and created inconsistent qualification records.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>The workflow receives each new lead through a webhook and uses AI to evaluate intent, fit and available contact information. Qualified leads are automatically converted into CRM opportunities, while tailored follow-ups are drafted using the submitted context.</strong></div>
                                <div className="case-fact"><small>Human Oversight</small><strong>Confidence thresholds and fallback rules route uncertain cases to a team member. Every AI-generated message requires approval before it is sent, keeping people in control of customer communication.</strong></div>
                                <div className="case-fact"><small>Visibility</small><strong>An automation dashboard tracks completed runs, success rates, time saved, pending reviews and recent workflow activity, making performance and exceptions easier to monitor.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The new workflow reduced repetitive lead-processing work, improved qualification consistency and helped sales teams respond to promising opportunities sooner without removing human review from important decisions.</strong></div>
                            </div>
                            <a className="btn primary" href="/work/">View All Automation Projects <span className="arrow">↗</span></a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section soft faq-section" id="faq" aria-labelledby="faq-title">
                <div className="container faq-shell">
                    <div className="faq-intro">
                        <p className="eyebrow">Frequently Asked Questions</p>
                        <h2 id="faq-title">Common questions about custom workflow automation.</h2>
                        <p>These answers clarify the scope, integrations, and operational requirements before requesting an automation proposal.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>What systems can you integrate with?</summary>
                            <p>We can integrate with virtually any system that has an API (REST, GraphQL, or SOAP) or supports webhooks. This includes common tools like Salesforce, HubSpot, Stripe, Xero, and legacy on-premise databases.</p>
                        </details>
                        <details>
                            <summary>Do you use Zapier or Make, or do you code it?</summary>
                            <p>We typically build custom Node.js/Python middleware for enterprise operations because it provides total control, reliability, and security without volume-based pricing limits. However, we can use Zapier or Make if it better fits a smaller use case.</p>
                        </details>
                        <details>
                            <summary>How do you handle integration errors?</summary>
                            <p>All of our custom automations include robust error handling, automated retries, and logging. If an external API goes down, the system queues the data and alerts your team automatically.</p>
                        </details>
                        <details>
                            <summary>Can you automate data entry from PDFs?</summary>
                            <p>Yes. We use advanced Document Processing and OCR AI models to automatically extract structured data from invoices, forms, and PDFs, routing the data directly into your ERP or CRM.</p>
                        </details>
                        <details>
                            <summary>How long does a typical automation build take?</summary>
                            <p>Most automation projects range from 3 to 8 weeks depending on the complexity of the business rules and the quality of the external APIs we are connecting to.</p>
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
                        <a className="related-card" href="/services/data-integration/"><div><small>Pipelines</small><h3>Data Integration</h3><p>Securely sync data across multiple systems to create a single source of truth.</p></div><b>Explore data integration ↗</b></a>
                        <a className="related-card" href="/services/document-processing/"><div><small>AI</small><h3>Document Processing</h3><p>Extract structured data from unstructured PDFs and forms using AI.</p></div><b>Explore document processing ↗</b></a>
                        <a className="related-card" href="/services/internal-ai-assistants/"><div><small>Assistants</small><h3>Internal AI Assistants</h3><p>Custom AI agents built on your company data to automate internal requests.</p></div><b>Explore AI assistants ↗</b></a>
                        <a className="related-card" href="/services/reporting-and-dashboards/"><div><small>Analytics</small><h3>Reporting & Dashboards</h3><p>Real-time operational dashboards that visualize your automated workflows.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Build operations that <br />scale without overhead. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to automate manual tasks and connect your core systems? Let's discuss your workflows and define a secure technical architecture.</p>
                        <a className="btn" href="#contact">Get an Automation Proposal <span className="arrow">↗</span></a>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </div>
    <a className="floating-cta" href="#contact">Get Automation Proposal ↗</a>
    <div className="mobile-bottom" aria-label="Quick contact actions">
        <a href="mailto:hello@hyperlinktechsolutions.com">Email Us</a>
        <a href="#contact">Get Proposal</a>
    </div>

    </>
  );
}
