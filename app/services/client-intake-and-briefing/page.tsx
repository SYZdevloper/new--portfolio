import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/client-intake-and-briefing/" },
  title: "Client Intake & Briefing | Hyperlink Tech Solutions",
  description: "We build dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins, eliminating back-and-forth emails.",
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
                    <strong>Conversion & Strategy</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Digital Briefing</div>
                        <p className="eyebrow">Conversion & Strategy</p>
                        <h1 id="service-title">Capture precise project requirements.</h1>
                        <p className="hero-lead">We build dynamic digital briefing forms that capture precise client requirements, asset specs, and budgets before a project even begins, eliminating back-and-forth emails.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom React-based intake flows that dynamically change questions based on the selected project type (e.g., Video vs. Web)</li>
                            <li>Secure file upload integrations allowing clients to securely attach existing brand guidelines or raw assets</li>
                            <li>Live API integrations pushing the structured brief directly into your CRM or project management system</li>
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
                            <small>01 · Faster Kick-offs</small>
                            <strong>Turn a messy 10-email thread into a single, perfectly structured digital brief.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Accurate Quoting</small>
                            <strong>Ensure your strategy team has all the technical specs they need to price a project accurately.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Admin</small>
                            <strong>Push clean data directly into Monday.com or Asana, automatically creating the project board.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Professional First Impression</small>
                            <strong>Provide clients with a sleek, branded onboarding experience from day one.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When intake is painful</p>
                        <p>If a producer has to chase a client for a logo in the correct format three times, margin is bleeding.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Messy briefs destroy project margins.</h2>
                        <p>Agencies lose thousands of dollars in billable time trying to extract basic requirements from clients via email. When a brief is incomplete, assumptions are made, leading to inaccurate quotes, scope creep, and rounds of unnecessary revisions. A structured intake process is the foundation of profitable delivery.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Email Grind</h3>
                                <p>Account managers spend hours every week chasing clients for missing brand assets or technical specifications.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Scope Creep</h3>
                                <p>A project goes over budget because the client's requirement for 'multi-language support' was buried in an old email, not the official brief.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Data Entry</h3>
                                <p>Producers waste time manually copying answers from a Word doc brief into Jira or Asana.</p>
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
                                <h2>Automated project discovery.</h2>
                            </div>
                            <p>We engineer interactive intake tools that trade an excellent client experience for perfectly structured project data.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Dynamic Briefing Frontends</h3>
                                <p>Building bespoke React flows that guide the client through a visually engaging, conditional question set.</p>
                                <div className="deliverable-tags"><small>UX</small><small>React</small><small>Conversion</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Secure Asset Intake</h3>
                                <p>Integrating direct-to-cloud uploaders (AWS S3) so clients can submit gigabytes of raw files without crashing the browser.</p>
                                <div className="deliverable-tags"><small>Cloud</small><small>Storage</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>PM Tool API Middleware</h3>
                                <p>Developing secure logic that pushes the sanitized brief data directly into systems like Asana, Jira, or Monday.com.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Integration</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Scoping Logic</h3>
                                <p>Building backend rules that can automatically generate a rough budget estimate based on the client's selected deliverables.</p>
                                <div className="deliverable-tags"><small>Logic</small><small>Finance</small><small>Automation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Agency Platform</p>
                            <h2>Transforming client delivery.</h2>
                        </div>
                        <p>See how we helped a global design agency replace fragmented email feedback loops with a custom React collaboration portal, accelerating project sign-offs by 40%.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Creative Tech</span>
                                <span>Client Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/marketing-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Secure, centralized collaboration.</h2>
                                <p>We developed a portal where enterprise clients log in via SSO, securely review brand assets, leave time-stamped video feedback, and approve final deliverables—all synchronized with the agency's internal Monday.com boards.</p>
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
                        <h2 id="faq-title">Common questions about marketing tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle massive file uploads (e.g., 4K video) in portals?</summary>
                            <p>We integrate specialized cloud storage architectures like AWS S3 with Transfer Acceleration directly into the frontend. This allows clients to upload multi-gigabyte files directly to the cloud without timing out the web server.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with Project Management tools like Asana or Monday.com?</summary>
                            <p>Absolutely. We build API middleware so that when a client clicks "Approve" in the external portal, the corresponding task in your internal PM tool is instantly marked as 'Done', preventing double-handling.</p>
                        </details>
                        <details>
                            <summary>Do you build real-time SLA dashboards for BPOs?</summary>
                            <p>Yes. We build "Control Towers" that ingest ticket data from Zendesk or Salesforce in real-time, visually alerting operations managers if a client's Service Level Agreement is at risk of being breached.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/agency-and-studio-websites/"><div><small>Discovery</small><h3>Agency Websites</h3><p>Showcase creative portfolios.</p></div><b>Explore discovery ↗</b></a>
                        <a className="related-card" href="/services/collaboration-and-review-portals/"><div><small>Service</small><h3>Review Portals</h3><p>Centralized client feedback.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/resource-and-asset-management/"><div><small>Operations</small><h3>Asset Management</h3><p>Secure digital asset storage.</p></div><b>Explore DAM ↗</b></a>
                        <a className="related-card" href="/services/bpo-and-agency-dashboards/"><div><small>Analytics</small><h3>Agency Dashboards</h3><p>Monitor profitability & SLAs.</p></div><b>Explore analytics ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your creative <br />and BPO operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From stunning agency websites to massive digital asset managers and SLA dashboards, we build software that scales your service delivery.</p>
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
