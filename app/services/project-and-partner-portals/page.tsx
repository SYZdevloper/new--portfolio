import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/project-and-partner-portals/" },
  title: "Project & Partner Portals | Hyperlink Tech Solutions",
  description: "We develop secure data rooms and collaboration hubs for mining joint ventures, ensuring investors, partners, and government stakeholders have real-time project visibility.",
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
                    <strong>Joint Venture Hubs</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">JV & Investor Portals</div>
                        <p className="eyebrow">Joint Venture Hubs</p>
                        <h1 id="service-title">Align joint-venture partners and stakeholders.</h1>
                        <p className="hero-lead">We develop secure data rooms and collaboration hubs for mining joint ventures, ensuring investors, partners, and government stakeholders have real-time project visibility.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, role-based access for JV partners, off-takers, and government bodies</li>
                            <li>Live data feeds showing project construction progress and capital expenditure</li>
                            <li>Centralized document vaults for feasibility studies, environmental approvals, and board packs</li>
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
                            <small>01 · Institutional Trust</small>
                            <strong>Provide JV partners with the transparency they demand.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Milestones</small>
                            <strong>Track EPC progress against baseline schedules visually.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Secure Vault</small>
                            <strong>Stop emailing highly sensitive financial models and drilling results.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Centralized Comms</small>
                            <strong>Move steering committee approvals out of messy email chains.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When partners fly blind</p>
                        <p>Managing a $500M joint venture via email attachments is a major risk.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Sophisticated capital requires sophisticated reporting.</h2>
                        <p>Major resource projects are rarely funded by a single entity. When you have multiple JV partners, government regulators, and institutional investors, relying on monthly PDF reports breeds anxiety and micromanagement. Stakeholders expect secure, real-time transparency.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Lag</h3>
                                <p>Partners only find out about a processing plant delay when they read the monthly steering committee report.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Scattered Documents</h3>
                                <p>An investor requests a historical environmental impact statement, triggering a frantic search through internal drives.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Version Control</h3>
                                <p>Stakeholders are reviewing outdated capital expenditure forecasts because they missed an email update.</p>
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
                                <h2>Digital control towers for capital.</h2>
                            </div>
                            <p>We build secure, data-rich portals that aggregate operational data into polished stakeholder experiences.</p>
                        </div>

                        <div className="deliverable-grid">
                            
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Live Performance Dashboards</h3>
                                <p>Integrations with your project controls software to show partners live charts of schedule variance and budget burn.</p>
                                <div className="deliverable-tags"><small>Dashboards</small><small>BI</small><small>Data</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted document vaults (AWS S3) with granular permissions, ensuring stakeholders only see data cleared for their role.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Security</small><small>RBAC</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Media Integration</h3>
                                <p>Embeds of drone site-surveys and 3D geological models for immersive remote viewing of the asset.</p>
                                <div className="deliverable-tags"><small>Media</small><small>3D</small><small>Webcams</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Digital Sign-offs</h3>
                                <p>Secure workflows allowing steering committee members to digitally sign off on major variations or budget approvals.</p>
                                <div className="deliverable-tags"><small>E-Sign</small><small>Workflows</small><small>Audit</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Mining Platform</p>
                            <h2>Digitizing remote operations.</h2>
                        </div>
                        <p>See how we helped a Tier 1 mining contractor replace hundreds of paper forms with an offline-first inspection app, syncing directly to their centralized HSE and operations dashboard.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Resources Tech</span>
                                <span>Field Mobility & Telemetry</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/mining-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Connectivity without connection.</h2>
                                <p>We developed an offline-capable React Native application for operators in the Pilbara, allowing them to log pre-start checks and hazards instantly, restoring critical data flows to the Perth head office.</p>
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
                        <h2 id="faq-title">Common questions about mining & resources tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>How do field apps work when the mine site has zero cellular coverage?</summary>
                            <p>We build our mobile applications with 'Offline-First' architecture (using technologies like IndexedDB or SQLite). Workers can capture data, annotate photos, and sign forms completely offline. The app stores the encrypted payload locally and automatically syncs to the server the moment the device hits camp Wi-Fi or a cellular network.</p>
                        </details>
                        <details>
                            <summary>Can you integrate web dashboards with SAP, Maximo, or Pronto?</summary>
                            <p>Yes. We frequently develop secure middleware layers that pull operational data from heavy ERP and asset management systems, translating it into lightweight, high-performance web dashboards for executive viewing, without risking the core database.</p>
                        </details>
                        <details>
                            <summary>How secure are your contractor and joint-venture portals?</summary>
                            <p>Security is paramount for resources projects. We implement SOC2 compliant architectures on AWS/Azure, utilizing strict Role-Based Access Control (RBAC) via Auth0/Okta, ensuring external contractors or JV partners can only access the exact documentation cleared for their role.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other resources capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/corporate-and-capability-platforms/"><div><small>Marketing</small><h3>Capability Platforms</h3><p>Project scale, safety, and operational excellence.</p></div><b>Explore platforms ↗</b></a>
                        <a className="related-card" href="/services/supplier-and-contractor-portals/"><div><small>Procurement</small><h3>Contractor Portals</h3><p>Secure digital onboarding for the supply chain.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-inspection-and-maintenance/"><div><small>Site Operations</small><h3>Field Inspections</h3><p>Digitize the pit, the plant, and the port.</p></div><b>Explore field tools ↗</b></a>
                        <a className="related-card" href="/services/operations-and-hse-dashboards/"><div><small>Executive</small><h3>HSE Dashboards</h3><p>Command center visibility for remote sites.</p></div><b>Explore dashboards ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Modernize operations across <br />your resource portfolio. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From digitizing safety checks at the coal face to giving executives live visibility in Perth, we build the software that keeps the resources sector moving.</p>
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
