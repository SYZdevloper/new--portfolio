import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/document-processing/" },
  title: "AI Document Processing & Extraction Services | Hyperlink Tech Solutions",
  description: "Extract structured data from unstructured PDFs, invoices, and forms using advanced AI models.",
};

export default function DocumentProcessing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/document-processing/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/document-processing/",
          "name": "AI Document Processing & Extraction Services | Hyperlink Tech Solutions",
          "description": "Extract structured data from unstructured PDFs, invoices, and forms using advanced AI models.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/document-processing/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/document-processing/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/document-processing/#service",
          "name": "AI Document Processing",
          "serviceType": "AI Automation",
          "url": "https://hyperlinktechsolutions.com/services/document-processing/",
          "description": "Extract structured data from unstructured PDFs, invoices, and forms using advanced AI models.",
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
                    <strong>Document Processing</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Automating manual data entry</div>
                        <p className="eyebrow">AI Document Processing</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Turn messy PDFs into <em class="accent-text">structured, actionable data.</em>' }}></h1>
                        <p className="hero-lead">We build AI-powered document processing pipelines that instantly read, extract, and validate information from invoices, forms, and unstructured documents, routing the clean data directly into your systems.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Process thousands of invoices and forms instantly</li>
                            <li>Eliminate costly human data entry errors</li>
                            <li>Handle variable layouts without rigid OCR templates</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get a Document AI Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Automation benefits">
                        <div className="proof-item">
                            <small>01 · Speed</small>
                            <strong>Process 100-page documents in seconds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accuracy</small>
                            <strong>AI models that understand context, not just coordinates.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Flexibility</small>
                            <strong>Handles different vendor layouts automatically.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Cost Reduction</small>
                            <strong>Slash administrative overhead spent on data entry.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When AI extraction is necessary</p>
                        <p>Manual data entry creates scaling bottlenecks and high error rates.</p>
                        <a className="btn" href="#contact">Discuss Your Documents <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Humans shouldn't be used as copy-paste machines.</h2>
                        <p>Traditional OCR fails when document layouts change. We use modern AI models (like GPT-4o and specialized Vision models) to understand documents contextually, extracting exactly what you need regardless of formatting.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Scaling Bottlenecks</h3>
                                <p>As business grows, you have to hire more administrative staff simply to process incoming paperwork, invoices, or applications.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Fragile OCR Templates</h3>
                                <p>Old OCR software breaks every time a vendor slightly changes the layout of their invoice or form.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>High Error Rates</h3>
                                <p>Manual data entry is prone to typos, leading to incorrect payments, compliance risks, and wasted time auditing data.</p>
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
                                <h2>Intelligent pipelines built for accuracy and scale.</h2>
                            </div>
                            <p>We architect complete solutions that handle ingestion, AI extraction, validation, and system routing.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · AI Models</span>
                                <h3>Vision & Extraction Models</h3>
                                <p>Implementing LLMs and specialized Vision APIs to accurately read text, tables, and handwritten notes from unstructured PDFs.</p>
                                <div className="deliverable-tags"><small>Vision AI</small><small>LLMs</small><small>Extraction</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Logic</span>
                                <h3>Automated Validation Rules</h3>
                                <p>Business logic that cross-references extracted data against your database to catch discrepancies (e.g., mismatched PO numbers).</p>
                                <div className="deliverable-tags"><small>Validation</small><small>Logic</small><small>Verification</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Routing</span>
                                <h3>System Integration</h3>
                                <p>Automatically pushing the validated, structured data directly into your ERP, CRM, or accounting software via API.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>ERP Sync</small><small>Routing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · UI</span>
                                <h3>Human-in-the-loop Dashboards</h3>
                                <p>Custom interfaces where low-confidence extractions are flagged for quick human review before entering the system.</p>
                                <div className="deliverable-tags"><small>Review UI</small><small>Dashboards</small><small>Confidence</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured AI Build</p>
                            <h2>Automating enterprise invoice processing.</h2>
                        </div>
                        <p>See how we replaced a fragile, manual invoice processing workflow with an intelligent AI pipeline that handles thousands of variable layouts.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>AI Automation</span>
                                <span>Vision AI + Node.js</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/ai-automation-workflow.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Automated Invoice Pipeline</p>
                                <h2>Processing 10k+ invoices monthly without templates.</h2>
                                <p>A logistics company was drowning in invoices from hundreds of different vendors, each with unique layouts. We built an AI pipeline that extracts line items, validates totals, and syncs to their accounting platform.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>A team of 5 clerks spent all day manually keying invoice data into the ERP. Previous attempts to automate failed because rigid OCR templates broke whenever a vendor updated their invoice design.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We developed a secure pipeline that intercepts invoice emails, passes PDFs to a Vision AI model instructed to find specific data points (Vendor, Total, Line Items) regardless of layout, and validates the math via custom Node.js scripts.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The system now processes 95% of invoices entirely automatically. The remaining 5% (low confidence scans) are flagged for one human reviewer. Invoice processing time dropped from days to minutes.</strong></div>
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
                        <h2 id="faq-title">Common questions about AI document extraction.</h2>
                        <p>Answers covering accuracy, privacy, and handling complex documents.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Is AI extraction better than traditional OCR?</summary>
                            <p>Yes. Traditional OCR relies on strict coordinate templates (e.g., "look 2 inches from the top for the total"). If the layout shifts, it breaks. Modern AI models read documents contextually, understanding what a "Total" is even if it's moved to the bottom of the page.</p>
                        </details>
                        <details>
                            <summary>How do you handle sensitive or confidential documents?</summary>
                            <p>We prioritize security by using enterprise-grade AI endpoints (like Azure OpenAI or dedicated AWS models) that do not use your proprietary data for training. Data is encrypted in transit and purged after extraction according to your retention policies.</p>
                        </details>
                        <details>
                            <summary>What happens if the AI makes a mistake?</summary>
                            <p>We build "Human-in-the-Loop" (HITL) workflows. The AI assigns a confidence score to its extraction. If the score falls below a threshold (e.g., 95%), or if validation rules fail (e.g., line items don't equal the total), the document is routed to a custom dashboard for quick human approval.</p>
                        </details>
                        <details>
                            <summary>Can it read handwriting?</summary>
                            <p>Yes, modern Vision AI models are remarkably proficient at transcribing legible handwriting, though confidence thresholds are typically set higher for handwritten forms to ensure a human reviews ambiguous text.</p>
                        </details>
                        <details>
                            <summary>What file types can be processed?</summary>
                            <p>We can process PDFs, JPEGs, PNGs, Word documents, and Excel files. We often build ingestion pipelines that automatically pull these attachments directly from email inboxes or cloud storage buckets.</p>
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
                    <h2>Turn unstructured documents <br />into instant data. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to eliminate manual data entry and scale your document processing? Let's discuss your extraction requirements.</p>
                        <a className="btn" href="#contact">Get a Document AI Proposal <span className="arrow">↗</span></a>
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
