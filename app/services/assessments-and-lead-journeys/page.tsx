import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/assessments-and-lead-journeys/" },
  title: "Assessments & Lead Journeys | Hyperlink Tech Solutions",
  description: "We engineer interactive digital assessments and diagnostic tools that provide immediate value to prospects while capturing deep, structured data for your sales team.",
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
                    <strong>Conversion</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">B2B Diagnostics</div>
                        <p className="eyebrow">Conversion</p>
                        <h1 id="service-title">Intelligent B2B lead qualification.</h1>
                        <p className="hero-lead">We engineer interactive digital assessments and diagnostic tools that provide immediate value to prospects while capturing deep, structured data for your sales team.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based diagnostic tools (e.g., 'Cybersecurity Readiness Scorecard') that ask prospects targeted questions</li>
                            <li>Dynamic logic that calculates a personalized score or report instantly based on the prospect's answers</li>
                            <li>Seamless API integrations pushing the prospect's full diagnostic profile directly to the Partner responsible for that sector</li>
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
                            <small>01 · Higher Conversion</small>
                            <strong>Prospects are far more likely to complete an interactive 'Scorecard' than a generic 'Contact Us' form.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Deep Qualification</small>
                            <strong>Your sales team receives structured data (e.g., 'Revenue &gt; $50M', 'Using Legacy ERP') before the first meeting.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Immediate Value</small>
                            <strong>The prospect receives a beautifully generated PDF report with initial recommendations instantly.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Scalable Prospecting</small>
                            <strong>Automate the initial discovery phase of your consulting methodology.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When lead gen is passive</p>
                        <p>A 'Contact Us' form gives your sales team a name and an email. An assessment gives them a business problem to solve.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Generic forms kill B2B conversion rates.</h2>
                        <p>Professional services firms struggle to differentiate their digital lead generation. If your only call-to-action is a generic 'Speak to a Partner' form, prospects will hesitate. They don't want a sales pitch; they want value. If you don't offer a tool to help them self-diagnose their problem, they will bounce.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Low Form Submissions</h3>
                                <p>Traffic to your service pages is high, but nobody is filling out the 'Contact Us' form.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Unqualified Leads</h3>
                                <p>Partners waste time on intro calls with prospects who are far too small for your minimum engagement fee.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Cold First Meetings</h3>
                                <p>The sales team goes into the first meeting completely blind, wasting 30 minutes just gathering basic discovery facts.</p>
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
                                <h2>Automated B2B discovery.</h2>
                            </div>
                            <p>We engineer interactive tools that trade personalized consulting value for deep prospect data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Interactive Diagnostics</h3>
                                <p>Building bespoke React flows that guide a prospect through a visually engaging set of discovery questions.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Scoring & Logic Engines</h3>
                                <p>Developing backend algorithms that calculate maturity scores or benchmarking data based on the user's specific inputs.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Math</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Report Generation</h3>
                                <p>Engines that take the calculated score and automatically generate a stunning, personalized PDF report sent via email.</p>
                                <div className="deliverable-tags"><small>Reporting</small><small>PDFs</small><small>Automation</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CRM API Routing</h3>
                                <p>Middleware that analyzes the answers and routes the lead to the correct Partner in Salesforce based on industry or company size.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Workflow</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Advisory Platform</p>
                            <h2>Modernizing client collaboration.</h2>
                        </div>
                        <p>See how we helped a mid-tier management consulting firm replace their unsecured email document collection process with a custom React client portal, speeding up the discovery phase of their engagements by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Professional Services</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/advisory-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, structured discovery.</h2>
                                <p>We developed a secure B2B portal where enterprise clients can log in via SSO, view a dynamic checklist of required compliance documents, and securely upload them directly into the consulting firm's practice management software.</p>
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
                        <h2 id="faq-title">Common questions about advisory tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you integrate with CRMs like Salesforce or HubSpot?</summary>
                            <p>We build API middleware that connects your diagnostic tools and contact forms directly to your CRM. When a prospect completes a 'Cybersecurity Assessment', the tool instantly creates a Lead record containing all their structured answers.</p>
                        </details>
                        <details>
                            <summary>Can you build secure document vaults for legal or M&A teams?</summary>
                            <p>Yes. We build enterprise-grade portals using Auth0 for identity management and AWS/Azure for encrypted file storage, ensuring highly sensitive due-diligence documents are never sent via plain text email.</p>
                        </details>
                        <details>
                            <summary>How do you handle complex intellectual property (IP) libraries?</summary>
                            <p>We use headless CMS platforms (like Sanity) coupled with powerful search engines (like Algolia) to build lightning-fast knowledge hubs. You can gate premium content behind lead-capture forms or client-only logins.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other advisory capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/authority-and-service-websites/"><div><small>Discovery</small><h3>Authority Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/insights-and-knowledge-libraries/"><div><small>Content</small><h3>Knowledge Hubs</h3><p>Monetize your IP.</p></div><b>Explore insights ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-lead-journeys/"><div><small>Conversion</small><h3>B2B Assessments</h3><p>Intelligent qualification.</p></div><b>Explore assessments ↗</b></a>
                        <a className="related-card" href="/services/client-and-project-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services firm. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From intelligent B2B lead generation tools to secure client collaboration portals and utilization dashboards, we build software that drives billable efficiency and firm growth.</p>
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
