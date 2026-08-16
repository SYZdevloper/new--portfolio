import type { Metadata } from "next";
import Link from "next/link";
import "../business-website-development/services.css";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/internal-ai-assistants/" },
  title: "Custom Internal AI Assistants & RAG | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
  description: "Build secure, custom AI agents on your company proprietary data to automate internal requests and knowledge retrieval.",
};

export default function InternalAIAssistants() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/#webpage",
          "url": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/",
          "name": "Custom Internal AI Assistants & RAG | Hyperlink Tech Solutions | Hyperlink Tech Solutions",
          "description": "Build secure, custom AI agents on your company proprietary data to automate internal requests and knowledge retrieval.",
          "isPartOf": { "@id": "https://hyperlinktechsolutions.com/#website" },
          "about": { "@id": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/#service" },
          "breadcrumb": { "@id": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/#breadcrumb" },
          "inLanguage": "en"
        },
        {
          "@type": "Service",
          "@id": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/#service",
          "name": "Internal AI Assistants",
          "serviceType": "AI Development",
          "url": "https://hyperlinktechsolutions.com/services/internal-ai-assistants/",
          "description": "Build secure, custom AI agents on your company proprietary data to automate internal requests and knowledge retrieval.",
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
                    <strong>Internal AI Assistants</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Making company knowledge instantly accessible</div>
                        <p className="eyebrow">Internal AI Assistants</p>
                        <h1 id="service-title" dangerouslySetInnerHTML={{ __html: 'Give your team an AI that actually <em class="accent-text">knows your business.</em>' }}></h1>
                        <p className="hero-lead">We build secure, custom internal AI assistants trained on your proprietary data, SOPs, and documentation. Stop answering the same questions in Slack and let AI handle tier-1 internal requests instantly.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Securely trained on your wikis, PDFs, and internal databases</li>
                            <li>Integrate directly into Slack, Microsoft Teams, or custom portals</li>
                            <li>Enterprise-grade security where your data is never used for public training</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Get an AI Assistant Proposal <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Automation benefits">
                        <div className="proof-item">
                            <small>01 · Instant Answers</small>
                            <strong>Retrieve complex internal policies in seconds.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Onboarding</small>
                            <strong>New hires get immediate answers to process questions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Interruptions</small>
                            <strong>Protect senior staff focus time from repetitive questions.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Absolute Security</small>
                            <strong>Your private company data remains strictly confidential.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When custom AI is necessary</p>
                        <p>Your team's collective knowledge shouldn't be locked in a few people's heads.</p>
                        <a className="btn" href="#contact">Discuss Custom AI <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Finding internal information shouldn't require a scavenger hunt.</h2>
                        <p>As companies grow, institutional knowledge becomes fragmented across Notion, Google Drive, and Slack, creating massive inefficiencies.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Endless Repetitive Questions</h3>
                                <p>Senior team members spend hours every week answering the same process and policy questions in chat.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Employee Onboarding</h3>
                                <p>New hires struggle to find the right documentation, slowing down their ramp-up time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Fragmented Knowledge Bases</h3>
                                <p>Important company data is scattered across multiple platforms, making search tools virtually useless.</p>
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
                                <h2>Secure, agentic workflows built for the enterprise.</h2>
                            </div>
                            <p>We architect AI solutions using advanced RAG (Retrieval-Augmented Generation) to ensure accurate, hallucination-free answers based strictly on your data.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Architecture</span>
                                <h3>RAG Implementation</h3>
                                <p>Building secure vector databases that index your internal documents, allowing the AI to retrieve exact context before answering.</p>
                                <div className="deliverable-tags"><small>Vector DBs</small><small>RAG</small><small>Embeddings</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Integration</span>
                                <h3>Chat & Platform Hooks</h3>
                                <p>Deploying the assistant directly where your team works, whether that's a custom web app, Slack bot, or MS Teams integration.</p>
                                <div className="deliverable-tags"><small>Slack API</small><small>Teams</small><small>Web UI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Security</span>
                                <h3>Enterprise Data Protection</h3>
                                <p>Utilizing private API endpoints (Azure, AWS) to guarantee your proprietary data is never used to train public models.</p>
                                <div className="deliverable-tags"><small>Private AI</small><small>Compliance</small><small>IAM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Agents</span>
                                <h3>Agentic Workflows</h3>
                                <p>Upgrading assistants from just answering questions to taking actions, like generating reports or triggering workflows via API.</p>
                                <div className="deliverable-tags"><small>Agents</small><small>Tool Use</small><small>Actions</small></div>
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
                            <h2>Automating internal technical support.</h2>
                        </div>
                        <p>See how we built a Slack-based AI assistant that instantly answers tier-1 support queries for a growing engineering team.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>AI Engineering</span>
                                <span>RAG + Slack API</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/ai-automation-workflow.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Engineering Support AI</p>
                                <h2>Ending the endless Slack pings.</h2>
                                <p>A rapidly growing software company found their senior engineers were spending 20% of their day answering basic infrastructure and deployment questions from junior staff.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Detailed documentation existed in Confluence and GitHub, but it was massive and hard to search. Junior devs preferred asking seniors in Slack because it was faster, killing senior productivity.</strong></div>
                                <div className="case-fact"><small>Build</small><strong>We built a custom RAG pipeline that indexed all their Confluence spaces and GitHub markdown files. We deployed a Slack bot (`@EngBot`) that intercepts questions, retrieves the exact relevant documentation, and synthesizes a clear answer with citations.</strong></div>
                                <div className="case-fact"><small>Impact</small><strong>The AI assistant successfully resolves 70% of tier-1 internal technical questions instantly. Senior engineers recovered over 8 hours a week of deep work focus time.</strong></div>
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
                        <h2 id="faq-title">Common questions about internal AI assistants.</h2>
                        <p>Answers covering data privacy, RAG architecture, and integrations.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Will our proprietary data be used to train public AI models (like ChatGPT)?</summary>
                            <p>Absolutely not. We build using enterprise API endpoints (like Azure OpenAI or Anthropic's commercial APIs) which explicitly prohibit the use of your data for model training. Your data remains completely private and secure.</p>
                        </details>
                        <details>
                            <summary>How do you prevent the AI from hallucinating or making up answers?</summary>
                            <p>We use an architecture called RAG (Retrieval-Augmented Generation). The AI is strictly instructed to only answer based on the context we retrieve from your internal documents. If the answer isn't in your documents, it is programmed to say "I don't know" rather than guess.</p>
                        </details>
                        <details>
                            <summary>What types of documents can the AI index?</summary>
                            <p>We can index PDFs, Word documents, text files, Google Docs, Confluence pages, Notion workspaces, and even structured data from databases. We build ingestion pipelines that keep the AI's knowledge base updated as your documents change.</p>
                        </details>
                        <details>
                            <summary>Can the AI respect internal permission levels?</summary>
                            <p>Yes. If required, we can implement role-based access controls (RBAC) in the RAG pipeline. This ensures that the AI will only retrieve and synthesize information from documents that the specific requesting user has authorization to view.</p>
                        </details>
                        <details>
                            <summary>Does it have to be a Slack bot?</summary>
                            <p>No. While chat platforms (Slack/Teams) are the most popular deployment method for internal tools, we frequently build custom Next.js web portals or integrate the assistant directly into your existing internal software via API.</p>
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
                    <h2>Make your company knowledge <br />instantly accessible. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to build a secure, custom AI assistant that actually understands your business? Let's discuss your data and use cases.</p>
                        <a className="btn" href="#contact">Get an AI Assistant Proposal <span className="arrow">↗</span></a>
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
