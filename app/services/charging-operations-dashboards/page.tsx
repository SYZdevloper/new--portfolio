import type { Metadata } from "next";
import Link from "next/link";
import ServiceInteractions from "@/components/services/ServiceInteractions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceLeadSection from "@/components/services/ServiceLeadSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/charging-operations-dashboards/" },
  title: "Charging Operations Dashboards | Hyperlink Tech Solutions",
  description: "Back-office dashboards, remote diagnostics, and network health monitoring for CPOs.",
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
                    <strong>Charging Operations Dashboards</strong>
                </nav>

                <div className="container hero-grid">
                    <div className="hero-copy reveal">
                        <div className="hero-status">CPO Operations Platform</div>
                        <p className="eyebrow">Charging Operations Dashboards</p>
                        <h1 id="service-title">The control center for Charge Point Operators (CPOs).</h1>
                        <p className="hero-lead">We build back-office dashboards that provide total visibility into network health, diagnostics, and revenue.</p>
                        <ul className="hero-points" style={{ listStyle: "none", padding: 0 }}>
                            <li>Identify and resolve hardware faults without a truck roll</li>
                            <li>Unify disparate charger brands into a single pane of glass</li>
                            <li>Proactively dispatch technicians before drivers complain</li>
                        </ul>
                        <div className="hero-actions">
                            <a className="btn primary" href="#contact">Discuss Your Project <span className="arrow">↗</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="proof-bar">
                <div className="container">
                    <div className="proof-bar-inner" aria-label="Platform benefits">
                        <div className="proof-item">
                            <small>01 · Remote Diagnostics</small>
                            <strong>Identify and resolve hardware faults without a truck roll.</strong>
                        </div>
                        <div className="proof-item">
                            <small>02 · Hardware Agnostic</small>
                            <strong>Unify disparate charger brands into a single pane of glass.</strong>
                        </div>
                        <div className="proof-item">
                            <small>03 · High Uptime</small>
                            <strong>Proactively dispatch technicians before drivers complain.</strong>
                        </div>
                        <div className="proof-item">
                            <small>04 · Command & Control</small>
                            <strong>Remotely reboot, update firmware, and manage configurations.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="problems">
                <div className="container content-intro">
                    <aside className="content-intro-aside">
                        <p className="eyebrow">When operations fail</p>
                        <p>Broken chargers destroy driver trust and CPO revenue.</p>
                        <a className="btn" href="#contact">Discuss Strategy <span className="arrow">↗</span></a>
                    </aside>

                    <div className="content-intro-main">
                        <h2>Your support team needs better tools to keep the network alive.</h2>
                        <p>We build back-office interfaces that sit on top of your CSMS, giving your NOC (Network Operations Center) and support teams exactly what they need to maximize uptime.</p>

                        <div className="problem-grid">
                            <article className="problem-card">
                                <span className="problem-card-number">01</span>
                                <h3>Reactive Maintenance</h3>
                                <p>CPOs rely on angry drivers calling support to find out a charger is broken, rather than detecting the fault proactively.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">02</span>
                                <h3>Fragmented Tools</h3>
                                <p>Support teams waste time jumping between five different manufacturer portals to reboot hardware and check logs.</p>
                            </article>
                            <article className="problem-card">
                                <span className="problem-card-number">03</span>
                                <h3>Poor Driver Support</h3>
                                <p>Customer service agents lack the real-time session visibility needed to help a stranded driver start a charge over the phone.</p>
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
                                <h2>High-performance command centers.</h2>
                            </div>
                            <p>We design custom web applications that ingest your OCPP backend data and present it through blazing-fast, actionable interfaces.</p>
                        </div>

                        <div className="deliverable-grid">
                            <article className="deliverable-card">
                                <span>01 · Core</span>
                                <h3>Real-time Telemetry</h3>
                                <p>Live grids showing voltage, temperature, error codes, and connectivity status for every socket in your network.</p>
                                <div className="deliverable-tags"><small>Metrics</small><small>WebSockets</small><small>Status</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>02 · Core</span>
                                <h3>Remote Control</h3>
                                <p>Secure interfaces allowing authorized agents to remotely unlock connectors, start/stop sessions, and hard-reset stations.</p>
                                <div className="deliverable-tags"><small>Commands</small><small>OCPP</small><small>Security</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>03 · Core</span>
                                <h3>Maintenance Ticketing</h3>
                                <p>Automated rules that instantly generate maintenance tickets in Jira/ServiceNow when specific hardware faults are detected.</p>
                                <div className="deliverable-tags"><small>Webhooks</small><small>Integrations</small><small>Ticketing</small></div>
                            </article>
                            <article className="deliverable-card">
                                <span>04 · Core</span>
                                <h3>CSMS Integrations</h3>
                                <p>Custom middleware that pulls data from GreenFlux, Driivz, or AMPECO to build a superior, unified frontend.</p>
                                <div className="deliverable-tags"><small>APIs</small><small>Middleware</small><small>Aggregation</small></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="case-study">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured Operations Platform</p>
                            <h2>Maximizing uptime for a fast-charging network.</h2>
                        </div>
                        <p>See how we helped a CPO consolidate fragmented hardware tools into a single, powerful command center.</p>
                    </div>

                    <div className="case-study-shell">
                        <article className="case-visual" aria-label="Project visual">
                            <div className="case-visual-top">
                                <span>Admin Dashboards</span>
                                <span>Network Health</span>
                            </div>
                            <div className="case-image-wrapper" aria-hidden="true" style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src="/images/783140f6-e050-4228-b409-1e3571188702.webp" alt="Project Visual" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </article>

                        <article className="case-copy">
                            <div>
                                <p className="eyebrow">Remote Diagnostics Hub</p>
                                <h2>Fixing chargers before drivers even notice.</h2>
                                <p>Support teams were relying on driver complaints to discover broken chargers, leading to terrible PR and lost revenue.</p>
                            </div>

                            <div className="case-facts">
                                <div className="case-fact"><small>Challenge</small><strong>Ingest millions of telemetry data points to proactively alert maintenance teams to hardware faults.</strong></div>
                                <div className="case-fact"><small>Approach</small><strong>We built a high-performance React dashboard with real-time alerts, remote reset capabilities, and technician dispatch flows.</strong></div>
                                <div className="case-fact"><small>Result</small><strong>Network uptime increased to 99%, and unnecessary physical truck rolls decreased by 30%.</strong></div>
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
                        <h2 id="faq-title">Questions about CPO dashboards.</h2>
                        <p>Answers covering hardware protocols, data visualization, and architecture.</p>
                    </div>
                    <div className="faq-list">
                        <details open>
                            <summary>Do you build the OCPP backend itself?</summary>
                            <p>We typically integrate with existing OCPP backends (like GreenFlux, Driivz, or custom CSMS systems) via their APIs to build a superior, customized frontend layer for your team.</p>
                        </details>
                        <details>
                            <summary>Can support agents remote-start chargers?</summary>
                            <p>Yes. If your underlying CSMS supports it, we can build secure buttons in the dashboard for agents to remotely start/stop sessions or soft-reset the hardware.</p>
                        </details>
                        <details>
                            <summary>How scalable are these dashboards?</summary>
                            <p>Extremely. We use modern architecture (Next.js, optimized databases, and edge caching) ensuring the dashboard remains snappy whether you manage 50 chargers or 50,000.</p>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section" id="related-services">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Related services</p>
                            <h2>Power your back-office operations.</h2>
                        </div>
                    </div>

                    <div className="related-grid">
                        <a className="related-card" href="/services/admin-panel-development/"><div><small>Internal Tools</small><h3>Admin Panels</h3><p>Custom tools for your support teams.</p></div><b>Explore admin tools ↗</b></a>
                        <a className="related-card" href="/services/dashboard-design/"><div><small>UX Design</small><h3>Dashboard Design</h3><p>Make complex telemetry data easy to read.</p></div><b>Explore design ↗</b></a>
                        <a className="related-card" href="/services/api-integration-development/"><div><small>Systems</small><h3>API Integration</h3><p>Connect your frontend to your CSMS backend.</p></div><b>Explore integration ↗</b></a>
                        <a className="related-card" href="/services/custom-saas-development/"><div><small>Platform</small><h3>SaaS Development</h3><p>White-label your operations software.</p></div><b>Explore SaaS ↗</b></a>
                    </div>
                </div>
            </section>

            <ServiceLeadSection />

            <section className="big-cta">
                <div className="container">
                    <h2>Take control of your <br />charging network. <span className="orb-icon" aria-hidden="true"></span></h2>
                    <div className="big-cta-row">
                        <p>Ready to give your operations team the tools they need to maximize uptime? Let's discuss your CPO dashboard.</p>
                        <a className="btn" href="#contact">Discuss Your Dashboard <span className="arrow">↗</span></a>
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
