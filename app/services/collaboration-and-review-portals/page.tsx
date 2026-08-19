import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/collaboration-and-review-portals/" },
  title: "Collaboration & Review Portals | Hyperlink Tech Solutions",
  description: "We build secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback without messy email chains.",
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
                    <strong>Digital Service</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Client Portals</div>
                        <p className="eyebrow">Digital Service</p>
                        <h1 id="service-title">Secure, centralized creative feedback.</h1>
                        <p className="hero-lead">We build secure environments for clients to review deliverables, annotate creative assets, and provide structured feedback without messy email chains.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure web dashboards replacing massive email chains when presenting branding concepts or video cuts to clients</li>
                            <li>Interactive annotation tools allowing clients to click directly on an image or video timestamp to leave specific feedback</li>
                            <li>Dynamic approval workflows that require formal digital sign-off from key stakeholders before moving to the next phase</li>
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
                            <small>01 · Premium Client Experience</small>
                            <strong>Provide a modern, transparent digital experience that justifies your agency retainer.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Faster Revisions</small>
                            <strong>Stop designers from guessing what 'make it pop more' means in an email; get exact visual annotations.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Version Control</small>
                            <strong>Ensure the client is always looking at 'v4_Final' and not an old link from last week.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Approvals</small>
                            <strong>Keep all feedback and final sign-offs securely in one auditable environment to prevent scope disputes.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When collaboration is analog</p>
                        <p>Managing feedback on a 60-second commercial via a bulleted list in an email is a recipe for disaster.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disorganized feedback causes revision hell.</h2>
                        <p>Creative delivery involves massive amounts of subjective feedback. If your team is asking a client to review a video by sending a Dropbox link and waiting for an email response, the feedback will be vague and disconnected from the asset. This leads to endless revision cycles that destroy project profitability.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Feedback Disconnect</h3>
                                <p>Designers spend hours trying to match a client's emailed bullet point to a specific frame of a video.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Version Chaos</h3>
                                <p>A client accidentally approves 'v2' instead of 'v3' because they lost the most recent link in their inbox.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Scope Disputes</h3>
                                <p>The client claims they never approved the final design, and the agency has to dig through months of emails to find the confirmation.</p>
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
                                <h2>Centralized creative operations.</h2>
                            </div>
                            <p>We engineer secure environments that professionalize the relationship between your agency and the client.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Client Review Dashboards</h3>
                                <p>Custom UIs where clients can view all active projects, deliverables, and outstanding approval requests in one place.</p>
                                <div className="deliverable-tags"><small>React</small><small>Dashboards</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Annotation & Markup Tools</h3>
                                <p>Building interactive canvases that allow users to drop pins on images or videos to leave precise, contextual comments.</p>
                                <div className="deliverable-tags"><small>UX</small><small>Canvas</small><small>Collaboration</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Approval API Workflows</h3>
                                <p>Middleware that ensures when a client clicks 'Approve' in the portal, the task is instantly updated in your internal project management tool.</p>
                                <div className="deliverable-tags"><small>Integration</small><small>APIs</small><small>Operations</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Identity Management (CIAM)</h3>
                                <p>Secure login flows (Auth0) allowing agency producers to easily grant or revoke access for specific client stakeholders.</p>
                                <div className="deliverable-tags"><small>Security</small><small>Auth</small><small>B2B</small></div>
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
