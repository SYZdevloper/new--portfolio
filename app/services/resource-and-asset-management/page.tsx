import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/resource-and-asset-management/" },
  title: "Resource & Asset Management | Hyperlink Tech Solutions",
  description: "We build internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets (DAM).",
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
                    <strong>Operations</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Agency Operations</div>
                        <p className="eyebrow">Operations</p>
                        <h1 id="service-title">Scale your creative production.</h1>
                        <p className="hero-lead">We build internal tools to schedule creative teams, track project burn rates, and securely store vast libraries of digital assets (DAM).</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Custom Digital Asset Management (DAM) platforms handling massive 4K video files, RAW imagery, and complex brand taxonomies</li>
                            <li>Resource allocation dashboards allowing producers to see team utilization, availability, and skillset matching in real-time</li>
                            <li>Automated archival workflows that migrate old project assets to cheap, cold cloud storage (AWS Glacier) to save costs</li>
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
                            <small>01 · Faster Asset Retrieval</small>
                            <strong>Stop designers from spending 20 minutes searching the shared drive for a specific vector logo.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Optimized Utilization</small>
                            <strong>Ensure your expensive senior creatives aren't sitting idle while juniors are overwhelmed.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Reduced Storage Costs</small>
                            <strong>Automatically move terabytes of inactive project files off expensive hot storage.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Better Client Handover</small>
                            <strong>Provide clients with a secure, searchable library of all their finalized brand assets upon project completion.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations scale poorly</p>
                        <p>If a producer has to ask 5 people in Slack where the final logo file is, your agency is losing money.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Asset chaos throttles creative output.</h2>
                        <p>As agencies grow, managing files and people becomes the primary bottleneck. If your studio relies on a messy Google Drive folder structure and a massive Excel spreadsheet to schedule designers, files get lost, deadlines are missed, and expensive creatives are misallocated.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>The Search Penalty</h3>
                                <p>Creative teams waste thousands of billable hours every year just looking for the correct version of a file.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Resource Blindspots</h3>
                                <p>Producers double-book a video editor because the scheduling spreadsheet wasn't updated in real-time.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Exploding Cloud Costs</h3>
                                <p>The agency is paying a fortune for Dropbox because nobody has time to manually archive old 4K project files.</p>
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
                                <h2>The digital studio backbone.</h2>
                            </div>
                            <p>We engineer secure tools that turn your agency into a highly efficient production machine.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Custom DAM Interfaces</h3>
                                <p>Building lightning-fast, searchable asset libraries tailored to the specific metadata needs of your agency.</p>
                                <div className="deliverable-tags"><small>React</small><small>Search</small><small>UX</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Cloud Storage Architecture</h3>
                                <p>Engineering AWS S3 and Glacier pipelines to handle petabytes of data securely, optimizing for both speed and cost.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Cloud</small><small>Architecture</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Resource Scheduling Tools</h3>
                                <p>Visual Gantt charts and utilization dashboards that pull data from timesheets and PM tools to show live team availability.</p>
                                <div className="deliverable-tags"><small>Data Viz</small><small>Operations</small><small>Dashboards</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated File Ingestion</h3>
                                <p>Building APIs that automatically tag and sort files based on the project code when they are uploaded by a freelancer.</p>
                                <div className="deliverable-tags"><small>Automation</small><small>Metadata</small><small>Workflow</small></div>
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
