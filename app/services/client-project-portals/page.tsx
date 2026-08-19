import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/client-project-portals/" },
  title: "Client Project Portals | Hyperlink Tech Solutions",
  description: "We develop secure project rooms where clients can review CAD drawings, sign off on material schedules, and track design variations in real-time.",
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
                    <strong>Client Collaboration</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Client Portals</div>
                        <p className="eyebrow">Client Collaboration</p>
                        <h1 id="service-title">Keep clients engaged throughout the design phase.</h1>
                        <p className="hero-lead">We develop secure project rooms where clients can review CAD drawings, sign off on material schedules, and track design variations in real-time.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, centralized hubs for all project documentation and correspondence</li>
                            <li>Interactive 3D model viewers and design variation approval flows</li>
                            <li>Integrated financial tracking for fee stages and consultant costs</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Practice <span className="arrow">↗</span></a>
                            <a className="btn" href="#problems">Explore The Approach</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        
                        <div className="proof-item">
                            <small>01 · Centralized Comms</small>
                            <strong>Move design feedback out of messy email chains.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Digital Sign-offs</small>
                            <strong>Get binding approvals on concept designs and material boards.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Total Transparency</small>
                            <strong>Clients can log in 24/7 to see project progress and upcoming milestones.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Secure Vault</small>
                            <strong>Protect sensitive IP, financial data, and tender documents.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When collaboration is scattered</p>
                        <p>Managing a $5M house build via WhatsApp and Dropbox is a liability.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Disjointed communication leads to design disputes.</h2>
                        <p>During a long design phase, sending Revit exports, material mood boards, and fee invoices via fragmented emails creates confusion. When clients can't easily find the latest revision, decisions are delayed and scope creep occurs.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Version Control Chaos</h3>
                                <p>The client accidentally approves Revision B instead of Revision C because they lost the latest email link.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Unrecorded Approvals</h3>
                                <p>A client gives verbal approval for a costly design variation, leading to disputes when the invoice arrives.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Client Anxiety</h3>
                                <p>Without a clear view of the roadmap, clients constantly email partners for minor updates, draining practice resources.</p>
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
                                <h2>The digital studio experience.</h2>
                            </div>
                            <p>We build bespoke portals that make clients feel deeply connected to the design process.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Interactive Viewers</h3>
                                <p>Web-based integrations allowing clients to spin and explore 3D BIM models or panoramic renders directly in the browser.</p>
                                <div className="deliverable-tags"><small>3D</small><small>WebGL</small><small>BIM</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Approval Workflows</h3>
                                <p>Structured 'stage gate' sign-offs where clients must digitally accept the Concept Design before Schematic Design begins.</p>
                                <div className="deliverable-tags"><small>Workflows</small><small>E-Sign</small><small>Process</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Financial Dashboards</h3>
                                <p>Clear summaries of paid invoices, upcoming fee stages, and approved consultant variations.</p>
                                <div className="deliverable-tags"><small>Finance</small><small>Dashboards</small><small>Clarity</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Document Hubs</h3>
                                <p>Organized, searchable vaults for town planning permits, engineering reports, and final construction issue drawings.</p>
                                <div className="deliverable-tags"><small>Storage</small><small>Search</small><small>Security</small></div>
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
                            <h2>Elevating the studio experience.</h2>
                        </div>
                        <p>See how we helped a global architectural practice build a seamless digital ecosystem that took them from beautiful portfolio websites to fully integrated client project portals.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Architecture Tech</span>
                                <span>WebGL & Web Portals</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/architecture-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Designing for designers.</h2>
                                <p>We developed a high-performance Next.js portfolio that renders heavy 3D fly-throughs flawlessly, backed by a secure client portal where stakeholders can review plans and sign off on material finishes.</p>
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
                        <h2 id="faq-title">Common questions about architecture & design tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do you handle heavy media files on portfolio sites?</summary>
                            <p>We utilize modern frameworks like Next.js paired with global CDNs and automated image/video compression via services like Cloudinary or Mux. This ensures that even heavy 4K videos and high-res architectural renders load instantly without hurting your SEO.</p>
                        </details>
                        <details>
                            <summary>Can you integrate with our practice management software?</summary>
                            <p>Yes. We frequently integrate web platforms with industry-standard software like Deltek, ArchiSnapper, or BQE Core to automate time-tracking dashboards, project accounting, and CRM functions.</p>
                        </details>
                        <details>
                            <summary>Are client portals secure enough for confidential designs?</summary>
                            <p>Absolutely. We build bespoke portals using enterprise-grade authentication (Auth0/Okta), ensuring that pre-release designs, tender documents, and financial estimates are strictly accessible only to authorized stakeholders.</p>
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
                        <a className="related-card" href="/services/portfolio-and-practice-websites/"><div><small>Marketing</small><h3>Practice Websites</h3><p>Digital portfolios that win major commissions.</p></div><b>Explore portfolios ↗</b></a>
                        <a className="related-card" href="/services/consultations-and-proposal-journeys/"><div><small>Sales</small><h3>Proposal Journeys</h3><p>Streamline the path to a signed contract.</p></div><b>Explore proposals ↗</b></a>
                        <a className="related-card" href="/services/client-project-portals/"><div><small>Collaboration</small><h3>Client Portals</h3><p>Keep clients engaged during the design phase.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/practice-and-service-dashboards/"><div><small>Operations</small><h3>Practice Dashboards</h3><p>Track utilization and practice profitability.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize your practice with <br />bespoke digital tools. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From award-winning portfolios to secure client collaboration portals, we build the technology that powers leading design firms.</p>
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
