import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/professional-service-websites/" },
  title: "Professional Service Websites | Hyperlink Tech Solutions",
  description: "We design premium, high-trust websites for law firms, accounting practices, and specialized consultancies that establish industry authority and clearly articulate complex service offerings.",
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
                    <strong>Brand Discovery</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Professional Websites</div>
                        <p className="eyebrow">Brand Discovery</p>
                        <h1 id="service-title">Digitally showcase your professional expertise.</h1>
                        <p className="hero-lead">We design premium, high-trust websites for law firms, accounting practices, and specialized consultancies that establish industry authority and clearly articulate complex service offerings.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Premium, typography-led digital design that conveys institutional stability and intellectual rigor</li>
                            <li>Dynamic partner and practitioner directories allowing clients to easily find specific legal or financial experts</li>
                            <li>Headless CMS setups allowing marketing teams to launch new practice areas or publish thought leadership instantly</li>
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
                            <small>01 · Brand Authority</small>
                            <strong>Digital experiences that justify premium billing rates to enterprise clients.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Complex Clarity</small>
                            <strong>Translate dense legal or financial methodologies into easily digestible visual service pages.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · SEO Optimized</small>
                            <strong>Structure that ranks highly for niche, high-value B2B search terms (e.g., 'Corporate Restructuring Tax').</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Marketing Agility</small>
                            <strong>Empower your team to update partner bios and publish insights without developer help.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When digital fails the firm</p>
                        <p>If a General Counsel cannot quickly understand your firm's unique methodology, they will hire a competitor.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Poor digital presentation devalues your expertise.</h2>
                        <p>Professional services are built on intellectual capital and trust. If a prospective enterprise client lands on an outdated website with dense walls of text, broken partner directories, and generic stock photos, they will assume your advisory services are equally uninspired. They need immediate confidence in your capability to solve their complex problems.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Academic Clutter</h3>
                                <p>The website reads like a textbook, failing to quickly communicate the actual business value of your services to a busy executive.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Slow Performance</h3>
                                <p>Your website feels outdated and sluggish, undermining trust in your firm's ability to handle modern business challenges.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Developer Bottlenecks</h3>
                                <p>Marketing is unable to announce the hiring of a new Partner without waiting weeks for IT support.</p>
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
                                <h2>Digital flagships for advisory firms.</h2>
                            </div>
                            <p>We build decoupled frontend experiences that prioritize trust, intellectual clarity, and uncompromising speed.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Headless Architecture</h3>
                                <p>Next.js frontends connected to Sanity or Contentful, ensuring the site is lightning fast and highly secure.</p>
                                <div className="deliverable-tags"><small>React</small><small>Headless</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Dynamic Service Architecture</h3>
                                <p>Building structured taxonomies that interlink Partner Profiles, Case Studies, and specific Services intelligently.</p>
                                <div className="deliverable-tags"><small>UX</small><small>SEO</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Premium UI Design</h3>
                                <p>Crafting bespoke interfaces that rely on negative space, elegant typography, and subtle micro-interactions to convey prestige.</p>
                                <div className="deliverable-tags"><small>Design</small><small>UI</small><small>Brand</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Global Edge Hosting</h3>
                                <p>Deployment on Vercel to ensure your site loads instantly for prospective clients worldwide.</p>
                                <div className="deliverable-tags"><small>DevOps</small><small>Performance</small><small>Scale</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Practice Platform</p>
                            <h2>Modernizing client intake.</h2>
                        </div>
                        <p>See how we helped a commercial law firm digitize their archaic, paper-based client onboarding process, allowing them to collect sensitive data securely and run automated conflict checks via API before the first meeting.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>LegalTech</span>
                                <span>Client Intake</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/professional-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Frictionless, compliant onboarding.</h2>
                                <p>We developed a highly secure application flow that intelligently adapts based on the client type. It automatically securely collects identification documents and pushes the sanitized data directly into their Practice Management System, eliminating manual data entry.</p>
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
                        <h2 id="faq-title">Common questions about professional tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you ensure attorney-client privilege and data security?</summary>
                            <p>We build with compliance at the core. We utilize enterprise-grade Identity and Access Management (like Auth0), ensure all data and documents are encrypted at rest (AES-256) and in transit, and architect secure vaults that bypass standard email protocols completely.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Practice Management Systems (e.g., Clio, Actionstep, Xero)?</summary>
                            <p>Yes. We build secure API middleware to connect your modern web frontend directly to your core practice software. This allows us to push new client data, pull matter statuses, and sync billing information without manual double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you handle complex digital signatures?</summary>
                            <p>Yes. We integrate directly with platforms like DocuSign or HelloSign via API, allowing you to automatically generate complex engagement letters or tax documents and prompt the client to sign them securely within the portal.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other practice capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/professional-service-websites/"><div><small>Discovery</small><h3>Practice Websites</h3><p>Showcase firm expertise.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/consultation-and-client-intake/"><div><small>Conversion</small><h3>Client Intake</h3><p>Secure digital onboarding.</p></div><b>Explore intake ↗</b></a>
                        <a className="related-card" href="/services/secure-client-portals/"><div><small>Service</small><h3>Client Portals</h3><p>Secure collaboration.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/matter-and-compliance-workflows/"><div><small>Operations</small><h3>Matter Workflows</h3><p>Empower the practice.</p></div><b>Explore operations ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your professional <br />services practice. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From compliant digital client intake flows to highly secure document portals and realization dashboards, we build software that drives billable efficiency and protects your firm's data.</p>
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
