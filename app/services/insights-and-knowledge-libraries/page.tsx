import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/insights-and-knowledge-libraries/" },
  title: "Insights & Knowledge Libraries | Hyperlink Tech Solutions",
  description: "We build robust, searchable knowledge hubs that house whitepapers, case studies, and proprietary research, designed to capture high-value B2B leads.",
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
                    <strong>Content & SEO</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Knowledge Hubs</div>
                        <p className="eyebrow">Content & SEO</p>
                        <h1 id="service-title">Monetize and distribute your intellectual property.</h1>
                        <p className="hero-lead">We build robust, searchable knowledge hubs that house whitepapers, case studies, and proprietary research, designed to capture high-value B2B leads.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Lightning-fast, faceted search interfaces (powered by Algolia) allowing users to filter research by industry, topic, or author</li>
                            <li>Dynamic gating logic that requires an email capture only for premium, high-value assets</li>
                            <li>Seamless API integrations pushing downloaded lead data directly into Salesforce, HubSpot, or Marketo</li>
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
                            <small>01 · Lead Generation</small>
                            <strong>Turn your firm's research into a predictable engine for capturing enterprise MQLs (Marketing Qualified Leads).</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Thought Leadership</small>
                            <strong>Position your Partners as absolute authorities by showcasing their research beautifully.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Dominance</small>
                            <strong>Structure thousands of articles perfectly so Google indexes them for long-tail industry queries.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Intelligent Gating</small>
                            <strong>Don't annoy users with forms for basic articles; only gate the high-value whitepapers.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When IP is buried</p>
                        <p>If your groundbreaking supply chain report is hidden in a broken PDF link on page 4 of the blog, it generates zero leads.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized content destroys marketing ROI.</h2>
                        <p>Consulting firms spend hundreds of hours producing incredible research, whitepapers, and case studies. However, if that intellectual property is dumped into a generic WordPress blog with no filtering, no search capability, and clunky lead-capture forms, the investment is wasted. Clients simply cannot find the insights relevant to their specific problem.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The PDF Graveyard</h3>
                                <p>High-value research is locked inside unreadable PDFs that don't rank on Google and can't be read on mobile.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Search Frustration</h3>
                                <p>A prospect searching for 'Healthcare M&A' gets 50 irrelevant blog posts because the site's native search is broken.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Disconnected Leads</h3>
                                <p>A user downloads a whitepaper, but the form data just goes to a generic email inbox instead of syncing with the CRM.</p>
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
                                <h2>The digital engine for thought leadership.</h2>
                            </div>
                            <p>We engineer knowledge hubs that distribute your firm's IP elegantly while capturing deep B2B data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Faceted Search UIs</h3>
                                <p>Integrating Algolia or Meilisearch to provide instant, typo-tolerant search filtering across thousands of insights.</p>
                                <div className="deliverable-tags"><small>React</small><small>Search</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Digital-First Reports</h3>
                                <p>Converting static PDFs into interactive, data-rich React web pages that rank highly on Google and look stunning on mobile.</p>
                                <div className="deliverable-tags"><small>UX</small><small>SEO</small><small>Web</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Dynamic Lead Capture</h3>
                                <p>Building smart forms that utilize progressive profiling (asking for 'Company Size' on the second download, not the first).</p>
                                <div className="deliverable-tags"><small>Forms</small><small>Marketing</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CRM Integration</h3>
                                <p>Developing middleware that pushes the lead data and their specific content interests directly into HubSpot or Salesforce.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>CRM</small></div>
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
