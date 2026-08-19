import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/customer-and-investor-portals/" },
  title: "Customer & Investor Portals | Hyperlink Tech Solutions",
  description: "We engineer secure web portals that provide real-time visibility into project milestones, PPA (Power Purchase Agreement) performance, and financial returns for institutional investors.",
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
                    <strong>Stakeholder Portals</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">Investor Dashboards</div>
                        <p className="eyebrow">Stakeholder Portals</p>
                        <h1 id="service-title">Secure environments for off-takers and investors.</h1>
                        <p className="hero-lead">We engineer secure web portals that provide real-time visibility into project milestones, PPA (Power Purchase Agreement) performance, and financial returns for institutional investors.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Secure, role-based access for institutional investors, banks, and corporate off-takers</li>
                            <li>Live data feeds showing project construction progress and operational MW generation</li>
                            <li>Centralized document vaults for financial models, compliance reports, and tax documents</li>
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
                            <strong>Provide pension funds and banks with the transparency they demand.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Live Generation Data</small>
                            <strong>Off-takers can see exactly how much green energy they are drawing.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · Secure Vault</small>
                            <strong>Stop emailing highly sensitive financial models and PPAs.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Automated Reporting</small>
                            <strong>Reduce the overhead of manually compiling monthly investor updates.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When investors fly blind</p>
                        <p>Managing $100M of institutional capital via email attachments is a major risk.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Sophisticated capital requires sophisticated reporting.</h2>
                        <p>Institutional investors and corporate off-takers (like Amazon or Google buying your wind power) expect real-time transparency. If you are managing investor relations through massive email threads and Dropbox links, you risk compliance breaches and client frustration.</p>

                        <div className="problem-grid">
                            
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Information Lag</h3>
                                <p>Investors only find out about a grid-connection delay when they read the monthly PDF report.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Scattered Documents</h3>
                                <p>A bank requests a historical compliance certificate, triggering a frantic search through internal drives.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Manual Overhead</h3>
                                <p>Your finance team wastes three days every month formatting generation data into PowerPoint slides.</p>
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
                                <p>Integrations with your SCADA data lake to show investors live charts of uptime, curtailment, and yield.</p>
                                <div className="deliverable-tags"><small>SCADA</small><small>Charts</small><small>BI</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Secure Data Rooms</h3>
                                <p>Encrypted document vaults (AWS S3) with granular permissions, ensuring LPs only see their specific fund data.</p>
                                <div className="deliverable-tags"><small>AWS</small><small>Security</small><small>RBAC</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Development Timelines</h3>
                                <p>Visual roadmaps tracking EPC milestones, grid connection approvals, and commissioning dates.</p>
                                <div className="deliverable-tags"><small>Timelines</small><small>UX</small><small>Tracking</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>Automated Dividend/Yield Reports</h3>
                                <p>Engines that pull data from your ERP to dynamically generate individual financial statements.</p>
                                <div className="deliverable-tags"><small>ERP</small><small>PDFs</small><small>Finance</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Energy Platform</p>
                            <h2>Powering the transition.</h2>
                        </div>
                        <p>See how we helped a national renewable energy developer digitize their site assessment workflows and build investor-facing ESG dashboards, accelerating capital deployment.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Energy Tech</span>
                                <span>SCADA Integration & Dashboards</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/energy-case-study.webp" alt="Platform Dashboard" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#2a2a2a', minHeight: '300px' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Project Overview</p>
                                <h2>Data-driven infrastructure.</h2>
                                <p>We developed a custom web application that ingests live generation data from solar farms, calculates real-time ESG metrics, and presents them in a secure portal for institutional investors.</p>
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
                        <h2 id="faq-title">Common questions about energy & utility tech.</h2>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Can you integrate with our existing SCADA or BMS systems?</summary>
                            <p>Yes. We regularly build middleware (using Node.js or Python) that securely extracts telemetry data from legacy SCADA systems, normalizes it, and pipes it into modern cloud data warehouses like AWS Redshift or Snowflake for visualization.</p>
                        </details>
                        <details>
                            <summary>Do your field apps work for technicians in remote wind farms?</summary>
                            <p>Absolutely. We specialize in Offline-First Progressive Web Apps (PWAs) and React Native mobile apps. Technicians can log maintenance data, capture photos, and run diagnostic checklists offline; the app will automatically sync payloads once a connection is re-established.</p>
                        </details>
                        <details>
                            <summary>How do you ensure data security for investor portals?</summary>
                            <p>We implement enterprise-grade security protocols, including SOC2 compliant AWS architecture, strict Role-Based Access Control (RBAC) via Auth0 or Okta, and end-to-end encryption to ensure sensitive financial and PPA data is totally secure.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Explore other energy capabilities.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/project-and-capability-websites/"><div><small>Marketing</small><h3>Capability Websites</h3><p>Build public trust and showcase energy capabilities.</p></div><b>Explore websites ↗</b></a>
                        <a className="related-card" href="/services/assessments-and-proposal-workflows/"><div><small>Sales</small><h3>Proposal Workflows</h3><p>Digitize feasibility studies and solar proposals.</p></div><b>Explore workflows ↗</b></a>
                        <a className="related-card" href="/services/customer-and-investor-portals/"><div><small>Stakeholders</small><h3>Investor Portals</h3><p>Secure environments for off-takers and investors.</p></div><b>Explore portals ↗</b></a>
                        <a className="related-card" href="/services/asset-and-maintenance-workflows/"><div><small>Operations</small><h3>Maintenance Apps</h3><p>Keep critical infrastructure online and compliant.</p></div><b>Explore apps ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Digitize your energy <br />infrastructure and operations. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>From automating field maintenance to providing investors with live generation data, we build software that powers the transition.</p>
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
